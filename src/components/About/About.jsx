import styles from "./About.module.css";
import Image from "../../assets/imagePerfil/perfil.jpg";
import { Box, Card, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function About() {
  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 4 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Typography
            sx={{
              textTransform: "uppercase",
              color: "#9CA3AF",
              fontWeight: 600,
              fontSize: "0.9rem",
              marginBottom: "15px",
            }}
          >
            Olá eu Sou
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 600,
              color: "#832581",
              marginBottom: "15px",
            }}
          >
            Nayara Karine
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: "#832581",
              textTransform: "uppercase",
              marginBottom: "15px",
            }}
          >
            Desenvolvedora Front-End
          </Typography>
          <Box
            sx={{
              color: "#666666",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <Typography>
              Estudante de Engenharia de Software apaixonada por criar
              interfaces intuitivas, acessíveis e funcionais.
            </Typography>
            <Typography>
              Tenho experiência com JavaScript, HTML, CSS e estou aprofundando
              meus conhecimentos em UX para entregar soluções que encantam
              usuários e geram resultados para seu negócio.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={8}>
          <Box sx={{ width: 260, mx: "auto", p: 4 }}>
            <Box
              sx={{
                background: "#FCE7F3",
                borderRadius: "30px",
                p: 4,
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 25px 80px rgba(0,0,0,0.08)",
                top: 10,
              }}
            >
              {/* <Grid item xs={8}> */}
              <Box
                component="img"
                src={Image}
                sx={{
                  width: 280,
                  borderRadius: "20px",
                  boxShadow: "0 15px 40px rgba(131,37,129,0.25)",
                }}
              />
              {/* </Grid> */}
            </Box>
          </Box>
          {/* <section className={styles.about_container_links}>
            <h2>Acesse minhas redes:</h2>
            <div className={styles.linkContainer}>
              <div className={styles.link}>
                <a
                  href="https://github.com/nayarakarinesilva"
                  aria-label="GitHub"
                  target="blanck"
                >
                  <i className="bi bi-github"></i>
                  <span>GitHub</span>
                </a>
              </div>
              <div className={styles.link}>
                <a
                  href="https://www.linkedin.com/in/nayarakarine-silva/"
                  aria-label="LinkedIn"
                  target="blanck"
                >
                  <i className="bi bi-linkedin"></i>
                  <span>LinkedIn</span>
                </a>
              </div>
              <div className={styles.link}>
                <a
                  href="https://www.instagram.com/nayarakarine.silva/"
                  aria-label="Instagram"
                  target="blanck"
                >
                  <i className="bi bi-instagram"></i>
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </section> */}
        </Grid>
      </Grid>
    </Box>
  );
}
