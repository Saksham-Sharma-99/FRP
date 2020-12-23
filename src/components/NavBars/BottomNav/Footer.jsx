import React from "react";
import "./Footer.css"
import {AiFillFacebook, AiFillLinkedin, AiFillTwitterSquare} from "react-icons/ai";
import {content} from "./BottomContent";
import { isLoggedIn } from "../../Auth/Auth";

function Footer() {
    const loggedin = (isLoggedIn || sessionStorage.getItem('isLoggedIn')==='yes'); 
    return (
        <div className={loggedin ? "container-fluid footer" : "container-fluid footer-fixed"} style={{marginTop : "1px"}}>
            <div className="row" style={{paddingTop:"10px",marginRight : "0",marginLeft:"0"}}>
                <div className="col-6" style={{paddingLeft:"10px"}}>
                    <h3>International Relations Cell</h3>
                    <hr className="hr1"/>
                    <hr className="hr2"/>
                    <p>{content}</p>
                </div>
                <div className="col-1"></div>
                <div className="col-2">
                    <h3>Quick Links</h3>
                    <hr className="hr1"/>
                    <hr className="hr2"/>
                    <p><a href="" className="bottomLink">FAQ</a></p>
                    <p><a href="" className="bottomLink">Contact Us</a></p>
                    <p><a href="https://internet.channeli.in/noticeboard" className="bottomLink">Notice Board</a></p>
                </div>
                <div className="col-2">
                    <h3>Contact Us</h3>
                    <hr className="hr1"/>
                    <hr className="hr2"/>
                    <p><a href="mailto: abc@example.com" className="bottomLink">irc@iitr.ac.in</a></p>
                    <div className="row"><a href="https://www.facebook.com/ircell.iitr" className="bottomLink"><AiFillFacebook style={{marginLeft:"0px",height:"40px",width:"40px"}}/></a>
                        <a href="https://www.linkedin.com/company/international-relations-cell-iit-roorkee/" className="bottomLink"><AiFillLinkedin style={{marginLeft:"10px",height:"40px",width:"40px"}}/></a>
                        <a href="https://twitter.com/IRcell_IITR" className="bottomLink"><AiFillTwitterSquare style={{marginLeft:"10px",height:"40px",width:"40px"}}/></a></div>
                
                </div>
            </div>
        </div>
    );
    
}

export default Footer;