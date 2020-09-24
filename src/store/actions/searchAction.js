import { GET_SEARCH_HOST,GET_SEARCH_LIST } from "../actionType";
import { fetchHost,fetchList } from "../../utils/api";
// 热门
export function getHostList(params) {
  return function (dispatch) {
    fetchHost(params)
      .then((res) => {
        // 派发一个action
        dispatch({
          type: GET_SEARCH_HOST,
          payload: res.data.data.list,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_SEARCH_HOST,
          payload: "",
        });
      });
  };
}
// 搜索列表
export function getChangeList(params) {
    return function (dispatch) {
        fetchList(params)
        .then((res) => {
          // 派发一个action
          dispatch({
            type: GET_SEARCH_LIST,
            payload:res.data.data.promptWords,
          });
        })
        .catch((err) => {
          dispatch({
            type: GET_SEARCH_LIST,
            payload: "",
          });
        });
    };
  }