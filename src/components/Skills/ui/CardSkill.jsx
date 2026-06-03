import { Box, Typography } from "@mui/material";
const CardSkill = ({ children, icon: Icon, title, activeTheme }) => {
  return (
    <Box
      sx={{
        padding: "20px",
        minHeight: { xs: "auto", sm: "300px" },
        border:
          activeTheme === "lightTheme"
            ? "solid 1px #F3F4F6"
            : "solid 1px #910a67",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08);",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "15px",
          marginBottom:"25px"
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#FCE7F3",
            width: 36,
            height: 36,
            borderRadius: "8px",
            color: "#DB2777",
          }}
        >
          <Icon fontSize="medium" />
        </Box>
        <Typography
          sx={{
            color: activeTheme === "lightTheme" ? "#333333" : "#FDF2F8",
            fontWeight: 600,
            textTransform: "uppercase",
          }}
        >
          {title}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
          },
          justifyItems: "center",
          gap: { xs: 1.5, md: 2 },
          p: { xs: 2, md: 3 },
          color: "#6B7280",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default CardSkill;
