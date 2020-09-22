import axios from './fetch'
import fetch from 'axios'
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

    })}

//短信验证码
export function getMobileCode(params){
    return fetch({
        url:'http://s.linweiqin.com/api/s/getMobileCode',
        method:'GET',
        params
    })
}
//注册
export function createUser(data){
    return fetch({
        url:'http://s.linweiqin.com/api/s/createUser',
        method:'POST',
        data
    })
}
//登录
export function loginCheck(data){
    return fetch({
        url:'http://s.linweiqin.com/api/s/loginCheck',
        method:'POST',
        data
    })
}


export default {
    fetchImg,
}