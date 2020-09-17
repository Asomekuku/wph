import {
    GET_GOOD_LIST,
    GOOD_CHILD_UPD
} from '../actionType'

const initState = {
    list:[],
    listChild:{}
}

export default function goodReducer(state=initState,action){
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case GET_GOOD_LIST:
            newState.list = action.payload
            newState.listChild=newState.list[0]  
            return newState;

        case GOOD_CHILD_UPD:
            // console.log(action.payload)
            newState.list.map(ele=>{
                if(ele.cat_id===action.payload.id){
                    newState.listChild=ele
                }
                return null
            })
            return newState;

        default:
            return state;
    }
}
