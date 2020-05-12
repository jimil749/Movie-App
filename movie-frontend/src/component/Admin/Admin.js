import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


function Admin() {

    let history = useHistory();
    const handleSubmit = (event) => {
        var jsonData = {};
        event.preventDefault();
        const data = new FormData(event.target);  
        for (var pair of data.entries()){
            jsonData[pair[0]] = pair[1];
        }          
        axios
            .post('http://localhost:3001/adminuser', jsonData)
            .then((res) => {
                //console.log(res["data"].length);
                if (res["data"].length === 1){
                    alert("Login Verified!");
                    history.push('/admindashboard');

                } else {
                    alert("Incorrect Email/Password/Name. Please try again!");
                }
            })
            .catch(err => {                
                console.log(err);
            })         
    }
    return (
        <div>
            <header className="App-header"> 
                <h1>  Welcome Admin  </h1>        
            </header>
            <div className = 'boxed'>
                <form onSubmit = {handleSubmit}>
                    <div className = "imgContainer">
                        <img src = {require("../index.png")} alt = "avatar" className = "avatar"/>
                    </div>
                    <div className = "container_form">
                        <label for="email"><b>Email&nbsp;</b>
                        <input 
                            type = "text"
                            placeholder = "email"
                            name = "email"
                            required                                   
                        />
                         </label>                                                                
                        <label for="password"><b>Password &nbsp;&nbsp;</b>
                        <input 
                            type = "password"
                            placeholder = "Password"
                            name = "password"
                            required                                    
                         />
                         </label>
                         <label for="name"><b>Name &nbsp;&nbsp;</b>
                        <input 
                            type = "text"
                            placeholder = "name"
                            name = "name"
                            required                                    
                         />
                         </label>                            
                        <button type = "submit">Login</button>                            
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Admin;