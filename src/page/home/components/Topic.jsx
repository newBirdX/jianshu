import React, { Component } from 'react'
import { connect } from 'react-redux'
import {TopicWrapper,TopicItem} from '../style'
import Img1 from '../../../statics/images/img1.jpg'
class Topic extends Component {
    render() {
        let {list}=this.props;
        console.log("list",list);
        return (
            <TopicWrapper>
                {
                    list.map((value,index)=>{
                        return (
                            <TopicItem key={index}>
                                <img src={value.get("imgUrl")} className='topic-pic' alt="" />
                                {value.get("title")}
                            </TopicItem>
                        )
                    })
                }
                <TopicItem>
                    <img src={Img1} className='topic-pic' alt="" />
                    社会热点
                </TopicItem>
            </TopicWrapper>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
       list:state.get("home").get("topicList")
    }
}
export default connect( mapStateToProps)(Topic)