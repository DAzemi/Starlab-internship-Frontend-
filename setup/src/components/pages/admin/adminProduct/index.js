import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchadminProducts,
  deleteadminProducts,
} from "../../../../store/adminProducts-slice";
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
import { logout } from "../../../../store/user-slice";
import { CiCircleMinus } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

export default function AdminProducts() {
  const initialProducts = [];
  const adminProducts =
    useSelector((state) => state.adminProducts.adminProducts) ||
    initialProducts;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 6;
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchadminProducts());
  }, [dispatch]);

  console.log(adminProducts);

  const pageCount = Math.ceil(adminProducts.length / itemsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  const displayedProducts = Array.isArray(adminProducts)
    ? adminProducts
        .filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .slice(pageNumber * itemsPerPage, (pageNumber + 1) * itemsPerPage)
    : [];
  const [showModal, setShowModal] = useState(false);
  const [productIdClicked, setProductIdClicked] = useState(null);
  const [productNameClicked, setProductNameClicked] = useState(null);
  const [productDescriptionClicked, setProductDescriptionClicked] =
    useState(null);
  const [productPriceClicked, setProductPriceClicked] = useState(null);
  const [productImageClicked, setProductImageClicked] = useState(null);
  const [productCategoryClicked, setProductCategoryClicked] = useState(null);
  const [productCreatedClicked, setProductCreatedClicked] = useState(null);
  const modalRef = useRef(null);

  const handleRowClick = (
    productId,
    name,
    description,
    price,
    image_url,
    category_id,
    created_at
  ) => {
    setProductIdClicked(productId);
    setProductNameClicked(name);
    setProductDescriptionClicked(description);
    setProductPriceClicked(price);
    setProductImageClicked(image_url);
    setProductCategoryClicked(category_id);
    setProductCreatedClicked(created_at);
    setShowModal(true);
  };

  const handleOverlayClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowModal(false);
    }
  };
  const maxChars = 100;
  const truncatedDescription = productDescriptionClicked && productDescriptionClicked.length > maxChars
    ? productDescriptionClicked.slice(0, maxChars) + '...'
    : productDescriptionClicked;

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
              <button className="flex items-center justify-start space-x-2 w-48 h-10 bg-white text-black font-medium font-dren transition duration-300 transform hover:scale-105 focus:outline-none focus:ring font-bold rounded-lg text-lg group hover:bg-light-blue-300 transition duration-300 ease-in-out">
                <RiAdminLine className="ml-4" />
                <span>Admins & Users</span>
              </button>
            </Link>
          </div>
          <div className="mb-10">
            <Link to="/adminProducts">
              <button className="flex items-center justify-start space-x-2 w-48 h-10 bg-white text-black font-bold transition duration-300 transform hover:scale-105 focus:outline-none focus:ring font-bold rounded-lg text-lg group hover:bg-light-blue-300 transition duration-300 ease-in-out">
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
                      <IoMdClose
                        onClick={() => setOpen(!open)}
                        className="text-gray-900 text-3xl"
                      />
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

                    <div className="self-stretch p-5 bg-gray-200 rounded-lg flex items-center gap-2">
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
          <div></div>
          <div className="mt-20 px-5 pt-3">
            <table className="table-auto w-full rounded-lg bg-slate-50">
              <thead className="bg-slate-50">
                <tr>
                  <th className="flex-col border-b-2 border-stone-300 px-6 pb-2 text-center text-stone-300 text-3xl md:text-xl">
                    <div className="w-[127px] h-[37px] text-blue-500 text-2xl pb-12 pl-12 font-bold font-dren capitalize leading-normal">
                      Products
                    </div>
                    ID
                  </th>
                  <th className="border-b-2 border-stone-300 px-6 pt-10 text-center text-stone-300 text-3xl md:text-xl">
                    Name
                  </th>
                  <th className="border-b-2 border-stone-300 px-6 pt-10 text-center text-stone-300 text-3xl md:text-xl">
                    Price
                  </th>
                  <th className="border-b-2 border-stone-300 px-6 pt-10 text-center text-stone-300 text-3xl md:text-xl">
                    Image
                  </th>
                  <th className="flex-col border-b-2 border-stone-300 text-center text-stone-300 text-3xl md:text-xl">
                    <div className="pl-20">
                      <Link to="/adminInsertProducts">
                        <button
                          type="submit"
                          className="flex bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:ring-blue-300 items center"
                        >
                          <HiOutlinePlusSm /> Add Product
                        </button>
                      </Link>
                    </div>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {displayedProducts.length > 0 ? (
                  displayedProducts.map((product) => (
                    <tr key={product.productId}>
                      <td
                        className=" px-8 py-2 text-center font-mono  relative text-3xl md:text-xl "
                        onClick={() =>
                          handleRowClick(
                            product.productId,
                            product.name,
                            product.description,
                            product.price,
                            product.image_url,
                            product.category_id,
                            product.created_at
                          )
                        }
                      >
                        <span
                          className="ml-6 absolute h-2 w-2 rounded-full bg-blue-500 left-2 top-1/2 transform -translate-y-1/2"
                          aria-hidden="true"
                        ></span>
                        {product.productId}
                      </td>
                      <td
                        className="px-8 py-2 text-center font-mono text-3xl md:text-xl "
                        onClick={() =>
                          handleRowClick(
                            product.productId,
                            product.name,
                            product.description,
                            product.price,
                            product.image_url,
                            product.category_id,
                            product.created_at
                          )
                        }
                      >
                        {product.name}
                      </td>
                      <td
                        className="px-8 py-2 text-center font-mono text-3xl md:text-xl relative"
                        onClick={() =>
                          handleRowClick(
                            product.productId,
                            product.name,
                            product.description,
                            product.price,
                            product.image_url,
                            product.category_id,
                            product.created_at
                          )
                        }
                      >
                        <span
                          className="ml-4 absolute h-2 w-2 rounded-full bg-blue-500 left-2 top-1/2 transform -translate-y-1/2"
                          aria-hidden="true"
                        ></span>
                        {product.price}€
                      </td>
                      <td
                        className="px-8 py-2 text-center font-mono text-3xl md:text-xl "
                        onClick={() =>
                          handleRowClick(
                            product.productId,
                            product.name,
                            product.description,
                            product.price,
                            product.image_url,
                            product.category_id,
                            product.created_at
                          )
                        }
                      >
                        <img
                          src={product.image_url}
                          alt="Product"
                          className="object-contain w-20 h-20  mx-auto block"
                        />
                      </td>

                      <td className="flex justify-center items-center px-8 py-2 text-center font-mono text-3xl md:text-xl">
                        <Link to={`/adminEditProduct/${product.productId}`}>
                          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:ring-blue-300 mr-1">
                            <MdEdit />
                          </button>
                        </Link>
                        <button
                          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:ring-green-300 ml-1"
                          onClick={() => {
                            dispatch(deleteadminProducts(product.productId));
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
                    <td colSpan="8" className="px-8 py-8">
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
            {showModal && (
              <div className="flex fixed top-0 left-0 w-full h-full bg-gray-200 bg-opacity-50 flex justify-center items-center">
                <div
                  className="bg-white w-2/3 h-2/3 p-8 rounded-lg"
                  ref={modalRef}
                >
                  <div className="flex justify-center items-center ">
                    <div className="flex w-full">
                      <img
                        src={productImageClicked}
                        alt="Product"
                        className="object-contain w-64 h-64  ml-20 rounded-lg shadow-md"
                      />
                    </div>


                    <div className="w-1/2 px-4 pb-8 pt-6 ">
                      <h1 className="text-xl font-bold text-gray-700 mb-2">
                        Id: {productIdClicked}
                      </h1>
                      <h1 className="text-xl font-bold text-gray-700 mb-2">
                        Name: {productNameClicked}
                      </h1>
                      <p className="text-xl text-gray-600 mb-2">
                        Description: {truncatedDescription}
                      </p>

                      <p className="text-xl text-gray-600 mb-2">
                        Price: {productPriceClicked}$
                      </p>
                      <p className="text-xl text-gray-600 mb-2">
                        Category: {productCategoryClicked}
                      </p>
                      <p className="text-xl text-gray-600 mb-2">
                        Created:{" "}
                        {new Date(productCreatedClicked).toLocaleString(
                          "en-GB",
                          {
                            day: "numeric",
                            month: "numeric",
                            year: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                          }
                        )}
                      </p>
                      <Link to={`/adminEditProduct/${productIdClicked}`}>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:ring-blue-300 mr-1">
                          <MdEdit />
                        </button>
                      </Link>
                      <button
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:ring-green-300 ml-1"
                        onClick={() => {
                          dispatch(deleteadminProducts(productIdClicked));
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
  );
}
