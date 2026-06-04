import { useContext } from "react";
import Image from "../../assets/imagePerfil/perfil.jpg";
import { Box, Button, Card, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import CustomButton from "../../ui/CustomButton/CustomButton";
import { GlobalContext } from "../../context/GlobalContext";

export default function About() {
  const { activeTheme } = useContext(GlobalContext);

  return (
    <Box
      sx={{
        px: { xs: 2, md: 12 },
        py: 6,
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
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
            sx={{
              fontWeight: 600,
              color: "#910a67",
              marginBottom: "15px",
              fontSize: { xs: "34px", md: "40px" },
            }}
          >
            Nayara Karine
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: "#910a67",
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
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: 420,
              height: { xs: 380, md: 520 },
              mx: "auto",
            }}
          >
            {/* Arte rosa atrás */}
            <Box
              sx={{
                position: "absolute",
                width: { xs: 220, md: 350 },
                height: { xs: 220, md: 350 },
                background:
                  activeTheme === "lightTheme" ? "#FCE7F3" : "#910a67",
                borderRadius: "40px",
                left: { xs: 10, md: 0 },
                bottom: { xs: 20, md: 60 },
                zIndex: 1,
              }}
            />

            {/* CARD IMAGEM */}
            <Box
              sx={{
                position: "absolute",
                width: { xs: 220, md: 350 },
                maxWidth: 350,
                right: { xs: "100px", sm:"150px", md: 0 },
                top: { xs: "30%", md: "15%" },
                zIndex: 2,
                borderRadius: "30px",
                boxShadow: "0 25px 80px rgba(0,0,0,0.10)",
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={Image}
                alt="Portfolio"
                sx={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
