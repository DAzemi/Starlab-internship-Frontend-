import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";

const cookies = new Cookies();
const initialToken = cookies.get("token") || null;
const intialEmail = cookies.get("email") || null;
const initialUserId = cookies.get("userId") || null;
console.log("Initial Token:", initialToken);
console.log("user ID: ", initialUserId);

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: initialToken,
    userId: initialUserId,
    emailVerificationSent: false,
    email: intialEmail,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      cookies.set("token", action.payload, { path: "/", maxAge: 3600 });
    },
    clearToken: (state) => {
      state.token = null;
      cookies.remove("token", { path: "/" });
    },
    setEmail: (state, action) => {
      state.email = action.payload;
      cookies.set("email", action.payload, { path: "/", maxAge: 3600 });
    },
    setEmailVerificationSent: (state) => {
      state.emailVerificationSent = true;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
      cookies.set("userId", action.payload, { path: "/", maxAge: 3600 });
    }
  },
});

export const {
  setToken,
  setEmail,
  clearToken,
  setEmailVerificationSent,
  // setuserName,
  // setRole,
  setUserId,
} = userSlice.actions;

export const login = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/api/login",
      userData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(`responsi:` ,response.data);
    const token = response.data;
    // console.log(token);
    dispatch(setToken(token));
  } catch (error) {
    console.error("Login error:", error);
    toast.error(`${error.response.data.message}`)

  }
};

export const googleSignIn = (googleSignInData) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/api/auth/google",
      googleSignInData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const token = response.data.token;

    dispatch(setToken(token));
    console.log("Received token in Redux action: ", token);
    useEffect(() => {
      console.log("Token from Redux store", token);
    });
  } catch (error) {
    console.error("Google sign-in error: ", error);
  }
};

export const register = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/api/registerUserToTemporary",
      userData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const message = response.data.message;
    console.log(message);

    if (response.status === 201) {
      console.log("User registered successfully");

      return "User registered successfully";
    } else {
      console.log("Registration error:", response.data.message);
    }
  } catch (error) {
    console.error("Registration error:", error);
  }
};

export const sendEmailVerification = (email) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/api/sendEmailVerification",
      { email },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const message = response.data.message;
    console.log(message);

    if (response.status === 200) {
      console.log("Email verification sent succesfully");
      dispatch(setEmailVerificationSent());
    } else {
      console.log("Email couldn't be sent", response.data.message);
    }
  } catch (error) {
    console.error("Email verification route error:", error);
  }
};

export const logout = () => (dispatch) => {
  dispatch(clearToken());
};

export default userSlice.reducer;
export const userActions = userSlice.actions;
