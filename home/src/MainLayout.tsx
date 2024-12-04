import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import Header from "home/header";
import Footer from "home/footer";
import PDPContent from "pdp/product-details";
import HomeContent from "./components/products-list";

export default function MainLayout() {
  return (
    <BrowserRouter>
      <Header />
      <div className="text-3xl mx-auto max-w-6xl">
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/products/:id" element={<PDPContent />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
