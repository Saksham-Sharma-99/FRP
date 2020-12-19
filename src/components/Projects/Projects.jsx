import React, { useState } from "react"
import {logo} from "../NavBars/TopNav/assets/index"
import "./Projects.css"
import {projects} from "./projects"
import {bmkf,bmkt} from "./assets"
import {Link} from "react-router-dom"
import {HashRouter, Switch} from 'react-router-dom';
import {AuthRoute} from 'react-router-auth';
import {BsFillBookmarkFill} from "react-icons/bs"
import {RiUserShared2Line} from "react-icons/ri"
import {ImCompass} from "react-icons/im"
import { Constants, Routes } from "../../Model/Constants"
import { PostRequest } from "../../Model/RequestHandler"

function Buttons(props){
    let [applied,setApplied] = useState(props.applied)
    function Apply(){
        setApplied(true)
        var student = JSON.parse(sessionStorage.getItem(Constants.CHANNELI_DATA))
        PostRequest(Routes.APPLY,((res)=>{
            console.log(res.data)
            sessionStorage.setItem(Constants.PROJECTS,JSON.stringify(res.data.projects.projects))
            sessionStorage.setItem(Constants.CHANNELI_DATA , JSON.stringify(res.data.user))
        }),{userId :student.userId,postId:props.id,name:props.name})
    }
    return(
        <div className="row" style={{textAlign:"center"}}>

            <div className = "col projectBTNLink1 btn" style={{margin:"0"}}>
                
                <Link style={{display:"inline-block",fontWeight:"bold",textDecoration:'none',color:'black'}}>
                <RiUserShared2Line style={{height:"25px",width:"30px",marginRight:"20px"}}/>
                    Refer
                </Link>
            </div>

            <div className = {applied ?"col projectBTNLink3 btn disabled" :"col projectBTNLink2 btn"} onClick={Apply}>
                
                <Link style={{display:"inline-block",fontWeight:"bold",textDecoration:'none',color:'black'}}>
                <ImCompass style={{height:"25px",width:"30px",marginRight:"20px"}}/>
                    {applied ? "Applied":"Apply"}
                </Link>
            </div>


        </div>
    )
}

function Details(props){

    const [bookmarked, setLightMode ] = React.useState(props.bmk)
    const [content , setContent] = React.useState(props.content.substr(0,500))
    const [seeml , setView] = React.useState(props.content.length>500? "... See more":"")

    function toggleBookmark(bookmark,postID){
        setLightMode(bookmark)
        var route = bookmark ? Routes.BOOKMARK : Routes.REM_BOOKMARK
        var student = JSON.parse(sessionStorage.getItem(Constants.CHANNELI_DATA))
        console.log(student.userId , props.id)
        PostRequest(route,((res)=>{
            console.log(res.data)
            if(res.data.status == null){
            sessionStorage.setItem(Constants.PROJECTS,JSON.stringify(res.data.projects.projects))
            sessionStorage.setItem(Constants.CHANNELI_DATA , JSON.stringify(res.data.user))}
        }),{userId:student.userId,postId:postID})
    }

   return(  
    <div className = "container-fluid project-card" style = {{backgroundColor : "#f1f6f9" }}> 
        <div className="container">

            <div className="row">
                <div className="col-sm-8">
                    <div className = "row">
                    <div className="col-lg-3">
                        <img className= "college-image" src = {props.image} alt = "College Image"  /> 
                    </div>
                    <div className="col-lg-8" style={{paddingTop : '30px'}}>
                        <h3 className = "collegeName"> 
                            {props.collegeName}
                        </h3>
                     </div>
                     </div>
                </div>

                    {/* <div className="col-sm"></div> */}
                    
                <div className="col-sm-4">
                    <div className="row"> 
                    
                        <div className = "col">
                            <p className="requirements">Cg Required : {props.cg}</p> 
                            <p className="requirements">Branch      : {props.branch}</p>
                            <p className="requirements">Deadline    : {props.deadline}</p>
                        </div>
                        <Link to = "#"onClick = {()=>toggleBookmark(!bookmarked,props.id)} >
                            <div className="col bookmark" >
                                <BsFillBookmarkFill className="bookmarkIcon"color={bookmarked ? "#fca652":"lightgray"}
                                />  
                            </div>
                        </Link>

                    </div>
                </div>
                    
            </div>
                
        </div> 

        <hr className="hr1"/>

        <b className = "content"> {content}</b>
        <Link  onClick={()=>{
            if (seeml == "... See more"){setView("\n See less");setContent(props.content)}
            else if(seeml == "\n See less"){setView("... See more");setContent(props.content.substr(0,500))}}}>{seeml}</Link>

        <hr className="hr2" style={{marginTop:"5px",width:"65%",position:"relative",top:"26px"}}/>

        <Buttons applied={props.applied} id={props.id} name={props.collegeName}/>
     </div>
   );
}


function Projects (){
    var projectsData = JSON.parse(sessionStorage.getItem(Constants.PROJECTS))
    console.log(JSON.parse(sessionStorage.getItem(Constants.PROJECTS)))
    var studentApplications = JSON.parse(sessionStorage.getItem(Constants.CHANNELI_DATA)).applications
    return (
    <div className = "container-fluid cards" >
        {projectsData.map(project => 
            <Details image = {project.data.image} collegeName = {project.data.name}
                cg = {project.data.cg} branch = {project.data.branch} 
                deadline = {project.data.deadline} content = {project.data.content}
                bmk = {studentApplications.bookmarked.includes(project.postId)} 
                id= {project.postId} applied={studentApplications.applied.includes(project.postId)}
            />)}    
    </div>
     )
}

function Bookmarks (){
    var projectsData = JSON.parse(sessionStorage.getItem(Constants.PROJECTS))
    var studentApplications = JSON.parse(sessionStorage.getItem(Constants.CHANNELI_DATA)).applications
    return (
    <div className = "container-fluid cards" >
        {projectsData.filter(project=>studentApplications.bookmarked.includes(project.postId)).map(project => 
            <Details image = {project.data.image} collegeName = {project.data.name}
                cg = {project.data.cg} branch = {project.data.branch} 
                deadline = {project.data.deadline} content = {project.data.content}
                bmk = {studentApplications.bookmarked.includes(project.postId)} 
                id= {project.postId} applied={studentApplications.applied.includes(project.postId)}
            />)}    
    </div>
     )
}



export default Projects
export {Bookmarks}