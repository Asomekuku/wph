import React from 'react';
import '@/assets/css/app.css';                          //样式

import 'antd-mobile/dist/antd-mobile.css'               //mobile样式
import 'antd-mobile/lib/date-picker/style/css';         

//路由
import routes from '@/routes/'
import { HashRouter,Route,Redirect,Switch } from 'react-router-dom'

//redux
import { Provider } from 'react-redux'
import store from '@/store/'


class App extends React.Component {

  // 创建route
  createRoutes(){
    let res=[]  //  创建一个数组来装所有的route

    routes.map(ele=>{ //循环路由数组

      res.push(     //第一层
        <Route exact key={ele.id} path={ele.path} component={ele.component}/>
      )

      if(ele.children){   //判断如果有第二层就添加
        ele.children.map(ele2=>{
          res.push(<Route exact key={ele2.id} path={ele2.path} component={ele2.component}/>)
          return null
        })
      }
      return null
    })
    //装好了所有的路由在一并抛出
    return res
  }
  
  render(){
    return (
      <HashRouter>
        <Provider store={store}>
          <Switch>
            {this.createRoutes()}
            <Redirect from="/*" to="/home"></Redirect>
          </Switch>
        </Provider>
      </HashRouter>
    );
  }
}

export default App;
