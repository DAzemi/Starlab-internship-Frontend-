import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    admins: [], 
    adminCount: null, 
  },
  reducers: {
    setAdmins: (state, action) => {
      state.admins = action.payload;
    },
    setAdminCount: (state, action) => {
      state.adminCount = action.payload;
    },
  },
});

export const { setAdmins, setAdminCount } = adminSlice.actions;
export const fetchadmins = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:4000/api/getAdmins");
    if (response.status !== 200) {
      throw new Error("Failed to fetch admins");
    }
    const data = response.data; 
    dispatch(setAdmins(data));
  } catch (error) {
    console.error("Fetch admins error:", error);
  }
};

  

export const fetchAdminsCount = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:4000/api/getAdminsCount");

    if (response.status === 200) {
      const data = response.data;
      dispatch(setAdminCount(data));
    } else {
      throw new Error("Failed to fetch adminsCount");
    }
  } catch (error) {
    console.error("Fetch admins count error:", error);
  }
};





export default adminSlice.reducer;
export const adminActions = adminSlice.actions;



