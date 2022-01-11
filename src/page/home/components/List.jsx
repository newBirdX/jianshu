import React, { Component } from 'react'
import {connect} from 'react-redux'
import { ListInfo,ListItem} from '../style'
class List extends Component {
    render() {
        let {list}=this.props;
        return (
            <div>
            {
                list.map((value,index)=>{
                    return(
                        <ListItem key={index}>
                            <img src={value.get("imgUrl")} alt="" className='pic'/>
                            <ListInfo>
                                <h3 className='title'>{value.get("title")}</h3>
                                <p className='desc'>{value.get("desc")}</p>
                            </ListInfo>
                        </ListItem>
                    )
                })
            }
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
   return{
    list:state.get("home").get("articalList")
   }
}
export default connect( mapStateToProps )(List);