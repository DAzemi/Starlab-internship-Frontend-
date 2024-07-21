import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const adminStockSlice = createSlice({
  name: "adminStock",
  initialState: {
    adminStocks: [], 
  },
  reducers: {
    setAdminStocks: (state, action) => {
      state.adminStocks = action.payload;
    },
  },
});

export const { setAdminStocks} = adminStockSlice.actions;
export const fetchadminStocks = () => async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:4000/api/getProductStocks");
      if (response.status !== 200) {
        throw new Error("Failed to fetch stocks");
      }
      const data = response.data; 
      dispatch(setAdminStocks(data));
    } catch (error) {
      console.error("Fetch stock error:", error);
    }
  };
  export const fetchadminProductStockById = (product_stock_id) => async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:4000/api/getProductStock/${product_stock_id}`);
      if (response.status !== 200) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.data;
      console.log("Fetched product data: ", data);
      dispatch(setAdminStocks(data));
    } catch (error) {
      console.error("Fetch product error:", error);
    }
  };
  
  
  export const deleteadminProductStocks = (product_stock_id) => async (dispatch) => {
    try {
      const response = await axios.delete(`http://localhost:4000/api/deleteProductStock/${product_stock_id}`);
      if (response.status !== 200) {
        throw new Error("Failed to delete Product");
      }
      const data = response.data;
      dispatch(setAdminStocks(data));
    } catch (error) {
      console.error("Delete product error:", error);
    }
  };

  export const insertAdminProductStock = (productData) => async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:4000/api/insertProductStock", productData);
      if (response.status !== 200) {
        throw new Error("Failed to insert Product");
      }
      const data = response.data;
      dispatch(setAdminStocks(data));
    } catch (error) {
      console.error("Insert product error:", error);
    }
  };
  
  export const updateAdminProductStock = (product_stock_id, updatedProductStockData) => async (dispatch) => { 
    try {
      const response = await axios.put(`http://localhost:4000/api/updateProductStock/${product_stock_id}`, updatedProductStockData);
  
      if (response.status === 200) {
        const updatedProduct = response.data; 
        console.log("Successfully updated product data: ", updatedProduct);
        dispatch(setAdminStocks(updatedProduct));
      } else {
        throw new Error("Failed to update product. The server returned an error.");
      }
    } catch (error) {
      console.error("Update product error:", error);
    }
  };

export default adminStockSlice.reducer;
export const adminStockActions = adminStockSlice.actions;
