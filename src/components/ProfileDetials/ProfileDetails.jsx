import React, { useEffect, useState } from "react";
import "./index.css";
import { getDetails } from "../../apis/details";
import { Link } from "react-router-dom";

function ProfileDetails() {
  const [details, setDetails] = useState({
    profileImage: "",
    title: "",
    description: "",
    resume: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const response = await getDetails();
      setDetails({
        profileImage: response.data[0].profileImage,
        title: response.data[0].title,
        description: response.data[0].description,
        resume: response.data[0].resumeFile,
      });
      setLoading(!loading);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="profile-details">
      {loading ? (
        <div className="loader"></div>
      ) : (
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
      )}
    </div>
  );
}

export default ProfileDetails;
