import { useEffect, useState } from "react";
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        console.log("🔄 START LOADING");
        setLoading(true);
        setError("");

        const [productsResponse, cartResponse] = await Promise.all([
          fetchProductsApi(),
          fetchCartApi(),
        ]);

        console.log("productsResponse:", productsResponse);
        console.log("cartResponse:", cartResponse);

        const normalizedProducts = Array.isArray(productsResponse)
          ? productsResponse
          : productsResponse?.data || [];

        const normalizedCart = Array.isArray(cartResponse)
          ? cartResponse
          : cartResponse?.data || [];

        console.log("✅ Setting products:", normalizedProducts.length);
        console.log("✅ Setting cart:", normalizedCart.length);

        setProducts(normalizedProducts);
        setCartData(normalizedCart);
      } catch (err) {
        console.error("❌ ERROR:", err);
        setError("Failed to load data");
      } finally {
        console.log("🏁 SETTING LOADING = FALSE");
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const addToCart = async (item) => {
    try {
      const createdItem = await addToCartApi(item);
      setCartData((prev) => [...prev, createdItem]);
    } catch (err) {
      console.error("Failed to add item:", err);
      setError("Failed to add item");
    }
  };

  const removeFromCart = async (id) => {
    try {
      await deleteFromCartApi(id);
      setCartData((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.error("Failed to remove item:", err);
      setError("Failed to remove item");
    }
  };

  const totalPrice = cartData.reduce((sum, item) => {
    return sum + Number(item.price || 0);
  }, 0);

  console.log(
    "🎨 RENDER - loading:",
    loading,
    "products:",
    products.length,
    "cart:",
    cartData.length,
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
