import React,{ useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


function AddActor() {

    const handleSubmit = (event) => {
        event.preventDefault();
        var jsonData = {};        
        const data = new FormData(event.target);
        for (var pair of data.entries()){
            jsonData[pair[0]] = pair[1];
        }
        //console.log(jsonData);
        axios
            .post('http://localhost:3001/addactor', jsonData)
            .then((res) => {               
                console.log(res);
                alert('Actor added to the Database!');                
            })
            .catch(err => {
                console.log(err);
                alert('Error adding data');
            })
    }

    const handleAwardSubmit = (event) => {
        event.preventDefault();
        var jsonData = {};        
        const data = new FormData(event.target);
        for (var pair of data.entries()){
            jsonData[pair[0]] = pair[1];
        }        
        axios
            .post('http://localhost:3001/addaward', jsonData)
            .then((res) => {               
                console.log(res);
                alert('Award added to the Database!');                
            })
            .catch(err => {
                console.log(err);
                alert('Error adding data');
            })
    }

    const handleGenreSubmit = (event) => {
        event.preventDefault();
        var jsonData = {};        
        const data = new FormData(event.target);
        for (var pair of data.entries()){
            jsonData[pair[0]] = pair[1];
        }
        axios
            .post('http://localhost:3001/addgenre', jsonData)
            .then((res) => {               
                console.log(res);
                alert('Genre added to the Database!');                
            })
            .catch(err => {
                console.log(err);
                alert('Error adding data');
            })
    }

    const [startDate, setStartDate] = useState(new Date());
    return (
        <div>
        <div className = "boxed">
            <div className = "container_form">
                <form onSubmit={handleSubmit}>
                    <div className = "row">
                        <div className = "col-25">
                            <label for="firstname"><b>First Name</b></label> 
                        </div>
                        <div className = "col-75">
                            <input             
                                type = "text"
                                placeholder = "Actor First Name"
                                name = "firstname"
                                required                                   
                            />                  
                        </div>
                    </div>
                    
                    <div className = "row">                                                                                                 
                        <div className = "col-25">
                            <label for="lastname"><b>Last Name</b></label>
                        </div>
                        <div className = "col-75">
                            <input 
                                type = "text"
                                placeholder = "Actor last name"
                                name = "lastname"
                                required                                    
                            />
                        </div>
                    </div>

                    <div className = "row">
                        <div className = "col-25">        
                            <label for="gender"><b>Gender </b></label>
                        </div>
                        <div className = "col-75">
                            <input 
                                type = "text"
                                placeholder = "Gender"
                                name = "gender"
                                required                                    
                            />            
                        </div>
                    </div>

                    <div className = "row">                                                                            
                        <div className = "col-25">
                            <label><b>Date Of Birth</b></label>
                        </div>
                        <div className = "col-75">
                                <DatePicker
                                    selected = {startDate}
                                    onChange = {date => setStartDate(date)}
                                    name = "startDate"
                                    dateFormat = "yyyy-MM-dd"                     
                                />              
                        </div>
                    </div>

                    <div className = "row">                                                                            
                        <div className = "col-25">
                            <label for = "role"><b>Role</b></label>
                        </div>
                        <div className = "col-75">
                        <input 
                                type = "text"
                                placeholder = "Role"
                                name = "role"
                                required                                    
                            />
                        </div>
                    </div>

                    <button type = "submit"> Submit </button>                                     
                    </form>
                </div>
            </div>                      
            <div className = "boxed">
                <div className = "container-form">
                    <form onSubmit = {handleAwardSubmit}>
                    <div className = "row">
                        <div className = "col-25">        
                            <label for="name"><b>Award Name </b></label>
                        </div>
                        <div className = "col-75">
                            <input 
                                type = "text"
                                placeholder = "Awards"
                                name = "name"
                                required                                    
                            />            
                        </div>
                    </div> 
                    <button type = "submit">Submit</button>                   
                    </form>
                </div>
            </div>

            <div className = "boxed">
                <div className = "container-form">
                    <form onSubmit = {handleGenreSubmit}>
                    <div className = "row">
                        <div className = "col-25">        
                            <label for="gname"><b>Genre Name </b></label>
                        </div>
                        <div className = "col-75">
                            <input 
                                type = "text"
                                placeholder = "Genre"
                                name = "gname"
                                required                                    
                            />            
                        </div>
                    </div> 
                    <button type = "submit">Submit</button>                   
                    </form>
                </div>
            </div>

        </div>
    );
}

export default AddActor;