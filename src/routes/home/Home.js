import React from 'react'
import './home.scss'

import { KBTabBar,CartBtn } from '@/components/'


//引入这个高阶函数
import { connect } from 'react-redux'
<<<<<<< HEAD
import {abc } from '../../utils/api'
=======

import { fetchImg } from '@/utils/api'

>>>>>>> 82cbf572d503545be97d649f9998736b846621ec

//共享state中的数据，可以用this.props进行访问
function mapStateToProps(store){
    return{
        
    }
}
//把action生成器方法，映射到props上面
function mapActionToProps(dispatch){
    return {
        
    }
}

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    //挂载完成调接口
    componentDidMount() {
<<<<<<< HEAD
        abc({
            apikey:'e66p5gkSEl3lmPJ4bV28mbUe8I78ewhX',
            channelType:'0',
=======
        fetchImg({
            apikey:'e66p5gkSEl3lmPJ4bV28mbUe8I78ewhX',
            channelType:0,
>>>>>>> 82cbf572d503545be97d649f9998736b846621ec
            page:1
        }).then(res=>{
            console.log(res)
        })
<<<<<<< HEAD
        
        
=======
>>>>>>> 82cbf572d503545be97d649f9998736b846621ec
    }
    render(){
        return (
            <div className="home">
                <h1>home</h1>
                <KBTabBar></KBTabBar>
                <CartBtn></CartBtn>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapActionToProps)(Home)