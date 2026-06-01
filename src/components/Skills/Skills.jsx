import React, { useContext } from "react";
import { Typography, Box, Card } from "@mui/material";
import Grid from "@mui/material/Grid";
import CodeIcon from "@mui/icons-material/Code";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import CardSkill from "./ui/CardSkill";
import Title from "../../ui/Title/Title";
import CardSkillInfo from "./ui/CardSkillInfo";
import { GlobalContext } from "../../context/GlobalContext";
import { frontSkills, toolsSkills } from "./constants/Skills";

export default function Skills() {
  const { activeTheme } = useContext(GlobalContext);

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
          <CardSkill
            icon={CodeIcon}
            title={"Front-end"}
            activeTheme={activeTheme}
          >
            {frontSkills.map((item) => (
              <CardSkillInfo
                key={item.name}
                text={item.name}
                image={item.img}
                alt={item.name}
              />
            ))}
          </CardSkill>
        </Grid>

        <Grid item xs={8}>
          <CardSkill
            icon={SettingsSuggestIcon}
            title={"Ferramentas"}
            activeTheme={activeTheme}
          >
            {toolsSkills.map((item) => (
              <CardSkillInfo
                key={item.name}
                text={item.name}
                image={item.img}
                alt={item.name}
              />
            ))}
          </CardSkill>
        </Grid>
      </Grid>
    </Box>
  );
}
