import { Autocomplete, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useMemo } from "react";

const SearchBar = ({ searchTerm, onSearchChange, products }) => {
  // Extract unique brands from products
  const brands = useMemo(() => {
    if (!products || !Array.isArray(products)) return [];

    const brandSet = new Set();
    const knownBrands = [
      "Nike",
      "Adidas",
      "Puma",
      "New Balance",
      "Reebok",
      "Converse",
      "Under Armour",
      "Asics",
      "Vans",
      "Saucony",
      "Hoka",
    ];

    products.forEach((product) => {
      const name = product.name || "";
      knownBrands.forEach((brand) => {
        if (name.includes(brand)) brandSet.add(brand);
      });
    });

    return Array.from(brandSet).sort();
  }, [products]);

  return (
    <Autocomplete
      freeSolo
      options={brands}
      value={searchTerm}
      onInputChange={(event, newValue) => {
        onSearchChange(newValue || "");
      }}
      sx={{ flex: 1, maxWidth: 500 }}
      size="small"
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Search by brand..."
          size="small"
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <>
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
                {params.InputProps.startAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};

export default SearchBar;
