import { fromJS } from "immutable"
import { constances }from './index'
const defaultState=fromJS({
    login:false  //是否登录
 })

export default (state = defaultState, action) => {
    switch (action.type) {
        case constances.CHANGE_LOGIN:
            return state.set("login",action.value);
        case constances.LOG_OUT:
            return state.set("login",action.value);
        default:
            return state
    }
}