import React, { Component } from 'react'
import { LeftOutlined , HomeOutlined } from '@ant-design/icons'
import {withRouter} from 'react-router-dom'
 class obligation extends Component {
    iconBack(bol){
        if(bol){
           this.props.history.push('/home')
        }else{
            this.props.history.goBack()
        }
    }
    render() {
        return (
            <div>
                <div
                    style={{height:'44px',display:'flex',justifyContent:'space-between',
                    alignItems:'center',
                    fontSize:'20px'
                }}
                >
                    <LeftOutlined onClick={this.iconBack.bind(this,false)}/>
                    <HomeOutlined onClick={this.iconBack.bind(this,true)}/> 
                </div>
                <img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601016020927&di=43faf62226f9630c365fd8d0f59e5b8e&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fd288e3413cfda621d0f802d7c124c84bc510f0114910f-8oennB_fw658' alt=''
                    style={{width:'100%'}}
                />
            </div>
        )
    }
}
export default withRouter(obligation)