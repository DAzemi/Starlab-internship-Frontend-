import React from "react";
import successVerify from "./successVerify.png";
import { Navigate, useNavigate } from "react-router-dom";

function VerifySuccess() {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="bg-white min-h-screen flex items-center justify-center font-['Poppins'] my-2 mx-3"
        style={{ overflow: "hidden" }}
      >
        <container className="bg-[#f7fdff] rounded-[36px] height-1/2 py-16 xl:px-24 md:px-24 lg:px-24 flex flex-col items-center">
          <img
            src={successVerify}
            alt="Successfully verified"
            className="align-center lg:w-[205px] lg:h-[205px] w-[95px] h-[95px] lg:-mt-6 mt-8 mb-8"
          />
          <h1 className="text-[#505771]  lg:text-5xl text-center font-semibold lg:mt-6 lg:pt-6 mb-6 text-[1.5rem] lg:tracking-wide tracking-[0.4px] sm:leading-[2.41rem]">
            Your account is now verified
          </h1>
          <p className="text-[#505872] w-3/4 text-slate-600 font-normal leading-loose tracking-wide xl:text-[1.2rem] lg:text-[1.2rem] md:text-[1rem] text-[1rem] text-center xl:pb-16 mb-4">
            Congratulations! Your account verification is complete.
            <br></br> You can now enjoy enhanced security and access additional
            features on our platform. <br></br>Thank you for taking this
            important step to confirm your identity and protect your account.
          </p>
          <button
            className="lg:w-[345px] lg:h-[61px] w-[281px] h-[45px] lg:text-[22px] text-[1rem] text-white bg-blue-700 rounded-[5px] justify-center items-center inline-flex font-medium mb-10"
            onClick={() => {
              navigate("/login");
            }}
          >
            Go to login
          </button>
        </container>
      </div>
    </div>
  );
}

export default VerifySuccess;
