import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import "remixicon/fonts/remixicon.css";
import "home/common-styles";

import CartContent from "./components/cart-content";

const Header = React.lazy(() => import("home/header"));
const Footer = React.lazy(() => import("home/footer"));

const App = () => (
  <>
    <Header />
    <div className="my-10 mx-auto max-w-6xl">
      <CartContent />
    </div>
    <Footer />
  </>
);

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
