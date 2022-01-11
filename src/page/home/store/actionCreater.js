import axios from 'axios'
import { constance} from './index'
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
