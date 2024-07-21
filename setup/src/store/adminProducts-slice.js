import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const adminProductSlice = createSlice({
  name: "adminProduct",
  initialState: {
    adminProducts: [],
    newproducts: null,
    mostExcpensiveProducts: null,
  },
  reducers: {
    setAdminProducts: (state, action) => {
      state.adminProducts = action.payload;
    },
    setnewProducts: (state, action) => {
      state.newproducts = action.payload;
    },
    setmostExcpensiveProducts: (state, action) => {
      state.mostExcpensiveProducts = action.payload;
    },
    
  },
});



export const { setAdminProducts, setnewProducts, setmostExcpensiveProducts} = adminProductSlice.actions;
export const fetchadminProducts = () => async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:4000/api/getProducts");
      if (response.status !== 200) {
        throw new Error("Failed to fetch products");
      }
      const data = response.data; 
      dispatch(setAdminProducts(data));
    } catch (error) {
      console.error("Fetch products error:", error);
    }
  };
  export const fetchadminProductById = (productId) => async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:4000/api/getProductDashboard/${productId}`);
      if (response.status !== 200) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.data;
      console.log("Fetched product data: ", data); 
      dispatch(setAdminProducts(data));
    } catch (error) {
      console.error("Fetch product error:", error);
    }
  };
  
  
  export const deleteadminProducts = (productId) => async (dispatch) => {
    try {
      const response = await axios.delete(`http://localhost:4000/api/deleteProduct/${productId}`);
      if (response.status !== 200) {
        throw new Error("Failed to delete Product");
      }
      const data = response.data;
      dispatch(setAdminProducts(data));
    } catch (error) {
      console.error("Delete product error:", error);
    }
  };

  export const insertAdminProduct = (productData) => async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:4000/api/insertProduct", productData);
      if (response.status !== 200) {
        throw new Error("Failed to insert Product");
      }
      const data = response.data;
      dispatch(setAdminProducts(data));
    } catch (error) {
      console.error("Insert product error:", error);
    }
  };
  
  export const updateAdminProduct = (productId, updatedProductData) => async (dispatch) => { 
    try {
      const response = await axios.put(`http://localhost:4000/api/updateProduct/${productId}`, updatedProductData);

  
      if (response.status === 200) {
        const updatedProduct = response.data; 
        console.log("Fetched product data: ", updatedProduct)
        dispatch(setAdminProducts(updatedProduct));
      } else {
        throw new Error("Failed to update Product");
      }
    } catch (error) {
      console.error("Update product error:", error);
    }
  };
  export const fetchnewProducts = () => async (dispatch) => {
    try {

      const response = await fetch("http://localhost:4000/api/newProducts");
      if (!response.ok) {
        throw new Error("Failed to fetch product data");
      }
      const data = await response.json();
      

      dispatch(setnewProducts(data));
      
      return data;
    } catch (error) {
      console.error("Fetch product data error:", error);
      throw error;
    }
  };
  export const fetchMostExcpensiveProducts = () => async (dispatch) => {
    try {
      const response = await fetch("http://localhost:4000/api/mostExpensiveProducts");
      if (!response.ok) {
        throw new Error("Failed to fetch product data");
      }
      const data = await response.json();
    
      dispatch(setmostExcpensiveProducts(data));
      

      return data;
    } catch (error) {
      console.error("Fetch product data error:", error);
      throw error;
    }
  };


export default adminProductSlice.reducer;
export const adminProductActions = adminProductSlice.actions;
