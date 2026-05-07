import React from "react";
import styles from "./Skills.module.css";
import Images from "../../assets/ImageSkills";
import { Typography, Box, Card } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function Skills() {
  //! Fazer map das skills
  return (
    <Box>
      <h1>Habilidades</h1>

      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <h2>FRONT-END</h2>

          <Card
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 2,
              p: 3,
            }}
          >
            <Box className={styles.skills_card}>
              <img src={Images.html5} alt="Logo do HTML5" />
              <span>HTML 5</span>
            </Box>

            <Box className={styles.skills_card}>
              <img src={Images.css3} alt="Logo do CSS3" />
              <span>CSS 3</span>
            </Box>

            <Box className={styles.skills_card}>
              <img src={Images.javascript} alt="Logo do JavaScript" />
              <span>JavaScript</span>
            </Box>

            <Box className={styles.skills_card}>
              <img
                width={150}
                src={Images.typescript}
                alt="Logo do TypeScript"
              />
              <span>TypeScript</span>
            </Box>

            <Box className={styles.skills_card}>
              <img src={Images.figma} alt="Logo do Figma" />
              <span>Figma</span>
            </Box>

            <Box className={styles.skills_card}>
              <img src={Images.react} alt="Logo do React" />
              <span>React</span>
            </Box>

            <Box className={styles.skills_card}>
              <img width={150} src={Images.vuejs} alt="Logo do VueJs" />
              <span>Vue.js</span>
            </Box>

            <Box className={styles.skills_card}>
              <img width={150} src={Images.mui} alt="Logo do Material UI" />
              <span>Material UI</span>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={8}>
          <h2>FERRAMENTAs</h2>

          <Card
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 2,
              p: 3,
            }}
          >
            <Box className={styles.skills_card}>
              <img src={Images.mysql} alt="Logo do MySql" />
              <span>MySql</span>
            </Box>

            <Box className={styles.skills_card}>
              <img width={150} src={Images.postman} alt="Logo do Postman" />
              <span>Postman</span>
            </Box>
            <Box className={styles.skills_card}>
              <img src={Images.github} alt="Logo do GitHub" />
              <span>GitHub</span>
            </Box>
            <Box className={styles.skills_card}>
              <img src={Images.git} alt="Logo do Git" />
              <span>Git</span>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
