import React from 'react'
import { NavBar, Icon } from 'antd-mobile';
import img from '@/utils/img'
import { withRouter } from 'react-router-dom'

function NoGoods(props){
    return (
        <div className="no-cart-goods">
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => props.history.go(-1)}
            >购物车</NavBar>
            <div className="cart-show">
                <img src={img.cart_bg} alt=""/>
                <img src={img.cart} alt=""/>
                <div>购物车空空如也</div>
                <div>去抢购</div>
            </div>
        </div>
    )
}

export default withRouter(NoGoods)
