import { Box, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import useProducts from "../../features/products/useProducts";

const CartItem = ({ item }) => {
  const { removeFromCart } = useProducts();

  // 🔍 DEBUG
  console.log("CartItem received:", item);

  // ✅ Защита от undefined
  if (!item) {
    return <Box>Error: Item is undefined</Box>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "stretch",
        mb: 2,
        bgcolor: "#f0f0f0",
        height: 140,
      }}
    >
      {/* IMAGE */}
      <Box
        sx={{
          width: 140,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#f0f0f0",
          p: 2,
        }}
      >
        <Box
          component="img"
          src={item.image || ""}
          alt={item.name || "product"}
          sx={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
          }}
        />
      </Box>

      {/* DIVIDER */}
      <Box
        sx={{
          width: 2,
          bgcolor: "#ddd",
        }}
      />

      {/* NAME + PRICE */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          bgcolor: "#f0f0f0",
          px: 3,
        }}
      >
        {/* NAME */}
        <Typography variant="body1" fontWeight={500}>
          {item.name || "Unknown"}
        </Typography>

        {/* PRICE */}
        <Box sx={{ textAlign: "right", ml: 3, minWidth: 80 }}>
          <Typography
            variant="caption"
            color="text.secondary"
            display="block"
            sx={{ mb: 0.5 }}
          >
            PRICE:
          </Typography>
          <Typography variant="h6" fontWeight={600}>
            {item.price || 0} €
          </Typography>
        </Box>
      </Box>

      {/* DELETE BUTTON */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
          bgcolor: "#f0f0f0",
        }}
      >
        <IconButton
          onClick={() => removeFromCart(item.id)}
          sx={{
            border: "1px solid #ddd",
            bgcolor: "transparent",
            "&:hover": {
              bgcolor: "#e0e0e0",
            },
          }}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CartItem;
