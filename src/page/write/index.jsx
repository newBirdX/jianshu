import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
class Write extends Component {
    render() {
        let {isLogin}=this.props;
        if(isLogin){
            return (
                <div>
                    写文章页面
                </div>
            )
        }else{
            return (
                <Redirect to="/login"></Redirect>
            )
        }
    }
}
const mapStateToProps=(state)=>{
    return {
        isLogin:state.getIn(["login","login"])
    }
}
export default connect( mapStateToProps )(Write)