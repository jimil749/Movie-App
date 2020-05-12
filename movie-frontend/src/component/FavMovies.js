import React from 'react';
import { useLocation } from 'react-router-dom';
import FavMovieDisplay from './FavMovieDisplay';

function FavMovies () {

    let location = useLocation();
    return (
        <div>
            <header className = "App-header">
                    <h1>Favorite Movies</h1>
            </header>
            <section className = "searchResults">
                {location.state.data.map(favMovie => (
                    <FavMovieDisplay favMovie = {favMovie} />
                ))}
            </section>
        </div>
    );
}


export default FavMovies;