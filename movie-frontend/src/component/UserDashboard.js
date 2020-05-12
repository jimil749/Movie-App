import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';


function UserDashboard() {
    let history = useHistory();
    let location = useLocation();

    //console.log(location.state["userid"]);

    const handleSearchClick = () => {
        history.push('/usersearchmovie', {userid : location.state["userid"]});
    }

    const handleFavClick = () => {
        axios.get('http://localhost:3001/fav/' + location.state["userid"])
        .then(({data}) => {
            console.log(data);
            history.push('/favmovies', {data : data[0]});
        })
        .catch(err => {
            console.log(err);
        })
    }

    return(
        <div>
            <header>
                <h2>Welcome.</h2>
                <h3>What would you like to do?</h3>
            </header>
            <main>
                <div className = "images">                       
                    <div className = "col-50">
                        <img src = {require('./search1.resized.png')} border = "2px solid black" onClick = {handleSearchClick}/>
                    </div>
                    <div className = "col-50">
                        <img src = {require('./view-all.resized.png')} border = "2px solid black" onClick = {handleFavClick}/>
                    </div>                    
                </div>
            </main>
        </div>
    );
}

export default UserDashboard;