import axios from './fetch'

//获取轮播图
export function fetchImg(params){
    return axios({
        url:'/home/swiperdata',
        method:'GET',
        params
    })
}

//获取导航分类
export function fetchCatItems(params){
    return axios({
        url:'home/catitems',
        methods:'GET',
        params
    })
}

//获取专区图片
export function fetchfloordata(params){
    return axios({
        url:'/home/floordata',
        methods:'GET',
        params
    })
}

//获取good商品列表分类
export function fetchgoodlist(params){
    return axios({
        url:'/categories',
        methods:'GET',
        params
    })
}




export default {
    fetchImg,
    fetchCatItems,
    fetchfloordata,
    fetchgoodlist
}