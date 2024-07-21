import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, deleteUsers } from "../../../../store/adminUsers-slice";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../../../store/user-slice";
import { fetchadmins } from "../../../../store/adminDashboard-slice";
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

export default function AdminUser() {
  const initialAdmins = [];
  const initialUsers = [];
  const admins = useSelector((state) => state.admin.admins) || initialAdmins;
  const users =
    useSelector((state) => state.adminUsers.adminUsers) || initialUsers;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  let [open, setOpen] = useState(false);

  const [adminPageNumber, setAdminPageNumber] = useState(0);
  const adminItemsPerPage = 9;
  const [userPageNumber, setUserPageNumber] = useState(0);
  const userItemsPerPage = 8;

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchadmins());
  }, [dispatch]);

  const adminPageCount = Math.ceil(admins.length / adminItemsPerPage);
  const userPageCount = Math.ceil(users.length / userItemsPerPage);

  const handleAdminPageChange = ({ selected }) => {
    setAdminPageNumber(selected);
  };

  const handleUserPageChange = ({ selected }) => {
    setUserPageNumber(selected);
  };

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  const displayedAdmins = Array.isArray(admins)
    ? admins
        .filter((admin) =>
          admin.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .slice(
          adminPageNumber * adminItemsPerPage,
          (adminPageNumber + 1) * adminItemsPerPage
        )
    : [];
  const displayedUsers = Array.isArray(users)
    ? users
        .filter((user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .slice(
          userPageNumber * userItemsPerPage,
          (userPageNumber + 1) * userItemsPerPage
        )
    : [];

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
            <div class="w-[67px] text-zinc-500 text-base font-normal font-dren leading-none tracking-tight mb-6">
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
              <button className="flex items-center justify-start space-x-2 w-48 h-10 bg-white text-black font-bold  transition duration-300 transform hover:scale-105 focus:outline-none focus:ring font-bold rounded-lg text-lg group hover:bg-light-blue-300 transition duration-300 ease-in-out">
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
              <button className="flex items-center justify-start space-x-2 w-48 h-10 bg-white bg-white text-black font-medium font-dren  transition duration-300 transform hover:scale-105 focus:outline-none focus:ring font-bold rounded-lg text-lg group hover:bg-light-blue-300 transition duration-300 ease-in-out">
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
              <button className="flex items-center justify-start space-x-2 w-48 h-10 bg-white  bg-white text-black font-medium font-dren transition duration-300 transform hover:scale-105 focus:outline-none focus:ring font-bold rounded-lg text-lg group hover:bg-light-blue-300 transition duration-300 ease-in-out">
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

                    <div className="self-stretch p-5 bg-gray-200 rounded-lg flex items-center gap-2">
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
                    <div className="self-stretch p-5 bg-white rounded-lg flex items-center gap-2">
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
          <div className="flex flex-col items-center justify-center text-center mt-20">
            <div className="w-3/4 p-2">
              <table className="table-auto rounded-md bg-slate-50 m-2">
                <thead>
                  <th className="w-[127px] h-[37px] px-6 py-3 text-center text-blue-500 text-2xl font-bold font-dren capitalize leading-normal">
                    Admins
                  </th>
                </thead>
                <thead className="bg-slate-50">
                  <tr>
                    <th className="border-b-2 border-stone-300 px-6 py-3 text-center text-stone-300 text-3xl md:text-xl">
                      ID
                    </th>
                    <th className="border-b-2 border-stone-300 px-6 py-3 text-center text-stone-300 text-3xl md:text-xl">
                      Name
                    </th>
                    <th className="border-b-2 border-stone-300 px-6 py-3 text-center text-stone-300 text-3xl md:text-xl">
                      Email
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {displayedAdmins.length > 0 ? (
                    displayedAdmins.map((admin) => (
                      <tr key={admin.userId}>
                        <td className="px-8 py-2 text-center font-mono  text-3xl md:text-xl relative">
                          <span
                            className="ml-6 absolute h-2 w-2 rounded-full bg-blue-500 left-2 top-1/2 transform -translate-y-1/2"
                            aria-hidden="true"
                          ></span>
                          {admin.userId}
                        </td>
                        <td className="px-8 py-2 text-center font-mono  text-3xl md:text-xl ">
                          {admin.name}
                        </td>
                        <td className="px-8 py-2 text-center font-mono  text-3xl md:text-xl">
                          {admin.email}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" className="px-8 py-8">
                        Loading...
                      </td>
                    </tr>
                  )}
                  <tr>
                    <td colSpan="3">
                      <div className="justify-center items-center">
                        <ReactPaginate
                          previousLabel={"<"}
                          nextLabel={">"}
                          pageCount={adminPageCount}
                          onPageChange={handleAdminPageChange}
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
                                : page === adminPageCount - 1
                                ? adminPageCount
                                : null}
                            </span>
                          )}
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="w-3/4 p-2">
              <table className="table-auto rounded-md bg-slate-50 m-2">
                <thead>
                  <th className="w-[127px] h-[37px] px-6 py-3 text-center text-blue-500 text-2xl font-bold font-dren capitalize leading-normal">
                    Users
                  </th>
                </thead>
                <thead className="bg-slate-50">
                  <tr>
                    <th className="border-b-2 border-stone-300 px-6 py-3 text-center text-stone-300 text-3xl md:text-xl">
                      ID
                    </th>
                    <th className="border-b-2 border-stone-300 px-6 py-3 text-center text-stone-300 text-3xl md:text-xl">
                      Name
                    </th>
                    <th className="border-b-2 border-stone-300 px-6 py-3 text-center text-stone-300 text-3xl md:text-xl">
                      Email
                    </th>
                    <th className="border-b-2 border-stone-300 px-6 py-3 text-center text-stone-300 text-3xl md:text-xl">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {displayedUsers.length > 0 ? (
                    displayedUsers.map((user) => (
                      <tr key={user.userId}>
                        <td className="px-8 py-2 text-center font-mono  text-3xl md:text-xl relative">
                          <span
                            className="ml-4 absolute h-2 w-2 rounded-full bg-blue-500 left-2 top-1/2 transform -translate-y-1/2"
                            aria-hidden="true"
                          ></span>
                          {user.userId}
                        </td>
                        <td className="px-8 py-2 text-center font-mono  text-3xl md:text-xl">
                          {user.name}
                        </td>
                        <td className="px-8 py-2 text-center font-mono  text-3xl md:text-xl">
                          {user.email}
                        </td>
                        <td className="px-8 py-2 text-center font-mono  text-3xl md:text-xl">
                          <button
                            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:ring-green-300 ml-1"
                            onClick={() => {
                              dispatch(deleteUsers(user.userId));
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
                      <td colSpan="4" className="px-8 py-8">
                        Loading...
                      </td>
                    </tr>
                  )}
                  <tr>
                    <td colSpan="4">
                      <div className=" justify-center items-center">
                        <ReactPaginate
                          previousLabel={"<"}
                          nextLabel={">"}
                          pageCount={userPageCount}
                          onPageChange={handleUserPageChange}
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
                                : page === userPageCount - 1
                                ? userPageCount
                                : null}
                            </span>
                          )}
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
