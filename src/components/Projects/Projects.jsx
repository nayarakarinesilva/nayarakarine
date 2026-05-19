import React from "react";
import projectsData from "../../mock/ProjectsData.json";
import { Box, Typography } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProjectSection from "./ProjectsSections";
import ImagesWork from "../../assets/ImageWork";

export default function Projects({ activeTheme }) {
  const { front, back, fullstack } = projectsData.projects;

  const sections = [
    { id: "front", title: "Front-end", projects: front },
    { id: "fullstack", title: "FullStack", projects: fullstack },
    { id: "back", title: "Back-end", projects: back },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", padding: 4 }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", fontWeight: 600, mb: 3, color: "#7eacb5" }}
      >
        Projetos
      </Typography>
      <Box sx={{ position: "relative", width: "100%" }}>
        <IconButton
          className="prev"
          sx={{
            position: "absolute",
            top: "50%",
            left: 10,
            zIndex: 10,
            transform: "translateY(-50%)",
            backgroundColor: "#fff",
            "&:hover": { backgroundColor: "#f3f3f3" },
          }}
        >
          <ArrowBackIosNewIcon sx={{ color: "#910a67" }} />
        </IconButton>

        <IconButton
          className="next"
          sx={{
            position: "absolute",
            top: "50%",
            right: 10,
            zIndex: 10,
            transform: "translateY(-50%)",
            backgroundColor: "#fff",
            "&:hover": { backgroundColor: "#f3f3f3" },
          }}
        >
          <ArrowForwardIosIcon sx={{ color: "#910a67" }} />
        </IconButton>
        <Swiper
          className="meu-swiper"
          slidesPerView={3}
          spaceBetween={20}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          sx={{
            width: "100%",
            maxWidth: "100%",
            overflow: "hidden",
          }}
        >
          {sections.map((section) =>
            section.projects.map((project, index) => (
              <SwiperSlide key={`${section.id}-${index}`}>
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
                        <img
                          src={ImagesWork[project.id]}
                          alt={project.title}
                          width={200}
                        />
                      </Box>
                    )}

                    <Typography
                      variant="subtitle2"
                      sx={{
                        color:
                          activeTheme === "lightTheme" ? "#666666" : "#FDF2F8",
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
                      {/* {project.links.project && project.links.repository && (
                        <span> | </span>
                      )} */}
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
              </SwiperSlide>
            )),
          )}
        </Swiper>
      </Box>
    </Box>
  );
}
