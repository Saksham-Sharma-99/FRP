import React, { useState } from "react";
import ReactDOM from "react-dom";
import {logo} from "../NavBars/TopNav/assets/index"
import "./Projects.css"
import {projects} from "./projects"
import {bmkf,bmkt} from "./assets"
import {Link} from "react-router-dom"
import {HashRouter, Switch} from 'react-router-dom';
import {AuthRoute} from 'react-router-auth';
import {BsFillBookmarkFill} from "react-icons/bs"
import {RiUserShared2Line} from "react-icons/ri"
import {BiMessageAltDetail} from "react-icons/bi"
import {FiExternalLink} from "react-icons/fi"
import {ImCompass} from "react-icons/im"
import {AiOutlineMail} from "react-icons/ai"
import { Constants, Routes,ORIGIN } from "../../Model/Constants"
import { PostRequest } from "../../Model/RequestHandler"
import { Popover , OverlayTrigger } from "react-bootstrap"
import Popup from "reactjs-popup"
import { DocAlertModal, VerifyModal } from "../Modals/Modals"
import App from '../../App';


function HideNav(){
    ReactDOM.render(
      <App showSideNav ={false} showBottomNav={false}/>,
    document.getElementById('root')
  );
  }

function ReferOptions(){

    function sendEmail(){
        console.log("clicked")
        window.location.href = `mailto:user@example.com?subject=${Constants.EMAIL_SUB}&body=${Constants.EMAIL_MSG}${ORIGIN}`;
    }

    function copyLink(){
        var copyText = Constants.EMAIL_MSG + ORIGIN;
        const el = document.createElement('textarea');
        el.value = copyText;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        window.alert("Coppied")
    }

    function SendMessage(){
        console.log("clicked")
    }

    return(
        <div className = "container-fluid" stlye={{padding:"0"}}>
            <div className="row" stlye={{padding:"0"}}>
                <div className = "col-6 btn" stlye={{padding:"0"}} onClick={sendEmail}>
                    <AiOutlineMail size="35px" style={{position:"relative",left:"1px"}} />
                    <p style={{padding:"0" , margin:"0",fontSize:"10px",textAlign:"center"}}>Email</p>
                </div>
                <div className = "col-6 btn" stlye={{padding:"0"}} onClick={copyLink}>
                    <FiExternalLink size="35px" style={{position:"relative",left:"2px"}} />
                    <p style={{padding:"0" , margin:"0",fontSize:"10px",textAlign:"center"}}>Link</p>
                </div>
                {/* <div className = "col-4" stlye={{padding:"0"}} onClick={SendMessage}>
                    <BiMessageAltDetail size="35px" style={{position:"relative",left:"5px"}} />
                    <p style={{padding:"0" , margin:"0",fontSize:"10px",textAlign:"center"}}>Send Message</p>
                </div> */}
            </div>
            
        </div>
    )
}

function Buttons(props){
    let [applied,setApplied] = useState(props.applied)
    let [clicked,setClicked] = useState(false)
    const popover = (
        <Popover id="popover-positioned-top">
          {/* <Popover.Title as="h3">Refer</Popover.Title> */}
          <Popover.Content>
            <ReferOptions />
          </Popover.Content>
        </Popover>
      );
    var student = JSON.parse(sessionStorage.getItem(Constants.CHANNELI_DATA))
    function Apply(){
        setApplied(true)
        
        PostRequest(Routes.APPLY,((res)=>{
            console.log(res.data)
            sessionStorage.setItem(Constants.PROJECTS,JSON.stringify(res.data.projects.projects))
            sessionStorage.setItem(Constants.CHANNELI_DATA , JSON.stringify(res.data.user))
        }),{userId :student.userId,postId:props.id,name:props.name})
    }

    return(
        <div className="row" style={{textAlign:"center"}}>

            <OverlayTrigger trigger="click" placement="top" overlay={popover}>
            <div className = {clicked ? "col btn projectBTNLink4":"col projectBTNLink1 btn"} 
            style={{margin:"0"}} onClick={()=>setClicked(!clicked)}>
                
                <Link style={{display:"inline-block",fontWeight:"bold",textDecoration:'none',color:"#1b262c"}}>
                <RiUserShared2Line style={{height:"25px",width:"30px",marginRight:"20px",color:"#1b262c"}}/>
                    Refer
                </Link>
            </div>
            </OverlayTrigger>

            <Popup trigger={
            <div className = {applied ?"col projectBTNLink3 btn disabled" :"col projectBTNLink2 btn"} /*onClick={Apply}*/>    
                <Link style={{display:"inline-block",fontWeight:"bold",textDecoration:'none',color:"#1b262c"}}>
                <ImCompass style={{height:"25px",width:"30px",marginRight:"20px",color:"#1b262c"}}/>
                    {applied ? "Applied":"Apply"}
                </Link>
            </div>}
            modal
            nested
            >
            {(student.documents.resmue==="" || student.documents.transcript==="")?
             <DocAlertModal />:<VerifyModal  id={props.id} name={props.name}/> 
            }
            </Popup>

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
    <div className = "container-fluid project-card" style = {{backgroundColor : "#ebf2f7" }}> 
        <div className="container">

            <div className="row">
                <div className="col-sm-8">
                    <div className = "row">
                    <div className="col-lg-3">
                        <img className= "college-image" src = {props.image} alt = "College Image"  /> 
                    </div>
                    <div className="col-lg-8" style={{paddingTop : '30px'}}>
                        <h3 className = "collegeName"> 
                            <Link to="projectDetails" onClick={HideNav}>{props.collegeName}</Link>
                        </h3>
                     </div>
                     </div>
                </div>

                    {/* <div className="col-sm"></div> */}
                    
                <div className="col-sm-4">
                    <div className="row"> 
                    
                        <div className = "col">
                            <p className="requirements"><strong>Cg Required </strong>: {props.cg}</p> 
                            <p className="requirements"><strong>Branch </strong>     : {props.branch}</p>
                            <p className="requirements"><strong>Deadline </strong>   : {props.deadline}</p>
                        </div>
                        <Link to = "#"onClick = {()=>toggleBookmark(!bookmarked,props.id)} >
                            <div className="col bookmark" >
                                <BsFillBookmarkFill className="bookmarkIcon"color={bookmarked ? "#ed6663":"#9ba4b4"}
                                />  
                            </div>
                        </Link>

                    </div>
                </div>
                    
            </div>
                
        </div> 

        <hr className="hr3"/>

        <b className = "content"> {content}</b>
        <Link  onClick={()=>{
            if (seeml == "... See more"){setView("\n See less");setContent(props.content)}
            else if(seeml == "\n See less"){setView("... See more");setContent(props.content.substr(0,500))}}}>{seeml}</Link>

        <hr className="hr4" style={{marginTop:"5px",width:"65%",position:"relative",top:"26px"}}/>

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