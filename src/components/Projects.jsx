import React from "react";
import projectsData from "../ProjectsData.json";
import ImagesWork from "../assets/ImageWork";
import styles from "./Projects.module.css";

export default function Projects() {
  const projectsFront = projectsData.projects.front;
  const projectsBack = projectsData.projects.back;
  const projectsFullstack = projectsData.projects.fullstack;

  return (
    <div className={styles.projects_container}>
      <h1>Projetos</h1>

      <section id="front">
        <h2>Projetos de Front-end</h2>
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

              <p>{project.description}</p>
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
      </section>


      <section id="fullstack">
        <h2>Projetos de FullStack</h2>
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

              <p>{project.description}</p>
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
      </section>

      
      <section id="back">
        <h2>Projetos de Back-end</h2>
        <div className={styles.projects_grid}>
          {projectsBack.map((project) => (
            <div key={project.id} className={styles.project_card}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
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
      </section>

    </div>
  );
}
