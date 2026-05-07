// App.js
import React, { useState, useEffect } from "react";
import "./App.module.css";

import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experiences from "./components/Experiences/Experiences";
import Footer from "./components/Footer/Footer";
import { Divider } from "@mui/material";

function App() {
  const [activeTheme, setActiveTheme] = useState("lightTheme");

  const themes = {
    darkTheme: {
      backgroundColor: "#1B1C1C",
      color: "#FDF2F8",
    },

    lightTheme: {
      backgroundColor: "#fff",
      color: "#333",
    },
  };

  const toggleTheme = () => {
    setActiveTheme((prev) =>
      prev === "lightTheme" ? "darkTheme" : "lightTheme",
    );
  };

  useEffect(() => {
    document.body.className = activeTheme;
  }, [activeTheme]);

  return (
    <div style={themes[activeTheme]}>
      <Navbar toggleTheme={toggleTheme} activeTheme={activeTheme} />
      <Divider />
      <section id="home">
        <About toggleTheme={toggleTheme} activeTheme={activeTheme} />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="experiences">
        <Experiences />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
