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

function App() {
  const [temaAtivo, setTemaAtivo] = useState("temaClaro");

  const temas = {
    temaEscuro: { backgroundColor: "#333", color: "#ffffff" },
    temaClaro: { backgroundColor: "#f2f2f2", color: "#333" },
  };

  const alterarTema = () => {
    setTemaAtivo((prev) => (prev === "temaClaro" ? "temaEscuro" : "temaClaro"));
  };

  useEffect(() => {
    document.body.className = temaAtivo;
  }, [temaAtivo]);

  return (
    <div style={temas[temaAtivo]}>
      <Navbar alterarTema={alterarTema} temaAtivo={temaAtivo} />

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

export default App;
