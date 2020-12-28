import React from "react";
import "./ProjectDetails.css"
import {projectDetails, testimonialDetails} from "./Details";
import { render } from "@testing-library/react";
import { Constants, BaseURL } from "../../Model/Constants";

function LocationsTop(props){
    return(
        <div className="row locations" style={{margin:"0",padding:"0 15px"}}>
                {(props.array).map((el)=>{
                    return el.id== 1?
                    (
                        <div className="col-lg-6">
                            <img className="nearby-img-lg" src={el.image} />
                            <h4 style={{position:"relative",bottom:"40px"}}>{el.title}</h4>
                        </div>
                    ):(
                        <div className="col-lg-3">
                            <img className="nearby-img-small" src={el.image} />
                            <h4 style={{position:"relative",bottom:"40px"}}>{el.title}</h4>
                        </div>
                    )
                })}
            </div>
    );
}

function LocationsMid(props){
    return(
        <div className="row locations" style={{padding:"0 15px",margin:"0"}}>
                {(props.array).map((el)=>{
                    return el.id== 6?
                    (
                        <div className="col-lg-6">
                            <img className="nearby-img-lg bg-right-img" src={el.image} style={{position:"relative", bottom:"150px"}}/>
                            <h4 style={{position:"relative",bottom:"190px"}}>{el.title}</h4>
                        </div>
                    ):(
                        <div className="col-lg-3">
                            <img className="nearby-img-small" src={el.image} />
                            <h4 style={{position:"relative",bottom:"40px"}}>{el.title}</h4>
                        </div>
                    )
                })}
            </div>
    );
}

function Testimonials(props){
    return (
        // <div className="col-12" style={{backgroundColor:"white",margin:"0",position:"relative",top:"695px"}}>
            (props.array).map((el)=>{
                return(
                    <div className="col college-details" style={{backgroundColor:"white",paddingBottom:"50px"}}>
                    <div className="flip-card" style={el.id<=2 ? {float:"right"}:null}>
                        <div className="flip-card-inner">
                            <div className="flip-card-front" >
                                <img src={BaseURL+"/images/?name="+el.image} 
                                style={{width:"300px", height:"300px", borderTopLeftRadius:"10px", 
                                borderTopRightRadius:"10px"}} />
                                <h1 style={{paddingTop:"30px", marginBottom:"25px",fontFamily:"Georgia"}}>{el.name}</h1>
                                <h3 style={{fontFamily:"Georgia"}}>{el.branch}</h3>
                            </div>
                            <div className="flip-card-back">
                                <blockquote>{el.quote}</blockquote>   
                            </div>
                        </div>
                    </div>
                </div>  
                );
            })
        // </div>
    );
    
}



function ProjectDetails(){
    var collegeData=JSON.parse(sessionStorage.getItem(Constants.PROJECTS)).filter((data)=>data.postId==sessionStorage.getItem(Constants.PROJECT_ID))[0]
    return(
        <div className="container-fluid cont-fl" style={{padding:"0",minHeight:"700px"}}>
            <div className="row" style={{marginLeft:"0",marginRight:"0"}}>
                <div className="col-12 university_img" style={{backgroundImage:`url(${collegeData.image1})`}}>
                {/* <img className="university_img" src={collegeData.image1} /> */}
                <h2 className="college-name" >{collegeData.data.name}</h2>
                </div>
            </div>
             <div className="row college-details">
                <div className="col-lg-12">
                    <h1 style={{fontWeight:"bold", fontSize:"4.2rem", paddingBottom:"1rem"}}>Locations Nearby</h1>
                    <h3>Beautiful places near campus to visit and have a great experience</h3>
                </div>
                <LocationsTop  array={collegeData.locationDetails.slice(0, 3)}/>
                <LocationsMid array={collegeData.locationDetails.slice(3, 6)}/>
            </div>

            

            <div className="row" style={{margin:"0"}}>
                <div className="col-lg-12 college-details" style={{backgroundColor:"white",color:"#1b262c"}}>
                    <h1 style={{fontWeight:"bold", fontSize:"4.2rem", paddingBottom:"0rem"}}>Testimonials</h1>
                    <h4>Students who have previously been a part of foreign universities via FRP</h4>
                </div>
                <Testimonials array={collegeData.testimonials}/> 
            </div>

            <div className="row college-details-2" style={{backgroundImage:`url(${collegeData.image2})`}}>
                        
            </div>
        </div>
    );
}

export default ProjectDetails;

