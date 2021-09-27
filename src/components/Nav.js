import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";
import logo from "./netflix.png";

function Nav({ isSignedIn }) {
  const [darkbg, setdarkbg] = useState(false);
  const History = useHistory();

  const showbg = () => {
    if (window.scrollY > 200) {
      setdarkbg(true);
    } else {
      setdarkbg(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", showbg);
    return () => {
      window.removeEventListener("scroll", showbg);
    };
  }, []);
  return (
    <>
      <div className={`nav__container ${darkbg && "darkbg"}`}>
        <nav className="nav">
          <img
            src={logo}
            onClick={() => History.push("/")}
            className={
              isSignedIn == true ? "netflix__logo" : "netflix_logo__lg"
            }
          />

          {isSignedIn == true ? (
            <img
              onClick={() => History.push("/profile")}
              width="30px"
              src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            />
          ) : (
            <button className="sign__btn">Sign In</button>
          )}
        </nav>
      </div>
    </>
  );
}

export default Nav;
