import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";

import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Contacts from "../pages/Contacts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "cart", element: <Cart /> },
      { path: "contacts", element: <Contacts /> },
    ],
  },
]);
