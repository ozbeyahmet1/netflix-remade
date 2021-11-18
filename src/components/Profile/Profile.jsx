import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";
import Navbar from "../Navbar/Navbar";
import Plans from "./Plans";
import "./Profile.css";

function Profile() {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Navbar />
      <div className="profileScreen__body">
        <h1 className="profile__edit">Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://pbs.twimg.com/profile_images/1398399796667244549/oZeQQEzC_400x400.png"
            alt=""
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <Plans />
              <p></p>
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut"
                type="submit"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
