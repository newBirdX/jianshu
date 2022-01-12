import axios from 'axios'
import { fromJS } from 'immutable'
import { constance} from './index'
//获取home页面数据
export const getHomeInfo=()=>{
    return dispatch=>{
        axios.get("/api/homeData.json")
        .then(res=>{
            const result=res.data.data;
            dispatch(changeHomeData(result));
        })
    }
}
const changeHomeData=(result)=>{
   return {
    type:constance.change_home_data,
    articalList:result.articalList,
    topicList:result.topicList
   }
}
//获取更多阅读内容
export const loadMore=(page)=>{
    return dispatch=>{
        axios.get("/api/homeList.json?page="+page)
        .then(res=>{
            let result=res.data.data;
            dispatch(morelist(result,page+1));
        })
    }
}
const morelist=(result,nextPage)=>{
    return {
        type:constance.addHomeList,
        articalList:fromJS(result),
        nextPage
    }
}
//修改回到顶部状态
export const changeScrollTopShow=(flag)=>{
    return {
        type:constance.changeShowScroll,
        flag
    }
}