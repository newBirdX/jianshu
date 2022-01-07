import React, { Component } from 'react'
import { connect } from 'react-redux'
//引入第三方包，实现css动画
import { CSSTransition } from 'react-transition-group'
import { HeaderWrapper , Logo, Nav, NavItem, NavSearch,Addition,Button,SearchWrapper} from './style'
class Header  extends Component {
    // 搜索框获得焦点
    SearchFocus=()=>{
        this.setState({
            focus:true
        })
    }
     // 搜索框失去焦点
     SearchBlur=()=>{
        this.setState({
            focus:false
        })
    }
    render() {
        let {focus}=this.props;
        let {SearchFocus,SearchBlur}=this;
        return (
            <HeaderWrapper>
                <Logo href='/'/>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">
                      <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    
                    <SearchWrapper>
                        <CSSTransition in={focus} timeout={200} classNames="slide">
                    <NavSearch placeholder="搜索" className={focus?"focused":""} onFocus={SearchFocus} onBlur={SearchBlur}></NavSearch>
                        </CSSTransition>
                    <span className={focus?"focused iconfont":"iconfont"}>&#xe610;</span>
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
}
const mapStateToProps=(state,ownProps)=>{
    return {
        focus:state.focus
    }
}
const mapDispatchToProps=(dispatch,ownProps)=>{
    return {

    }
}
export default connect(mapStateToProps ,mapDispatchToProps)(Header)