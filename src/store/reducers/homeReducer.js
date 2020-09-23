//引入
import { GET_HOME_SLIDESHOW, GET_HOME_MAUN } from "../actionType";

//初始化数据,给所有组件共享
const initState = {
  navList: [],
  maunList:[]
};
export default function homeReducer(state = initState, action) {
  // 深复制
  let newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case GET_HOME_SLIDESHOW:
      newState.navList = action.payload;
      console.log(action.payload)
      console.log('',newState)
      return newState;
    case GET_HOME_MAUN:
      newState.maunList = action.payload;
      return newState;
    default:
      return state;
  }
}
