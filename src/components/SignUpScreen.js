import React, { useRef } from "react";
import { auth } from "../Firebase";

function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      <div className="formWrapper">
        <form>
          <input ref={emailRef} name="email" placeholder="Email address" />
          <input ref={passwordRef} name="password" placeholder="Password" />
          <button className="signbtn" onClick={login}>
            Sign In
          </button>
          <p>
            Not signed up yet?
            <span className="linkSpan">
              <a onClick={register}>Sign Up</a>
            </span>
          </p>
        </form>
      </div>
    </>
  );
}

export default SignUpScreen;
