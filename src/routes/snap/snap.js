import React from 'react'
import {getSnapLeft , getSnap ,snapList} from '../../store/actions/snapAction'
import './snap.scss'
import {connect} from 'react-redux'
class Snap extends React.Component{
    constructor(props){
        super(props)
        this.state={
            changeTypeNum:0,
            index:0,//导航下标

        }
    }
    componentDidMount(){
        //数据接口
        this.rightList()

        //左边导航 
        this.SnapLeftFn()
    
      
    }
    //创建掉接口左边
    SnapLeftFn(){
        this.props.getSnapLeft_d({
            first_page_size: 20,
            extra_brand_id: '',
            api_key: '8cec5243ade04ed3a02c5972bcda0d3f',
            warehouse: 'VIP_NH',//1
            client: 'wap',
            product_num: 4,
            mars_cid: '1600340640947_df6bdb3024177fc2256b38275ed898b8',
            mobile_platform: 2,
            fdc_area_id: 104104101,
            platform: 2,
            app_version: 1.0,
            time: 0,
            is_front: 1
        })
    }
    //右边内容Fn
    rightList(idx){
        this.props.getsnapList({
            apikey:'e66p5gkSEl3lmPJ4bV28mbUe8I78ewhX',
            channelType:this.state.changeTypeNum,
            page:idx ? idx+1 : 1
        })
    }
    //创建左边导航
    createLeft(){
       return this.props.spanLeftList.map((ele,idx)=>(
            <div key={ele.dept_id} 
                style={this.state.index===idx ? {'borderLeft':'3px solid red','backgroundColor':'#F3F4F5'} : {border:'none'}}
                onClick={this.click.bind(this,idx)}
                >
                    <span>
                        {ele.tab_name}
                    </span>
            </div>
        ))
        
    }
    //点击导航
    click(idx){
        this.setState({
            index:idx
        })
        if(idx<5){
            this.rightList(idx)
        }
    }
    //创建右边内容
    createSnapList(){
        if(true){
            return this.props.snapList.map(ele=>(      
                <div key={ele.goodsThumbUrl}>
                    <img src={ele.goodsThumbUrl} alt=''/>
                    <span>
                        {ele.goodsName}
                    </span>
                </div>
            ))
            
        }
       
        
    }
    render(){
        let {spanLeftList} =this.props 
        return(
            <div className='kk_snap'>
                {/* 左 */}
                <div className='snap_one'>
                    {this.createLeft()}
                    
                </div>
                {/* //右 */}
                <div className='two'>
                    <p>{spanLeftList.length ? spanLeftList[this.state.index].tab_name : ''}</p>
                    {this.createSnapList()}
                </div>
            </div>
        )
    }
}
function mapState(store){
    return{
        spanLeftList:store.snap.spanLeftList,
        snapList:store.snap.snapList
    }
}
function mapAction(dispatch){
    return{
        getSnapLeft_d:(params)=>dispatch(getSnapLeft(params)),
        getSnap_d:(params)=>dispatch(getSnap(params)),
        getsnapList:(params)=>dispatch(snapList(params))
    }
}
export default connect(mapState,mapAction)(Snap)
