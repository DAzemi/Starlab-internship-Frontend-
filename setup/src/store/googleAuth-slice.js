import { createSlice } from "@reduxjs/toolkit";

const googleAuthSlice = createSlice({
  name: "googleAuth",
  initialState: {
    token: null,
    user: null,
  },
  reducers: {
    setGoogleToken: (state, action) => {
      state.token = action.payload;
    },
    setGoogleUser: (state, action) => {
      state.user = action.payload;
    },
    clearGoogleToken: (state) => {
      state.setGoogleToken = null;
    },
  },
});

export const { setGoogleToken, setGoogleUser, clearGoogleToken } =
  googleAuthSlice.actions;

export default googleAuthSlice.reducer;
