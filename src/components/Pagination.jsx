import { Pagination as MuiPagination, Box } from "@mui/material";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
      <MuiPagination
        count={totalPages}
        page={currentPage}
        onChange={(e, page) => onPageChange(page)}
        color="primary"
        size="large"
      />
    </Box>
  );
};

export default Pagination;
