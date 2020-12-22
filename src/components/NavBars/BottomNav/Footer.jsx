import React from "react";
import "./Footer.css"
import {AiFillFacebook, AiFillLinkedin, AiFillTwitterSquare} from "react-icons/ai";
import {content} from "./BottomContent";

function Footer() {
    return (
        <div className="container-fluid footer">
            <div className="row" style={{paddingTop:"20px"}}>
                <div className="col-6" style={{paddingLeft:"40px"}}>
                    <h2>International Relations Cell</h2>
                    <hr className="hr1"/>
                    <hr className="hr2"/>
                    <p>{content}</p>
                </div>
                <div className="col-1"></div>
                <div className="col-2">
                    <h2>Quick Links</h2>
                    <hr className="hr1"/>
                    <hr className="hr2"/>
                    <p><a href="" className="bottomLink">FAQ</a></p>
                    <p><a href="" className="bottomLink">Contact Us</a></p>
                    <p><a href="https://internet.channeli.in/noticeboard" className="bottomLink">Notice Board</a></p>
                </div>
                <div className="col-1"></div>
                <div className="col-2">
                    <h2>Contact Us</h2>
                    <hr className="hr1"/>
                    <hr className="hr2"/>
                    <p><a href="mailto: abc@example.com" className="bottomLink">irc@iitr.ac.in</a></p>
                    <p><a href="https://www.facebook.com/ircell.iitr" className="bottomLink"><AiFillFacebook style={{marginLeft:"0px",height:"40px",width:"40px"}}/></a>
                        <a href="https://www.linkedin.com/company/international-relations-cell-iit-roorkee/" className="bottomLink"><AiFillLinkedin style={{marginLeft:"10px",height:"40px",width:"40px"}}/></a>
                        <a href="https://twitter.com/IRcell_IITR" className="bottomLink"><AiFillTwitterSquare style={{marginLeft:"10px",height:"40px",width:"40px"}}/></a></p>
                
                </div>
            </div>
        </div>
    );
    
}

export default Footer;