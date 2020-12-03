import React from 'react';
import ReactDOM from 'react-dom'
import {logo} from '../NavBars/TopNav/assets/index'
import './Auth.css'

function Auth (){
    return (
        <div className='container-fluid' style ={{alignItems:"center"}}>
            <div className ="row">
                <div className='col-lg-8'>

                </div>
                <div className="col-lg-4">
                    <form class="form-signin">
                        {/* <img class="mb-4" src={logo} alt="" width="102" height="102" 
                            style={{position:'relative',left:'90px',marginTop:'50px'}}/> */}

                        <h3 class="h3 mb-3 font-weight-normal" style={{textAlign:'center' ,marginTop:'40px'}}>
                            Please sign in with your Channel-I credentials
                        </h3>

                        <input type="text" id="inputEmail" class="form-control" 
                            placeholder="Enrollment Number" required autofocus style={{textAlign:'center'}} />

                        <input type="password" id="inputPassword" class="form-control" 
                            placeholder="Password" required style={{textAlign:'center'}} />

                        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>

                        <p class="mt-5 mb-3 text-muted" style={{textAlign:'center'}}>&copy; IR Cell</p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Auth;