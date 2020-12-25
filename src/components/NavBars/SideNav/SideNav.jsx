import React,{useState} from "react"
import {Link} from "react-router-dom";
import blueBox from "./assets/blueBox.png";
import "./SideNav.css"
import {AiFillBook} from "react-icons/ai"
import {GoBookmark} from "react-icons/go"
import {ImStatsDots} from "react-icons/im"
import {RiArticleFill} from "react-icons/ri"
import {GiTeamIdea} from "react-icons/gi"




function SideNavStuff(){
    var [category,setCategory] = useState("projects")


    return (
        <div className="container-fluid sidnav"   align="left"><br/>
        
            <div className="row sideNavLink" onClick={()=>setCategory("projects")} 
            style={category=="projects"?{backgroundColor:"white" , fontSize:"1.2rem"}:null}>
                <Link to="/projects" id="projects"  align="left"  className="col-sm-12" 
                style={category=="projects"?null:{color:"white"}}>
                    <span><AiFillBook  size="30px" style={{position:"relative",left:"-5px"}}/></span> &nbsp; Projects
                </Link>
            </div>
            <div className="row sideNavLink" align="center" onClick={()=>setCategory("bookmarks")}
            style={category=="bookmarks"?{backgroundColor:"white", fontSize:"1.2rem"}:null}>
                <Link to="/bookmarks" align="left"  id="bookmarks" className="col-sm-12"
                style={category=="bookmarks"?null:{color:"white"}}>
                    <span><GoBookmark size="30px" style={{position:"relative",left:"-6px"}}/></span> &nbsp; Bookmarks
                </Link>
            </div>
            <div className="row sideNavLink" align="center" onClick={()=>setCategory("results")}
            style={category=="results"?{backgroundColor:"white", fontSize:"1.2rem"}:null}>
                <Link to="/results" align="left"  id="results" className="col-sm-12"
                style={category=="results"?null:{color:"white"}}>
                    <span><ImStatsDots size="24px" style={{position:"relative",left:"-1px"}}/></span> &nbsp; Results
                </Link>
            </div>
            <hr className="hr1"/>
            <hr className="hr2"/>
            <div className="row sideNavLink" align="center">
                <a href="https://medium.com/@ircell/" target="iriitr" id="experience" className="col-sm-12 sideNavLinkSeparate">Experience</a>
            </div>
            <hr className="hr1"/>
            <hr className="hr2"/>
            <div className="row sideNavLink" align="center">
                
                <a href="https://ir.iitr.ac.in/IR_Cell_ContactUs/" target="ircteam" id="team" className="col-sm-12 sideNavLinkSeparate">Team</a>
            </div>

        </div>

    );
}

function BottomNavStuff(){
    var [category,setCategory] = useState("projects")
    return (
        <div className="row"   align="center" style={{padding:"1px",margin:"0"}}>
        
            <div className="col-2" onClick={()=>setCategory("projects")} 
            style={category=="projects"?{backgroundColor:"#0B83DA"}:null}>
                <Link to="/projects" id="projects"  align="center" style={{paddingLeft:'4%'}} 
                style={category=="projects"?{color:"white"}:null}>
                <AiFillBook  size="60px"/> <br/> <p>Projects</p>
                </Link>
            </div>
            <div className="col-2" align="center" onClick={()=>setCategory("bookmarks")}
            style={category=="bookmarks"?{backgroundColor:"#0B83DA"}:null}>
                <Link to="/bookmarks" align="center" style={{paddingLeft:'4%'}} id="bookmarks" 
                style={category=="bookmarks"?{color:"white"}:null}>
                <GoBookmark size="60px"/>  <br/><p>Bookmarks</p>
                </Link>
            </div>
            <div className="col-2" align="center" onClick={()=>setCategory("results")}
            style={category=="results"?{backgroundColor:"#0B83DA"}:null}>
                <Link to="/results" align="center" style={{paddingLeft:'3%'}} id="results" 
                style={category=="results"?{color:"white"}:null}>
                <ImStatsDots size="60px"/>  <br/><p>Results</p>
                </Link>
            </div>
            <hr/>
            <div className="col-2" align="center">
                <a href="https://medium.com/@ircell/" target="iriitr" id="experience" className="sideNavLink1"><RiArticleFill size="60px"/></a>
            </div>
            <div className="col-2" align="center">
                <a href="https://ir.iitr.ac.in/IR_Cell_ContactUs/" target="ircteam" id="team" className="sideNavLink1"><GiTeamIdea size="60px"/></a>
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
        height: '91.5vh',
        boxShadow: '2px 1px 8px 0px silver',
        position : "fixed",
        backgroundColor :"#3282b8",
        zIndex: "0"}}>
          <SideNavStuff/>
    </div>)}else{
        return (
            <div className="col-lg-2" style={{
                borderbottom: '0px inset silver',
                backgroundColor:"white",
                padding: '0px',
                margin: '0px',
                // height: '110px',
                // bottom:"10px",
                right:"-15px",
                width : "100vw",
                boxShadow: '-12px 0px 7px 2px silver',
                // borderTop:"solid",
                // border:"0.1px solid",
                position : "relative",
                // marginBottom:"10px",
                zIndex: "0"}}>
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