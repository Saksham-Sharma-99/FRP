import React from 'react'
import './Chats.css'
import {chatsBox} from "./chats"
import {Link} from 'react-router-dom'
import {profileImage} from "../Profile/assets/index"


function ChatsBox(){
    if(visualViewport.width>991){
        return (
            <div className = 'col-lg-3 chats-box' 
            style={{position: 'relative',height: '88vh',overflowY:'scroll',overflowX:'hidden'}}>
            {chatsBox.map((data)=>{
                return(
                <Link className="msgLink" >
                 <div className="row chat-box" style={{marginBottom:'15px'}}>
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
                             {data.lastmsg}
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
                    <Link className='msgLink'>
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

function Chats(){
    
    return (
        <div className = 'container-fluid' style={{paddingLeft:"20px",paddingRight:"20px"}}>
            <div className = 'row'>
                
                <ChatsBox />

                <div className = 'col-lg-9' style={{padding:'10px'}}>
                    ps:work in progress ; layout may change in future
                </div>

            </div>
        </div>
    )
}

export default Chats;