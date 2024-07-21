import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DotLoader from "react-spinners/DotLoader";
import VerifySucceed from "./VerifySucceed";
import VerifyFailed from "./VerifyFailed";
import axios from "axios";
import {
  verifyEmail,
  requestVerification,
  verificationSuccess,
  verificationError,
} from "../../../store/email-verification-slice";

export const VerifyToken = () => {
  const dispatch = useDispatch();
  const { verificationStatus, isLoading } = useSelector(
    (state) => state.emailVerification
  );
  const { token } = useParams();
  const isMounted = useRef(true);

  useEffect(() => {
    const source = axios.CancelToken.source();
    if (isMounted.current) {
      dispatch(verifyEmail(token, source.token))
        .then((response) => {
          console.log("User verified succesfully");
        })
        .catch((error) => {
          console.log("Error verifying user ");
        });
    }

    return () => {
      isMounted.current = false;
      source.cancel("Request canceled");
    };
  }, [dispatch, token]);

  return (
    <div>
      {isLoading && (
        <div className="absolute top-1/2 left-1/2">
          <DotLoader
            size={132}
            color="aquamarine"
            className="flex justify-center align-center"
          />
        </div>
      )}
      {!isLoading && (
        <div>
          {verificationStatus === "success" && <VerifySucceed />}
          {verificationStatus === "error" && <VerifyFailed />}
        </div>
      )}
    </div>
  );
};
