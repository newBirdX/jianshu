import { fromJS } from 'immutable'
import {constance} from './index'
const defaultState=fromJS({
    topicList:[],//推荐栏单独项
    articalList:[], //每条单独的list
    articalPage:0,  //list的默认页码
    showScroll:false  //是否显示回到顶部
})
export default (state = defaultState, action) => {
    switch (action.type) {
        case constance.change_home_data:
            return state.merge({
                topicList:fromJS(action.topicList),
                articalList:fromJS(action.articalList)
            })
        case constance.addHomeList:
            return state.merge({
                articalList:state.get("articalList").concat(action.articalList),
                articalPage:action.nextPage
            })
        case constance.changeShowScroll:
            return state.set("showScroll",action.flag)
        default:
            return state
    }
}