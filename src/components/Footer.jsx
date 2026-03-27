import { Box, Typography, Container, TextField } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "#fff",
        mt: 8,
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        {/* TOP */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 4,
          }}
        >
          {/* LEFT */}
          <Box>
            <Typography variant="h6" mb={1}>
              Contacts
            </Typography>

            <Typography variant="body2" color="text.secondary">
              8 800 000 00 00
            </Typography>

            <Typography variant="body2" color="text.secondary">
              emailexample@email.com
            </Typography>
          </Box>

          {/* RIGHT */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
          </Box>
        </Box>

        {/* BOTTOM */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            2024 Sneaker Store. All rights reserved
          </Typography>

          <TextField
            variant="standard"
            placeholder="Enter your email"
            fullWidth
            InputProps={{
              disableUnderline: false,
              sx: {
                color: "#fff",

                "&:before": {
                  borderBottom: "1px solid rgba(255,255,255,0.3)",
                },

                "&:hover:not(.Mui-disabled):before": {
                  borderBottom: "1px solid rgba(255,255,255,0.5)",
                },

                "&:after": {
                  borderBottom: "1px solid #ffffff",
                },
              },
            }}
            inputProps={{
              style: {
                color: "#fff",
              },
            }}
            sx={{
              width: 250,

              "& input::placeholder": {
                color: "rgba(255,255,255,0.5)",
                opacity: 1,
              },
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
