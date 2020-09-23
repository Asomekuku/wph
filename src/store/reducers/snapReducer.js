import {FENQ,FENQLEFT , SNAPLIST} from '../actionType'

const initState={
    spanLeftList:[],
    snapList:[]
}

export default function Snap(state=initState,action){
    let newState=JSON.parse(JSON.stringify(state))
    switch(action.type){
        // 疯抢
        case FENQ:
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

