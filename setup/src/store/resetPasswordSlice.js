import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  password: "",
  confirmPassword: "",
  email: "",
  token: "",
  loading: false,
  error: null,
  successMessage: null,
};

export const sendUpdatePasswordRequest = createAsyncThunk(
  "resetPassword/sendUpdatePasswordRequest",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `http://localhost:4000/api/resetPassword`,
        data
      );
      console.log("Logging from sendUpdatePasswordRequest:");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const resetPasswordSlice = createSlice({
  name: "resetPassword",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendUpdatePasswordRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(sendUpdatePasswordRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload.message;
      })
      .addCase(sendUpdatePasswordRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectResetPassword = (state) => state.resetPassword;
export const selectResetPasswordError = (state) => state.resetPassword.error;

export default resetPasswordSlice.reducer;
