import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchadminCategorybyId,
  updateAdminCategory,
} from "../../../../store/adminCategories-slice";
import { TiTick } from "react-icons/ti";

export default function CategoryId() {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const Categories = useSelector(
    (state) => state.adminCategories.adminCategories
  );
  const navigate = useNavigate();

  const [editedCategory, setEditedCategory] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    if (categoryId) {
      dispatch(fetchadminCategorybyId(categoryId));
    }
  }, [dispatch, categoryId]);

  useEffect(() => {
    if (Categories) {
      setEditedCategory(Categories);
    }
  }, [Categories]);

  const handleSaveClick = () => {
    dispatch(updateAdminCategory(categoryId, editedCategory));
    navigate("/adminCategories");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedCategory({
      ...editedCategory,
      [name]: value,
    });
  };

  return (
    <div className="bg-white overflow-hidden">
      <div className="flex justify-center items-center h-screen relative">
        <div className="absolute -bottom-40 -right-40  w-72 h-72 md:w-96 md:h-96 rounded-full bg-slate-200"></div>
        <div className="absolute -top-40 -left-40  w-72 h-72 md:w-96 md:h-96 rounded-full bg-slate-200"></div>

        <div className="w-3/5 h-[350px] md:w-[500px]  mb-8 bg-blue-100 justify-center items-center rounded-[19px]">
          <form className="p-4 flex flex-col items-center justify-center">
            <div className="w-4/5 md:w-[400px] h-[76px] bg-white flex items-center justify-center mb-7 rounded-lg mt-6">
              <div className="w-[400px] h-[76px] text-sky-500 text-3xl md:text-5xl font-semibold font-Poppins tracking-tight text-center mt-4">
                Edit Category
              </div>
            </div>

            <div className="w-4/5 md:w-[400px] mb-4">
              <label
                htmlFor="name"
                className="text-slate-800 text-opacity-80 text-[13px] font-medium font-['Manrope'] leading-none tracking-wide block"
              >
                Name:
              </label>
              <input
                type="text"
                name="name"
                value={editedCategory.name}
                onChange={handleInputChange}
                className="w-full rounded-lg border p-2"
              />
            </div>

            <div className="w-4/5 md:w-[400px] mb-4">
              <label
                htmlFor="description"
                className="text-slate-800 text-opacity-80 text-[13px] font-medium font-['Manrope'] leading-none tracking-wide block"
              >
                Description:
              </label>
              <input
                type="text"
                name="description"
                value={editedCategory.description}
                onChange={handleInputChange}
                className="w-full rounded-lg border p-2"
              />
            </div>

            <div className="justify-center">
              <button
                onClick={handleSaveClick}
                className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:ring-blue-300"
              >
                <TiTick /> Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
