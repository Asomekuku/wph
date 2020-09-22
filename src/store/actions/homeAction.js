//引入
import { GET_HOME_SLIDESHOW, GET_HOME_MAUN } from "../actionType";

import { fetchCatItems, fetchCatMaun } from "../../utils/api";

//调用轮播图的接口
export function getHomeSlideshow(params) {
  return function (dispatch) {
    fetchCatItems(params)
      .then((res) => {
        //第二次dispatch
        console.log(res.data.top_menus)
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
