import React from "react";
import Images from "../../assets/ImageSkills";
import { Typography, Box, Card } from "@mui/material";
import Grid from "@mui/material/Grid";
import CodeIcon from "@mui/icons-material/Code";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import SkillCard from "../../ui/SkillCard";
import Title from "../../ui/Title";

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
    <Box
      sx={{
        background: activeTheme === "lightTheme" ? "#F9FAFB" : "none",
        padding: "30px",
        height: "500px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Title text="Habilidades" />
        <Typography>
          Tecnologias e ferramentas que utilizo no dia a dia
        </Typography>
      </Box>

      <Grid container spacing={2} columns={16} sx={{ px: 4, mt: 2 }}>
        <Grid item xs={8}>
          <SkillCard
            icon={CodeIcon}
            title={"Front-end"}
            activeTheme={activeTheme}
          >
            {frontSkills.map((item) => (
              <Box key={item.name}>
                <img width={40} src={item.img} alt={item.name} />
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 600,
                    color: activeTheme === "lightTheme" ? "#333333" : "#FDF2F8",
                  }}
                >
                  {item.name}
                </Typography>
              </Box>
            ))}
          </SkillCard>
        </Grid>

        <Grid item xs={8}>
          <SkillCard
            icon={SettingsSuggestIcon}
            title={"Ferramentas"}
            activeTheme={activeTheme}
          >
            {frontSkills.map((item) => (
              <Box key={item.name}>
                <img width={40} src={item.img} alt={item.name} />
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 600,
                    color: activeTheme === "lightTheme" ? "#333333" : "#FDF2F8",
                  }}
                >
                  {item.name}
                </Typography>
              </Box>
            ))}
          </SkillCard>
        </Grid>
      </Grid>
    </Box>
  );
}
