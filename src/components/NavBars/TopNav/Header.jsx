import React,{useState} from "react";
import ReactDOM from 'react-dom'
import {Link} from "react-router-dom";
import {logo} from "./assets";
import {profileImage} from "../../../Profile/assets"
import {Navbar,Nav,NavDropdown} from "react-bootstrap"
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
import {LogOut,GetRequest} from "../../../Model/RequestHandler"
import { CHANNELI_URL, Constants ,ORIGIN,Routes} from "../../../Model/Constants";

function HideNav(){
  ReactDOM.render(
    <App showSideNav ={false}/>,
  document.getElementById('root')
);
}
function ShowNav(){
  if(sessionStorage.getItem(Constants.IS_LOGGED_IN)==="yes"){
    GetRequest(Routes.USER_DETAILS,(res)=>{
      if (res.status==200){
          GetRequest(Routes.PROJECTS , (resp)=>{
              if (resp.status == 200){
                  sessionStorage.setItem(Constants.PROJECTS , JSON.stringify(resp.data))
                  sessionStorage.setItem(Constants.USER_PROFILE,JSON.stringify(res.data[0][0]))
                  sessionStorage.setItem(Constants.CHANNELI_DATA,JSON.stringify(res.data[1]))
              }
              else{
                  window.alert("Can't Reload. Unknown Error Occured")
              }
          })
      }
      else{
          window.alert("Can't Reload. Unknown Error Occured")
      }
  },{token:sessionStorage.getItem(Constants.AUTH_TOKEN)})
  }
  
  ReactDOM.render(
    <App showSideNav ={true} />,
  document.getElementById('root')
  );
}

function Logout(){
  LogOut()
  HideNav()
}

function NotificationTab(){
  var NotifData = JSON.parse(sessionStorage.getItem(Constants.CHANNELI_DATA)).notifs

  return(
    <NavDropdown title={<div className="pull-left" >
      <FaBell className="chatIcon"   />
      {visualViewport.width<991 ? <b className="iconTitle">Notifications</b>:null}
      </div>} id="collasible-nav-dropdown" >
        {NotifData.slice(0,8).reverse().map(notifData => 
              <NavDropdown.Item >
              <Link to={notifData.action} className="menuLink">
                <div className="container-fluid">
                    <div className="row">
                      <div className="col-1">
                        <b>{notifData.data.title}</b>
                      </div>
                      <div className="col-1">
                        <p style={{fontSize:"12px",position:"relative",left:"200px",top:"2px"}}>{notifData.createdAt}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col content" style={{textAlign:"left",position:"relative",bottom:"8px"}}>
                       {notifData.data.content}
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
  var profileData = JSON.parse(sessionStorage.getItem(Constants.CHANNELI_DATA))
  return(
    <NavDropdown title={<div className="pull-left">
        <RiUserFill className="chatIcon" />
        {visualViewport.width<991 ? <b className="iconTitle">Settings</b>:null}
      </div>} id="collasible-nav-dropdown" >

        <NavDropdown.Item>
          <Link className="menuLink" to="/profile/resume" onClick={HideNav}>
              <div className = "container-fluid">
              <div className ="col-1">
              <img  className = "navItem" src ={profileData.person.displayPicture==null ? profileImage:(CHANNELI_URL+profileData.person.displayPicture)} 
              style={{height:"55px",width:"55px",borderRadius:"50%",padding:"3px",
              backgroundColor:"lightgray" , position:"relative" , right:"40px"}}/>
              </div>
              <div className="col-8">
              <div className="row">
              <h5 style={{marginTop:"10px"}}>{profileData.person.fullName}</h5>
              </div>
              <div className="row">
              <h6 style={{marginTop:"10px"}}>{profileData.person.roles[0].role}</h6>
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
        <Link className="menuLink" to="/profile/resume" onClick={HideNav}>
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

      {/* <ChatsTab /> */}

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

  <Link to = {props.showItems ? '/projects':'/auth'} onClick = {()=>window.location.reload()}>
  <Navbar.Brand href="#">
    <img src={logo} style={{width: '60px', backgroundColor: 'transparent',marginRight:'15px',
    marginLeft:'25px' , borderRadius : "50%"}}/>
    
    <a class="navbar-header navbar-brand" style={{fontSize:'30px',
    fontWeight:"bolder", fontFamily:'Tw !important' , color:"white"}} href = "/"> Foreign Research Portal</a>
    
  </Navbar.Brand>
  </Link>

  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto"></Nav>

    {props.showItems?<NavItems />:null}
  </Navbar.Collapse>


</Navbar> 
);
}



export default Header;