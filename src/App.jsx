import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route element={<Homepage />} path="/" />
          <Route element={<Contact />} path="/contact" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
