import React, { useState } from 'react';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './component/SignUp';
import Home from './component/Home';
import Admin from './component/Admin/Admin';
import User from './component/User';
import AddMovie from './component/Admin/AddMovie';
import AddActor from './component/Admin/AddActor';
import SearchMovies from './component/Admin/search/SearchMovies';
import AdminDashboard from './component/Admin/AdminDashboard';
import UserDashboard from './component/UserDashboard';
import UserSearchMovie from './component/UserSearch/UserSearchMovie';
import FavMovies from './component/FavMovies';
import ActorSearch from './component/ActorSearch';
import RatingSearch from './component/RatingSearch';
import LanguageSearch from './component/LanguageSearch';
import ViewAll from './component/Admin/ViewAll';


function App() {  
  const [state, setState] = useState({
    inputText: ""
  });

  const handleInput = (e) => {
    let inputText = e.target.value;
    setState(prevState => {
      return{ ...prevState, inputText: inputText}
    })
    console.log(state.inputText);
  } 

  return (
    <Router>
      <ul>
        <div className = "home">
          <li><Link to = "/home">FILM-O-PEDIA</Link></li>
        </div>
        <li><Link to = "/signup">Sign-Up</Link></li>
        <li><Link to = "/home">Login</Link></li>
      </ul>
      <div className="App">        
        <main>            
          <Switch>            
            <Route exact path = '/signup'>
              <SignUp handleInput = {handleInput}/>
            </Route>
            <Route exact path = '/home'>
              <Home />
            </Route>                                  
          </Switch>
          <Route path = '/admin'>
            <Admin />
          </Route>
          <Route path = '/user'>
            <User />
          </Route>
          <Route path = '/addmovie'>
            <AddMovie />
          </Route>
          <Route path = '/addactor'>
            <AddActor />
          </Route>
          <Route path = '/searchmovie'>
            <SearchMovies />
          </Route>
          <Route path = '/admindashboard'>
            <AdminDashboard />
          </Route>  
          <Route path = '/userdashboard'>
            <UserDashboard />
          </Route>    
          <Route path = '/usersearchmovie'>
            <UserSearchMovie />
          </Route> 
          <Route path = '/favmovies'>
            <FavMovies />
          </Route>       
          <Route path = '/actorsearch'>
            <ActorSearch />
          </Route> 
          <Route path = '/ratingsearch'>
            <RatingSearch />
          </Route>
          <Route path = '/languagesearch'>
            <LanguageSearch />
          </Route>
          <Route path = '/viewall'>
            <ViewAll />
          </Route>
        </main>
      </div>
    </Router>
  );
}

export default App;
