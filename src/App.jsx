import React from "react"
import {AuthRoute} from 'react-router-auth';
import {HashRouter, Switch} from 'react-router-dom';

import { logo } from "./components/NavBars/TopNav/assets";
import Header from "./components/NavBars/TopNav/Header";
import Home from './Home'
import Chats from './Chat/Chats'
import Profile from "./Profile/Profile"
import Auth,{isLoggedIn} from './components/Auth/Auth'

var showSideNav = true;
var LoggedIn = (isLoggedIn || sessionStorage.getItem('isLoggedIn')==='yes'); 

function App(props){

    setTimeout(() => {
        console.log('logging out after 1 hour')
        sessionStorage.setItem('isLoggedIn','no')
        window.location.reload()
    }, 60000*60);

    document.getElementById('root').classList.add( (LoggedIn) ? '#projects' : '#auth')
    
    console.log('show sidenav',props.showSideNav&&LoggedIn)
    if (props.showSideNav == undefined){
        showSideNav = true
    }else{
        showSideNav = props.showSideNav&&LoggedIn
    }


    return(
        <HashRouter>
            <Header showItems={LoggedIn} />

            <Home isLoggedIn = {LoggedIn} showSideNav = {showSideNav&&LoggedIn}/>
            <Switch>
                <AuthRoute
                    authenticated={!LoggedIn}
                    redirectTo='/projects'
                    path='/auth'
                    component={Auth}/>
                <AuthRoute
                    authenticated={LoggedIn}
                    redirectTo='/auth'
                    path='/chats'
                    component={Chats}/>
                <AuthRoute
                    authenticated={LoggedIn}
                    redirectTo='/auth'
                    path='/profile'
                    component={Profile}/>
            </Switch>

        </HashRouter>
                    
    );
    
} 

export default App;