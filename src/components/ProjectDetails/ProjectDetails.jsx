import React from "react";
import "./ProjectDetails.css"
import {projectDetails, testimonialDetails} from "./Details";
import { render } from "@testing-library/react";

function LocationsTop(props){
    return(
        <div className="row nearby-img-cont" style={{paddingLeft:"0px",paddingRight:"30px"}}>
                {(props.array).map((el)=>{
                    return el.id==1?(
                        <div className="col-6">
                    <img className="nearby-img-lg" src={el.image} />
                    <p ><a href="" className="img-txt1 img-txt">lorem ipsum dgudguefj dhydfef</a></p>
                </div>
                    ):(
                        <div className="col-3">
                    <img className="nearby-img-small" src={el.image} />
                    <p ><a href="" className="img-txt2 img-txt">lorem ipsum dgudguefj dhydfef</a></p>
                </div>
                    )
                })}
            </div>
    );
}

function LocationsMid(props){
    return(
        <div className="row nearby-img-cont" style={{paddingBottom:"1.5rem", paddingLeft:"0px",paddingRight:"30px"}}>
                {(props.array).map((el)=>{
                    return el.id==3?(
                        <div className="col-6">
                    <img className="nearby-img-lg bg-right-img" src={el.image} style={{position:"relative", bottom:"150px"}}/>
                    <p ><a href="" className="img-txt3 img-txt">lorem ipsum dgudguefj dhydfef</a></p>
                </div>
                    ):(
                        <div className="col-3">
                    <img className="nearby-img-small" src={el.image} />
                    <p ><a href="" className="img-txt2 img-txt">lorem ipsum dgudguefj dhydfef</a></p>
                </div>
                    )
                })}
            </div>
    );
}

function Testimonials(props){
    return (
        <div className="row testimonials-cont" style={{paddingLeft:"80px",paddingRight:"20px", paddingBottom:"20px"}}>
            {(props.array).map((el)=>{
                return(
                    <div className="col-3">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={el.image} style={{width:"300px", height:"300px", borderTopLeftRadius:"10px", borderTopRightRadius:"10px"}} />
                                <h1 style={{paddingTop:"30px", marginBottom:"25px"}}>{el.name}</h1>
                                <h5>Branch:{el.branch}</h5>
                            </div>
                            <div className="flip-card-back">
                                <blockquote>{el.quote}</blockquote>   
                            </div>
                        </div>
                    </div>
                </div>  
                );
            })}
        </div>
    );
    
}


const img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYLP8ZqKpvEWHWJ8nkTDA7E-0uAVPcsfkpjg&usqp=CAU";
function ProjectDetails(){
    return(
        <div className="container-fluid cont-fl">
            <div className="row college-img-row">
                <img className="university_img" src="https://c1.wallpaperflare.com/preview/812/366/509/purdue-university-west-lafayette-indiana-arch.jpg" />
                <h2 className="college-name" >College Name</h2>
            </div>
            <div className="row college-detail-row">
                <div className="col-sm-12 college-details">
                    <h1 style={{fontWeight:"bold", fontSize:"4.2rem", paddingBottom:"2rem"}}>Locations Nearby</h1>
                    <p>Beautiful places near campus to visit and have a great experience</p>
                </div>
            </div>

            <LocationsTop array={projectDetails}/>
            <LocationsMid array={projectDetails}/>

            <div className="row">
                <div className="col-sm-12 college-details-2">
                    <h1 style={{fontWeight:"bold", fontSize:"4.2rem", paddingBottom:"0rem"}}>Testimonials</h1>
                    <p>Students who have previously been a part of foreign universities via FRP</p>
                </div>
            </div>
                <Testimonials array={testimonialDetails}/> 
        </div>
    );
}

export default ProjectDetails;

