import { Typography } from "@mui/material";

const Title = ({ text }) => {
  return (
    <Typography
      variant="h4"
      sx={{ textAlign: "center", fontWeight: 600, mb: 3, color: "#7eacb5" }}
    >
      {text}
    </Typography>
  );
};
export default Title;
