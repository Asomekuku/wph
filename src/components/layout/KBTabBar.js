import React from 'react'
import { TabBar } from 'antd-mobile';
import routes from '@/routes/'
import { withRouter } from 'react-router-dom'
import './kbtabbar.scss'


class KBTabBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          selectedTab: 'redTab',
          hidden: false,
        };
    }
    
    //跳转路由
    jump(path){
        this.props.history.push(path)
    }
    //创建路由
    createTabBar(){
        let arr=[]
        routes.map(ele=>{
            arr.push(
                <TabBar.Item
                        title={ele.title}
                        key={ele.id}
                        icon={ele.icon}
                        selectedIcon={ele.icon}
                        onPress={this.jump.bind(this,ele.path)}
                    >
                </TabBar.Item>
            )
            return null
        })
        return arr
    }
    render(){
        // console.log(this.props)
        return (
            <div className="kb-tabbar">

                <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                hidden={this.state.hidden}
                >
                    {this.createTabBar()}
                </TabBar>
            </div>
        )
    }
}

export default withRouter(KBTabBar)