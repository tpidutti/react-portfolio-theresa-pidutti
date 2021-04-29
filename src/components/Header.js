import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container-top">
        <h2>Theresa Pidutti</h2>
        <img id="header-photo" src="./images/me.jpeg" className="top-image" alt="me"/>
        <ul>
        <li><Link to="/about-me">About Me</Link></li>
          <li><Link to="/">My Experience</Link></li>
          <li><Link to="/">Contact Me</Link></li>
          <li><Link to="/">Home</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
