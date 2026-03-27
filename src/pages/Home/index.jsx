import { Typography, Box } from "@mui/material";
import Hero from "./Hero";
import ProductList from "./ProductList";

const Home = () => {
  return (
    <>
      <Hero />

      <Box mt={4}>
        <Typography variant="h4" fontWeight={700}>
          Products
        </Typography>

        <ProductList />
      </Box>
    </>
  );
};

export default Home;
