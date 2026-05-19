import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#910a67",
    },
    text: {
      primary: "#111111",
      secondary: "#666666",
    },
  },
});

/*

Exmplos de importe:

<Box sx={{ color: "primary.main" }} />

<Typography color="primary">
  Projetos
</Typography>

*/
