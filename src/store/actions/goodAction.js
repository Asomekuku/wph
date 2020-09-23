import {
    GET_GOOD_LIST,
    GOOD_CHILD_UPD,
    GOOD_ADD,
    GOOD_SUB,
    GOOD_UPD,
    GOOD_DEL,
    TIME
} from '../actionType'

import { getClassify,getClassDetail,axiosGoodDetails } from '@/utils/api'


//获取商品列表分类
export function getgoodlist(params){
    return function(dispatch){
      getClassify(params).then(res=>{
        console.log('res',res)
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

export function getDetailList(params){
  return function(dispatch){
    getClassDetail(params).then(res=>{
      console.log('detail',res)
      dispatch({
        type:GOOD_CHILD_UPD,
        payload:res.data
      })
    }).catch(()=>{
      dispatch({
          type:GOOD_CHILD_UPD,
          payload:[]
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