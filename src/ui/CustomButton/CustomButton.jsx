import { Button } from "@mui/material";

const CustomButton = ({ text, variant = "contained", onClick, ...props }) => {
  const styles = {
    contained: {
      backgroundColor: "#910A67",
      "&:hover": {
        backgroundColor: "#910a67",
        boxShadow:
          "0 0 12px rgba(255, 0, 255, 0.4), 0 0 24px rgba(131, 37, 129, 0.6)",
      },
    },

    outlined: {
      border: "solid 2px #910a67",
      color: "#910a67",

      "&:hover": {
        boxShadow:
          "0 0 12px rgba(255, 0, 255, 0.4), 0 0 24px rgba(131, 37, 129, 0.6)",
        border: "solid 2px #910a67",
      },
    },
  };

  return (
    <Button
      variant={variant}
      onClick={onClick}
      sx={{
        width: "248px",
        height: "50px",
        fontSize: "14px",
        fontWeight: 600,
        textTransform: "uppercase",
        borderRadius: "12px",
        mt: 2,
        ...styles[variant],
      }}
      {...props}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
