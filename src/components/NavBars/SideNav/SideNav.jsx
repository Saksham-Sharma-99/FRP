import React from "react"
import {Link} from "react-router-dom";
import blueBox from "./assets/blueBox.png";
import "./SideNav.css"




function SideNav(){
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

export default SideNav;