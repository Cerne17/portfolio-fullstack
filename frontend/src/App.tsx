import React from "react";
import Navbar from "./sections/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import AboutMe from "./sections/AboutMe/AboutMe";
import Projects from "./sections/Projects/Projects";
import ContactForm from "./sections/ContactMe/ContactMe";
import Footer from "./sections/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
