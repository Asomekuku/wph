import React, { Component } from 'react'
import sty from './anspchild.module.scss'
import {connect} from 'react-redux' 
import {HTabBar} from '@/components/'
import {getSnap , getSnapLeft} from '@/store/actions/snapAction'
import {withRouter} from 'react-router-dom'
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile'
function mapState(store){
    return{
        fengqList:store.snap.fengqList,//官网数据
        spanLeftList:store.snap.spanLeftList,
        snapList:store.snap.snapList
    }
}
function mapAction(dispatch){
    return{
        getsnap_d:(params)=>dispatch(getSnap(params)),
        getSnapLeft_d:(params)=>dispatch(getSnapLeft(params))
    }
}
 class anspChild extends Component {
     constructor(props){
         super(props)
         this.state={
            screenArr:[
                {id:1,text:'价格'},
                {id:2,text:'折扣'},
                {id:3,text:'销量'},
                {id:4,text:'筛选'},
            ],
           
         }
     }
     componentDidMount(){
        this.createList()
     }
     //创建筛选
     createScreen(){
        return this.state.screenArr.map(ele=>(
             <div key={ele.id}>
                 {ele.text}
             </div>
         ))
     }
     //页面不见了
      loadingToast() {
        Toast.loading('Loading...', 1, () => {
       
        });
      }
     //创建元素
     createList(){
         let index=this.props.match.params.index
     
         if(this.props.fengqList.length){
            return   this.props.fengqList[index].products.map(ele=>(
                <div key={ele.square_image}>
                    <img src={ele.square_image} alt='' onClick={this.goDetail.bind(this,ele.product_id)}/>
                    <div className={sty.price}>    
                        <span>特卖价</span>
                        <span>￥{ele.promotion_price}</span>
                        <span>{ele.market_price}</span>
                        <span>{ele.discount}折</span>
                    </div>
                    <div className={sty.text}>
                        {ele.product_title}
                    </div>
                </div>
            ))
         }else{
             return <img className={sty.gif} src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601014684799&di=991b0525a0068cbea53d73b4a8a9be08&imgtype=0&src=http%3A%2F%2Fhbimg.huabanimg.com%2F3fee54d0b2e0b7a132319a8e104f5fdc2edd3d35d03ee-93Jmdq_fw658' alt=''/>
         }

     }
     //去详情页面
     goDetail(id){
        this.props.history.push('/good/detail/'+id)
     }
    render() {
       
 

        return (
            <div className={sty.snapchild_box}>
                {/* 头部 */}
                <HTabBar/>
                {/* 筛选 */}
                <div className={sty.screen}>
                    {this.createScreen()}
                </div>
                {/* 内容区域 */}
                <div className={sty.content}>
    
                    {this.createList()}
                  
                </div>
            </div>
        )
    }
}
export default connect(mapState,mapAction)(withRouter(anspChild))
