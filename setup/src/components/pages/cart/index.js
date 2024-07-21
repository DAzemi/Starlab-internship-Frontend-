import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import { CiTrash } from "react-icons/ci";

import { FaShippingFast } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  setProductIds,
  setQuantities,
  setTotal,
} from "../../../store/checkout-slice";
import CheckoutButton from "../payment/CheckoutButton";

import Cookies from "universal-cookie";

const cookies = new Cookies();

export default function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const storedCart = cookies.get("cart");
    if (storedCart) {
      dispatch(cartActions.setCartFromCookies(storedCart));
    }
  }, [dispatch]);
  const cart = useSelector((state) => state.cart.cartItems);

  const deleteItem = (id) => {
    dispatch(cartActions.deleteItemFromCart({ id }));
  };

  const addToCart = (item) => {
    dispatch(cartActions.addItemToCart(item));
  };

  const totalCartPrice = cart?.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  // Dispatch actions to proceed to checkout address and payment
  // const handleProceedToCheckout = () => {
  //   const productIds = cart.map((item) => item.productId);
  //   const quantities = cart.map((item) => item.quantity);
  //   const total = totalCartPrice;

  //   dispatch(setProductIds(productIds));
  //   dispatch(setQuantities(quantities));
  //   dispatch(setTotal(total));

  //   navigate("/checkout/address");
  // };

  return (
    <section className="lg:flex lg:flex-col gap-4 m-4 items-center">
      <div className="flex justify-center text-center w-full lg:w-auto px-4 lg:px-0 text-white">
        {cart?.length > 0 ? (
          <h1 className="bg-blue-500 p-4 rounded-lg text-xl">
            Your Cart ({cart?.length} items)
          </h1>
        ) : (
          <div className="flex flex-col gap-3">
            <h1 className="bg-blue-500 p-4 rounded-lg text-xl">
              No items added...
            </h1>
            <Link
              to="/products"
              className="text-blue-500 rounded-lg p-4 hover:bg-blue-200"
            >
              To Products
            </Link>
          </div>
        )}
      </div>

      {cart?.length > 0 && (
        <div className="overflow-x-auto mb-5">
          <table className="table-auto w-full border-b-2 border-b-grey-200 text-sm lg:text-base mt-6">
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index} className="border-b-2 border-b-grey-200">
                  <td className="text-center lg:p-8">
                    <div className="flex flex-col items-center">
                      <img
                        src={item.image_url}
                        alt="item image"
                        className="rounded-lg max-w-24 max-h-24 xs:hidden md:block"
                      />
                      <p className="p-2 lg:p-3 font-semibold">{item.name}</p>
                    </div>
                  </td>
                  <td className="text-center p-2 lg:p-4">
                    <div className="text-blue-500 rounded-full shadow-xl border p-2 lg:p-3 text-sm lg:text-base flex items-center justify-center lg:justify-start">
                      <span>$</span>
                      <span className="ml-1">{item.price.toFixed(2)}</span>
                    </div>
                  </td>
                  <td className="text-center p-2 lg:p-6">
                    <div className="flex items-center gap-2 bg-blue-100 rounded-full text-sm lg:text-base">
                      <button
                        className="bg-blue-500 text-white rounded-lg p-1"
                        onClick={() => addToCart(item)}
                      >
                        +
                      </button>
                      <p className="bg-white rounded-full p-1">
                        {item.quantity}
                      </p>
                      <button
                        className="bg-blue-500 text-white rounded-lg p-1"
                        onClick={() => deleteItem(item.productId)}
                      >
                        -
                      </button>
                    </div>
                  </td>
                  <td className="text-center lg:p-6">
                    <div className="text-blue-500 text-sm lg:text-base">
                      <p className="sm:flex inline-flex justify-center items-center bg-white rounded-full border shadow-2xl p-2 lg:p-3">
                        <span className="mr-1 sm:mr-2">$</span>
                        <span>{(item.price * item.quantity).toFixed(2)}</span>
                        <CiTrash
                          className="mx-1 sm:mx-2 text-red-600 cursor-pointer"
                          onClick={() => deleteItem(item.productId)}
                        />
                      </p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {totalCartPrice > 0 && (
        <div className="flex flex-col w-full md:w-2/4 bg-gray-100 text-center self-end rounded-lg gap-3 p-4 ">
          <p className="border-b-2 border-b-gray-300">
            Sales Tax:{" "}
            <small className="text-sm lg:text-xl text-blue-600">
              ${(totalCartPrice / 5).toFixed(2)}
            </small>{" "}
            (inclusive)
          </p>
          <p className="border-b-2 border-b-gray-300">
            Grand Total:{" "}
            <small className="text-base lg:text-2xl text-blue-600">
              ${totalCartPrice.toFixed(2)}
            </small>
          </p>
          <p className="rounded-lg border-b-4 border-b-green-500 p-2">
            Congrats, you're eligible for{" "}
            <small className="text-semibold text-base lg:text-xl">
              Free Shipping!
            </small>
          </p>
          <CheckoutButton />
        </div>
      )}
    </section>
  );
}
