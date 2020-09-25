import React from 'react'
import loadable from '@loadable/component'
import { Icon } from 'antd-mobile';

const Home = loadable(()=>import('./home/Home'))
const Good = loadable(()=>import('./good/Good'))
const Cart = loadable(()=>import('./Cart/Cart'))
const My = loadable(()=>import('./my/My'))
const Login = loadable(()=>import('./login/login'))
const Detail = loadable(()=>import('./good/Detail.js'))
const GoodList = loadable(()=>import('./good/GoodList'))
const Snap = loadable(()=>import('./snap/snap'))
 const routes = [
    {
        id:1,
        title:'Home',
        icon:<Icon type='check-circle' />,
        selectedIcon:<Icon type='check-circle' />,
        path:'/home',
        component:Home,
        children:[
            {
                id:1000,
                path:"/app",
                component:loadable(()=>import('./home/app'))
            },
            {
                id:1001,
                path:'/search',
                component:loadable(()=>import('./search/search'))
            },
            {
                id:1002,
                path:'/searchList/:keys',
                component:loadable(()=>import('./search/searchList'))
            }
        ]
    },
    {
        id:2,
        title:'good',
        icon:<Icon type='cross-circle'></Icon>,
        selectedIcon:<Icon type='cross-circle'></Icon>,
        path:'/good/:id',
        component:Good,
        children:[
            // 二级页面
            {
                id:21,
                path:'/good/detail/:goodsId',
                component:Detail
            },
            {
                id:22,
                path:'/good/goodlist/:group_id',
                component:GoodList
            }
        ]
    },
    {
        id:3,
        title:'Cart',
        icon:<Icon type='check-circle' />,
        selectedIcon:<Icon type='check-circle' />,
        path:'/cart',
        component:Cart

    },
    {
        id:4,
        title:'My',
        icon:<Icon type='cross-circle'></Icon>,
        selectedIcon:<Icon type='cross-circle'></Icon>,
        path:'/my',
        component:My
    },
    {
        id:123,
        path:'/login/:regiSign',
        component:Login

    },
    {
        id:121,
        path:'/snap',
        component:Snap
    }
]

export default routes