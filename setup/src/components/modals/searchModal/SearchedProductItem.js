import React from "react";
import { Link } from "react-router-dom";
export default function SearchedProductItem({ product }) {
  return (
    <li className="w-full flex items-center gap-2 h-16 bg-white  rounded-lg shadow-l border hover:border-blue-500">
      <Link
        to={`/product/${product.productId}`}
        className="flex p-2 flex-row items-center justify-center gap-4  "
      >
        <img
          className="w-1/4 max-h-16 object-contain items-center"
          src={`${product.image_url}`}
          alt="product"
        />
        <h6 className="w-1/2 text-semibold">{product.name}</h6>
      </Link>
    </li>
  );
}
