import { GET_SEARCH_HOST,GET_SEARCH_LIST, GET_SEARCH_NAV,GET_SEARCH_VIEW} from "../actionType";
import { fetchHost,fetchList,fetchNavList, fetchVIEW} from "../../utils/api";
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
// 搜索详情页
export function getSearchNav(params) {
  return function (dispatch) {
    fetchNavList(params)
      .then((res) => {
        // 派发一个action
        dispatch({
          type: GET_SEARCH_NAV,
          payload:res.data.data.imageLabels,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_SEARCH_NAV,
          payload: "",
        });
      });
  };
}
// 搜索列表图
export function getSearchVIEW(params) {
  return function (dispatch) {
    fetchVIEW(params)
      .then((res) => {

        // 派发一个action
        dispatch({
          type: GET_SEARCH_VIEW,
          payload:"",
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_SEARCH_VIEW,
          payload: "",
        });
      });
  };
}