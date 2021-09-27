import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { AiOutlinePlayCircle } from "react-icons/ai";
import "./Movie.css";

function Movie(props) {
  const { params } = props.match;
  const [movie, setMovie] = useState({});
  const [video, setVideo] = useState(null);
  const IMG_API = "https://image.tmdb.org/t/p/w300";
  const IMG_API2 = "https://image.tmdb.org/t/p/original";
  let myRef = useRef();
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=c9ee9250c0e4c2a52366261f2d28310f&query=${params.movie}`
      )
      .then((res) => {
        setMovie(res.data.results[0]);
      });
  }, []);

  const Playvideo = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=c9ee9250c0e4c2a52366261f2d28310f&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        if (
          data.results[1] &&
          data.results[1].key !== null &&
          data.results[1].key !== "undefined"
        ) {
          setVideo(data.results[1].key);
          window.scrollTo({ behavior: "smooth", top: myRef.current.offsetTop });
        } else if (data.results[0]) {
          setVideo(data.results[0].key);
          window.scrollTo({ behavior: "smooth", top: myRef.current.offsetTop });
        }

        console.log(video);
      });
  };

  const style = {
    backgroundImage:
      "linear-gradient(30deg,rgba(0,0,0,0), rgba(0,0,0,1)),url(" +
      `${IMG_API2}${movie.poster_path}` +
      ")",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "scroll",
  };

  const spanStyle = {
    color: "rgb(255, 191, 2)",
    fontWeight: "400",
  };

  return (
    <div className="movie__detail" style={style}>
      <ScrollToTopOnMount />
      <div className="movie__container">
        <div className="img-wrapper">
          <img src={IMG_API + movie.poster_path} />
        </div>
        <div className="text-wrapper">
          <h1>{movie.title}</h1>
          <h4>
            Rating : <span style={spanStyle}>{movie.vote_average}</span>
          </h4>
          <p>{movie.overview}</p>
          <button className="btn" onClick={Playvideo}>
            <AiOutlinePlayCircle className="play__icon" />
            Watch Trailer
          </button>
        </div>
      </div>
      <div className="video__container">
        {video !== null ? (
          <iframe
            ref={myRef}
            className="trailer__video"
            src={`https://www.youtube.com/embed/${video}`}
          ></iframe>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Movie;

export const ScrollToTopOnMount = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
};

//https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US
//  if (res.id == params.id) {
//           setMovie(res);
//           console.log(movie);
//         }
