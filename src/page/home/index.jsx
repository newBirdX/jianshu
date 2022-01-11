import React, { Component } from 'react'
import {connect} from 'react-redux'
import { HomeWrapper ,HomeLift,HomeRight} from './style'
import Img1 from '../../statics/images/img1.jpg'
import List from './components/List'
import Recomend from './components/Recomend'
import Topic  from './components/Topic'
import Writter from './components/Writter'
import {actionCreater} from './store'
class Home extends Component {
    render() {
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
            </HomeWrapper>
        )
    }
    componentDidMount(){
        let {changeHomeData}=this.props;
        changeHomeData();
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        changeHomeData(){
            const action=actionCreater.getHomeInfo();
            dispatch(action);
        }
    }
}
export default connect(null,mapDispatchToProps)(Home)
