import { Box, FormControl, Grid, Snackbar, Typography } from "@mui/material";
import Input from "../../ui/Input/Input";
import TextArea from "../../ui/TextArea/TextArea";
import CustomButton from "../../ui/CustomButton/CustomButton";
import { useContactForm } from "./hook/useContactForm";
import { Alert } from "@mui/material";

const ContactForm = ({ activeTheme }) => {
  const {
    handleChange,
    form,
    handleSubmit,
    errorMessages,
    errors,
    setTouched,
    touched,
    isMessageSent,
  } = useContactForm();

  return (
    <Grid item xs={12} md={8}>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            width: "100%",
          }}
        >
          <Input
            name="name"
            value={form.name}
            onChange={handleChange}
            text="Nome"
            activeTheme={activeTheme}
            error={touched.name && errors.name}
            helperText={touched.name && errors.name ? errorMessages.name : ""}
            onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
          />
          <Input
            name="email"
            value={form.email}
            onChange={handleChange}
            text="E-mail"
            activeTheme={activeTheme}
            error={touched.email && errors.email}
            helperText={touched.email && errors.email && errorMessages.email}
            onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
          />
        </Box>
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
          <Input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            text="Assunto"
            activeTheme={activeTheme}
            error={touched.subject && errors.subject}
            helperText={
              touched.subject && errors.subject && errorMessages.subject
            }
            onBlur={() => setTouched((prev) => ({ ...prev, subject: true }))}
          />

          <TextArea
            name="message"
            value={form.message}
            onChange={handleChange}
            text="Mensagem"
            activeTheme={activeTheme}
            error={touched.message && errors.message}
            helperText={
              touched.message && errors.message && errorMessages.message
            }
            onBlur={() => setTouched((prev) => ({ ...prev, message: true }))}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <CustomButton text="Enviar Mensagem" type="submit" />
          <Box>
            {isMessageSent && (
              <Alert severity="success">Mensagem enviada com sucesso!</Alert>
            )}
          </Box>
        </Box>
      </form>
    </Grid>
  );
};
export default ContactForm;
