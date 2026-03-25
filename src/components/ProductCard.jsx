import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  Skeleton,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ProductCard = ({ product, onAdd = () => {}, loading = false }) => {
  const [liked, setLiked] = useState(false);
  const [animate, setAnimate] = useState(false);

  // ✅ Skeleton loader (при загрузке)
  if (loading || !product) {
    return (
      <Card
        sx={{
          width: 260,
          borderRadius: 3,
          p: 2,
        }}
      >
        <Skeleton variant="rectangular" height={140} />
        <Skeleton width="80%" sx={{ mt: 2 }} />
        <Skeleton width="40%" />
      </Card>
    );
  }

  const handleAdd = () => {
    setAnimate(true);

    setTimeout(() => {
      setAnimate(false);
    }, 300);

    onAdd(product);
  };

  return (
    <Card
      sx={{
        width: 260,
        borderRadius: 3,
        p: 2,
        position: "relative",
        overflow: "hidden",
        transition: "0.3s",

        "&:hover": {
          boxShadow: 6,
        },
      }}
    >
      {/* ❤️ LIKE */}
      <IconButton
        onClick={() => setLiked((prev) => !prev)}
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          zIndex: 2,
        }}
      >
        {liked ? (
          <FavoriteIcon sx={{ color: "red" }} />
        ) : (
          <FavoriteBorderIcon />
        )}
      </IconButton>

      {/* IMAGE */}
      <Box
        component="img"
        src={product?.image || ""}
        alt={product?.name || "product"}
        sx={{
          width: "100%",
          height: 140,
          objectFit: "contain",
          transition: "0.3s",
          transform: animate ? "scale(1.1)" : "scale(1)",
        }}
      />

      <CardContent sx={{ p: "12px 0 0 0" }}>
        <Typography variant="body2" sx={{ minHeight: 40 }}>
          {product?.name}
        </Typography>

        <Typography variant="subtitle2" sx={{ mt: 1 }}>
          {product?.price} €
        </Typography>
      </CardContent>

      {/* ➕ ADD BUTTON */}
      <IconButton
        onClick={handleAdd}
        sx={{
          position: "absolute",
          bottom: 12,
          right: 12,
          width: 36,
          height: 36,
          border: "1px solid #ddd",
          backgroundColor: "#fff",
          transition: "0.2s",

          "&:hover": {
            backgroundColor: "#000",
            color: "#fff",
            borderColor: "#000",
          },
        }}
      >
        <AddIcon fontSize="small" />
      </IconButton>

      {/* 🔥 Add animation */}
      {animate && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.05)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <Typography
            sx={{
              background: "#000",
              color: "#fff",
              px: 2,
              py: 1,
              borderRadius: 2,
              fontWeight: 600,
            }}
          >
            Added
          </Typography>
        </Box>
      )}
    </Card>
  );
};

export default ProductCard;
