import { fontFamily } from "@mui/system";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import photo2 from "../../assets/photo2.png";
import { useSelector, useDispatch } from "react-redux";

import { fetchnewProduct } from "../../../store/products-slice";

export default function Container() {
  const newproduct = useSelector((state) => state.products.newproduct);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchnewProduct())
      .then((imageData) => {
        // console.log('Fetched product data:', imageData);
      })
      .catch((error) => {
        console.error("Failed to fetch newest product image:", error);
      });
  }, [dispatch]);

  // console.log('newproduct:', newproduct);

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-20 m-6 sm:m-24">
        <div className="rounded-lg bg-gray-100 p-6 sm:p-12 flex-grow relative">
          <div className="flex items-center mb-8">
            <div className="w-3 h-3 sm:w-5 sm:h-5 bg-blue-600 rounded-full flex items-center">
              <h2 className="text-black text-base sm:text-lg font-normal ml-4 sm:ml-3 lg:ml-4 xl:ml-12">
                MODERNMOBILE
              </h2>
            </div>
          </div>
          <h1 className="text-black text-2xl sm:text-4xl lg:text-4xl font-semibold">
            New Collections
          </h1>
          <NavLink to="/products">
            <button className="mt-4 sm:mt-6 bg-blue-600 text-white text-base font-semibold rounded-full py-2.5 px-5 hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-200">
              SHOP NOW
            </button>
          </NavLink>

          <div className="absolute top-0 right-0 flex justify-center items-center w-1/2 h-full">
            <div className="w-24 h-24 sm:w-48 sm:h-48">
              {newproduct && newproduct.image_url && (
                <img
                  src={newproduct.image_url}
                  className="w-auto h-full object-contain"
                  alt="Product Image"
                />
              )}
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-gray-100 p-6 sm:p-12 flex-grow relative">
          <div className="flex items-center mb-8">
            <div className="w-3 h-3 sm:w-5 sm:h-5 bg-blue-600 rounded-full flex items-center">
              <h2 className="text-black text-base sm:text-lg font-normal ml-4 sm:ml-3 lg:ml-4 xl:ml-12">
                HEADPHONES
              </h2>
            </div>
          </div>
          <h1 className="text-black text-2xl sm:text-4xl lg:text-4xl font-semibold">
            Best Seller
          </h1>
          <NavLink to="/products">
            <button className="mt-4 sm:mt-6 bg-blue-600 text-white text-base font-semibold rounded-full py-2.5 px-5 hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-200">
              SHOP NOW
            </button>
          </NavLink>
          <div className="absolute top-0 right-0 flex justify-center items-center w-1/2 h-full">
            <div className="w-24 h-24 sm:w-48 sm:h-48">
              {newproduct && newproduct.image_url && (
                <img
                  src={newproduct.image_url}
                  className="w-auto h-full object-contain"
                  alt="Product Image"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
