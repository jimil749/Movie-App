var Object = require('../model/movie.model');

exports.create_movie = (req,res) => {
    var movieParam = {
        title : req.body.title,
        duration : req.body.duration,
        desc : req.body.desc,
        adult : req.body.adult,
        country : req.body.country,
        poster : req.body.poster,
        prequel : req.body.prequel,
        startDate : req.body.startDate,
        trailer : req.body.trailer,
        world: req.body.world
    } 

    var ratingParam = {
       ratingIMDB : req.body.ratingIMDB,
       ratingRotten: req.body.ratingRotten,
       review: req.body.review
    }

    var languageParam = {
        language : req.body.language
    }

    var castParam = {        
        director : req.body.director,
        producer : req.body.producer,
        writer : req.body.writer,
        screenplay : req.body.screenplay,
        music : req.body.music
    }

    var boxParam = {        
        budget : req.body.budget,
        collection : req.body.collection
    }

    var new_movie = new Object.Movie(movieParam);
    var new_rating = new Object.Rating(ratingParam);
    var new_language = new Object.Language(languageParam);    
    var new_cast = new Object.Cast(castParam);
    var new_box = new Object.BoxOffice(boxParam);   

    Object.Movie.createMovie(new_movie, new_rating, new_language, new_cast, new_box, (err, movie) => {
        if (err)
            res.send(err);
        else {           
            res.json(movie);            
        }
    });    
};

exports.create_actor = (req, res) => {
    var new_actor = new Object.Actor(req.body);
    Object.Actor.createActor(new_actor, req.body.role, (err, actor) => {
        if (err)
            res.send(err);
        else {
            res.json(actor);
        }
    })
}

exports.create_award = (req, res) => {
    var new_award = new Object.Awards(req.body);
    Object.Awards.createAward(new_award, (err, award) => {
        if (err)
            res.send(err);
        else 
            res.json(award);
    })
}

exports.create_genre = (req, res) => {
    var new_genre = new Object.Genre(req.body);
    Object.Genre.createGenre(new_genre, (err, genre) => {
        if (err)
            res.send(err);
        else 
            res.json(genre);
    })
}

exports.read_movie = (req, res) => {    
    Object.Movie.getMovieByName(req.params.moviename, (err, movie) => {
        if (err)
            res.send(err);
        else    
            res.json(movie);
    });
}

exports.movie_detail = (req, res) => {     
    Object.Movie.getMovieDetail(req.params.id, (err, movie) => {
        if (err)
            res.send(err);
        else    
            res.json(movie);
    })
}

exports.search_actor_wise = (req, res) => {
    Object.Movie.getMovieDetailActor(req.params.data, (err, movie) => {
        if (err)
            res.send(err);
        else    
            res.json(movie);
    })
}

exports.search_rating_wise = (req, res) => {
    Object.Movie.getMovieDetailRating(req.params.data, (err, movie) => {
        if (err)
            res.send(err);
        else    
            res.json(movie);
    })
}

exports.view_movies = (req, res) => {
    Object.Movie.viewMovies((err, movie) => {
        if (err)
            res.send(err);
        else 
            res.json(movie);
    })
}

exports.search_language_wise = (req, res) => {
    Object.Movie.getMovieDetailLanguage(req.params.data, (err, movie) => {
        if (err)
            res.send(err);
        else
            res.json(movie);
    })
}

exports.check_admin_login = (req, res) => {    
    var admin = new Object.Admin(req.body);
    Object.Admin.checkLogin(admin, (err, admin) => {
        if (err) 
            res.send(err);
        else 
            res.json(admin);
    })
}

exports.delete_movie = (req, res) => {
    Object.Movie.removeMovie(req.params.id, (err, movie) => {
        if (err)
            res.send(err);
        res.json({message : 'Movie deleted successfully!'})
    })
}

exports.add_user = (req, res) => {
    Object.User.addUser(req.body, (err, user) => {
        if (err) 
            res.send(err);
        else
            res.json(user);
    })
}

exports.check_user_login = (req, res) => {    
    var user = new Object.User(req.body);
    Object.User.checkUserLogin(user, (err, user) => {
        if (err)
            res.send(err);
        else 
            res.json(user);
    })
}

exports.add_fav = (req, res) => {
    Object.Fav.addFav(req.body, (err, fav) => {
        if (err)
            res.send(err);
        else    
            res.json(fav);
    });  
}

exports.fav = (req, res) => {
    Object.Fav.favDetail(req.params.id, (err, fav) => {
        if (err)
            res.send(err);
        else    
            res.json(fav);
    })
}

