import { Box, Divider, Typography } from "@mui/material";
import styles from "./Experiences.module.css";
import { Description } from "@mui/icons-material";

function Experiences({ activeTheme }) {
  
  const mapExperiences = [
    {
      id: 1,
      year: "2023",
      title: "Ritnner Odontologia - Auxiliar de Saúde Bucal",
      description:
        "Atendimento ao público, organização de ambiente clínico e apoio em procedimentos, desenvolvendo habilidades de responsabilidade, comunicação e trabalho em equipe.",
    },
    {
      id: 2,
      year: "2024",
      title: "AgBe Soluções LTDA - Estágio em Front-End",
      description:
        "Atuação com PHP, JavaScript e Vue.js no desenvolvimento e manutenção de sistemas web.",
    },
    {
      id: 3,
      year: "Atual",
      title: "Projetos Open Source",
      description:
        "Contribuições utilizando TypeScript, JavaScript e Tailwind CSS, com foco em melhorias de código e resolução de bugs.",
    },
    {
      id: 4,
      year: "Atual",
      title: "ProBrain - Estágio em Front-End",
      description:
        "Desenvolvimento de interfaces com JavaScript, React, TypeScript, MUI e Ant Design, focando em componentização e boas práticas.",
    },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", paddingTop: "50px" }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", fontWeight: 600, mb: 3, color: "#7eacb5" }}
      >
        Experiências
      </Typography>
      <Divider />

      <Box
        sx={{
          display: "flex",
          gap:1,
          padding:"20px"
        }}
      >
        {mapExperiences.map((item) => (
          <Box
            key={item.id}
            sx={{
              borderRadius: "10px",
              padding:"20px",
              border:
                activeTheme === "lightTheme"
                  ? "solid 1px #F3F4F6"
                  : "solid 1px #910a67",
            }}
          >
            {/* Badge */}
            <Typography>{item.title}</Typography>
            <Typography>{item.description}</Typography>
          </Box>
        ))}
      </Box>
      {/* <section>
        <div>
          <h2>Experiência Profissional</h2>
          <ul>
            <li>
              <strong>ProBrain</strong>, Sorocaba - SP –{" "}
              <em>Estágio em Front-End</em> –{" "}
              <span>Outubro de 2024 – Atual</span>
            </li>

            <li>
              <strong>AgBe Soluções LTDA</strong>, Campinas - SP –{" "}
              <em>Estágio em Full Stack</em> –{" "}
              <span>Abril de 2024 – Setembro de 2024</span>
            </li>

            <li>
              <strong>Ritnner Odontologia</strong>, Campinas – SP –{" "}
              <em>Auxiliar de Saúde Bucal</em> –{" "}
              <span>Maio de 2022 – Março de 2024</span>
            </li>

            <li>
              <strong>We Smile</strong>, Campinas – SP –{" "}
              <em>Auxiliar de Saúde Bucal</em> –{" "}
              <span>Março de 2021 – Abril de 2022</span>
            </li>
          </ul>
        </div>
        <div>
          <h2>Atividades Extracurriculares</h2>
          <ul>
            <li>
              <strong>JavaScript / HTML5 / CSS3 / Java</strong> – Curso em Vídeo
              – <em>Agosto 2023</em>
            </li>

            <li>
              <strong>Bootcamp Elas Tech BACKEND</strong> – Java, MySQL –{" "}
              <em>Março 2024</em>
            </li>

            <li>
              <strong>Programa Desenvolvedor FRONTEND</strong> – ONE (Oracle
              Next Education) com Alura – <em>Fevereiro 2024</em>
            </li>

            <li>
              <strong>JavaScript / TypeScript / React.js / Figma</strong> –
              Origamid – <em>2024</em>
            </li>

            <li>
              <strong>Figma</strong> – Sujeito Programador – <em>2024</em>
            </li>
          </ul>
        </div>
      </section> */}
    </Box>
  );
}

export default Experiences;
