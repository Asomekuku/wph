import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { NavBar, Icon } from "antd-mobile";
import "./app.scss"
import img from "../../assets/img/appD.png"
import img1 from "../../assets/img/azD.png"
import img2 from "../../assets/img/az2D.png"
import img3 from "../../assets/img/wD.png"

class app extends Component {
  render() {
    return (
      // 下载页面
      <div className="DloApp">
        {/* 标题栏开始 */}
        <div className="App_title">
          <NavBar
            mode="light"
            icon={<Icon type="left" color="#000" />}
            onLeftClick={() => this.props.history.go(-1)}
            rightContent={<i className="icon-home" onClick={() => {
                this.props.history.push("/home")
            }
            }></i>}
          >
            下载客户端
          </NavBar>
        </div>
        {/* 标题栏结束 */}
        {/* 内容区域开始 */}
        <div className="App_content">
            <div className="App-img"></div>
            <div className="App-logo">
                <i className="icon-logo"></i>
                <div className="logo_text">
                  <p>下载唯品会客户端</p>
                  <h3>抢购更快更便捷</h3>  
                </div>
            </div>
            <ul className="App-list">
                <li><img src={img} alt=""/></li>
                <li><img src={img1} alt=""/></li>
                <li><img src={img2} alt=""/></li>
                <li><img src={img3} alt=""/></li>
            </ul>
        </div>
        {/* 内容区域结束 */}
      </div>
    );
  }
}
export default withRouter(app);
