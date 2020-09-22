import React from 'react'
import './cart.scss'

import { NavBar, Icon } from 'antd-mobile';
import { axiosGoodDetails } from '@/utils/api'

import { KBSecure,KBLocation } from '@/components/'

export default class Cart extends React.Component{
    constructor(props){
        super(props)
        this.state={
            goods:[]
        }
    }
    async componentDidMount(){
        localStorage.setItem('token','123456')
        let arr = await axiosGoodDetails({
            apikey:'e66p5gkSEl3lmPJ4bV28mbUe8I78ewhX',
            id:'6918181929819039310'
        })
        // console.log(arr.data.data)
        let data = {
            img:arr.data.data.goodsMainPicture,
            shop_title:arr.data.data.storeInfo,
            title:arr.data.data.goodsName,
            market_price:arr.data.data.marketPrice,
            vip_price:arr.data.data.vipPrice
            
        }
        localStorage.setItem('item',JSON.stringify(data))
        this.setState({goods:[JSON.parse(localStorage.getItem('item'))]})
        
        if(localStorage.getItem('token')){
            console.log('已登录')
        }else{
            console.log('未登入')
        }
        
        
    }
    createShopCart(){
        let { goods } =this.state
        console.log(goods)
        return this.state.goods.map((ele,idx)=>(
            <div key={idx} className="cart_good">
                <div>
                    <img src={ele.img} alt=""/>
                </div>
                <ul>
                    <li>{ele.title}</li>
                    <li>规格xxxxxxxx</li>
                    <li>
                        <em>7天可退</em><em>退换无忧</em>
                    </li>
                    <li>
                        <span><i className="iconfont icon-jian"></i></span>
                        <span><input onChange={()=>{console.log('change')}} value="1" type="text"/></span>
                        <span><i className="iconfont icon-jia"></i></span>
                    </li>
                </ul>
                <div>
                    <span>￥{ele.vip_price}</span>
                    <div>
                        <i className="iconfont icon-cuo"></i>
                    </div>
                </div>
                
            </div>
        ))
    }
    render(){
        let { goods } =this.state
        console.log(goods)
        return (
            <div className="cart">
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                >确认订单</NavBar> 
                <KBSecure></KBSecure>
                <KBLocation></KBLocation>
                <div className="goods_list">
                    <h1>唯品自营</h1>
                    {this.createShopCart()}
                </div>
                <div className="goods_price">￥116</div>
                <div className="yhq">
                    <span>使用优惠券</span>
                    <Icon type="right" />
                </div>
                <div>
                    <span>订单金额</span>
                    <em>￥178</em>
                </div>
                <div>
                    <span>商品总金额</span>
                    <em>￥178</em>
                </div>
                <div>
                    <span>还需支付：<em>￥178</em></span>
                    <div>在线支付</div>
                </div>
            </div>
        )
    }
}