import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import { auth } from "../../firebase";
import "./SignUp.css";

function SignUp() {
  const history = useHistory();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [direct, setDirect] = useState(true);

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
    history.push("/welcome");
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert(error.message));
    history.push("/welcome");
  };

  return (
    <div>
      {direct ? (
        <>
          <div className="loginScreen__form">
            <form action="">
              <div className="form__signin">Sign In</div>
              <div>
                <input
                  className="form__login"
                  ref={emailRef}
                  type="email"
                  placeholder="E-mail"
                />
              </div>
              <div>
                <input
                  className="form__login"
                  ref={passwordRef}
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="form__login">
                <button className="form__button" type="submit" onClick={signIn}>
                  Sign In
                </button>
              </div>
            </form>
            <div className="loginScreen__text">
              <h4 className="form_joinButton">Want to join Netflix?</h4>
              <h4
                className="loginScreen__direct"
                onClick={() => setDirect(false)}
              >
                Register now
              </h4>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="loginScreen__form">
            <form action="">
              <div className="form__signin">Register</div>
              <div>
                <input
                  className="form__login"
                  ref={emailRef}
                  type="email"
                  placeholder="E-mail"
                />
              </div>
              <div>
                <input
                  className="form__login"
                  ref={passwordRef}
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="form__login">
                <button
                  className="form__button"
                  type="submit"
                  onClick={register}
                >
                 Register
                </button>
              </div>
            </form>
            <div>
              <h4
                className="loginScreen__direct"
                onClick={() => setDirect(true)}
               
              >
                Return to SignIn Screen
              </h4>
            </div>
          </div>
        </>
      )}

  
    </div>
  );
}

export default SignUp;
