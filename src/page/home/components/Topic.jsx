import React, { Component } from 'react'
import {TopicWrapper,TopicItem} from '../style'
import Img1 from '../../../statics/images/img1.jpg'
export default class Topic extends Component {
    render() {
        return (
            <TopicWrapper>
                <TopicItem>
                    <img src={Img1} className='topic-pic' alt="" />
                    社会热点
                </TopicItem>
                <TopicItem>
                    <img src={Img1} className='topic-pic' alt="" />
                    社会热点
                </TopicItem>
                <TopicItem>
                    <img src={Img1} className='topic-pic' alt="" />
                    社会热点
                </TopicItem>
                <TopicItem>
                    <img src={Img1} className='topic-pic' alt="" />
                    社会热点
                </TopicItem>
                <TopicItem>
                    <img src={Img1} className='topic-pic' alt="" />
                    社会热点
                </TopicItem>
                <TopicItem>
                    <img src={Img1} className='topic-pic' alt="" />
                    社会热点
                </TopicItem>
                <TopicItem>
                    <img src={Img1} className='topic-pic' alt="" />
                    社会热点
                </TopicItem>
            </TopicWrapper>
        )
    }
}
