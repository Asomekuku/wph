import React from 'react'
import {getSnapLeft , getSnap ,snapList} from '../../store/actions/snapAction'
import './snap.scss'
import {connect} from 'react-redux'
import {shoppingList} from '@/utils/api'

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
        this.SnapLeftFn()    
        this.fenqFN()  //内容
       
        shoppingList({
            app_name: 'shop_wap',
            app_version: 4.0,
            api_key: '8cec5243ade04ed3a02c5972bcda0d3f',
            mobile_platform: 2,
            source_app: 'yd_wap',
            warehouse: 'VIP_NH',
            fdc_area_id: 104104101,
            province_id: 104104,
            mars_cid: '1600340640947_df6bdb3024177fc2256b38275ed898b8',
            mobile_channel: 'mobiles-adp:g1o71nr0::::||',
            standby_id: 'nature',
            productIds: '6918415614107488400,6918405402752087248,6918885220223547984,6918415613938974864,6918047585324320720,6918447703327270544,6918446187546097296,6918640360821720976,6918453415009219600,6918367931786552912,6918415613938892944,6918899492263884176,6918447703344109200,6918425730585002448,6918615770747581072,6918911469257063056,6918834324978972176,6918706921386758608,6918719774095045072,6918415613955788944',
            scene: 'brand',
            extParams: {"preheatTipsVer":"3","subjectId":"100751918","brandId":"100751918","couponVer":"v2","multiBrandStore":"0","exclusivePrice":"1","iconSpec":"3x"},
            context: {"615":"0","872":"0"},
            priceScene: 'future',
            mvip: true,
            _: 1600934553,
        }).then(res=>{
            console.log(res)
        })
    }
   
    //fenqFN
    fenqFN(arr){
        //接口
       //转字符串进行传参
        let arr1=[100779186,100755633,100755323,100752008,100753509,100752573,100755853,100755748,100752007,100752201,100752203,100752951,100752410,100714744,100752309,100779925,100757267,100752379,100757182,100752014,100752143,100760104,100754193,100761027,100752774,100765073,100751868,100752593,100752459,100754700,100760938,100745857,100752406,100709859,100754279,100751980,100717421,100754703,100752984,100755109]
        // arr ? arr : arr1
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
     
        this.setState(state=>({index:idx}))
       if(this.props.spanLeftList.length){ 
                //滚轮向下滚动，渲染数据
                let arr=this.props.spanLeftList[idx].brandIds    //获取相应的id
                arr=arr.split(',')   //转数组
                let arr1=arr.slice(0,30) //数据
                //调接口
                this.fenqFN(arr1)
            
        }
    }
    //创建右边内容
    createSnapList(){
        if(true){
            return this.props.fengqList.map(ele=>(      
                <div key={ele.brand.brand_image}>
                    <img src={ele.brand.square_image} alt=''/>
                    <img src={ele.brand.logo} alt=''/>
                    <div>{ele.brand.product_count}款新货</div>
                    <span>
                        {ele.goodsName}
                    </span>
                </div>
            ))
            
        }
     
    }
 
   
    render(){
       let {index} = this.state
       console.log(this.props.spanLeftList)
       console.log(this.props.fengqList)
       let i=0
       let {spanLeftList} = this.props
      
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
                    <div className='two'>
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
export default connect(mapState,mapAction)(Snap)
