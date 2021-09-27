import React from "react";
import "./GetStarted.css";

function GetStarted() {
  return (
    <div>
      <form>
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <div className="form__group">
          <input type="email" placeholder="Email address" />
          <button type="submit">Get Started</button>
        </div>
      </form>
    </div>
  );
}

export default GetStarted;
