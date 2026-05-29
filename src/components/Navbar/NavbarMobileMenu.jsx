import {
  ListItem,
  ListItemButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useState } from "react";

const NavbarMobileMenu = ({ activeTheme, listMenu, handleClose, anchorEl }) => {
  const open = Boolean(anchorEl);

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      disableScrollLock
      sx={{
        mt: 1,
        zIndex: 1300,
        left:"10px"
      }}
    >
      {listMenu.map((item) => (
        <MenuItem
          key={item.name}
          component="a"
          href={item.href}
          onClick={handleClose}
        >
          {item.name}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default NavbarMobileMenu;
