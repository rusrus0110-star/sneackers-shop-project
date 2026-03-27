import { Box, Button, Divider, TextField, Typography } from "@mui/material";

import snapchat from "../../assets/social/snapchat.png";
import facebook from "../../assets/social/facebook.png";
import xIcon from "../../assets/social/x.jpeg";

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#eaeaea",
    borderRadius: "10px",
    "& fieldset": {
      borderColor: "#eeeeee",
    },
  },
};

const Contacts = () => {
  return (
    <Box>
      <Typography variant="h4" mb={2}>
        Contacts
      </Typography>

      <Divider sx={{ mb: 5 }} />

      <Box mb={5}>
        <Typography color="text.secondary">• 8 800 000 00 00</Typography>
        <Typography color="text.secondary">• emailexample@email.com</Typography>
      </Box>

      {/* GRID */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr 1fr 260px",
          },
          gridTemplateRows: {
            xs: "auto",
            md: "auto auto",
          },
          gap: 2,
        }}
      >
        {/* EMAIL */}
        <Box sx={{ gridColumn: { xs: "1 / 2", md: "1 / 2" } }}>
          <TextField
            fullWidth
            placeholder="Your email"
            variant="outlined"
            sx={fieldSx}
          />
        </Box>

        {/* NAME */}
        <Box sx={{ gridColumn: { xs: "1 / 2", md: "2 / 3" } }}>
          <TextField
            fullWidth
            placeholder="Your name"
            variant="outlined"
            sx={fieldSx}
          />
        </Box>

        {/* MESSAGE  */}
        <Box sx={{ gridColumn: { xs: "1 / 2", md: "1 / 3" } }}>
          <TextField
            fullWidth
            placeholder="Enter your message"
            multiline
            rows={3}
            variant="outlined"
            sx={fieldSx}
          />
        </Box>

        {/* FOLLOW US  */}
        <Box
          sx={{
            gridColumn: { xs: "1 / 2", md: "3 / 4" },
            gridRow: { xs: "auto", md: "1 / 3" },
            backgroundColor: "#eaeaea",
            border: "1px solid #eeeeee",
            borderRadius: "10px",
            px: 3,
            py: { xs: 2, md: 3 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            pt: 1.5,
          }}
        >
          <Typography mb={2}>Follow us:</Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {/* SNAPCHAT */}
            <Box
              sx={{
                width: 50,
                height: 50,
                backgroundColor: "#FFFC00",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1) rotate(5deg)",
                  boxShadow: "0 4px 12px rgba(255, 252, 0, 0.4)",
                },
              }}
            >
              <Box component="img" src={snapchat} sx={{ width: 24 }} />
            </Box>

            {/* FACEBOOK */}
            <Box
              sx={{
                width: 50,
                height: 50,
                backgroundColor: "#1877F2",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1) rotate(-5deg)",
                  boxShadow: "0 4px 12px rgba(24, 119, 242, 0.4)",
                },
              }}
            >
              <Box component="img" src={facebook} sx={{ width: 24 }} />
            </Box>

            {/* X (TWITTER) */}
            <Box
              sx={{
                width: 50,
                height: 50,
                backgroundColor: "#000",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1) rotate(5deg)",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
                },
              }}
            >
              <Box component="img" src={xIcon} sx={{ width: 22 }} />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* BUTTON */}
      <Box
        sx={{
          mt: 3,
          mb: { xs: 8, md: 15 },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          sx={{
            width: { xs: "100%", sm: 200, md: 150 },
            height: 44,
            borderRadius: "10px",
            fontSize: "0.95rem",
          }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default Contacts;
