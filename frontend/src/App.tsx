import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <AboutMe />
    </div>
  );
}

export default App;
