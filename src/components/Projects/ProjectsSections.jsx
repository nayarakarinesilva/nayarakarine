import React, { useState } from "react";
import ImagesWork from "../../assets/ImageWork";
import { Box, Typography } from "@mui/material";
import styles from "./Projects.module.css";


function ProjectSection({ project, activeTheme }) {

  return (
    <Box
      sx={{
        padding: 1,
        borderRadius: 2,
        border:
          activeTheme === "lightTheme"
            ? "solid 1px #F3F4F6"
            : "solid 1px #910a67",
        textAlign: "center",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box key={project.id}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          {project.title}
        </Typography>

        {ImagesWork[project.id] && (
          <Box sx={{ margin: "15px 0 15px 0" }}>
            <img src={ImagesWork[project.id]} alt={project.title} width={200} />
          </Box>
        )}

        <Typography
          variant="subtitle2"
          sx={{
            color: activeTheme === "lightTheme" ? "#666666" : "#FDF2F8",
          }}
        >
          <strong>Descrição:</strong> {project.description}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "20px",
            color: "#910a67",
          }}
        >
          {project.links.project && (
            <a
              href={project.links.project}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontWeight: 600,
                color: "#910a67",
                fontSize: "14px",
              }}
            >
              Ver Projeto
            </a>
          )}
          {project.links.repository && (
            <a
              href={project.links.repository}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontWeight: 600,
                color: "#910a67",
                fontSize: "14px",
              }}
            >
              Ver Repositório
            </a>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default ProjectSection;
