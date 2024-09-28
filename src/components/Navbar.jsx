// components/Navbar.js
import React, { useEffect } from "react";
import styles from "./Navbar.module.css";

function Navbar() {
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
      <ul>
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
