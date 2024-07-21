import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favorite: null,
    allUserFavorites: [],
    userFavorites: [],
  },
  reducers: {
    setFavorite: (state, action) => {
      state.favorite = action.payload;
    },
    setAllUserFavorites: (state, action) => {
      state.allUserFavorites = action.payload;
    },
  },
});

export const { setFavorite, setAllUserFavorites } = favoriteSlice.actions;

export const addToFavorite = (userFavorite) => async (dispatch) => {
  // console.log(`userfavorite, ${userFavorite}`);
  try {
    const response = await axios.post(
      "http://localhost:4000/api/insertUserFavorites",
      userFavorite
    );
    // console.log(response);
    if (response.statusText === "OK") {
      toast.info(
        `${userFavorite.product_name} added to favorites successfully!`
      );
    }
  } catch (error) {
    console.error("Add to favorites error:", error);
    toast.error("Failed to add item to favorites. Please try again.");
  }
};

export const deleteFromFavorites =
  (favoriteToBeDeleted) => async (dispatch) => {
    const { user_id, product } = favoriteToBeDeleted;
    console.log("favoriteToBeDeleted", favoriteToBeDeleted);
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/deleteUserFavorite?user_id=${user_id}&product_id=${product.productId}`
      );
      if (response.statusText === "OK") {
        toast.error(`${product.name} deleted from favorites successfully!`);
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error(
        "Failed to delete item from favorites. Please try again later."
      );
    }
  };

export const getUserFavorites = (userId) => async (dispatch) => {
  // console.log("userid", userId);
  try {
    const response = await axios.get(
      `http://localhost:4000/api/getUserFavoriteByUserId/${userId}`
    );
    console.log(response);
    if (response.statusText === "OK") {
      dispatch(setAllUserFavorites(response.data));
    }
  } catch (error) {
    console.error("Login error:", error);
  }
};

export default favoriteSlice.reducer;
export const favoriteActions = favoriteSlice.actions;
