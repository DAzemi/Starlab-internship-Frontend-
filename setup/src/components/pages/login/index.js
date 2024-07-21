import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../../store/user-slice";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function Login() {
  const [rememberMe, setRememberMe] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (rememberMe) {
      localStorage.setItem("rememberedEmail", email);
      localStorage.setItem("rememberedPassword", password);
    }

    dispatch(login({ email, password }));
  };

  useEffect(()=>{
    if(token) {
    navigate("/");
    }
  },[token,navigate])
  
  useEffect(() => {
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    const rememberedPassword = localStorage.getItem("rememberedPassword");

    if (rememberedEmail) {
      emailRef.current.value = rememberedEmail;
      setRememberMe(true);
    }

    if (rememberedPassword) {
      passwordRef.current.value = rememberedPassword;
    }
  }, []);
  return (
    <div className="flex h-screen">
      <div className="hidden md:block bg-blue-500 w-3/5 rounded-r-lg relative overflow-hidden">
        <AiOutlineArrowLeft
          size={48}
          color="white"
          className="absolute left-12 top-10 cursor-pointer z-10"
          onClick={() => {
            navigate("/");
          }}
        />
        <div className="bg-gradient-to-b from-indigo-300 rounded-full absolute bottom-32 -left-12 md:p-64 lg:p-96 overflow-hidden"></div>
        <p className="text-xl lg:w-3/5 p-12 top-70 text-white opacity-8 absolute bottom-16 left-8">
          We are dedicated to providing you with an unparalleled shopping
          experience,offering a handpicked selection of the most up-to-date and
          innovative tech products on the market.
        </p>
      </div>
      <form className="w-full md:w-2/5 p-8 flex flex-col text-center justify-center items-center gap-3 text-xl">
        <h1 className="text-2xl font-semibold text-indigo-300 ">
          Su<span className="text-blue-500">p</span>er
          <span className="text-blue-500">N</span>ova
        </h1>
        <div>
          <h3 className="text-xl text-black font-bold">Hello Again!</h3>
          <small className="text-gray-500 ">
            Our commitment to excellence extends to <br /> customer service and
            satisfaction
          </small>
        </div>
        <small className="">
          <label htmlFor="email">Email</label>
        </small>
        <input
          type="email"
          name="email"
          id="email"
          className="bg-blue-200 rounded-lg md:w-3/4 lg:w-2/4 p-2 focus:border-blue-900"
          ref={emailRef}
        />
        <small>
          <label htmlFor="password">Password</label>
        </small>
        <input
          type="password"
          name="password"
          id="password"
          className="bg-blue-200 rounded-lg md:w-3/4 lg:w-2/4 p-2 focus:border-blue-900"
          ref={passwordRef}
        />
        <div className="flex content-between items-center gap-3">
          <div className="flex items-center text-center">
            <input
              type="checkbox"
              onChange={() => setRememberMe((prev) => !prev)}
            ></input>
            <small className="text-gray-500 pl-px">Remember me</small>
          </div>
          <a
            href="/forgotPassword"
            className="text-blue-900 cursor-pointer font-semibold"
          >
            Forgot your password?
          </a>
        </div>
        <button
          className="bg-blue-500 text-white rounded md:w-3/4 lg:w-2/4 p-2 cursor-pointer"
          onClick={handleSubmit}
        >
          Log In
        </button>
        <div className="flex items-center text-center justify-between gap-3">
          <small className="text-gray-500">Don't have an account? </small>
          <a
            href="/register"
            className="text-blue-900 font-semibold   cursor-pointer"
          >
            Register
          </a>
        </div>
      </form>
    </div>
  );
}
