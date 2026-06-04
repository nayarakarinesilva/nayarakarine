import {
  ListItem,
  ListItemButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useState } from "react";

const NavbarMobileMenu = ({
  activeTheme,
  listMenu,
  handleClose,
  anchorEl,
  handleScroll,
}) => {
  const open = Boolean(anchorEl);

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      disableScrollLock
      slotProps={{
        paper: {
          sx: {
            mt: 1,
            backgroundColor: activeTheme === "lightTheme" ? "#fff" : "#1B1C1C",
            color: activeTheme === "lightTheme" ? "#333" : "#FDF2F8",
          },
        },
      }}
    >
      {listMenu.map((item) => (
        <MenuItem
          key={item.name}
          component="a"
          href={item.href}
          onClick={(e) => {
            e.preventDefault();
            handleClose();

            setTimeout(() => {
              //Quando menu fechar ele vai até o item do href
              handleScroll(item.href);
            }, 100);
          }}
          sx={{
            color: activeTheme === "lightTheme" ? "#333" : "#FDF2F8",

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
          {item.name}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default NavbarMobileMenu;
