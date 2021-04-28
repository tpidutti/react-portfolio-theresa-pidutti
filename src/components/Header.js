import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container-top">
        <h2>Theresa Pidutti</h2>
        <img
          id="header-photo"
          src="./images/artLady 2.jpeg"
          className="top-image"
          alt="me"
        />
        <p>
          <Link to="/">My Experience</Link>
          <Link to="/">Contact Me</Link>
          <Link to="/about-me">About Me</Link>
          <Link to="/">Home</Link>
        </p>
      </div>
    </div>
  );
}

export default Header;
