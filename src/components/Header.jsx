import React from "react";
import logo from "../images/logo.png";
import "../styles/HeaderStyles.css";
import Nav from "./NavMenu";
function Header() {
  return (
    <div id="header">
      <a href="https://headline-interactive.nl/">
        <img id="logo" src={logo} alt="Logo" />
      </a>
      <div id="menu">
        <Nav />
      </div>
    </div>
  );
}

export default Header;
