import { Box, Typography, Divider } from "@mui/material";
import useProducts from "../../features/products/useProducts";

const CartSummary = () => {
  const { totalPrice, cartData } = useProducts();

  console.log("CartSummary - cartData:", cartData);

  return (
    <Box
      sx={{
        p: 4,
        bgcolor: "#f0f0f0",
      }}
    >
      <Typography variant="h5" fontWeight={700} mb={3}>
        Summary
      </Typography>

      {/* ITEMS LIST */}
      <Box sx={{ mb: 3 }}>
        {cartData && cartData.length > 0 ? (
          cartData.map((item) => (
            <Typography
              key={item?.id}
              variant="body2"
              color="text.secondary"
              mb={1}
            >
              {item?.name || "Unknown item"}
            </Typography>
          ))
        ) : (
          <Typography variant="body2" color="text.secondary">
            No items
          </Typography>
        )}
      </Box>

      {/* DIVIDER */}
      <Divider sx={{ my: 3, borderColor: "#000" }} />

      {/* TOTAL */}
      <Box>
        <Typography
          variant="caption"
          color="text.secondary"
          display="block"
          sx={{ mb: 1 }}
        >
          PRICE:
        </Typography>
        <Typography variant="h5" fontWeight={700}>
          {totalPrice || 0} €
        </Typography>
      </Box>
    </Box>
  );
};

export default CartSummary;
