
//引入
import { 
    GET_HOME_SLIDESHOW,
    GET_HOME_CATITEMS,
    GET_HOME_FLOORDATA }from '../actionType'

//初始化数据,给所有组件共享
const initState={
    slideshow:[],       //轮播图
    CatItems:[],        //分类
    floordata:[]        //专区
}
export default function homeReducer(state=initState,action){
     let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case GET_HOME_SLIDESHOW:
            //获取轮播图
            newState.slideshow = action.payload
        return newState;

        case GET_HOME_CATITEMS:
            //获取分类
            newState.CatItems = action.payload
        return newState;
        
        case GET_HOME_FLOORDATA:
            //专区
            newState.floordata = action.payload
        return newState
        default:
            return state;
    }
}