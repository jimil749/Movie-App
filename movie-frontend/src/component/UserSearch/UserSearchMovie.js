import React, { useState } from 'react';
import axios from 'axios';
import UserSearch from './UserSearch';
import UserResults from './UserResults';
import UserPopup from './UserPopup';
import { useLocation, useHistory } from 'react-router-dom';

function UserSearchMovies () {  
    let location = useLocation();
    let history = useHistory();

    console.log(location.state);
    
    const[state, setState] = useState ({
        search: "",     
        searchResult: [],
        selectedActor: [],
        selected : {},
        //popupSelected : false,
    });

    const handleClick = () => {
        history.push('/actorsearch');
    }
    
    const handleRatingClick = () => {
        history.push('/ratingsearch');
    }

    const handleLanguageClick = () => {
        history.push('/languagesearch');
    } 

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
        <div>
            <UserSearch handleInput = {handleInput} search = {search}/>            
            <UserResults searchResult = {state.searchResult} openPopup = {openPopup}/>

            {(typeof state.selected.movie_title != "undefined") ? <UserPopup selected = {state.selected} closePopup = {closePopup} selectedActor = {state.selectedActor} userid = {location.state["userid"]}/> : false}
            <button onClick = {handleClick}>Search By Actor</button>
            <button onClick = {handleRatingClick}>Search By Rating</button>
            <button onClick = {handleLanguageClick}>Search By Language</button>
        </div>
    );
}

export default UserSearchMovies;