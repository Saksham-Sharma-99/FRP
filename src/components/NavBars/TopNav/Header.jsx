import React,{useState} from "react";
import ReactDOM from 'react-dom'
import {Link} from "react-router-dom";
import {logo,notif,chat,profile} from "./assets";
import {profileImage} from "../../../Profile/assets"
import {Navbar,Dropdown,Nav,NavDropdown} from "react-bootstrap"
import App from "../../../App"
import "./Header.css"
import Notifications from './Notifications.js'


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
        <img className="thumbnail-image navItem pull-right" src={notif}/>
      </div>} id="collasible-nav-dropdown" >
        {Notifications.map(notifData => 
              <NavDropdown.Item href={notifData.action}>
                {notifData.notif.substr(0,40)}...
              </NavDropdown.Item>)}
      </NavDropdown>

      <Nav.Link>
        <Link to='/chats' onClick = {HideNav}>
          <img  className = "navItem" src ={chat} />
        </Link>
      </Nav.Link>

      <NavDropdown title={<div className="pull-left">
        <img className="thumbnail-image navItem" src={profile}/>
      </div>} id="collasible-nav-dropdown" >

        <NavDropdown.Item >
            <Link to='/profile/resume' onClick = {HideNav}>
              <div className = "container-fluid">
              <div className ="col-2">
              <img  className = "navItem" src ={profileImage} style={{height:"35px",width:"35px"}}/>
              </div>
              <div className="col-10">
              <h4 style={{marginTop:"10px"}}>Student Name</h4>
              </div>
              </div>
            </Link> 
        </NavDropdown.Item>
          <hr style={{margin:"0"}}/>

        <NavDropdown.Item href="/logout">
          <h5 style={{textAlign:"left"}}>Logout</h5>
        </NavDropdown.Item>
        
        <NavDropdown.Item href="https://ir.iitr.ac.in/IR_Cell_ContactUs/">
          <p style={{textAlign:"left"}}>Contact Us</p>
        </NavDropdown.Item>

      </NavDropdown>


    </Nav>
  </Navbar.Collapse>


</Navbar> 
);
}



export default Header;