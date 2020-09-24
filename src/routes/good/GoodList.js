import React, { Component } from 'react'
import './goodlist.scss'
import { getDetailList } from '../../store/actions/goodAction'
//引入这个高阶函数
import { connect } from 'react-redux'

//共享state中的数据，可以用this.props进行访问
function mapStateToProps(store){
  return{
    goodDetailList:store.good.goodDetailList
  }
}
//把action生成器方法，映射到props上面
function mapActionToProps(dispatch){
  return {
    //商品详情列表
    detailInit:(params)=>dispatch(getDetailList(params))
  }
}
class GoodList extends Component {
  componentDidMount(){
    let group_id = this.props.match.params.group_id
    let params = {
      pageId: 10000287,
      componentId: 2970,
      pageSize: 30,
      abtId: 2554,
      app_name: 'shop_wap',
      app_version: 1.0,
      warehouse: 'VIP_NH',
      fdc_area_id: 104104103,
      area_id: 104104,
      api_key: '8cec5243ade04ed3a02c5972bcda0d3f',
      mars_cid: '1600332715541_5dd293d8cb51090865f1282cbdae2e3e',
      total: 300,
      ruleId: group_id,
      dataSourceScene: 'MST_RULE_PRODUCT_RANK',
      serviceType: 1,
      goodsQueryFields:' goodsCorner,goodsSellTag,goodsStockTag,query4GoodsFav,query4Comment,goodsFallingTag,goodsAtmosphereTag,goodsSellLabel',
      goodsFilterParamsJson: {},
      landingIdList: '',
      topSalesList: '',
      isWhiteListStyleId: true,
      time: 0,
      is_front: 1,
      mobile_platform: 2,
    }
    this.props.detailInit(params)
  }
  //渲染列表页面
  createDetail(data){
    if(data&&data.length){
      return data.map(ele=>(
        <div className="product-item-inner" key={ele.spuId} onClick={this.handleDetail.bind(this,ele.goodsId)}>
            <div className="product-img-box">
              <img src={ele.goodsImageTags.image5.image} alt=""/>
            </div>
            <div className="product-info">
              <div className="product-price">
                <span className="tag">{ele.goodsPriceTag.pricePrefix}</span>
                <span className="nowprice">￥{ele.goodsPriceTag.salePrice}</span>
                <span className="delprice">￥{ele.goodsPriceTag.comparePrice}</span>
                <span className="discount">{ele.goodsPriceTag.discount}</span>
              </div>
              <div className="product-msg-box">
                <div className="product-name">
                    {ele.goodsName}
                  </div>
                <div className="product-atmosphere">{ele.goodsAtmosphereTag?ele.goodsAtmosphereTag.msg:'暂无'}</div>
                <div className="product-tag"></div>
              </div>
            </div>
          </div>
      ))
    }   
  }
  
  handleDetail(goodsId){
    this.props.history.push('/good/detail/'+ goodsId)
  }
  render() {
    let { goodDetailList } = this.props
    return (
      <div className="goodlist">
        {this.createDetail(goodDetailList)}
      </div>

    )
  }
}

export default connect(mapStateToProps,mapActionToProps)(GoodList)
