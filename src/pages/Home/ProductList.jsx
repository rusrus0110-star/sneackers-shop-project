import { Grid, CircularProgress, Typography, Box } from "@mui/material";
import ProductCard from "../../components/ProductCard";
import useProducts from "../../features/products/useProducts";

const ProductList = () => {
  const { products, loading, addToCart } = useProducts();

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!Array.isArray(products)) {
    return <Typography mt={4}>Invalid data format</Typography>;
  }

  if (products.length === 0) {
    return <Typography mt={4}>No products found</Typography>;
  }

  return (
    <Grid container spacing={5.5} mt={1}>
      {products.map((item) => (
        <Grid item key={item.id} xs={12} sm={6} md={4}>
          <ProductCard product={item} onAdd={addToCart} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
