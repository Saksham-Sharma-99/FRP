import "./PdfView.css"
import React, { useState } from "react"
import {Button} from "react-bootstrap"
import axios from "axios"
import { BaseURL, Constants, ORIGIN, Routes } from "../../../Model/Constants"
import { Document, Page } from 'react-pdf';
import { GetRequest } from "../../../Model/RequestHandler"

// function uploadButton()

function Resume(){
    var [docAddress ,markAdd] = useState(JSON.parse(sessionStorage.getItem(Constants.CHANNELI_DATA)).documents.resume)
    var [uploading,markUploading] = useState("Upload Resume")
    function onChange(e){
        markUploading("Uploading")
        let file = e.target.files[0]
        let formData = new FormData()

        formData.append("file",file)
        formData.append("userId",JSON.parse(sessionStorage.getItem(Constants.CHANNELI_DATA)).userId)
        formData.append("name","resume")

        axios({
            url:BaseURL+Routes.FILE_UPLOAD,
            method:"post",
            data : formData
        }).then((res)=>{
            sessionStorage.setItem(Constants.USER_PROFILE,JSON.stringify(res.data.data.data[0][0]))
            sessionStorage.setItem(Constants.CHANNELI_DATA,JSON.stringify(res.data.data.data[1]))
            markAdd(res.data.data.data[1].documents.resume)
            markUploading("Upload Resume")
            window.alert("Uploaded Successfully",window.location.reload())
        })
    }
    return(
        <div className="container-fluid" style={{marginTop:"40px"}}>
        <div className="row">
            <div className={uploading=="Uploading" ? "col-3 btn disabled":"col-3 doc-input-div"}>
                <input className="doc-input" type="file" name="file" onChange={(e)=>onChange(e)} />
                {uploading}
            </div>
            </div>
            <div className="row">
            {docAddress=="" ? null : 
            <div className ="col" >
            {/* <object width="100%" height="600px" data={"data:application/pdf;base64,"+file} type="application/pdf"> */}
            <embed className="embed" 
            src={BaseURL+"/files/?name="+JSON.parse(sessionStorage.getItem(Constants.CHANNELI_DATA)).documents.resume} 
            width="98%" height="600px"></embed>
            {/* </object> */}
            </div>}
            </div>
        </div>
    )
}

function Transcript(){
    var [docAddress ,markAdd] = useState(JSON.parse(sessionStorage.getItem(Constants.CHANNELI_DATA)).documents.transcript)
    var [uploading,markUploading] = useState("Upload Transcript")
    function onChange(e){
        markUploading("Uploading")
        let file = e.target.files[0]
        let formData = new FormData()

        formData.append("file",file)
        formData.append("userId",JSON.parse(sessionStorage.getItem(Constants.CHANNELI_DATA)).userId)
        formData.append("name","transcript")

        axios({
            url:BaseURL+Routes.FILE_UPLOAD,
            method:"post",
            data : formData
        }).then((res)=>{
            sessionStorage.setItem(Constants.USER_PROFILE,JSON.stringify(res.data.data.data[0][0]))
            sessionStorage.setItem(Constants.CHANNELI_DATA,JSON.stringify(res.data.data.data[1]))
            markAdd(res.data.data.data[1].documents.transcript)
            markUploading("Upload Transcript")
            window.alert("Uploaded Successfully",window.location.reload())
        })
    }

    return(
        <div className="container-fluid" style={{marginTop:"40px"}}>
        <div className="row">
            <div className={uploading=="Uploading" ? "col-3 btn disabled":"col-3 doc-input-div"}>
                <input className="doc-input" type="file" name="file" onChange={(e)=>onChange(e)} />
                {uploading}
            </div>
            </div>
            <div className="row">
            {docAddress=="" ? null : 
            <div className ="col" >
            <embed className="embed" src={BaseURL+'/files/'+docAddress} width="98%" height="600px" />
            </div>}
            </div>
        </div>
    )
}

export {Resume,Transcript}
