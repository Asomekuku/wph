import axios from './fetch'
import fetch from 'axios'

//获取分类页面
export function getClassify(params){
  return axios({
    url:'http://localhost:8080/api/category/category/getSellingCategorys',
    method:'GET',
    params
  })
}

//获取列表详情
export function getClassDetail(params){
  return axios({
    url:'http://localhost:8080/dp/getData',
    method:'GET',
    params
  })
}

//获取商品详情 Ming
export function getDetails(params){
  return fetch({
    url:'http://localhost:8080/vips-mobile/rest/shopping/wap/product/detail/v5',
    method:'GET',
    params
  })
}

// 获取商品详情 monkey
export function axiosGoodDetails(params){
    return fetch({
        url:'http://api.tbk.dingdanxia.com/vip/item_info',
        method:'GET',
        params
    })
}

//获取导航分类
export function fetchCatItems(params){
    return axios({
        url:'http://localhost:8080/vips-mobile/rest/operation/menu/v1',
        methods:'GET',
        params
    })
}
//获取菜单栏
export function fetchCatMaun(params){
    return axios({
        url:'http://localhost:8080/vips-mobile/rest/operation/draw-menu/v5',
        methods:'GET',
        params
    })
}
//获取专区图片
export function fetchfloordata(params){
    return axios({
        url:'http://localhost:8080/vips-mobile/rest/home/floordata',
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

// 轮播图
export function fetchCatSwiper(params){
    return axios({
        url:'http://localhost:8080/vips-mobile/rest/layout/h5/channel/data',
        methods:'GET',
        params
    })
}
//导航栏
export function fetchCatNav(params){
    return axios({
        url:'http://localhost:8080/vips-mobile/rest/layout/h5/channel/data',
        methods:'GET',
        params
    })
}
// 卡片区
export function fetchCatCart(params){
    return axios({
        url:"http://localhost:8080/vips-mobile/rest/layout/h5/channel/data",
        methods:"GET",
        params
    })}
//退出登录
export function logout(data){
    return fetch({
        url:'http://s.linweiqin.com/api/s/logout',
        method:'POST',
        data
    })
}
//疯抢
export function fenq(params){
    return fetch({
        url:'http://localhost:8080/vips-mobile/rest/lastsale/elevator_data',
        method:'GET',
        params
    })
}
//疯抢左边导航栏
export function fenqLeft(params){
    return fetch({
        url:'http://localhost:8080/vips-mobile/rest/lastsale/elevator/list/floor',
        method:'GET',
        params
    })
}
//疯抢列表
export function fqList(params){
    return fetch({
        url:'http://api.tbk.dingdanxia.com/vip/goodsList',
        method:'GET',
        params
    })
}

export default {
    axiosGoodDetails
}