import React from 'react'
import { LeftOutlined , HomeOutlined , WalletOutlined ,SolutionOutlined , LayoutOutlined} from '@ant-design/icons'
import myVip from "../../assets/image/myVip.png"
import './my.scss'
import { List } from 'antd-mobile'
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile'
import {logout} from '@/utils/api'
import {withRouter} from 'react-router-dom'
const Item = List.Item;

 class My extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userName:'',
            bol:localStorage.getItem('token'),
            list:[
                {id:1,text:'我的收藏'},
                {id:2,text:'购物车历史'},
                {id:3,text:'浏览历史'},
                {id:4,text:'申请退换'},
                {id:5,text:'零钱'},
                {id:6,text:'唯品花'},
                {id:7,text:'优惠券'},
                {id:8,text:'我的唯品币'},
                {id:9,text:'收货地址'},
                {id:10,text:'修改登录密码'},
                {id:11,text:'管理支付密码'},
                {id:12,text:'绑定手机'},
                {id:13,text:'实名认证'},
                {id:14,text:'我的银行卡'},
            ]
        }
    }
    componentDidMount(){
        let username=localStorage.getItem('username')
      
        this.setState({
            userName:username
        })
    }
    createList(){
       return this.state.list.map(ele=>(
            <Item arrow="horizontal" key={ele.id} multipleLine onClick={() => console.log(123)}>
                {ele.text}
            </Item>
        ))
    }
    //退出成功提示
    successToast() {
        Toast.success('退出成功', 1);
      }
    //退出
    out(){
        let token =JSON.parse(localStorage.getItem('token'))
       //退出接口
        logout({
            oauth_token:token
        }).then(res=>{
          
            if(res.data.msg==='退出成功'){
                localStorage.removeItem('token')
                localStorage.removeItem('username')
                this.setState({
                    bol:false
                })
                this.successToast()
            }
        })
    }
    //顶部两个icon图标按钮操作
    iconBack(bol){
        if(bol){
            //去home页面
            this.props.history.push('/home')
        }else{
            //返回上一步
            this.props.history.goBack()
        }
    }
    //跳转登录注册
    sire(bol){
        if(bol){
            //去注册
            this.props.history.push('/login/regi')
        }else{
            //去登录
            this.props.history.push('/login/sign')
        }
    }
    render(){
        return (
            <div className='kk_my'>
                <div className='my_top'>
                    <LeftOutlined onClick={this.iconBack.bind(this,false)}/>
                    <HomeOutlined onClick={this.iconBack.bind(this,true)}/>       
                </div>
                <div className='my_vip' style={this.state.bol ? {display:'block'} : {display:'none'}}>
                    <img src={myVip} alt=''/>
                    <span>{this.state.userName}</span>
                </div>
                <div className='my_vip2' style={this.state.bol ? {display:'none'} : {display:''}}>
                    <span onClick={this.sire.bind(this,true)}>注册</span>
                    <span onClick={this.sire.bind(this,false)}>登录</span>
                </div>
                {/* 待付款，待收货，全部订单 */}
                <div className='kk_take'>
                    <div>
                        <span>
                             <WalletOutlined />
                        </span>
                        <p>待付款</p>
                    </div>
                    <div>
                        <span>
                            <SolutionOutlined />
                        </span>
                        <p>待收货</p>
                    </div>
                    <div>
                        <span>
                            <LayoutOutlined />
                        </span>
                        <p>全部订单</p>
                    </div>
                </div>
                {/* 列表 */}           
                <List  className="my-list"> 
                    {this.createList()}    
                </List>
                {/* 退出登录 */}
                <div className='out' onClick={this.out.bind(this)}>退出登录</div>
         
            </div>
        )
    }
}
export default withRouter(My)