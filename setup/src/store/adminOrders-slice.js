import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const adminOrderSlice = createSlice({
  name: "adminOrder",
  initialState: {
    adminOrders: [], 
    NewOrdersLastWeek: null,
    fullOrder: null,
  },
  reducers: {
    setAdminOrders: (state, action) => {
      state.adminOrders = action.payload;
    },
    setNewOrdersLastWeek: (state, action) => {
      state.NewOrdersLastWeek = action.payload;
    },
    setFullOrder: (state, action) => {
      state.fullOrder = action.payload;
    },
  },
});

export const { setAdminOrders, setNewOrdersLastWeek, setFullOrder} = adminOrderSlice.actions;
export const fetchadminOrders = () => async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:4000/api/getOrders");
      if (response.status !== 200) {
        throw new Error("Failed to fetch stocks");
      }
      const data = response.data; 
      dispatch(setAdminOrders(data));
    } catch (error) {
      console.error("Fetch stock error:", error);
    }
  };
  export const fetchadminOrderById = (orderId) => async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:4000/api/getOrder/${orderId}`);
      if (response.status !== 200) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.data;
      console.log("Fetched product data: ", data); 
      dispatch(setAdminOrders(data));
    } catch (error) {
      console.error("Fetch product error:", error);
    }
  };
  
  
  export const deleteadminOrders = (orderId) => async (dispatch) => {
    try {
      const response = await axios.delete(`http://localhost:4000/api/deleteOrder/${orderId}`);
      if (response.status !== 200) {
        throw new Error("Failed to delete Product");
      }
      const data = response.data;
      dispatch(setAdminOrders(data));
    } catch (error) {
      console.error("Delete product error:", error);
    }
  };

  export const insertAdminOrder = (orderData) => async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:4000/api/insertOrder", orderData);
      if (response.status !== 200) {
        throw new Error("Failed to insert Product");
      }
      const data = response.data;
      dispatch(setAdminOrders(data));
    } catch (error) {
      console.error("Insert product error:", error);
    }
  };
  
  export const updateAdminOrder = (orderId, updatedOrderData) => async (dispatch) => { 
    try {
      const response = await axios.put(`http://localhost:4000/api/updateOrder/${orderId}`, updatedOrderData);
  
      if (response.status === 200) {
        const updatedOrder = response.data; 
        console.log("Successfully updated product data: ", updatedOrder);
        dispatch(setAdminOrders(updatedOrderData));
      } else {
        throw new Error("Failed to update product. The server returned an error.");
      }
    } catch (error) {
      console.error("Update product error:", error);
    }
  };
  export const fetchNewOrdersLastWeek = () => async (dispatch) => {
    try {
      const response = await fetch("http://localhost:4000/api/getNewOrdersLastWeek");
      if (!response.ok) {
        throw new Error("Failed to fetch new users last week");
      }
      const data = await response.json();
  
      dispatch(setNewOrdersLastWeek(data));
  
      return data;
    } catch (error) {
      console.error("Fetch new users last week error:", error);
      throw error;
    }
  };

  
  export const fetchfullOrder = (orderId) => async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:4000/api//getFullOrder/${orderId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch new users last week");
      }
      const data = await response.json();
  
      dispatch(setNewOrdersLastWeek(data));
  
      return data;
    } catch (error) {
      console.error("Fetch new users last week error:", error);
      throw error;
    }
  };

export default adminOrderSlice.reducer;
export const adminOrderActions = adminOrderSlice.actions;
