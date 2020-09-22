import React from 'react'
import {Icon } from 'antd-mobile';
import './location.scss'

export default function Location(){
    return (
        <div className="kb-iocation">
            <div>设置收货地址</div>
            <div>
                <Icon size="md" type="right" />
            </div>
        </div>
    )
}