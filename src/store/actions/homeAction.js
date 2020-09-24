//引入
import { GET_HOME_SLIDESHOW, GET_HOME_MAUN,GET_HOME_SWIPER,GET_HOME_NAV,GET_HOME_CART } from "../actionType";

import { fetchCatItems, fetchCatMaun ,fetchCatSwiper,fetchCatNav,fetchCatCart} from "../../utils/api";

//调用菜单栏的接口
export function getHomeSlideshow(params) {
  return function (dispatch) {
    fetchCatItems(params)
      .then((res) => {
        //第二次dispatch
        dispatch({
          type: GET_HOME_SLIDESHOW,
          payload: res.data.top_menus,
        });
      })
      .catch((err) => {
        //第三次dispatch
        dispatch({
          type: GET_HOME_SLIDESHOW,
          payload: [],
        });
      });
  };
}
// 获取菜单栏
export function getHomeMaun(params) {
  return function (dispatch) {
    fetchCatMaun(params)
      .then((res) => {
        let menu = [];
        res.data.draw_menus.forEach((v) => {
          v.menus.forEach(n=>{
            menu.push(n)
          })
        });
        //第二次dispatch
        dispatch({
          type: GET_HOME_MAUN,
          payload: menu,
        });
      })
      .catch((err) => {
        //第三次dispatch
        dispatch({
          type: GET_HOME_MAUN,
          payload: [],
        });
      });
  };
}
//轮播图
export function getHomeSwiper(params) {
  return function (dispatch) {
    fetchCatSwiper(params)
      .then((res) => {
        // 获取数据进行循环
        let lists=[]
        let list=res.data.data.floor_list[0].data.ad_data.ad_list
         list.map((v,i)=>{
          lists.push({id:i,url:v.filename})
        })

        //第二次dispatch
        dispatch({
          type:GET_HOME_SWIPER,
          payload:lists,
        });
      })
      .catch((err) => {
        //第三次dispatch
        dispatch({
          type: GET_HOME_SWIPER,
          payload: [],
        });
      });
  };
}
// 导航栏
export function getHomeNav(params) {
  return function (dispatch) {
    fetchCatNav(params)
      .then((res) => {
        let img=res.data.data.floor_list[2].data.operation_data.data.backgroundPic
        let arr=res.data.data.floor_list[2].data.operation_data.data.block[0].child
        let img1=res.data.data.floor_list[3].data.operation_data.data.backgroundPic
        let arr1=res.data.data.floor_list[3].data.operation_data.data.block[0].child
        let arr3=[...arr,...arr1]
        console.log(arr3)
        let ImgArr=[{img:[img,img1],arr:arr3}]
        //第二次dispatch
        dispatch({
          type:GET_HOME_NAV,
          payload:ImgArr,
        });
      })
      .catch((err) => {
        //第三次dispatch
        dispatch({
          type: GET_HOME_NAV,
          payload: [],
        });
      });
  };
}
// 卡片区
export function getHomeCart(params){
  return function (dispatch){
    fetchCatCart(params).then(res=>{
      let items=res.data.data.floor_list.filter(v=>{
          return v.data.items
      })
      let operation_data=res.data.data.floor_list.filter(v=>{
        return v.data.operation_data
    })
      let item=items.map(v=>{
        return v.data.brand
      })
      let aoperation_datas=operation_data.map(v=>{
        return v.data.operation_data.groupContent.opzData.data.block[0].child[0].data
      })
      let list =[{id:Date.now(),item:item},{id:Date.now(),item:aoperation_datas}]
      dispatch({
        type:GET_HOME_CART,
        payload:list,
      });
    })
    .catch((err) => {
      //第三次dispatch
      dispatch({
        type: GET_HOME_CART,
        payload: [],
      });
    });
  }
}