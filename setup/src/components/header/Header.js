import React, { useEffect, useState, useRef } from "react";
import {
  AiOutlineLogin,
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineLogout,
  AiOutlineSearch,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, setUserName } from "../../store/user-slice";
import { CiMenuBurger, CiCircleMinus } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const Header = ({ setSearchTerm, searchTerm, setModalOpen }) => {
  let [open, setOpen] = useState(false);
  const [forceRender, setForceRender] = useState(false);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cartItems);
  useEffect(() => {
    setForceRender((prev) => !prev);
  }, [token]);
  console.log(cart);

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  const searchRef = useRef();

  const [searchClicked, setSearchClicked] = useState(false);
  const searchHandler = (e) => {
    e.preventDefault();
    setSearchClicked((prev) => !prev);
    if (searchClicked) {
      searchRef.current.focus();
    }
  };

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeDropdown();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // console.log(userName);
  // const isLoadingUserName = useSelector((state) => state.user.isLoadingUserName);

  const changeHandler = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
    searchTerm.length > 2 ? setModalOpen(true) : setModalOpen(false);
  };

  const favoriteCheck = () => {
    if (token) {
      navigate("/profile/favorites");
    } else {
      toast.info("Please Log In first to see your favorites!");
    }
  };

  const location = useLocation();
  const isHome = location.pathname === "/";
  const isProducts = location.pathname === "/products";

  const user = useSelector((state) => state.user);

  return (
    <div className="shadow-md w-full z-50 left-0 relative">
      <div
        className="font-semibold text-blue-500 sm:flex items-center justify-between bg-white py-4 md:px-10 px-10 border-2 border-b-blue-500 space-y-2"
        style={{ background: "rgba(236, 249, 255, 0.60)" }}
      >
        {/* Logo */}
        <NavLink
          to="/"
          className="flex text-2xl hover:text-blue-800 items-center duration-300 ml-8"
        >
          <h1 className="font-semibold text-indigo-300 items-center">
            Su<span className="text-blue-500">p</span>er
            <span className="text-blue-500">N</span>ova
          </h1>
        </NavLink>

        <div
          className="relative bottom-7 sm:hidden cursor-pointer right-2"
          onClick={toggleBurgerMenu}
        >
          ☰
        </div>

        <div
          className={`sm:flex sm:gap-1 sm:gap-9 items-center ${
            isBurgerMenuOpen ? "flex" : "hidden"
          }`}
        >
          {/* Home */}
          <NavLink
            to="/"
            className={`w-20 h-11 ${
              isHome ? "bg-blue-500" : ""
            } rounded-xl justify-center items-center inline-flex duration-300 hover:bg-blue-500`}
          >
            <div className="w-20 self-stretch px-2.5 justify-center items-center flex">
              <div
                className={`px-2 justify-start items-start gap-2.5 flex ${
                  isHome ? "text-white" : "text-slate-400"
                }`}
              >
                Home
              </div>
            </div>
          </NavLink>

          {/* Shop */}
          <NavLink
            to="/products"
            className={`w-20 h-11 ${
              isProducts ? "bg-blue-500" : ""
            } rounded-xl justify-center items-center inline-flex duration-300 hover:bg-blue-500`}
          >
            <div className="w-20 self-stretch px-2.5 justify-center items-center flex">
              <div
                className={`px-2 justify-start items-start gap-2.5 flex ${
                  isProducts ? "text-white" : "text-slate-400"
                }`}
              >
                Shop
              </div>
            </div>
          </NavLink>

          {/* Elements */}
          <NavLink
            to="/products"
            className={`w-20 h-11  text-slate-400 rounded-xl justify-center items-center inline-flex duration-300 hover:bg-blue-500`}
          >
            <div className="w-20 self-stretch px-2.5 justify-center items-center flex">
              <div
                className={`px-2 justify-start items-start gap-2.5 flex `}
              >
                Elements
              </div>
            </div>
          </NavLink>

          {/* Features */}
          <NavLink
            to="/products"
            className={`w-20 h-11 text-slate-400 rounded-xl justify-center items-center inline-flex duration-300 hover:bg-blue-500`}
          >
            <div className="w-20 self-stretch px-2.5 justify-center items-center flex">
              <div
                className={`px-2 justify-start items-start gap-2.5 flex`}
              >
                Features
              </div>
            </div>
          </NavLink>
        </div>

        <div className="lg:flex lg:justify-center lg:items-center lg:relative sm:-ml-12 lg:h-12">
          <div className="bg-white rounded-full border border-gray-300 flex items-center sm:mt-4 md:mt-6 lg:mt-0">
            <button onClick={searchHandler} className="p-2 focus:outline-none">
              <AiOutlineSearch className="text-gray-500 text-xl" />
            </button>
            {searchClicked && (
              <input
                type="search"
                placeholder="Search..."
                ref={searchRef}
                value={searchTerm}
                className="w-40 bg-white rounded-full p-2"
                onChange={changeHandler}
              />
            )}
          </div>
        </div>

        <ul
          className={`font-semibold rounded-lg transition-all duration-200 ease-in ${
            isBurgerMenuOpen ? "flex" : "hidden"
          }  top-full right-0 lg:static lg:flex lg:items-center lg:justify-center lg:flex-row-reverse lg:space-x-4`}
        >
          {/* Your user info section */}

          <div className="md:ml-8 text-xl md:my-0 my-7 duration-200 hover:text-blue-800">
            {token && (
              <div className="flex items-center justify-center gap-5">
                {/* Icons visible on all screen sizes */}
                <div className="flex gap-6 px-6 items-center">
                  <AiOutlineHeart
                    className="cursor-pointer text-2xl"
                    onClick={favoriteCheck}
                  />
                  <NavLink
                    to="/cart"
                    className="flex relative items-center duration-200 hover:text-blue-800 gap-1"
                  >
                    <AiOutlineShoppingCart className="cursor-pointer text-2xl" />
                    {cart?.length > 0 && (
                      <small className="absolute -top-2 -right-4 w-4 h-5 flex justify-center text-center items-center bg-orange-700 text-white rounded-full">
                        {cart?.length}
                      </small>
                    )}
                  </NavLink>
                </div>

                {/* User Name visible on all screen sizes */}
                <div className="flex items-center ml-6">
                  <div className="text-blue-500 text-base font-medium font-Poppins leading-6">
                    Welcome:{" "}
                  </div>
                  <div className="text-blue-500 text-base font-medium font-Poppins leading-6 ml-2">
                    {token && <p>{token.name}</p>}
                  </div>
                </div>

                {/* User Info visible on all screen sizes */}
                <div className="block relative">
                  <div
                    className="-ml-2 cursor-pointer"
                    onClick={toggleDropdown}
                  >
                    <FaUser size={20} color="#007BFF" />
                  </div>

                  {isDropdownOpen && (
                    <div
                      ref={dropdownRef}
                      className="absolute z-10 top-full right-0 bg-white rounded-xl shadow border border-neutral-200 mt-2 p-3 "
                    >
                      <ul className="list-none w-24">
                        <li className="p-2 rounded-lg mb-2">
                          <NavLink
                            to="/profile"
                            className="text-blue-500 text-opacity-90 text-sm font-medium font-['Poppins'] leading-tight"
                          >
                            Profile
                          </NavLink>
                        </li>
                        {token?.role === "admin" && (
                          <li className="p-2 rounded-lg mb-2">
                            <NavLink
                              to="/adminDashboard"
                              className="text-blue-500 text-opacity-90 text-sm font-medium font-['Poppins'] leading-tight "
                            >
                              Admin Dashboard
                            </NavLink>
                          </li>
                        )}
                        <li className="p-2 rounded-lg">
                          <div className="flex justify-start items-center">
                            <NavLink
                              className="text-blue-500 text-opacity-90 text-sm font-medium font-['Poppins'] leading-tight"
                              to="/profile/orders"
                            >
                              Orders
                            </NavLink>
                          </div>
                        </li>
                        <li className="p-2 rounded-lg">
                          <div className="flex justify-start items-center">
                            <button
                              className="text-blue-500 text-opacity-90 text-sm font-medium font-['Poppins'] leading-tight"
                              onClick={logoutHandler}
                            >
                              Log Out
                            </button>
                          </div>
                        </li>
                        
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-center md:justify-start">
            <li className="bg-white rounded-2xl flex flex-col justify-center items-center md:flex-row md:justify-start">
              {!token && (
                <>
                  <div className="flex">
                    <button
                      onClick={favoriteCheck}
                      className="h-14 rounded-xl justify-center items-center flex px-5 items-center duration-200 hover:text-blue-800 gap-1"
                    >
                      <AiOutlineHeart />
                      <div className="px-1 justify-center items-center gap-2.5 flex">
                        <div className="text-blue-500 text-base text-lg font-semibold font-Poppins leading-normal">
                          Favorite
                        </div>
                      </div>
                    </button>

                    {/* Cart */}
                    <NavLink
                      to="/cart"
                      className="h-14 rounded-xl justify-center items-center flex  px-5 items-center duration-200 hover:text-blue-800 gap-1"
                    >
                      <AiOutlineShoppingCart />
                      <div className="px-1 justify-center items-center gap-2.5 flex">
                        <div className="text-blue-500 text-base text-lg font-semibold font-Poppins leading-normal">
                          Cart
                        </div>
                        {cart?.length > 0 && (
                          <small className="relative -top-3 right-2 w-4 h-5 flex justify-center text-center items-center bg-orange-700 text-white rounded-full">
                            {cart?.length}
                          </small>
                        )}
                      </div>
                    </NavLink>

                    {/* Login */}
                    <NavLink
                      to="/login"
                      className="h-14 rounded-xl justify-center items-center flex  px-5 items-center duration-200 hover:text-blue-800 gap-1"
                    >
                      <AiOutlineLogin />
                      <div className="px-1 justify-center items-center gap-2.5 flex">
                        <div className="text-blue-500 text-base text-lg font-semibold font-Poppins leading-normal">
                          Login
                        </div>
                      </div>
                    </NavLink>
                  </div>
                </>
              )}
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
