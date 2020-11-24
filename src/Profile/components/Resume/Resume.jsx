import React from "react"
import "./Resume.css"
import {resume} from "./ResumeData"


function Details1(props){
    return (
        <div className="row" style={{marginLeft:"10px"}}>
            <div className = "col-5">  
                <p className="resume-details">{props.content} </p>
            </div>
            <div className="col-4"></div>
            <div className = "col-3">  
                <p className="resume-details">{props.date}</p>
            </div>
        </div>
    )
}
function Details2(props){
    return(
        <div className="col-12">
            <div className="row">
                <div className ="col-9">
                    <h4 style={{marginBottom:"10px" , marginTop:"25px"}}>{props.title}</h4>
                    <b className="resume-details" style={{marginBottom:"5px"}}>{props.content}</b>
                </div>
                    <div className="col" style={{marginBottom:"15px" , marginTop:"25px"}}> {props.date}</div>
            </div>
        </div>
    )
}


function Interests(props){
return (
    <div className="row" >
        <div className="col-12 heading">
            <h2>Interests</h2>
        </div>
        <div className = "col-8" style = {{marginLeft:"10px", marginBottom: "20px"}}>  
            <p className="resume-details">{props.content}</p>
        </div>
    </div>
)
}
function Achievements(props){
    const achievements = props.achievements[1].achievements
    return (
        <div className="row" >
            <div className="col-12 heading">
                <h2 style={{marginBottom:"30px" ,marginTop:"10px"}}>Achievements</h2>
            </div>
            {achievements.map((a)=>
            <Details1 content={a.content} date={a.date}/>)}
        </div>
    )
}
function Projects(props){
    const projects = props.projects[2].projects
    return(
        <div className="row" >
            <div className="col-12 heading">
                <h2 style={{marginTop: "10px"}}>Projects</h2>
            </div>
            {projects.map((project)=>
                <Details2 title={project.title} content = {project.content} date={project.date}/>)}
        </div>
    )
}
function Internships(props){
    const internships = props.internships[3].internships
    return(
        <div className="row" >
            <div className="col-12 heading">
                <h2 style={{marginTop: "10px"}}>Internships</h2>
            </div>
            {internships.map((internship)=>
                <Details2 title={internship.title} content = {internship.content} date={internship.date}/>)}
        </div>
    )
}
function CoCurricular(props){
    const cocurr = props.cocurr[4].cocurr
    return (
        <div className="row" >
            <div className="col-12 heading">
                <h2 style={{marginBottom:"30px" ,marginTop:"10px"}}>Co-Curricular</h2>
            </div>
            {cocurr.map((c)=>
            <Details1 content={c.content} date={c.date}/>)}
        </div>
    )
}


function Resume(){
    return(
        <div className="container-fluid" >

            <Interests content={resume[0].interests}/>

            <hr className="resume-hr"/>

            <Achievements achievements = {resume}/>

            <hr className="resume-hr"/>

            <Projects projects = {resume}/>

            <hr className="resume-hr"/>

            <Internships internships = {resume}/>

            <hr className="resume-hr"/>

            <CoCurricular cocurr={resume}/>

        </div>
    )
}

export default Resume;