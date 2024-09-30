import React, { useState } from "react";
import styles from "./Projects.module.css";

export default function Projects() {
 

  return (
    <div className={styles.projects_container}>
      <h1>Projetos</h1>
      <section id="front-end">
        <h2>Projetos de Front-end</h2>
        <div className={styles.projects_grid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.project_card}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.project_links}>
                <a href={project.links.project} target="_blank" rel="noopener noreferrer">
                  Ver Projeto
                </a>
                <span> | </span>
                <a href={project.links.repository} target="_blank" rel="noopener noreferrer">
                  Ver Repositório
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
