# react-app-wph项目文件夹目录介绍：

#### src：
    assets: 静态资源目录

    components：自定义组件库
                common：公共可复用组件存放点
                        KBtabbar：首页顶部导航
                        CartBtn：前往购物车页面按钮
                index:路径总览文件

    routes：页面存放点，每个页面一个文件夹
            home：首页
            good：商品分类列表
            cart：购物车页面
            my：用户页面
            index:路径总览文件
    
    store：数据存放仓库
            actions：action生成器
            reducer：reducer
            actionType：字典
            index:把所有的reducer文件合并到一起再抛出
    
    utils：封装工具存放点
            fetch：封装axios
            api：所有的请求方法

App.js：根目录
index.js:路口文件


### 安装的第三方插件
        npm install http-proxy-middleware -D       第三方代理
        npm install react-router-dom -S             路由
        npm install @loadable/component -S          代码分割
        npm install antd -S                         antd
        npm install redux -S                        redux
        npm install react-redux -S
        npm install redux-thunk -S                  中间件
        
###  技术难点
1.home页面跨域一直报错，启动项目一开就蹦页面，去网上搜了下，说是10代处理器的问题
解决方案：安装14版本以上的node,里面有一个node.exe能解决这一问题