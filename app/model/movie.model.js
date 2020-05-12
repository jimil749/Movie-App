var sql = require('../config/db.config');


//movie object, with all of the data.

var Movie = function(movie) { 
    this.movie_id = "";        
    this.language_id = "";
    this.movie_title = movie.title;
    this.duration = movie.duration;
    this.description = movie.desc;
    this.adult = movie.adult;
    this.country = movie.country;
    this.poster_path = movie.poster;
    this.prequel = movie.prequel;
    this.release_date = movie.startDate;
    this.trailer = movie.trailer;
    this.worldwide_premier = movie.world;    
    this.ratings_id = "";    
}

var Rating = function(rating) {
    this.ratings_id = "";
    this.IMDB_Score = rating.ratingIMDB;
    this.Rotten_tomatoes = rating.ratingRotten;
    this.Review = rating.review;
}

var Language = function(language) {
    this.language_id = "";
    this.language_name = language.language;
}

var Cast = function(cast) {     //foreign key to movie
    this.cast_id = "";
    this.director_name = cast.director;
    this.producer_name = cast.producer;
    this.writer_name = cast.writer;
    this.screenplay_name = cast.screenplay;
    this.music_director = cast.music;
}
    
var BoxOffice = function(boxoffice) {          //foreign key to movie
    this.box_office_id = "";
    this.budget = boxoffice.budget;
    this.worldwide_collection = boxoffice.collection;
}

var Actor = function(actor) {
    this.actor_id = "";
    this.actor_firstname = actor.firstname;
    this.actor_lastname = actor.lastname;
    this.gender = actor.gender;
    this.dob = actor.startDate;    
}

var Awards = function(awards) {
    this.awards_id = "";
    this.award_name = awards.name;    
}

var Genre = function(genre) {
    this.genre_id = "";
    this.genre_name = genre.gname;
}

var Admin = function(admin) {
    this.admin_id = "";
    this.email = admin.email;
    this.password = admin.password;
    this.name = admin.name;
}

var User = function(user) {
    this.user_id = "";
    this.email = user.email;
    this.password = user.password;
    this.name = user.name;
}

var Fav = function(fav) {
    this.movie_id = fav.movieid;
    this.user_id = fav.user_id;
}

Movie.createMovie = (newMovie, newRating, newLanguage, newCast, newBoxOffice, result) => {   
    sql.query('INSERT INTO ratings set ?' ,newRating, (err, res) => {
        if (err) {
            console.log(err);
        } else {
            console.log(res);
        }

    });
    sql.query('INSERT INTO language_movie set ?', newLanguage, (err, res) => {
        if (err) {
            console.log(err);
        }
    });
    sql.query('INSERT INTO production_cast set ?', newCast, (err, res) => {
        if (err) {
            console.log(err);
        }
    });
    sql.query('INSERT INTO box_office_collection set ?', newBoxOffice, (err, res) => {
        if (err) {
            console.log(err);
        }
    })    
    sql.query('select get_ratings_id()', (err, res) => {
        if (err) {
            console.log(err);
        } else {        
            newMovie.ratings_id = res[0]["get_ratings_id()"];        
        }
    });
    sql.query('select get_cast_id()', (err, res) => {
        if (err) {
            console.log(err);
        } else {
            newMovie.cast_id = res[0]["get_cast_id()"];
        }
    });
    sql.query('select get_box_id()', (err, res) => {
        if (err) {
            console.log(err);
        } else {
            newMovie.box_office_id = res[0]["get_box_id()"];
        }
    })
    sql.query('select get_language_id()', (err, res) => {
        if (err) {
            console.log(err);
        } else {            
            newMovie.language_id = res[0]["get_language_id()"];  
            console.log(newMovie);
            sql.query('INSERT INTO movie set ?',newMovie, (err, res) => {        
                if (err) {
                    console.log(err);
                    result(null, err);            
                } else {
                    result(res, null);           
                }
            });                  
        }                     
    });
                   
};

Actor.createActor = (newActor, role, resultD) => {
    sql.query("select actor_id from actor where actor_firstname = '"+ newActor.actor_firstname+"' and actor_lastname = '"+newActor.actor_lastname+"'", (err, result) => {
        if (err) {
            console.log(err);
        } else {                      
            if (result.length > 0) {   //means this actor exists in the database, so just into movie_actor.
                sql.query('select get_movie_id()', (err, res) => {                                            
                        sql.query("INSERT INTO movie_actor values ('" + res[0]["get_movie_id()"] + "','" + result[0]["actor_id"] + "','" + role + "' );", (err2, res2) => {
                            if (err2) {
                                resultD(null, err2);
                                console.log(err2);
                            } else {                
                                resultD(res2, null);                                            
                            }
                        });                    
                })
            } else {
                sql.query('INSERT INTO actor set ?', newActor, (err, res) => {
                    if (err) {
                        console.log(err);
                    } else {
                        sql.query('select get_movie_id()', (err, res) => { 
                            sql.query('select get_actor_id()', (err1, res1) => {
                                sql.query("INSERT INTO movie_actor values ('" + res[0]["get_movie_id()"] + "','" + res1[0]["get_actor_id()"] +"','" + role + "' );", (err2, res2) => {
                                    if (err2) {
                                        resultD(null, err2);
                                        console.log(err2);
                                    } else {
                                        resultD(res2, null);                                        
                                    }
                                });
                            });                                         
                        });
                    }
                });                                
            }
        }
    });    
}

Awards.createAward = (newAward, resultD) => {
    sql.query("select awards_id from awards where award_name = '"+newAward.award_name+"';", (err, result) => {
        if (err) {
            console.log(err);
        } else {                       
            if (result.length >  0) {   //means this actor exists in the database, so just into movie_actor.                
                sql.query('select get_movie_id()', (err, res) => {                                            
                        sql.query("INSERT INTO movie_award values ('" + res[0]["get_movie_id()"] + "','" + result[0]["awards_id"] + "');", (err2, res2) => {
                            if (err2) {
                                resultD(null, err2);
                                console.log(err2);
                            } else {
                                resultD(res2, null);                                
                            }
                        });                    
                })
            } else {
                sql.query('INSERT INTO awards set ?', newAward, (err, res) => {                    
                    if (err) {
                        console.log(err);
                    } else {
                        sql.query('select get_movie_id()', (err, res) => { 
                            sql.query('select get_awards_id()', (err1, res1) => {
                                sql.query("INSERT INTO movie_award values ('" + res[0]["get_movie_id()"] + "','" + res1[0]["get_awards_id()"] + "');", (err2, res2) => {
                                    if (err2) {
                                        resultD(null, err2);
                                        console.log(err2);
                                    } else {
                                        resultD(res2, null);                                        
                                    }
                                });
                            });                                         
                        });
                    }
                });                                
            }
        }
    });    
}


Genre.createGenre = (newGenre, resultD) => {
    sql.query("select genre_id from Genre where genre_name = '"+newGenre.genre_name+"';", (err, result) => {
        if (err) {
            console.log(err);
        } else {                      
            if (result.length > 0) {   //means this actor exists in the database, so just into movie_actor.
                sql.query('select get_movie_id()', (err, res) => {                                            
                        sql.query("INSERT INTO movie_genre values ('" + res[0]["get_movie_id()"] + "','" + result[0]["genre_id"] + "');", (err2, res2) => {
                            if (err2) {
                                resultD(null, err2);
                                console.log(err2);
                            } else {
                                resultD(res2, null);                                
                            }
                        });                    
                })
            } else {
                sql.query('INSERT INTO Genre set ?', newGenre, (err, res) => {
                    if (err) {
                        console.log(err);
                    } else {
                        sql.query('select get_movie_id()', (err, res) => { 
                            sql.query('select get_genre_id()', (err1, res1) => {
                                sql.query("INSERT INTO movie_genre values ('" + res[0]["get_movie_id()"] + "','" + res1[0]["get_genre_id()"] + "');", (err2, res2) => {
                                    if (err2) {
                                        resultD(null, err2);
                                        console.log(err2);
                                    } else {
                                        resultD(res2, null);                                        
                                    }
                                });
                            });                                         
                        });
                    }
                });                                
            }
        }
    });    
}

Movie.getMovieByName = (movieName, result) => {
    sql.query("select movie_id, movie_title, poster_path from movie where movie_title like '%"+movieName+"%'", (err, res) => {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            result(res, null);
        }
    });
};

Movie.getMovieDetail = (id, result) => {    
    sql.query("select movie_id, movie_title, description, extract(year from release_date) as release_date, poster_path, IMDB_score ,director_name, producer_name, writer_name, screenplay_name, music_director from movie, production_cast, ratings where movie.ratings_id = ratings.ratings_id and movie.cast_id = production_cast.cast_id and movie_id = ?; call fetch_actors(?); call fetch_genre(?)", [id, id, id], (err, res) => {
        if (err){
            console.log(err);
            result(null, err);
        } else {
            console.log(result);
            result(res, null);
        }
    });    
}

Movie.getMovieDetailActor = (data, result) => {
    var str = data.split(" ");    
    sql.query("call fetch_movie_details('"+str[0]+"', '"+str[1]+"');", (err, res) => {
        if (err) {
            console.log(err);
            result(null, err);
        } else {            
            var data = JSON.stringify(res[0]);
            var json = JSON.parse(data);
            result(json, null);
        }
    })    
}

Movie.viewMovies = (result) => {
    sql.query("select movie_id, movie_title, poster_path from movie;", (err, res) => {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            result(res, null);
        }
    })
}

Movie.getMovieDetailRating = (data, result) => {
    sql.query("call fetch_rating_movies("+data+")", (err, res) => {
        if (err){
            console.log(err);
            result(null, err);
        }  else {
            var data = JSON.stringify(res[0]);
            var json = JSON.parse(data);
            result(json, null);
        }
    })
}

Movie.getMovieDetailLanguage = (data, result) => {
    sql.query("call fetch_lang_movies('"+data+"')", (err, res) => {
        if (err){
            console.log(err);
            result(null, err);
        }  else {
            var data = JSON.stringify(res[0]);
            var json = JSON.parse(data);
            result(json, null);
        }
    })
}

Admin.checkLogin = (admin, result) => {    
    sql.query("select * from admin where email = '"+admin.email+"' and password = '"+admin.password+"';", (err, res) => {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            result(res, null);
        }
    })
}

User.checkUserLogin = (user, result) => {
    sql.query("select user_id from user_table where email = '"+user.email+"' and password = '"+user.password+"';", (err, res) => {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            result(res, null);
        }
    })
}

Movie.removeMovie = (movieID, result) => {
    sql.query("delete from movie where movie_id = '"+movieID+"';", (err, res) => {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            result(res, null);
        }
    });
}

User.addUser = (new_user, result) => {
    sql.query('INSERT INTO user_table set ?', new_user, (err, res) => {
        if(err) {
            console.log(err);
            result(null, err);
        } else {
            result(res, null);
        }
    })
}

Fav.addFav = (new_fav, result) => {
    sql.query("call add_to_fav('"+new_fav.movieid+"','"+new_fav.user_id+"');", (err, res) => {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            result(res, null);
        }
    })
}

Fav.favDetail = (id, result) => {
    sql.query("call display_favs ('"+id+"');", (err, res) => {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            result(res, null);
        }
    })
}



module.exports = {Movie, Rating, Language, Actor, Cast, BoxOffice, Awards, Genre, Admin, User, Fav};