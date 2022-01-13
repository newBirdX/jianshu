import { fromJS } from "immutable"
const defaultState=fromJS({
    login:false  //是否登录
 })

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'ACTION_TYPE':
            return 
        default:
            return state
    }
}