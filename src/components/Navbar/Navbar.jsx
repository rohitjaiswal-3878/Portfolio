import React from "react";
import { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import navbarLogo from "../../assets/logo.png";
import { useMediaQuery } from "react-responsive";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const [navbar, setNavbar] = useState([
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Projects",
      url: "/projects",
    },
    {
      title: "Blogs",
      url: "/blogs",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ]);
  const [toggleMenu, setToggleMenu] = useState(false);

  const isSmallScreen = useMediaQuery({ query: "(min-width : 670px)" });

  const handleNavbar = (e) => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <a href="/">
            <div className="navbar-icon">
              <img src={navbarLogo} alt="logo" />
            </div>
          </a>
          {isSmallScreen ? (
            <ul className="navbar-list">
              {navbar.map((items, index) => (
                <a href={items.url} key={index}>
                  <li>{items.title}</li>
                </a>
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
            <a href={items.url} key={index}>
              <li>{items.title}</li>
            </a>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
