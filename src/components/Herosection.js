import React, { useState } from "react";
import GetStarted from "./GetStarted";
import "./Nav.css";
import SignUpScreen from "./SignUpScreen";
import logo from "./netflix.png";
import "../components/Herosection.css";

function Herosection() {
  const [form, setForm] = useState(false);

  function reloadpage() {
    window.location.reload();
  }

  return (
    <>
      <div className="hero">
        <div className="nav__container">
          <nav className="nav">
            <img src={logo} className="netflix_logo__lg" onClick={reloadpage} />

            <button className="sign__btn" onClick={() => setForm(true)}>
              Sign In
            </button>
          </nav>
        </div>
        <div className="hero__contents">
          {form ? (
            <SignUpScreen />
          ) : (
            <>
              <div className="textWrapper">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h3>Watch anywhere. Cancel anytime.</h3>
              </div>
              <GetStarted />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Herosection;
