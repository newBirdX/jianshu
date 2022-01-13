import React, { Component } from 'react'
import {connect} from 'react-redux'
import  { Redirect} from 'react-router-dom'
import { Button, Input, LoginBox, LoginWrapper } from './style'
import {actionCreaters} from './store'
class Login extends Component {
    render() {
        let {onlogin,isLogin}=this.props;
        console.log("islogin",isLogin);
        if(!isLogin){
        return (
            <LoginWrapper>
                <LoginBox>
                    <Input placeholder='账号' ref={(input)=>{this.userName=input}}/>
                    <Input placeholder='密码' type="password" ref={(pwd)=>{this.pwd=pwd}}/>
                    <Button onClick={()=>{onlogin(this.acount,this.pwd)}}>登录</Button>
                </LoginBox>
            </LoginWrapper>
        )
    }else{
        return <Redirect to="/"></Redirect>
    }
    }
}
const mapStateToProps=(state)=>{
    return {
        isLogin:state.getIn(["login","login"])

    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        onlogin(userName,pwd){
            dispatch(actionCreaters.login(userName,pwd))
        }
    }
}
export default connect(mapStateToProps , mapDispatchToProps)(Login)