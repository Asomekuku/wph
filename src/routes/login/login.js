import React from 'react'
import loginImg from '@/assets/image/login.png'
import iphonenum from '@/assets/image/iphoneNum.png'
import passimg from '@/assets/image/passimg.png'
import './login.scss'
import {withRouter} from 'react-router-dom' 
import { Button, WhiteSpace} from 'antd-mobile'
import { List, InputItem , Toast ,  WingBlank } from 'antd-mobile'
import {getMobileCode , createUser , loginCheck } from '@/utils/api'
 class Login extends React.Component{
     constructor(props){
         super(props)
         this.state={
             cut:false,
             userName:'',
             passWord:'',
             proof:'',
             disabled:true
         }
     }
    goHome(){
       
        this.props.history.push('/home')
    }
    //挂载完成
    componentDidMount(){

        this.props.match.params.regiSign === 'regi' ? this.setState({cut:false}) : this.setState({cut:true})
       
    }
    //改变bol登录注册,密码登录
    iscut(){
        let {cut} = this.state
        cut=!cut
        this.setState({
            cut:cut,
            userName:'',
            passWord:'',
            proof:''
        })
    }
    //手机号
    onChange=(value)=>{
        this.setState({
            userName:value
        })
        
    }
 
    //密码
    onChangePwd=(value)=>{
        
        this.setState({
            passWord:value
        })
    }
    //验证码
    onChangeProof=(value)=>{
        this.setState({
            proof:value
        })
    }
    //验证码按钮
    gain(){
        getMobileCode({
            mobile:this.state.userName
        }).then(res=>{
            if(res.data.msg==='发送成功'){
                console.log(res)
                this.setState({
                    
                    disabled:false
                })
            }
        })
        
    }
    //注册按钮
    regi(){
        
        if(this.state.userName && this.state.passWord && this.state){
            createUser({
                mobile:this.state.userName,
                username:this.state.userName,
                password:this.state.passWord,
                code:this.state.proof
            }).then(res=>{
              
                if(res.data.msg==='注册成功'){
                    this.successToast()
                }
                
            })
        }
    }
    //注册成功
    successToast=()=> {
        Toast.success('恭喜您，注册成功,请前往首页登录', 1);
      }
      signSuccess() {
        Toast.success('登录成功,即将跳转首页', 1);
      }
      //登录按钮
      sign=()=>{
         
          loginCheck({
            username:this.state.userName,
            password:this.state.passWord
          }).then(res=>{
              console.log(res)
              if(res.data.msg==='登录成功'){
                localStorage.setItem('token',JSON.stringify(res.data.wdata.oauth_token))
                localStorage.setItem('username',res.data.wdata.username)
                this.signSuccess()
                setTimeout(()=>{
                  this.props.history.push('/home')
                },1000)
                
              }
          })
      }
    render(){
        let {cut , userName , disabled ,passWord , proof} =this.state
        return(
            <div className='login'>
                {/* 登录 */}
                <div style={cut ? {display:"block"} : {display:"none"}}>
                    <div className='login_logo'>
                        <img src={loginImg} alt=''/>
                        <span onClick={this.goHome.bind(this)}></span>
                    </div>
                    {/* 登录 */}
                    <List className='login_list'>
                        <InputItem
                            value={userName}
                            onChange={this.onChange}
                            clear
                            placeholder="请输出手机和邮箱"
                            ref={el => this.autoFocusInst = el}
                        >登录名</InputItem>
                        <InputItem
                            type='password'
                            value={passWord}
                            onChange={this.onChangePwd}
                            clear
                            placeholder="请输入密码"
                            ref={el => this.inputRef = el}
                        >密码</InputItem>
                        <Button type="primary" onClick={this.sign}>登录</Button><WhiteSpace />
                    </List>                
                    <img className='img' onClick={this.iscut.bind(this)} src={iphonenum} alt=''/>
                </div>
                {/* 注册 */}
                <div style={cut ? {display:"none"} : {display:"block"}}>
                <div className='login_logo'>
                        <img src={loginImg} alt=''/>
                        <span onClick={this.goHome.bind(this)}></span>
                    </div>
                    {/* 登录 */}
                    <List className='login_list'>
                        <InputItem
                            value={userName}
                            onChange={this.onChange}
                            clear
                            placeholder="请输出手机和邮箱"
                            ref={el => this.autoFocusInst = el}
                        >手机号</InputItem>
                        <div>
                            <InputItem
                            value={proof}
                            onChange={this.onChangeProof}
                            clear
                            placeholder="请输入验证码"
                            ref={el => this.autoFocusInst = el}
                        >验证码</InputItem>
                        </div>
                            <div className='yz'>
                               
                            <Button type="primary" onClick={this.gain.bind(this)}>获取验证码</Button><WhiteSpace />
                            </div>
                        <InputItem
                            type='password'
                            clear
                            value={passWord}
                            onChange={this.onChangePwd}
                            placeholder="请输入密码"
                            ref={el => this.inputRef = el}
                        >密码</InputItem>
                        <Button type="primary" onClick={this.regi.bind(this)} disabled={disabled}>手机号注册登录</Button><WhiteSpace />
                    </List>                
                    <img className='img' onClick={this.iscut.bind(this)} src={passimg} alt=''/>
                </div>
            </div>
        )
    }
}
export default withRouter(Login)