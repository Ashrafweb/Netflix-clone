import React, { useState, useEffect, useRef } from "react";
import axios from "../axios";
import requests from "../requests";
import { AiOutlinePlayCircle } from "react-icons/ai";
import "./Banner.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
function Banner() {
  const [movie, setMovie] = useState([]);
  const [video, setVideo] = useState(null);
  const [isOpen, setOpen] = useState(false);
  let mov = undefined;
  let myRef = useRef();
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  useEffect(() => {
    async function fetchdata() {
      const request = await axios.get(requests.fetchNetflixOriginals);

      mov =
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ];
      if (!mov) {
        mov =
          request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
          ];
      } else {
        setMovie(mov);
      }
      return request;
    }
    fetchdata();
    console.log(movie);
  }, []);

  const playvideo = (id) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=c9ee9250c0e4c2a52366261f2d28310f&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        if (
          data.results[1] &&
          data.results[1].key !== null &&
          data.results[1].key !== "undefined"
        ) {
          setVideo(data.results[1].key);
        } else if (data.results[0]) {
          setVideo(data.results[0].key);
        }
        setOpen(true);
      });
  };

  const mainStyle = {
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${
      movie?.backdrop_path || movie?.poster_path
    }")`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    marginTop: "-80px",
  };

  return (
    <>
      <div className="banner__contents" style={mainStyle}>
        <div className="banner__wrapper">
          <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
          <div className="banner__buttons">
            <button className="btn" onClick={() => playvideo(movie.id)}>
              {/* <AiOutlinePlayCircle className="play-icon" /> */}
              Play Now
            </button>
            <button className="btn">See Info</button>
          </div>
          <p>{truncate(movie?.overview, 180)}</p>
        </div>
        <div className="shadow__bottom"></div>
        <div className="video__container">
          {video !== null ? (
            <React.Fragment>
              <ModalVideo
                channel="youtube"
                isOpen={isOpen}
                videoId={video}
                onClose={() => setOpen(false)}
              />
            </React.Fragment>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
}

export default Banner;
