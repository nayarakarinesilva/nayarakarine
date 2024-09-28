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
      title: "Landing Page - Técnico de Eletrodoméstico",
      description:
        "Site para uma empresa especializada em conserto e vendas de eletrodomésticos.",
      links: {
        project: "https://itamar-eletrohelp.vercel.app/",
        repository: "https://github.com/nayarakarinearaujo/itamar.eletrohelp",
      },
    },

    {
      id: "dndSpellApp",
      title: "Aplicação de Magias de Dungeons & Dragons",
      description: "Explora e filtra magias da API de D&D 5ª edição. Interface responsiva e estilizada.",
      links: {
        project: "https://link-para-a-demo.com",
        repository: "https://github.com/seuusuario/dnd-spell-app",
      },
    },
    
    {
      id: "imcCalculator",
      title: "Calculadora de IMC",
      description: "Calcula o Índice de Massa Corporal (IMC) com feedback sobre a classificação.",
      links: {
        project: "https://link-para-a-demo.com",
        repository: "https://github.com/seuusuario/imc-calculator",
      },
    },

    {
      id: "taskList",
      title: "Lista de Tarefas 📋",
      description: "Aplicação web para gerenciar tarefas com funcionalidades de adicionar, completar, remover, filtrar, pesquisar e ordenar.",
      links: {
        project: "https://link-para-a-demo.com",
        repository: "https://github.com/seuusuario/task-list",
      },
    },

    {
      id: "numeroSecreto",
      title: "Jogo do Número Secreto",
      description: "Um jogo interativo onde o usuário deve adivinhar um número gerado aleatoriamente pelo sistema.",
      links: {
        project: "https://link-para-o-jogo.com",
        repository: "https://github.com/seuusuario/jogo-numero-secreto",
      },
    },

    {
      id: "decodificadorTexto",
      title: "Decodificador de Texto",
      description: "Aplicação que permite codificar e decodificar mensagens utilizando técnicas simples de transformação de texto.",
      links: {
        project: "https://link-para-o-decodificador.com",
        repository: "https://github.com/seuusuario/decodificador-texto",
      },
    }
  
    
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
