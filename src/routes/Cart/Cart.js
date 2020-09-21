import React from 'react'

import { NavBar, Icon } from 'antd-mobile';
import { axiosGoodDetails,fetchGoodList } from '@/utils/kbapi.js'

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
            id:'6918661798452982548'
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
        this.setState({goods:JSON.parse(localStorage.getItem('item'))})
        
        if(localStorage.getItem('token')){
            console.log('已登录')
        }else{
            console.log('未登入')
        }
        fetchGoodList({
            app_name:'shop_wap',
            api_key:'8cec5243ade04ed3a02c5972bcda0d3f',
            mobile_platform:2,
            source_app:'yd_wap',
            warehouse:'VIP_NH',
            fdc_area_id:'104104103',
            province_id:'104104',
            mars_cid:'1600313890881_03d0e3b1cafd34a7a1f6919d5002d450',
            mobile_channel:'mobiles-adp:v3i9njah::::||',
            standby_id:'nature',
            channelId:1,
            gPlatform:'WAP',
            mvip:true,
            _:'1600668557'
        }).then(res=>{
            console.log('唯品会接口',res)
        })
        
    }
    createShopCart(){

    }
    render(){
        let { goods } =this.state
        console.log(goods)
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                >确认订单</NavBar> 
                <KBSecure></KBSecure>
                <KBLocation></KBLocation>
                <div>
                    <h1>唯品自营</h1>
                    <div>
                        <div>
                            <img src="" alt=""/>
                        </div>
                        <div>
                            <title>456456</title>
                            
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        )
    }
}