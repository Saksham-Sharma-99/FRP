import React from "react";
import {Link} from "react-router-dom";
import {logo,notif,chat,profile} from "./assets";
import "./Header.css"


function NavItem(props){
  return (<li class = "nav-item "> 
            <a class="nav-link" href="#" >
              <img  className = "navItem" src ={props.img} />
            </a>
          </li>);
}


function Header(){
return (
    <nav class="navbar navbar-inverse" style={{margin:'0px', backgroundColor:'#0B83DA',border:'0px', paddingTop:'12px',paddingBottom:'12px',borderRadius : "0%"}}>
    <div class="container-fluid">

        <div class="navbar-header">
            <img src={logo} style={{width: '60px', backgroundColor: 'transparent',marginRight:'15px', marginLeft:'25px' , borderRadius : "50%"}}> 
            </img>
           <Link to = '/projects'><a class="navbar-header navbar-brand" style={{fontSize:'30px',fontWeight:"bolder", fontFamily:'Tw !important' , color:"white"}} href = "/"> Foreign Research Portal</a></Link>
         </div>

      
      

      <ul class="nav navbar-right" >
        {[chat , notif, profile].map(image => <NavItem img = {image} />)}
      </ul>
      
    </div>
  </nav>        );
}

export default Header;
