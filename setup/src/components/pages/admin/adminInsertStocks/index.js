import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { insertAdminProductStock } from "../../../../store/adminStocks-slice";
import { Link } from "react-router-dom";
import { HiOutlinePlusSm } from "react-icons/hi";
import { HiMiniCube } from "react-icons/hi2";

export default function StockForm() {
  const [stockProductId, setStockProductId] = useState("");
  const [stockSasia, setStockSasia] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const stockData = {
      product_id: stockProductId,
      sasia: stockSasia,
    };

    dispatch(insertAdminProductStock(stockData));

    setStockProductId("");
    setStockSasia("");
  };

  return (
    <div className="bg-white overflow-hidden">
      <div className="flex justify-center items-center h-screen relative">
        <div className="absolute -bottom-40 -right-40 w-72 h-72 md:w-96 md:h-96 rounded-full bg-slate-200"></div>
        <div className="absolute -top-40 -left-40 w-72 h-72 md:w-96 md:h-96 rounded-full bg-slate-200"></div>
        <div className="w-3/5 h-[450px] md:w-[500px] md:h-[400px] mb-8 bg-blue-100 justify-center items-center rounded-[19px]">
          <form
            onSubmit={handleSubmit}
            className="p-4 flex flex-col items-center justify-center space-y-4"
          >
            <div className="w-4/5 md:w-[400px] h-[76px] bg-white flex items-center justify-center mb-7 rounded-lg mt-6">
              <div className="w-[350px] h-[76px] text-sky-500 text-3xl md:text-5xl font-semibold font-Poppins tracking-tight text-center mt-4">
                Stock Form
              </div>
            </div>
            <div className="w-4/5 md:w-[400px] mb-4">
              <label
                htmlFor="productId"
                className="text-slate-800 text-opacity-80 text-[13px] font-medium font-['Manrope'] leading-none tracking-wide block"
              >
                ProductId:
              </label>
              <input
                type="text"
                id="productId"
                value={stockProductId}
                onChange={(e) => setStockProductId(e.target.value)}
                required
                className="w-full rounded-lg border p-2"
              />
            </div>

            <div className="w-4/5 md:w-[400px] mb-4">
              <label
                htmlFor="sasia"
                className="text-slate-800 text-opacity-80 text-[13px] font-medium font-['Manrope'] leading-none tracking-wide block"
              >
                Sasia:
              </label>
              <input
                type="number"
                id="sasia"
                value={stockSasia}
                onChange={(e) => setStockSasia(e.target.value)}
                required
                className="w-full rounded-lg border p-2"
              />
            </div>
            <div className="w-[140px] md:w-[350px] flex flex-col md:flex-row justify-between">
              <button
                type="submit"
                className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:ring-blue-300 items center"
              >
                <HiOutlinePlusSm /> Add Stock
              </button>

              <Link to="/adminStock" className="block mt-4 md:mt-0">
                <button className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:ring-blue-300">
                  <HiMiniCube />
                  View Stock
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
