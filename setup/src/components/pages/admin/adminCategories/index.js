import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  AiOutlineDelete,
  AiOutlineSearch,
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineLogout,
} from "react-icons/ai";
import {
  MdEdit,
  MdOutlineSpaceDashboard,
  MdOutlineCategory,
} from "react-icons/md";
import { HiOutlinePlusSm } from "react-icons/hi";
import { RiAdminLine } from "react-icons/ri";
import { BsBag, BsBoxSeam } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import ReactPaginate from "react-paginate";
import {
  fetchadminCategories,
  deleteadminCategory,
} from "../../../../store/adminCategories-slice";
import { logout } from "../../../../store/user-slice";
import { CiCircleMinus } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

export default function AdminCategories() {
  const initialCategories = [];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 8;
  const [searchTerm, setSearchTerm] = useState("");
  let [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchadminCategories());
  }, [dispatch]);

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  const Categories =
    useSelector((state) => state.adminCategories.adminCategories) ||
    initialCategories;
  const pageCount = Math.ceil(Categories.length / itemsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayedCategories = Array.isArray(Categories)
    ? Categories.filter((category) =>
        category.name.toLowerCase().includes(searchTerm.toLowerCase())
      ).slice(pageNumber * itemsPerPage, (pageNumber + 1) * itemsPerPage)
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
              <button className="flex items-center justify-start space-x-2 w-48 h-10 bg-white text-black font-bold transition duration-300 transform hover:scale-105 focus:outline-none focus:ring font-bold rounded-lg text-lg group hover:bg-light-blue-300 transition duration-300 ease-in-out">
                <MdOutlineCategory className="ml-4" />
                <span>Categories</span>
              </button>
            </Link>
          </div>
          <div className="mb-10">
            <Link to="/adminOrders">
              <button className="flex items-center justify-start space-x-2 w-48 h-10 bg-white text-black font-medium font-dren transition duration-300 transform hover:scale-105 focus:outline-none focus:ring font-bold rounded-lg text-lg group hover:bg-light-blue-300 transition duration-300 ease-in-out">
                <AiOutlineShoppingCart className="ml-4" />
                <span> Orders</span>
              </button>
            </Link>
          </div>
          <div class="w-56 border border-zinc-200 mb-10"></div>
          <div className="mb-10">
            <Link to="/profile">
              <div class="w-[67px] text-zinc-500 text-base font-normal font-dren leading-none tracking-tight mb-6">
                Account
              </div>
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
                    <div className="self-stretch p-5 bg-gray-200 rounded-lg flex items-center gap-2">
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
          <div className="mt-32 px-5 pt-3">
            <div className="flex justify-center items-center h-full ml-20">
              <table className="table-auto w-3/5 rounded-md h-full bg-slate-50 ">
                <thead className="h-24">
                  <tr>
                    <th className="w-[127px] h-[37px] px-6 py-3 text-center text-blue-500 text-2xl font-bold font-dren capitalize leading-normal">
                      Categories
                    </th>
                    <th></th>
                    <th></th>
                    <th className="px-6 py-3 items-center text-center">
                      <Link to="/adminInsertCategories">
                        <button
                          type="submit"
                          className="flex w-[158px] items-center bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:ring-blue-300 items center"
                        >
                          <HiOutlinePlusSm /> Add Category
                        </button>
                      </Link>
                    </th>
                  </tr>
                </thead>
                <thead className="bg-slate-50">
                  <tr>
                    <th className="border-b-2 border-stone-300 px-6 py-3 text-center text-stone-300 text-3xl md:text-xl">
                      ID
                    </th>
                    <th className="border-b-2 border-stone-300 px-20 py-3 text-center text-stone-300 text-3xl md:text-xl">
                      Name
                    </th>
                    <th className="border-b-2 border-stone-300 px-6 py-3 text-center text-stone-300 text-3xl md:text-xl">
                      Description
                    </th>
                    <th className="border-b-2 border-stone-300 px-4 py-3 text-center text-stone-300 text-3xl md:text-xl">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {displayedCategories.length > 0 ? (
                    displayedCategories.map((category) => (
                      <tr key={category.categoryId}>
                        <td className="px-8 py-2 text-center font-mono text-3xl md:text-xl relative">
                          <span
                            className="ml-6 absolute h-2 w-2 rounded-full bg-blue-500 left-2 top-1/2 transform -translate-y-1/2"
                            aria-hidden="true"
                          ></span>
                          {category.categoryId}
                        </td>
                        <td className="px-20 py-2 text-center font-mono text-3xl md:text-xl">
                          {category.name}
                        </td>
                        <td className="px-8 py-2 text-center font-mono text-3xl md:text-xl">
                          {category.description}
                        </td>
                        <td className="flex justify-center items-center px-4 py-2 text-center font-mono text-3xl md:text-xl">
                          <Link
                            to={`/adminEditCategory/${category.categoryId}`}
                          >
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:ring-blue-300 mr-1">
                              <MdEdit />
                            </button>
                          </Link>
                          <button
                            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:ring-green-300 ml-1"
                            onClick={() => {
                              dispatch(
                                deleteadminCategory(category.categoryId)
                              );
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
                    <td colSpan="8">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
