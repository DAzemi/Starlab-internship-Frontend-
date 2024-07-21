import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { toast } from "react-toastify";
import {
  addToFavorite,
  deleteFromFavorites,
  getUserFavorites,
} from "../../store/favorite-slice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const userFavorites = useSelector((state) => state.favorite.allUserFavorites);

  const addToCart = (product) => {
    toast.info(`${product.name} added to the cart!`);
    dispatch(cartActions.addItemToCart(product));
  };

  const favorite = async (product) => {
    try {
      if (token) {
        await dispatch(
          addToFavorite({
            user_id: token.userId,
            product_id: product.productId,
            product_name: product.name,
          })
        );
        await dispatch(getUserFavorites(token.userId));
      } else {
        toast.warn(`You have to log in to add to your favorites!`);
      }
    } catch (error) {
      console.error("Error adding to favorites:", error);
    }
  };

  const deleteFavorite = async (product) => {
    try {
      await dispatch(
        deleteFromFavorites({
          user_id: token.userId,
          product: product,
        })
      );
      await dispatch(getUserFavorites(token?.userId));
    } catch (error) {
      console.error("Error deleting from favorites:", error);
    }
  };

  const isProductInFavorites = userFavorites.some(
    (favorite) => favorite.product_id === product.productId
  );

  // useEffect(() => {
  //   dispatch(getUserFavorites(token?.userId));
  // }, [dispatch, token?.userId]);

  return (
    <div className="w-full h-auto max-w-xs bg-white border border-gray-200 rounded-lg shadow-xl mt-8 transition-all duration-[10000ms] ease-in">
      <div className="rounded overflow-hidden py-5 px-8 ">
        <div className="flex justify-center items-center w-auto h-64 ">
          <a href={`/product/${product.productId}`}>
            <img
              className="w-auto h-44 object-contain transition duration-300 ease-in-out transform hover:scale-110"
              src={product.image_url}
              alt="product"
            />
          </a>
        </div>
      </div>
      <div className="px-6">
        <div className="flex items-center my-2">
          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            4.8
          </span>
        </div>

        <div className="mt-3">
          <a href={`/product/${product.productId}`}></a>

          <div className="text-black text-lg font-semibold font-['Manrope'] leading-normal">
            {product.name}
          </div>

          <div className="text-blue-500 text-xl font-bold font-['Manrope'] leading-loose">
             {product.price.toFixed(2)} €
          </div>

          <div className="flex items-center justify-between mb-5 mt-4">
            <button
              onClick={() => addToCart(product)}
              className="text-blue-700 font-semibold border-2 border-gray-200 p-2 rounded-lg transition duration-300 ease-in-out hover:bg-blue-600 hover:text-white hover:border-transparent"
            >
              Add to bag
            </button>

            {isProductInFavorites && (
              <BsHeartFill
                className="text-2xl text-blue-500  font-semibold cursor-pointer"
                onClick={() => deleteFavorite(product)}
              />
            )}
            {!isProductInFavorites && (
              <BsHeart
                className="text-2xl font-semibold cursor-pointer"
                onClick={() => favorite(product)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
