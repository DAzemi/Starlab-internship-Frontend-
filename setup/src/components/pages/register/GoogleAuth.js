import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setToken } from "../../../store/user-slice";

function GoogleAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getGoogleToken = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/auth/generate-google-token/",
        {
          withCredentials: true,
        }
      );
      const token = response.data.token;
      return token;
    } catch (error) {
      console.log("Error getting Google token", error);
      return null;
    }
  };

  useEffect(() => {
    const handleGoogleToken = async () => {
      try {
        const token = await getGoogleToken();
        console.log(token + "exists or not");

        if (token) {
          dispatch(setToken(token));
          navigate("/");
        } else {
          console.error("Failed to retrieve Google JWT token");
        }
      } catch (error) {
        console.error("Error handling google tokenL", error);
      }
    };
    handleGoogleToken();
  }, [dispatch, navigate]);

  return <div></div>;
}

export default GoogleAuth;
