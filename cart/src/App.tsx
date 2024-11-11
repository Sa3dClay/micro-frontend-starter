import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import "home/common-styles";

const Header = React.lazy(() => import("home/header"));
const Footer = React.lazy(() => import("home/footer"));

const App = () => (
  <>
    <Header />
    <div className="my-10 mx-auto max-w-6xl">
      <h2>Cart</h2>
    </div>
    <Footer />
  </>
);

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
