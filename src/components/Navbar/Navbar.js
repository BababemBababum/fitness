import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar white-text">
      <h1 className="navbar__name">Baba Fitness</h1>
      <ul className="navbar__links">
        {["home", "about us", "classes", "schedules", "contact"].map(
          (item, index) => (
            <li key={index}>
              <a href={`#${item}`} className="white-text navbar__link">
                {item}
              </a>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
