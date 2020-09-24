import React, { Component } from 'react'
import './detail.scss'
import { connect } from 'react-redux'
import { getGoodDetail,getSize } from '../../store/actions/goodAction'
import { Carousel } from 'antd-mobile';
import { Modal, List,Button } from 'antd-mobile';

//共享state中的数据，可以用this.props进行访问
function mapStateToProps(store){
  return{
    goodDetails:store.good.goodDetails,
    goodSize:store.good.goodSize,
  }
}
//把action生成器方法，映射到props上面
function mapActionToProps(dispatch){
  return {
    //商品详情
    detailsInit:(params)=>dispatch(getGoodDetail(params)),
    //商品大小颜色
    detailsSize:(params)=>dispatch(getSize(params))
  }
}
class Detail extends Component {
  constructor(props){
    super(props)
    this.state = {
      baseUrl:'https://h2a.appsimg.com/a.appsimg.com',
      show:false,
      iconColor:false,
      iconSize:false,
      initIdx:0,
      initSizeIdx:'',
      modal2: false,
    }
  }
  componentDidMount(){
    let productId = this.props.match.params.goodsId
    let params = {
      'app_name': 'shop_wap',
      app_version: 4.0,
      api_key: '8cec5243ade04ed3a02c5972bcda0d3f',
      mobile_platform: 2,
      source_app: 'yd_wap',
      warehouse: 'VIP_NH',
      fdc_area_id: 104104103,
      province_id: 104104,
      mars_cid: '1600332715541_5dd293d8cb51090865f1282cbdae2e3e',
      mobile_channel: 'mobiles-||',
      standby_id: 'nature',
      brandId: 0,
      productId: productId,
      act: 'intro',
      price_fields: 'vipshopPrice,saleSavePrice,specialPrice,salePriceTips,vipDiscount,priceIconURL,priceIconMsg,min_vipshop_price, max_vipshop_price,max_market_price, min_market_price ,promotion_price_type,promotion_price,promotion_price_suff,promotion_price_tips',
      haitao_description_fields: 'descri_image,beauty_descri_image,text,mobile_descri_image,mobile_prompt_image',
      is_multicolor: 1,
      is_get_TUV: 1,
      kfVersion: 1,
      device: 3,
      'priceScene': 'normal',
      'functions': 'panelView,product_comment,sku_price,active_price,brand_store_info,luxury_info,newBrandLogo,reduced_point_desc,wh_transfer,hideOnlySize,showReputation,atmospherePicture,haitaoFinanceVip,banInfo,extraDetailImages,vendorQa',
      'is_get_pms_tips': 1,
      highlightBgImgVer: 1,
      commitmentVer: 2,
      propsVer: 1,
      supportSquare: 1,
      longTitleVer: 2,
      _: 1600853214,
    }
    let params1 = {
      app_name: 'shop_wap',
      app_version: '4.0',
      api_key: '8cec5243ade04ed3a02c5972bcda0d3f',
      mobile_platform: 2,
      source_app: 'yd_wap',
      warehouse:'VIP_NH',
      fdc_area_id: 104104103,
      province_id: 104104,
      mars_cid: '1600332715541_5dd293d8cb51090865f1282cbdae2e3e',
      mobile_channel: 'mobiles-||',
      standby_id: 'nature',
      'vendorProductId': '1187901176839454785',
      mid: productId,
      brandid: 1710685500,
      device: 3,
      'functions': 'buyLimit,foreShowActive,panelView,futurePriceView,showSingleColor,noProps,sku_price,active_price,prepay_sku_price,reduced_point_desc,surprisePrice,businessCode,promotionTips,invisible,flash_sale_stock,restrictTips,favStatus,banInfo,futurePrice,priceChart,priceView,quotaInfo,exclusivePrice,extraDetailImages',
      prepayMsgType: 1,
      promotionTipsVer: 5,
      priceViewVer: 6,
      supportSquare: 1,
      isUseMultiColor: 1,
      couponInfoVer: 2,
      freightTipsVer: 3,
      supportAllPreheatTipsTypes: 1,
      salePriceTypeVer: 2,
      wap_consumer: '',
      mvip: true,
      _: 1600909695,
    }
    this.props.detailsInit(params)
    this.props.detailsSize(params1)
  }
  
  //返回上一级
  goBack(){
    this.props.history.go(-1)
  }
  //进入购物车
  goCart(){
    this.props.history.push('/cart')
  }


   //添加动画效果
   scrollToTop() {
    const scrollToTop = window.setInterval(() => {
      let pos = this.refs.bodyBox.scrollTop;
      if ( pos > 0 ) {
        this.refs.bodyBox.scrollTo( 0, pos - 20 );
      } else {
        clearInterval( scrollToTop );
      }
    }, 1);
  }
  showBtn(){
    if(this.refs.bodyBox.scrollTop > 400){
      this.setState({show:true})
    }else{
      this.setState({show:false})
    }
  }
  onClose = key => () => {
    this.setState({
      [key]: false,
    });
  }
  //颜色点击切换
  handleColorChecked(index){
    this.setState({
      initIdx:index
    })
  }
  //size点击切换
  handleSizeChecked(index){
    this.setState({
      initSizeIdx:index
    })
  }
  showModal = key => (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
      [key]: true,
    });
  }
  render() {
    let { goodDetails,goodSize } = this.props
    // console.log(goodDetails)
    let { baseUrl,show,initIdx,initSizeIdx } = this.state
    return (
      <div className="detail" ref="bodyBox" onScroll={this.showBtn.bind(this)}>
        {/* 返回顶部 */}
        {show && <div className="back-top" onClick={this.scrollToTop.bind(this)}>
          <i className="iconfont icon-xiangshangjiantou"></i>
        </div>}
        {/* 轮播图 */}
        <div className="carousel-box">
          <div className="bar-left">
            <i className="iconfont icon-zuojiantou" onClick={this.goBack.bind(this)}></i>
          </div>
          <div className="like-share">
            <i className="iconfont icon-shoucang"></i>
            <i className="iconfont icon-fenxiang"></i>
          </div>
          <Carousel
          autoplay={true}
          infinite
        >
          {goodDetails&&goodDetails.previewImages.map(val => (
            <a
              key={val.imageIndex}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%' }}
            >
              <img
                src={baseUrl+val.imageUrl}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                }}
              />
            </a>
          ))}
        </Carousel>
        </div>
        {/* 商品价格 */}
        <div className="product-price-box">
          <div className="price-bar-wrap">
            <div className="main-prices-left">
              <span className="price">￥<i>{goodDetails.min_vipshop_price}</i></span>
              <span className="old-price">￥{goodDetails.min_market_price}</span>
              <span className="discount">{goodDetails.vipDiscount}</span>
            </div>
            <div className="main-prices-right">
              <div className="price-bar-bg-img">
                <img src="https://h2a.appsimg.com/b.appsimg.com/upload/momin/2020/09/07/80/1599444363513_207x54_90.png!85.webp" alt=""/>
              </div>
            </div>
          </div>
        </div>
        {/* 商品名称 */}
        <div className="product-name-container">
          <div className="product-name">
            <div className="name-box">{goodDetails.title}</div>
            <div className="brand-box">{goodDetails.brandStoreName}</div>
          </div>
        </div>
        {/* 正品保障 */}
        <div className="product-guaranteed">
          <div className="ceil-item">
            <img src="https://h2a.appsimg.com/b.appsimg.com/upload/momin/2019/12/23/16/1577086532213.png!85.webp" alt=""/>
            <p>100%正品 · 专业鉴定 · 正品险</p>
          </div>
          <i className="iconfont icon-youjiantou-01"></i>
        </div>
        {/* 颜色尺寸 */}
        <div className="color-size">
          <div className="sku-color">
            <span>颜色</span>
            <div className="grid-select">
              {goodSize.length&&goodSize[1].values.map((ele,index)=>(
                <div className={initIdx===index?'grid-option checked':'grid-option'} key={ele.id} onClick={this.handleColorChecked.bind(this,index)}>
                  <img src={baseUrl+ele.icon.imageUrl} alt=""/>
                  <span>{ele.name}</span>
                  {initIdx===index&&<i className="iconfont icon-xuanzejiaobiao"></i>}
              </div>
              ))}
            </div>
          </div>
          {/* 尺码 */}
          <div className="sku-size">
            <div className="size-box">
              <span>尺寸</span>
              <span>查看尺码表</span>
            </div>
            <div className="grid-select">
              {goodSize.length&&goodSize[0].values.map((ele,index)=>(
                <div className={index===initSizeIdx?'grid-option checked':'grid-option'} key={ele.id} onClick={this.handleSizeChecked.bind(this,index)}>{ele.name}
                {index===initSizeIdx&&<i className="iconfont icon-xuanzejiaobiao"></i>}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* 商品参数 */}
        <div className="product-param-container"onClick={this.showModal('modal2')}>
          <div className="product-param">
            <span className="params">商品参数</span>
            <span className="text">弹性、版型、衣长等</span>
          </div>
          <i className="iconfont icon-shenglvehao"></i>
        </div>
        <Modal
          popup
          visible={this.state.modal2}
          onClose={this.onClose('modal2')}
          animationType="slide-up"
        >
          <List renderHeader={() => <div>商品参数</div>} className="popup-list">
            {goodDetails&&goodDetails.props.map((i, index) => (
              <List.Item key={index}>
                <span>{i.name}</span>
                <span>{i.value}</span>
              </List.Item>
            ))}
            <List.Item>
              <Button type="primary" onClick={this.onClose('modal2')}>知道了</Button>
            </List.Item>
          </List>
        </Modal>
        {/* 限购数量 */}
        <div className="product-num">
          <span>数量</span>
          <span>限同时购买<i>3</i>件</span>
        </div>
        {/* 地址 */}
        <div className="address-box">
          <span>配送至</span>
          <span>请选择配送地址</span>
          <i className="iconfont icon-dizhi"></i>
        </div>
        {/* 运费 */}
        <div className="product-freight">
          <span>运费</span>
          <span>新会员专享首单满38元免邮（限唯品自营商品，部分商品不可用）</span>
        </div>
        {/* 购后保障 */}
        <div className="product-services">
          <div className="services-list">
            <div className="services-option">
              <i className="iconfont icon-chenggong"></i>
              <span>唯品会发货及售后</span>
            </div>
            <div className="services-option">
              <i className="iconfont icon-chenggong"></i>
              <span>顺丰配送</span>
            </div>
            <div className="services-option">
              <i className="iconfont icon-chenggong"></i>
              <span>7天无理由退货</span>
            </div>
            <div className="services-option">
              <i className="iconfont icon-chenggong"></i>
              <span>退货无忧</span>
            </div>
            <div className="services-option">
              <i className="iconfont icon-chenggong"></i>
              <span>7天可换</span>
            </div>
          </div>
          <i className="iconfont icon-shenglvehao"></i>
        </div>
        {/* 店铺 */}
        <div className="product-brand">
          <div className="brand-hd">
            <div className="brand">
              <div className="img-info">
              <img src={goodDetails.brandStoreLogo} alt=""/>
              </div>
              <span className="info">{goodDetails.brandStoreName}</span>
            </div>
            <div className="collect">收藏</div>
          </div>
          <div className="brand-ft">查看品牌</div>
        </div>
        {/* 常见问题 */}
        {goodDetails.vendorQa?<div className="product-qa">
          <div className="top-wrap">
            <span className="question">常见问题</span>
            <span className="all">全部</span>
          </div>
          <div className="bottom-wrap">
            {goodDetails.vendorQa.map(ele=>(
              <div className="info-box" key={ele.answer}>
                <div className="q-info">
                  <span>Q</span>
                  <span>{ele.question}</span>
                </div>
                <div className="a-info">
                  <span>A</span>
                  <span>{ele.answer}</span>
                </div>
              </div>
            ))}
          </div>
        </div>:<></>}
        {/* 图文详情 */}
        <div className="product-graphic">
          <div className="title">图文详情</div>
          <div className="img-list">
            {goodDetails&&goodDetails.detailImages.map(ele=>(
              <div key={ele.imageIndex}>
                <img src={baseUrl+ele.imageUrl} alt=""/>
              </div>
            ))}
          </div>
        </div>
        {/* 底部加入购物车 */}
        <div className="product-cart">
          <i className="iconfont icon-kefu"></i>
          <div className="shop-cart" onClick={this.goCart.bind(this)}>
          <i className="iconfont icon-gouwuche"></i>
          </div>
          <div className="add-cart">加入购物车</div>
        </div>
      </div>
    )
  }
}
export default connect(mapStateToProps,mapActionToProps)(Detail)