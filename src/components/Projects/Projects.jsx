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
                <ProjectSection project={project} activeTheme={activeTheme} />
              </SwiperSlide>
            )),
          )}
        </Swiper>
      </Box>
    </Box>
  );
}
