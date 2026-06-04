import React, { useContext } from "react";
import "./App.module.css";

import { GlobalProvider, GlobalContext } from "./context/GlobalContext";

import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experiences from "./components/Experiences/Experiences";
import Footer from "./components/Footer/Footer";

import { Box, Divider } from "@mui/material";

function AppContent() {
  const global = useContext(GlobalContext);
  const activeTheme = global.activeTheme;

  return (
    <Box style={global.themes[activeTheme]}>
      <Box
        sx={{
          maxWidth: "1400px",
          width: "100%",
          mx: "auto",
        }}
      >
        <Navbar />

        <Divider
          sx={{
            borderColor:
              activeTheme === "lightTheme" ? "rgba(0, 0, 0, 0.12)" : "#fff",
          }}
        />

        <Box id="home">
          <About />
        </Box>

        <Box id="skills">
          <Skills />
        </Box>

        <Box id="projects" >
          <Projects />
        </Box>

        <Box id="experiences">
          <Experiences />
        </Box>

        <Box id="contact">
          <Contact />
        </Box>

        <Divider
          sx={{
            borderColor:
              activeTheme === "lightTheme" ? "rgba(0, 0, 0, 0.12)" : "#fff",
          }}
        />

        <Footer />
      </Box>
    </Box>
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
