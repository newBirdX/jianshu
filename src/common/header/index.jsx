import React, { Component } from 'react'
import { connect } from 'react-redux'
//引入第三方包，实现css动画
import { CSSTransition } from 'react-transition-group'
import { HeaderWrapper , Logo, Nav, NavItem, NavSearch,Addition,Button,SearchWrapper,SearchInfo,SearchInfoTitle,SearchInfoSwitch,SearchInfoItem
         ,SearchInfoList
} from './style'
import {actionCreaters} from './store';
const Header = (props) => {
    let { focus, SearchFocus, SearchBlur } = props;
    const showInfo=(show)=>{
        if(show){
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch>换一换</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                            <SearchInfoItem>教育</SearchInfoItem>
                            <SearchInfoItem>简书</SearchInfoItem>
                            <SearchInfoItem>投稿</SearchInfoItem>
                            <SearchInfoItem>教育</SearchInfoItem>
                            <SearchInfoItem>简书</SearchInfoItem>
                            <SearchInfoItem>投稿</SearchInfoItem>
                    </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null;
        }
    }
    return (
    <HeaderWrapper>
        <Logo href='/' />
        <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载App</NavItem>
            <NavItem className="right">登录</NavItem>
            <NavItem className="right">
                <span className="iconfont">&#xe636;</span>
            </NavItem>

            <SearchWrapper>
                <CSSTransition in={focus} timeout={200} classNames="slide">
                    <NavSearch placeholder="搜索" className={focus ? "focused" : ""} onFocus={SearchFocus} onBlur={SearchBlur}></NavSearch>
                </CSSTransition>
                <span className={focus ? "focused iconfont" : "iconfont"}>&#xe610;</span>
                { showInfo(focus)}
            </SearchWrapper>
        </Nav>
        <Addition>
            <Button className='writting'>
                <span className="iconfont">&#xe600;</span>
                写文章
            </Button>
            <Button className="reg">注册</Button>
        </Addition>
    </HeaderWrapper>
    )
}
// class Header  extends Component {
    // 搜索框获得焦点
    // SearchFocus=()=>{
    //     this.setState({
    //         focus:true
    //     })
    // }
     // 搜索框失去焦点
    //  SearchBlur=()=>{
    //     this.setState({
    //         focus:false
    //     })
    // }
    // render() {
       
    //     return (
            
    //     )
    // }
// }
const mapStateToProps=(state,ownProps)=>{
    return {
        focus:state.get("header").get("focus")
    }
}
const mapDispatchToProps=(dispatch,ownProps)=>{
    return {
       SearchFocus(){
            dispatch(actionCreaters.searchfocus())
        },
        SearchBlur(){
            dispatch(actionCreaters.searchblur())
        }
    }
}
export default connect(mapStateToProps ,mapDispatchToProps)(Header)