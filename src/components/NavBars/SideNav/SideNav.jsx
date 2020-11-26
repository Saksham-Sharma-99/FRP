import React from "react"
import {Link} from "react-router-dom";
import blueBox from "./assets/blueBox.png";
import "./SideNav.css"
import {AiFillBook} from "react-icons/ai"
import {GoBookmark} from "react-icons/go"
import {HiDocumentDuplicate} from "react-icons/hi"
import {RiArticleFill} from "react-icons/ri"
import {GiTeamIdea} from "react-icons/gi"




function SideNavStuff(){
    return (
        <div className="container-fluid sidnav"   align="left"><br/>
        
            <div className="row sideNavLink">
                <Link to="/projects" id="projects"  align="left" style={{paddingLeft:'17%'}} className="col-sm-12"><span><AiFillBook  size="30px"/></span> &nbsp; Projects</Link>
            </div>
            <div className="row sideNavLink" align="center">
                <Link to="/bookmarks" align="left" style={{paddingLeft:'17%'}} id="bookmarks" className="col-sm-12"><span><GoBookmark size="30px"/></span> &nbsp; Bookmarks</Link>
            </div>
            <div className="row sideNavLink" align="center">
                <Link to="/results" align="left" style={{paddingLeft:'17%'}} id="results" className="col-sm-12"><span><HiDocumentDuplicate size="30px"/></span> &nbsp; Results</Link>
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

function BottomNavStuff(){
    return (
        <div className="row"   align="center">
        
            <div className="col-2">
                <Link to="/projects" id="projects"  align="center" style={{paddingLeft:'17%'}} >
                <AiFillBook  size="30px"/> <br/> <p>Projects</p>
                </Link>
            </div>
            <div className="col-2" align="center">
                <Link to="/bookmarks" align="center" style={{paddingLeft:'17%'}} id="bookmarks" >
                <GoBookmark size="30px"/>  <br/><p>Bookmarks</p>
                </Link>
            </div>
            <div className="col-2" align="center">
                <Link to="/results" align="center" style={{paddingLeft:'17%'}} id="results" >
                <HiDocumentDuplicate size="30px"/>  <br/><p>Results</p>
                </Link>
            </div>
            <hr/>
            <div className="col-2" align="center">
                <a href="https://medium.com/@ircell/" target="iriitr" id="experience" className="sideNavLink1"><RiArticleFill size="30px"/></a>
            </div>
            <div className="col-2" align="center">
                <a href="https://ir.iitr.ac.in/IR_Cell_ContactUs/" target="ircteam" id="team" className="sideNavLink1"><GiTeamIdea size="30px"/></a>
            </div>

        </div>

    );

}

function SideNav(props){
    if (props.show){
        if(visualViewport.width >991){
   return( <div className="col-lg-2" style={{
        borderbottom: '0px inset silver',
        padding: '0px',
        margin: '0px',
        height: '90.5vh',
        boxShadow: '2px 2px 7px 0px silver',
        // position : "fixed",
        zIndex: "0"}}>
          <SideNavStuff/>
    </div>)}else{
        return (
            <div className="col-lg-2" style={{
                borderbottom: '0px inset silver',
                backgroundColor:"white",
                padding: '0px',
                margin: '0px',
                height: '60px',
                bottom:"0px",
                right:"0px",
                boxShadow: '2px 5px 5px 7px silver',
                // borderTop:"solid",
                // border:"0.1px solid",
                position : "fixed",
                // marginBottom:"10px",
                zIndex: "1"}}>
                <div className="container-fluid" style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"10px"}}>
                    <BottomNavStuff />
                </div>
            </div>
        )
    }
    }
    else{
        return null
    }
}

export default SideNav;