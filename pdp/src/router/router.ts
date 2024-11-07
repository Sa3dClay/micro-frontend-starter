import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/home";
import Product from "../pages/product";

// list of routes
export const router = createBrowserRouter([
  {
    path: "/",
    element: React.createElement(Home),
  },
  {
    path: "/products/:id",
    element: React.createElement(Product),
  },
]);
