import {
  Box,
  Typography,
  Container,
  TextField,
  IconButton,
} from "@mui/material";
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
        py: { xs: 4, md: 6 },
      }}
    >
      <Container>
        {/* TOP */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 4,
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 3, sm: 0 },
          }}
        >
          {/* LEFT */}
          <Box>
            <Typography variant="h6" mb={1}>
              Contacts
            </Typography>

            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
              8 800 000 00 00
            </Typography>

            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
              emailexample@email.com
            </Typography>
          </Box>

          {/* RIGHT */}
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton
              sx={{
                color: "#fff",
                transition: "0.3s",
                "&:hover": {
                  color: "#1877f2",
                  transform: "scale(1.1)",
                },
              }}
            >
              <FacebookIcon />
            </IconButton>

            <IconButton
              sx={{
                color: "#fff",
                transition: "0.3s",
                "&:hover": {
                  color: "#1da1f2",
                  transform: "scale(1.1)",
                },
              }}
            >
              <TwitterIcon />
            </IconButton>

            <IconButton
              sx={{
                color: "#fff",
                transition: "0.3s",
                "&:hover": {
                  color: "#e4405f",
                  transform: "scale(1.1)",
                },
              }}
            >
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>

        {/* BOTTOM */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 3, md: 0 },
          }}
        >
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
            2024 Sneakers Store. All rights reserved
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
              width: { xs: "100%", md: 250 },

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
