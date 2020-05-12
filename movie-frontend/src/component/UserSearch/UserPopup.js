import React from 'react';
import axios from 'axios';


function UserPopup({ selected, closePopup, selectedActor, userid }) {     

    var obj = {
        movieid : selected.movie_id,
        user_id : userid
    };

    
   
    const handleClick = () => {
        axios.post('http://localhost:3001/favmovie', obj)
        .then((res) => {            
            alert('Movie added to favourites');        
        }) 
        .catch(err => {
            console.log(err);
            alert('Error adding');
        })
    }

    return (
        <section className = "popup">
            <div className = "content">
                <h2>{selected.movie_title} : <span>{selected.release_date}</span></h2>
                <p className = "rating">Rating : {selected.IMDB_score}</p> 
                <div className = "plot">
                    <img src = {selected.poster_path} />
                    <p>{selected.description}</p>
                </div>

                <table>
                    <tr>
                        <th colSpan = {5}> PRODUCTION CAST </th>
                    </tr>
                    <tr>
                        <th>Director</th>
                        <th>Producer</th>
                        <th>Writer</th>
                        <th>ScreenPlay</th>
                        <th>Music Director</th>
                    </tr>
                    <tr>
                        <th>{selected.director_name}</th>
                        <th>{selected.producer_name}</th>
                        <th>{selected.writer_name}</th>
                        <th>{selected.screenplay_name}</th>
                        <th>{selected.music_director}</th>
                    </tr>
                </table>
                <br />
                <br />
                <table>
                    <tr>
                        <th colSpan = {5}> ACTING CAST </th>
                    </tr>
                    <tr>
                        <th>Actor Name</th>
                        <th>Role</th>                        
                    </tr>
                    <tr>
                        <th>{selectedActor[0].actor_fname_temp + " " + selectedActor[0].actor_lname_temp}</th>                        
                        <th>{selectedActor[0].r_name}</th>
                    </tr>
                    <tr>
                        <th>{selectedActor[1].actor_fname_temp + " " + selectedActor[1].actor_lname_temp}</th>                        
                        <th>{selectedActor[1].r_name}</th>
                    </tr>
                </table>

                <button className = "close" onClick = {closePopup}>Close</button>                 
                <button className = "close" onClick = {handleClick}>Add to Favorites</button> :                                    
                
            </div>                     
        </section>
    );
}

export default UserPopup;