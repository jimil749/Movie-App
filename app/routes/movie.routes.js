module.exports = function(app) {
    var movieList = require('../controller/movie.controller');    
    //movie routes
    app.route('/addmovie')
        .post(movieList.create_movie);   
    app.route('/addactor')
        .post(movieList.create_actor);  
    app.route('/addaward')
        .post(movieList.create_award);
    app.route('/addgenre')   
        .post(movieList.create_genre);
    app.route('/searchmovie/:moviename')
        .get(movieList.read_movie);
    app.route('/searchmovieid/:id')
        .get(movieList.movie_detail);
    app.route('/adminuser')
        .post(movieList.check_admin_login);
    app.route('/deletemovie/:id')
        .delete(movieList.delete_movie);
    app.route('/signup')
        .post(movieList.add_user);
    app.route('/user')
        .post(movieList.check_user_login);
    app.route('/favmovie')
        .post(movieList.add_fav);
    app.route('/fav/:id')
        .get(movieList.fav);
    app.route('/actorsearch/:data')
        .get(movieList.search_actor_wise);
    app.route('/ratingsearch/:data')
        .get(movieList.search_rating_wise);
    app.route('/languagesearch/:data')
        .get(movieList.search_language_wise);
    app.route('/viewallmovies')
        .get(movieList.view_movies);
}