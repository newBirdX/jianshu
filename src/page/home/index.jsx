import React, { Component } from 'react'
import {connect} from 'react-redux'
import { HomeWrapper ,HomeLift,HomeRight,BackTop} from './style'
import Img1 from '../../statics/images/img1.jpg'
import List from './components/List'
import Recomend from './components/Recomend'
import Topic  from './components/Topic'
import Writter from './components/Writter'
import {actionCreater} from './store'
import { changeScrollTopShow } from './store/actionCreater'
class Home extends Component {
    render() {
        let {showScroll}=this.props;
        const handdleTop=()=>{
            window.scrollTo(0,0);
        }
        return (
            <HomeWrapper>
                <HomeLift>
                    <img src={Img1} className='banner-img' alt="" />
                    <Topic/>
                    <List/>
                </HomeLift>
                <HomeRight>
                    <Recomend/>
                    <Writter/>
                </HomeRight>
                {showScroll?<BackTop onClick={handdleTop}>回到顶部</BackTop>:null}
            </HomeWrapper>
        )
    }
    componentDidMount(){
        let {changeHomeData,changeScrollTopShow}=this.props;
        changeHomeData();
        const bindEvent=()=>{
            window.addEventListener("scroll",changeScrollTopShow)
        }
        bindEvent();
    }
    componentWillUnmount(){
        let {changeScrollTopShow}=this.props;
        const bindEvent=()=>{
            window.removeEventListener("scroll",changeScrollTopShow);
        }
        bindEvent(); 
    } 
}
const mapDispatchToProps=(dispatch)=>{
    return {
        changeHomeData(){
            const action=actionCreater.getHomeInfo();
            dispatch(action);
        },
        changeScrollTopShow(){
            if(document.documentElement.scrollTop>100){
                dispatch(actionCreater.changeScrollTopShow(true))
            }else{
                dispatch(actionCreater.changeScrollTopShow(false))
            }
        }
    }
}
const mapStateToProps=(state)=>{
    return {
        showScroll:state.getIn(["home","showScroll"])
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)
