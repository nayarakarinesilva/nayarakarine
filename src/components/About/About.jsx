import styles from "./About.module.css";
import Image from "../../assets/imagePerfil/perfil.jpg";
import { Box, Button, Card, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function About({ toggleTheme, activeTheme }) {
  return (
    <Box
      sx={{
        px: { xs: 2, md: 12 },
        py: 6,
      }}
    >
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Typography
            sx={{
              textTransform: "uppercase",
              color: activeTheme === "lightTheme" ? "#9CA3AF" : "#FDF2F8",
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
              color: activeTheme === "lightTheme" ? "#666666" : "#FDF2F8",
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "15px",
              pt: "40px",
            }}
          >
            <Button
              sx={{
                background: "#832581",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "#721f71",
                  boxShadow:
                    "0 0 12px rgba(255, 0, 255, 0.4), 0 0 24px rgba(131, 37, 129, 0.6)",
                },
              }}
              variant="contained"
            >
              VER PROJETOS
            </Button>
            <Button
              sx={{
                border: "solid 2px #832581",
                color: "#832581",
                fontWeight: 600,
                "&:hover": {
                  boxShadow:
                    "0 0 12px rgba(255, 0, 255, 0.4), 0 0 24px rgba(131, 37, 129, 0.6)",
                  border: "solid 2px #832581",
                },
              }}
              variant="outlined"
            >
              DOWNLOAD CV
            </Button>
          </Box>
        </Grid>

        <Grid item xs={8}>
          <Box
            sx={{
              position: "relative",
              width: 420,
              height: 520,
              mx: "auto",
            }}
          >
            {/* Arte rosa atrás */}
            <Box
              sx={{
                position: "absolute",
                width: 350,
                height: 350,
                background:
                  activeTheme === "lightTheme" ? "#FCE7F3" : "#832581",
                borderRadius: "40px",
                left: 0,
                bottom: 60,
                zIndex: 1,
                filter: "blur(0px)",
              }}
            />

            {/* Card branco */}
            <Box
              sx={{
                position: "absolute",
                width: 350,
                borderRadius: "30px",
                right: 30,
                top: "15%",
                zIndex: 2,
                boxShadow: "0 25px 80px rgba(0,0,0,0.10)",
              }}
            >
              <Box
                component="img"
                src={Image}
                alt="Portfolio"
                sx={{
                  width: "100%",
                  borderRadius: "20px",
                  display: "block",
                }}
              />
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
