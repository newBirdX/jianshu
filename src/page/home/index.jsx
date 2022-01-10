import React, { Component } from 'react'
import { HomeWrapper ,HomeLift,HomeRight} from './style'
import Img1 from '../../statics/images/img1.jpg'
import List from './components/List'
import Recomend from './components/Recomend'
import Topic  from './components/Topic'
import Writter from './components/Writter'
export default class Home extends Component {
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
}
