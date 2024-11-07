import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import "./styles/common-styles.css";
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => (
  <>
    <Header />
    <div className="my-10 text-3xl mx-auto max-w-6xl">
      <p className="text-center">Home page content</p>
    </div>
    <Footer />
  </>
);

const rootElement = document.getElementById("app");

if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
