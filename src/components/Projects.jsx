import React, { useState } from "react";
import styles from "./Projects.module.css";

export default function Projects() {
  const projects = [
    {
      id: "piscinas",
      title: "Landing Page - Tratador de Piscinas",
      description: "Site para promover serviços de manutenção de piscinas.",
      links: {
        project: "https://www.gjpiscinaesaude.com.br/",
        repository: "https://github.com/nayarakarinearaujo/gj.piscinaesaude",
      },
    },
    {
      id: "tecnico",
      title: "Projeto - Landing Page Técnico de Eletrodoméstico",
      description:
        "Site para uma empresa especializada em conserto e vendas de eletrodomésticos.",
      links: {
        project: "https://itamar-eletrohelp.vercel.app/",
        repository: "https://github.com/nayarakarinearaujo/itamar.eletrohelp",
      },
    },
  ];

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
