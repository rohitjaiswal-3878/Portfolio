import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProfileDetails from "./components/ProfileDetials/ProfileDetails";
import Experience from "./components/ExperienceWith/Experience";
import Projects from "./components/Projects/Projects";
import Exp from "./components/Experiences/Exp";

function App() {
  return (
    <>
      <Navbar />
      <ProfileDetails />
      <Experience />
      <Projects />
      <Exp />
    </>
  );
}

export default App;
