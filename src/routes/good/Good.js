import React from 'react'
import './good.scss'



//引入这个高阶函数
import { connect } from 'react-redux'


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

class Good extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    //挂载完成调接口
    componentDidMount() {
        
    }
    render(){
        return (
            <div className="good">
                <h1>good</h1>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapActionToProps)(Good)