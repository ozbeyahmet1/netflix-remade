import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./Navbar.css";
import profile from "../../images/profile.png";

function Navbar() {
  const [show, handleShow] = useState(false);

  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <nav className={`navbar ${show && "navbar__black"}`}>
      <img
        onClick={() => history.push("/")}
        className="navbar__logo"
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt=""
      />

      <img
        onClick={() => history.push("/profile")}
        className="navbar__icon"
        src={profile}
        alt=""
      />
    </nav>
  );
}

export default Navbar;
