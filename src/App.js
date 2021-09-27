import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Movie from "./components/Movie";
import Landing from "./Screens/Landing";
import Homescreen from "./Screens/Homescreen";
import ProfileScreen from "./Screens/ProfileScreen";
import { auth } from "./Firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./feature/userSlice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Landing />
        ) : (
          <Switch>
            <Route path="/profile">
              <ProfileScreen />
            </Route>
            <Route exact path="/">
              <Homescreen />
            </Route>

            <Route
              exact
              path="/:movie/:id?"
              render={(props) => <Movie {...props} />}
            />
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;

// ()=>{
//   async function fetchData(){
//       const request = await axios.get(fetchUrl);
//       setMovies(request.data.results);
//       console.log(request);
//       return request ;

//   }
//   fetchData();
// },

//const api_key = 'c9ee9250c0e4c2a52366261f2d28310f' ;
//const FEATURED_API ='https://api.themoviedb.org/3/discover/movie?api_key=c9ee9250c0e4c2a52366261f2d28310f&language=en-US&sort_by=popularity.desc&page=1'

//const IMG_API = 'https://image.tmdb.org/t/p/w1200';

//const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=c9ee9250c0e4c2a52366261f2d28310f&query=" ;
