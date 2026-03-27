import { Typography, Box } from "@mui/material";
import useProducts from "../../features/products/useProducts";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

const Cart = () => {
  const { cartData } = useProducts();

  return (
    <Box>
      <Typography variant="h4" fontWeight={700} mb={4}>
        Cart
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: { xs: 3, md: 4 },
          alignItems: "flex-start",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* LEFT - CART ITEMS */}
        <Box sx={{ flex: 1, width: "100%" }}>
          {cartData && cartData.length ? (
            cartData.map((item, index) => (
              <CartItem key={item?.id || index} item={item} />
            ))
          ) : (
            <Box mt={2}>Cart is empty</Box>
          )}
        </Box>

        {/* RIGHT - SUMMARY */}
        <Box sx={{ width: { xs: "100%", md: 250 }, flexShrink: 0 }}>
          <CartSummary />
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
