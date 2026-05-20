import { TextField } from "@mui/material";

const Input = ({ text }) => {
  return (
    <TextField
      label={text}
      sx={{
        flex: 1,
        backgroundColor: "#fff",
        borderRadius: "12px",
        mb: "20px",

        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
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
