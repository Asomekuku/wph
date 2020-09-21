import React from 'react'
import { withRouter } from 'react-router-dom'
import './kbtabbar.scss'


class KBTabBar extends React.Component{
    
    render(){
        // console.log(this.props)
        return (
            <div className="kb-tabbar">
                {/* 用户 */}
                <div onClick={()=>this.props.history.push('/my')}>
                    <i className="iconfont icon-yonghu"></i>
                </div>
                {/* 搜索 */}
                <div>
                    大家正在搜索：xxxxxxx
                </div>
                {/* 分类 */}
                <div onClick={()=>this.props.history.push('/good')}>
                    <i className="iconfont icon-fenlei"></i>
                </div>
            </div>
        )
    }
}

export default withRouter(KBTabBar)

// <TabBar
// unselectedTintColor="#949494"
// tintColor="#33A3F4"
// barTintColor="white"
// hidden={this.state.hidden}
// >
//     {this.createTabBar()}
// </TabBar>


//创建路由
// createTabBar(){
//     let arr=[]
//     routes.map(ele=>{
//         arr.push(
//             <TabBar.Item
//                     title={ele.title}
//                     key={ele.id}
//                     icon={ele.icon}
//                     selectedIcon={ele.icon}
//                     onPress={this.jump.bind(this,ele.path)}
//                 >
//             </TabBar.Item>
//         )
//         return null
//     })
//     return arr
// }