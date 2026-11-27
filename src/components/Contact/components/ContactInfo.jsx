import { Grid, Typography } from "@mui/material";
import ContactInfoItem from "./ContactInfoItem";

const ContactInfo = ({ activeTheme }) => {
  return (
    <Grid item xs={12} md={4}>
      <Typography
        variant="subtitle2"
        sx={{
          color: activeTheme === "lightTheme" ? "#666666" : "#FDF2F8",
          textTransform: "uppercase",
          fontWeight: 700,
        }}
      >
        Vamos Conversar?
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 600,
          color: activeTheme === "lightTheme" ? "#333" : "#FDF2F8",
          mb: 2,
        }}
      >
        Entre em contato
      </Typography>
      <Typography
        sx={{
          color: activeTheme === "lightTheme" ? "#666666" : "#FDF2F8",
          mb: 5,
          fontSize: "14px",
        }}
      >
        Estou disponível para novos projetos e oportunidades.
      </Typography>
      <ContactInfoItem activeTheme={activeTheme} />
    </Grid>
  );
};
export default ContactInfo;
