import React, { useState, useEffect } from "react";

import { cart, CartItem, clearCart } from "../apis/cart";
import { currency } from "home/products-api";

export default function CartContent() {
  const [items, setItems] = useState<CartItem[] | undefined>([]);

  useEffect(() => {
    cart.subscribe((c) => {
      setItems(c?.cartItems);
    });
  }, [cart]);

  return (
    <>
      <div className="my-10 grid grid-cols-4 gap-5">
        {items?.map((item) => (
          <React.Fragment key={item.id}>
            <div>{item.quantity}</div>
            <img src={item.image} alt={item.name} className="max-h-6" />
            <div>{item.name}</div>
            <div className="text-right">
              {currency.format(item.quantity * item.price)}
            </div>
          </React.Fragment>
        ))}
        <div></div>
        <div></div>
        <div></div>
        <div className="text-right" id="grand_total">
          {items &&
            currency.format(
              items.reduce((a, v) => a + v.quantity * v.price, 0)
            )}
        </div>
      </div>
      {items?.length && (
        <div className="flex mb-10">
          <div className="flex-grow">
            <button
              id="clearcart"
              className="bg-white border border-green-800 text-green-800 py-2 px-5 rounded-md text-sm"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
          <div className="flex-end">
            <button
              className="bg-green-900 text-white py-2 px-5 rounded-md text-sm"
              onClick={clearCart}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </>
  );
}
