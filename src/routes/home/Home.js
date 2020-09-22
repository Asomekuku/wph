import React from "react";
import "./home.scss";
import { getHomeSlideshow, getHomeMaun } from "../../store/actions/homeAction";
import { HTabBar, CartBtn } from "@/components/";

//引入这个高阶函数
import { connect } from "react-redux";
// 引入antd模块
import { Icon,} from "antd-mobile";
//共享state中的数据，可以用this.props进行访问
function mapStateToProps(store) {
  return {
    navList: store.home.navList,
    maunList: store.home.maunList,
  };
}
//把action生成器方法，映射到props上面
function mapActionToProps(dispatch) {
  return {
    getNavTitle: (params) => dispatch(getHomeSlideshow(params)),
    getMaunTitle: (params) => dispatch(getHomeMaun(params)),
  };
}
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      MaunShow: true,
    };
    this.params={
      app_name: "shop_wap",
      app_version: 4.0,
      api_key: "8cec5243ade04ed3a02c5972bcda0d3f",
      mobile_platform: 2,
      source_app: "yd_wap",
      warehouse: "VIP_NH",
      fdc_area_id: 104104103,
      province_id: 104104,
      mars_cid: "1600342222360_4fa63ba4f73a0d2bd40756795e80a7e8",
      standby_id: "nature",
      mvip: true,
      _: 1600699471,
    }
  }
  // 切换标题栏的高亮样式
  activeClick = (i) => {
    this.setState({
      active: i,
    });
  };
  // 菜单显示页面弹窗
  HomeShowClick = (params) => {
    this.setState({
      MaunShow:false,
    });
    this.props.getMaunTitle(this.params)
  };
  // 菜单隐藏页面弹窗
  HomeHideClick = (params) => {
    this.setState({
      MaunShow: true,
    });
  };

  //挂载完成调接口
  componentDidMount() {
    this.props.getNavTitle(this.params);
  }
  render() {
    console.log(this.props.maunList);
    let { navList,maunList } = this.props;
    return (
      <div className="home">
        {/* 广告栏 */}
        <HTabBar></HTabBar>
        {/* 标题栏 */}
        <CartBtn></CartBtn>
        {/* 导航栏 */}
        <div className="homeNav">
          {navList.map((v, i) => (
            <div
              className={
                this.state.active === i ? "homeNav-item-active" : "homeNav-item"
              }
              key={v.id}
              onClick={this.activeClick.bind(this, i)}
            >
              {v.name}
            </div>
          ))}
        </div>
        {/* 菜单栏 */}
        <div className="homeMaun">
          {/* 菜单栏显示图标 */}
          {this.state.MaunShow ? (
            <div className="homeMaun-icon" onClick={this.HomeShowClick}>
              <Icon type="down" />
            </div>
          ) : (
            <div className="homeMaun-content">
              <div className="homeMaun-content-top">
                <p>精选推荐</p>
                <Icon type="up" onClick={this.HomeHideClick} />
              </div>
              <div className="homeMaun-content-nav">
                {navList.map((v,i) => {
                  return (
                    <div className={this.state.active === i ?"Maun-item-active":"Maun-item"} key={v.id}  onClick={this.activeClick.bind(this, i)}>
                      <img src={v.default_icon} alt="" />
                      <span>{v.name}</span>
                    </div>
                  );
                })}
              </div>
              <div className="homeMaun-content-bottom">
                <p>更多推荐</p>
                <div className="homeMaun-bottom-list">
                  {maunList.map(v=>(
                    <span key={v.id}>{v.name}</span>
                  ))}
                </div>
              </div>
            </div>
      
          )}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapActionToProps)(Home);
