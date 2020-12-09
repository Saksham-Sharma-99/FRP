import React from "react"
import {profileImage} from "./assets"
import {AuthRoute} from 'react-router-auth';
import {HashRouter, Switch} from 'react-router-dom';
import "./Profile.css"
import SideNav from "./components/SideNav/SideNav"

import {Bookmarks} from "../components/Projects/Projects.jsx";
import Resume from "./components/Resume/Resume"
import Documents from "./components/Documents/Documents"
import { Constants } from "../Model/Constants";

function PersonalDetails(props){
    return(
        <div className = "col-lg">

            <div className="row"> 
                <div className = "col-lg-6" >
                    <img src = {props.image== null ? profileImage : props.image} className="profile-image"/>
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
        <div className="col-lg">
            <div className="row"> 
                <div className = "col-lg">
                    <p className="others" style={{marginTop:"20px"}}>Branch : {props.br}</p>
                    <p className="others">Semester : {props.sem}</p>
                </div>
            </div>
        </div>
    )
}

function Profile(){
    var profileData = JSON.parse(sessionStorage.getItem(Constants.CHANNELI_DATA))
    // var personalData = profileData.personalData.personalDetails
    // var acadData = profileData.personalData.acadDetails
    return (
        <div className = "container-fluid" style={{paddingLeft:"80px" , paddingRight :"80px" , paddingTop:"40px"}}>

            <div className = "row">

                <PersonalDetails name={profileData.person.fullName} 
                                 en={profileData.student.enrollmentNumber} 
                                 email={profileData.contactInformation.instituteWebmailAddress}
                                 image = {profileData.person.displayPicture}
                                 />

                <div className="col-sm"></div>

                <AcademicDetails  br={profileData.student['branch degree name']} 
                                 sem={profileData.student.currentSemester}/>

            </div>

            <hr style ={{width : "99%" ,zIndex:"-1"}}/>

            <div className = "row">
                <SideNav show={true}/>  

                <div className="col-sm-10" 
                    style={{margin: '0px',
                    padding: '0px',
                    // position: "relative" ,
                    // left : "0%", 
                    // zIndex: "1",
                    msOverflowStyle : "none",
                    height:"63.5vh",
                    overflowY : "scroll"
                    }} align="left">
                    <HashRouter>
                        <Switch>
                            <AuthRoute
                                authenticated={true}
                                redirectTo='/auth'
                                path='/profile/resume'
                                component={Resume}/>
                            <AuthRoute
                                authenticated={true}
                                redirectTo='/auth'
                                path='/profile/documents'
                                component={Documents}/>
                            <AuthRoute
                                authenticated={true}
                                redirectTo='/auth'
                                path='/profile/bookmarks'
                                component={Bookmarks}/>
                        </Switch>
                    </HashRouter>  
                 </div>

            </div>

        </div>
    )
}

export default Profile;

// {"userId":6507,"username":"19118071","person":{"fullName":"Saksham Sharma","roles":[{"role":"Student","activeStatus":"ActiveStatus.IS_ACTIVE"}],"displayPicture":null},"student":{"enrolmentNumber":"19118071","branch name":"B.Tech. (Metallurgical & Materials Engineering)","branch degree name":"B.Tech. - Bachelor of Technology","currentYear":2,"currentSemester":3,"branch department name":"Metallurgical and Materials Engineering Department"},"facultyMember":{},"biologicalInformation":{"dateOfBirth":"1999-08-13"},"contactInformation":{"emailAddress":"sakshamsharma99@outlook.com","primaryPhoneNumber":"91-8909140299","instituteWebmailAddress":"saksham_s@mt.iitr.ac.in"},"socialInformation":{}}