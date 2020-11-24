import React,{useState} from "react";
import ReactDOM from 'react-dom'
import {Link} from "react-router-dom";
import {logo,notif,chat,profile} from "./assets";
import {Dropdown} from "react-bootstrap"
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
  
    <nav class="navbar navbar-inverse" style={{margin:'0px', backgroundColor:'#0B83DA',border:'0px', paddingTop:'12px',paddingBottom:'12px',borderRadius : "0%"}}>
    <div class="container-fluid">

        <div class="navbar-header">
            <img src={logo} style={{width: '60px', backgroundColor: 'transparent',marginRight:'15px', marginLeft:'25px' , borderRadius : "50%"}}> 
            </img>
           <Link to = '/projects' onClick = {ShowNav}><a class="navbar-header navbar-brand" style={{fontSize:'30px',fontWeight:"bolder", fontFamily:'Tw !important' , color:"white"}} href = "/"> Foreign Research Portal</a></Link>
         </div>

      
      

      <ul class="nav navbar-right" >

        <Link to='/chats' onClick = {HideNav}><li class = "nav-item "> 
            <a class="nav-link" href="#" >
              <img  className = "navItem" src ={chat} />
            </a>
          </li></Link>

          <li class = "nav-item "> 
          <Dropdown >
            <Dropdown.Toggle variant="success" id="dropdown-basic" style={{
              backgroundColor : "transparent",
              border : '0'
            }} >
            <img  className = "navItem" src ={notif} />
            </Dropdown.Toggle>

            <Dropdown.Menu style = {{zIndex : "1" }}>
              {Notifications.map(notifData => 
              <Dropdown.Item href={notifData.action}>
                {notifData.notif.substr(0,40)}...
              </Dropdown.Item>)}
            </Dropdown.Menu>
          </Dropdown>
            
          </li>
          
          <Link to='/profile' onClick = {HideNav}>
          <li class = "nav-item "> 
            <a class="nav-link" href="#" >
              <img  className = "navItem" src ={profile} />
            </a>
          </li>
          </Link>

      </ul>
      
    </div>
  </nav>        );
}



export default Header;