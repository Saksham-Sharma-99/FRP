import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {isLoggedIn} from './components/Auth/Auth'

ReactDOM.render(
    <App showSideNav ={true}/>,
  document.getElementById('root')
);

