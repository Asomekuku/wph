import React from 'react'
import './secure.scss'

export default function secure(){
    return (
        <div className="kb-secure">
            <div onClick={()=>this.props.history.push('/my')}>
                <i className="iconfont icon-anquanzhuye"></i>
            </div>
            <p>你正在安全购物环境中，请放心购买</p>
        </div>
    )
}