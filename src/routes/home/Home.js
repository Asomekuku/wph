import React from "react";
import "./home.scss";
import {
  getHomeSlideshow,
  getHomeMaun,
  getHomeSwiper,
  getHomeNav,
  getHomeCart,
} from "../../store/actions/homeAction";
import { HTabBar, CartBtn } from "@/components/";
import data from "../../assets/josn/home.json";
//引入这个高阶函数
import { connect } from "react-redux";
// 引入antd模块
import { Icon, Carousel } from "antd-mobile";

//共享state中的数据，可以用this.props进行访问
function mapStateToProps(store) {
  return {
    navList: store.home.navList,
    maunList: store.home.maunList,
    swiper: store.home.swiper,
    Navs: store.home.Navs,
    content: store.home.content,
  };
}
//把action生成器方法，映射到props上面
function mapActionToProps(dispatch) {
  return {
    getNavTitle: (params) => dispatch(getHomeSlideshow(params)),
    getMaunTitle: (params) => dispatch(getHomeMaun(params)),
    getSwiperTitle: (params) => dispatch(getHomeSwiper(params)),
    getNav: (params) => dispatch(getHomeNav(params)),
    getCart: (params) => dispatch(getHomeCart(params)),
  };
}
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      MaunShow: true,
      upShow: false,
    };
    this.home = React.createRef();
    this.Parameter = (num) => {
      return {
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
        wap_consumer: "A1",
        lightart_version: "1.3.0",
        width: 640,
        height: 460,
        net: "wifi",
        client: "wap",
        changeResolution: 2,
        menu_code: 20181203001,
        channel_name: "今日推荐",
        _: num,
      };
    };
    this.params = this.Parameter(1600699471);
    this.params1 = this.Parameter(1600767029);
    this.params2 = this.Parameter(11600773382);
    this.params3 = this.Parameter(1600776414);
    this.list = this.Parameter(1600782219);
    this.list.load_more_token =
      "eyJjaGFubmVsX2lkIjoiNDkiLCJ0c2lmdCI6IjEiLCJicmFuZF9vZmZzZXQiOiIwIiwiYnJhbmRfcmVmZXJfaW5kZXgiOiI5IiwidG9waWNfZ3JvdXAiOiIwIiwid2VpeGluQnJhbmRUaHJlZSI6IjAifQ==";
    this.params4 = this.list;
  }

  // 切换标题栏的高亮样式
  activeClick = (i) => {
    if(i!==0){
      this.props.history.push("/snap")
    }
    this.setState({
      active: i,
    });
  };
  // 大卖特区跳转
  BuyClick=(i) => {
    let arr=[52040664,52287217,52044501]
    this.props.history.push('good/goodlist/'+arr[i])
  }
  // 唯品快抢
  VIPClick=(i) => {
    let arr=[1397000998455366,806646477235725,6917935099807999005,2159226586]
    this.props.history.push('good/detail/'+arr[i])
  }
  // 菜单显示页面弹窗
  HomeShowClick = (params) => {
    this.setState({
      MaunShow: false,
    });
    this.props.getMaunTitle(this.params);
  };
  // 菜单隐藏页面弹窗
  HomeHideClick = (params) => {
    this.setState({
      MaunShow: true,
    });
  };
  // 导航栏的跳转
  ClickCation(i) {
    let arr = [
      26594,
      26595,
      26596,
      75044,
      109274,
      26602,
      26598,
      288532,
      27916,
      280269,
    ];
    this.props.history.push("/good/" + arr[i]);
  }
  // 回到顶部
  handleUpShow = () => {
    let timer = setInterval(() => {
      // 添加定时器模仿动画事件
      this.home.current.scrollTop -= 100;
      // 判断何时停止动画
      if (this.home.current.scrollTop <= 10) {
        // 清理定时器
        clearInterval(timer);
        this.setState({
          upShow: false,
        });
      }
    }, 50);
  };
  // 渲染页面
  Rendering = () => {
    let { content } = this.props;
    return content.map((n, i) => {
      if (i % 2 === 0) {
        return (
          <div className="content-item2" key={i}>
            {content[i] &&
              content[i].item.map((v) => (
                <div className="homeCart-item" key={v.brand_id}>
                  <img src={v.brand_image} alt="" />
                  <div className="Cart-item-text">
                    <div className="item-text-left">
                      <h3>{v.title}</h3>
                      <div className="text-left-bottom">
                        <p>{v.atmosphere_text}</p>
                        <div className="bottom-text">
                          <span>{parseFloat(v.discount)}</span>
                          {v.discount.replace(/[1-9]/g, "")}
                        </div>
                      </div>
                    </div>
                    <div className="item-text-right">
                      <span>{v.remain_days}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        );
      } else {
        return (
          <div className="content-item1" key={i}>
            {content[i] &&
              content[i].item.map((v) => (
                <div className="homeCartImg" key={v.id}>
                  <img src={v.imageUrl} alt="" />
                </div>
              ))}
          </div>
        );
      }
    });
  };

  //挂载完成调接口
  componentDidMount() {
    this.props.getNavTitle(this.params);
    this.props.getSwiperTitle(this.params1);
    this.props.getNav(this.params3);
    this.props.getCart(this.params4);
    // 滚动事件
    this.home.current.addEventListener("scroll", () => {
      // 滚动高度
      let scrollTop = this.home.current.scrollTop;
      if (scrollTop >= 500) {
        this.setState({ upShow: true });
      } else {
        this.setState({ upShow: false });
      }
      // 触底事件
      // 可滚动的高度
      let shouldHeight = this.home.current.scrollHeight;
      let clientHeight = this.home.current.clientHeight;
      if (shouldHeight - clientHeight - scrollTop <= 10) {
        let index = Math.floor(Math.random() * 4 + 1);
        let NumList = this.Parameter(data.Request[index].num);
        NumList.load_more_token = data.Request[index].load_more_token;
        let params5 = NumList;
        this.props.getCart(params5);
      }
    });
  }

  render() {
    let { navList, maunList, Navs } = this.props;
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
        <div
          className="homeMaun"
          style={this.state.MaunShow ? { height: "0px" } : { height: "10rem" }}
        >
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
                {navList.map((v, i) => {
                  return (
                    <div
                      className={
                        this.state.active === i
                          ? "Maun-item-active"
                          : "Maun-item"
                      }
                      key={v.id}
                      onClick={this.activeClick.bind(this, i)}
                    >
                      <img src={v.default_icon} alt="" />
                      <span>{v.name}</span>
                    </div>
                  );
                })}
              </div>
              <div className="homeMaun-content-bottom">
                <p>更多推荐</p>
                <div className="homeMaun-bottom-list">
                  {maunList.map((v) => (
                    <span key={v.id}>{v.name}</span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="homeHeight" ref={this.home}>
          {/* 轮播图 */}
          <div className="homeBanner">
            {/* 写在轮播图标签上 */}
            {!!this.props.swiper.length && (
              <Carousel autoplay={true} infinite>
                {this.props.swiper.map((val, i) => (
                  <div
                    key={val.id}
                    style={{
                      display: "inline-block",
                      width: "100%",
                      height: this.state.imgHeight,
                    }}
                  >
                    <img
                      src={val.url}
                      alt=""
                      style={{ width: "100%", verticalAlign: "top" }}
                      onLoad={() => {
                        window.dispatchEvent(new Event("resize"));
                        this.setState({ imgHeight: "auto" });
                      }}
                    />
                  </div>
                ))}
              </Carousel>
            )}
          </div>
          {/* 图片栏 */}
          <div className="homeImg">
            <img
              src="http://h2.appsimg.com/b.appsimg.com/upload/mst/2020/07/02/71/mst_7d51070f45e49a864eaecbf1eb86b168.jpg"
              alt=""
            />
          </div>
          {/* 导航栏 */}
          <div className="homeNavImg">
            {Navs.length !== 0 &&
              Navs[0].img.map((v, i) => (
                <div
                  className="homeNavImg-item"
                  key={i}
                  style={{
                    background: "url(" + v + ") no-repeat 0px 0px/100%",
                  }}
                ></div>
              ))}
            <div className="nav-item">
              {Navs.length !== 0 &&
                Navs[0].arr.map((c, i) => (
                  <div className="img-item" key={c.data.id}>
                    <img
                      src={c.data.imageUrl}
                      alt=""
                      onClick={this.ClickCation.bind(this, i)}
                    />
                  </div>
                ))}
            </div>
          </div>

          {/* 大卖特卖区域 */}
          <div
            className="homeCartBuy"
            style={{
              background:
                "url(" + data.bigSale.bg + ") no-repeat 0px 0px/100% 100%",
            }}
          >
            {/* 销量 */}
            <div className="homeBuy-user">
              {data.bigSale.Avatar.map((v, i) => (
                <img src={v} alt="" key={i} />
              ))}
              <p>{data.bigSale.text}</p>
            </div>
            {/* 商品 */}
            <div className="homeBuy-shop">
              {data.bigSale.shop.map((v, i) => (
                <img src={v} key={i} alt="" onClick={this.BuyClick.bind(this,i)}/>
              ))}
            </div>
          </div>
          {/* 唯品快抢 */}
          <div
            className="homeCartVip"
            style={{
              background:
                "url(" + data.VIP.bg + ") no-repeat 0px 0px/100% 100%",
            }}
          >
            <div className="homeVip-top">
              <img src={data.VIP.img} alt="" />
              <p>{data.VIP.title}</p>
            </div>
            <div className="homeVip-shop">
              {data.VIP.shop.map((v, i) => {
                return (
                  <div className="VipShop-item" key={i}>
                    <img src={v.img} alt="" onClick={this.VIPClick.bind(this,i)}/>
                    <p>{v.text}</p>
                    <span>￥{v.price}</span>
                  </div>
                );
              })}
            </div>
          </div>
          {/* 最后疯抢 */}
          <div
            className="homeCartVip homeCartAtLast"
            style={{
              background:
                "url(" + data.atLast.bg + ") no-repeat 0px 0px/100% 100%",
            }}
          >
            <div className="homeVip-top">
              <img src={data.atLast.img} alt="" />
              <p>{data.atLast.title}</p>
            </div>
            <div className="homeVip-shop">
              {data.atLast.shop.map((v, i) => {
                return (
                  <div className="VipShop-item" key={i}>
                    <img src={v.img} alt="" />
                    <p>
                      <img src={v.titleImg} alt="" />
                    </p>
                    <span>{v.sum}</span>
                  </div>
                );
              })}
            </div>
          </div>
          {/* 清仓特惠 */}
          <div
            className="homeCartVip homeCartClearance "
            style={{
              background:
                "url(" + data.clearance.bg + ") no-repeat 0px 0px/100% 100%",
            }}
          >
            <div className="homeVip-top">
              <img src={data.clearance.img} alt="" />
              <p>{data.clearance.title}</p>
            </div>
            <div className="homeVip-shop">
              {data.clearance.shop.map((v, i) => {
                return (
                  <div className="VipShop-item" key={i}>
                    <img src={v.img} alt="" />
                    <p>{v.text}</p>
                    <span>￥{v.price}</span>
                  </div>
                );
              })}
            </div>
          </div>
          {/* 上新 */}
          <div className="homeCart-New">
            <img
              src="https://h2.appsimg.com/b.appsimg.com/upload/momin/2019/08/23/111/1566543733364.jpg"
              alt=""
            />
          </div>
          {/* 卡片区域 */}
          <div className="homeCart">{this.Rendering()}</div>
        </div>
        {/* 回到顶部 */}
        {this.state.upShow ? (
          <div className="homeCartUp" onClick={this.handleUpShow}>
            <i className="iconfont icon-xiangshangjiantou"></i>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapActionToProps)(Home);
