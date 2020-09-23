import {
    GET_GOOD_LIST,
    GOOD_CHILD_UPD,
    GOOD_DETAIL,
} from '../actionType'

import { getClassify,getClassDetail,getDetails } from '@/utils/api'


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