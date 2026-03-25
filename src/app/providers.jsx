import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import ProductsProvider from "../features/products/provider";

const Providers = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ProductsProvider>{children}</ProductsProvider>
    </ThemeProvider>
  );
};

export default Providers;
