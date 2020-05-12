import React, { useState } from 'react';
import Results from './search/Results';
import { useLocation } from 'react-router-dom';
import Popup from './search/Popup';
import axios from 'axios';

function ViewAll () {
    let location = useLocation();
    
    const [state, setState] = useState({
        selected: {},
        selectedActor: [],
        selectedGenre: [],
    });

    const openPopup = id => {     
        axios.get('http://localhost:3001/searchmovieid/' + id)
            .then(({data}) => {                                
                let result = data;
                console.log(result[1]);
                setState(prevState => {
                    return{...prevState, selected: result[0][0], selectedActor: result[1], selectedGenre: result[3]}
                });
            });        
    }   

    const closePopup = () => {
        setState(prevState => {
            return{...prevState, selected : {}}
        });
    }

    return(
        <div>
            <header>
                <h2> View All Movies </h2>
            </header>
            <Results searchResult = {location.state.data} openPopup = {openPopup}/>
            {(typeof state.selected.movie_title != "undefined") ? <Popup selected = {state.selected} closePopup = {closePopup} selectedActor = {state.selectedActor} selectedGenre = {state.selectedGenre}/> : false}
        </div>
    );
}

export default ViewAll;