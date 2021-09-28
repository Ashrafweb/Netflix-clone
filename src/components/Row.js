import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { BsPlusCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

import "./Row.css";

const Row = ({ title, fetchUrl, isLarge }) => {
  const [movies, setMovies] = useState([]);
  const [slidenum, setSlidenum] = useState();
  const [isOpen, setOpen] = useState(false);
  const [video, setVideo] = useState(null);
  const IMG_API = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3${fetchUrl}`)

      .then((res) => setMovies(res.data.results));

    if (title === "Netflix Originals" || title === "Trending Now") {
      setSlidenum(6);
    } else {
      setSlidenum(5);
    }
  }, [fetchUrl,title]);

  const settings = {
    dots: true,
    infinite: true,
    centerPadding: "6px",
    slidesToShow: slidenum,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    swipeToSlide: true,
    cssEase: "linear",
     responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 850,
        settings: {
          dots: false,
          slidesToShow: 3,
          className: "center",
          centerMode: true,
          infinite: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          dots: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          dots: false,
          slidesToShow: 1.5,
          className: "center",
          centerMode: true,
          infinite: true,
        },
      },
    ],
  };

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
        // console.log(video);
      });
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId={video}
          onClose={() => setOpen(false)}
        />
      </React.Fragment>

      <Slider {...settings}>
        {movies.map((movie, index) => {
          return (
            <>
              <AiOutlinePlayCircle
                onClick={() => playvideo(movie.id)}
                className={
                  title === "Netflix Originals" || title === "Trending Now"
                    ? "btnlink1"
                    : "btnlink1__sm"
                }
              />

              <Link
                to={`${movie.title}/${movie.id}`}
                className={
                  title === "Netflix Originals" || title === "Trending Now"
                    ? "btnlink2"
                    : "btnlink2__sm"
                }
              >
                <BsPlusCircle />
              </Link>

              <img
                key={movie.id}
                alt={movie.title || movie.name || movie.original_name}
                draggable="false"
                className={
                  title === "Netflix Originals" || title === "Trending Now"
                    ? "row__poster"
                    : "row__poster__sm"
                }
                src={
                  IMG_API +
                  (movie.backdrop_path
                    ? isLarge
                      ? movie.poster_path
                      : movie?.backdrop_path
                    : movie.poster_path)
                }
              />
            </>
          );
        })}
      </Slider>
    </div>
  );
};

export default Row;

// export const HandleButtons = () => {
//   document.getElementsByClassName("imglink").style.display = "none";
// };
// return (
//   <div className="row">
//     <h2>{title}</h2>
//     <div className="row__posters">
//
//         {movies.map((movie, index) => {
//           return (
//             <>
//               <Link
//                 to={`${movie.title}/${movie.id}`}
//                 key={index}
//                 className={
//                   title === "Netflix Originals" || title === "Trending Now"
//                     ? " "
//                     : "wide__img"
//                 }
//               >
//                 <img
//                   key={movie.id}
//                   alt={movie.title || movie.name || movie.original_name}
//                   draggable="false"
//                   className={
//                     title === "Netflix Originals" || title === "Trending Now"
//                       ? "row__poster"
//                       : "row__poster__sm"
//                   }
//                   src={
//                     IMG_API +
//                     (isLarge ? movie.poster_path : movie.backdrop_path)
//                   }
//                 />
//               </Link>
//             </>
//           );
//         })}
//
//     </div>
//   </div>
// );
