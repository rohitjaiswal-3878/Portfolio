import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProfileDetails from "./components/ProfileDetials/ProfileDetails";

function App() {
  return (
    <>
      <Navbar />
      <ProfileDetails />
    </>
  );
}

export default App;
