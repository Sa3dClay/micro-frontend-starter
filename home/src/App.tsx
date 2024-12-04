import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import "remixicon/fonts/remixicon.css";
import "./styles/common-styles.css";
import "cart/login-styles";

import Header from "./components/header";
import Footer from "./components/footer";
import ProductsList from "./components/products-list";

const App = () => (
  <>
    <Header />
    <div className="my-10 mx-auto max-w-6xl">
      <ProductsList />
    </div>
    <Footer />
  </>
);

const rootElement = document.getElementById("app");

if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
