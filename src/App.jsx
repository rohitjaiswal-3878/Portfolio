import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProfileDetails from "./components/ProfileDetials/ProfileDetails";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <Navbar />
      <ProfileDetails />
      <Experience />
      <Projects />
    </>
  );
}

export default App;
