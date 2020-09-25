import{
  GOOD_ADD,
  GOOD_SUB,
  GOOD_UPD,
  GOOD_DEL,
  TIME,
  GET_GOOD_LIST,
  GOOD_CHILD_UPD,
  GOOD_DETAIL,
  GOOD_SIZE_COLOR,
} from '../actionType'

import { getClassify,getClassDetail,getDetails,getSizeColor } from '@/utils/api'


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

//获取商品详情
export function getGoodDetail(params){
  return function(dispatch){
    getDetails(params).then(res=>{
    
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

//获取商品大小颜色
export function getSize(params){
  return function (dispatch){
    getSizeColor(params).then(res=>{
      dispatch({
        type:GOOD_SIZE_COLOR,
        payload:res.data.data.saleProps
      })
    }).catch(()=>{
      dispatch({
        type:GOOD_SIZE_COLOR,
      })
    })
  }
}

export function getGoods(payload){
  return {
      type:GOOD_UPD,
      payload
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