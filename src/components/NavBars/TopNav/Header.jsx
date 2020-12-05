import React,{useState} from "react";
import ReactDOM from 'react-dom'
import {Link} from "react-router-dom";
import {logo} from "./assets";
import {profileImage} from "../../../Profile/assets"
import {Navbar,Dropdown,Nav,NavDropdown} from "react-bootstrap"
import App from "../../../App"
import "./Header.css"
import Notifications from './Notifications.js'

import {MdMessage} from "react-icons/md"
import {FaBell} from "react-icons/fa"
import {RiUserFill,RiMessageFill} from "react-icons/ri"
import {TiHomeOutline} from "react-icons/ti"
import {GiIdCard} from "react-icons/gi"
import {IoIosDocument} from "react-icons/io"
import {GiTeamIdea} from "react-icons/gi"
import {BiLogOut} from "react-icons/bi"
import {isLoggedIn} from "../../Auth/Auth"

function HideNav(){
  ReactDOM.render(
    <App showSideNav ={false}/>,
  document.getElementById('root')
);
}
function ShowNav(){
  ReactDOM.render(
    <App showSideNav ={true} />,
  document.getElementById('root')
);
}

function Logout(){
  sessionStorage.setItem('isLoggedIn','no')
  window.location.reload()
  HideNav()
}

function NotificationTab(){
  return(
    <NavDropdown title={<div className="pull-left" >
      <FaBell className="chatIcon"   />
      {visualViewport.width<991 ? <b className="iconTitle">Notifications</b>:null}
      </div>} id="collasible-nav-dropdown" >
        {Notifications.slice(0,5).map(notifData => 
              <NavDropdown.Item >
              <Link to={notifData.action} className="menuLink">
                <div className="container-fluid">
                    <div className="row">
                      <div className="col-1">
                        <b>{notifData.title}</b>
                      </div>
                      <div className="col-1">
                        <p style={{fontSize:"12px",position:"relative",left:"200px",top:"2px"}}>{notifData.date}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col content" style={{textAlign:"left",position:"relative",bottom:"8px"}}>
                       {notifData.notif.substr(0,40)}...
                      </div>
                    </div>
                </div>
                </Link>
              </NavDropdown.Item>)}
        <hr style={{margin:"0"}}/>
        <NavDropdown.Item >
          <Link to="/notifications" className="menuLink">
          <h6>See More</h6>
          </Link>
        </NavDropdown.Item>
      </NavDropdown>
  )
}
function ChatsTab() {
  return (
  <Nav.Link>
  <Link to='/chats' onClick = {HideNav}>
    <MdMessage className="chatIcon" />
    {visualViewport.width<991 ? <b className="iconTitle">Chats</b>:null}
  </Link>
</Nav.Link>
  );
}

function ProfileTab(){
  return(
    <NavDropdown title={<div className="pull-left">
        <RiUserFill className="chatIcon" />
        {visualViewport.width<991 ? <b className="iconTitle">Settings</b>:null}
      </div>} id="collasible-nav-dropdown" >

        <NavDropdown.Item>
          <Link className="menuLink" to="/profile/resume" onClick={HideNav}>
              <div className = "container-fluid">
              <div className ="col-1">
              <img  className = "navItem" src ={profileImage} 
              style={{height:"55px",width:"55px",borderRadius:"50%",
              backgroundColor:"lightgray" , position:"relative" , right:"40px"}}/>
              </div>
              <div className="col-8">
              <div className="row">
              <h5 style={{marginTop:"10px"}}>Student Name</h5>
              </div>
              <div className="row">
              <h6 style={{marginTop:"10px"}}>Student</h6>
              </div>
              </div>
              </div>
              </Link>
        </NavDropdown.Item>

          <hr style={{margin:"0"}}/>

        <NavDropdown.Item >
        <Link className="menuLink" to="/projects" onClick={ShowNav}>
        <div className="row" style={{alignSelf:"center"}}>
          <TiHomeOutline style={{marginLeft:"50px",height:"22px",width:"22px"}}/>
          <h6 style={{textAlign:"center",marginLeft:"20px",marginTop:"3px",alignSelf:"center"}}>Home</h6>
          </div>
          </Link>
        </NavDropdown.Item>

        <NavDropdown.Item>
        <Link className="menuLink" to="">
          <div className="row" style={{alignSelf:"center"}}>
          <GiIdCard style={{marginLeft:"50px",height:"22px",width:"22px"}}/>
          <h6 style={{textAlign:"center",marginLeft:"20px",marginTop:"3px",alignSelf:"center"}}>Edit Resume</h6>
          </div>
          </Link>
        </NavDropdown.Item>

        <NavDropdown.Item>
        <Link className="menuLink" to="/profile/documents" onClick={HideNav}>
        <div className="row" style={{alignSelf:"center"}}>
          <IoIosDocument style={{marginLeft:"50px",height:"22px",width:"22px"}}/>
          <h6 style={{textAlign:"center",marginLeft:"20px",marginTop:"3px",alignSelf:"center"}}>Manage Documents</h6>
          </div>
          </Link>
        </NavDropdown.Item>
        
        <NavDropdown.Item >
        <Link className="menuLink" onClick={()=>window.location.replace("https://ir.iitr.ac.in/IR_Cell_ContactUs/")} >
        <div className="row" style={{alignSelf:"center"}}>
          <GiTeamIdea style={{marginLeft:"50px",height:"22px",width:"22px"}}/>
          <h6 style={{textAlign:"center",marginLeft:"20px",marginTop:"3px",alignSelf:"center"}}>Contact Us</h6>
          </div>
          </Link>
        </NavDropdown.Item>

        <NavDropdown.Item>
        <Link className="menuLink" to="/auth" onClick={Logout}>
        <div className="row" style={{alignSelf:"center"}}>
          <BiLogOut style={{marginLeft:"50px",height:"22px",width:"22px"}}/>
          <h6 style={{textAlign:"center",marginLeft:"20px",marginTop:"3px",alignSelf:"center"}}>Logout</h6>
          </div>
          </Link>
        </NavDropdown.Item>

      </NavDropdown>
  )
}

function NavItems(){
  return (
    <Nav>
      <NotificationTab />

      <ChatsTab />

      <ProfileTab />
    </Nav>
  );
}


function Header(props){
// const [show , hidNav] = useState(true)
return (
<Navbar collapseOnSelect expand="lg" bg="custom" variant="dark" 
  style={{margin:'0px', backgroundColor:'#0B83DA',border:'0px', paddingTop:'12px',paddingBottom:'12px'
  ,borderRadius : "0%"}}>


  <Navbar.Brand href="#">
    <img src={logo} style={{width: '60px', backgroundColor: 'transparent',marginRight:'15px',
    marginLeft:'25px' , borderRadius : "50%"}}/> 
    <Link to = {props.showItems ? '/projects':'/auth'} onClick = {ShowNav}><a class="navbar-header navbar-brand" style={{fontSize:'30px',
    fontWeight:"bolder", fontFamily:'Tw !important' , color:"white"}} href = "/"> Foreign Research Portal</a>
    </Link>
  </Navbar.Brand>

  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto"></Nav>

    {props.showItems?<NavItems />:null}
  </Navbar.Collapse>


</Navbar> 
);
}



export default Header;