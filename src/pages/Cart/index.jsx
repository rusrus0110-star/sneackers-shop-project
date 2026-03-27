import { Typography, Box } from "@mui/material";
import useProducts from "../../features/products/useProducts";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

const Cart = () => {
  const { cartData } = useProducts();

  // 🔍 DEBUG
  console.log("Cart - cartData:", cartData);
  console.log("Cart - cartData.length:", cartData.length);

  return (
    <Box>
      <Typography variant="h4" fontWeight={700} mb={4}>
        Cart
      </Typography>

      <Box sx={{ display: "flex", gap: 4, alignItems: "flex-start" }}>
        {/* LEFT - CART ITEMS */}
        <Box sx={{ flex: 1 }}>
          {cartData && cartData.length ? (
            cartData.map((item, index) => {
              console.log(`Rendering item ${index}:`, item);
              return <CartItem key={item?.id || index} item={item} />;
            })
          ) : (
            <Box mt={2}>Cart is empty</Box>
          )}
        </Box>

        {/* RIGHT - SUMMARY */}
        <Box sx={{ width: 250, flexShrink: 0 }}>
          <CartSummary />
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
