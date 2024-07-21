import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchMostExcpensiveProducts,
  fetchnewProducts,
} from "../../../../store/adminProducts-slice";
import { fetchNewUsersLastWeek } from "../../../../store/adminUsers-slice";
import { fetchNewOrdersLastWeek } from "../../../../store/adminOrders-slice";
import { fetchAdminsCount } from "../../../../store/adminDashboard-slice";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../../../store/user-slice";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { BsBag } from "react-icons/bs";
import { BsBoxSeam } from "react-icons/bs";
import { MdOutlineCategory } from "react-icons/md";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { AiOutlineHome } from "react-icons/ai";
import CanvasJSReact from "@canvasjs/react-charts";
import {CiCircleMinus } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { PiSuitcaseSimple } from "react-icons/pi";
import { TbUserShield } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
const { CanvasJSChart } = CanvasJSReact;
const prepareChartData = (mostExcpensiveProducts) => {
  if (Array.isArray(mostExcpensiveProducts)) {
    return mostExcpensiveProducts.map((product) => ({
      label: product.name,
      y: product.price,
    }));
  }
  return [];
};

export default function AdminDashboard() {
  const initialProducts = [];
  const adminProducts =
    useSelector((state) => state.adminProducts.adminProducts) ||
    initialProducts;
  const newproducts = useSelector((state) => state.adminProducts.newproducts);
  const token = useSelector((state) => state.user.token);
  const mostExcpensiveProducts = useSelector(
    (state) => state.adminProducts.mostExcpensiveProducts
  );
  const newUsersLastWeek = useSelector(
    (state) => state.adminUsers.NewUsersLastWeek
  );
  const newOrdersLastWeek = useSelector(
    (state) => state.adminOrders.NewOrdersLastWeek
  );
  const adminsCount = useSelector((state) => state.admin.adminCount);
  const userName = useSelector((state) => state.user.userName);
  const role = useSelector((state) => state.user.role);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const chartData = prepareChartData(mostExcpensiveProducts);
  let [open, setOpen] = useState(false);

  const chartOptions = {
    animationEnabled: true,
    title: {
      text: "Most Expensive Products",
      fontColor: "#333333",
      fontSize: 24,
      fontFamily: "Arial, sans-serif",
      fontWeight: "bold",
    },
    axisX: {
      title: "Products",
      interval: 1,
      labelFontSize: 14,
      titleFontSize: 16,
      titleFontWeight: "bold",
      labelFormatter: function () {
        return ""; 
      },
    },
    dataPointWidth: 30,
    data: [
      {
        type: "column",
        dataPoints: chartData.map((point, index) => ({
          ...point,
          color: `rgba(66, 153, 225, ${1.2 - index / chartData.length})`,
        })),
      },
    ],
    axisY: {
      interval: 2000,
      labelFontSize: 14,
      valueFormatString: "#,##0",
      gridThickness: 0,
    },
  };
  

  useEffect(() => {
    dispatch(fetchnewProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchMostExcpensiveProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchNewUsersLastWeek());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchNewOrdersLastWeek());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAdminsCount());
  }, [dispatch]);

  console.log(adminProducts);

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };
  const displayedProducts = Array.isArray(newproducts)
    ? newproducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
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
            <div className="w-[67px] text-zinc-500 text-base font-normal font-dren leading-none tracking-tight mb-6">
              Menu
            </div>
            <Link to="/adminDashboard">
              <button className="flex items-center justify-start space-x-2 w-48 h-10 bg-white text-black font-bold transition duration-300 transform hover:scale-105 focus:outline-none focus:ring font-bold rounded-lg text-lg group hover:bg-light-blue-300 transition duration-300 ease-in-out">
                <MdOutlineSpaceDashboard className="ml-4" />
                <span>Dashboard</span>
              </button>
            </Link>
          </div>
          <div className="mb-10">
            <Link to="/adminUsers">
              <button className="flex items-center justify-start space-x-2 w-48 h-10 bg-white text-black font-medium font-dren transition duration-300 transform hover:scale-105 focus:outline-none focus:ring font-bold rounded-lg text-lg group hover:bg-light-blue-300 transition duration-300 ease-in-out">
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
              <button className="flex items-center justify-start space-x-2 w-48 h-10 bg-white text-black font-medium font-dren transition duration-300 transform hover:scale-105 focus:outline-none focus:ring font-bold rounded-lg text-lg group hover:bg-light-blue-300 transition duration-300 ease-in-out">
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
              <button className="flex items-center justify-start space-x-2 w-48 h-10 bg-white text-black font-medium font-dren transition duration-300 transform hover:scale-105 focus:outline-none focus:ring font-bold rounded-lg text-lg group hover:bg-light-blue-300 transition duration-300 ease-in-out">
                <AiOutlineShoppingCart className="ml-4" />
                <span> Orders</span>
              </button>
            </Link>
          </div>
          <div className="w-56 border border-zinc-200 mb-10"></div>
          <div className="mb-10">
            <div className="w-[67px] text-zinc-500 text-base font-normal font-dren leading-none tracking-tight mb-6">
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
            className="flex items-center justify-start  space-x-2 w-48 h-10 bg-white text-black font-medium font-dren font-bold transition duration-300 transform hover:scale-105 focus:outline-none focus:ring font-bold rounded-lg text-lg group hover:bg-light-blue-300 transition duration-300 ease-in-out"
          >
            <AiOutlineLogout className="ml-4" />
            <span>Log Out</span>
          </button>
        </div>
      </div>
      <div className="flex-col">
        <div className="flex-1 p-4">
          <div className="flex justify-end items-center w-[1000px]  h-[300px] md:h-[100px] bg-sky-50 rounded-[19px] ml-12 mt-8 space-x-36 sm:w-full md:flex">
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
                    <IoMdClose onClick={() => setOpen(!open)} className="text-gray-900 text-2xl" />
                    </div>
                    <div className="self-stretch p-5 bg-gray-200 rounded-lg flex items-center gap-2">
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

                    <div className="self-stretch p-3 bg-white rounded-lg flex items-center gap-2">
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

                    <div className="self-stretch p-3 bg-white rounded-lg flex items-center gap-2">
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
                    <div className="self-stretch p-3 bg-white rounded-lg flex items-center gap-2">
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
                    <div className="self-stretch p-3 bg-white rounded-lg flex items-center gap-2">
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
                    <div className="self-stretch p-3 bg-white rounded-lg flex items-center gap-2">
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

                    <div className="self-stretch px-3 py-[3.50px] rounded-lg justify-start items-center inline-flex">
                      <div className="grow shrink basis-0 h-px bg-neutral-200" />
                    </div>
                    <div className="self-stretch p-3 bg-white rounded-lg flex items-center gap-2">
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
                    <div className="self-stretch p-3 bg-white rounded-lg flex items-center gap-2">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <AiOutlineHome className="text-gray-900 text-3xl" />
                      </div>
                      <Link
                        to="/"
                        className="grow shrink basis-0 flex-col justify-start items-start inline-flex"
                      >
                        <div className="self-stretch text-gray-900 text-opacity-90 text-2xl font-medium font-dren leading-tight">
                          Homepage
                        </div>
                      </Link>
                    </div>
                    <div className="self-stretch p-3 rounded-lg justify-start items-center gap-2 inline-flex">
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
            <div className="flex  w-[600px] bg-white items-center rounded-[20px] border border-stone-300 justify-start items-center gap-2 inline-flex">
              <AiOutlineSearch className="text-2xl text-gray-500 ml-2" />
              <input
                type="search"
                placeholder="Search..."
                className="w-full  focus:outline-blue-500 bg-white rounded-lg p-2 h-[100px] md:h-12 text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex ">
              <div className="flex-col space-y-4 ">
                <div className="text-black text-[13px] font-normal font-dren leading-tight mt-4  ">
                  {userName ? userName : ""}
                </div>
                <div className="text-center text-neutral-400 text-[13px] font-normal font-dren leading-tight ">
                  {role ? role : ""}
                </div>
              </div><div className="flex flex-row">
              <div className="flex justify-center items-center text-gray-500 text-3xl md:text-base font-medium font-dren mr-2  ">
                    {token && <p>{token.name}</p>}
                  </div>
              <Link to="/profile">
              
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
                  className="w-40 h-40 md:w-20 md:h-20 mx-auto block"
                  alt="profile"
                ></img>
              </Link>
              </div>
            </div>
          </div>

          <div></div>
          <div className="flex justify-center items-center">
            <div className="flex-col justify-center items-center w-4/5 h-[750px] md:w-[1000px] md:h-[271px] bg-sky-50 rounded-[32px] mt-24 ml-16 ">
              <div className="w-[127px] h-[37px] mt-4 ml-16 mb-4 text-blue-500 text-5xl md:text-2xl space-y-4 md:space-y-0 font-bold font-dren capitalize leading-normal">
                Overview
              </div>
              <div className="flex justify-center items-center flex-col md:flex-row lg:flex-row  space-y-16 md:space-x-16 md:space-y-0 lg:space-x-16 mt-8">
                <div className="w-3/5 md:w-[304px] h-[150px] ml-4 md:h-[120px] mt-4 md:mt-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-[15px] relative">
                  <div className="w-[300px] h-[25.42px] left-[9px] top-[18.83px] absolute text-white text-4xl md:text-lg font-bold font-dren">
                    New Orders
                  </div>
                  <div className="w-[122px] h-[50.85px] left-[9px] top-[70.20px] md:top-[55.20px] absolute text-white text-4xl font-semibold font-dren tracking-wide">
                    {newOrdersLastWeek}
                  </div>
                  <div className="w-[40px] h-[40px] absolute top-4 right-4 bg-white rounded-full flex items-center justify-center">
                    <PiSuitcaseSimple className="text-blue-500" />
                  </div>
                </div>
                <div className="w-3/5 md:w-[304px] h-[150px] md:h-[120px] mt-4 md:mt-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-[15px] relative">
                  <div className="w-[600px] h-[25.42px] left-[9px] top-[18.83px] absolute text-white text-4xl md:text-lg font-bold font-dren">
                    Number of Admins
                  </div>
                  <div className="w-[122px] h-[50.85px] left-[9px] top-[70.20px] md:top-[55.20px] absolute text-white text-4xl font-semibold font-dren tracking-wide">
                    {adminsCount}
                  </div>
                  <div className="w-[40px] h-[40px] absolute top-4 right-4 bg-white rounded-full flex items-center justify-center">
                    <TbUserShield className="text-blue-500" />
                  </div>
                </div>
                <div className="w-3/5 md:w-[304px] h-[150px] md:h-[120px] mt-4 md:mt-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-[15px] relative">
                  <div className="w-[200px] h-[25.42px] left-[9px] top-[18.83px] absolute text-white text-4xl md:text-lg font-bold font-dren">
                    New Users
                  </div>
                  <div className="w-[122px] h-[50.85px] left-[9px] top-[70.20px] md:top-[55.20px] absolute text-white text-4xl font-semibold font-dren tracking-wide">
                    {newUsersLastWeek}
                  </div>
                  <div className="w-[40px] h-[40px] absolute top-4 right-4 bg-white rounded-full flex items-center justify-center">
                    <FiUsers className="text-blue-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row mt-20 px-5 pt-3 ml-4">
          <div className="md:w-2/4 md:mr-4">
            <table className="table-auto w-full h-full md:w-auto rounded-lg bg-white">
              <thead className="bg-white">
                <tr>
                  <th
                    className="border-b-2 border-stone-300 px-6 py-3 text-center text-black text-3xl md:text-xl lg:text-xl xl:text-xl"
                    colSpan="2"
                  >
                    Latest Products
                  </th>
                  <td className="border-b-2 border-stone-300" colSpan="2"></td>
                </tr>
              </thead>
              <tbody>
                {displayedProducts.length > 0 ? (
                  displayedProducts.map((product) => (
                    <tr key={product.productId}>
                      <td className="border-b-2 border-stone-300 border-r-2 px-8 py-2 text-center font-mono text-3xl md:text-xl lg:text-xl xl:text-xl">
                        <img
                          src={product.image_url}
                          alt="Product"
                          className="object-contain w-auto h-28  mx-auto block"
                        />
                      </td>
                      <td className="border-b-2 border-stone-300 px-8 py-2 text-center font-mono text-3xl md:text-xl lg:text-xl xl:text-xl">
                        {product.name}
                      </td>
                      <td className="border-b-2 border-stone-300 px-8 py-2 text-center font-mono text-3xl md:text-xl lg:text-xl xl:text-xl relative">
                        ${product.price}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="px-8 py-8">
                      Loading...
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="">
            <CanvasJSChart options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}
