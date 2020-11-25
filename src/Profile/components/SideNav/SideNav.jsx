import React from "react"
import {Link} from "react-router-dom";
import blueBox from "../../../components/NavBars/SideNav/assets/blueBox.png";
import "./SideNav.css"




function SideNavStuff(){
    return (
        <div className="container-fluid sidnav"   align="left"><br/>
        
            <div className="row sideNavLink2">
                <Link to="/profile/resume" id="resume"  align="left" style={{paddingLeft:'17%'}} className="col-sm-12"><span><img style={{width:'10px'}} src={blueBox}></img></span> &nbsp; Resume</Link>
            </div>
            <div className="row sideNavLink2" align="center">
                <Link to="/profile/documents" align="left" style={{paddingLeft:'17%'}} id="documents" className="col-sm-12"><span><img style={{width:'10px'}} src={blueBox}></img></span> &nbsp; Documents</Link>
            </div>
            <hr/>
            <div className="row sideNavLink2" align="center">
            <Link to="/profile/bookmarks" align="left" style={{paddingLeft:'17%' , color:"black"}} id="bookmarks" className="col-sm-12">Bookmarks</Link>
            </div>
            <hr />

        </div>

    );
}

function SideNav(props){
    if (props.show){
   return( <div className="col-sm-2" style={{
        borderbottom: '0px inset silver',
        padding: '0px',
        margin: '0px',
        height: '64.5vh',
        width: "250px",
        boxShadow: '2px 2px 7px 0px silver',
        position : "relative",
        top :"-2vh",
        left:"-8vh",
        zIndex: "0"}}>
          <SideNavStuff/>
    </div>)}
    else{
        return null
    }
}

export default SideNav;