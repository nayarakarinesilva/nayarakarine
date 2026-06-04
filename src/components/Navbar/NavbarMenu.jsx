import { List, ListItem, ListItemButton, Typography } from "@mui/material";

const NavbarMenu = ({ activeTheme, listMenu, isOpen, handleScroll }) => {
  return (
    <List
      sx={{
        display: { xs: isOpen ? "flex" : "none", md: "flex" },
        flexDirection: { xs: "column", md: "row" },
        gap: 2,
      }}
    >
      {listMenu.map((item) => (
        <ListItem key={item.name} disablePadding>
          <ListItemButton
            component="a"
            onClick={(e) => {
              e.preventDefault();
              handleScroll(item.href);
            }}
            href={item.href}
            sx={{
              letterSpacing: "0.5px",
              lineHeight: "20px",

              "& .MuiTypography-root": {
                transition: "color 0.3s ease",
              },
              "&:hover": {
                backgroundColor:
                  activeTheme === "lightTheme"
                    ? "#8325811a"
                    : "rgba(131, 37, 129, 0.25)",
                boxShadow:
                  activeTheme === "lightTheme"
                    ? "none"
                    : "0 0 12px rgba(255, 0, 255, 0.4), 0 0 24px rgba(131, 37, 129, 0.6)",
                "& .MuiTypography-root": {
                  color: "#910a67",
                  textDecoration: "underline",
                },
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "0.8rem",
                fontWeight: 700,
                color: activeTheme === "lightTheme" ? "#333" : "#FDF2F8",
              }}
            >
              {item.name}
            </Typography>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default NavbarMenu;
