import { fromJS } from 'immutable'
const defaultState=fromJS({

})
export default (state = defaultState, action) => {
    switch (action.type) {
        case 'ACTION_TYPE':
            return 
        default:
            return state
    }
}