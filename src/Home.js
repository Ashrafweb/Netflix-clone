import React from "react";
import requests from "./requests";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Movie from "./Movie";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Row from "./Row";

function Home() {
  return (
    <>
      <Router>
        <Switch>
          <Route
            exact
            path="/:movie/:id?"
            render={(props) => <Movie {...props} />}
          />
          <Route exact path="/">
            <Nav />
            <Banner />

            <Row
              title="Netflix Originals"
              isLarge="true"
              fetchUrl={requests.fetchNetflixOriginals}
            />
            <Row
              title="Trending Now"
              isLarge="true"
              fetchUrl={requests.fetchTrending}
            />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action " fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romantic" fetchUrl={requests.fetchRomanticMovies} />
            <Row title="Documenteries" fetchUrl={requests.fetchDocumentaries} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default Home;
