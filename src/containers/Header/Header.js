import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header" id="home">
      <p className="white-text no-wrap">
        A new way to build a healthy lifestyle!
      </p>
      <h2 className="white-text no-wrap">Upgrade your body at Baba Fitness</h2>
      <div className="button-container">
        <button className="white-text get-started-button">get started</button>
        <button className="white-text learn-more-button">Learn more</button>
      </div>
    </div>
  );
};

export default Header;
