import { Box, Typography, Button } from "@mui/material";
import useProducts from "../../features/products/useProducts";

const CartSummary = () => {
  const { totalPrice } = useProducts();

  return (
    <Box
      sx={{
        p: 3,
        bgcolor: "background.paper",
        borderRadius: 2,
      }}
    >
      <Typography variant="h6">Summary</Typography>

      <Typography mt={2}>Total: {totalPrice} €</Typography>

      <Button fullWidth variant="contained" sx={{ mt: 2 }}>
        Checkout
      </Button>
    </Box>
  );
};

export default CartSummary;
