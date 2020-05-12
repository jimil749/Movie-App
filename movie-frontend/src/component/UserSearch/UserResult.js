import React from 'react';

function UserResult ({ searchResults, openPopup}) {
    
    return (
        <div>
            <div className = "searchResult">
                <img src = {searchResults.poster_path} alt = "Movie poster" onClick = {() => openPopup(searchResults.movie_id)}/>
                <h3>{searchResults.movie_title}</h3>
            </div>                        
        </div>
    );
}


export default UserResult;