import axios from 'axios'
import { constances }  from './index'
export const getDetail=(id)=>{
    return dispatch=>{
        axios.get("/api/detailData.json?id="+id)
        .then(res=>{
            const result=res.data.data;
            dispatch(changeDetail(result.title,result.content));
        })
    }
}
const changeDetail=(title,content)=>{
    return {
        type:constances.changeDetail,
        title,
        content
    }
}