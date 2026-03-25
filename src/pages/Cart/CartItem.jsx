import { Box, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import useProducts from "../../features/products/useProducts";

const CartItem = ({ item }) => {
  const { removeFromCart } = useProducts();

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        p: 2,
        mb: 2,
        bgcolor: "background.paper",
        borderRadius: 2,
      }}
    >
      <img src={item.image} width={80} />

      <Box flex={1}>
        <Typography>{item.name}</Typography>
        <Typography color="text.secondary">{item.price} €</Typography>
      </Box>

      <IconButton onClick={() => removeFromCart(item.id)}>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default CartItem;
