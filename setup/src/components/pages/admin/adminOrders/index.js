import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchadminOrders,
  deleteadminOrders,
} from "../../../../store/adminOrders-slice";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../../../store/user-slice";
import {
  AiOutlineDelete,
  AiOutlineSearch,
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineLogout,
} from "react-icons/ai";
import { MdOutlineSpaceDashboard, MdOutlineCategory } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { BsBag, BsBoxSeam } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import ReactPaginate from "react-paginate";
import { CiCircleMinus } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
export default function AdminOrders() {
  const initialOrders = [];
  const Orders =
    useSelector((state) => state.adminOrders.adminOrders) || initialOrders;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 8;
  const [searchTerm, setSearchTerm] = useState("");
  let [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchadminOrders());
  }, [dispatch]);
  console.log(Orders);

  const pageCount = Math.ceil(Orders.length / itemsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  const displayedOrders = Array.isArray(Orders)
    ? Orders.filter((order) =>
        String(order.user_id).toLowerCase().startsWith(searchTerm.toLowerCase())
      ).slice(pageNumber * itemsPerPage, (pageNumber + 1) * itemsPerPage)
    : [];
  const [showModal, setShowModal] = useState(false);
  const [orderIdClicked, setorderIdClicked] = useState(null);
  const [orderamountTotalClicked, setorderamountTotalClicked] = useState(null);
  const [userIdClicked, setuserIdClicked] = useState(null);
  const [orderDateClicked, setorderDateClicked] = useState(null);
  const [orderNameClicked, setorderNameClicked] = useState(null);
  const [orderAddressClicked, setorderAddressClicked] = useState(null);
  const [orderCityClicked, setorderCityClicked] = useState(null);
  const [orderCountryClicked, setorderCountryClicked] = useState(null);
  const [orderPostalCodeClicked, setorderPostalCodeClicked] = useState(null);
  const [orderShippingMethodClicked, setorderShippingMethodClicked] = useState(null);
  const [orderShippingRateDataClicked, setorderShippingRateDataClicked] = useState(null);
  const [orderPhoneNumberClicked, setorderPhoneNumberClicked] = useState(null);
  
  const modalRef = useRef(null);

  const handleRowClick = (
    orderId,
    amount_total,
    user_id,
    order_date,
    userName,
    street_address,
    city,
    country,
    postal_code,
    shipping_method,
    shipping_rate_data,
    phone_number,
  ) => {
    setorderIdClicked(orderId);
    setorderamountTotalClicked(amount_total);
    setuserIdClicked(user_id);
    setorderDateClicked(order_date);
    setorderNameClicked(userName);
    setorderAddressClicked(street_address);
    setorderCityClicked(city);
    setorderCountryClicked(country);
    setorderPostalCodeClicked(postal_code);
    setorderShippingMethodClicked(shipping_method);
    setorderShippingRateDataClicked(shipping_rate_data);
    setorderPhoneNumberClicked(phone_number);
    setShowModal(true);
  };

  const handleOverlayClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOverlayClick);
    return () => {
      document.removeEventListener("mousedown", handleOverlayClick);
    };
  }, []);

  return (
    <div className="flex bg-white h-full">
      <div className="bg-sky-50 w-1/5 px-4 py-8 flex flex-col justify-start items-center hidden lg:flex">
        <div className=" w-[220px] h-[70px] ml-1 mt-4 bg-white rounded-[10px] flex justify-center items-center  ">
          <span className="text-stone-300 text-4xl font-semibold font-poppins leading-tight">
            Su
          </span>
          <span className="text-blue-500 text-4xl font-semibold font-poppins leading-tight">
            p
          </span>
          <span className="text-stone-300 text-4xl font-semibold font-poppins leading-tight">
            er
          </span>
          <span className="text-blue-500 text-4xl font-semibold font-poppins leading-tight">
            N
          </span>
          <span className="text-stone-300 text-4xl font-semibold font-poppins leading-tight">
            ova
          </span>
        </div>
        <div className="flex flex-col items-center justify-between hidden lg:flex">
          <div className="mb-10 mt-20">
            <div className="w-[67px] text-zinc-500 text-base font-normal font-dren leading-none tracking-tight mb-6">
              Menu
            </div>
            <Link to="/adminDashboard">
              <button className="flex items-center justify-start w-48 space-x-2 h-10 bg-white text-black font-medium font-dren transition duration-300 transform hover:scale-105 focus:outline-none focus:ring font-bold rounded-lg text-lg group hover:bg-light-blue-300 transition duration-300 ease-in-out">
                <MdOutlineSpaceDashboard className="ml-4" />
                <span>Dashboard</span>
              </button>
            </Link>
          </div>
          <div className="mb-10">
            <Link to="/adminUsers">
              <button className="flex items-center justify-start space-x-2 w-48 h-10 bg-white text-black font-medium font-dren  transition duration-300 transform hover:scale-105 focus:outline-none focus:ring font-bold rounded-lg text-lg group hover:bg-light-blue-300 transition duration-300 ease-in-out">
                <RiAdminLine className="ml-4" />
                <span>Admins & Users</span>
              </button>
            </Link>
          </div>
          <div className="mb-10">
            <Link to="/adminProducts">
              <button className="flex items-center justify-start space-x-2 w-48 h-10 bg-white text-black font-medium font-dren transition duration-300 transform hover:scale-105 focus:outline-none focus:ring font-bold rounded-lg text-lg group hover:bg-light-blue-300 transition duration-300 ease-in-out">
                <BsBag className="ml-4" />
                <span>Products</span>
              </button>
            </Link>
          </div>
          <div className="mb-10">
            <Link to="/adminStock">
              <button className="flex items-center justify-start space-x-2 w-48 h-10 bg-white text-black font-medium font-dren  transition duration-300 transform hover:scale-105 focus:outline-none focus:ring font-bold rounded-lg text-lg group hover:bg-light-blue-300 transition duration-300 ease-in-out">
                <BsBoxSeam className="ml-4" />
                <span>Stock</span>
              </button>
            </Link>
          </div>
          <div className="mb-10">
            <Link to="/adminCategories">
              <button className="flex items-center justify-start space-x-2 w-48 h-10 bg-white text-black font-medium font-dren transition duration-300 transform hover:scale-105 focus:outline-none focus:ring font-bold rounded-lg text-lg group hover:bg-light-blue-300 transition duration-300 ease-in-out">
                <MdOutlineCategory className="ml-4" />
                <span>Categories</span>
              </button>
            </Link>
          </div>
          <div className="mb-10">
            <Link to="/adminOrders">
              <button className="flex items-center justify-start space-x-2 w-48 h-10 bg-white bg-white text-black font-bold transition duration-300 transform hover:scale-105 focus:outline-none focus:ring font-bold rounded-lg text-lg group hover:bg-light-blue-300 transition duration-300 ease-in-out">
                <AiOutlineShoppingCart className="ml-4" />
                <span> Orders</span>
              </button>
            </Link>
          </div>
          <div class="w-56 border border-zinc-200 mb-10"></div>
          <div className="mb-10">
            <div class="w-[67px] text-zinc-500 text-base font-normal font-dren leading-none tracking-tight mb-6">
              Account
            </div>
            <Link to="/profile">
              <button className="flex items-center justify-start space-x-2 w-48 h-10 bg-white text-black font-medium font-dren transition duration-300 transform hover:scale-105 focus:outline-none focus:ring font-bold rounded-lg text-lg group hover:bg-light-blue-300 transition duration-300 ease-in-out">
                <CgProfile className="ml-4" />
                <span> Profile</span>
              </button>
            </Link>
          </div>
          <div className="mb-10">
            <Link to="/">
              <button className="flex items-center justify-start space-x-2 w-48 h-10 bg-white text-black font-medium font-dren transition duration-300 transform hover:scale-105 focus:outline-none focus:ring font-bold rounded-lg text-lg group hover:bg-light-blue-300 transition duration-300 ease-in-out">
                <AiOutlineHome className="ml-4" />
                <span> Homepage</span>
              </button>
            </Link>
          </div>
          <button
            onClick={logoutHandler}
            className="flex items-center justify-start space-x-2 w-48 h-10 bg-white text-black font-medium font-dren font-bold transition duration-300 transform hover:scale-105 focus:outline-none focus:ring font-bold rounded-lg text-lg group hover:bg-light-blue-300 transition duration-300 ease-in-out"
          >
            <AiOutlineLogout className="ml-4" />
            <span>Log Out</span>
          </button>
        </div>
      </div>
      <div className="flex-col">
        <div className="flex-1 p-4">
          <div className="flex justify-end items-center w-[1171px]  h-[300px] md:h-[100px] bg-sky-50 rounded-[19px] ml-12 mt-8 space-x-36 sm:w-full md:flex">
          <div className="relative">
          <div
                onClick={() => setOpen(!open)}
                className="text-3xl absolute left-3 bottom-[1%] cursor-pointer lg:hidden"
              >
                <ion-icon name={open ? "close" : "menu"}></ion-icon>
                {open ? "" : <CiCircleMinus />}
              </div>

              {open && (
                <div className="absolute  mb-2 lg:hidden z-50">
                  <div className="w-[400px] h-full p-5 bg-white rounded-tr-[5px] rounded-br-[5px] shadow border border-neutral-200 flex-col justify-end items-start gap-0.5 inline-flex">
                    <div className="h-[50px] flex items-center ">
                    <IoMdClose onClick={() => setOpen(!open)} className="text-gray-900 text-3xl" />
                    </div>
                    <div className="self-stretch p-5 bg-white rounded-lg flex items-center gap-2">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <MdOutlineSpaceDashboard className="text-gray-900 text-3xl" />
                      </div>
                      <Link
                        to="/adminDashboard"
                        className="text-gray-900 text-opacity-90 text-3xl font-medium font-dren leading-tight"
                      >
                        Dashboard
                      </Link>
                    </div>

                    <div className="self-stretch p-5 bg-white rounded-lg flex items-center gap-2">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <RiAdminLine className="text-gray-900 text-3xl" />
                      </div>
                      <Link
                        to="/adminUsers"
                        className="text-gray-900 text-opacity-90 text-3xl font-medium font-dren leading-tight"
                      >
                        Admins & Users
                      </Link>
                    </div>

                    <div className="self-stretch p-5 bg-white rounded-lg flex items-center gap-2">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <BsBag className="text-gray-900 text-3xl" />
                      </div>
                      <Link
                        to="/adminProducts"
                        className="text-gray-900 text-opacity-90 text-3xl font-medium font-dren leading-tight"
                      >
                        Products
                      </Link>
                    </div>
                    <div className="self-stretch p-5 bg-white rounded-lg flex items-center gap-2">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <BsBoxSeam className="text-gray-900 text-3xl" />
                      </div>
                      <Link
                        to="/adminStock"
                        className="grow shrink basis-0 flex-col justify-start items-start inline-flex"
                      >
                        <div className="self-stretch text-gray-900 text-opacity-90 text-3xl font-medium font-dren leading-tight">
                          Stock
                        </div>
                      </Link>
                    </div>
                    <div className="self-stretch p-5 bg-white rounded-lg flex items-center gap-2">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <MdOutlineCategory className="text-gray-900 text-3xl" />
                      </div>
                      <Link
                        to="/adminCategories"
                        className="grow shrink basis-0 flex-col justify-start items-start inline-flex"
                      >
                        <div className="self-stretch text-gray-900 text-opacity-90 text-3xl font-medium font-dren leading-tight">
                          Categories
                        </div>
                      </Link>
                    </div>
                    <div className="self-stretch p-5 bg-gray-200 rounded-lg flex items-center gap-2">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <AiOutlineShoppingCart className="text-gray-900 text-3xl" />
                      </div>
                      <Link
                        to="/adminOrders"
                        className="grow shrink basis-0 flex-col justify-start items-start inline-flex"
                      >
                        <div className="self-stretch text-gray-900 text-opacity-90 text-3xl font-medium font-dren leading-tight">
                          Orders
                        </div>
                      </Link>
                    </div>

                    <div className="self-stretch px-5 py-[3.50px] rounded-lg justify-start items-center inline-flex">
                      <div className="grow shrink basis-0 h-px bg-neutral-200" />
                    </div>
                    <div className="self-stretch p-5 bg-white rounded-lg flex items-center gap-2">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <CgProfile className="text-gray-900 text-3xl" />
                      </div>
                      <Link
                        to="/profile"
                        className="grow shrink basis-0 flex-col justify-start items-start inline-flex"
                      >
                        <div className="self-stretch text-gray-900 text-opacity-90 text-3xl font-medium font-dren leading-tight">
                          Profile
                        </div>
                      </Link>
                    </div>
                    <div className="self-stretch p-5 bg-white rounded-lg flex items-center gap-2">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <AiOutlineHome className="text-gray-900 text-3xl" />
                      </div>
                      <Link
                        to="/"
                        className="grow shrink basis-0 flex-col justify-start items-start inline-flex"
                      >
                        <div className="self-stretch text-gray-900 text-opacity-90 text-3xl font-medium font-dren leading-tight">
                          Homepage
                        </div>
                      </Link>
                    </div>
                    <div className="self-stretch p-5 rounded-lg justify-start items-center gap-2 inline-flex">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <AiOutlineLogout className="text-gray-900 text-3xl" />
                      </div>
                      <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                        <div className="self-stretch text-gray-900 text-opacity-90 text-3xl font-medium font-dren leading-tight">
                          <button onClick={logoutHandler}>Logout</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              </div>
            <div className="flex  w-[700px] bg-white items-center rounded-[20px] border border-stone-300 justify-start items-center gap-2 inline-flex">
              <AiOutlineSearch className="text-2xl text-gray-500 ml-2" />
              <input
                type="search"
                placeholder="Search..."
                className="w-full  focus:outline-blue-500 bg-white rounded-lg p-2 h-[100px] md:h-12 text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="">
              <Link to="/profile">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
                  className="w-40 h-40 md:w-20 md:h-20 mx-auto block"
                  alt="profile"
                ></img>
              </Link>
            </div>
          </div>
          <div>
          </div>
          <div className="mt-20 px-5 pt-3">
            <div>
              <table className="table-auto w-full rounded-lg bg-slate-50">
                <thead className="bg-slate-50">
                  <tr>
                   
                    <th className="border-b-2 border-stone-300 px-6 pt-10 text-center text-stone-300 text-3xl md:text-xl">
                    <div className="w-[127px] h-[37px] text-blue-500 text-2xl pb-12 font-bold font-dren capitalize leading-normal">
                        Orders
                      </div>
                      User ID
                    </th>

                    <th className="border-b-2 border-stone-300 px-6 pt-10 text-center text-stone-300 text-3xl md:text-xl">
                      Order Date
                    </th>
                    <th className="border-b-2 border-stone-300 px-6 pt-10 text-center text-stone-300 text-3xl md:text-xl">
                      Total
                    </th>
                    <th className="border-b-2 border-stone-300 px-6 pt-10 text-center text-stone-300 text-3xl md:text-xl">
                      Name
                    </th>

                    <th className="border-b-2 border-stone-300 px-6 pt-10 text-center text-stone-300 text-3xl md:text-xl">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {displayedOrders.length > 0 ? (
                    displayedOrders.map((order) => (
                      <tr key={order.orderId}>
                        <td
                          className="px-8 py-2 text-center font-mono text-3xl md:text-xl relative "
                          onClick={() =>
                            handleRowClick(
                              order.orderId,
                              order.amount_total,
                              order.user_id,
                              order.order_date,
                              order.userName,
                              order.street_address,
                              order.city,
                              order.country,
                              order.postal_code,
                              order.shipping_method,
                              order.shipping_rate_data,
                              order.phone_number,
                            )
                          }
                        >
                          <span
                            className="ml-4 absolute h-2 w-2 rounded-full bg-blue-500 left-2 top-1/2 transform -translate-y-1/2"
                            aria-hidden="true"
                          ></span>
                          {order.user_id}
                        </td>

                        <td
                          className="px-8 py-2 text-center font-mono text-3xl md:text-xl relative"
                          onClick={() =>
                            handleRowClick(
                              order.orderId,
                              order.amount_total,
                              order.user_id,
                              order.order_date,
                              order.userName,
                              order.street_address,
                              order.city,
                              order.country,
                              order.postal_code,
                              order.shipping_method,
                              order.shipping_rate_data,
                              order.phone_number,
                            )
                          }
                        >
                          <span className="text-lg">
                            {new Date(order.order_date).toLocaleString(
                              "en-GB",
                              {
                                day: "numeric",
                                month: "numeric",
                                year: "numeric",
                                hour: "numeric",
                                minute: "numeric",
                              }
                            )}
                          </span>
                        </td>
                        <td
                          className="px-8 py-2 text-center font-mono text-3xl md:text-xl relative "
                          onClick={() =>
                            handleRowClick(
                              order.orderId,
                              order.amount_total,
                              order.user_id,
                              order.order_date,
                              order.userName,
                              order.street_address,
                              order.city,
                              order.country,
                              order.postal_code,
                              order.shipping_method,
                              order.shipping_rate_data,
                              order.phone_number,
                            )
                          }
                        >
                          {order.amount_total}
                        </td>
                        <td
                          className="px-8 py-2 text-center font-mono text-3xl md:text-xl relative "
                          onClick={() =>
                            handleRowClick(
                              order.orderId,
                              order.amount_total,
                              order.user_id,
                              order.order_date,
                              order.userName,
                              order.street_address,
                              order.city,
                              order.country,
                              order.postal_code,
                              order.shipping_method,
                              order.shipping_rate_data,
                              order.phone_number,
                            )
                          }
                        >
                          {order.userName}
                        </td>
                        <td
                          className="px-8 py-2 text-center font-mono text-3xl md:text-xl relative"
                          onClick={() =>
                            handleRowClick(
                              order.orderId,
                              order.amount_total,
                              order.user_id,
                              order.order_date,
                              order.userName,
                              order.street_address,
                              order.city,
                              order.country,
                              order.postal_code,
                              order.shipping_method,
                              order.shipping_rate_data,
                              order.phone_number,
                            )
                          }
                        >
                          <button
                            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:ring-green-300 ml-1"
                            onClick={() => {
                              dispatch(deleteadminOrders(order.orderId));
                              window.location.reload();
                            }}
                          >
                            <AiOutlineDelete />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="9" className="px-8 py-8">
                        Loading...
                      </td>
                    </tr>
                  )}
                  <tr>
                    <td colSpan="9">
                      <div className="flex justify-center items-center">
                        <ReactPaginate
                          previousLabel={"<"}
                          nextLabel={">"}
                          pageCount={pageCount}
                          onPageChange={changePage}
                          containerClassName={
                            "flex items-center justify-center space-x-4"
                          }
                          previousLinkClassName={"previous-page"}
                          disabledClassName={"disabled"}
                          activeClassName={"active"}
                          pageRangeDisplayed={2}
                          marginPagesDisplayed={0}
                          breakLabel={<span>...</span>}
                          onPageActive={(page) => (
                            <span className="page-number">
                              {page === 0
                                ? "1"
                                : page === pageCount - 1
                                ? pageCount
                                : null}
                            </span>
                          )}
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              {showModal && (
                <div className="flex fixed top-0 left-0 w-full h-full bg-gray-200 bg-opacity-50 flex justify-center items-center">
                  <div
                    className="bg-white w-auto h-auto p-8 rounded-lg"
                    ref={modalRef}
                  >
                    <div className="flex ">
                      <div className="w-full px-4 pb-8 pt-6">
                        <h1 className="text-xl font-bold text-gray-700 mb-2">
                          OrderId: {orderIdClicked}
                        </h1>
                        <p className="text-xl text-gray-600 mb-2">
                          UserId: {userIdClicked}
                        </p>
                        <p className="text-xl text-gray-600 mb-2">
                          Total: {orderamountTotalClicked}
                        </p>
                        <p className="text-xl text-gray-600 mb-2">
                          Created:{" "}
                          {new Date(orderDateClicked).toLocaleString("en-GB", {
                            day: "numeric",
                            month: "numeric",
                            year: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                          })}
                        </p>
                        <p className="text-xl text-gray-600 mb-2">
                          Name: {orderNameClicked}
                        </p>
                        <p className="text-xl text-gray-600 mb-2">
                          Address: {orderAddressClicked}
                        </p>
                        <p className="text-xl text-gray-600 mb-2">
                          City: {orderCityClicked}
                        </p>
                        <p className="text-xl text-gray-600 mb-2">
                          Country: {orderCountryClicked}
                        </p>
                        <p className="text-xl text-gray-600 mb-2">
                          PostalCode: {orderPostalCodeClicked}
                        </p>
                        <p className="text-xl text-gray-600 mb-2">
                          Shipping Method: {orderShippingMethodClicked}
                        </p>
                        <p className="text-xl text-gray-600 mb-2">
                          Shipping Rate: {orderShippingRateDataClicked}
                        </p>
                        <p className="text-xl text-gray-600 mb-2">
                          Phone Number: {orderPhoneNumberClicked}
                        </p>

                        <button
                          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:ring-green-300 ml-1"
                          onClick={() => {
                            dispatch(deleteadminOrders(orderIdClicked));
                            window.location.reload();
                          }}
                        >
                          <AiOutlineDelete />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
