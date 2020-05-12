import React, { useState } from 'react';
import axios from'axios';
import UserResults from './UserSearch/UserResults';
import UserPopup from './UserSearch/UserPopup';


function ActorSearch() {

    const [state, setState] = useState ({
        searchResult : [],
        selectedActor: [],
        selected : {},
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        var jsonData = {};        
        var params;
        const data = new FormData(event.target);
        for (var pair of data.entries()){
            jsonData[pair[0]] = pair[1];            
        }    
        
        params = jsonData["rating"];        
        console.log(params);
        axios.get('http://localhost:3001/ratingsearch/' + params)
        .then(({data}) => {
            console.log(data);
            if (data)
            setState(prevState => {
                return{...prevState, searchResult : data}
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

    const openPopup = id => {     
        axios.get('http://localhost:3001/searchmovieid/' + id)
            .then(({data}) => {                                
                let result = data;
                console.log(result[1]);
                setState(prevState => {
                    return{...prevState, selected: result[0][0], selectedActor: result[1]}
                });
            });        
    }   

    const closePopup = () => {
        setState(prevState => {
            return{...prevState, selected : {}}
        });
    }

    return (
        <div className = 'boxed'>
                <form onSubmit = {handleSubmit}>                
                    <div className = "container_form">
                    <div className = "row">
                        <div className = "col-25">
                            <label for="rating"><b>Rating</b> </label>  
                        </div>
                        <div className = "col-75">
                            <input             
                                type = "number"
                                placeholder = "1.0"
                                step = "0.1"
                                min = "1"
                                max = "10"                                
                                name = "rating"
                                required                                   
                            />  
                        </div>
                    </div>                                                                                 
                    <button> Search </button>
                </div>                                                                             
            </form>
            <UserResults searchResult = {state.searchResult} openPopup = {openPopup}/>
            {(typeof state.selected.movie_title != "undefined") ? <UserPopup selected = {state.selected} closePopup = {closePopup} selectedActor = {state.selectedActor} /> : false}
        </div>
    );
}

export default ActorSearch;