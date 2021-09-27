import React from "react";
import "./ProfileScreen.css";
import Nav from "../components/Nav";
import { auth } from "../Firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../feature/userSlice";

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <>
      <div className="profileContainer">
        <Nav />
        <div className="profile_body">
          <h1>Edit Profile</h1>
          <div className="profile_info">
            <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" />
            <div className="profile_details">
              <h2>{user.email}</h2>
              <div className="profile_plans">
                <h3>Plans</h3>
                <button
                  onClick={() => auth.signOut()}
                  className="profile_signout"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileScreen;
