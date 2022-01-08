import * as constance from './constance'
import { fromJS } from 'immutable'

const defaultState=fromJS({
    focus:false //定义文本框聚焦状态  
});

export default (state=defaultState,action)=>{
    if(action.type===constance.search_focus){
        return state.set("focus",true)
    }
    if(action.type===constance.search_blur){
        return state.set("focus",false)
    }
    return state;
}