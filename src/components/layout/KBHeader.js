import React from 'react'
import './kbheader.scss'

export default class KBHeader extends React.Component {
    render(){
        return (
            <div className="kb-header">
                {/* 头部标题 */}
                <div className="home-title">
                    优购商场
                    <div className="title-but">
                        <span>...</span>
                        <span>O</span>
                    </div>
                </div>

                {/* 搜索框 */}
                <div className="search">
                    <div className="search-box">搜索</div>
                </div>
            </div>
        )
    }
}