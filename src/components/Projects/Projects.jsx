import React from "react"
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

function Buttons(){
    return(
        <div className="row" style={{textAlign:"center"}}>

            <div className = "col projectBTNLink1 btn" style={{margin:"0"}}>
                <RiUserShared2Line style={{height:"25px",width:"30px",marginRight:"20px"}}/>
                <Link style={{display:"inline-block",fontWeight:"bold",textDecoration:'none',color:'black'}}>
                    Refer
                </Link>
            </div>

            <div className = "col projectBTNLink2 btn">
                <ImCompass style={{height:"25px",width:"30px",marginRight:"20px"}}/>
                <Link style={{display:"inline-block",fontWeight:"bold",textDecoration:'none',color:'black'}}>
                    Apply
                </Link>
            </div>


        </div>
    )
}

function Details(props){

    const [bookmarked, setLightMode ] = React.useState(props.bmk)
    const [content , setContent] = React.useState(props.content.substr(0,500))
    const [seeml , setView] = React.useState(props.content.length>500? "... See more":"")
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
                        <Link to = "#"onClick = {()=>setLightMode(!bookmarked)} >
                            <div className="col bookmark" >
                                <BsFillBookmarkFill className="bookmarkIcon"color={bookmarked ? "#f05454":"lightgray"}
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

        <Buttons />
     </div>
   );
}


function Projects (){
    return (
    <div className = "container-fluid cards" >
        {projects.map(project => 
            <Details image = {logo} collegeName = {project.name}
                cg = {project.cg} branch = {project.branch} 
                deadline = {project.deadline} content = {project.content}
                bmk = {project.bmk} id= {project.id}
            />)}    
    </div>
     )
}

function Bookmarks (){
    return (
        <div className = "container-fluid cards" >
           {projects.filter(project => project.bmk).map(project =>
            <Details image = {logo} collegeName = {project.name}
                cg = {project.cg} branch = {project.branch} 
                deadline = {project.deadline} content = {project.content}
                bmk = {project.bmk} id={project.id}
            />)} 
        </div>
         )
}



export default Projects
export {Bookmarks}