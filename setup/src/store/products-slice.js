import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    newproduct: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setnewProducts: (state, action) => {
      state.newproduct = action.payload;
    },
  },
});

export const { setProducts, setnewProducts } = productsSlice.actions;


export const fetchProducts = () => async (dispatch) => {
  try {
    // Fetch products from an API or a backend service
    const response = await fetch("http://localhost:4000/api/getProducts");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    dispatch(setProducts(data));
  } catch (error) {
    console.error("Fetch products error:", error);
  }
};

export const fetchnewProduct = () => async (dispatch) => {
  try {
    // Fetch the newest product data
    const response = await fetch("http://localhost:4000/api/newProduct");
    if (!response.ok) {
      throw new Error("Failed to fetch product data");
    }
    const data = await response.json();
    
    // Dispatch the data to the Redux store
    dispatch(setnewProducts(data));
    
    // Return the data for use in the component
    return data;
  } catch (error) {
    console.error("Fetch product data error:", error);
    throw error; // Rethrow the error to handle it in the component
  }
};

export default productsSlice.reducer;
export const productActions = productsSlice.actions;
