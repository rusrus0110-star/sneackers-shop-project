import { Container, Grid, Typography, Box } from "@mui/material";
import useProducts from "../../features/products/useProducts";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

const Cart = () => {
  const { cartData } = useProducts();

  return (
    <Container>
      <Typography variant="h4" mt={3}>
        Cart
      </Typography>

      <Grid container spacing={3} mt={1}>
        {/* LEFT */}
        <Grid item xs={12} md={8}>
          {cartData.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          {!cartData.length && <Box mt={3}>Cart is empty</Box>}
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
