import React from "react";
import styles from "./Skills.module.css";
import Images from "../../assets/ImageSkills";
import { Typography, Box, Card } from "@mui/material";
import Grid from "@mui/material/Grid";
import CodeIcon from "@mui/icons-material/Code";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";

export default function Skills({ activeTheme }) {
  const frontSkills = [
    { name: "HTML5", img: Images.html5 },
    { name: "CSS3", img: Images.css3 },
    { name: "JavaScript", img: Images.javascript },
    { name: "TypeScript", img: Images.typescript },
    { name: "React", img: Images.react },
    { name: "VueJs", img: Images.vuejs },
    { name: "Material UI", img: Images.mui },
    { name: "Figma", img: Images.figma },
  ];

  const toolsSkills = [
    { name: "MySql", img: Images.mysql },
    { name: "Postman", img: Images.postman },
    { name: "Git", img: Images.git },
    { name: "GitHub", img: Images.github },
  ];

  return (
    <Box sx={{ background: "#F9FAFB", padding: "30px", height: "500px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 600 }}>
          Habilidades
        </Typography>
        <Typography sx={{ color: "#666666" }}>
          Tecnologias e ferramentas que utilizo no dia a dia
        </Typography>
      </Box>

      <Grid container spacing={2} columns={16} sx={{ px: 4, mt: 2 }}>
        <Grid item xs={8}>
          <Card sx={{ padding: "20px", height: "230px" }}>
            {" "}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "15px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#FCE7F3",
                  width: 36,
                  height: 36,
                  borderRadius: "8px",
                  color: "#DB2777",
                }}
              >
                <CodeIcon fontSize="medium" />
              </Box>
              <Typography sx={{ color: "#333333", fontWeight: 600 }}>
                FRONT-END
              </Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                justifyItems: "center",
                gap: 2,
                p: 3,
                color: "#6B7280",
              }}
            >
              {frontSkills.map((item) => (
                <Box key={item.name}>
                  <img width={40} src={item.img} alt={item.name} />
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    {item.name}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Card>
        </Grid>

        <Grid item xs={8}>
          <Card sx={{ padding: "20px", height: "230px" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "15px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#FFEDD5",
                  width: 36,
                  height: 36,
                  borderRadius: "8px",
                  color: "#EA580C",
                }}
              >
                <SettingsSuggestIcon fontSize="medium" />
              </Box>
              <Typography sx={{ color: "#333333", fontWeight: 600 }}>
                FERRAMENTAS
              </Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                justifyItems: "center",
                gap: 2,
                padding: "30px",
                color: "#6B7280",
              }}
            >
              {toolsSkills.map((item) => (
                <Box key={item.name}>
                  <img width={40} src={item.img} alt={item.name} />
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    {item.name}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
