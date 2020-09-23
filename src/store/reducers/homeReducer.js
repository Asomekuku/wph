//引入
import {
  GET_HOME_SLIDESHOW,
  GET_HOME_MAUN,
  GET_HOME_SWIPER,
  GET_HOME_NAV,
  GET_HOME_CART
} from "../actionType";

//初始化数据,给所有组件共享
const initState = {
  navList: [],
  maunList: [],
  swiper: [],
  Navs: [],
  content:[]
};
export default function homeReducer(state = initState, action) {
  // 深复制
  let newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    // 标题栏
    case GET_HOME_SLIDESHOW:
      newState.navList = action.payload;
      return newState;
      // 菜单栏
    case GET_HOME_MAUN:
      newState.maunList = action.payload;
      return newState;
      // 轮播图
    case GET_HOME_SWIPER:
      newState.swiper = action.payload;
      return newState;
      // 导航栏
    case GET_HOME_NAV:
      newState.Navs = action.payload;
      return newState;
      // 卡片区域
      case GET_HOME_CART:
      newState.content =[...state.content,...action.payload];
      return newState;
    default:
      return state;
  }
}
