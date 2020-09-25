import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getDetailList } from "../../store/actions/goodAction";
import {
  getChangeList,
  getSearchNav,
} from "../../store/actions/searchAction";
import "./searchList.scss";
// 建立联系
const mapSearchState = (state) => {
  return {
    changeList: state.search.changeList,
    NavList: state.search.NavList,
    goodDetailList: state.good.goodDetailList,
  };
};
const mapSearchAction = (dispatch) => {
  return {
    getChangeList: (params) => dispatch(getChangeList(params)),
    getSearchNav: (params) => dispatch(getSearchNav(params)),
    detailInit: (params) => dispatch(getDetailList(params)),
  };
};
class searchList extends Component {
  constructor(props) {
    super(props);
    this.search = React.createRef();
    this.parameter = (num) => {
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
        channelId: 1,
        gPlatform: "WAP",
        mvip: true,
        _: num,
      };
    };
    this.parameter1 = (num) => {
      return {
        pageId: 10000287,
        componentId: 2970,
        pageSize: 30,
        abtId: 2554,
        app_name: "shop_wap",
        app_version: 1.0,
        warehouse: "VIP_NH",
        fdc_area_id: 104104103,
        area_id: 104104,
        api_key: "8cec5243ade04ed3a02c5972bcda0d3f",
        mars_cid: "1600332715541_5dd293d8cb51090865f1282cbdae2e3e",
        total: 300,
        ruleId: num,
        dataSourceScene: "MST_RULE_PRODUCT_RANK",
        serviceType: 1,
        goodsQueryFields:
          " goodsCorner,goodsSellTag,goodsStockTag,query4GoodsFav,query4Comment,goodsFallingTag,goodsAtmosphereTag,goodsSellLabel",
        goodsFilterParamsJson: {},
        landingIdList: "",
        topSalesList: "",
        isWhiteListStyleId: true,
        time: 0,
        is_front: 1,
        mobile_platform: 2,
      };
    };
  }
  state = {
    value: "",
    keyBol: true,
    upShow: false,
    nav: [
      { id: 1, text: "价格", icon: "iconfont icon-shangxia" },
      { id: 2, text: "折扣", icon: "iconfont icon-shangxia" },
      { id: 3, text: "品牌", icon: "iconfont icon-pinpaizhekou" },
      { id: 4, text: "筛选", icon: "iconfont icon-shaixuan" },
    ],
  };
  HandleClick = () => {
    this.props.history.push("/searchList/" + this.state.search);
  };

  // 搜索框的enter提交事件
  SearchInput = (e) => {
    if (e.keyCode === 13) {
      this.setState({
        search: e.target.value,
      });
      let params = this.parameter(1600955093);
      params.keyword = this.state.value;
      this.props.getSearchNav(params);
    }
  };
  // 搜索点击事件
  SearchClick = () => {
    this.setState({
      value: this.state.value,
    });
    let params = this.parameter(1600955093);
    params.keyword = this.state.value;
    this.props.getSearchNav(params);
  };
  //   搜索
  ChangeSearch = (e) => {
    this.setState({ value: e.target.value }, () => {
      if (!this.state.value) {
        this.setState({
          keyBol: false,
        });
      }
    });
    // 搜索接口
    let params = this.parameter(1600929844);
    params.keyword = this.props.match.params.keys;
    this.props.getChangeList(params);
    this.setState({
      keyBol: true,
    });
  };
  handleDetail=(goodsId) => {
    this.props.history.push('/good/detail/'+ goodsId)
  }
  
  // 回到顶部
  handleUpShow = () => {
    let timer = setInterval(() => {
      // 添加定时器模仿动画事件
      this.search.current.scrollTop -= 100;
      // 判断何时停止动画
      if (this.search.current.scrollTop <= 10) {
        // 清理定时器
        clearInterval(timer);
        this.setState({
          upShow: false,
        });
      }
    }, 50);
  };
  SearchInput = (params) => {};
  componentDidMount() {
    let params = this.parameter(1600955093);
    params.keyword = this.props.match.params.keys;
    this.props.getSearchNav(params);
    let params1 
    if(this.props.match.params.keys==="中秋"){
      params1 = this.parameter1(53320235);
      this.props.detailInit(params1);
    }else if(this.props.match.params.keys==="跑鞋"){
      params1 = this.parameter1(52041207);
      this.props.detailInit(params1);
    }
    // 滚动事件
    this.search.current.addEventListener("scroll", () => {
      console.log(111)
      // 滚动高度
      let scrollTop = this.search.current.scrollTop;
      if (scrollTop >= 100) {
        this.setState({ upShow: true });
      } else {
        this.setState({ upShow: false });
      }
      })
    }
  render() {
    let { NavList, goodDetailList } = this.props;
    console.log(this.search.current)
    return (
      <div className="searchList" >
        {/* navbar */}
        <div className="SearchTabbar">
          <div>
            <i
              className="iconfont icon-zuojiantou"
              onClick={() => {
                this.props.history.go(-1);
              }}
            ></i>
          </div>
          {/* 搜索 */}
          <div>
            <input
              type="text"
              value={this.state.value}
              placeholder={this.props.match.params.keys}
              onChange={this.ChangeSearch}
              onKeyUp={this.SearchInput}
            />
          </div>
          {/* 分类 */}
          <div>
            <i
              className="iconfont icon-shouye"
              onClick={() => this.props.history.push("/home")}
            ></i>
          </div>
        </div>
        {/* 内容区域 */}
        <div className="searchList-content">
          {this.state.keyBol ? (
            <div className="searchList-show">
              {/* 筛选栏 */}
              <div className="searchList-cont">
                {this.state.nav.map((v) => (
                  <div className="NavList-item" key={v.id}>
                    <span>{v.text}</span>
                    <i className={v.icon}></i>
                  </div>
                ))}
              </div>
              {/* 导航栏 */}
              <div className="searchList-Nav">
                <ul className="searchNav">
                  {NavList &&
                    NavList.map((v) => {
                      return (
                        <li className="NavItem" key={v.text}>
                          <img src={v.image} alt="" />
                          <p>{v.text}</p>
                        </li>
                      );
                    })}
                </ul>
              </div>
              {/* 内容区域 */}
              <div className="searchList-text" ref={this.search}>
                {goodDetailList &&
                  goodDetailList.map((ele) => (
                    <div
                      className="product-item-inner"
                      key={ele.spuId}
                      onClick={this.handleDetail.bind(this, ele.goodsId)}
                    >
                      <div className="product-img-box">
                        <img src={ele.goodsImageTags.image5.image} alt="" />
                      </div>
                      <div className="product-info">
                        <div className="product-price">
                          <span className="tag">
                            {ele.goodsPriceTag.pricePrefix}
                          </span>
                          <span className="nowprice">
                            ￥{ele.goodsPriceTag.salePrice}
                          </span>
                          <span className="delprice">
                            ￥{ele.goodsPriceTag.comparePrice}
                          </span>
                          <span className="discount">
                            {ele.goodsPriceTag.discount}
                          </span>
                        </div>
                        <div className="product-msg-box">
                          <div className="product-name">{ele.goodsName}</div>
                          <div className="product-atmosphere">
                            {ele.goodsAtmosphereTag
                              ? ele.goodsAtmosphereTag.msg
                              : "暂无"}
                          </div>
                          <div className="product-tag"></div>
                        </div>
                      </div>
                    </div>
                  ))}
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
          ) : (
            <div className="SearchList">
              <ul>
                {this.props.changeList &&
                  this.props.changeList.map((v, i) => (
                    <li
                      key={i}
                      onClick={() => {
                        this.props.history.push(
                          "/searchList/" + this.state.value
                        );
                      }}
                    >
                      {v.word}
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default connect(mapSearchState, mapSearchAction)(withRouter(searchList));
