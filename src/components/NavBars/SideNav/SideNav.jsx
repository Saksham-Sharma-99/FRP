import React from "react"
import {Link} from "react-router-dom";
import blueBox from "./assets/blueBox.png";
import "./SideNav.css"




function SideNavStuff(){
    return (
        <div className="container-fluid sidnav"   align="left"><br/>
        
            <div className="row sideNavLink">
                <Link to="/projects" id="projects"  align="left" style={{paddingLeft:'17%'}} className="col-sm-12"><span><img style={{width:'10px'}} src={blueBox}></img></span> &nbsp; Projects</Link>
            </div>
            <div className="row sideNavLink" align="center">
                <Link to="/bookmarks" align="left" style={{paddingLeft:'17%'}} id="bookmarks" className="col-sm-12"><span><img style={{width:'10px'}} src={blueBox}></img></span> &nbsp; Bookmarks</Link>
            </div>
            <div className="row sideNavLink" align="center">
                <Link to="/results" align="left" style={{paddingLeft:'17%'}} id="results" className="col-sm-12"><span><img style={{width:'10px'}} src={blueBox}></img></span> &nbsp; Results</Link>
            </div>
            <hr/>
            <div className="row sideNavLink" align="center">
                <a href="https://medium.com/@ircell/" target="iriitr" id="experience" className="col-sm-12 sideNavLink1">Experience</a>
            </div>
            <hr/>
            <div className="row sideNavLink" align="center">
                
                <a href="https://ir.iitr.ac.in/IR_Cell_ContactUs/" target="ircteam" id="team" className="col-sm-12 sideNavLink1">Team</a>
            </div>

        </div>

    );
}

function SideNav(props){
    if (props.show){
   return( <div className="col-sm-2" style={{
        borderbottom: '0px inset silver',
        padding: '0px',
        margin: '0px',
        height: '90.5vh',
        boxShadow: '2px 2px 7px 0px silver',
        position : "fixed",
        zIndex: "0"}}>
          <SideNavStuff/>
    </div>)}
    else{
        return null
    }
}

export default SideNav;