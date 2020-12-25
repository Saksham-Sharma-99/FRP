import React,{useState} from "react"
import { Link } from "react-router-dom"
import {Constants, Routes} from "../../../Model/Constants"
import { PostRequest } from "../../../Model/RequestHandler"
import "./Nav.css"


function Buttons(){
    var [status , statusChangeTo] = useState(JSON.parse(sessionStorage.getItem(Constants.CHANNELI_DATA)).passStatus)
    function setStatus(newStatus){
        statusChangeTo(newStatus)
        PostRequest(Routes.PASS_STATUS,((res)=>{
            console.log(res)
        }),{userId:JSON.parse(sessionStorage.getItem(Constants.CHANNELI_DATA)).userId , passStatus:newStatus})
    }
 return(
    <div className="row passport-buttons">
    <div className="col btn pass-btn" style={status=="yes" ? {backgroundColor:"white",color:"#0f4c75"}:null} 
    onClick={()=>setStatus("yes")}>
        Yes
    </div>
    <div className="col btn pass-btn" style={status=="no" ? {backgroundColor:"white",color:"#0f4c75"}:null} 
    onClick={()=>setStatus("no")}>
        No
    </div>
    <div className="col btn pass-btn" style={status=="in progress" ? {backgroundColor:"white",color:"#0f4c75"}:null}
     onClick={()=>setStatus("in progress")}>
        In Process
    </div>
    </div>
 )
}

function Categories(){
    var [cat,setCat] = useState("res")
    return(
        <div className="row">
            <div className={cat=="res" ? "col-2 doc-cat-sel":"col-2 doc-cat"}>
                <Link to="/profile/resume" className={cat=="res"? "categoryLinkSel":"categoryLink"} 
                onClick={()=>setCat("res")}>Resume</Link>
            </div> 
            <div className={cat=="tcpt" ? "col-2 doc-cat-sel":"col-2 doc-cat"}>
            <Link to="/profile/transcript" className={cat=="tcpt"? "categoryLinkSel":"categoryLink"} 
            onClick={()=>setCat("tcpt")}>Transcript</Link>
            </div>  
        </div>
    )
}

function Nav(){
    return(
        <div className="container-fluid profile-nav">
            <div className="row" style={{padding:"20px",minHeight:"60%"}}>
                
                <div className="col-4" style={{padding:"0"}}>
                    <h5 style={{position:"relative",top:"10px"}}>Do you have a Passport?</h5>
                </div>
                <div className="col-6">
                    <Buttons />
                </div>
            </div>
            <Categories />
         </div>
    )
}

export default Nav