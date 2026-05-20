import React, { useState } from "react";
import styles from "./Contact.module.css";
import Title from "../../ui/Title/Title";
import { Box, Button, Card, Grid, TextField, Typography } from "@mui/material";
import Input from "../../ui/Input/Input";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Description } from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CustomButton from "../../ui/CustomButton/CustomButton";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailMessage = `Nome: ${name}\nE-mail: ${email}\nMensagem: ${message}`;

    sendEmail(emailMessage);
    clearFormFields();
  };

  const sendEmail = (message) => {
    // Ajuste aqui
    const form = new FormData();
    form.append("message", message);

    fetch("https://formspree.io/f/meqyyezp", {
      method: "POST",
      body: form,
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((data) => {
            throw new Error(data.error || "Erro ao enviar a mensagem.");
          });
        }
      })
      .catch((error) => {
        console.error("Erro:", error);
        alert("Mensagem enviada com sucesso!");
      });
  };

  const clearFormFields = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const listContact = [
    {
      id: "email",
      icon: <EmailOutlinedIcon style={{ color: "#910a67" }} fontSize="small" />,
      description: "nayarakarine.@gmail.com",
    },
    {
      id: "address",
      icon: (
        <LocationOnOutlinedIcon style={{ color: "#910a67" }} fontSize="small" />
      ),
      description: "Campinas, SP - Brasil",
    },
    {
      id: "linkedin",
      icon: <LinkedInIcon style={{ color: "#910a67" }} fontSize="small" />,
      description: "linkedin.com/in/nayarakarine",
    },
    {
      id: "github",
      icon: <GitHubIcon style={{ color: "#910a67" }} fontSize="small" />,
      description: "github.com/nayarakarinesilva",
    },
  ];

  return (
    <Box
      sx={{
        padding: "30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "80px",
      }}
    >
      {/* <Title text="Contato" /> */}
      <Card
        sx={{
          width: "1000px",
          height: "410px",
          padding: "20px",
          borderRadius: "40px",
          boxShadow: "none",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          background: `linear-gradient(
                        135deg,
                      #FDF2F8,
                      #FBF3F9,
                      #F5F4FC,
                      #F0F6FE,
                      #EFF6FF
                      )`,
        }}
      >
        <Grid container spacing={6} p={2}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="subtitle2"
              sx={{
                color: "#666666",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              Vamos Conversar?
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, color: "#333", mb: 2 }}
            >
              Entre em contato
            </Typography>
            <Typography
              sx={{
                color: "#666666",
                mb: 5,
                fontSize: "14px",
              }}
            >
              Estou disponível para novos projetos e oportunidades.
            </Typography>
            {listContact.map((item) => (
              <Box key={item.id} sx={{ mb: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "40px",
                      height: "40px",
                      background: "#fff",
                      borderRadius: "50%",
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#333",

                      fontWeight: 600,
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Grid>
          <Grid item xs={12} md={8}>
            <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
              <Input text="Nome" />
              <Input text="E-mail" />
            </Box>
            <Box
              sx={{ width: "100%", display: "flex", flexDirection: "column" }}
            >
              <Input text="Assunto" />

              <TextField
                fullWidth
                label="Mensagem"
                multiline
                rows={6}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "12px",

                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",

                    // sem borda normal
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },

                    // borda apenas no focus
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      border: "2px solid #910a67",
                    },
                  },

                  "& .MuiInputLabel-root": {
                    color: "#c0c0c0",
                  },

                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#910a67",
                  },
                }}
              />
            </Box>
            <CustomButton text="Enviar Mensagem" />
          </Grid>
        </Grid>
      </Card>
      {/* <section>
        <h2>Entre em Contato</h2>
        <p>
          Estou disponível para novos projetos e oportunidades. Sinta-se à
          vontade para entrar em contato comigo!
        </p>
        <form id="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Seu Nome"
            required
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu Email"
            required
          />
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Sua Mensagem"
            required
          ></textarea>
          <button type="submit">Enviar Mensagem</button>
        </form>
      </section> */}
    </Box>
  );
}
