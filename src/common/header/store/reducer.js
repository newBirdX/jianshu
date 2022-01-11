import * as constance from './constance'
import { fromJS } from 'immutable'

const defaultState=fromJS({
    focus:false, //定义文本框聚焦状态  
    mouseIn:false, //鼠标移入推荐栏
    List:[],  //存放搜索推荐数据  
    page: 1, //换一换页码
    totalPage:1 //换一换总页数
});

export default (state=defaultState,action)=>{
    switch(action.type){
        case constance.search_focus:
            return state.set("focus",true);
        case constance.search_blur:
            return state.set("focus",false);
        case constance.change_List:
            return state.merge({
                List:fromJS(action.data),
                totalPage:fromJS(action.totalPage)
            })
        case constance.mouseIn:
            return state.set("mouseIn",true);
        case constance.mouseOut:
            return state.set("mouseIn",false);
        case constance.changePage:
            return state.set("page",action.page)
        default :
            return state; 
    }
}