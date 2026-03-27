import { Grid, Typography, Box, Container } from "@mui/material";
import useProducts from "../../features/products/useProducts";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

const Cart = () => {
  const { cartData } = useProducts();

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" mb={3}>
        Cart
      </Typography>

      <Grid container spacing={3}>
        {/* LEFT */}
        <Grid item xs={12} md={8}>
          {cartData.length ? (
            cartData.map((item) => <CartItem key={item.id} item={item} />)
          ) : (
            <Box mt={2}>Cart is empty</Box>
          )}
        </Grid>

        {/* RIGHT */}
        <Grid item xs={12} md={4}>
          <CartSummary />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;
