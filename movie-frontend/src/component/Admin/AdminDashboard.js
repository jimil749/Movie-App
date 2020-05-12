import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


function AdminDashboard() {
    let history = useHistory();

    const handleAddClick = () => {        
        history.push('/addmovie');
    }

    const handleSearchClick = () => {
        history.push('/searchmovie');
    }

    const handleViewAllClick = () => {
        axios.get('http://localhost:3001/viewallmovies')
        .then(({data}) => {
            console.log(data);
            history.push('/viewall', {data : data});
        })
        .catch(err => {
            console.log(err);
            alert("Error in displaying!!");
        })        
    }

    return(
        <div>
            <header>
                <h2>Welcome Admin.</h2>
                <h3>What would you like to do?</h3>
            </header>
            <main>
                <div className = "images">   
                    <div className = "col-33">                 
                        <img src = {require('../add1.resized.png')} border = "2px solid black" onClick= {handleAddClick}/>
                    </div>
                    <div className = "col-33">
                        <img src = {require('../search1.resized.png')} border = "2px solid black" onClick = {handleSearchClick}/>
                    </div>
                    <div className = "col-33">
                        <img src = {require('../view-all.resized.png')} border = "2px solid black" onClick = {handleViewAllClick}/>
                    </div>                    
                </div>
            </main>
        </div>
    );
}

export default AdminDashboard;