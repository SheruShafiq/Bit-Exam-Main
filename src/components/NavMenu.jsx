import React, { useState } from "react";
import "../styles/NavMenuStyles.css";

function NavMenu() {
  // Define the state variable to keep track of the menu's open/closed state.
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu's open/closed state.
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Define an array of navigation links with their labels and URLs.
  const navLinks = [
    { id: 1, label: "Home", url: "https://headline-interactive.nl/" },
    { id: 2, label: "Cases", url: "https://headline-interactive.nl/cases/" },
    { id: 3, label: "Over ons", url: "https://headline-interactive.nl/about/" },
    {
      id: 4,
      label: "Vacatures",
      url: "https://headline-interactive.nl/werken-bij-hi/",
    },
    {
      id: 5,
      label: "Contact",
      url: "https://headline-interactive.nl/contact/",
    },
  ];

  // Render the menu with the navigation links.
  return (
    <>
      <button className="button" id="menuButton" onClick={handleToggle}>
        Menu
      </button>
      <button className="button" id="menuDots" onClick={handleToggle}>
        ...
      </button>

      <nav className={`overlay-nav ${isOpen ? "open" : ""}`}>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.id} className="nav-item">
              <a href={link.url} className="nav-link" onClick={handleToggle}>
                <div id="text"> {link.label} </div>{" "}
              </a>
            </li>
          ))}
          <button className="button" id="InmenuDots" onClick={handleToggle}>
            ...
          </button>
        </ul>
      </nav>
    </>
  );
}

export default NavMenu;
