import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  sendPasswordResetRequest,
  selectForgotPasswordError,
} from "../../../store/forgotPasswordSlice";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { setEmailAndToken } from "../../../store/forgotPasswordSlice";

function ForgotPassword() {
  const containerStyle = {
    width: "100%",
    maxWidth: "595px",
    height: "490px",
  };
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const forgotPasswordError = useSelector(selectForgotPasswordError);

  const handleResetPassword = async () => {
    if (email.trim().length === 0 || !email.includes("@")) {
      setEmailError("Please provide a valid email address.");
      return;
    }
    setEmailError("");

    try {
      dispatch(sendPasswordResetRequest(email)).then((resultAction) => {
        if (sendPasswordResetRequest.fulfilled.match(resultAction)) {
          navigate("/checkMailbox");
        } else {
          console.log("Password reset failed");
          alert("Password request failed");
        }
      });
    } catch (error) {
      console.log("Password reset request failed: ", error);
    }
  };

  dispatch(
    setEmailAndToken({
      email: "",
    })
  );

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="flex items-center justify-center mb-8">
        <span className="text-stone-300 text-5xl font-medium font-Poppins leading-normal">
          Su
        </span>
        <span className="text-blue-500 text-5xl font-medium font-Poppins leading-normal">
          p
        </span>
        <span className="text-stone-300 text-5xl font-medium font-Poppins leading-normal">
          er
        </span>
        <span className="text-blue-500 text-5xl font-medium font-Poppins leading-normal">
          N
        </span>
        <span className="text-stone-300 text-5xl font-medium font-Poppins leading-normal">
          ova
        </span>
      </div>
      <div
        style={containerStyle}
        className="bg-sky-50 bg-opacity-40 rounded-2xl p-8"
      >
        <div className="text-white mb-4">
          <p className="text-center text-black text-4xl font-medium font-Poppins leading-normal">
            Forgot Password
          </p>
          <p className="text-zinc-500 text-center">
            We will send you instructions to reset your password.
          </p>
        </div>
        <label className="text-slate-800 text-opacity-80 text-xs font-medium font-Manrope leading-none tracking-wide">
          Email:
        </label>
        <div className="relative w-full">
          <input
            required
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (emailError) {
                setEmailError("");
              }
            }}
            className={`w-full bg-blue-100 rounded-md px-4 py-2 mb-5 ${
              emailError ? "border border-red-500" : ""
            }`}
          />
          {emailError && (
            <div className="text-red-500 text-sm absolute bottom-0 left-0 ml-4 mb-0">
              {emailError}
            </div>
          )}
        </div>
        <button
          onClick={handleResetPassword}
          className="w-full bg-blue-500 text-white py-2 rounded-md mt-2"
        >
          Reset Password
        </button>
        <div className="w-40 mx-auto bg-white rounded border border-neutral-200 justify-center items-center p-2 mt-8">
          <a
            href="login"
            className="w-full text-white-500 flex items-center justify-center text-indigo-500"
          >
            <BsArrowLeft className="mr-1" />
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
