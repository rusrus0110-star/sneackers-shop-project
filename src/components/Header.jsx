import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
  IconButton,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const navStyle = ({ isActive }) => ({
  textDecoration: "none",
  color: isActive ? "#ffffff" : "rgba(255,255,255,0.5)",
});

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "flex-start", md: "center" },
      }}
    >
      <NavLink to="/" end style={navStyle} onClick={() => setMobileOpen(false)}>
        <Button sx={{ color: "inherit" }}>Home</Button>
      </NavLink>

      <NavLink to="/cart" style={navStyle} onClick={() => setMobileOpen(false)}>
        <Button sx={{ color: "inherit" }}>Cart</Button>
      </NavLink>

      <NavLink
        to="/contacts"
        style={navStyle}
        onClick={() => setMobileOpen(false)}
      >
        <Button sx={{ color: "inherit" }}>Contacts</Button>
      </NavLink>
    </Box>
  );

  return (
    <AppBar position="static" color="primary" elevation={0}>
      <Container>
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "1.25rem", md: "1.5rem" },
            }}
          >
            Sneakers Store
          </Typography>

          {/* DESKTOP NAV */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>{navLinks}</Box>

          {/* MOBILE MENU BUTTON */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* MOBILE DRAWER */}
          <Drawer
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": {
                width: 250,
                bgcolor: "primary.main",
                color: "#fff",
                p: 3,
              },
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
              <IconButton color="inherit" onClick={handleDrawerToggle}>
                <CloseIcon />
              </IconButton>
            </Box>
            {navLinks}
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
