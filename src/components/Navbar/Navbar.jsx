import React from "react";
import { useState } from "react";
import "./index.css";
import navbarLogo from "../../assets/logo.png";
import { useMediaQuery } from "react-responsive";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const navbar = ["Home", "Projects", "Experience", "Contact"];
  const [toggleMenu, setToggleMenu] = useState(false);

  const isSmallScreen = useMediaQuery({ query: "(min-width : 670px)" });

  const handleNavbar = (e) => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <div className="navbar-icon">
            <img src={navbarLogo} alt="logo" />
          </div>
          {isSmallScreen ? (
            <ul className="navbar-list">
              {navbar.map((items, index) => (
                <li key={index}>{items}</li>
              ))}
            </ul>
          ) : (
            <div className="navbar-list-menu" onClick={handleNavbar}>
              {!toggleMenu ? <GiHamburgerMenu /> : <RxCross2 />}
            </div>
          )}
        </div>
      </div>
      <div
        className={"navbar-dropdown "}
        style={{ display: toggleMenu ? "inline-block" : "none" }}
      >
        <ul className="navbar-list">
          {navbar.map((items, index) => (
            <li key={index}>{items}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
