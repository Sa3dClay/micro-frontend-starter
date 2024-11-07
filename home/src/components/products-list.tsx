import React, { useEffect, useState } from "react";
import { currency, getProducts, Product } from "../api/products";

const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="my-10 mx-5 grid grid-cols-2 md:grid-cols-4 gap-5">
      {products.map((product) => (
        <div key={product.id} className="my-4 flex flex-col">
          <img src={product.image} alt={product.name} />
          <div className="flex flex-wrap justify-center items-center gap-2 text-center text-gray-900 text-2xl my-4">
            <div>
              <a className="font-bold">{product.name}</a>
            </div>
            <div>
              <p className="italic">{currency.format(product.price)}</p>
            </div>
            <div className="text-sm">
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
