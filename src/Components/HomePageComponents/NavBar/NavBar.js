import React from "react";
import "./NavBar.css";
import { FaTwitter } from "react-icons/fa6";
import { FaGamepad } from "react-icons/fa6";

const NavBar = () => {
  const handleHamburger = () => {
    const hamburger = document.querySelector(`.hamburger`);
    hamburger.classList.toggle("is-active");
    const ulContainer = document.querySelector(`.links`);
    ulContainer.classList.toggle(`is-active`);
  };

  return (
    <nav className="navContainer">
      <h2 className="gradient-text">Cryptodom</h2>
      <div className="links">
        <div className="homeLink">
          <a href="/">Home</a>
        </div>
        <div className="marketLink">
          <a href="#market">Market</a>
        </div>
        <div className="chooseUsLink">
          <a href="#chooseUs">Choose Us</a>
        </div>
        <div className="joinUsLink">
          <a href="#join">Join</a>
        </div>
      </div>
      <div className="navIcons">
        <div className="navicon">
          <FaTwitter />
        </div>
        <div className="navicon">
          <FaGamepad />
        </div>
      </div>
      <button onClick={handleHamburger} className="hamburger">
        <div className="bar"></div>
      </button>
    </nav>
  );
};

export default NavBar;
