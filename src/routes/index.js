import React from 'react'
import loadable from '@loadable/component'
import { Icon } from 'antd-mobile';

const Home = loadable(()=>import('./home/Home'))
const GoodList = loadable(()=>import('./good/GoodList'))
const Find = loadable(()=>import('./find/Find'))
const My = loadable(()=>import('./my/My'))
const Details = loadable(()=>import('./details/Details'))
const CatList = loadable(()=>import('./catlist/CatList'))

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
        component:GoodList,
        children:[
            {
                id:11,
                path:'/good/details/:id',
                component:Details
            },
            {
                id:12,
                path:'/good/catlist',
                component:CatList
            }
        ]
    },
    {
        id:3,
        title:'Friend',
        icon:<Icon type='check-circle' />,
        selectedIcon:<Icon type='check-circle' />,
        path:'/find',
        component:Find

    },
    {
        id:4,
        title:'My',
        icon:<Icon type='cross-circle'></Icon>,
        selectedIcon:<Icon type='cross-circle'></Icon>,
        path:'/my',
        component:My
    }
]

export default routes