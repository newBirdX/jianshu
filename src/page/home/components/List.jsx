import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { ListInfo,ListItem,LoadMore} from '../style'
import { actionCreater } from '../store/index'
class List extends Component {
    render() {
        let {list,getMoreList,page}=this.props;
        return (
            <div>
            {
                list.map((value,index)=>{
                    return(
                        <Link to={"/detail/"+value.get("id")} key={index}>
                        <ListItem >
                            <img src={value.get("imgUrl")} alt="" className='pic'/>
                            <ListInfo>
                                <h3 className='title'>{value.get("title")}</h3>
                                <p className='desc'>{value.get("desc")}</p>
                            </ListInfo>
                        </ListItem>
                        </Link>
                    )
                })
            }
            <LoadMore onClick={()=>getMoreList(page)}>阅读更多</LoadMore>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
   return{
    list:state.get("home").get("articalList"),
    page:state.get("home").get("articalPage")
   }
}
const mapDispatchToProps=(dispatch)=>{
    return {
         getMoreList(page){
             dispatch(actionCreater.loadMore(page))
         }
    }
}
export default connect( mapStateToProps ,mapDispatchToProps)(List);