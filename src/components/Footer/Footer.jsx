import React from "react";
import "./index.css";
import { IoMailOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <h1>Contact</h1>
        <p>
          Seasoned Full Stack Software Engineer with over 8 years of hands-on
          experience in designing and implementing robust, scalable, and
          innovative web solutions. Adept at leveraging a comprehensive skill
          set encompassing front-end and back-end technologies{" "}
        </p>

        <div className="footer-email">
          <IoMailOutline /> <span>rohitjaiswal8898@gmail.com</span>
        </div>
        <div className="footer-social">
          <FaLinkedin />
          <FaXTwitter />
          <FaGithub />
        </div>
      </div>
    </div>
  );
}

export default Footer;
