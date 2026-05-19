import React from "react";
import projectsData from "../../mock/ProjectsData.json";
import { Box, Typography } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Projects() {
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
        sx={{ textAlign: "center", fontWeight: 600, mb: 3 }}
      >
        Projetos
      </Typography>
      <Box sx={{ position: "relative", width: "100%" }}>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          style={{
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
                    padding: 2,
                    borderRadius: 2,
                    border: "1px solid #ddd",
                    textAlign: "center",
                    height: "120px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {section.title}
                  </Typography>

                  <Typography variant="body2">
                    {project.title || project.name}
                  </Typography>
                  <img src={project.image} />
                </Box>
              </SwiperSlide>
            )),
          )}
        </Swiper>
      </Box>
    </Box>
  );
}
