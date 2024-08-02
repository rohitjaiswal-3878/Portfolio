import React from "react";
import "./index.css";
import profileIcon from "../../assets/Avatar.png";

function ProfileDetails() {
  return (
    <div className="profile-details">
      <div className="profile-details-container">
        <div className="profile-image">
          <img src={profileIcon} alt="profile image" />
        </div>
        <h1>
          I do code and <br />
          make content about it!
        </h1>
        <p>
          I am a seasoned full-stack software engineer with over 8 years of
          professional experience, specializing in backend development. My
          expertise lies in crafting robust and scalable SaaS-based
          architectures on the Amazon AWS platform.
        </p>
        <div className="profile-buttons">
          <button className="btn-1">Get in touch</button>
          <button className="btn-2">Download CV</button>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;
