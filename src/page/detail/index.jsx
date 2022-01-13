import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Content, DetailWrapper, Header }from './style'
import {actionCreaters} from './store'
class Detail extends Component {
    render() {
        let {title,content}=this.props;
        return (
            <DetailWrapper>
               <Header>{title}</Header>
               <Content dangerouslySetInnerHTML={{__html:content}}/>
            </DetailWrapper> 
        )
    }
    componentDidMount(){
        let {getDetail}=this.props;
        getDetail(this.props.match.params.id);
    }
}
const mapStateToProps=(state)=>{
    return {
        title:state.getIn(["detail","title"]),
        content:state.getIn(["detail","content"])
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        getDetail(id){
            dispatch(actionCreaters.getDetail(id))
        }
    }
}
export default connect( mapStateToProps ,mapDispatchToProps )(withRouter(Detail))