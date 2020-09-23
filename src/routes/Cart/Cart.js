import React from 'react'
import './cart.scss'

//引入这个高阶函数
import { connect } from "react-redux";
import { goodAdd,goodSub,getGoods,goodDel,time } from "../../store/actions/goodAction";

import { NavBar, Icon } from 'antd-mobile';

import { KBSecure,KBLocation,NoGoods } from '@/components/'

function mapStateToProps(store) {
    return {
        goods:store.good.goods,
        minute:store.good.minute,
        second:store.good.second
    };
  }
  //把action生成器方法，映射到props上面
  function mapActionToProps(dispatch) {
    return {
        getGoods:(params)=>dispatch(getGoods(params)),
        goodAdd:(idx)=>dispatch(goodAdd(idx)),
        goodSub:(idx)=>dispatch(goodSub(idx)),
        goodDel:(idx)=>dispatch(goodDel(idx)),
        time:()=>dispatch(time())
    };
  }

class Cart extends React.Component{
    constructor(props){
        super(props)
        this.state={
            user:false, //判断用户登录了没
        }
    }
    componentDidMount(){
        if(localStorage.getItem('token')){
            console.log('已登录')
            this.setState({user:true})      //打开开关

            //获取假数据
            this.props.getGoods({
                apikey:'e66p5gkSEl3lmPJ4bV28mbUe8I78ewhX',
                id:'6918181929819039310'
            })
        }else{
            console.log('未登入')
        }

        setInterval(()=>{
            this.props.time()
            // console.log(`多少分${this.props.minute}多少秒${this.props.second}`)
        },1000)
        this.setState({isTime:true})
        
        
        
        // let date_over = date
    }
    createShopCart(){
        // console.log(this.props.goods)
        return this.props.goods.map((ele,idx)=>(
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
                        <span onClick={this.dian.bind(this,false,idx) }><i className="iconfont icon-jian"></i></span>
                        <span><input onChange={()=>{console.log('change')}} value={ele.good_num} type="text"/></span>
                        <span onClick={this.dian.bind(this,true,idx)}><i className="iconfont icon-jia"></i></span>
                    </li>
                </ul>
                <div>
                    <span>￥{ele.vip_price}</span>
                    <div onClick={()=>{this.props.goodDel(idx)}}>
                        <i className="iconfont icon-cuo"></i>
                    </div>
                </div>
                
            </div>
        ))
    }
    jump(){
        this.props.history.push('/login/'+123)
    }
    count(){
        let num=0
        this.props.goods.map(ele=>{
            num+=parseInt(ele.vip_price)*ele.good_num
            return null
        })
        return num
    }
    dian(bol,idx){
        if(bol){
            this.props.goodAdd(idx)
        }else{
            this.props.goodSub(idx)
        }
    }
    render(){
        let { user } =this.state
        let { goods } = this.props
        // console.log('状态管理goods',goods)
        
        return (
            <div className="cart">
                {/* 三目运算符判断是否登入成功来显示对应的页面 */}

                {goods.length
                ?   (<>
                        <NavBar
                            mode="light"
                            icon={<Icon type="left" />}
                            onLeftClick={() => this.props.history.go(-1)}
                            >确认订单{`还剩${this.props.minute}分${this.props.second}`}</NavBar> 
                        <KBSecure></KBSecure>
                        <KBLocation></KBLocation>
                        <div className="goods_list">
                            <h1>唯品自营</h1>
                            {this.createShopCart()}
                        </div>
                        <div className="goods_price">￥{this.count()}</div>
                        <div className="yhq">
                            <span>使用优惠券</span>
                            <Icon type="right" />
                        </div>
                        <div>
                            <span>订单金额</span>
                            <em>￥{this.count()}</em>
                        </div>
                        <div>
                            <span>商品总金额</span>
                            <em>￥{this.count()}</em>
                        </div>
                        <div>
                            <span>还需支付：<em>￥{this.count()}</em></span>
                            <div>在线支付</div>
                        </div>
                    </>)
                :   ( user
                    ?   (   <NoGoods></NoGoods>)
                    :   (   <div className="no-login">
                                <h1>未登录</h1>
                                <button onClick={this.jump.bind(this)}>去登录</button>
                            </div>)
                    )
                }
            </div>
        )
    }
}

export default connect(mapStateToProps, mapActionToProps)(Cart);