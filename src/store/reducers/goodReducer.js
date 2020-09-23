import {
    GET_GOOD_LIST,
    GOOD_CHILD_UPD,
    GOOD_DETAIL,
} from '../actionType'

const initState = {
  goodInitList:[],
  goodChooseList:[],
  goodDetailList:[],
  goodDetails:'',
}

export default function goodReducer(state=initState,action){
    //深复制
    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case GET_GOOD_LIST:
          console.log(action)
          newState.goodInitList = action.payload.current_node.children
          newState.goodChooseList = action.payload.cate_lv1
          return newState;
        case GOOD_CHILD_UPD:
          newState.goodDetailList = action.payload
          return newState
        case GOOD_DETAIL:
          newState.goodDetails = action.payload
          return newState
        default:
          return state
    }
}
