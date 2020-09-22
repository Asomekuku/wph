import {
    GET_GOOD_LIST,
    GOOD_CHILD_UPD,
} from '../actionType'

import { getClassify,getClassDetail } from '@/utils/api'


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