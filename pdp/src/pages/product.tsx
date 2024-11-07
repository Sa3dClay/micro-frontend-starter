import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProductById, ProductType } from "home/products-api";
import ProductDetails from "../components/product-details";

const ProductNotFound = (
  <h2 className="text-center text-3xl">Product not found!</h2>
);

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    if (!id) return;
    getProductById(id).then(setProduct);
  }, [id]);

  if (!product) return ProductNotFound;

  return (
    <div className="my-10">
      <ProductDetails product={product} />
    </div>
  );
};

export default Product;
