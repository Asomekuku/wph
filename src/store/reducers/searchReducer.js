import { GET_SEARCH_HOST, GET_SEARCH_LIST } from "../actionType";

const searchState = {
  hostList: [],
  changeList: [],
};

export default function (state = searchState, action) {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case GET_SEARCH_HOST:
      newState.hostList = action.payload;
      return newState;
    case GET_SEARCH_LIST:
      newState.changeList = action.payload;
      return newState;
    default:
      return state;
  }
}
