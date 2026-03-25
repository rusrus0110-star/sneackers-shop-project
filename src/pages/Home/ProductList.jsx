import { Grid, CircularProgress, Typography } from "@mui/material";
import ProductCard from "../../components/ProductCard";
import useProducts from "../../features/products/useProducts";

const ProductList = () => {
  const { products, loading, addToCart } = useProducts();

  if (loading) {
    return <CircularProgress sx={{ mt: 4 }} />;
  }

  if (!products.length) {
    return <Typography mt={4}>No products found</Typography>;
  }

  return (
    <Grid container spacing={3} mt={1}>
      {products.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <ProductCard item={item} onAdd={addToCart} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
