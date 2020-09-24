//combineReducers       辅助函数把一个由多个不同的reducer函数作为value的object，合并成一个最终的reducer函数
import { createStore,combineReducers,applyMiddleware } from 'redux'

import homeReducer from './reducers/homeReducer'
import goodReducer from './reducers/goodReducer'
import snapReducer from './reducers/snapReducer'
import searchReducer from './reducers/searchReducer'


//中间件，用于支持redux中的异步action
import thunk from 'redux-thunk'

const reducer = combineReducers({
    home:homeReducer,
    good:goodReducer,
    snap:snapReducer,
    search:searchReducer
})






const store = createStore(reducer,applyMiddleware(thunk))

export default store