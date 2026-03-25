import { Container, Typography, Box } from "@mui/material";
import Hero from "./Hero";
import ProductList from "./ProductList";

const Home = () => {
  return (
    <Container>
      <Hero />

      <Box mt={4}>
        <Typography variant="h5" fontWeight="600">
          Products
        </Typography>

        <ProductList />
      </Box>
    </Container>
  );
};

export default Home;
