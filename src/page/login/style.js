import styled from "styled-components";
//外部包裹框
export const LoginWrapper=styled.div`
  position:absolute;
  left:0;
  top:56px;
  bottom:0;
  right:0;
  background:#ccc;
`
//登录框
export const LoginBox=styled.div`
  width:400px;
  height:220px;
  margin:80px auto;
  padding-top:20px;
  background:#fff;
  box-shadow:0 0 8px rgba(0,0,0,.1);
`
//输入框
export const Input=styled.input`
  display:block;
  width:200px;
  height:30px;
  line-height:30px;
  margin:10px auto;
  padding:0 10px;
  color:#777;
  outline:none;
`
//登录按钮
export const Button=styled.div`
  width:220px;
  height:30px;
  line-height:30px;
  margin:10px auto;
  color:#fff;
  background:#3194d0;
  border-radius:15px;
  text-align:center;
`