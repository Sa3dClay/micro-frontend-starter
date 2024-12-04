import React, { useEffect, useState, useRef } from "react";

import { currency } from "home/products-api";
import { cart, CartItem, clearCart } from "../apis/cart";

export default function MiniCart() {
  const [items, setItems] = useState<CartItem[] | undefined>(undefined);
  const [showCart, setShowCart] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef?.current) {
      divRef?.current.focus();
    }
  }, [showCart]);

  useEffect(() => {
    setItems(cart.value?.cartItems);

    cart.subscribe((c) => {
      setItems(c?.cartItems);
    });
  }, []);

  if (!items) return null;

  return (
    <div className="relative">
      <span
        onClick={() => setShowCart(!showCart)}
        data-testid="[show-cart]:span"
      >
        <i
          className="ri-shopping-cart-2-fill text-2xl cursor-pointer"
          data-testid="[show-cart]:icon"
        ></i>
        {items.length}
      </span>
      {showCart && (
        <div
          className="absolute right-1/2 p-5 border-4 border-gray-800 bg-white rounded-xl text-black"
          tabIndex={0}
          ref={divRef}
          onBlur={() => setShowCart(false)}
        >
          <div
            className="grid gap-3 text-sm"
            style={{
              gridTemplateColumns: "1fr 3fr 10fr 2fr",
            }}
          >
            {items.map((item) => (
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
            <div>
              {currency.format(
                items.reduce((a, v) => a + v.quantity * v.price, 0)
              )}
            </div>
          </div>
          <div className="flex">
            <div className="flex-grow">
              <button
                data-testid="[clear-cart]:btn"
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
        </div>
      )}
    </div>
  );
}
