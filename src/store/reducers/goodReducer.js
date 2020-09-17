import {
    GET_GOOD_LIST
} from '../actionType'

const initState = {
}

export default function goodReducer(state=initState,action){
    //深复制
    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case GET_GOOD_LIST:
             
            return newState;


        default:
            return state;
    }
}
