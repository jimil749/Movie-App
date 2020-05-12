import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from 'react-router-dom';


function AddMovies() {

    const [startDate, setStartDate] = useState(new Date());
    let history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        var jsonData = {};        
        const data = new FormData(event.target);
        for (var pair of data.entries()){
            jsonData[pair[0]] = pair[1];
        }
        axios
            .post('http://localhost:3001/addmovie', jsonData)
            .then((res) => {               
                if (res.data.sqlMessage === 'The movie already exists!!')
                    alert(res.data.sqlMessage);
                else {
                    alert('Movie added to the Database!');
                    history.push('/addactor');
                }
            })
            .catch(err => {
                console.log(err);
                alert('Error adding data');
            })
    }


    return(
        <div>
        <header className="App-header"> 
            <h1>  Add Movies!!  </h1>        
        </header>
        <div className = 'boxed'>
            <form onSubmit = {handleSubmit}>                
                <div className = "container_form">
                <div className = "row">
                    <div className = "col-25">
                        <label for="title"><b>Movie Title</b> </label>  
                    </div>
                    <div className = "col-75">
                        <input             
                            type = "text"
                            placeholder = "Movie Name"
                            name = "title"
                            required                                   
                        />  
                    </div>
                </div>                                                                                 

                <div className = "row">
                    <div className = "col-25">
                        <label for="duration"><b>Duration</b></label>
                    </div>
                    <div className = "col-75">
                    <input             
                        type = "text"
                        placeholder = "Duration of the film"
                        name = "duration"
                        required                                   
                    />
                    </div>
                </div>                                                                             
                <div className = "row">
                    <div className = "col-25">
                        <label for="desc"><b>Description</b></label>
                    </div>
                    <div className = "col-75">
                    <input             
                        type = "text"
                        placeholder = "Movie Description"
                        name = "desc"
                        required                                   
                    />                     
                    </div>
                </div>
                <div className = "row">
                    <div className = "col-25">
                        <label for="adult"><b>Censor-ship Flag</b></label>
                    </div>
                    <div className = "col-75">
                    <input             
                        type = "text"
                        placeholder = "adult?"
                        name = "adult"
                        required                                   
                    />
                    </div>
                </div>          

                <div className = "row">
                    <div className = "col-25">
                        <label for="poster"><b>Poster path</b></label>
                    </div>
                    <div className = "col-75">
                    <input             
                        type = "text"
                        placeholder = "poster path"
                        name = "poster"
                        required                                   
                    />         
                    </div>
                </div>


                <div className = "row">
                    <div className = "col-25">
                        <label for="prequel"><b>Prequel</b></label>
                    </div>
                    <div className = "col-75">
                    <input             
                        type = "text"
                        placeholder = "prequel"
                        name = "prequel"
                        required                                   
                    />                     
                    </div>
                </div>    

                <div className = "row">
                    <div className = "col-25">
                        <label for="country"><b>Country</b></label>
                    </div>
                    <div className = "col-75">
                    <input             
                        type = "text"
                        placeholder = "Country"
                        name = "country"
                        required                                   
                    />    
                    </div>
                </div> 

                <div className = "row">
                    <div className = "col-25">
                        <label for="trailer"><b>Trailer</b></label>
                    </div>
                    <div className = "col-75">
                    <input             
                        type = "text"
                        placeholder = "trailer"
                        name = "trailer"
                        required                                   
                    />
                    </div>
                </div>
                    
                <div className = "row">
                    <div className = "col-25">
                        <label><b>Release Date</b></label>
                    </div>
                    <div className = "col-75">
                        <DatePicker
                            selected = {startDate}
                            onChange = {date => setStartDate(date)}
                            name = "startDate"
                            dateFormat = "yyyy-MM-dd"                     
                        />           
                    </div>
                </div>           

                <div className = "row">
                    <div className = "col-25">
                        <label for="world"><b>World-wide Premier</b></label>
                    </div>
                    <div className = "col-75">
                    <input             
                        type = "text"
                        placeholder = "Yes/No?"
                        name = "world"
                        required                                   
                    />
                    </div>
                </div>   


                <div className = "row">
                    <div className = "col-25">
                        <label for="ratingIMDB"><b>IMDB Rating</b></label>
                    </div>
                    <div className = "col-75">
                    <input             
                        type = "number"
                        placeholder = "1.0"
                        step = "0.1"
                        min = "1"
                        max = "10"
                        name = "ratingIMDB"
                        required                                   
                    />
                    </div>
                </div>

                <div className = "row">
                    <div className = "col-25">
                        <label for="ratingRotten"><b>Rotten Tomato Rating </b></label>  
                    </div>
                    <div className = "col-75">
                    <input             
                        type = "number"
                        placeholder = ""                        
                        name = "ratingRotten"
                        required                                   
                    />                     
                    </div>
                </div>

                <div className = "row">
                    <div className = "col-25">
                        <label for="review"><b>Review </b></label>
                    </div>
                    <div className = "col-75">
                    <input             
                        type = "text"
                        placeholder = "Review..."
                        name = "review"
                        required                                   
                    />
                    </div>
                </div>

                <div className = "row">
                    <div className = "col-25">    
                        <label for="language"><b>Language</b></label>
                    </div>
                    <div className = "col-75">
                    <input             
                        type = "text"
                        placeholder = "Language"
                        name = "language"
                        required                                   
                    />
                    </div>
                </div>

                <div className = "row">
                    <div className = "col-25">    
                        <label for="director"><b>Director</b></label>
                    </div>
                    <div className = "col-75">
                    <input             
                        type = "text"
                        placeholder = "Director Name"
                        name = "director"
                        required                                   
                    />
                    </div>
                </div>

                <div className = "row">
                    <div className = "col-25">    
                        <label for="producer"><b>Producer</b></label>
                    </div>
                    <div className = "col-75">
                    <input             
                        type = "text"
                        placeholder = "Producer Name"
                        name = "producer"
                        required                                   
                    />
                    </div>
                </div>

                <div className = "row">
                    <div className = "col-25">    
                        <label for="writer"><b>Writer</b></label>
                    </div>
                    <div className = "col-75">
                    <input             
                        type = "text"
                        placeholder = "Writer Name"
                        name = "writer"
                        required                                   
                    />
                    </div>
                </div>

                <div className = "row">
                    <div className = "col-25">    
                        <label for="screenplay"><b>Screenplay</b></label>
                    </div>
                    <div className = "col-75">
                    <input             
                        type = "text"
                        placeholder = "Screenplay Name"
                        name = "screenplay"
                        required                                   
                    />
                    </div>
                </div>

                <div className = "row">
                    <div className = "col-25">    
                        <label for="music"><b>Music Director</b></label>
                    </div>
                    <div className = "col-75">
                    <input             
                        type = "text"
                        placeholder = "Music Director Name"
                        name = "music"
                        required                                   
                    />
                    </div>
                </div>

                <div className = "row">
                    <div className = "col-25">    
                        <label for="budget"><b>Budget</b></label>
                    </div>
                    <div className = "col-75">
                    <input             
                        type = "text"
                        placeholder = "Film Budget"
                        name = "budget"
                        required                                   
                    />
                    </div>
                </div>

                <div className = "row">
                    <div className = "col-25">    
                        <label for="collection"><b>World-Wide Collection</b></label>
                    </div>
                    <div className = "col-75">
                    <input             
                        type = "text"
                        placeholder = "Collection"
                        name = "collection"
                        required                                   
                    />
                    </div>
                </div>

                    <button type = "submit">Submit and Next</button>                            
                    {/* <button onClick = {() => {
                        history.push('/addactor')
                    }}>Next</button> */}
                </div>
            </form>
        </div>
    </div>
    );
}

export default AddMovies;