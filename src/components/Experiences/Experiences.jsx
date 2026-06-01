import React, { useContext } from "react";
import { Box, Chip, Divider, Typography } from "@mui/material";
import { Description } from "@mui/icons-material";
import mapExperiences from "./data/experiencesData";
import Title from "../../ui/Title/Title";
import { GlobalContext } from "../../context/GlobalContext";

function Experiences() {
  const { activeTheme } = useContext(GlobalContext);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", paddingTop: "80px" }}>
      <Title text="Experiências" />
      <Divider />
      <Box
        sx={{
          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          gap: 2,
          padding: "20px",
        }}
      >
        {mapExperiences.map((item) => (
          <Box
            key={item.id}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <Box
              sx={{
                background: item.backgroundChip,
                width: 24,
                height: 24,
                borderRadius: "50%",
              }}
            />
            <Box
              key={item.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                flex: 1,
                borderRadius: "10px",
                padding: "20px",
                border:
                  activeTheme === "lightTheme"
                    ? "solid 1px #F3F4F6"
                    : "solid 1px #910a67",
                background: activeTheme === "lightTheme" ? "none" : "#910a6721",
              }}
            >
              <Box>
                <Chip
                  label={item.year}
                  sx={{
                    background: item.backgroundChip,
                    color: item.color,
                    fontWeight: 600,
                  }}
                />
              </Box>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: activeTheme === "lightTheme" ? "#333333" : "#FDF2F8",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: activeTheme === "lightTheme" ? "#666666" : "#FDF2F8",
                }}
              >
                {item.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Experiences;
