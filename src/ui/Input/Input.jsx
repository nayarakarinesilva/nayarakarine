import { TextField } from "@mui/material";

const Input = ({
  text,
  activeTheme,
  onChange,
  value,
  name,
  error,
  helperText,
  onBlur
}) => {

  return (
    <TextField
      name={name}
      value={value}
      onChange={onChange}
      label={text}
      error={error}
      helperText={helperText}
      onBlur={onBlur}
      variant="filled"
      sx={{
        flex: 1,
        borderRadius: "12px",
        mb: "20px",

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

        "& .MuiInputLabel-root": {
          color: "#c0c0c0",
        },

        "& .MuiInputLabel-root.Mui-focused": {
          color: "#910a67",
        },

        "& .MuiFilledInput-input": {
          color: activeTheme === "lightTheme" ? "#333" : "#fff",
        },
      }}
    />
  );
};

export default Input;
