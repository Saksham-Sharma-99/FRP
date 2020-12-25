import React, { useState } from "react"
import { Link } from "react-router-dom"
import ReactDOM from "react-dom"
import App from "../../App"
import { Constants, Routes,ORIGIN } from "../../Model/Constants"
import {PostRequest} from "../../Model/RequestHandler"
import "./Modals.css"

function HideNav(){
    ReactDOM.render(
      <App showSideNav ={false}/>,
    document.getElementById('root')
  );
  }
function VerifyModal(props){
    var student = JSON.parse(sessionStorage.getItem(Constants.CHANNELI_DATA))
    function Apply(){
        // setApplied(true)
        
        PostRequest(Routes.APPLY,((res)=>{
            console.log(res.data)
            sessionStorage.setItem(Constants.PROJECTS,JSON.stringify(res.data.projects.projects))
            sessionStorage.setItem(Constants.CHANNELI_DATA , JSON.stringify(res.data.user))
        }),{userId :student.userId,postId:props.id,name:props.name})
    }
    return (
        <div className="container-fluid verify-modal"> 
        
        </div>
    )
}

function DocAlertModal(){
    return (
        <div className="container-fluid doc-alert-modal"> 
            <div className="row alert-heading">
                <h5>Please upload all your documents first</h5>
            </div>
            <div className="row">
                <div className="col-7"></div>
                <div className="col-3 btn" style={{backgroundColor:"#0f4c75",marginRight:"10px"}}>
                    <Link className="upload-btn" to="/profile/resume" onClick={HideNav}>
                        <b style={{color:"white"}}>Upload</b>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export {VerifyModal , DocAlertModal}