import React, { useState } from 'react';
import axios from 'axios';
import Search from './Search';
import Results from './Results';
import Popup from './Popup';

function SearchMovies () {  
    
    const[state, setState] = useState ({
        search: "",     
        searchResult: [],
        selectedActor: [],
        selectedGenre: [],
        selected : {}
    });

    const search = (e) => {     //perform the search
        if (e.key === 'Enter') {
            axios.get('http://localhost:3001/searchmovie/' + state.search)
                .then(({data}) => {           
                    console.log(data);
                    setState(prevState => {
                        return {...prevState, searchResult:data}
                    })
                });
        }
    }

    const handleInput = (e) => { //handling the search input
        let search = e.target.value;
        setState(prevState => {
            return {...prevState, search: search}
        });
    }

    const openPopup = id => {     
        axios.get('http://localhost:3001/searchmovieid/' + id)
            .then(({data}) => {                                
                let result = data;
                console.log(result);
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

    return (
        <div>
            <Search handleInput = {handleInput} search = {search}/>
            <Results searchResult = {state.searchResult} openPopup = {openPopup}/>

            {(typeof state.selected.movie_title != "undefined") ? <Popup selected = {state.selected} closePopup = {closePopup} selectedActor = {state.selectedActor} selectedGenre = {state.selectedGenre}/> : false}
        </div>
    );
}

export default SearchMovies;