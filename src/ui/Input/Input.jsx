import { TextField } from "@mui/material";

const Input = ({ text }) => {
  return (
    <TextField
      label={text}
      variant="outlined"
      sx={{
        flex: 1,
        backgroundColor: "#fff",
        borderRadius: "12px",
        mb: "20px",

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
  );
};

export default Input;
