import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchadminProductById,
  updateAdminProduct,
} from "../../../../store/adminProducts-slice";
import { TiTick } from "react-icons/ti";

export default function ProductId() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.adminProducts.adminProducts);
  const navigate = useNavigate();

  const [editedProduct, setEditedProduct] = useState({
    name:"",
    description:"",
    price:"",
    image_url:"",
    category_id:""
  });

  useEffect(() => {
    if (productId) {
      dispatch(fetchadminProductById(productId));
    }
  }, [dispatch, productId]);

  useEffect(() => {
    if (product) {
      setEditedProduct(product);
    }
  }, [product]);

  const handleSaveClick = () => {
    dispatch(updateAdminProduct(productId, editedProduct));
    navigate("/adminProducts");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({
      ...editedProduct,
      [name]: value,
    });
  };
  return (
    <div className="bg-white overflow-hidden">
      <div className="flex justify-center items-center h-screen relative">
        <div className="absolute -bottom-40 -right-40 w-72 h-72 md:w-96 md:h-96 rounded-full bg-slate-200"></div>
        <div className="absolute -top-40 -left-40 w-72 h-72 md:w-96 md:h-96 rounded-full bg-slate-200"></div>
        <div className="w-3/5 h-[600px] md:w-3/5 lg:w-[500px] mb-8 bg-blue-100 justify-center items-center rounded-[19px]">
          <form className="p-4 flex flex-col items-center justify-center ">
            <div className="w-4/5 md:w-[400px] h-[76px] bg-white flex justify-center items-center  mb-7 rounded-lg mt-6">
              <div className="w-[350px] h-[76px] text-sky-500 text-3xl md:text-5xl font-semibold font-Poppins tracking-tight text-center mt-4">
                Edit Product
              </div>
            </div>
            <div className="w-full md:w-[400px] mb-4">
              <label
                htmlFor="productName"
                className="text-slate-800 text-opacity-80 text-[13px] font-medium font-['Manrope'] leading-none tracking-wide block"
              >
                Name:
              </label>
              <input
                type="text"
                name="name"
                value={editedProduct.name}
                onChange={handleInputChange}
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
              <input
                type="text"
                name="description"
                value={editedProduct.description}
                onChange={handleInputChange}
                className="w-full rounded-lg border p-2"
              />
            </div>
            <div className="w-full md:w-[400px] mb-4">
              <label
                htmlFor="productDescription"
                className="text-slate-800 text-opacity-80 text-[13px] font-medium font-['Manrope'] leading-none tracking-wide block"
              >
                Price:
              </label>
              <input
                type="number"
                name="price"
                value={editedProduct.price}
                onChange={handleInputChange}
                className="w-full rounded-lg border p-2"
              />
            </div>
            <div className="w-full md:w-[400px] mb-4">
              <label
                htmlFor="productDescription"
                className="text-slate-800 text-opacity-80 text-[13px] font-medium font-['Manrope'] leading-none tracking-wide block"
              >
                Image Url:
              </label>
              <input
                type="text"
                name="image_url"
                value={editedProduct.image_url}
                onChange={handleInputChange}
                className="w-full rounded-lg border p-2"
              />
            </div>

            <div className="w-full md:w-[400px] mb-4">
              <label
                htmlFor="productDescription"
                className="text-slate-800 text-opacity-80 text-[13px] font-medium font-['Manrope'] leading-none tracking-wide block"
              >
                Category Id:
              </label>
              <input
                type="number"
                name="category_id"
                value={editedProduct.category_id}
                onChange={handleInputChange}
                className="w-full rounded-lg border p-2"
              />
            </div>
            <div className=" justify-center">
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
