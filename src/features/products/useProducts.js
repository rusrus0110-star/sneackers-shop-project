import { useContext } from "react";
import ProductsContext from "./context";

const useProducts = () => {
  const context = useContext(ProductsContext);

  if (context === null) {
    throw new Error("useProducts must be used within ProductsProvider");
  }

  return context;
};

export default useProducts;
