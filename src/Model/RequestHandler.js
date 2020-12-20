import Axios from "axios"
import {Constants,BaseURL,JSON_Constants, ORIGIN} from "./Constants"


function GetRequest( route , callback,parameters=null,baseURL = BaseURL){
    if (parameters!=null){
        Axios.get(baseURL+route , {params : parameters}).then((res)=>{
            callback(res)
        })
    }
    else{
        Axios.get(baseURL+route).then((res)=>{
            callback(res)
        })
    }
}

function PostRequest(route , callback ,param,baseURL = BaseURL){
    Axios({
        method: 'post',
        url: baseURL+route,
        params: param,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
    }).then((res)=>{
        callback(res)
    })
}


function LogIn(res){
    document.getElementById('root').classList.remove('#auth')
    sessionStorage.setItem(Constants.IS_LOGGED_IN,Constants.YES)
    sessionStorage.setItem(Constants.USER_PROFILE,JSON.stringify(res.data[0][0]))
    sessionStorage.setItem(Constants.CHANNELI_DATA,JSON.stringify(res.data[1]))
    window.location.reload()
}

function LogOut(){
    document.getElementById('root').classList.remove('#projects')
    sessionStorage.setItem(Constants.IS_LOGGED_IN,Constants.NO)
    document.getElementById('root').classList.add('#auth')
    window.location.replace(ORIGIN).then(
        window.location.reload()
    )
}



export {GetRequest,LogIn,LogOut,PostRequest}