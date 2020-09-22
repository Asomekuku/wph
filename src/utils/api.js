import axios from './fetch'

//获取分类页面
function getClassify(params){
  return axios({
    url:'http://localhost:8080/api/category/category/getSellingCategorys',
    method:'GET',
    params
  })
}

//获取列表详情
function getClassDetail(params){
  return axios({
    url:'http://localhost:8080/dp/getData',
    method:'GET',
    params
  })
}





export {
  getClassify,
  getClassDetail
}