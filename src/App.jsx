import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProfileDetails from "./components/ProfileDetials/ProfileDetails";
import Experience from "./components/ExperienceWith/Experience";
import Projects from "./components/Projects/Projects";
import Exp from "./components/Experiences/Exp";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="app">
        <ProfileDetails />
        <Experience />
        <Projects />
        <Exp />
        <Footer />
      </div>
    </>
  );
}

export default App;
