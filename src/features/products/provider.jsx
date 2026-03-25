import { useEffect, useState, useCallback } from "react";
import ProductsContext from "./context";
import {
  fetchProductsApi,
  fetchCartApi,
  addToCartApi,
  deleteFromCartApi,
} from "./api";

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadData = useCallback(async () => {
    try {
      setLoading(true);

      const [productsRes, cartRes] = await Promise.all([
        fetchProductsApi(),
        fetchCartApi(),
      ]);

      setProducts(productsRes);
      setCartData(cartRes);
    } catch (err) {
      console.error(err);
      setError("Failed to load data");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const addToCart = async (item) => {
    try {
      const newItem = await addToCartApi(item);

      setCartData((prev) => [...prev, newItem]);
    } catch (err) {
      console.error(err);
    }
  };

  const removeFromCart = async (id) => {
    try {
      await deleteFromCartApi(id);

      setCartData((prev) => prev.filter((i) => i.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const totalPrice = cartData.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );

  return (
    <ProductsContext.Provider
      value={{
        products,
        cartData,
        loading,
        error,
        addToCart,
        removeFromCart,
        totalPrice,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;