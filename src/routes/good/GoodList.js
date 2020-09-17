import React from 'react'
import './goodlist.scss'
import { KBTabBar,KBHeader } from '@/components/'

import { getgoodlist,goodchildupd } from '@/store/actions/goodAction'

//高阶函数
import { connect } from 'react-redux'
// import { goodchildupd } from '../../store/actions/goodAction'

//共享state
function mapStateToProps(store){
    return{
        good_list:store.good.list,
        listChild:store.good.listChild
    }
}

//把action构造器上的方法映射进来
function mapActionToProps(dispatch){
    return {
        goodList:(params)=>dispatch(getgoodlist(params)),
        goodchildupd:(payload)=>dispatch(goodchildupd(payload))
    }
}

class GoodList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list_index:0
        }
    }

    componentDidMount(){
        this.props.goodList({})
    }
    //创建分类列表
    createGoodList(){
        console.log(this.state.list_index)
        return this.props.good_list.map((ele,idx)=>(
            <div key={ele.cat_id} className={this.state.list_index===idx ? 'on' : ''} onClick={this.changelistchild.bind(this,ele.cat_id,idx)}>{ele.cat_name}</div>
        ))
    }
    //改listchild
    changelistchild(id,idx){
        this.setState({list_index:idx})
        this.props.goodchildupd({id:id})
    }
    //创建右边的商品
    createGood(){
        if(this.props.listChild.children){
            console.log('有',this.props.listChild.children)
            return this.props.listChild.children.map(ele=>(
                <div key={ele.cat_id} >
                    <h5>{ele.cat_name}</h5>
                    <div>
                        {this.creareGood2(ele.children)}
                    </div>
                </div>
            ))
        }
    }
    creareGood2(arr){
        if(arr){
            return arr.map(ele=>(
                <div key={ele.cat_id} onClick={this.jumpSite.bind(this,ele.cat_id)}><img src={ele.cat_icon} alt=""/></div>
            ))
        }
    }
    //跳到商品详情
    jumpSite(id){
        this.props.history.push('/good/catlist')
    }
    render(){
        console.log(this.props.listChild)
        return (
            <div className="good-goodlist">

                <KBHeader></KBHeader>

                <div className="good_list_cat">
                    {this.createGoodList()}
                </div>
                <div className="good_children">
                    {this.createGood()}
                </div>
                
                <KBTabBar></KBTabBar>

            </div>
        )
    }
}

export default connect(mapStateToProps,mapActionToProps)(GoodList)