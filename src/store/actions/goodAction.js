import {
    GET_GOOD_LIST,
} from '../actionType'

import { fetchgoodlist } from '@/utils/api'


//获取商品列表分类
export function getgoodlist(params){
    return function(dispatch){
        fetchgoodlist(params).then(res=>{
            // console.log('res',res)
            dispatch({
                type:GET_GOOD_LIST,
                payload:res.message
            })
        }).catch(err=>{
            dispatch({
                type:GET_GOOD_LIST,
                payload:[]
            })
        })
    }
}