import React, { useDebugValue, useEffect, useState } from "react";
import ReactDom from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import SearchedProductItem from "./SearchedProductItem";
import { AiFillCloseCircle } from "react-icons/ai";
import { fetchProducts } from "../../../store/products-slice";
export default function SearchModal({
  searchTerm,
  setModalOpen,
  setSearchTerm,
}) {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const handleClose = () => {
    setModalOpen(false);
    setSearchTerm("");
  };

  useEffect(() => {
    setLoading(true);
    dispatch(fetchProducts());
    setLoading(false);
  }, [dispatch]);
  return ReactDom.createPortal(
    <div
      className="absolute top-0 left-0 right-0 bottom-0 z-50"
      onClick={handleClose}
    >
      {!loading && (
        <div className="absolute top-60 md:top-20 left-0 right-0 flex justify-center items-center overflow-x-hidden rounded-xl z-50 pt-5">
          <ul className="relative w-full sm:w-2/6 md:w-2/6 lg:w-1/4 max-h-48 flex flex-col overflow-scroll overflow-x-hidden gap-2 bg-white border border-gray-300 ">
            <button
              className="absolute top-0 left-0 text-xl text-blue-700 cursor-pointer"
              onClick={handleClose}
            >
              <AiFillCloseCircle />
            </button>
            {products.length > 0 &&
              products.filter((product) => {
                return product.name
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase());
              }).length === 0 && (
                <p className="text-semibold text-center">
                  No products match the description.
                </p>
              )}
            {products
              .filter((product) => {
                return product.name
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase());
              })
              .map((product, index) => (
                <SearchedProductItem key={index} product={product} />
              ))}
          </ul>
        </div>
      )}
    </div>,
    document.getElementById("searchPortal")
  );
}
