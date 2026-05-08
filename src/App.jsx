import React, { useContext} from "react";
import "./App.module.css";

import { GlobalProvider, GlobalContext } from "./context/GlobalContext";

import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experiences from "./components/Experiences/Experiences";
import Footer from "./components/Footer/Footer";

import { Divider } from "@mui/material";

function AppContent() {
  const global = useContext(GlobalContext);

  return (
    <div style={global.themes[global.activeTheme]}>
      <Navbar />

      <Divider />

      <section id="home">
        <About />
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

function App() {
  return (
    <GlobalProvider>
      <AppContent />
    </GlobalProvider>
  );
}

export default App;
