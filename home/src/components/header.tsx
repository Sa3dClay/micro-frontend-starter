import React from "react";
import Login from "cart/login";
import MiniCart from "cart/mini-cart";

const Header = () => (
  <div className="header">
    <section className="header-section">
      <div>
        <h2>Spinner World</h2>
      </div>
      <div>
        <Login />
        <MiniCart />
      </div>
    </section>
  </div>
);

export default Header;
