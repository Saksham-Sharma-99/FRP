import React from "react"
import {AuthRoute} from 'react-router-auth';
import {HashRouter, Link, Switch} from 'react-router-dom';
import "./Profile.css"
import "../components/NavBars/SideNav/SideNav.css"
import {profileImage} from "./assets/index"
import { CHANNELI_URL, Constants } from "../Model/Constants";
import {Card,ListGroup,ListGroupItem} from "react-bootstrap"
import Nav from "./components/Nav/Nav";
import { Resume, Transcript } from "./components/PdfView/PdfView";

var MILLISECONDS_IN_A_YEAR = 1000*60*60*24*365;
function getAge(time){
    var date_array = time.split('-')
    var years_elapsed = (new Date() - new Date(date_array[0],date_array[1],date_array[2]))/(MILLISECONDS_IN_A_YEAR);
    return parseInt(years_elapsed); }

function StudentDetails(props){
    var img = (props.img==null) ? profileImage : (CHANNELI_URL+props.img)
    return(
        <Card style={{ width: '18rem',float:"left"}} className = "flip-card-front">
            <div class="card-top" style={{backgroundColor:"#1b262c",height:"170px"}} > </div>
            <Card.Body >
                <img src={img} className="profile-image"></img>
                <Card.Title style={{textAlign:"center",marginTop:"10px"}}>
                    <strong><p>{props.name}, {getAge(props.dob)}</p></strong>
                    <p style={{fontSize:"13px",float:"left" , display:"inline-block"}}>{props.role}</p>
                    <p style={{fontSize:"13px",float:"Right", display:"inline-block"}}>{props.en}</p>
                </Card.Title>
                <br />
                <br />
                {/* <Card.Body></Card.Body> */}
                <Card.Text style={{textAlign:"center"}}>{props.branch}</Card.Text>
                <Card.Text><strong>Semester</strong> : {props.sem}</Card.Text>
                <Card.Text><strong>Email</strong> : {props.email}</Card.Text>
                <Card.Text><strong>Number</strong> : {props.num}</Card.Text>
                
            </Card.Body>
                <a className="edit-profile" href="https://internet.channeli.in/settings/edit_profile">Edit Profile</a>
            {/* <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body> */}
        </Card>
        
    )
}



function Profile(){
    var profileData = JSON.parse(sessionStorage.getItem(Constants.CHANNELI_DATA))
    // var personalData = profileData.personalData.personalDetails
    // var acadData = profileData.personalData.acadDetails
    return (
        <HashRouter >
        <div className = "container-fluid profile-section">
            <div className="row profile-card">

                 <div className ="col-4 id-section flip-card">
                    <StudentDetails  name={profileData.person.fullName} role={profileData.person.roles[0].role}
                                     en={profileData.username} branch={profileData.student["branch department name"]} 
                                     sem={profileData.student.currentSemester} 
                                     email ={profileData.contactInformation.instituteWebmailAddress}
                                     dob={profileData.biologicalInformation.dateOfBirth}
                                     img={profileData.person.displayPicture}
                                     num = {profileData.contactInformation.primaryPhoneNumber}
                    />
                </div>

                <div className="col-8" >
                    <div className="container-fluid documents" style={{height:"77vh",minWidth:"40vw",padding:"20px"}}>
                        <h2>Documents Information</h2>
                        <hr className="hr4"></hr>
                        <Nav />
                        
                            <Switch>
                                <AuthRoute 
                                    authenticated={sessionStorage.getItem(Constants.IS_LOGGED_IN)==="yes"}
                                    redirectTo="/auth"
                                    path="/profile/resume"
                                    component={Resume}
                                />
                                <AuthRoute 
                                    authenticated={sessionStorage.getItem(Constants.IS_LOGGED_IN)==="yes"}
                                    redirectTo="/auth"
                                    path="/profile/transcript"
                                    component={Transcript}
                                />
                            </Switch>
                    </div>
                </div>

            </div>

        </div>
        </HashRouter>
    )
}

export default Profile;

// {"userId":6507,"username":"19118071","person":{"fullName":"Saksham Sharma","roles":[{"role":"Student","activeStatus":"ActiveStatus.IS_ACTIVE"}],"displayPicture":null},"student":{"enrolmentNumber":"19118071","branch name":"B.Tech. (Metallurgical & Materials Engineering)","branch degree name":"B.Tech. - Bachelor of Technology","currentYear":2,"currentSemester":3,"branch department name":"Metallurgical and Materials Engineering Department"},"facultyMember":{},"biologicalInformation":{"dateOfBirth":"1999-08-13"},"contactInformation":{"emailAddress":"sakshamsharma99@outlook.com","primaryPhoneNumber":"91-8909140299","instituteWebmailAddress":"saksham_s@mt.iitr.ac.in"},"socialInformation":{}}