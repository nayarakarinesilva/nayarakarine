import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";

const CardSkillInfo = ({ image, text, alt }) => {
  const { activeTheme } = useContext(GlobalContext);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <img width={40} src={image} alt={alt} />
      <Typography
        variant="subtitle2"
        sx={{
          fontWeight: 600,
          color: activeTheme === "lightTheme" ? "#333333" : "#FDF2F8",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default CardSkillInfo;
