import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const adminCategorySlice = createSlice({
  name: "adminCategory",
  initialState: {
    adminCategories: [], 
  },
  reducers: {
    setAdminCategories: (state, action) => {
      state.adminCategories = action.payload;
    },
  },
});

export const { setAdminCategories} = adminCategorySlice.actions;
export const fetchadminCategories = () => async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:4000/api/getCategories");
      if (response.status !== 200) {
        throw new Error("Failed to fetch products");
      }
      const data = response.data; 
      dispatch(setAdminCategories(data));
    } catch (error) {
      console.error("Fetch products error:", error);
    }
  };
  export const fetchadminCategorybyId = (categoryId) => async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:4000/api/getCategory/${categoryId}`);
      if (response.status !== 200) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.data;
      console.log("Fetched product data: ", data); 
      dispatch(setAdminCategories(data));
    } catch (error) {
      console.error("Fetch product error:", error);
    }
  };
  
  
  export const deleteadminCategory = (categoryId) => async (dispatch) => {
    try {
      const response = await axios.delete(`http://localhost:4000/api/deleteCategory/${categoryId}`);
      if (response.status !== 200) {
        throw new Error("Failed to delete Product");
      }
      const data = response.data;
      dispatch(setAdminCategories(data));
    } catch (error) {
      console.error("Delete product error:", error);
    }
  };

  export const insertAdminCategory = (categoryData) => async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:4000/api/insertCategory", categoryData);
      if (response.status !== 200) {
        throw new Error("Failed to insert Product");
      }
      const data = response.data;
      dispatch(setAdminCategories(data));
    } catch (error) {
      console.error("Insert product error:", error);
    }
  };
  
  export const updateAdminCategory = (categoryId, updatedCategoryData) => async (dispatch) => { 
    try {
      const response = await axios.put(`http://localhost:4000/api/updateCategory/${categoryId}`, updatedCategoryData);

  
      if (response.status === 200) {
        const updatedCategory = response.data; 
        console.log("Fetched product data: ", updatedCategory)
        dispatch(setAdminCategories(updatedCategory));
      } else {
        throw new Error("Failed to update Product");
      }
    } catch (error) {
      console.error("Update product error:", error);
    }
  };
export default adminCategorySlice.reducer;
export const adminCategoryActions = adminCategorySlice.actions;
