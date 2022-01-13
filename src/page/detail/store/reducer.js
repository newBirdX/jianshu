import { fromJS } from "immutable";
import {constances} from './index'
const defaultState=fromJS({
    title:"", //文章标题
    content:""  //文章内容
})

export default (state =defaultState, action) => {
    switch (action.type) {
        case constances.changeDetail:
            return state.merge({
                title:action.title,
                content:action.content
            })
        default:
            return state
    }
}