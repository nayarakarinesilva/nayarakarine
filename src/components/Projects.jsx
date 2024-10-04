import React, { useState } from "react"; // Import useState
import projectsData from "../ProjectsData.json";
import ImagesWork from "../assets/ImageWork";
import styles from "./Projects.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  const [activeSection, setActiveSection] = useState(null);

  const projectsFront = projectsData.projects.front;
  const projectsBack = projectsData.projects.back;
  const projectsFullstack = projectsData.projects.fullstack;

  // Função para alternar a visibilidade de cada seção
  const toggleSection = (section) => {
    setActiveSection((prevSection) => (prevSection === section ? null : section));
  };

  return (
    <div className={styles.projects_container}>
      <h1>Projetos</h1>

      {/* Front-end Projects Section */}
      <section id="front">
        <h2 onClick={() => toggleSection("front")} style={{ cursor: "pointer" }}>
          Projetos de Front-end{" "}
          <FontAwesomeIcon
            icon={activeSection === "front" ? faChevronUp : faChevronDown}
          />
        </h2>

        {activeSection === "front" && (
          <div className={styles.projects_grid}>
            {projectsFront.map((project) => (
              <div key={project.id} className={styles.project_card}>
                <h3>{project.title}</h3>
                <div>
                  <img
                    src={ImagesWork[project.id] || "default-image-path.jpg"}
                    alt={project.title}
                    className="product-image"
                  />
                </div>
                <p><strong>Descrição:</strong> {project.description}</p>
                <div className={styles.project_links}>
                  {project.links.project && (
                    <a
                      href={project.links.project}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver Projeto
                    </a>
                  )}
                  {project.links.project && project.links.repository && (
                    <span> | </span>
                  )}
                  {project.links.repository && (
                    <a
                      href={project.links.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver Repositório
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Fullstack Projects Section */}
      <section id="fullstack">
        <h2 onClick={() => toggleSection("fullstack")} style={{ cursor: "pointer" }}>
          Projetos de FullStack{" "}
          <FontAwesomeIcon
            icon={activeSection === "fullstack" ? faChevronUp : faChevronDown}
          />
        </h2>

        {activeSection === "fullstack" && (
          <div className={styles.projects_grid}>
            {projectsFullstack.map((project) => (
              <div key={project.id} className={styles.project_card}>
                <h3>{project.title}</h3>
                <div>
                  <img
                    src={ImagesWork[project.id] || "default-image-path.jpg"}
                    alt={project.title}
                    className="product-image"
                  />
                </div>
                <p><strong>Descrição:</strong> {project.description}</p>
                <div className={styles.project_links}>
                  {project.links.project && (
                    <a
                      href={project.links.project}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver Projeto
                    </a>
                  )}
                  {project.links.project && project.links.repository && (
                    <span> | </span>
                  )}
                  {project.links.repository && (
                    <a
                      href={project.links.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver Repositório
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Back-end Projects Section */}
      <section id="back">
        <h2 onClick={() => toggleSection("back")} style={{ cursor: "pointer" }}>
          Projetos de Back-end{" "}
          <FontAwesomeIcon
            icon={activeSection === "back" ? faChevronUp : faChevronDown}
          />
        </h2>

        {activeSection === "back" && (
          <div className={styles.projects_grid}>
            {projectsBack.map((project) => (
              <div key={project.id} className={styles.project_card}>
                <h3>{project.title}</h3>
                <p><strong>Descrição:</strong> {project.description}</p>
                <div className={styles.project_links}>
                  {project.links.project && (
                    <a
                      href={project.links.project}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver Projeto
                    </a>
                  )}
                  {project.links.project && project.links.repository && (
                    <span> | </span>
                  )}
                  {project.links.repository && (
                    <a
                      href={project.links.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver Repositório
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
