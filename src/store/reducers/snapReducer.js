import {FENQ,FENQLEFT , SNAPLIST} from '../actionType'

const initState={
    spanLeftList:[],
    snapList:[],
    fengqList:[],//疯抢数据官网
}

export default function Snap(state=initState,action){
    let newState=JSON.parse(JSON.stringify(state))
    switch(action.type){
        // 疯抢
        case FENQ:
            newState.fengqList=action.payload
        return newState
        //疯抢左边导航
        case FENQLEFT:
            newState.spanLeftList=action.payload
        return newState   
        case SNAPLIST:
            newState.snapList=action.payload
            return newState 
        default :
        return newState
    }
}

