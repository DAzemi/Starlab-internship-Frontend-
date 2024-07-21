import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CheckoutButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const cart = useSelector((state) => state.cart.cartItems);
  const user = useSelector((state) => state.user.token?.userId || null);
  console.log("User id from Checkout Button: ", user);
  const navigate = useNavigate();

  const handleCheckout = async () => {
    try {
      setIsLoading(true);

      if (!user) {
        // navigate("/login");
        toast.warn("You need to be logged in in order to go to checkout!");
        return;
      }

      axios
        .post("http://localhost:4000/api/create-checkout-session", {
          cartItems: cart,
          userId: user,
        })
        .then((res) => {
          if (res.data.url) {
            window.location.href = res.data.url;
          }
        })
        .catch((error) => console.log(error.message));
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="">
      <button
        onClick={() => handleCheckout()}
        className="bg-blue-500 text-white font-bold py-2 px-3 w-full rounded font-['Manrope'] hover:bg-blue-600 transition duration-300 ease-in-out"
      >
        Checkout
      </button>
    </div>
  );
};

export default CheckoutButton;
