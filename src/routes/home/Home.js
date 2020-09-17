import React from 'react'
import './home.scss'
import { Carousel } from 'antd-mobile';
import { KBTabBar,KBHeader } from '@/components/'
import axios from 'axios'

import { getHomeSlideshow,getCatItems,getfloordata } from '@/store/actions/homeAction'

//引入这个高阶函数
import { connect } from 'react-redux'

//共享state中的数据，可以用this.props进行访问
function mapStateToProps(store){
    return{
        slideshow:store.home.slideshow,
        CatItems:store.home.CatItems,
        FloorData:store.home.floordata
    }
}

//把action生成器方法，映射到props上面
function mapActionToProps(dispatch){
    return {
        //轮播图的
        init:(params)=>dispatch(getHomeSlideshow(params)),
        //分类的
        catitem:(params)=>dispatch(getCatItems(params)),
        //专区图片的
        floordata:(params)=>dispatch(getfloordata(params))
    }
}

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            imgHeight: 170,
        }
    }
    //挂载完成调接口
    componentDidMount() {
        this.props.init({})
        this.props.catitem({})
        this.props.floordata({})
        axios.get('http://api.tbk.dingdanxia.com/vip/goodsList',{
            params:{
                apikey:'DDbZ1rBSQtpwjrFtkJwQiiPGHulLoIN1',
                channelType:0,
                page:1
            }
        }).then(res=>{
            console.log(res)
        })
    }
    //生成分类
    createClassify(){
        return this.props.CatItems.map((ele,idx)=>(
            <div key={idx}>
                <img src={ele.image_src} alt=""/>
                <span></span>
            </div>
        ))

    }
    cele(arr){
        let newarr = JSON.parse(JSON.stringify(arr))
        newarr.splice(0,1)
        return newarr.map(ele=>(
            <div key={ele.name}><img src={ele.image_src} alt=""/></div>
        ))
    }
    //生产专区图片
    createFloorData(){
        return this.props.FloorData.map((ele,idx)=>(
            <div key={idx}>
                <h1><img src={ele.floor_title.image_src} alt=""/></h1>
                <div className="prefecture">
                    <div><img src={ele.product_list[0].image_src} alt=""/></div>
                    <div>
                        {this.cele(ele.product_list)}
                    </div>
                </div>
            </div>
        ))
    }
    render(){
        // console.log(this.props)
        let { slideshow }=this.props
        return (
            <div className="kb-home">
                <KBHeader></KBHeader>
                {/* 头部标题 */}
                {/* <div className="home-title">
                    优购商场
                    <div className="title-but">
                        <span>...</span>
                        <span>O</span>
                    </div>
                </div> */}

                {/* 搜索框 */}
                {/* <div className="search">
                    <div className="search-box">搜索</div>
                </div> */}

                {/* 轮播图 */}
                <div className="slideshow">
                    <Carousel
                    autoplay={false}
                    infinite
                    >
                    {slideshow.map(val => (
                        <a
                        key={val}
                        href={val.image_src}
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                        <img
                            src={val.image_src}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                        />
                        </a>
                    ))}
                    </Carousel>
                
                </div>
                
                {/* 分类 */}
                <div className="classify">   
                    {this.createClassify()}
                </div>
                
                {/* 图片列表 */}
                <div className="imgslist">
                    {this.createFloorData()}
                    {/* <div>
                       <h1>img</h1>
                       <div className="prefecture">
                           <div></div>
                           <div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                           </div>
                       </div>
                    </div> */}
                </div>
                <KBTabBar></KBTabBar>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapActionToProps)(Home)