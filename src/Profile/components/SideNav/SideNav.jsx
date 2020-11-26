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

function MidNavStuff(){
    return (
        <div className="row"   align="center">
        
            <div className="col-2">
            <Link to="/profile/resume" id="resume"  align="center" style={{paddingLeft:'17%'}} >
                    <img style={{width:'10px'}} src={blueBox}></img> <br/> <p>Resume</p>
                </Link>
            </div>
            <div className="col-2" align="center">
            <Link to="/profile/documents" id="documents"  align="center" style={{paddingLeft:'17%'}} >
                    <img style={{width:'10px'}} src={blueBox}></img> <br/> <p>Documents</p>
                </Link>
            </div>
            <hr/>
            <div className="col-2" align="center">
                <Link to="/profile/bookmarks" align="left" style={{paddingLeft:'17%' , color:"black"}} 
                id="bookmarks" className="col-sm-12">
                <img style={{width:'10px'}} src={blueBox}></img> <br/> <p>Bookmarks</p></Link>
            </div>
        </div>
    );

}

function SideNav(props){
    if (props.show){
        if(visualViewport.width>991){
   return( <div className="col-lg-2" style={{
        borderbottom: '0px inset silver',
        padding: '0px',
        margin: '0px',
        height: '64.5vh',
        boxShadow: '2px 2px 7px 0px silver',
        position : "relative",
        top :"-2vh",
        left:"-8vh",
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
                top:"-10px",
                boxShadow: '2px 5px 5px 7px silver',
                // borderTop:"solid",
                // border:"0.1px solid",
                position : "relative",
                // marginBottom:"10px",
                zIndex: "0"}}>
                <div className="container-fluid" style={{paddingLeft:"30px",paddingRight:"30px",paddingTop:"10px"}}>
                    <MidNavStuff />
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