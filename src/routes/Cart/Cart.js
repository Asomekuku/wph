import React from 'react'
import './cart.scss'

//引入这个高阶函数
import { connect } from "react-redux";
import { goodAdd,goodSub,goodDel,time } from "../../store/actions/goodAction";

import { NavBar, Icon,Modal, List,Checkbox, } from 'antd-mobile';

import { KBSecure,KBLocation,NoGoods } from '@/components/'
import { withRouter } from 'react-router-dom'
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
        goodAdd:(idx)=>dispatch(goodAdd(idx)),
        goodSub:(idx)=>dispatch(goodSub(idx)),
        goodDel:(idx)=>dispatch(goodDel(idx)),
        time:()=>dispatch(time())
    };
  }
  const CheckboxItem = Checkbox.CheckboxItem;
// const AgreeItem = Checkbox.AgreeItem;

class Cart extends React.Component{
    constructor(props){
        super(props)
        this.state={
            user:false, //判断用户登录了没
            list_data : [
                { value: 0,check:false,num:20, label: '优惠20元' },
                { value: 1,check:false,num:500, label: '优惠500元' },
                { value: 2,check:false,num:99999999999999, label: '不要钱' },
            ],
            bol:true
        }
        this.timer=null
    }
    componentDidMount(){
        if(localStorage.getItem('token')){
            console.log('已登录')
            this.setState({user:true})      //打开开关
            
        }else{
            console.log('未登入')
        }

        if(this.state.bol && this.props.goods.length){
           this.timer= setInterval(()=>{
                this.props.time()
                this.setState({bol:false})
            },1000)
            this.setState({isTime:true})
        }
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    //根据数据生成商品
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
    //跳转地址(登录页面)
    jump(){
        this.props.history.push('/login/'+123)
    }
    //计算总价
    
    count(){
        let num=0
      
        this.props.goods.map(ele=>{
            num+=parseInt(ele.vip_price)*ele.good_num
            return null
        })
        return num
    }
   
    //商品增加与减少
    dian(bol,idx){
        if(bol){
            this.props.goodAdd(idx)
        }else{
            this.props.goodSub(idx)
        }
    }
    closest(el, selector) {
        const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
        while (el) {
          if (matchesSelector.call(el, selector)) {
            return el;
          }
          el = el.parentElement;
        }
        return null;
      }
    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
          [key]: true,
        });
      }
      onClose = key => () => {
        this.setState({
          [key]: false,
        });
      }
      
    //好像是兼容
    onWrapTouchStart = (e) => {
    // fix touch to scroll background page on iOS
    if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
        return;
    }
    const pNode = this.closest(e.target, '.am-modal-content');
    if (!pNode) {
        e.preventDefault();
    }
    }
    //选优惠券
    onChange = (val) => {
        this.state.list_data[val].check=!this.state.list_data[val].check
        let obj=this.state.list_data
        this.setState({
            list_data:obj
        })
    
    }

    //算折扣后的价格
    UseCoupons(){
        let money=0
        this.state.list_data.map(ele=>{
            if(ele.check){
            money+=ele.num
            }
        })

        //判断是否使用优惠券
        if(this.count()-money<0){
            money=0
        }else{
            money=this.count()-money
        }
        return money
    }

    render(){
        let { user,list_data } =this.state
        let { goods } = this.props
        console.log('状态管理goods',goods)
        
        return (
            <div className="cart" ref="bodyBox2">
                {/* 三目运算符判断是否登入成功来显示对应的页面 */}

                {goods.length
                ?   (<>
                        {/* 头部 */}
                        <NavBar
                            mode="light"
                            icon={<Icon type="left" onClick={()=>this.props.history.go(-1)}/>}
                        >确认订单{`还剩${this.props.minute}分${this.props.second}`}
                        </NavBar> 

                        {/* 安全提示 */}
                        <KBSecure></KBSecure>

                        {/* 设置地址 */}
                        <KBLocation></KBLocation>

                        {/* 购物车商品列表 */}
                        <div className="goods_list">
                            <h1>唯品自营</h1>
                            {this.createShopCart()}
                        </div>

                        {/* 总价显示 */}
                        <div className="goods_price">￥{this.count()}</div>

                        {/* 使用优惠券按钮 */}
                        <div onClick={this.showModal('modal2')} className="yhq">
                            <span>使用优惠券</span>
                            <Icon type="right" />
                        </div>


                        {/* 优惠券弹出框 */}
                        <Modal
                        popup
                        visible={this.state.modal2}                     //对话框默认是显示还是隐藏，默认为false
                        onClose={this.onClose('modal2')}                
                        animationType="slide-up"                        //从哪弹出
                        afterClose={()=>{this.UseCoupons()}}     //关闭之后的回调函数
                        >
                            <div className="discount">
                                <div>
                                    <h1>使用优惠券</h1>
                                    <i onClick={this.onClose('modal2')} className="iconfont icon-cuo"></i>
                                </div>
                                <div>
                                <List>
                                    {list_data.map(i => (
                                    <CheckboxItem key={i.value} checked={i.check} onChange={() => this.onChange(i.value)}>
                                        {i.label}
                                    </CheckboxItem>
                                    ))}
                                    
                                </List>
                                </div>
                                <div onClick={this.onClose('modal2')}>
                                    <h2>确定</h2>
                                </div>
                            </div>
                        </Modal>
                        {/* 优惠券弹出框 */}


                        
                        <div>
                            <span>订单金额</span>
                            <em>￥{this.UseCoupons()}</em>
                        </div>
                        <div>
                            <span>商品总金额</span>
                            <em>￥{this.UseCoupons()}</em>
                        </div>
                        <div>
                            <span>还需支付：<em>￥{this.UseCoupons()}</em></span>
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

export default connect(mapStateToProps, mapActionToProps)(withRouter(Cart));


{/* <List renderHeader={() => <div>委托买入</div>} className="popup-list">
        {['股票名称', '股票代码', '买入价格'].map((i, index) => (
            <List.Item key={index}>{i}</List.Item>
        ))}
        <List.Item>
            <Button type="primary" onClick={this.onClose('modal2')}>买入</Button>
        </List.Item>
    </List> */}