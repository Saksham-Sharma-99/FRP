import React from "react"
import {profileImage} from "./assets"
import ReactDOM from "react-dom"
import "./Profile.css"
import App from "../App"


window.onbeforeunload = (e) => {
    // I'm about to refresh! do something...
    ReactDOM.render(
        <App showSideNav ={true}/>,
      document.getElementById('root')
    );
    };


function PersonalDetails(props){
    return(
        <div className = "col-sm">

            <div className="row"> 
                <div className = "col-lg-6" >
                    <img src = {profileImage} className="profile-image"/>
                </div>
                <div className="col-lg-6" style={{marginTop:"10px"}}>
                    <h4 className="student-details" style={{marginTop : "20px"}}>{props.name}</h4>
                    <p className="student-details" style={{color :"gray"}}>{props.en}</p>
                    <p className="student-details" style={{color :"gray"}}>{props.email}</p>
                </div>
            </div>

        </div>
    )
}

function AcademicDetails(props){
    return(
        <div className="col-md">
            <div className="row"> 
                <div className = "col-sm">
                    <p className="others" style={{marginTop:"20px"}}>Branch : {props.br}</p>
                    <p className="others" >Current CGPA : {props.cg}</p>
                    <p className="others">Semester : {props.sem}</p>
                </div>
            </div>
        </div>
    )
}

function Profile(){
    return (
        <div className = "container-fluid" style={{paddingLeft:"80px" , paddingRight :"80px" , paddingTop:"40px"}}>

            <div className = "row">

                <PersonalDetails name="Student Name" en="17117061" email="abcdef_abcedghi@br.iitr.ac.in"/>

                <div className="col-sm"></div>

                <AcademicDetails cg="9" br="abcdefghijklmnopq" sem="2nd"/>

            </div>

            <hr></hr>

            <div className = "row">

            </div>

        </div>
    )
}

export default Profile;