import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import ContactForm from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
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
