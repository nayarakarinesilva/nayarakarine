import { Box, Typography } from "@mui/material";
import { contactData } from "./data/contactData";

const ContactInfoItem = ({ activeTheme }) => {
  return (
    <>
      {contactData.map((item) => (
        <Box
          key={item.id}
          sx={{
            mb: 2,
            cursor: item.link ? "pointer" : "default",
            "&:hover": {
              opacity: item.link ? 0.8 : 1,
            },
          }}
          onClick={() => item.link && window.open(item.link, "_blank")}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                background: activeTheme === "lightTheme" ? "#FFF" : "#1B1C1C",
                borderRadius: "50%",
              }}
            >
              {item.icon}
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: activeTheme === "lightTheme" ? "#333" : "#FDF2F8",
                fontWeight: 600,
              }}
            >
              {item.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default ContactInfoItem;
