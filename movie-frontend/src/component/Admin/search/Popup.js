import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import UpdateMovie from '../UpdateMovie';


function Popup({ selected, closePopup, selectedActor, selectedGenre }) {     

    const [state, setState] = useState({
        isVisible: false
    })
    let history = useHistory();   
   
    const handlDelete = () => {
        axios.delete('http://localhost:3001/deletemovie/'+selected.movie_id)
        .then(({data}) => {
          console.log(data);
          alert("Movie Deleted! Please refresh to view changes");
        })
        .catch(err => {
            console.log(err);            
        })
    }



    const handleClick = () => {
        setState(prevState => {
            return{...prevState, isVisible:true}
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
                <br />
                <br />
                <table>
                    <tr>
                        <th colSpan = {5}> GENRE </th>
                    </tr>
                    <tr>
                        <th>Genre Type</th>                                               
                    </tr>
                    <tr>
                        <th>{selectedGenre[0].genre}</th>                                                
                    </tr>                                        
                </table>

                <button className = "close" onClick = {closePopup}>Close</button>
                <button className = "close" onClick= {handlDelete}>Delete</button>                              
            </div>            
            {(state.isVisible === true) ? <UpdateMovie id = {selected.movie_id} /> : null}
        </section>
    );
}

export default Popup;