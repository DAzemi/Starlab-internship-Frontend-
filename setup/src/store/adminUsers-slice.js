import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const adminUsersSlice = createSlice({
  name: "adminUser",
  initialState: {
    adminUsers: [], 
    NewUsersLastWeek: null,
  },
  reducers: {
    setAdminUsers: (state, action) => {
      state.adminUsers = action.payload;
    },
    setNewUsersLastWeek: (state, action) => {
      state.NewUsersLastWeek = action.payload;
    },
  },
});


export const { setAdminUsers, setNewUsersLastWeek } = adminUsersSlice.actions;
export const fetchUsers = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:4000/api/getUsersOnly");
    if (response.status !== 200) {
      throw new Error("Failed to fetch users");
    }
    const data = response.data; 
    dispatch(setAdminUsers(data));
  } catch (error) {
    console.error("Fetch users error:", error);
  }
};
export const fetchUser = (userId) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:4000/api/getUserOnly/${userId}`);
    if (response.status !== 200) {
      throw new Error("Failed to fetch users");
    }
    const data = response.data; 
    dispatch(setAdminUsers(data));
  } catch (error) {
    console.error("Fetch users error:", error);
  }
};

  
export const editUsers = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:4000/api/updateUser/:id");
    if (response.status !== 200) {
      throw new Error("Failed to edit User");
    }
    const data = response.data;
    dispatch(setAdminUsers(data));
  } catch (error) {
    console.error("Edit users error:", error);
  }
};

export const insertUsers = () => async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:4000/api/insertuser");
      if (response.status !== 200) {
        throw new Error("Failed to insert User");
      }
      const data = response.data;
      dispatch(setAdminUsers(data));
    } catch (error) {
      console.error("Insert users error:", error);
    }
  };

  export const deleteUsers = (userId) => async (dispatch) => {
    try {
      const response = await axios.delete(`http://localhost:4000/api/deleteUser/${userId}`);
      if (response.status !== 200) {
        throw new Error("Failed to delete User");
      }
      const data = response.data;
      dispatch(setAdminUsers(data));
    } catch (error) {
      console.error("delete users error:", error);
    }
  };
  export const fetchNewUsersLastWeek = () => async (dispatch) => {
    try {
      const response = await fetch("http://localhost:4000/api/getNewUsersLastWeek");
      if (!response.ok) {
        throw new Error("Failed to fetch new users last week");
      }
      const data = await response.json();
  
      dispatch(setNewUsersLastWeek(data));
  
      return data;
    } catch (error) {
      console.error("Fetch new users last week error:", error);
      throw error;
    }
  };
  

export default adminUsersSlice.reducer;
export const adminUsersActions = adminUsersSlice.actions;


