import { fromJS } from 'immutable'
import {constance} from './index'
const defaultState=fromJS({
    topicList:[],//推荐栏单独项
    articalList:[] //每条单独的list
})
export default (state = defaultState, action) => {
    switch (action.type) {
        case constance.change_home_data:
            return state.merge({
                topicList:fromJS(action.topicList),
                articalList:fromJS(action.articalList)
            })
        default:
            return state
    }
}