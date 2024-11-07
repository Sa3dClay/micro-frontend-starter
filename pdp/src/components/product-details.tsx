import { currency, ProductType } from "home/products-api";
import React from "react";

const ProductDetails = ({ product }: { product: ProductType }) => {
  return (
    <section className="grid grid-cols-2 gap-5 mx-4">
      <div className="flex justify-center items-center">
        <img src={product.image} alt={product.name} className="size-60" />
      </div>
      <div className="flex flex-col gap-4 items-center">
        <div className="flex gap-4 font-bold">
          <h2 className="text-3xl">{product.name}</h2>
          <span className="text-2xl italic">
            {currency.format(product.price)}
          </span>
        </div>
        <p>{product.description}</p>
        <p>{product.longDescription}</p>
      </div>
    </section>
  );
};

export default ProductDetails;
