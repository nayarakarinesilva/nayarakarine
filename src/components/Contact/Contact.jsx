import React, { useState, useContext } from "react";
import { Box, Card, Grid } from "@mui/material";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import { GlobalContext } from "../../context/GlobalContext";

const Contact = () => {
  const { activeTheme } = useContext(GlobalContext);

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
          width: {
            xs: "100%",
            md: "1000px",
          },
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
        <Grid container spacing={{ xs: 3, md: 6 }} p={{ xs: 1, md: 2 }}>
          {/* Informações */}
          <ContactInfo activeTheme={activeTheme} />

          {/* Form */}
          <ContactForm activeTheme={activeTheme} />
        </Grid>
      </Card>
    </Box>
  );
};
export default Contact;
