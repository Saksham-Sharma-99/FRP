import React from "react"
import {logo} from "../NavBars/TopNav/assets/index"
import "./Projects.css"
import {projects} from "./projects"
import {bmkf,bmkt} from "./assets"


function Details(props){
   return(  
    <div className = "container-fluid project-card" style = {{backgroundColor : "#f1f6f9" }}> 
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <img class = "college-image" src = {props.image} alt = "College Image"  /> 
                    
                    <h3 className = "collegeName"> 
                        {props.collegeName}
                     </h3>
                    </div>

                    <div className="col-sm"></div>
                    
                    <div class="col-sm">
                       <div class="row"> 
                       
                       <div className = "col-10">
                        <p className="requirements">Cg Required : {props.cg}</p>
                        <p className="requirements">Branch      : {props.branch}</p>
                        <p className="requirements">Deadline    : {props.deadline}</p>
                        </div>
                        <div className="col-2 bookmark" ><img  class = "bookmark" src = {bmkf}/> </div>
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
        {projects.map(project => <Details image = {logo} collegeName = {project.name}
                                            cg = {project.cg} branch = {project.branch} 
                                            deadline = {project.deadline} content = {project.content}
         />)} 
        
             
    </div>
     )
}

export default Projects