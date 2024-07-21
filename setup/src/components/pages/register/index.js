import { useState, useRef } from "react";
import {
  setEmail,
  sendEmailVerification,
  setToken,
} from "../../../store/user-slice";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../store/user-slice";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineArrowLeft } from "react-icons/ai";
import DotLoader from "react-spinners/DotLoader";
import axios from "axios";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const token = useSelector((state) => state.user.token);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [rememberMe, setRememberMe] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;

  const handleGoogleLogin = async () => {
    try {
      window.open("http://localhost:4000/api/auth/google", "_self");
    } catch (error) {
      console.log("Error while loggin in with google", error);
    }
  };

  const emailRegex = /^\S+@\S+$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const togglePasswordVisibility = (field) => {
    if (field === "password") {
      setShowPassword(!showPassword);
    } else if (field === "confirmPassword") {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all fields");
      return;
    }
    if (!emailRegex.test(email)) {
      alert("Invalid email format");
      return;
    }

    if (!passwordRegex.test(password)) {
      alert(
        "Password must be at least 8 characters long and contain an uppercase"
      );
      return;
    }

    if (!agreedToTerms) {
      alert("You must agree to our terms of service and privacy policy");
      return;
    }

    try {
      setLoading(true);
      const message = await dispatch(register({ name, email, password }));
      if (message === "User registered successfully") {
        await dispatch(sendEmailVerification(email));
        navigate("/sendEmailVerification");
      } else {
        alert("Sign Up failed: " + message);
        return;
      }
    } catch (error) {
      if (error.response) {
        alert("Sign Up failed: " + error.response.data.message);
      } else if (error.message) {
        alert("Signup error: " + error.message);
      } else {
        alert("An unexpected error occurred during signup.");
      }
    } finally {
      setLoading(false);
    }

    if (confirmPassword === password) {
      setPasswordMatch(true);
      setAgreedToTerms(true);
      dispatch(setEmail(email));
      navigate(`/sendEmailVerification`);
    } else {
      setPasswordMatch(false);
    }
  };

  return (
    <div className="flex h-screen font-[Poppins] flex-col md:flex-row sm:flex sm:flex-col">
      <div className="sm:hidden md:block bg-blue-500 w-3/5 sm:flex  rounded-r-lg relative overflow-hidden">
        <AiOutlineArrowLeft
          size={48}
          color="white"
          className="absolute left-12 top-10 cursor-pointer"
          onClick={() => {
            navigate("/login");
          }}
        />
        <div
          className="bg-gradient-to-b from-indigo-300 rounded-[50%] absolute -bottom-6 left-36 md:p-64 lg:p-64 lg:h-64rem overflow-hidden"
          style={{ height: "92rem", padding: "36rem" }}
        ></div>
        <p className="text-xl lg:w-3/5 p-12 xl:text-[24px] lg:text-[20] md:text-[18px] text-[14px] min-h-800:!text-[14px] font-normal tracking-tight top-70 text-white opacity-8 absolute bottom-16 left-6">
          We are dedicated to providing you with an unparalleled shopping
          experience,offering a handpicked selection of the most up-to-date and
          innovative tech products on the market.
        </p>
      </div>
      <div className="RightSide flex flex-col sm:width-full lg:w-2/5 justify-center items-center">
        <section className="flex flex-col my-auto max-md:mt-10  sm:flex-wrap sm:content-center sm:items-center">
          {viewportWidth < 762 ? (
            <AiOutlineArrowLeft
              color="rgb(29 78 216)"
              className="absolute left-6 top-14"
              size={32}
              onClick={() => {
                navigate("/login");
              }}
            />
          ) : (
            ""
          )}
          <h1
            className={`text-blue-500 self-center mt-5 ${
              viewportHeight < 800 ? "mb-8" : ""
            }  [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-transparent xl:!text-[40px] text-[32px] text-3xl text-32 tracking-wider leading-[20px]`}
          >
            <span className="text-stone-300">Su</span>
            <span className="text-blue-500">p</span>
            <span className="text-stone-300">er</span>
            <span className="text-blue-500">N</span>
            <span className="text-stone-300">ova</span>
          </h1>
          <div
            className={`relative rounded-[30px] self-stretch rounded-3xs flex grow flex-col w-full ${
              viewportHeight < 800 ? "mt-0 mb-0" : "mt-24"
            } max-md:mt-10 lg:bg-inherit bg-[#ecf9ff70] rounded-lg xl:mb-0 2xl:mb-0 lg:mb-0 mb-12 lg:pb-0 pb-8`}
          >
            <h2 className="justify-center lg:text-black text-slate-500 text-center lg:!text-[40px] text-[32px] font-medium leading-[60%] self-center max-w-[274px] lg:mt-4 mt-4">
              Welcome!
            </h2>
            <p className="justify-center text-zinc-400 text-center lg:!text-base md:text-base text-14 leading-[153.333%] tracking-wider self-center max-w-[363px] mt-6">
              Sign up by entering details below.
            </p>
            <form
              className={`lg:items-start self-stretch flex flex-col ${
                viewportHeight < 800 ? "mt-0" : "mt-8"
              } flex-row items-center`}
            >
              <label
                htmlFor="name"
                className="text-slate-800 text-opacity-80 lg:text-14 md:text-14 text-13 font-medium leading-[123.077%] tracking-wide lg:pl-0 pl-4 self-start"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                ref={nameRef}
                className="items-start px-2 border border-[color:var(--day-base-base-04,#E0E0E0)] bg-blue-500 bg-opacity-20 flex lg:w-[409px] w-11/12 lg:h-11 md:h-11 h-8 flex-col mt-1 rounded-xl border-solid pl-4 pr-4"
              />
            </form>
            <form className="lg:items-start self-stretch flex flex-col mt-4 flex-row items-center">
              <label
                htmlFor="email"
                className="text-slate-800 text-opacity-80 lg:!text-14 md:text-14 text-13 font-medium leading-[123.077%] tracking-wide lg:pl-0 pl-4 self-start"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                ref={emailRef}
                className="items-start px-2 border border-[color:var(--day-base-base-04,#E0E0E0)] bg-blue-500 bg-opacity-20 flex lg:w-[409px] w-11/12 lg:h-11 md:h-11 h-8 flex-col mt-1 rounded-xl border-solid pl-4 pr-4"
              />
            </form>
            <div className="relative">
              <form className="lg:items-start self-stretch flex flex-col mt-4 flex-row items-center">
                <label
                  type="password"
                  htmlFor="password"
                  className="text-slate-800 text-opacity-70 lg:!text-14 md:text-14 text-13 font-medium leading-[123.077%] tracking-wide lg:pl-0 pl-4 self-start"
                >
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="8+ characters required"
                  ref={passwordRef}
                  value={password}
                  onChange={handlePasswordChange}
                  className="items-start text-13 px-2 border border-[color:var(--day-base-base-04,#E0E0E0)] bg-blue-500 bg-opacity-20 flex lg:w-[409px] w-11/12 lg:h-11 md:h-11 h-8 flex-col mt-1 rounded-xl border-solid pl-4 pr-4"
                />
                {password && (
                  <AiOutlineEye
                    className="absolute lg:right-5 right-6 lg:bottom-2.5 bottom-1 cursor-pointer"
                    size={24}
                    color="grey"
                    onClick={() => togglePasswordVisibility("password")}
                  />
                )}
              </form>
            </div>
            <div className="relative">
              <form className="lg:items-start self-stretch flex flex-col mt-4 flex-row items-center">
                <label
                  type="password"
                  htmlFor="password"
                  className="text-slate-800 text-opacity-70 lg:!text-14 md:text-14 text-13 font-medium leading-[123.077%] tracking-wide lg:pl-0 pl-4 self-start"
                >
                  Confirm password
                </label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  ref={confirmPasswordRef}
                  placeholder="8+ characters required"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  className="items-start text-13 px-2 border border-[color:var(--day-base-base-04,#E0E0E0)] bg-blue-500 bg-opacity-20 flex lg:w-[409px] w-11/12 lg:h-11 md:h-11 h-8  flex-col mt-1 rounded-xl border-solid pl-4 pr-4"
                />
                {confirmPassword && (
                  <AiOutlineEye
                    className="absolute lg:right-5 right-6 lg:bottom-2.5 bottom-1 cursor-pointer"
                    size={24}
                    color="grey"
                    onClick={() => togglePasswordVisibility("confirmPassword")}
                  />
                )}
              </form>
            </div>
            <div
              className={`items-start self-start flex w-[90%] max-w-full gap-3 ${
                viewportHeight < 800 ? "mt-1" : "mt-10"
              } lg:pl-0 pl-4`}
            >
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="h-6 w-5 -mr-2 rounded border border-gray-300 focus:ring-blue-500 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600x"
                  id="agreeToTerms"
                  onClick={() => setAgreedToTerms(true)}
                />
              </label>
              <h3 className="text-blue-700 w-[100%] lg:text-16 md:text-16 lg:font-semibold sm:font-light text-13 leading-6 self-stretch grow shrink-0 basis-auto  ">
                <span className="text-neutral-400">I agree to the </span>
                <a
                  href="/terms-of-service"
                  className="text-blue-700"
                  aria-label="terms of service"
                >
                  terms of service
                </a>
                <span className="text-neutral-400"> and </span>
                <a
                  href="/privacy-policy"
                  className="text-blue-700"
                  aria-label="privacy policy"
                >
                  privacy policy
                </a>
              </h3>
            </div>
            <div className="SignUpButton flex justify-center">
              <button
                className={`justify-center items-center bg-blue-700 hover:bg-sky-700 duration-300 hover:scale-[1.02] self-stretch flex lg:w-full w-11/12 flex-col ${
                  viewportHeight < 800 ? "mt-2" : "!mt-9"
                }  px-5 py-3 rounded-md`}
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? (
                  <div className="DotLoader">
                    <DotLoader size={26} color="aquamarine" />
                  </div>
                ) : (
                  <span className="h-[24px] top-0 left-0 font-Manrope font-extrabold text-white lg:text-15 text-13 tracking-[0] leading-[24px] whitespace-nowrap">
                    Sign up
                  </span>
                )}
              </button>
            </div>
            <p
              className={`text-stone-300 text-center text-base font-medium leading-[123.333%] tracking-wide ${
                viewportHeight < 800 ? "mt-3" : "mt-7"
              } mt-7`}
            >
              <div className="flex flex-row items-center justify-center">
                <hr className="h-px w-40 bg-gray-200 border-0 dark:bg-slate-300 mr-4"></hr>
                Or
                <hr className="h-px w-40 bg-gray-200 border-0 dark:bg-slate-300 ml-4"></hr>
              </div>
            </p>
            {
              <div
                className="SignUpGoogle flex justify-center cursor-pointer"
                onClick={handleGoogleLogin}
              >
                <div
                  className={`border bg-white hover:bg-gray-200 hover:scale-[1.02] duration-300 self-stretch flex lg:w-full w-11/12 flex-col ${
                    viewportHeight < 800 ? "mt-3" : "mt-8"
                  } pl-4 pr-5 py-3 rounded-md border-solid border-gray-300`}
                >
                  <div className="flex w-[266px] max-w-full items-start lg:justify-between  lg:gap-5 gap-16">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4300665f-2cda-4113-a45c-859db321204b?apiKey=a8acfb2699eb4c729609db6e3e9745f8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4300665f-2cda-4113-a45c-859db321204b?apiKey=a8acfb2699eb4c729609db6e3e9745f8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4300665f-2cda-4113-a45c-859db321204b?apiKey=a8acfb2699eb4c729609db6e3e9745f8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4300665f-2cda-4113-a45c-859db321204b?apiKey=a8acfb2699eb4c729609db6e3e9745f8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4300665f-2cda-4113-a45c-859db321204b?apiKey=a8acfb2699eb4c729609db6e3e9745f8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4300665f-2cda-4113-a45c-859db321204b?apiKey=a8acfb2699eb4c729609db6e3e9745f8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4300665f-2cda-4113-a45c-859db321204b?apiKey=a8acfb2699eb4c729609db6e3e9745f8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4300665f-2cda-4113-a45c-859db321204b?apiKey=a8acfb2699eb4c729609db6e3e9745f8&"
                      className="aspect-[0.95] object-cover object-center w-[21px] overflow-hidden self-stretch max-w-full"
                      alt="logo"
                    />
                    <p className="font-Roboto font-medium text-zinc-700 text-center lg:text-14 text-13 font-medium leading-[121.429%] tracking-wide self-center my-auto">
                      Sign up with Google
                    </p>
                  </div>
                </div>
              </div>
            }
            <p className="font-Manrope justify-center text-blue-700 lg:text-16 text-15 text-transparent font-semibold leading-6 self-center mt-8">
              <span className="text-neutral-400">
                Already have an account?{" "}
              </span>
              <a href="/login" className="text-blue-700" aria-label="sign in">
                Log in
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Register;
