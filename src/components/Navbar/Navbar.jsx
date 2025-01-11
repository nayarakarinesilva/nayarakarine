// components/Navbar.js
import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Logo from "../../assets/imagePerfil/logo.N.png"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <nav className={`${styles.navbar} js-menu`}>
      
      {!isOpen && <img src={Logo} alt="Logo" />}
      
      {/* O botão só é exibido se o menu não estiver aberto */}
      {!isOpen && (
        <button className={styles.menuToggle} onClick={() => setIsOpen(!isOpen)}>
          ☰ {/* Ícone de menu */}
        </button>
      )}
      <ul className={`${isOpen ? styles.open : styles.closed}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#skills">Habilidades</a>
        </li>
        <li>
          <a href="#projects">Projetos</a>
        </li>
        <li>
          <a href="#experiences">Experiências</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
