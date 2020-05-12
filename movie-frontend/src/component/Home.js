import React, { useState } from 'react';
import {Route, Redirect } from 'react-router-dom';
import './home.css';

function Home () {
    const [userType, setUserType] = useState(true); //userType true if admin, false if normal user
    const [login, setLogin] = useState(false);      // true if clicked on any one of the user type
    

    return (
        <div>                                 
            <header className = "App-header">
                <h1>  Welcome to Film-O-Pedia  </h1> 
                <h2> Login to Continue </h2>      
            </header>
            <div className = "mainImage">
                <div className = "col-50">                
                    <img src = {require('./index.png')} alt = 'Admin' 
                        onClick = {() => {
                            setLogin(true);
                            setUserType(true);
                        }}
                    /> 
                    <p>ADMIN</p>
                </div>
                <div className = "col-50">
                    <img src = {require('./user.jpeg')} alt = 'User'
                        onClick = {() => {
                            setLogin(true);
                            setUserType(false);
                        }}
                    />
                    <p>USER</p>
                </div>
            </div>                            
            <Route path = "/home">
                {login && userType ? <Redirect to = "/admin"/> : null}
                {login && !userType ? <Redirect to = "/user" /> : null}
            </Route>
        </div>        
    );
}

export default Home;