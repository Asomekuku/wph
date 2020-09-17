//引入
import { 
    GET_HOME_SLIDESHOW,
    }from '../actionType'

import { fetchImg } from '@/utils/api'

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
