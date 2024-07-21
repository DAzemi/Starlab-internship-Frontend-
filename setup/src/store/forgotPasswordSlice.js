import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  email: "",
  loading: false,
  error: null,
};

export const sendPasswordResetRequest = createAsyncThunk(
  "forgotPassword/sendPasswordResetRequest",
  async (email, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/forgotPassword",
        { email }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const forgotPasswordSlice = createSlice({
  name: "forgotPassword",
  initialState,
  reducers: {
    setEmailAndToken: (state, action) => {
      state.email = action.payload.email;
      state.resetToken = action.payload.resetToken;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendPasswordResetRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendPasswordResetRequest.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(sendPasswordResetRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setEmailAndToken } = forgotPasswordSlice.actions;
export const selectForgotPassword = (state) => state.forgotPassword;
export const selectForgotPasswordError = (state) => state.forgotPassword.error;

export default forgotPasswordSlice.reducer;
