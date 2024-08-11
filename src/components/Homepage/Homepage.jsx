import React from "react";
import ProfileDetails from "../ProfileDetials/ProfileDetails";
import Projects from "../Projects/Projects";
import Experience from "../ExperienceWith/Experience";
import Exp from "../Experiences/Exp";
import Footer from "../Footer/Footer";

function Homepage() {
  return (
    <div className="homepage">
      <ProfileDetails />
      <Experience />
      <Projects />
      <Exp />
      <Footer />
    </div>
  );
}

export default Homepage;
