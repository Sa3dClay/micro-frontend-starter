import React, { useEffect, useState } from "react";
import { jwt } from "../apis/cart";
import Login from "./login";
import MiniCart from "./mini-cart";

const CartContent = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    jwt.subscribe((val) => setToken(val ?? ""));
  }, []);

  return (
    <div className="text-center px-4">
      <Login />
      <MiniCart />
    </div>
  );
};

export default CartContent;
