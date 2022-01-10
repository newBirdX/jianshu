import * as constance from './constance';
import {fromJS} from 'immutable'
import axios from 'axios';

const changeList=(data)=>{
    return {
        type:constance.change_List,
        data:fromJS(data),
        totalPage:Math.ceil(data.length/10) //取回数据的时候返回总页数
    }
}

export const searchfocus=()=>{
    return {
        type:constance.search_focus
    }
}

export const searchblur=()=>{
    return {
        type:constance.search_blur
    }
}
 
// 点击搜索框获取推荐数据
export const getList=()=>{
    return (dispatch)=>{
        axios.get('/api/headerList.json')
        .then(res=>{
            let data=res.data;
            dispatch(changeList(data.data))
        })
        .catch(error=>{
            console.log(error);
        })
    }
}
//鼠标在推荐框内状态改变
export const mouseIn=()=>{
    return {
        type:constance.mouseIn
    }
}
export const mouseOut=()=>{
    return {
        type:constance.mouseOut
    }
}
// 点击换一换修改页数
export const changePage=(page)=>{
    return {
        type:constance.changePage,
        page
    }
}