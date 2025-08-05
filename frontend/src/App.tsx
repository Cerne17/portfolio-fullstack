import React from "react";
import Navbar from "./sections/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import AboutMe from "./sections/AboutMe/AboutMe";
import ContactForm from "./sections/ContactMe/ContactMe";
import Footer from "./sections/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <AboutMe />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
