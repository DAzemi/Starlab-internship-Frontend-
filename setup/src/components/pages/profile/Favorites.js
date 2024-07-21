import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineDeleteOutline } from "react-icons/md";
import SideBar from "./sidebar";
import {
  getUserFavorites,
  deleteFromFavorites,
  favoriteActions,
} from "../../../store/favorite-slice";
// import { fetchProductById } from "../../../store/productbyId-slice";
import { fetchProducts } from "../../../store/products-slice";
import { toast } from "react-toastify";

export default function Favorites() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const products = useSelector((state) => state.products.products);
  const userFavorites = useSelector((state) => state.favorite.allUserFavorites);
  const token = useSelector((state) => state.user.token);
  // const productsById = useSelector((state) => state.productbyId);

  // console.log("products", products);
  // console.log("userfavorites", userFavorites);
  // console.log("token", token);

  useEffect(() => {
    setLoading(true);
    dispatch(fetchProducts());
    setLoading(false);
  }, [dispatch]);

  useEffect(() => {
    if (token) {
      dispatch(getUserFavorites(token.userId));
    }
  }, [token, dispatch]);

  // const deleteFavorite =  (product) => {
  //   try {
  //      dispatch(
  //       deleteFromFavorites({
  //         user_id: token.userId,
  //         product: product,
  //       })
  //     );
  //   } catch (error) {
  //     console.error("Error deleting from favorites:", error);
  //   }
  // };

  return (
    <div className="lg:flex lg:my-10">
      <SideBar />
      <div className="lg:relative lg-w-auto ">
        <div className="hidden sm:block absolute z-10 w-0.5 h-full bg-gray-500 rounded-full border-b"></div>

        <div className="w-full mx-20">
          <div className="text-black text-2xl font-normal font-['Poppins'] leading-normal">
            Favorites
          </div>

          <div className="w-full h-full rounded-lg border border-stone-300 mt-10 flex flex-col relative">
            {/* Added relative positioning */}
            {loading && <h1>Loading...</h1>}
            {!loading &&
              userFavorites.map((favorite, i) => (
                <div key={i} className="flex flex-row relative">
                  {/* <h1>{favorite.product_id}</h1> */}
                  {products.length > 0 &&
                    favorite.product_id <= products.length && (
                      <div className="w-36 h-36 bg-neutral-100 m-8">
                        <img
                          src={products[favorite.product_id - 1].image_url}
                          alt="product favorite"
                        ></img>
                      </div>
                    )}
                  <div className="flex flex-col mt-12 ml-4">
                    {products.length > 0 &&
                      favorite.product_id <= products.length && (
                        <div className="text-zinc-500 text-xl font-normal leading-normal mb-4">
                          {products[favorite.product_id - 1].name}
                        </div>
                      )}
                    <div className="text-blue-500 text-2xl font-medium leading-normal"></div>
                  </div>
                  <div className="absolute right-8 top-20 transform -translate-y-1/2">
                    <MdOutlineDeleteOutline
                      size={30}
                      className="cursor-pointer"
                      onClick={() =>
                        // dispatch(deleteFavorite(favorite.product_id))
                        toast.info("Product deleted from favorites!")
                      }
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
