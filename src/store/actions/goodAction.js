
import{
    GOOD_ADD,
    GOOD_SUB,
    GOOD_UPD,
    GOOD_DEL,
    TIME,
    GOOD_COUNT,
    GET_GOOD_LIST,
    GOOD_CHILD_UPD,
    GOOD_DETAIL,
} from '../actionType'

import { getClassify,getClassDetail,axiosGoodDetails,getDetails } from '@/utils/api'


//获取商品列表分类
export function getgoodlist(params){
    return function(dispatch){
      getClassify(params).then(res=>{
        dispatch({
            type:GET_GOOD_LIST,
            payload:res.data
        })
      }).catch(()=>{
        dispatch({
            type:GET_GOOD_LIST,
            payload:[]
        })
      })
    }
}

//获取商品列表
export function getDetailList(params){
  return function(dispatch){
    getClassDetail(params).then(res=>{
      console.log(res)
      dispatch({
        type:GOOD_CHILD_UPD,
        payload:res.data.items
      })
    }).catch(()=>{
      dispatch({
          type:GOOD_CHILD_UPD,
          payload:[]
      })
    })
  }
}

export function getGoodDetail(params){
  return function(dispatch){
    getDetails(params).then(res=>{
      console.log(res.data.data)
      dispatch({
        type:GOOD_DETAIL,
        payload:res.data.data.product,
      })
    }).catch(()=>{
      dispatch({
        type:GOOD_DETAIL,
      })
    })
  }
}
export function getGoods(params){
  return function(dispatch){
    axiosGoodDetails(params).then(res=>{
      // console.log('goods',res)
      let data = {
        img:res.data.data.goodsMainPicture,
        shop_title:res.data.data.storeInfo,
        title:res.data.data.goodsName,
        market_price:res.data.data.marketPrice,
        vip_price:res.data.data.vipPrice,
        good_num:2 
    }
      dispatch({
        type:GOOD_UPD,
        payload:data
      })
    }).catch(()=>{
      dispatch({
          type:GOOD_UPD,
          payload:[]
      })
    })
  }
}

export function goodAdd(payload){
  return {
    type:GOOD_ADD,
    payload
  }
}

export function goodSub(payload){
  return {
    type:GOOD_SUB,
    payload
  }
}

export function goodDel(payload){
  return {
    type:GOOD_DEL,
    payload
  }
}

export function time(){
  return {
    type:TIME
  }
}