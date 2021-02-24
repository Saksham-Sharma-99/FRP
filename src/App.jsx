import React from "react"
import {AuthRoute} from 'react-router-auth';
import {HashRouter, Switch} from 'react-router-dom';

import { logo } from "./components/NavBars/TopNav/assets";
import Header from "./components/NavBars/TopNav/Header";
import Home from './Home'
import Chats from './Chat/Chats.jsx'
import Profile from "./Profile/Profile"
import Auth,{isLoggedIn} from './components/Auth/Auth'
import { LogOut } from "./Model/RequestHandler";
import { Constants } from "./Model/Constants";
import Footer from "./components/NavBars/BottomNav/Footer";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import Search from "./components/Search/Search";

var showSideNav = true;
var LoggedIn = (isLoggedIn || sessionStorage.getItem('isLoggedIn')==='yes'); 

function App(props){
    // localStorage.removeItem(Constants.TOKEN)
    console.log(JSON.parse(sessionStorage.getItem(Constants.USER_PROFILE)))
    console.log(JSON.parse(sessionStorage.getItem(Constants.CHANNELI_DATA)))
    
    // setTimeout(() => {
    //     console.log('logging out after 1 hour')
    //     window.alert("Session Expired")
    //     LogOut()
    // }, 60000*60);

    document.getElementById('root').classList.add( (LoggedIn) ? '#projects' : '#auth')
    
    console.log('show sidenav',props.showSideNav&&LoggedIn)
    if (props.showSideNav == undefined){
        showSideNav = true
    }else{
        showSideNav = props.showSideNav&&LoggedIn
    }


    return visualViewport.width>991 ?(
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
                <AuthRoute
                    authenticated={LoggedIn}
                    redirectTo='/auth'
                    path='/projectDetails'
                    component={ProjectDetails}/>
                    <AuthRoute
                    authenticated={LoggedIn}
                    redirectTo='/auth'
                    path='/search'
                    component={Search}/>
            </Switch>

            <Footer show ={props.showBottomNav}/>
        </HashRouter>
                    
    ):(
        <h6> This webpage doesn't support mobile view , please open on desktop</h6>
    );
    
} 

export default App;