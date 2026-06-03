import { Box, Typography } from "@mui/material";
import Logo from "../../assets/logo.svg";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        padding: "30px",
        color: "#666666",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: "25px",
        }}
      >
        <img src={Logo} alt="Logo" style={{ height: 50 }} />
        <Typography>
          &copy; {currentYear} Desenvolvido por Nayara Karine
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography>Desenvolvido com ❤️ e muito código</Typography>
      </Box>
    </Box>
  );
}

export default Footer;
