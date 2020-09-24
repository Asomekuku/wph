import React from 'react'
import { withRouter } from 'react-router-dom'
import styles from './kbtabbar.module.scss'


class KBTabBar extends React.Component{
    
    render(){
        // console.log(this.props)
        return (
            <div className={styles.kbTabbar}>
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
