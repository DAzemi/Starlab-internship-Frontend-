import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { insertAdminProduct } from "../../../../store/adminProducts-slice";
import { Link } from "react-router-dom";
import { HiOutlinePlusSm } from "react-icons/hi";
import { HiMiniCube } from "react-icons/hi2";

export default function ProductForm() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const productData = {
      name: productName,
      description: productDescription,
      price: productPrice,
      image_url: productImage,
      category_id: productCategory,
    };

    dispatch(insertAdminProduct(productData));

    setProductName("");
    setProductDescription("");
    setProductPrice("");
    setProductImage("");
    setProductCategory("");
  };

  return (
    <div className="bg-white overflow-hidden">
      <div className="flex justify-center items-center h-screen relative">
        <div className="absolute -bottom-40 -right-40 w-72 h-72 md:w-96 md:h-96 rounded-full bg-slate-200"></div>
        <div className="absolute -top-40 -left-40 w-72 h-72 md:w-96 md:h-96 rounded-full bg-slate-200"></div>
        <div className="w-3/5 h-[700px] md:w-3/5 lg:w-[500px] md:h-[600px] mb-8 bg-blue-100 justify-center items-center rounded-[19px]">
          <form
            onSubmit={handleSubmit}
            className="p-4 flex flex-col items-center justify-center space-y-4"
          >
            <div className="w-4/5 md:w-[400px] h-[76px] bg-white flex justify-center items-center  mb-7 rounded-lg mt-6">
              <div className="w-[350px] h-[76px] text-sky-500 text-3xl md:text-5xl font-semibold font-Poppins tracking-tight text-center mt-4">
                Product Form
              </div>
            </div>
            <div className="w-full md:w-[400px] mb-4">
              <label
                htmlFor="productName"
                className="text-slate-800 text-opacity-80 text-[13px] font-medium font-['Manrope'] leading-none tracking-wide block"
              >
                Product Name:
              </label>
              <input
                type="text"
                id="productName"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
                className="w-full rounded-lg border p-2"
              />
            </div>

            <div className="w-full md:w-[400px] mb-4">
              <label
                htmlFor="productDescription"
                className="text-slate-800 text-opacity-80 text-[13px] font-medium font-['Manrope'] leading-none tracking-wide block"
              >
                Product Description:
              </label>
              <textarea
                id="productDescription"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                required
                className="w-full rounded-lg border p-2"
              />
            </div>

            <div className="w-full md:w-[400px] mb-4">
              <label
                htmlFor="productPrice"
                className="text-slate-800 text-opacity-80 text-[13px] font-medium font-['Manrope'] leading-none tracking-wide block"
              >
                Product Price:
              </label>
              <input
                type="number"
                id="productPrice"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                required
                className="w-full rounded-lg border p-2"
              />
            </div>

            <div className="w-full md:w-[400px] mb-4">
              <label
                htmlFor="productImage"
                className="text-slate-800 text-opacity-80 text-[13px] font-medium font-['Manrope'] leading-none tracking-wide block mb-1"
              >
                Product Image:
              </label>
              <input
                type="text"
                id="productImage"
                value={productImage}
                onChange={(e) => setProductImage(e.target.value)}
                className="w-full rounded-lg border p-2"
              />
            </div>

            <div className="w-full md:w-[400px] mb-4">
              <label
                htmlFor="productCategory"
                className="text-slate-800 text-opacity-80 text-[13px] font-medium font-['Manrope'] leading-none tracking-wide block"
              >
                Product Category:
              </label>
              <input
                type="number"
                id="productCategory"
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
                className="w-full rounded-lg border p-2"
              />
            </div>
            <div className="w-[160px] md:w-[350px] flex flex-col md:flex-row justify-between">
              <button
                type="submit"
                className="flex items-center block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:ring-blue-300 items center"
              >
                <HiOutlinePlusSm /> Add Product
              </button>

              <Link to="/adminProducts" className="block mt-4 md:mt-0">
                <button className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:ring-blue-300">
                  <HiMiniCube />
                  View Products
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
