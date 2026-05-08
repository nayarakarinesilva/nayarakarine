// components/Navbar.js
import React, { useContext, useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Logo from "../../assets/logo.svg";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Typography, Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { GlobalContext } from "../../context/GlobalContext";

function Navbar() {
  const global = useContext(GlobalContext);

  const [isOpen, setIsOpen] = useState(false);

  const activeTheme = global.activeTheme;

  useEffect(() => {
    function initScrollSoft() {
      const internalLinks = document.querySelectorAll('.js-menu a[href^="#"]');

      function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute("href");
        const section = document.querySelector(href);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }

        setIsOpen(false);
      }

      internalLinks.forEach((link) => {
        link.addEventListener("click", scrollToSection);
      });

      return () => {
        internalLinks.forEach((link) => {
          link.removeEventListener("click", scrollToSection);
        });
      };
    }

    initScrollSoft();
  }, []);

  const listMenu = [
    { name: "HOME", href: "#home" },
    { name: "SOBRE", href: "#about" },
    { name: "HABILIDADES", href: "#skills" },
    { name: "PROJETOS", href: "#projects" },
    { name: "EXPERIÊNCIAS", href: "#experiences" },
    { name: "CONTATO", href: "#contact" },
  ];

  // !Ajustar o botão de menu no mobile
  return (
    // <nav className={`${styles.navbar} js-menu`}>
    <nav>
      {/* {!isOpen && <img src={Logo} alt="Logo" />} */}

      {/* O botão só é exibido se o menu não estiver aberto */}
      {!isOpen && (
        <button
          className={styles.menuToggle}
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰ {/* Ícone de menu */}
        </button>
      )}
      {/* <ul className={`${isOpen ? styles.open : styles.closed}`}> */}

      <AppBar
        position="static"
        sx={{
          background: activeTheme === "lightTheme" ? "#fff" : "#1B1C1C",
          color: activeTheme === "lightTheme" ? "#000" : "#fff",
          boxShadow: "none",
          marginBottom: "6px",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", gap: "20px" }}>
            {/* Logo */}
            <img src={Logo} alt="Logo" style={{ height: 50 }} />
            <Box>
              <Typography
                sx={{
                  fontWeight: 600,
                  color: activeTheme === "lightTheme" ? "#000" : "#fff",
                }}
              >
                NAYARA KARINE
              </Typography>
              <Typography
                sx={{ fontSize: "0.8rem", fontWeight: 600, color: "#832581" }}
              >
                Desenvolvedora Front-end
              </Typography>
            </Box>
          </Box>

          {/* Menu */}
          <List sx={{ display: "flex", gap: 2 }}>
            {listMenu.map((item) => (
              <ListItem key={item.name} disablePadding>
                <ListItemButton
                  component="a"
                  href={item.href}
                  sx={{
                    letterSpacing: "0.5px",
                    lineHeight: "20px",

                    "& .MuiTypography-root": {
                      transition: "color 0.3s ease",
                    },
                    "&:hover": {
                      backgroundColor:
                        activeTheme === "lightTheme"
                          ? "#8325811a"
                          : "rgba(131, 37, 129, 0.25)",
                      boxShadow:
                        activeTheme === "lightTheme"
                          ? "none"
                          : "0 0 12px rgba(255, 0, 255, 0.4), 0 0 24px rgba(131, 37, 129, 0.6)",
                      "& .MuiTypography-root": {
                        color: "#832581",
                        textDecoration: "underline",
                      },
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: activeTheme === "lightTheme" ? "#333" : "#fff",
                    }}
                  >
                    {item.name}
                  </Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <IconButton onClick={global.toggleTheme} color="inherit">
            {activeTheme === "lightTheme" ? (
              <DarkModeIcon />
            ) : (
              <LightModeIcon />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
    </nav>
  );
}

export default Navbar;
