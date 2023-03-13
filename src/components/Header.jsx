import React from "react";
import logo from "../images/logo.png";
import "../styles/HeaderStyles.css";

function Header() {
  return (
    <div id="header">
      <a href="https://headline-interactive.nl/">
        <img id="logo" src={logo} alt="Logo" />
      </a>
      <div id="menu">
        <button id="menuButton" className="button">
          Menu
        </button>
        <button id="menuDots" className="button">
          ...
        </button>
      </div>
    </div>
  );
}

export default Header;
