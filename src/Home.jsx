import React from "react"
import {AuthRoute} from 'react-router-auth';
import {HashRouter, Switch} from 'react-router-dom';

import SideNav from "./components/NavBars/SideNav/SideNav";
import Results from './components/Results/Results';
import Projects from "./components/Projects/Projects.jsx";


function Home(props){
    return (
        <div className="row" align="center" style={{width: '100%'}}>
               
            <SideNav show = {props.showSideNav}/>

            <div className="col-sm-10" 
            style={{margin: '0px',
                    padding: '0px',
                    position: "relative" ,
                    left : "17%", 
                    zIndex: "-1"}} align="left">
                    <HashRouter>
                        <Switch>
                            <AuthRoute
                                authenticated={props.isLoggedIn}
                                redirectTo='/auth'
                                path='/projects'
                                component={Projects}/>
                            <AuthRoute
                                authenticated={props.isLoggedIn}
                                redirectTo='/auth'
                                path='/bookmarks'
                                component={Projects}/>
                            <AuthRoute
                                authenticated={props.isLoggedIn}
                                redirectTo='/auth'
                                path='/results'
                                component={Results}/>
                        </Switch>
                    </HashRouter>  
            </div>

        </div>
    )
}

export default Home;