import { Container, Box } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />

      <Container maxWidth="lg">
        <Box sx={{ minHeight: "80vh", py: 3 }}>
          <Outlet />
        </Box>
      </Container>

      <Footer />
    </>
  );
};

export default Layout;
