// OrderConfirmation.js
import React, { useState } from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setEmail } from "../orderconfirmaition/emailSlice";

const OrderConfirmation = () => {
  const containerStyle = {
    maxWidth: "650px",
    height: "580px",
  };

  const dispatch = useDispatch();
  //   const email = "test";
  const email = useSelector((state) => state.user.token.email);
  //   console.log("state.user.token from order confirmation: ", data);
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    dispatch(setEmail(newEmail));
    if (emailError) {
      setEmailError("");
    }
  };

  const handleSubmit = () => {
    if (email.trim().length === 0 || !email.includes("@")) {
      setEmailError("Please provide a valid email address.");
      return;
    }

    // Perform any other actions here if needed

    setEmailError("");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div
        className="bg-sky-50 bg-opacity-40 rounded-2xl p-8 relative"
        style={containerStyle}
      >
        <div className="rounded-full text-black flex items-center justify-center w-10 h-10 mx-auto mt-2">
          <IoBagHandleOutline size={35} />
        </div>
        <div className="text-black mt-4 text-center">
          <p className="text-4xl font-medium font-Poppins leading-normal">
            Thank You!
          </p>
          <div className="mt-8 text-zinc-500">
            <span className="text-slate-600 text-l font-normal font-Poppins leading-9 tracking-wide">
              Thank you for your recent transaction with us. We're pleased to
              inform you that a confirmation has been sent to your &nbsp;
            </span>
            <span className="text-slate-600 text-l font-semibold font-Poppins leading-9 tracking-wide">
              provided email address ({email})
            </span>
            <span className="text-slate-600 text-l font-normal font-Poppins leading-9 tracking-wide">
              . Please check your inbox and, if necessary, your spam folder to
              ensure you've received it.
            </span>
          </div>
        </div>
        <div className="text-center text-slate-600 font-normal font-Poppins leading-loose tracking-wide mt-8">
          Since you're here, join our list for discounts!
        </div>
        <div className="mt-8">
          <div className="relative flex items-center justify-center">
            <input
              required
              type="email"
              name="email"
              id="email"
              value={""}
              placeholder="Enter your email"
              onChange={handleEmailChange}
              className={`py-2 px-4 border mr-3 border-white rounded-md ${
                emailError ? "border border-red-500" : ""
              }`}
            />
            {emailError && (
              <div className="text-red-500 text-xs absolute bottom-0 left-0 lg:ml-32 lg:mt-10 ml-5">
                {emailError}
              </div>
            )}
            <button
              className="bg-black text-white py-2 px-6 rounded-md ml-2"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center sm:flex-row sm:items-center sm:justify-center">
        <div className="w-56 h-12 text-center lg:mt-8 mt-20 text-slate-600 text-sm font-normal font-Poppins leading-loose">
          Connect with us.
        </div>
        <div className="flex mt-3 space-x-3">
          <div className="border rounded-full border-zinc-300 p-1 hover:bg-blue-500 hover:text-white transition-all">
            <FaTwitter className="text-gray-950 hover:text-white" />
          </div>
          <div className="border rounded-full border-zinc-300 p-1 hover:bg-blue-500 hover:text-white transition-all">
            <FaFacebook className="text-gray-950 hover:text-white" />
          </div>
          <div className="border rounded-full border-zinc-300 p-1 hover:bg-blue-500 hover:text-white transition-all">
            <FaInstagram className="text-gray-950 hover:text-white" />
          </div>
          <div className="border rounded-full border-zinc-300 p-1 hover:bg-blue-500 hover:text-white transition-all">
            <FaGithub className="text-gray-950 hover:text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
