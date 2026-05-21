import { Box, Grid } from "@mui/material";
import Input from "../../ui/Input/Input";
import TextArea from "../../ui/TextArea/TextArea";
import CustomButton from "../../ui/CustomButton/CustomButton";


const ContactForm = ({ activeTheme }) => {
  return (
    <Grid item xs={12} md={8}>
      <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
        <Input text="Nome" activeTheme={activeTheme} />
        <Input text="E-mail" activeTheme={activeTheme} />
      </Box>
      <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <Input text="Assunto" activeTheme={activeTheme} />

        <TextArea text="Mensagem" activeTheme={activeTheme} />
      </Box>
      <CustomButton text="Enviar Mensagem" />
    </Grid>
  );
};
export default ContactForm;
