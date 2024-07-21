import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const emailVerificationSlice = createSlice({
  name: "verifyEmail",
  initialState: {
    isLoading: false,
    verificationStatus: null,
  },
  reducers: {
    requestVerification: (state) => {
      state.isLoading = true;
      state.verificationStatus = null;
    },
    verificationSuccess: (state) => {
      state.isLoading = false;
      state.verificationStatus = "success";
    },
    verificationError: (state) => {
      state.isLoading = false;
      state.verificationStatus = "error";
    },
  },
});

export const { requestVerification, verificationSuccess, verificationError } =
  emailVerificationSlice.actions;

export const verifyEmail = (token) => async (dispatch) => {
  dispatch(requestVerification());
  try {
    const response = await axios.get(
      `http://localhost:4000/api/verifyEmail/${token}`
    );
    console.error("Response status: ", response.status);
    if (response.status === 200) {
      dispatch(verificationSuccess());
    } else {
      dispatch(verificationError());
    }
  } catch (error) {
    console.log("Verification failed: ", error);
    dispatch(verificationError());
  }
};

export default emailVerificationSlice.reducer;
