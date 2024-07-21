import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { insertAdminCategory } from "../../../../store/adminCategories-slice";
import { Link } from "react-router-dom";
import { HiOutlinePlusSm } from "react-icons/hi";
import { HiMiniCube } from "react-icons/hi2";

export default function CategoryForm() {
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const categoryData = {
      name: categoryName,
      description: categoryDescription,
    };

    dispatch(insertAdminCategory(categoryData));

    setCategoryName("");
    setCategoryDescription("");
  };

  return (
    <div className="bg-white overflow-hidden">
      <div className="flex justify-center items-center h-screen relative">
        <div className="absolute -bottom-40 -right-40  w-72 h-72 md:w-96 md:h-96 rounded-full bg-slate-200"></div>
        <div className="absolute -top-40 -left-40  w-72 h-72 md:w-96 md:h-96 rounded-full bg-slate-200"></div>

        <div className="w-3/5 h-[450px] md:w-[500px] md:h-3/5 mb-8 bg-blue-100 justify-center items-center rounded-[19px]">
          <form
            onSubmit={handleSubmit}
            className="p-4 flex flex-col items-center justify-center space-y-4"
          >
            <div className="w-4/5 md:w-[400px] h-[76px] bg-white flex items-center justify-center mb-7 rounded-lg mt-6">
              <div className="w-[400px] h-[76px] text-sky-500 text-3xl md:text-5xl font-semibold font-Poppins tracking-tight text-center mt-4">
                Category Form
              </div>
            </div>

            <div className="w-4/5 md:w-[400px] mb-4">
              <label
                htmlFor="categoryName"
                className="text-slate-800 text-opacity-80 text-[13px] font-medium font-['Manrope'] leading-none tracking-wide block"
              >
                Category Name:
              </label>
              <input
                type="text"
                id="categoryName"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                required
                className="w-full rounded-lg border p-2"
              />
            </div>

            <div className="w-4/5 md:w-[400px] mb-4">
              <label
                htmlFor="categoryDescription"
                className="text-slate-800 text-opacity-80 text-[13px] font-medium font-['Manrope'] leading-none tracking-wide block"
              >
                Category Description:
              </label>
              <textarea
                id="categoryDescription"
                value={categoryDescription}
                onChange={(e) => setCategoryDescription(e.target.value)}
                required
                className="w-full rounded-lg border p-2"
              />
            </div>
            <div className="w-[170px] md:w-[350px] flex flex-col md:flex-row justify-between">
              <button
                type="submit"
                className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:ring-blue-300 items center"
              >
                <HiOutlinePlusSm /> Add Category
              </button>

              <Link to="/adminCategories" className="block mt-4 md:mt-0">
                <button className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:ring-blue-300">
                  <HiMiniCube />
                  View Categories
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
