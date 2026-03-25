import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 4,
        py: 2,
        textAlign: "center",
        bgcolor: "primary.main",
        color: "#fff",
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Sneaker Shop
      </Typography>
    </Box>
  );
};

export default Footer;
