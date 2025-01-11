import React, { useState } from "react"; // Import useState
import projectsData from "../../ProjectsData.json";
import ImagesWork from "../../assets/ImageWork";
import styles from "./Projects.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";


export default function Projects() {

  const [showFrontProjects, setShowFrontProjects] = useState(false);
  const [showBackProjects, setShowBackProjects] = useState(false);
  const [showFullstackProjects, setShowFullstackProjects] = useState(false);

  const projectsFront = projectsData.projects.front;
  const projectsBack = projectsData.projects.back;
  const projectsFullstack = projectsData.projects.fullstack;


    // Funções para alternar a visibilidade das seções
    const toggleFrontProjects = () => {
      setShowFrontProjects(!showFrontProjects);
    };
  
    const toggleBackProjects = () => {
      setShowBackProjects(!showBackProjects);
    };
  
    const toggleFullstackProjects = () => {
      setShowFullstackProjects(!showFullstackProjects);
    };
  
  return (
    <div className={styles.projects_container}>
      <h1>Projetos</h1>

      <section id="front">
      <h2 onClick={toggleFrontProjects} style={{ cursor: 'pointer' }}>
          Projetos de Front-end{" "}
          <FontAwesomeIcon icon={showFrontProjects ? faChevronUp : faChevronDown} />
        </h2>

        {showFrontProjects && (
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


      <section id="fullstack">
      <h2 onClick={toggleFullstackProjects} style={{ cursor: 'pointer' }}>
          Projetos de FullStack{" "}
          <FontAwesomeIcon icon={showFullstackProjects ? faChevronUp : faChevronDown} />
        </h2>

        {showFullstackProjects && (
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

      
      <section id="back">
      <h2 onClick={toggleBackProjects} style={{ cursor: 'pointer' }}>
          Projetos de Back-end{" "}
          <FontAwesomeIcon icon={showBackProjects ? faChevronUp : faChevronDown} />
        </h2>

        {showBackProjects && (
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
