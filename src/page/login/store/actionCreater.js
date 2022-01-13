import axios from 'axios'
import { constances } from './index'
export const login =(userName,pwd)=>{
    return dispatch=>{
        axios.get("/api/loginData.json?userName="+userName+"&pwd="+pwd)
        .then(res=>{
            let result=res.data.data;
            if(result){
                dispatch(changelogin());
                alert("登陆成功")
            }else{
                alert("登陆失败");
            }
        })
    }
}

const changelogin=()=>{
    return {
        type:constances.CHANGE_LOGIN,
        value:true
    }
}

//退出登录
export const logout=()=>{
    return {
        type:constances.LOG_OUT,
        value:false
    }
}