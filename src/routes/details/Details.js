import React from 'react'
import { KBTabBar } from '@/components/'
import { NavBar, Icon } from 'antd-mobile';
import './details.scss'

export default class Details extends React.Component{
    

    render(){
        return (
            <div>            
                <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => this.props.history.goBack()}
                rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    <Icon key="1" type="ellipsis" />,
                ]}
                >商品详情</NavBar>
                <KBTabBar></KBTabBar>
            </div>
        )
    }
}