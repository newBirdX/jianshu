import React, { Component } from 'react'
import { Button, Input, LoginBox, LoginWrapper } from './style'
export default class Login extends Component {
    render() {
        return (
            <LoginWrapper>
                <LoginBox>
                    <Input placeholder='账号'/>
                    <Input placeholder='密码'/>
                    <Button>登录</Button>
                </LoginBox>
            </LoginWrapper>
        )
    }
}
