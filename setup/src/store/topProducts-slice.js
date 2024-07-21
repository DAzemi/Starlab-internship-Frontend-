import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const topProductsSlice = createSlice({
  name: "topProducts",
  initialState: {
    topSellingProducts: [],
    topRatedProducts: [],
    newlyArrivedProducts: [],
  },
  reducers: {
    setTopSellingProducts: (state, action) => {
      state.topSellingProducts = action.payload;
    },
    setTopRatedProducts: (state, action) => {
      state.topRatedProducts = action.payload;
    },
    setNewlyArrivedProducts: (state, action) => {
      state.newlyArrivedProducts = action.payload;
    },
  },
});

export const {
  setTopSellingProducts,
  setTopRatedProducts,
  setNewlyArrivedProducts,
} = topProductsSlice.actions;

export const fetchTopSelling = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:4000/api/top-selling");
    console.log("Top selling products:", response.data);

    if (response.status >= 200 && response.status < 300) {
      const topSellingProducts = response.data;

      dispatch(setTopSellingProducts(topSellingProducts));

      return response;
    } else {
      throw new Error(
        `Failed to fetch product data, status code: ${response.status}`
      );
    }
  } catch (error) {
    console.log("Error in fetching top selling products: ", error);
    throw error;
  }
};

export const fetchNewlyArrived = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "http://localhost:4000/api/newlyArrived-products"
    );
    console.log("Newly arrived products:", response.data);
    if (response.status >= 200 && response.status < 300) {
      const newlyArrivedProducts = response.data;
      dispatch(setNewlyArrivedProducts(newlyArrivedProducts));
    }
  } catch (error) {
    console.log("Error in fetching newly arrived products: ", error);
    throw error;
  }
};

export default topProductsSlice.reducer;
