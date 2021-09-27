import React from "react";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import Row from "../components/Row";
import requests from "../requests";
//import { ScrollToTopOnMount } from "../components/Movie";

function Homescreen() {
  return (
    <>
      {/* <ScrollToTopOnMount /> */}
      <Nav isSignedIn={true} />
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
    </>
  );
}

export default Homescreen;
