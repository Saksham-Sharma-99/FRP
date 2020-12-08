import React from "react"
import { profileImage } from "../../../Profile/assets";
import "./Message.css"

function RightMessage(props){
    return(
        <div className = "row" style={{alignItems:"right"}} >
            <div className="col-6"></div>
            <div className="col-6" style={{padding:"10px 10px 0px",lineHeight:"2rem"}}>
                <h6 className="content message-right" style={{color:"#f1f6f9",padding:"10px 20px 10px 20px"}}> {props.content}</h6>
            </div>
        </div>
    );
}

function LeftMessage(props){
    return(
        <div className = "row" style={{alignItems:"left"}} >
            <div className="col-6" style={{padding:"10px"}}>
                 <h6 className="content  message-left" style={{color:"#f1f6f9",padding:"10px 20px 10px 20px"}}> {props.content}</h6>
            </div>
            <div className="col-6"></div>
        </div>
    );
}

export {RightMessage , LeftMessage}