import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./sections/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import AboutMe from "./sections/AboutMe/AboutMe";
import Projects from "./sections/Projects/Projects";
import ContactForm from "./sections/ContactMe/ContactMe";
import Footer from "./sections/Footer/Footer";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div className="app-container">
        <Navbar />
        <Hero />
        <AboutMe />
        <Projects />
        <ContactForm />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
