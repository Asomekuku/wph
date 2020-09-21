// import axios from './fetch'
import abc from 'axios'

//获取轮播图
export function fetchImg(params){
    return abc({
        url:'http://api.tbk.dingdanxia.com/vip/goodsList',
        method:'GET',
        params
    })
}






export default {
    fetchImg,
}