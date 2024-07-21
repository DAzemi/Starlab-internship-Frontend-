import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../../UI/ProductCard";
import {
  fetchNewlyArrived,
  fetchTopSelling,
  setNewlyArrivedProducts,
  setTopSellingProducts,
} from "../../../store/topProducts-slice.js";
import LoadingSkeleton from "../../UI/LoadingSkeleton.js";
import { useNavigate } from "react-router-dom";

export default function NewArrivals({ searchTerm }) {
  const [loading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState("latest");
  let [scrollPosition, setScrollPosition] = useState(0);
  //   const products =
  //     useSelector((state) => state.topProducts.topSellingProducts) || [];
  //   console.log("Products from newArrivals file: ", products);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        setScrollPosition(window.scrollY);

        if (activeCategory === "latest") {
          const response = await dispatch(fetchNewlyArrived());
          if (response >= 200 && response < 300) {
            dispatch(setNewlyArrivedProducts(response.payload));
          }
        } else if (activeCategory === "topSelling") {
          const response = await dispatch(fetchTopSelling());
          if (response.ok) {
            dispatch(setTopSellingProducts(response.payload));
          }
        } else if (activeCategory === "topRated") {
          await dispatch();
        }

        // dispatch(fetchNewlyArrived());
        setLoading(false);
      } catch (error) {
        console.log("Error in fetching data: ", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch, activeCategory]);

  const products =
    useSelector((state) => {
      if (activeCategory === "latest") {
        return state.topProducts.newlyArrivedProducts;
      } else if (activeCategory === "topSelling") {
        return state.topProducts.topSellingProducts;
      } else if (activeCategory === "topRated") {
        return state.topProducts.topRatedProducts;
      } else {
        return [];
      }
    }) || [];

  const handleCategoryChange = (category) => {
    setLoading(true);
    setTimeout(() => {
      setActiveCategory(category);
      setLoading(false);
    }, 300);
  };

  return (
    <section className="flex flex-col justify-center items-center">
      <div className="m-20 mb-10 overflow-hidden">
        <div className="overflow-hidden text-center text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium font-['Poppins'] leading-9 mb-20">
          New Arrivals
        </div>

        <div className="flex lg:flex-row md:flex-row flex-col flex-wrap justify-center gap-2 sm:gap-6 md:gap-4 lg:gap-0  sm:mx-6 md:mx-10 lg:mx-0 lg:mb-20 md:mb-20 mb-8 items-center ">
          <div className="rounded-2xl flex">
            <div className=" px-4 sm:px-2 md:px-4">
              <button
                onClick={() => handleCategoryChange("latest")}
                className={`text-neutral-500 text-lg font-extrabold font-Manrope leading-normal inline-block w-[150px] 
                lg:h-[100px] md:h-[100px] h-[60px] rounded-xl shadow-md
              transition-all duration-200 hover:scale-105 lg:-skew-x-[12deg] md:-skew-x-[12deg] skew-x-0 ${
                activeCategory === "latest"
                  ? "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500 text-white hover:bg-blue-500 !important hover:bg-blue-600 !important w-[250px]"
                  : "hover:bg-[#f8f8f8]"
              }`}
              >
                Latest Products
              </button>
            </div>
          </div>
          <div className="rounded-2xl ">
            <div className=" px-2 sm:px-2 md:px-4">
              <button
                onClick={() => handleCategoryChange("topRated")}
                className={`text-neutral-500 text-lg font-extrabold font-Manrope leading-normal inline-block w-[150px] lg:h-[100px]
                md:h-[100px] h-[60px] rounded-xl shadow-md
                transition-all duration-200 hover:scale-[1.03] lg:-skew-x-[12deg] md:-skew-x-[12deg] skew-x-0  ${
                  activeCategory === "topRated"
                    ? "bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-sky-500 via-orange-200 to-yellow-600 text-white hover:bg-blue-500 !important hover:bg-blue-600 !important w-[250px]"
                    : "hover:bg-[#f8f8f8]"
                }`}
              >
                Top Rating
              </button>
            </div>
          </div>
          <div className="rounded-[0 0.75rem 0.75rem 0]">
            <div className=" px-4 sm:px-2 md:px-4">
              <button
                onClick={() => handleCategoryChange("topSelling")}
                className={`text-neutral-500 text-lg font-extrabold font-Manrope leading-normal inline-block w-[150px] 
                lg:h-[100px] md:h-[100px] h-[60px] rounded-xl shadow-md
                transition-all duration-200 hover:scale-105 lg:-skew-x-[12deg] md:-skew-x-[12deg] skew-x-0 ${
                  activeCategory === "topSelling"
                    ? "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-700 via-orange-300 to-rose-800 text-white hover:bg-blue-500 !important hover:bg-blue-600 !important w-[250px]"
                    : "hover:bg-[#f8f8f8]"
                }`}
              >
                Best Selling
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-wrap justify-center gap-2 transition-all duration-300 ease-in-out">
            {loading && (
              <LoadingSkeleton className="flex h-[150px] w-[100px]" />
            )}
            {!loading && !searchTerm
              ? products.map((product, index) => (
                  <ProductCard
                    // handleOnDrag={handleOnDrag}
                    key={index}
                    product={product}
                    name={product.name}
                    image_url={product.image_url}
                    description={product.description}
                    price={product.price}
                    productId={product.productId}
                  />
                ))
              : products
                  .filter((product) => {
                    return (
                      product.name &&
                      product.name.toLowerCase().includes(searchTerm)
                    );
                  })
                  .map((product, index) => (
                    <ProductCard key={index} product={product} />
                  ))}
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={() => navigate("/products")}
          className="h-[52px] w-[125px] bg-blue-500 rounded-[30px] flex justify-center items-center text-white font-bold
         mb-10 hover:bg-blue-600 transition-all duration-300 ease-in shadow-md drop-shadow
        "
        >
          See more
        </button>
      </div>
    </section>
  );
}
