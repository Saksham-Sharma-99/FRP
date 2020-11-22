import React from "react"
import {AuthRoute} from 'react-router-auth';
import {HashRouter, Switch} from 'react-router-dom';

import { logo } from "./components/NavBars/TopNav/assets";
import Header from "./components/NavBars/TopNav/Header";
import Home from './Home'
import Chats from './Chats'


var isLoggedIn = true;
var showSideNav = true;

function App(props){
    return(
        <HashRouter>
            <Header />

            <Home isLoggedIn = {isLoggedIn} showSideNav = {props.showSideNav}/>
            <Switch>
                <AuthRoute
                    authenticated={isLoggedIn}
                    redirectTo='/auth'
                    path='/chats'
                    component={Chats}/>
            </Switch>

        </HashRouter>
                    
    );
} 

export default App;