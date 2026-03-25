import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  IconButton,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const ProductCard = ({ item, onAdd }) => {
  return (
    <Card
      sx={{
        transition: "0.2s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        component="img"
        height="160"
        image={item.image}
        alt={item.name}
      />

      <CardContent>
        <Typography variant="h6" noWrap>
          {item.name}
        </Typography>

        <Typography color="text.secondary">{item.price} €</Typography>

        <Box display="flex" justifyContent="flex-end">
          <IconButton onClick={() => onAdd(item)} color="primary">
            <AddIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
