import styled from 'styled-components'
import logoPic from '../../statics/logo.png'
//整个头部标签
export const HeaderWrapper=styled.div`
  height:56px;
  background:#fff;
  border-bottom:1px solid #f0f0f0;
  position:relative;
`
//logo
export const Logo=styled.div`
  width:100px;
  height:56px;
  position:absolute;
  background:url(${logoPic});
  background-size: contain;
`
//导航部分
export const Nav=styled.div`
  width:960px;
  height:100%;
  margin:0 auto;
  padding-right:20px;
  box-sizing:border-box;
`
//导航项
export const NavItem=styled.div`
  line-height:56px;
  padding:0 15px;
  color:#333;
  &.left{
      float:left;
  }
  &.right{
      float:right;
      color:#969696;
  }
  &.active{
      color:#ea6f5a;
  }
`
//搜索框
export const NavSearch=styled.input`
  width:160px;
  height:38px;
  border:none;
  outline:none;
  border-radius:19px;
  background:#eee;
  margin-top:9px;
  padding: 0 30px 0 20px;
  box-sizing:border-box;
  font-size:14px;
  color:#666;
  &::placeholder{
      color:#999;
  }
  &.focused{
    width:240px;
  }
  &.slide-enter{
    transition: all .2s ease-out;
  }
  &.slide-enter-active{
    width:240px;
  }
  &.slide-exit{
    transition: all .2s ease-out;
  }
  &.slide-exit-active{
    width:160px;
  }
`
//推荐栏
export const SearchInfo=styled.div`
  position:absolute;
  top:54px;
  left:0px;
  width:240px;
  padding:0 20px;
  background:#fff;
  box-shadow:0 0 8px rgba(0,0,0, .2);
`
//推荐栏标题
export const SearchInfoTitle=styled.div`
  margin-top:20px;
  margin-bottom:15px;
  line-height:20px;
  font-size:14px;
  color:#969696;
`
//换一换按钮
export const SearchInfoSwitch=styled.span`
  float:right;
  font-size:12px;
  cursor:pointer;
  .spin{
    display:inline-block;
    font-size:12px;
    margin-right:2px;
    transition: all .4s ease-in;
    transform:rotate(0deg);
    transform-origin:center,center;
  }
`
//包裹推荐单个项的div
export const SearchInfoList=styled.div`
  overflow:hidden;
`
//推荐栏单个项
export const SearchInfoItem=styled.a`
  display:block;
  cursor:pointer;
  float:left;
  margin-right:10px;
  margin-bottom:10px;
  padding:0 5px;
  line-height:20px;
  border:1px solid #ddd;
  color:#777;
  border-radius:3px;
  font-size:12px;
`
//放按钮的div
export const Addition=styled.div`
  position:absolute;
  top:0;
  right:0;
  height:56px;
`
//写文章按钮
export const Button=styled.div`
  float:right;
  margin-top:9px;
  line-height:38px;
  border-radius:19px;
  border:1px solid #ec6149;
  margin-right:20px;
  padding: 0 20px;
  &.reg{
      color:#ec6149;
  }
  &.writting{
      background:#ec6149;
      color:#fff;
  }
`
//整个的搜索框被包住
export const SearchWrapper=styled.div`
  background:#fff;
  float:left;
  position:relative;
  .zoom{
    background:#eee;
    position:absolute;
    right:5px;
    bottom:4px;
    width:30px;
    line-height:30px;
    border-radius:15px;
    text-align:center;
    &.focused{
      background:#777;
      color:#fff;
    }
  }
`
