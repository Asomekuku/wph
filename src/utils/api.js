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
        url:'/operation/menu/v1',
        methods:'GET',
        params
    })
}
//获取菜单栏
export function fetchCatMaun(params){
    return axios({
        url:'/operation/draw-menu/v5',
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