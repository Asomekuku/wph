import React from 'react'
import loadable from '@loadable/component'
import { Icon } from 'antd-mobile';

const Home = loadable(()=>import('./home/Home'))
const Good = loadable(()=>import('./good/Good'))
const Cart = loadable(()=>import('./Cart/Cart'))
const My = loadable(()=>import('./my/My'))
const Login = loadable(()=>import('./login/login'))
const Snap = loadable(()=>import('./snap/snap'))
 const routes = [
    {
        id:1,
        title:'Home',
        icon:<Icon type='check-circle' />,
        selectedIcon:<Icon type='check-circle' />,
        path:'/home',
        component:Home,
        
    },
    {
        id:2,
        title:'good',
        icon:<Icon type='cross-circle'></Icon>,
        selectedIcon:<Icon type='cross-circle'></Icon>,
        path:'/good',
        component:Good,
        children:[
            //二级页面
            // {
            //     id:11,
            //     path:'/good/details/:id',
            //     component:Details
            // },
            // {
            //     id:12,
            //     path:'/good/catlist',
            //     component:CatList
            // }
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