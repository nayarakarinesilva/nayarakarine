import { Box, FormControl, Grid, Snackbar } from "@mui/material";
import Input from "../../ui/Input/Input";
import TextArea from "../../ui/TextArea/TextArea";
import CustomButton from "../../ui/CustomButton/CustomButton";
import { useContactForm } from "./hook/useContactForm";

const ContactForm = ({ activeTheme }) => {
  const {
    handleChange,
    form,
    handleSubmit,
    errorMessages,
    errors,
    setTouched,
    touched,
  } = useContactForm();

  return (
    <Grid item xs={12} md={8}>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
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
        <CustomButton text="Enviar Mensagem" type="submit" />
        {/* <Snackbar
          open={open}
          autoHideDuration={6000}
          // onClose={handleClose}
          message="Mensagem enviada com sucesso"
          // action={action}
        /> */}
      </form>
    </Grid>
  );
};
export default ContactForm;
