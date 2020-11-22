import React from "react"
import {AuthRoute} from 'react-router-auth';
import {HashRouter, Switch} from 'react-router-dom';

import { logo } from "./components/NavBars/TopNav/assets";
import Header from "./components/NavBars/TopNav/Header";
import Home from './Home'


var isLoggedIn = true;

function App(){
    return(
        <HashRouter>
            <Header />

            <Home isLoggedIn = {isLoggedIn}/>
            

        </HashRouter>
                    
    );
} 

export default App;