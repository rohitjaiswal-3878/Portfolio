import React from "react";
import ProfileDetails from "../ProfileDetials/ProfileDetails";
import Projects from "../Projects/Projects";
import Experience from "../ExperienceWith/Experience";
import Exp from "../Experiences/Exp";

function Homepage() {
  return (
    <div className="homepage">
      <ProfileDetails />
      <Experience />
      <Projects />
      <Exp />
    </div>
  );
}

export default Homepage;
