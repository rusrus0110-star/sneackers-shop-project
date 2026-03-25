import { Typography, TextField, Button, Box } from "@mui/material";

const Contacts = () => {
  return (
    <>
      <Typography variant="h4" mb={3}>
        Contacts
      </Typography>

      <Box
        sx={{
          maxWidth: 420,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <TextField label="Email" fullWidth />

        <TextField label="Name" fullWidth />

        <TextField label="Message" multiline rows={4} />

        <Button variant="contained">Send</Button>
      </Box>
    </>
  );
};

export default Contacts;
