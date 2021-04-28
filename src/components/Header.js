import React from "react";

function Header() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container-top">
        <h2>Theresa Pidutti</h2>
        <img id="header-photo" src="./images/artLady 2.jpeg" className="top-image" alt="me" />
        <p>
          <a className="connect" href="#my experience">
            My Experience
          </a>
          <a className="connect" href="#contact me">
            Contact Me
          </a>
        </p>
      </div>
    </div>
  );
}

export default Header;
