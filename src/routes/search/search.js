import React from "react";
import { withRouter } from "react-router-dom";
import "./search.scss";
import { connect } from "react-redux";
import { getHostList,getChangeList } from "../../store/actions/searchAction";
// 建立联系
const mapSearchState = (state) => {
  return {
    hostList: state.search.hostList,
    changeList:state.search.changeList
  };
};
const mapSearchAction = (dispatch) => {
  return {
    getHostList: (params) => dispatch(getHostList(params)),
    getChangeList: (params) => dispatch(getChangeList(params)),

  };
};
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      LogoShow: true,
      token: true,
      search: "",
      arr: [],
      keyBol: true,
    };
    // 请求参数
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
  }

  // 关闭广告栏
  CloseLogo = (e) => {
    e.stopPropagation();
    this.setState({
      LogoShow: false,
    });
  };
  //  跳转下载APP
  DownloadClick = (params) => {
    this.props.history.push("/app");
  };
  //   搜索框change事件
  ChangeSearch = (e) => {
    this.setState({
      search: e.target.value,
    },()=>{
      if(!this.state.search){
        this.setState({
        keyBol:true
      })
      }
    });
    // 搜索接口
    let params = this.parameter(1600929844)
    params.keyword=this.state.search
    this.props.getChangeList(params)
    this.setState({
      keyBol:false
    })
  };
  // 搜索历史
  localHan = () => {
    if (this.state.search) {
      // 判断是否有local
      let history = JSON.parse(localStorage.getItem("history") || "[]");
      // 是否有值，有的话直接将其付给arr
      if (history.length != 0) {
        let bol = history.every((v) => {
          if (v != this.state.search) {
            return v;
          }
        });
        if (bol) {
          history.push(this.state.search);
          localStorage.setItem("history", JSON.stringify(history));
          let tory = JSON.parse(localStorage.getItem("history"));
          this.setState({
            arr: tory,
          });
        }
      } else {
        history.push(this.state.search);
        localStorage.setItem("history", JSON.stringify(history));
        let tory = JSON.parse(localStorage.getItem("history"));
        this.setState({
          arr: tory,
        });
      }
      this.setState({
        search: "",
      });
    }
  };
  // 搜索框的enter提交事件
  SearchInput = (e) => {
    if (e.keyCode === 13) {
      this.localHan();
    }
  };
  // 搜索点击事件
  SearchClick = () => {
    this.localHan();
  };
  //   清除历史记录
  removeLocal = () => {
    localStorage.removeItem("history");
    this.setState({
      arr: [],
    });
  };

  componentDidMount() {
    let history = JSON.parse(localStorage.getItem("history") || "[]");
    // 是否有值，有的话直接将其付给arr
    if (history.length != 0) {
      this.setState({
        arr: history,
      });
    } else {
      localStorage.setItem("history", JSON.stringify(history));
    }
    // 请求列表
    let index = Math.floor(Math.random() * 3);
    let arr = [1600866878, 1600929199, 1600929250];
    let params = this.parameter(arr[index]);
    this.props.getHostList(params);
  }
  render() {
    return (
      <div className="Search">
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
        </div>
        {/* 用户 */}
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
              value={this.state.search}
              placeholder="大家正在搜索：中秋节好礼打赏"
              onChange={this.ChangeSearch}
              onKeyUp={this.SearchInput}
            />
          </div>
          {/* 分类 */}
          <div>
            <span onClick={this.SearchClick}>搜索</span>
          </div>
        </div>
        {/* 内容部分1 */}
        {this.state.keyBol ? (
          <div className="showSearch">
            <div className="searchHistory">
              <div className="searchHistory-top">
                <span>最近搜索</span>
                <span onClick={this.removeLocal}>清空</span>
              </div>
              <div className="history">
                {this.state.arr &&
                  this.state.arr.map((v, i) => <span key={i}>{v}</span>)}
              </div>
            </div>
            {/* 内容部分二 */}
            <div className="searchHost">
              <div className="searchHost-top">
                <span>热门搜索</span>
              </div>
              <div className="host">
                {this.props.hostList &&
                  this.props.hostList.map((v, i) => (
                    <span key={i}>{v.showWord}</span>
                  ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="SearchList">
            <ul>
              {this.props.changeList&&this.props.changeList.map((v,i)=>(
                <li key={i} onClick={()=>{this.props.history.push("/good/goodlist/v.id")}}>{v.word}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default connect(mapSearchState, mapSearchAction)(withRouter(SearchBar));
