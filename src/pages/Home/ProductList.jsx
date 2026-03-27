import { CircularProgress, Typography, Box } from "@mui/material";
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
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: { xs: 2, sm: 3, md: 6.5 },
        mt: 1,
        width: "100%",
      }}
    >
      {products.map((item) => (
        <ProductCard key={item.id} product={item} onAdd={addToCart} />
      ))}
    </Box>
  );
};

export default ProductList;
