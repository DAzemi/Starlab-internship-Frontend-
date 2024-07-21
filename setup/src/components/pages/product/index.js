import React, { useEffect, useReducer, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProductById,
  fetchProductImages,
} from "../../../store/productbyId-slice";
import { cartActions } from "../../../store/cart-slice";
import { addToFavorite, favoriteActions } from "../../../store/favorite-slice";
import Skeleton from "react-loading-skeleton";
import { ReactComponent as ShoppingCardSvg } from "../../assets/shoppingCardSVG.svg";
import { GoHeartFill } from "react-icons/go";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import ImageMagnifier from "./ImageMagnifier";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";
const cookies = new Cookies();

export default function ProductId() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector((state) => state.productsbyId.product);
  const productImages = useSelector(
    (state) => state.productsbyId.productImages
  );

  const addToCart = (product) => {
    toast.info(`${product.name} added to the cart!`);
    const cartItem = {
      productId: product.productId,
      name: product.name,
      description: product.description,
      price: product.price,
      image_url: product.image_url,
      category_name: product.category_name,
      created_at: new Date(),
      quantity: product.quantity || 1,
    };
    dispatch(cartActions.addItemToCart(cartItem));
  };

  const [isHovered, setIsHovered] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState(null);

  // const handleBuyNow = () => {
  //   handleCheckout(dispatch, cart, user);
  // };

  useEffect(() => {
    const fetchData = async () => {
      const storedCart = cookies.get("cart");
      if (productId) {
        try {
          dispatch(fetchProductById(productId));
          dispatch(fetchProductImages(productId));
          dispatch(cartActions.setCartFromCookies(storedCart));
        } catch (error) {
          console.log("Error while fetching data", error);
        }
      }
    };
    fetchData();
  }, [dispatch, productId]);

  const handleSmallImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleRightArrowClick = (e) => {
    e.preventDefault();
    setTransitionDirection("left-to-right");
    if (selectedImageIndex < productImages.length - 1) {
      setSelectedImageIndex((prevIndex) => prevIndex + 1);

      const thumbnailContainer = document.getElementById("thumbnail-container");
      if (thumbnailContainer) {
        thumbnailContainer.scrollLeft += 85;
      }
    }
  };

  const handleLeftArrowClick = (e) => {
    e.preventDefault();
    setTransitionDirection("right-to-left");
    if (selectedImageIndex > 0) {
      setSelectedImageIndex((prevIndex) => prevIndex - 1);

      const thumbnailContainer = document.getElementById("thumbnail-container");
      if (thumbnailContainer) {
        thumbnailContainer.scrollLeft -= 85;
      }
    }
  };

  const thumbnailContainerRef = useRef(null);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleThumbnailDragStart = (e) => {
    e.preventDefault();
    setStartX(
      e.clientX - thumbnailContainerRef.current.getBoundingClientRect().left
    );
    setIsDragging(true);
  };

  const handleThumbnailDragMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    thumbnailContainerRef.current.scrollLeft -= deltaX;
    setStartX(e.clientX);
  };

  const handleThumbnailDragEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const container = thumbnailContainerRef.current;

    if (container) {
      container.addEventListener("mousedown", handleThumbnailDragStart);
      container.addEventListener("mousemove", handleThumbnailDragMove);
      container.addEventListener("mouseup", handleThumbnailDragEnd);
      container.addEventListener("mouseleave", handleThumbnailDragEnd);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousedown", handleThumbnailDragStart);
        container.removeEventListener("mousemove", handleThumbnailDragMove);
        container.removeEventListener("mouseup", handleThumbnailDragEnd);
        container.removeEventListener("mouseleave", handleThumbnailDragEnd);
      }
    };
  }, [thumbnailContainerRef.current, isDragging]);

  if (!product) {
    return (
      <div>
        <Skeleton className="h-[100%]" />
      </div>
    );
  }
  return (
    <div className="bg-[#d8e4fb] min-h-[100vh]">
      {!product ? (
        <Skeleton />
      ) : (
        <div className="pt-6 lg:pb-6 min-h-[100%] lg:pr-[2rem] pr-0 ">
          <div className="lg:flex sm:px-40 lg:gap-x-[7%] lg:px-20 bg-[#d8e4fb] items-start gap-x-20 pl-2 pr-2 pb-2">
            {" "}
            <div className="lg:w-full lg:h-[90vh]  flex justify-center mt-[5%]">
              {" "}
              <div
                className="image-container flex flex-col items-center bg-[white] rounded-[30px] pb-[40px] border border-[#ABABAB]
              sticky top-0 self-start lg:w-[40vw] w-full select-none overflow-hidden min-h-[60vh]"
              >
                {
                  <ImageMagnifier
                    src={
                      productImages[selectedImageIndex]?.image_url &&
                      productImages[selectedImageIndex]?.image_url
                    }
                    alt="Product"
                    onClick={(e) => e.preventDefault(e)}
                    style={{
                      transition: "transform 0.5s ease-in-out",
                      transform: `translateX(-${selectedImageIndex * 100}%)`,
                    }}
                  />
                }
                <FaCircleChevronLeft
                  size={35}
                  fill={"#3b82f6"}
                  opacity={0.3}
                  className="absolute left-[5%] top-[38%] hover:opacity-100 cursor-pointer"
                  onClick={(e) => handleLeftArrowClick(e)}
                />
                <FaCircleChevronRight
                  size={35}
                  fill="#3b82f6"
                  opacity={0.3}
                  className="absolute right-[5%] top-[38%] hover:opacity-100 cursor-pointer"
                  onClick={(e) => handleRightArrowClick(e)}
                />

                <div
                  ref={thumbnailContainerRef}
                  id="thumbnail-container"
                  className="product-images-container h-[16%] -top-[2%] flex overflow-x-hidden relative -bottom-[20px] left-0 w-[100%]
                   scroll-smooth"
                >
                  <div
                    draggable="false"
                    className="product-images-array  flex flex-row justify-start items-center px-2 gap-2
                relative"
                  >
                    {productImages.map((image, index) => (
                      <div
                        key={index}
                        className="additional-image-ctn flex h-[85px] w-[85px] border-2 border-neutral-300 rounded-[15px] cursor-pointer"
                        style={
                          index === selectedImageIndex
                            ? {
                                borderColor: "#3b82f6",
                                transition: "left 0.5s ease-in-out",
                                left: index * 90 + "px",
                              }
                            : {
                                background: "white",
                                filter: "brightness(0.8)",
                                borderColor: "#a79999",
                                transition: "left 0.5s ease-in-out",
                                left: index * 90 + "px",
                              }
                        }
                      >
                        <img
                          src={image.image_url}
                          alt={`Product ${index + 1}`}
                          onClick={() => handleSmallImageClick(index)}
                          loading="lazy"
                          className={
                            index === selectedImageIndex
                              ? "selected-image object-contain rounded-[15px] "
                              : "object-contain rounded-[15px] "
                          }
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Product info */}
            <div
              className="lg:w-[88vw] lg:px-4 md:px-4 px-0 pb-16 pt-10 sm:px-6 flex flex-col justify-start xl:w-[100%] lg:w-[80%] md:w-[100%] w-[100%] bg-white rounded-[30px] min-h-[66vh]
             border border-[#ABABAB] font-['Poppins'] items-start mt-[4%] lg:mb-[4%] pb-[3rem]"
            >
              <div className="product-card-info ml-[10%] mt-[5%] w-[90%]">
                <div className="flex justify-between w-[90%]">
                  <h1 className="text-[2.5rem] font-bold tracking-tight text-gray-900 leading-[48px] font-medium">
                    {product.name}
                  </h1>
                  <div
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="h-[47px] w-[45px] flex items-center justify-center border border-neutral-300 rounded-[12px] 
                  hover:bg-neutral-100 cursor-pointer"
                  >
                    <GoHeartFill
                      size={25}
                      stroke="grey"
                      strokeWidth={1}
                      fill={isHovered ? "#d15555" : "white"}
                      style={{ transition: "fill 0.2s ease-in-out" }}
                      onClick={() => dispatch(addToFavorite(product))}
                    />
                  </div>
                </div>
                <div className="mt-12">
                  <h2 className="sr-only">Product information</h2>
                  <p className="text-2xl tracking-tight  font-['Manrope'] font-semibold leading-[34px] text-[#467EEB] ml-4">
                    {product.price} €
                  </p>
                </div>
                <div className="py-10">
                  <h3 className="text-black text-2xl font-medium ">
                    Description
                  </h3>
                  <div className="space-y-6">
                    <p className="text-base text-neutral-400 font-normal leading-loose">
                      {product.description}
                    </p>
                  </div>
                  <br></br>
                  <div>
                    <h3 className="text-black text-2xl font-medium leading-[34px]">
                      Category
                    </h3>
                    <p className="text-neutral-400 text-xl font-normal leading-loose">
                      {product.category_name}
                    </p>
                  </div>
                </div>
                <div className="buttons">
                  <button
                    onClick={() => {
                      addToCart(product);
                      navigate("/cart");
                    }}
                    className="w-[111px] h-[40px] font-extrabold text-[15px] bg-blue-500 rounded-xl text-white mr-[8%]
                  hover:bg-blue-700"
                  >
                    Buy now
                  </button>
                  <button
                    onClick={() => addToCart(product)}
                    className="w-[156px] h-[40px] bg-white border border-stone-300
                   font-semibold leading-normal text-blue-500  rounded-xl justify-center item-center hover:bg-neutral-100"
                  >
                    <ShoppingCardSvg
                      className="mr-2"
                      style={{ display: "inline" }}
                    />
                    Add to card
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
