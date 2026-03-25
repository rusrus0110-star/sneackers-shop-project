import axios from "axios";

const API = axios.create({
  baseURL: "https://69c39e62b780a9ba03e75ab2.mockapi.io",
  headers: {
    "Content-Type": "application/json",
  },
});

// PRODUCTS
export const fetchProductsApi = async () => {
  const { data } = await API.get("/productsdata");
  return data;
};

// CART
export const fetchCartApi = async () => {
  const { data } = await API.get("/cartData");
  return data;
};

export const addToCartApi = async (item) => {
  const { data } = await API.post("/cartData", item);
  return data;
};

export const deleteFromCartApi = async (id) => {
  await API.delete(`/cartData/${id}`);
};
