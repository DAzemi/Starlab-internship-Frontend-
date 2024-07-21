import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectResetPassword,
  selectResetPasswordError,
  sendUpdatePasswordRequest,
} from "../../../store/resetPasswordSlice";
import { useNavigate, useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

function SetNewPassword() {
  const { token } = useParams();
  const containerStyle = {
    width: "100%",
    maxWidth: "595px",
    height: "490px",
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const resetError = useSelector(selectResetPassword);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const email = useSelector(selectResetPassword).email;

  const handleResetPassword = async () => {
    if (password.trim().length < 8) {
      setPasswordError("Password must be at least 8 characters.");
      return;
    } else {
      setPasswordError("");
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
      return;
    } else {
      setConfirmPasswordError("");
    }

    try {
      dispatch(
        sendUpdatePasswordRequest({
          email,
          token,
          newPassword: confirmPassword,
        })
      ).then((resultAction) => {
        console.log("resetPassword.js", email, token, confirmPassword);
        if (sendUpdatePasswordRequest.fulfilled.match(resultAction)) {
          navigate("/all-done");
        } else {
          console.log("Reseting your password failed");
          alert("Password couldn't get reset.");
        }
      });
    } catch (error) {
      console.log("Reset password failed: ", error);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError("");
  };

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
            Set new password
          </p>
          <p className="text-zinc-500 text-center">
            Must be at least 8 characters.
          </p>
        </div>
        <div className="relative w-full">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className={`w-full bg-blue-50 rounded-md px-4 py-2 mb-4 ${
              passwordError ? "border border-red-500" : ""
            }`}
          />
          {passwordError && (
            <p className="text-red-500 text-xs absolute bottom-0 left-0 ml-4 mb-0">
              {passwordError}
            </p>
          )}
        </div>
        <div className="relative w-full">
          <label>Confirm password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className={`w-full bg-blue-50 rounded-md px-4 py-2 mb-4 ${
              confirmPasswordError ? "border border-red-500" : ""
            }`}
          />
          {confirmPasswordError && (
            <p className="text-red-500 text-sm absolute bottom-0 left-0 ml-4 mb-0">
              {confirmPasswordError}
            </p>
          )}
        </div>
        <button
          onClick={handleResetPassword}
          className="w-full bg-blue-600 text-white py-2 rounded-md mb-4"
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

export default SetNewPassword;
