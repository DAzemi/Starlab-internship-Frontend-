import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../store/products-slice";
import ProductCard from "../UI/ProductCard";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

export default function Products({ searchTerm }) {
  const [loading, setLoading] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    dispatch(fetchProducts());
    setLoading(false);
  }, [dispatch]);
  const [minPriceInput, setMinPriceInput] = useState(0);
  const [maxPriceInput, setMaxPriceInput] = useState(100000);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 8;

  const pageCount = Math.ceil(products.length / itemsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const handleCategorySelect = (selectedValue) => {
    if (selectedValue !== "") {
      setSelectedCategoryId(selectedValue);
    } else {
      setSelectedCategoryId(null);
    }
    setActiveButton(selectedValue === activeButton ? null : selectedValue);
  };
  const priceRanges = [
    { label: "Çdo çmim", min: 0, max: 100000 },
    { label: "€0 - €50", min: 0, max: 50 },
    { label: "€50 - €100", min: 50, max: 100 },
    { label: "€100 - €200", min: 100, max: 200 },
    { label: "€200 - €500", min: 200, max: 500 },
    { label: "€500 - €1000", min: 500, max: 1000 },
    { label: "€1000+", min: 1000, max: 10000 },
  ];
  const filteredProducts = products
    .filter((product) => {
      const categoryFilter = selectedCategoryId
        ? product.category_id === selectedCategoryId
        : true;

      const priceFilter =
        product.price >= Number(minPriceInput) &&
        product.price <= Number(maxPriceInput);

      const searchFilter = searchTerm
        ? product.name.toLowerCase().includes(searchTerm.toLowerCase())
        : true;

      return categoryFilter && priceFilter && searchFilter;
    })
    .slice(pageNumber * itemsPerPage, (pageNumber + 1) * itemsPerPage);


  return (
    <section>
     <div className="flex flex-col md:flex-row">
  <div className="w-full md:w-1/2 h-auto bg-neutral-100 flex flex-col justify-center items-center border-8 border-blue-300 border-r-4">
    <div className="text-black text-4xl font-semibold leading-normal pt-8">
      iPhone 15
    </div>
    <div className="text-black text-2xl font-normal leading-normal">
      New Camera. New Design. Newphoria
    </div>
    <Link to="/product/113">
      <div className="text-blue-500 text-xl font-medium leading-normal mt-4">
        Buy
      </div>
    </Link>
    <img
      src={require("../assets/iPhone_white.png")}
      alt=""
      className="w-full h-full object-cover rounded-r"
    />
  </div>
  <div className="w-full md:w-1/2 h-auto bg-black flex flex-col justify-center items-center border-8 border-blue-300 border-l-4">
    <div className="text-white text-4xl font-semibold leading-normal pt-8">
      iPhone 15 Pro
    </div>
    <div className="text-white text-2xl font-normal leading-normal">
      Titanium. Strong. Light. Pro.
    </div>
    <Link to="/product/114">
      <div className="text-blue-500 text-xl font-medium leading-normal mt-4">
        Buy
      </div>
    </Link>
    <img
      src={require("../assets/iPhone_black.png")}
      alt=""
      className="w-auto h-full object-cover rounded-r"
    />
  </div>
</div>

      <div className=" m-20 ">
      <div className="flex flex-col md:flex-wrap justify-center items-center sm:gap-6 sm:mx-6 md:mx-10 lg:mx-5 md:mt-28 w-full md:flex-row">
          <div className="rounded-2xl flex">
            <div className="  ">
              <button
                className={`text-neutral-500 text-lg font-extrabold font-Manrope leading-normal inline-block mt-4 md:mt-0 w-[180px] h-[100px] rounded-xl shadow-md
              transition-all duration-200 -skew-x-[12deg] bg-[#f8f8f8] ${
                activeButton === 1
                  ? "w-[250px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500 text-white "
                  : ""
              }`}
                onClick={() => handleCategorySelect(1)}
              >
                Kompjuterë, Laptopë, Tableta
              </button>
            </div>
          </div>
          <div className="rounded-2xl flex">
            <div className=" ">
              <button
                className={`text-neutral-500 text-lg font-extrabold font-Manrope leading-normal inline-block mt-4 md:mt-0 w-[180px] h-[100px] rounded-xl shadow-md
        transition-all duration-200 -skew-x-[12deg] bg-[#f8f8f8] ${
          activeButton === 2
            ? "bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-sky-500 via-orange-200 to-yellow-600 text-white w-[250px]"
            : ""
        }`}
                onClick={() => handleCategorySelect(2)}
              >
                Telefona dhe pajisje mobile
              </button>
            </div>
          </div>
          <div className="rounded-2xl flex">
            <div className="">
              <button
                className={`text-neutral-500 text-lg font-extrabold font-Manrope leading-normal inline-block mt-4 md:mt-0 w-[180px] h-[100px] rounded-xl shadow-md
        transition-all duration-200 -skew-x-[12deg] bg-[#f8f8f8] ${
          activeButton === 3
            ? "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-700 via-orange-300 to-rose-800 text-white w-[250px]"
            : ""
        }`}
                onClick={() => handleCategorySelect(3)}
              >
                Televizorë dhe pajisje audio-vizuale
              </button>
            </div>
          </div>
          <div className="rounded-2xl flex">
            <div className="">
              <button
                className={`text-neutral-500 text-lg font-extrabold font-Manrope leading-normal inline-block mt-4 md:mt-0 w-[180px] h-[100px] rounded-xl shadow-md
        transition-all duration-200 -skew-x-[12deg] bg-[#f8f8f8] ${
          activeButton === 4
            ? "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500 via-violet-400 to-rose-600 text-white w-[250px]"
            : ""
        }`}
                onClick={() => handleCategorySelect(4)}
              >
                Pajisje audio dhe multimediale
              </button>
            </div>
          </div>
          <div className="rounded-2xl flex">
            <div className="">
              <button
                className={`text-neutral-500 text-lg font-extrabold font-Manrope leading-normal inline-block mt-4 md:mt-0 w-[180px] h-[100px] rounded-xl shadow-md
        transition-all duration-200 -skew-x-[12deg] bg-[#f8f8f8] ${
          activeButton === 5
            ? "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-400 via-orange-500 to-yellow-600 text-white w-[250px]"
            : ""
        }`}
                onClick={() => handleCategorySelect(5)}
              >
                Pajisje shtëpiake dhe pajisje për kujdesin personal
              </button>
            </div>
          </div>
          <div className="rounded-2xl flex">
            <div className="">
              <button
                className={`text-neutral-500 text-lg font-extrabold font-Manrope leading-normal mt-4 md:mt-0 inline-block w-[180px] h-[100px] rounded-xl shadow-md
        transition-all duration-200 -skew-x-[12deg] bg-[#f8f8f8] ${
          activeButton === 6
            ? "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-400 via-emerald-500 to-teal-600 text-white w-[250px]"
            : ""
        }`}
                onClick={() => handleCategorySelect(6)}
              >
                Pajisje të tjera elektronike dhe aksesorë
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <button
          className={`text-neutral-500 text-lg font-extrabold font-Manrope leading-normal md:ml-24 inline-block w-[150px] h-[100px] rounded-xl shadow-md
    transition-all duration-200 bg-[#f8f8f8]  hover:from-black hover:via-black hover:to-black hover:text-black `}
          onClick={() => handleCategorySelect(0)}
        >
          Të gjitha
        </button>
        <div
          className={`flex justify-center items-center justify-between text-neutral-500 text-lg md:mr-24 mt-4 md:mt-0 font-extrabold font-Manrope leading-normal inline-block  w-[250px] md:w-[350px] h-[100px] rounded-xl shadow-md
    transition-all duration-200  bg-[#f8f8f8]  hover:from-black hover:via-black hover:to-black hover:text-black `}
        >
          <label className="text-gray-600" htmlFor="priceRange">
            Filtro sipas çmimit
          </label>
          <div>
            <select
              className="border rounded-md px-2 py-1 focus:outline-none focus:border-blue-500"
              id="priceRange"
              value={`${minPriceInput}-${maxPriceInput}`}
              onChange={(e) => {
                const [min, max] = e.target.value.split("-");
                setMinPriceInput(Number(min));
                setMaxPriceInput(Number(max));
              }}
            >
              {priceRanges.map((range, index) => (
                <option key={index} value={`${range.min}-${range.max}`}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex flex-wrap justify-center gap-2">
          {loading && <h1>Loading...</h1>}
          {!loading && !searchTerm
            ? filteredProducts.map((product, index) => (
                <ProductCard
                  // handleOnDrag={handleOnDrag}
                  key={index}
                  product={product}
                  name={product.name}
                  image_url={product.image_url}
                  description={product.description}
                  price={product.price}
                  productId={product.productId}
                />
              ))
            : products
                .filter((product) => {
                  return product.name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());
                })
                .map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
        </div>
      </div>
      <div className="flex justify-center items-center mt-4">
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={
            "flex items-center justify-center space-x-4 bg-gray-200 py-3 px-4 rounded-lg"
          }
          previousLinkClassName={
            "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          }
          nextLinkClassName={
            "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          }
          disabledClassName={"opacity-50 cursor-not-allowed"}
          activeClassName={
            "bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          }
          pageLinkClassName={
            "text-blue-900 hover:text-blue-800 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          }
          breakLinkClassName={"text-gray-500"}
          breakLabel={<span className="text-gray-500">...</span>}
          pageRangeDisplayed={2}
          marginPagesDisplayed={0}
          onPageActive={(page) => (
            <div className="flex">
              {page > 0 && (
                <span className="text-blue-700 font-bold">{page}</span>
              )}
              <span className="text-blue-700 font-bold">{page + 1}</span>
              {page < pageCount - 1 && (
                <span className="text-blue-700 font-bold">{page + 2}</span>
              )}
            </div>
          )}
        />
      </div>
    </section>
  );
}
