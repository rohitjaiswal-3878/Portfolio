import React from "react";
import "./index.css";
import { IoMailOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <h1>Contact</h1>
        <p>
          Experienced Full Stack Software Engineer with over a year of hands-on
          expertise in crafting dynamic, scalable web solutions. Skilled in both
          front-end and back-end technologies, dedicated to delivering
          innovative and robust digital experiences.{" "}
        </p>

        <div className="footer-email">
          <IoMailOutline /> <span>rohitjaiswal8898@gmail.com</span>
        </div>
        <div className="footer-social">
          <a
            href="https://www.linkedin.com/in/rohit-jaiswal-02246825a/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/919555524341?text=Hi%2C%20Rohit%20Jaiswal"
            target="_blank"
          >
            <FaWhatsapp />
          </a>
          <a href="https://github.com/rohitjaiswal-3878" target="_blank">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
