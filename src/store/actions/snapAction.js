import {FENQ , FENQLEFT ,SNAPLIST} from '../actionType'
import {fenqLeft , fenq ,fqList} from '@/utils/api'

//疯抢左边导航栏
export function getSnapLeft(params){
    return function(dispatch){
        fenqLeft(params).then(res=>{
            dispatch({
                type:FENQLEFT,
                payload:res.data.data.elevator_list
            })

        })
    }
}
//疯抢
export function getSnap(params){
    return function(dispatch){
        fenq(params).then(res=>{
            dispatch({
                type:FENQ,
                payload:res.data.data.brands
            })
        })
    }
}
//订单下疯抢数据
export function snapList(params){
    return function(dispatch){
        fqList(params).then(res=>{
            dispatch({
                type:SNAPLIST,
                payload:res.data.data
            })
        })
    }
}