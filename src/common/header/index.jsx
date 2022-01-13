import React, { Component } from 'react'
import { connect } from 'react-redux'
//引入第三方包，实现css动画
import { CSSTransition } from 'react-transition-group'
import { Link } from 'react-router-dom'
import { HeaderWrapper , Logo, Nav, NavItem, NavSearch,Addition,Button,SearchWrapper,SearchInfo,SearchInfoTitle,SearchInfoSwitch,SearchInfoItem
         ,SearchInfoList
} from './style'
import {actionCreaters} from './store';
class Header extends Component{
    render (){
        let { focus, SearchFocus, SearchBlur ,handdleMouseIn ,handdleMouseOut,List,page,mouseIn,handdleChangePage,totalPage,login} =this.props;
        let jsList=List.toJS();
        let pageList=[];
        const showInfo=()=>{
            for(let i=(page-1)* 10 ;i<page * 10;i++){
                pageList.push(
                    <SearchInfoItem key={i}>{jsList[i]}</SearchInfoItem>
                )
            }
            if(focus||mouseIn){
                return (
                    <SearchInfo onMouseEnter={handdleMouseIn} onMouseLeave={handdleMouseOut}>
                        <SearchInfoTitle>
                            热门搜索
                            <SearchInfoSwitch onClick={()=>{handdleChangePage(page,totalPage,this.spinIcon)}} ><span className="iconfont spin" ref={(icon)=>{this.spinIcon=icon}}>&#xe851;</span>换一换</SearchInfoSwitch>
                        </SearchInfoTitle>
                        <SearchInfoList>
                               {pageList}
                        </SearchInfoList>
                    </SearchInfo>
                )
            }else{
                return null;
            }
        }
        return (
            <HeaderWrapper>
                <Link to="/"><Logo/></Link>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    {
                        login ? <NavItem className="right">退出</NavItem> : <Link to="/login"><NavItem className="right">登陆</NavItem> </Link>
                    }
                    <NavItem className="right">
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
        
                    <SearchWrapper>
                        <CSSTransition in={focus} timeout={200} classNames="slide">
                            <NavSearch placeholder="搜索" className={focus ? "focused" : ""} onFocus={()=>{SearchFocus(List)}} onBlur={SearchBlur}></NavSearch>
                        </CSSTransition>
                        <span className={focus ? "focused iconfont zoom" : "iconfont zoom"}>&#xe610;</span>
                        { showInfo()}
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
        focus:state.get("header").get("focus"),
        List:state.get("header").get("List"),
        page:state.get("header").get("page"),
        mouseIn:state.get("header").get("mouseIn"),
        totalPage:state.get("header").get("totalPage"),
        login:state.get("login").get("login")
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
       SearchFocus(List){
            (List.size===0)&&dispatch(actionCreaters.getList());
            dispatch(actionCreaters.searchfocus())
        },
        SearchBlur(){
            dispatch(actionCreaters.searchblur())
        },
        handdleMouseIn(){
            dispatch(actionCreaters.mouseIn())
        },
        handdleMouseOut(){
            dispatch(actionCreaters.mouseOut())
        },
        handdleChangePage(page,totalPage,spin){
            let originAngle=spin.style.transform.replace(/[^0-9]/ig,"");
            console.log(originAngle);
            if(originAngle){
                originAngle=parseInt(originAngle,10);
            }else{
                originAngle=0;
            }
            spin.style.transform='rotate('+(originAngle+360)+'deg)';
            if(page<totalPage){
                dispatch(actionCreaters.changePage(page+1))
            }else{
                 dispatch(actionCreaters.changePage(1))
            }
           
        },

    }
}
export default connect(mapStateToProps ,mapDispatchToProps)(Header)