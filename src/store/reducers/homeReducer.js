
//引入
import { GET_HOME_SLIDESHOW,}from '../actionType'

//初始化数据,给所有组件共享
const initState={
    
}
export default function homeReducer(state=initState,action){
    // 深复制
    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case GET_HOME_SLIDESHOW:
            return newState
        default:
            return state;
    }
}