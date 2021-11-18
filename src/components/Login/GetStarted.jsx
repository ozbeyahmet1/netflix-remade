import React, { useState } from "react";
import "./GetStarted.css";
import Flow from "../Flow/Flow";
import { flowdatas } from "../Flow/Flow_Datas";
import SignUp from "./SignUp";
import Navbar from "../Navbar/Navbar";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <Navbar />
      <div className="loginScreen__banner">
        <div className="loginScreen__middle">
          {signIn ? (
            <SignUp />
          ) : (
            <>
              <h1 className="loginScreen--xlfont">
                {" "}
                Unlimited movies, TV shows, and more.
              </h1>
              <h3 className="loginScreen--lgfont">
                Watch anywhere. Cancel anytime.
              </h3>
              <h3 className="loginScreen--mdfont">
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <form className="loginScreen__input">
                <input
                  className="loginScreen__email"
                  placeholder="Email adress"
                />

                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen__button"
                  type=""
                >
                  Get Started{" "}
                </button>
              </form>
            </>
          )}
        </div>

        <div className="loginScreen__background" />
      </div>

      <div>
        {flowdatas.map((flowdata, index) => {
          return <Flow key={flowdata.id} {...flowdata}></Flow>;
        })}
      </div>
    </div>
  );
}

export default LoginScreen;
