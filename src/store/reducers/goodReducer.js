import {
    GET_GOOD_LIST,
    GOOD_CHILD_UPD,
    GOOD_ADD,
    GOOD_SUB,
    GOOD_UPD,
    GOOD_DEL,
    TIME,
} from '../actionType'

const initState = {
  goodInitList:[],
  goodChooseList:[],
  goodDetailList:[],
  goods:[],
  date:1200,
  minute:0,    //分钟
  second:0,     //秒
}

export default function goodReducer(state=initState,action){
    //深复制
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {

        case GET_GOOD_LIST:
            newState.goodInitList = action.payload.current_node.children
            newState.goodChooseList = action.payload.cate_lv1
            return newState;

        case GOOD_CHILD_UPD:
            newState.goodDetailList = action.payload
            return newState

        case GOOD_UPD:
            newState.goods.push(action.payload)
            return newState

        case GOOD_ADD:  //加
            newState.goods[action.payload].good_num++
            return newState

        case GOOD_SUB:  //减
            newState.goods[action.payload].good_num--
            return newState
            
        case GOOD_DEL:  //删除
            console.log(action.payload)
            newState.goods.splice(action.payload,1)
            return newState

        case TIME:      //启动定时器
            newState.date--
            newState.minute = parseInt(newState.date/60)
            newState.second = parseInt(newState.date%60)
            // console.log(`多少分${newState.minute}多少秒${newState.second}`)
            return newState
        default:
            return state;
    }
}
