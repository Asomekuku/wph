//引入
import { 
    GET_HOME_SLIDESHOW,
    GET_HOME_CATITEMS,
    GET_HOME_FLOORDATA }from '../actionType'

import { fetchImg,fetchCatItems,fetchfloordata } from '@/utils/api'

//调用轮播图的接口
export function getHomeSlideshow(params){
    return function(dispatch){
        fetchImg(params).then(res=>{
            
            //第二次dispatch
            dispatch({
                type:GET_HOME_SLIDESHOW,
                payload:res.message
            })
        }).catch(err=>{
            //第三次dispatch
            dispatch({
                type:GET_HOME_SLIDESHOW,
                payload:[]
            })
        })
    }
}

// 调接口分类
export function getCatItems(params){
    return function(dispatch){
        fetchCatItems(params).then(res=>{
            dispatch({
                type:GET_HOME_CATITEMS,
                payload:res.message
            })
        }).catch(err=>{
            dispatch({
                type:GET_HOME_CATITEMS,
                payload:[]
            })
        })
    }
}

//专区
export function getfloordata(params){
    return function(dispatch){
        fetchfloordata(params).then(res=>{
            dispatch({
                type:GET_HOME_FLOORDATA,
                payload:res.message
            })
        }).catch(err=>{
            dispatch({
                type:GET_HOME_FLOORDATA,
                payload:[]
            })
        })
    }
}