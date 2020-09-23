import React from "react";
import { withRouter } from "react-router-dom";
import "./HTabBar.scss";


class HTabBar extends React.Component {
  state = {
    LogoShow: true,
    token:true
  };
// 关闭广告栏
  CloseLogo = (e) => {
    e.stopPropagation();
    this.setState({
      LogoShow: false,
    });
  };
//  跳转下载APP
  DownloadClick=(params) => {
      this.props.history.push("/app")
  }
  // 登录还是个人中心
  loginMy=(bol) => {
    if(bol){
      this.props.history.push("/login")
    }else{
      this.props.history.push("/my")
    }
  }
  componentDidMount(){
    let token =JSON.parse(localStorage.getItem('token')||"[]") 
    if(token.length!=0){
      this.setState({
        token
      })
    }else{
      this.setState({
        token:false
      })
    }
  }
  
  render() {
    return (
        <div className="HTab">
        {this.state.LogoShow ? (
          
            <div className="banner" onClick={this.DownloadClick}>
              <span className="bannerClose" onClick={this.CloseLogo}>
                ×
              </span>
              <div className="TabLogo">
                <p className="HLogo">品牌特卖，就是超值</p>
                <p className="Logo">早10晚8准时上新，7天放心退</p>
              </div>
            </div>  
        ) : (
          <div></div>
        )}
        <div className="kb-tabbar">
          {/* 用户 */}
          <div>
            {this.state.token?<i className="iconfont icon-yonghu" onClick={this.loginMy.bind(this,this.state.token)}></i>:<div onClick={this.loginMy.bind(this,this.state.token)}>
              登录</div>}
          </div>
          {/* 搜索 */}
          <div>大家正在搜索：护肤套装</div>
          {/* 分类 */}
          <div onClick={() => this.props.history.push("/good")}>
            <i className="iconfont icon-fenlei" onClick={() => {
              this.props.history.push("/good")
            }
            }></i>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(HTabBar);
