import React from "react"
import ReactDOM from "react-dom"
import {AuthRoute} from 'react-router-auth';
import {HashRouter, Switch} from 'react-router-dom';

import {projects} from "./components/Projects/projects"

import SideNav from "./components/NavBars/SideNav/SideNav";
import Results from './components/Results/Results';
import Projects,{Bookmarks} from "./components/Projects/Projects.jsx";
import Auth from './components/Auth/Auth'


function Home(props){
    // projects.map((p)=>console.log(p.id))
    if (props.showSideNav ){
        var pt = visualViewport.width>991 ? "80px" : "0px"
    return (
        <div className="row" align="center" style={{width: '100%'}}>
               
            <SideNav show = {props.showSideNav}/>

            <div className="col-lg-10" 
            style={{margin: '0px',
                    paddingBottom: "50px",
                    position: "relative" ,
                    // top:"8vh",
                    // left : "0%", 
                    // zIndex: "1",
                    msOverflowStyle : "none",
                    height:"90.5vh",
                    overflowY : "scroll"
                    }} align="left">
                    <HashRouter>
                        <Switch>
                            <AuthRoute
                                authenticated={props.isLoggedIn}
                                redirectTo='/projects'
                                path='/auth'
                                component={Auth}/>
                            <AuthRoute
                                authenticated={props.isLoggedIn}
                                redirectTo='/auth'
                                path='/projects'
                                component={Projects}/>
                            <AuthRoute
                                authenticated={props.isLoggedIn}
                                redirectTo='/auth'
                                path='/bookmarks'
                                component={Bookmarks}/>
                            <AuthRoute
                                authenticated={props.isLoggedIn}
                                redirectTo='/auth'
                                path='/results'
                                component={Results}/>
                        </Switch>
                    </HashRouter>  
            </div>

        </div>
    )}
    else{
        return null
    }
}

export default Home;