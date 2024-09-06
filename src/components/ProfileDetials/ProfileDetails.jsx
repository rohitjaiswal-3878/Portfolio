import React, { useEffect, useState } from "react";
import "./index.css";
import profileImg from "../../assets/profileIcon.jpeg";
import resume from "../../assets/Resume.pdf";

import { Link } from "react-router-dom";

function ProfileDetails() {
  const [details, setDetails] = useState({
    profileImage: profileImg,
    title: "Hey I'm Rohit Jaiswal. A Full stack developer based in mumbai",
    description:
      "With a year of hands-on experience in web development, I specialize in the MERN stack. I combine creativity with technical skills to solve problems and build effective apps. Need help? Just send me a message!",
    resume: resume,
  });

  return (
    <div className="profile-details">
      <div className="profile-details-container">
        <div className="profile-image">
          <img src={details.profileImage} alt="profile image" />
        </div>
        <h1>{details.title}</h1>
        <p>{details.description}</p>
        <div className="profile-buttons">
          <Link to="/contact">
            <div className="btn-1 btn">Get in touch</div>
          </Link>
          <a href={details.resume} download="Resume.pdf">
            <div className="btn-2 btn">Download CV</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;
