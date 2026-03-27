import { Box, Typography, Button, Chip, Stack, Slider } from "@mui/material";
import { useMemo } from "react";

const FilterPanel = ({ filters, onFilterChange, onReset, products }) => {
  const genders = ["All", "Men", "Women"];

  // Calculate max price from products using useMemo
  const maxPrice = useMemo(() => {
    if (products && Array.isArray(products) && products.length > 0) {
      const prices = products
        .map((p) => parseFloat(p.price))
        .filter((p) => !isNaN(p));
      return Math.ceil(Math.max(...prices));
    }
    return 500;
  }, [products]);

  // Derive priceRange directly from filters (no local state sync needed)
  const priceRange = [
    filters.minPrice !== undefined && filters.minPrice !== null
      ? filters.minPrice
      : 0,
    filters.maxPrice !== undefined && filters.maxPrice !== null
      ? filters.maxPrice
      : maxPrice,
  ];

  const handlePriceChange = (event, newValue) => {
    onFilterChange("minPrice", newValue[0]);
    onFilterChange("maxPrice", newValue[1]);
  };

  const handleResetLocal = () => {
    onReset();
  };

  return (
    <Box
      sx={{
        background:
          "linear-gradient(90deg, #a8b8d8 0%, #8a9ec0 40%, #e5e5e5 70%, #d0d0d0 100%)",
        borderRadius: 2,
        p: { xs: 2.5, md: 3 },
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        mb: 4,
        mt: { xs: 4, md: 8 },
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "stretch", md: "center" },
          justifyContent: { md: "space-between" },
          gap: { xs: 3, md: 4 },
        }}
      >
        {/* Filter Title + Reset Button (mobile: horizontal, desktop: separate) */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            order: { xs: 1, md: 1 },
          }}
        >
          <Typography
            variant="h6"
            fontWeight={600}
            sx={{
              color: "#fff",
              textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
            }}
          >
            Filters
          </Typography>

          {/* Reset Button - visible on mobile */}
          <Button
            variant="contained"
            size="small"
            onClick={handleResetLocal}
            sx={{
              display: { xs: "flex", md: "none" },
              backgroundColor: "#555",
              color: "#fff",
              fontWeight: 600,
              px: 2.5,
              "&:hover": {
                backgroundColor: "#666",
                transform: "translateY(-2px)",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              },
              transition: "all 0.2s",
            }}
          >
            Reset
          </Button>
        </Box>

        {/* Price Range */}
        <Box
          sx={{
            flex: { md: "1 1 300px" },
            minWidth: { md: 250 },
            order: { xs: 2, md: 2 },
          }}
        >
          <Typography
            variant="subtitle2"
            fontWeight={600}
            mb={1}
            sx={{ color: "#fff" }}
          >
            Price Range
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Slider
              value={priceRange}
              onChange={handlePriceChange}
              valueLabelDisplay="auto"
              min={0}
              max={maxPrice}
              valueLabelFormat={(value) => `€${value}`}
              sx={{
                flex: 1,
                color: "#fff",
                "& .MuiSlider-thumb": {
                  backgroundColor: "#fff",
                  border: "2px solid #8a9ec0",
                },
                "& .MuiSlider-track": {
                  backgroundColor: "#fff",
                },
                "& .MuiSlider-rail": {
                  backgroundColor: "rgba(255,255,255,0.4)",
                },
              }}
            />
            <Typography
              variant="body2"
              fontWeight={600}
              sx={{
                minWidth: { xs: 70, sm: 80 },
                color: "#fff",
                fontSize: { xs: "0.8rem", sm: "0.875rem" },
              }}
            >
              €{priceRange[0]} - €{priceRange[1]}
            </Typography>
          </Box>
        </Box>

        {/* Gender Filter */}
        <Box
          sx={{
            flex: { md: "0 0 auto" },
            order: { xs: 3, md: 3 },
          }}
        >
          <Typography
            variant="subtitle2"
            fontWeight={600}
            mb={1}
            sx={{ color: { xs: "#fff", md: "#555" } }}
          >
            Gender
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            sx={{
              flexWrap: { xs: "wrap", sm: "nowrap" },
              gap: { xs: 1, sm: 0 },
            }}
          >
            {genders.map((gender) => (
              <Chip
                key={gender}
                label={gender}
                onClick={() => onFilterChange("gender", gender)}
                sx={{
                  backgroundColor:
                    filters.gender === gender
                      ? "#fff"
                      : "rgba(255,255,255,0.6)",
                  color: filters.gender === gender ? "#8a9ec0" : "#666",
                  fontWeight: 600,
                  border:
                    filters.gender === gender
                      ? "2px solid #8a9ec0"
                      : "2px solid transparent",
                  flex: { xs: "1 1 auto", sm: "0 0 auto" },
                  minWidth: { xs: "calc(33.333% - 8px)", sm: "auto" },
                  "&:hover": {
                    backgroundColor:
                      filters.gender === gender
                        ? "#fff"
                        : "rgba(255,255,255,0.8)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.2s",
                }}
              />
            ))}
          </Stack>
        </Box>

        {/* Reset Button - visible on desktop */}
        <Button
          variant="contained"
          size="small"
          onClick={handleResetLocal}
          sx={{
            display: { xs: "none", md: "flex" },
            alignSelf: "flex-end",
            backgroundColor: "#555",
            color: "#fff",
            fontWeight: 600,
            px: 2.5,
            order: 4,
            "&:hover": {
              backgroundColor: "#666",
              transform: "translateY(-2px)",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            },
            transition: "all 0.2s",
          }}
        >
          Reset
        </Button>
      </Box>
    </Box>
  );
};

export default FilterPanel;
