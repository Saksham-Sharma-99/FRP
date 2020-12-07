import Axios from "axios"
import {Constants,BaseURL,JSON_Constants} from "./Constants"


function GetRequest( route , callback,parameters=null){
    if (parameters!=null){
        Axios.get(BaseURL+route , {params : parameters}).then((res)=>{
            callback(res)
        })
    }
    else{
        Axios.get(BaseURL+route).then((res)=>{
            callback(res)
        })
    }
}


function LogIn(res){
    document.getElementById('root').classList.remove('#auth')
    sessionStorage.setItem(Constants.IS_LOGGED_IN,Constants.YES)
    sessionStorage.setItem(Constants.USER_PROFILE,JSON.stringify(res.data[0]))
    window.location.reload()
}

function LogOut(){
    document.getElementById('root').classList.remove('#projects')
    sessionStorage.setItem(Constants.IS_LOGGED_IN,Constants.NO)
    window.location.reload()
}



export {GetRequest,LogIn,LogOut}