import React from 'react';
import ReactDOM from 'react-dom'
import {logo} from '../NavBars/TopNav/assets/index'
import Axios from 'axios'
import './Auth.css'

const clientId = `KhvKozOsGjVXmRNZcvL8SB8S9XxZ7PKJOfazP9sI`
const clientSecret = `KiSTNolWFrQEehYloliUyLRdauKG2XczUL0ST4HapeZXA68XnaOMZ7nWLg6SAwtbJxG7UWlnXdyVO9Do0rcaqFKFxT86ZVmJ5jDRtstmi5Wzidrlk9fh5oZa6CyGegUm`
const baseURL = `https://internet.channeli.in`
const REDIRECT_URI = `https://saksham-sharma-99.github.io/FRP/#/projects`
function Auth (){
    var user = '19118071';
    var pass = 'pass';
    function signIn(){
        Axios.get(`https://internet.channeli.in/oauth/authorise/?client_id=${clientId}&redirect_uri=${REDIRECT_URI}&state=transporting`
        ).then((response)=>{
            console.log(response)
        }).catch(function (error) {
            console.log(error);
        })
    }



    return (
        <div className='container-fluid' style ={{alignItems:"center"}}>
            <div className ="row">
                <div className='col-lg-8'>

                </div>
                <div className="col-lg-4">
                    <form className="form-signin" >
                        {/* <img className="mb-4" src={logo} alt="" width="102" height="102" 
                            style={{position:'relative',left:'90px',marginTop:'50px'}}/> */}

                        <h3 className="h3 mb-3 font-weight-normal" style={{textAlign:'center' ,marginTop:'40px'}}>
                            Please sign in with your Channel-I credentials
                        </h3>

                        <input type="text" id="inputEmail" className="form-control" 
                            placeholder="Enrollment Number" required autofocus style={{textAlign:'center'}} />

                        <input type="password" id="inputPassword" className="form-control" 
                            placeholder="Password" required style={{textAlign:'center'}} />

                        <button className="btn btn-lg btn-primary btn-block" type="submit" onClick = {signIn}
                         style={{
                            borderRadius:"20px"
                        }}>Sign in</button>

                        <p className="mt-5 mb-3 text-muted" style={{textAlign:'center'}}>&copy; IR Cell</p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Auth;