import React, { useEffect } from "react";
import photo1 from "../../assets/photo1.png";
import { NavLink } from "react-router-dom";
import Container from "./container";
import TopProduct from "./topProduct";
import Products from "../../products/Products";
import NewArrivals from "./newArrivals";

export default function Homepage() {
  return (
    <div>
      <div className="w-full h-full overflow-hidden relative bg-blue-600 bg-opacity-85 flex flex-col-reverse md:flex-row justify-end items-center">
        <div
          style={{ background: "rgba(38, 104, 232, 0.85)", height: "669px" }}
          className="w-full md:w-1/2 lg:w-2/3 flex justify-end relative"
        >
          <div style={{ position: "relative", display: "block" }}>
            <img
              src={photo1}
              className="hidden sm:block w-2/3 md:w-5/5 lg:w-3/4 xl:w-4/5 h-auto lg:m-10 xl:m-20 ml-4"
              style={{ position: "relative", zIndex: 1, marginInline: 20 }}
              alt="Product Image"
            />
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="700"
            height="769"
            viewBox="0 0 855 709"
            className="absolute top-4 -right-2"
            style={{ marginTop: "-40px" }}
          >
            <path
              d="M429.581 -222.503C297.149 -187.872 178.15 -86.1756 98.7646 60.2131C19.3787 206.602 -13.8919 385.692 6.27215 558.085C26.4362 730.478 98.383 882.053 206.285 979.466C314.187 1076.88 449.206 1112.15 581.638 1077.52C714.071 1042.88 833.069 941.188 912.455 794.8C991.841 648.411 1025.11 469.321 1004.95 296.928C984.783 124.535 912.837 -27.0405 804.934 -124.453C697.032 -221.865 562.014 -257.135 429.581 -222.503Z"
              fill="url(#paint0_linear_5_32543)"
              fill-opacity="0.5"
            />
            <defs>
              <linearGradient
                id="paint0_linear_5_32543"
                x1="429.581"
                y1="-222.503"
                x2="757.514"
                y2="1031.52"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute top-1/3 lg:top-35 lg:left-10 xl:left-20 text-white px-5">
          <h1 className="text-4xl lg:text-4xl xl:text-6xl font-semibold leading-12 xl:leading-10 w-6/6 xl:w-2/3 text-center sm:text-left">
            Buy Digital products
          </h1>
          <p className="mt-10 text-base lg:text-lg font-medium leading-6 lg:leading-7 w-6/6 xl:w-2/4 text-center sm:text-left">
            Welcome to our one-stop destination for the latest and greatest in
            technology products! Our online store is your go-to source for
            cutting-edge gadgets.
          </p>
          <div className="text-center sm:text-left">
            <NavLink to="/products">
              <button className="mt-8 px-8 py-2 bg-white rounded-full text-indigo-500 font-semibold hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700">
                Shop Now
              </button>
            </NavLink>
          </div>
        </div>

        <div
          className="absolute bottom-5 left-80 w-40 h-96 bg-slate-50 bg-opacity-10 rounded-full hidden md:block"
          style={{ top: "350px" }}
        />
        <div
          className="absolute bottom-2 left-40 w-40 h-96 bg-slate-50 bg-opacity-10 rounded-full"
          style={{ top: "420px" }}
        />
        <div
          className="absolute bottom-1 left-0 w-40 h-60 bg-white bg-opacity-10 rounded-full"
          style={{ top: "490px" }}
        />
      </div>
      <Container />
      <TopProduct />
      <NewArrivals />
    </div>
  );
}
