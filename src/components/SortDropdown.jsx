import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const SortDropdown = ({ sortBy, onSortChange }) => {
  return (
    <FormControl sx={{ minWidth: 200 }} size="small">
      <InputLabel>Sort by</InputLabel>
      <Select
        value={sortBy}
        label="Sort by"
        onChange={(e) => onSortChange(e.target.value)}
      >
        <MenuItem value="default">Best Selling</MenuItem>
        <MenuItem value="price-asc">Price: Low to High</MenuItem>
        <MenuItem value="price-desc">Price: High to Low</MenuItem>
        <MenuItem value="name-asc">Name: A to Z</MenuItem>
        <MenuItem value="name-desc">Name: Z to A</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortDropdown;
