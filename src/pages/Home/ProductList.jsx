import { Grid, CircularProgress, Typography, Box } from "@mui/material";
import ProductCard from "../../components/ProductCard";
import useProducts from "../../features/products/useProducts";

const ProductList = () => {
  const { products, loading, addToCart } = useProducts();

  console.log("🎨 ProductList render:", {
    loading,
    productsCount: products?.length,
  });

  // 🔥 1. Loading
  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
        <CircularProgress />
      </Box>
    );
  }

  // 🔥 2. Защита от undefined
  if (!Array.isArray(products)) {
    return <Typography mt={4}>Ошибка данных</Typography>;
  }

  // 🔥 3. Пустой список
  if (products.length === 0) {
    return <Typography mt={4}>No products found</Typography>;
  }

  // 🔥 4. Рендер
  return (
    <Grid container spacing={3} mt={1}>
      {products.map((item) => (
        <Grid key={item.id} xs={12} sm={6} md={4}>
          <ProductCard product={item} onAdd={addToCart} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
