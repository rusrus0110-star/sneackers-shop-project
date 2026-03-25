import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
  textDecoration: "none",
  color: "#fff",
  borderBottom: isActive ? "2px solid white" : "none",
});

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6">Sneaker Shop</Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <NavLink to="/" style={linkStyle}>
            <Button color="inherit">Home</Button>
          </NavLink>

          <NavLink to="/cart" style={linkStyle}>
            <Button color="inherit">Cart</Button>
          </NavLink>

          <NavLink to="/contacts" style={linkStyle}>
            <Button color="inherit">Contacts</Button>
          </NavLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
