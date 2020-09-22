import React from 'react'
import './good.scss'
import { SearchBar } from 'antd-mobile';
import {getgoodlist,getDetailList} from '../../store/actions/goodAction'

//引入这个高阶函数
import { connect } from 'react-redux'


//共享state中的数据，可以用this.props进行访问
function mapStateToProps(store){
    return{
      goodInitList:store.good.goodInitList,
      goodChooseList:store.good.goodChooseList,
      goodDetailList:store.good.goodDetailList,
    }
}
//把action生成器方法，映射到props上面
function mapActionToProps(dispatch){
    return {
      //商品分类
      goodInit:(params)=>dispatch(getgoodlist(params)),

      //商品详情列表
      detailInit:(params)=>dispatch(getDetailList(params))
    }
}

class Good extends React.Component{
    constructor(props){
        super(props)
        this.state={
          value:'',
          initIdx: 0,
        }
    }
    //挂载完成调接口
    componentDidMount() {
      this.props.goodInit({})
    }
    onChange= (value) => {
      this.setState({ value });
    };
    //点击切换id
    handleSelect(idx,id){
      this.setState({
        initIdx:idx
      })
      this.props.goodInit({category_id:id})
    }
    createGoodLi(children){
      return children.map(ele=>(
        <div className="img-box" key={ele.categoryId} onClick={this.handleDetail.bind(this,ele.categoryId)}>
          <img src={ele.image} alt="图片"/>
          <span>{ele.name}</span>
        </div>
      ))
    }
    //列表
    createGoodList(goodInitList){
      if(goodInitList){
        return goodInitList.map(ele=>(
          <div className="cate-box" key={ele.categoryId}>
            <h2>{ele.name}</h2>
            <div className="goods-box">
              {this.createGoodLi(ele.children)}
            </div>
          </div>
        ))
      }
    }
    //左边分类
    createCate(ele){
      let { initIdx } = this.state
      return ele.map((v,index)=>(
        <div className={index === initIdx ? "good-item on":"good-item"} onClick={this.handleSelect.bind(this,index,v.categoryId)} key={v.categoryId}>
          <span>{v.name}</span>
        </div>
      ))
    }
    //点击跳转相关列表页
    handleDetail(group_id){
      console.log(group_id)
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
    render(){
      let { goodInitList, goodChooseList} = this.props
      console.log(goodInitList)
        return (
            <div className="good">
              <div className="good-search">
                <SearchBar
                  value={this.state.value}
                  placeholder="护肤套装"
                  onSubmit={value => console.log(value, 'onSubmit')}
                  onClear={value => console.log(value, 'onClear')}
                  onFocus={() => console.log('onFocus')}
                  onBlur={() => console.log('onBlur')}
                  onCancel={() => console.log('onCancel')}
                  onChange={this.onChange}
                />
              </div>
              <div className="good-con">
                <div className="good-left">
                  {this.createCate(goodChooseList)}
                </div>
                <div className="good-right">
                  {this.createGoodList(goodInitList)}
                </div>
              </div>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapActionToProps)(Good)