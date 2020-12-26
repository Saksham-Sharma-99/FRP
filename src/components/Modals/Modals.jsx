import React, { useState } from "react"
import { Link } from "react-router-dom"
import ReactDOM from "react-dom"
import App from "../../App"
import {BsCheckCircle} from "react-icons/bs"
import { Constants, Routes,ORIGIN, BaseURL } from "../../Model/Constants"
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
            window.location.reload()
        }),{userId :student.userId,postId:props.id,name:props.name,sop:document.getElementById("sop").value})
    }
    return (
        <div className="container-fluid verify-modal"> 
            <h3 style={{textAlign:"center"}}>Your Application</h3>
            <hr className="hr4" style={{textAlign:"center",marginBottom:"50px"}}/>
            <div className="row">
                <div className="col-12"><h5 style={{textAlign:"center",marginBottom:"20px"}}>Review your Documents</h5></div>
                <div className = "col-6">
                    <a className="doc-status" style={{float:"right"}} 
                    onClick={()=>window.open(BaseURL+"/files/"+student.documents.resume,"_blank")}>
                     <b>Resume</b> <BsCheckCircle />
                    </a>
                </div>
                <div className = "col-6">
                    <a className="doc-status" 
                    onClick={()=>window.open(BaseURL+"/files/"+student.documents.transcript,"_blank")}> 
                    <b>Transcript</b> <BsCheckCircle />
                    </a>
                </div>
            </div>
            <h6 style={{textAlign:"center",marginTop:"20px",color:"gray"}}>
            {Constants.DECLARATION}
            </h6>
            <div className="row" style={{padding:"0 20px 2px"}}>
                <div className="col-12">
                    <h5 style={{textAlign:"center",marginTop:"40px"}}> Statement Of Purpose :</h5>
                    <p style={{color:"gray",textAlign:"center"}}>{Constants.SOP_STATEMENT}</p>
                </div>
                <div className="col-12" style={{minHeight:"200px",border:"1px solid",padding:"3px 3px 3px",borderRadius:"10px"}}>
                <textarea type="text" className="form-control" id="sop" style={{border:"0",height:"195px"}} />
                </div>
            </div>
            <div className="row" style={{marginTop:"25px"}}>
                <div className="col-3 apply-btn" onClick={Apply}> Apply</div>
            </div>
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