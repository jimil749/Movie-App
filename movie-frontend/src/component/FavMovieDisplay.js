import React from 'react';


function FavMovieDisplay ({ favMovie }) {
    return (                    
            <div className = "searchResult">
                <img src = {favMovie.poster} alt = "movie-poster" />
                <h3>{favMovie.movie_title}</h3>
            </div>        
    );
} 

export default FavMovieDisplay;