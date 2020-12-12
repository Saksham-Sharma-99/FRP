import React, { useState } from 'react'
import './Chats.css'
import {chatsBox} from "./chats"
import {HashRouter, Link, Route, Router} from 'react-router-dom'
import {profileImage} from "../Profile/assets/index"
import { LeftMessage, RightMessage } from './components/Messages/Message'
import Switch from 'react-bootstrap/esm/Switch'
import InputBar from './components/InputBar/InputBar'
import { animateScroll } from "react-scroll";



function Chats(){
    var [chatId,setChatId] = useState(1)


function scrollToBottom(chatID) {
    setChatId(chatID)
    setTimeout(() => {
    animateScroll.scrollToBottom({
        containerId: "options-holder"
    });},1)
    
}

function ChatsBox(){

    if(visualViewport.width>991){
        return (
            <div className = 'col-lg-3 chats-box' 
            style={{position: 'sticky',height: '88vh',overflowY:'scroll',overflowX:'hidden'}}>
            {chatsBox.map((data)=>{
                return(
                <Link className="msgLink" onClick={()=>scrollToBottom(data.chatId)}>
                 <div className="row chat-box" style={{marginBottom:'15px',height:"140px"}}>
                     <div className = 'row'>
                        <div className='col-lg-2'><img src={profileImage} style={{height:'10x',width:'40px'}}/></div>
                        <div className="col-lg-7" style={{marginLeft:'11px'}}><h4>{data.sender}</h4></div>
                        <div className='col-lg-2' style={{textAlign:'right'}}>
                            <p style={{display:"inline-block",left:'50px',top:'2px',fontSize:"12px",
                            position:'relative'}}>
                                {visualViewport.width>=1440 ? data.time:null}
                            </p>
                        </div>

                     </div>


                     <div className='row'>
                        <div className='col-lg-2'></div>
                         <div className='col-lg-10' >
                             {data.lastmsg.substr(0,120)+ (data.lastmsg.length >120 ? "...":"")}
                         </div>
                     </div>
                 </div>
                 </Link> )})}    
            </div>
        )
    }else{
        return (
            <div className = 'col-lg-3 chats-box' 
            style={{position: 'relative',height: '20vw',overflowX:'scroll',overflowY:'hidden'}}>
            <div className = 'row' style={{height:'20vw',overflowX:'scroll',overflowY:'hidden',flexWrap:'nowrap'}}>
            {chatsBox.map((data)=>{
                return(
                    <Link className='msgLink' onClick={()=>setChatId(data.chatId)}>
                    <div className='col-2'>
                     <img src={profileImage} style={{width:"14.5vw",height:'14.5vw'}}/>
                     <h6 style={{textAlign:'center',position:'relative',left:'20px'}}>{data.sender}</h6>
                     </div>
                     </Link>
            )})}
            </div>
            </div>
        )
    }
}

function Messages(props){
    console.log(props.chatId)
    
    return (
        chatsBox.filter((data)=>data.chatId == props.chatId).map((data)=>{
            return(
            data.messages.map((msgData)=>{
                return msgData.sender=="recieverId"?<RightMessage content ={msgData.msg} />:<LeftMessage content ={msgData.msg}/>
            }))
        })
    )
}


    
    return (
        <div className = 'container-fluid' style={{paddingLeft:"20px"}}>
            <div className = 'row'>
                
                <ChatsBox />

                <div className = 'col-lg-9' style={{padding:'0px 20px 0px',height:"86vh"}}>
                <div className="container-fluid" id = "options-holder" style = {{height: '80vh',overflowY:'scroll',overflowX:'hidden',zIndex:"-1"}}>
                <Messages chatId = {chatId}/>
                </div>
                <div className = "container-fluid">
                <InputBar />
                </div>
                </div>
                

                

            </div>
        </div>
    )
}

export default Chats;