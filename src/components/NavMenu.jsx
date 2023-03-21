import React, { useState } from "react";
import "../styles/NavMenuStyles.css";
function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

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
