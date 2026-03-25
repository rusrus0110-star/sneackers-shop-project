import { Container, TextField, Button, Typography, Box } from "@mui/material";

const Contacts = () => {
  return (
    <Container>
      <Typography variant="h4" mt={3}>
        Contact Us
      </Typography>

      <Box mt={3} display="flex" flexDirection="column" gap={2} maxWidth={400}>
        <TextField label="Email" fullWidth />
        <TextField label="Name" fullWidth />
        <TextField label="Message" multiline rows={4} />

        <Button variant="contained">Send</Button>
      </Box>
    </Container>
  );
};

export default Contacts;
