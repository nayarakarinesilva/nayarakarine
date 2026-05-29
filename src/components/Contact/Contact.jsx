import React, { useState } from "react";
import { Box, Card, Grid } from "@mui/material";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = ({ activeTheme }) => {

  return (
    <Box
      sx={{
        padding: "30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "80px",
        marginBottom: "80px",
      }}
    >
      <Card
        sx={{
          width: "1000px",
          height: "auto",
          padding: "20px",
          borderRadius: "40px",
          boxShadow: "none",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          border: activeTheme === "lightTheme" ? "none" : "solid 1px #910a67",
          background:
            activeTheme === "lightTheme"
              ? `linear-gradient(
                        135deg,
                      #FDF2F8,
                      #FBF3F9,
                      #F5F4FC,
                      #F0F6FE,
                      #EFF6FF
                      )`
              : "#910a6721",
        }}
      >
        <Grid container spacing={6} p={2}>
          {/* Informações */}
          <ContactInfo activeTheme={activeTheme} />

          {/* Form */}
          <ContactForm activeTheme={activeTheme} />
        </Grid>
      </Card>

      {/* FAZER A LÓGICA DOS INPUTS */}

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
};
export default Contact;
