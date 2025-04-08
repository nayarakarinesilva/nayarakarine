import React, { useState } from "react"; // Import useState
import projectsData from "../../ProjectsData.json";
import styles from "./Projects.module.css";
import ProjectSection from "./ProjectsSections";

export default function Projects() {
  const { front, back, fullstack } = projectsData.projects;

  const sections = [
    { id: "front", title: "Projetos de Front-end", projects: front },
    { id: "fullstack", title: "Projetos de FullStack", projects: fullstack },
    { id: "back", title: "Projetos de Back-end", projects: back },
  ];

  return (
    <div className={styles.projects_container}>
      <h1>Projetos</h1>
      {sections.map((section, index) => (
        <ProjectSection
          key={index}
          title={section.title}
          projects={section.projects}
        />
      ))}
    </div>
  );
}
