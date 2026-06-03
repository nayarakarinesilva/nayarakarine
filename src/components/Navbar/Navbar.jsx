// components/Navbar.js
import React, { useContext, useEffect, useState } from "react";
import Logo from "../../assets/logo.svg";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Typography, Box, MenuItem, Menu } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import NavbarMenu from "./NavbarMenu";
import NavbarMobileMenu from "./NavbarMobileMenu";
import { GlobalContext } from "../../context/GlobalContext";

function Navbar() {
  const global = useContext(GlobalContext);
  const { activeTheme } = useContext(GlobalContext);

  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
    { name: "HABILIDADES", href: "#skills" },
    { name: "PROJETOS", href: "#projects" },
    { name: "EXPERIÊNCIAS", href: "#experiences" },
    { name: "CONTATO", href: "#contact" },
  ];

  // !Ajustar o botão de menu no mobile
  return (
    <>
      <AppBar
        position="static"
        sx={{
          background: activeTheme === "lightTheme" ? "#fff" : "#1B1C1C",
          color: activeTheme === "lightTheme" ? "#333" : "#FDF2F8",
          boxShadow: "none",
          marginBottom: "6px",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", gap: "20px" }}>
            {/* Logo */}
            <img src={Logo} alt="Logo" style={{ height: 50 }} />
            <Box>
              <Typography
                sx={{
                  fontWeight: 600,
                  color: activeTheme === "lightTheme" ? "#333" : "#FDF2F8",
                }}
              >
                NAYARA KARINE
              </Typography>
              <Typography
                sx={{ fontSize: "0.8rem", fontWeight: 600, color: "#910a67" }}
              >
                Desenvolvedora Front-end
              </Typography>
            </Box>
          </Box>

          {/* Menu */}
          <NavbarMenu
            activeTheme={activeTheme}
            listMenu={listMenu}
            isOpen={isOpen}
            sx={{ display: { xs: "none", md: "flex" } }}
          />
          <IconButton onClick={global.toggleTheme} color="inherit">
            {activeTheme === "lightTheme" ? (
              <DarkModeIcon />
            ) : (
              <LightModeIcon />
            )}
          </IconButton>
          <IconButton
            onClick={handleOpen}
            sx={{ display: { xs: "block", md: "none" },color: "#910a67" }}
          >
            ☰
          </IconButton>
        </Toolbar>
      </AppBar>

      <NavbarMobileMenu
        activeTheme={activeTheme}
        listMenu={listMenu}
        handleClose={handleClose}
        anchorEl={anchorEl}
      />
    </>
  );
}

export default Navbar;
