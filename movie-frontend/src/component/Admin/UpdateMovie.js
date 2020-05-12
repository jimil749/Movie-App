import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios';


function UpdateMovie( {id} ) {
    console.log(id);

    const [startDate, setStartDate] = useState(new Date());

    const handleSubmit = () => {
        axios.put('http://localhost:3001/updatemovie/' + id)
        .then(({data}) => {
            console.log(data);
            alert("Movie Updated Successfully!");
        })
        .catch(err => {
            console.log(err);
            alert("Error in Updateing!");
        })
    }

    return (
        <div>
            <header className="App-header"> 
                <h1>  Update Movies  </h1>  
                <h3> Fill the part you want to update.</h3>      
            </header>
        <div className = 'boxed'>
            <form>                
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
                    />
                    </div>
                </div>
                <button type = "submit">Update</button>
                </div>
            </form>
        </div>
        </div>
    );
}

export default UpdateMovie;