import React from "react";
import "./Footer.css"
import {AiFillFacebook, AiFillLinkedin, AiFillTwitterSquare, AiFillMail} from "react-icons/ai";
import { isLoggedIn } from "../../Auth/Auth";

function Footer(props) {
    const loggedin = (isLoggedIn || sessionStorage.getItem('isLoggedIn')==='yes'); 
   return props.show ? (
        <div className={loggedin ? "container-fluid footer" : "container-fluid footer-fixed"} style={{marginTop : "1px"}}>
            <div className="row" style={{paddingTop:"10px",marginRight : "0",marginLeft:"0"}}>
                <div className="col-6" style={{paddingLeft:"10px"}}>
                    <p>© International Relations Cell</p>
                </div>
                <div className="col-4"></div>
                <div className="col-2" style={{paddingLeft:"100px"}}>
                    <div className="row"><a href="https://www.facebook.com/ircell.iitr" className="bottomLink"><AiFillFacebook style={{marginLeft:"0px",height:"25px",width:"25px"}}/></a>
                        <a href="https://www.linkedin.com/company/international-relations-cell-iit-roorkee/" className="bottomLink"><AiFillLinkedin style={{marginLeft:"10px",height:"25px",width:"25px"}}/></a>
                        <a href="https://twitter.com/IRcell_IITR" className="bottomLink"><AiFillTwitterSquare style={{marginLeft:"10px",height:"25px",width:"25px"}}/></a>
                        <a href="mailto: abc@example.com" className="bottomLink"><AiFillMail style={{marginLeft:"10px",height:"25px",width:"25px"}}/></a>
                    </div>
                
                </div>
            </div>
        </div>
    ):(null)
    
}

export default Footer;