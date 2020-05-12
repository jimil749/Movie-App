import React from 'react';
import axios from 'axios';
import { withRouter, useHistory } from 'react-router-dom';


function SignUp({ handleInput }) {

   let history = useHistory();
   const handleSubmit = (event) => {
        var jsonData = {};
        event.preventDefault();
        const data = new FormData(event.target);  
        for (var pair of data.entries()){
            jsonData[pair[0]] = pair[1];
        }          
        axios
            .post('http://localhost:3001/signup', jsonData)
            .then((res) => {
                alert("Login Procedure Successful");
            })
            .catch(err => {
                console.log(err);
            })                   
    }
    return(
        <div>
            <header className="App-header"> 
                <h1>  Sign Up to Get Started!  </h1>        
            </header>
            <section>
                <div className = "boxed">
                    <form onSubmit = {handleSubmit}>
                        <div className = "imgContainer">
                            <img src = {require("./img_avatar2.png")} alt = "avatar" className = "avatar"/>
                        </div>
                        <div className = "container_form">
                            <label for="name"><b>Name&nbsp;</b>
                            <input 
                                type = "text"
                                placeholder = "first name"
                                name = "name"
                                required
                                onChange = {handleInput}
                            />
                            </label>                            
                            <label for="email"><b>Email ID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
                            <input 
                                type = "email"
                                placeholder = "Email ID"
                                name = "email"
                                required
                                onChange = {handleInput}
                            />
                            </label>
                            <label for="password"><b>Password &nbsp;&nbsp;</b>
                            <input 
                                type = "password"
                                placeholder = "Password"
                                name = "password"
                                required
                                onChange = {handleInput}
                            />
                            </label>                            
                            <button type = "submit">Sign Up</button>                            
                        </div>
                    </form>                    
                </div>                
            </section> 
        </div>         
    );
}


export default withRouter(SignUp);




