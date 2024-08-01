import React from "react";
import "./index.css";
import navbarLogo from "../../assets/logo.png";

function Navbar() {
  const navbar = ["Home", "Projects", "Experience", "Contact"];
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-icon">
          <img src={navbarLogo} alt="logo" />
        </div>
        <ul className="navbar-list">
          {navbar.map((items, index) => (
            <li key={index}>{items}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
