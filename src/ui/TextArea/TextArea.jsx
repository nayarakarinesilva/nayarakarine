import { TextField } from "@mui/material";

const TextArea = ({ text, activeTheme }) => {
  return (
    <TextField
      fullWidth
      label={text}
      variant="filled"
      multiline
      rows={6}
      sx={{
        borderRadius: "12px",

        "& .MuiFilledInput-root": {
          backgroundColor: activeTheme === "lightTheme" ? "#FFF" : "#1B1C1C",

          borderRadius: "12px",

          "&:hover": {
            backgroundColor: activeTheme === "lightTheme" ? "#FFF" : "#1B1C1C",
          },

          "&.Mui-focused": {
            backgroundColor: activeTheme === "lightTheme" ? "#FFF" : "#1B1C1C",
          },

          "&:before": {
            borderBottom: "none",
          },

          "&:hover:not(.Mui-disabled):before": {
            borderBottom: "2px solid #910a67",
          },

          "&:after": {
            borderBottom: "2px solid #910a67",
          },
        },

        "& .MuiInputLabel-root.Mui-focused": {
          color: "#910a67",
        },

        "& .MuiInputLabel-root": {
          color: "#c0c0c0",
        },

        "& .MuiFilledInput-input": {
          color: activeTheme === "lightTheme" ? "#333" : "#fff",
        },
      }}
    />
  );
};

export default TextArea;
