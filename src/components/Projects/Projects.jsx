import React from "react"
import {logo} from "../NavBars/TopNav/assets/index"
import "./Projects.css"
import {projects} from "./projects"
import {bmkf,bmkt} from "./assets"
import {Link} from "react-router-dom"





function Details(props){

    const [bookmarked, setLightMode ] = React.useState(props.bmk)

   return(  
    <div className = "container-fluid project-card" style = {{backgroundColor : "#f1f6f9" }}> 
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <img className= "college-image" src = {props.image} alt = "College Image"  /> 
                    
                    <h3 className = "collegeName"> 
                        {props.collegeName}
                     </h3>
                    </div>

                    <div className="col-sm"></div>
                    
                    <div className="col-sm">
                        <div className="row"> 
                       
                            <div className = "col">
                                <p className="requirements">Cg Required : {props.cg}</p> 
                                <p className="requirements">Branch      : {props.branch}</p>
                                <p className="requirements">Deadline    : {props.deadline}</p>
                            </div>
                            <Link to = "#"onClick = {()=>setLightMode(!bookmarked)} >
                                <div className="col bookmark" >
                                    <img  className= "bookmark" 
                                    src={bookmarked ? bmkt : bmkf} />  
                                </div>
                            </Link>

                        </div>
                    </div>
                    
                </div>
                
        </div> 
        <hr></hr>
             <b className = "content"> {props.content}</b>
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
                bmk = {project.bmk}
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
                bmk = {project.bmk}
            />)} 
        </div>
         )
}

export default Projects
export {Bookmarks}