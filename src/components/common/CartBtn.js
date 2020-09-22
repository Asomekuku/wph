import React from 'react'
import { withRouter } from 'react-router-dom'
import './cartbtn.scss'


class CartBtn extends React.Component{
    
    render(){
        // console.log(this.props)
        return (
            <div className="cart-btn">
                {/* 去购物车按钮 */}
                <div onClick={()=>this.props.history.push('/cart')}>
                    <i className="iconfont icon-gouwuche"></i>
                </div>
            </div>
        )
    }
}

export default withRouter(CartBtn)