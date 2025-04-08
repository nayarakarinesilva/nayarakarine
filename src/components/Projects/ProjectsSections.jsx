import React, { useState } from "react";
import projectsData from "../../ProjectsData.json";
import ImagesWork from "../../assets/ImageWork";
import styles from "./Projects.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";


function ProjectSection({ title, projects }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () => setIsVisible((prev) => !prev);

  return (
    <section>
      <h2 onClick={toggle} style={{ cursor: "pointer" }}>
        {title}{" "}
        <FontAwesomeIcon icon={isVisible ? faChevronUp : faChevronDown} />
      </h2>

      {isVisible && (
        <div className={styles.projects_grid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.project_card}>
              <h3>{project.title}</h3>

              {ImagesWork[project.id] && (
                <div>
                  <img
                    src={ImagesWork[project.id]}
                    alt={project.title}
                    className="product-image"
                  />
                </div>
              )}

              <p>
                <strong>Descrição:</strong> {project.description}
              </p>

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
  );
}

export default ProjectSection;
