import axios from 'axios'

let baseURL = 'https://www.linweiqin.cn/api/public/v1'
const instance = axios.create({
    baseURL: baseURL,
    timeout: 7000,
    headers: {}
});

// 请求拦截器
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    // console.log('请求拦截',config)
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
 
// 响应拦截器
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if(response.status===200){
        if(response.data){
            return response.data;
        }
    }
    
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

export default instance