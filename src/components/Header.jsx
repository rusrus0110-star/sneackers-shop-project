import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const navStyle = ({ isActive }) => ({
  textDecoration: "none",
  color: isActive ? "#ffffff" : "rgba(255,255,255,0.5)",
});

const Header = () => {
  return (
    <AppBar position="static" color="primary" elevation={0}>
      <Container>
        {" "}
        {/* ← УБРАЛ maxWidth="lg" */}
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5">Sneakers Store</Typography>

          <Box sx={{ display: "flex", gap: 3 }}>
            <NavLink to="/" end style={navStyle}>
              <Button sx={{ color: "inherit" }}>Home</Button>
            </NavLink>

            <NavLink to="/cart" style={navStyle}>
              <Button sx={{ color: "inherit" }}>Cart</Button>
            </NavLink>

            <NavLink to="/contacts" style={navStyle}>
              <Button sx={{ color: "inherit" }}>Contacts</Button>
            </NavLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
