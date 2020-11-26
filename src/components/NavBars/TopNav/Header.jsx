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


function NavItem(props){
  return (<Link to='/chats'><li class = "nav-item "> 
            <a class="nav-link" href="#" >
              <img  className = "navItem" src ={props.img} />
            </a>
          </li></Link>);
}


function Header(){
// const [show , hidNav] = useState(true)

function HideNav(){
  ReactDOM.render(
    <App showSideNav ={false}/>,
  document.getElementById('root')
);
}
function ShowNav(){
  ReactDOM.render(
    <App showSideNav ={true}/>,
  document.getElementById('root')
);
}


return (
<Navbar collapseOnSelect expand="lg" bg="custom" variant="dark" 
  style={{margin:'0px', backgroundColor:'#0B83DA',border:'0px', paddingTop:'12px',paddingBottom:'12px'
  ,borderRadius : "0%"}}>


  <Navbar.Brand href="#">
    <img src={logo} style={{width: '60px', backgroundColor: 'transparent',marginRight:'15px',
    marginLeft:'25px' , borderRadius : "50%"}}/> 
    <Link to = '/projects' onClick = {ShowNav}><a class="navbar-header navbar-brand" style={{fontSize:'30px',
    fontWeight:"bolder", fontFamily:'Tw !important' , color:"white"}} href = "/"> Foreign Research Portal</a>
    </Link>
  </Navbar.Brand>

  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto"></Nav>
    <Nav>


      <NavDropdown title={<div className="pull-right" >
      <FaBell className="chatIcon"   />
      </div>} id="collasible-nav-dropdown" >
        {Notifications.map(notifData => 
              <NavDropdown.Item href={notifData.action}>
                {notifData.notif.substr(0,40)}...
              </NavDropdown.Item>)}
      </NavDropdown>

      <Nav.Link>
        <Link to='/chats' onClick = {HideNav}>
          <MdMessage className="chatIcon" />
        </Link>
      </Nav.Link>

      <NavDropdown title={<div className="pull-left">
        <RiUserFill className="chatIcon" />
      </div>} id="collasible-nav-dropdown" >

        <NavDropdown.Item href="#profile/resume" onClick={HideNav} >
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
        </NavDropdown.Item>

          <hr style={{margin:"0"}}/>

        <NavDropdown.Item href="#projects" onClick={ShowNav}>
          <h6 style={{textAlign:"center"}}>Home</h6>
        </NavDropdown.Item>

        <NavDropdown.Item href="#">
          <h6 style={{textAlign:"center"}}>Edit Resume</h6>
        </NavDropdown.Item>

        <NavDropdown.Item href="#profile/documents" onClick={HideNav}>
          <h6 style={{textAlign:"center"}}>Manage Documents</h6>
        </NavDropdown.Item>
        
        <NavDropdown.Item href="https://ir.iitr.ac.in/IR_Cell_ContactUs/">
          <h6 style={{textAlign:"center"}}>Contact Us</h6>
        </NavDropdown.Item>

        <NavDropdown.Item href="#logout">
          <h6 style={{textAlign:"center"}}>Logout</h6>
        </NavDropdown.Item>

      </NavDropdown>


    </Nav>
  </Navbar.Collapse>


</Navbar> 
);
}



export default Header;