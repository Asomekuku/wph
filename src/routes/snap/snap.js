import React from 'react'
import {getSnapLeft , getSnap ,snapList} from '../../store/actions/snapAction'
import LazyLoad, { lazyload } from 'react-lazyload'
import './snap.scss'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class Snap extends React.Component{
    constructor(props){
        super(props)
        this.state={  
            changeTypeNum:0,
            index:0,//导航下标  
   
        }
     
    }
    componentDidMount(){
        //左边导航 
        this.SnapLeftFn()  //左导航
        this.fenqFN()  //内容
    }
    
    
    //fenqFN
    fenqFN(arr){
        //接口
       //转字符串进行传参
        let arr1=[100779186,100755633,100755323,100752008,100753509,100752573,100755853,100755748,100752007,100752201,100752203,100752951,100752410,100714744,100752309,100779925,100757267,100752379,100757182,100752014,100752143,100760104,100754193,100761027,100752774,100765073,100751868,100752593,100752459,100754700,100760938,100745857,100752406,100709859,100754279,100751980,100717421,100754703,100752984,100755109]
        if(arr){
             arr=arr
        }else{
            arr=arr1
        }
        if(arr){
            arr=arr.join(',')
            this.props.getSnap_d({
                dept_id: '3,337',
                brands_id: arr ,
                api_key: '8cec5243ade04ed3a02c5972bcda0d3f',
                warehouse: 'VIP_NH',
                client: 'phone',
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
     
       if(this.props.spanLeftList.length){ 
                //滚轮向下滚动，渲染数据
                let arr=this.props.spanLeftList[idx].brandIds    //获取相应的id
                arr=arr.split(',')   //转数组
                this.state.num ? this.setState(state=>({num:state.num}))  : this.setState(state=>({num:10}))

                // let arr1=arr.slice(0,30) //数据   
                //调接口
                this.fenqFN(arr)
                 this.setState(state=>({index:idx}))

        }
    }
    //创建右边内容
    createSnapList(){
        if(true){
            return this.props.fengqList.map((ele,index)=>(     
                
                    <div key={ele.brand.brand_image}
                        onClick={this.gosnapChild.bind(this,index)}
                    >
                        <LazyLoad height={80} overflow={true}>
                            <img src={ele.brand.square_image} alt=''/>
                            <img src={ele.brand.logo} alt=''/>
                        </LazyLoad>
                        
                        <div>{ele.brand.product_count}款新货</div>
                        <span>
                            {ele.goodsName}
                        </span>
                    </div>
                
            ))
            
        }
     
    }
    shouldComponentUpdate(a,b){
        console.log(a,b)
        return true
    }
    // </LazyLoad><LazyLoad height={200} overflow={true}> 
    //去到子页面
    gosnapChild(index){
        this.props.history.push('/snapchild/'+index)
    }
   
    render(){
       let {index} = this.state
       let {spanLeftList} = this.props
      console.log(this.props)
        return(
            <div className='snap_box'>
                {/* 上 */}
                <div className='snap_top'>
                    <img src='https://h2.appsimg.com/b.appsimg.com/upload/mst/2020/09/22/154/ea56b5cb623e1a13dd3398f46864f30c.jpg!75.webp' alt=''/>
                    
                </div>

                {/* 下 */}
                <div className='kk_snap'>
                    {/* 左 */}
                    <div className='snap_one'>
                        {this.createLeft()}
                        
                    </div>
                    {/* //右 */}
                    <div className='two'
                        
                    >
                        <p>{spanLeftList.length ? spanLeftList[index].tab_name : ''}</p>
                        {/* 右边内容 */}
                        {this.createSnapList()}
                        
                    </div>

                </div>
            </div>
        )
    }
}
function mapState(store){
    return{
        spanLeftList:store.snap.spanLeftList,//左边导航
        fengqList:store.snap.fengqList,//官网数据
    }
}
function mapAction(dispatch){
    return{
        getSnapLeft_d:(params)=>dispatch(getSnapLeft(params)),//左边导航
        getSnap_d:(params)=>dispatch(getSnap(params)),
        getsnapList:(params)=>dispatch(snapList(params))
    }
}
export default connect(mapState,mapAction)(withRouter(Snap))
