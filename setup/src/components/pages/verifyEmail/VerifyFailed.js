import React from "react";
import errorVerify from "./errorVerify.png";
import { useNavigate } from "react-router-dom";

function VerifyFailed() {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="bg-white min-h-screen flex items-center justify-center font-['Poppins'] my-2 mx-3"
        style={{ overflow: "hidden" }}
      >
        <container className="bg-[#f7fdff] rounded-[36px] height-1/2 py-16 xl:px-24 md:px-24 lg:px-24 flex flex-col items-center">
          <img
            src={errorVerify}
            alt="error-verifying"
            className="align-center lg:w-[205px] lg:h-[205px] w-[95px] h-[95px] lg:-mt-6 mt-8 mb-8"
          />
          <h1 className="text-[#505771] font-['Poppins'] text-slate-600 lg:text-5xl text-3xl text-center font-semibold lg:mt-6 lg:pt-6 mb-6 lg:tracking-wide tracking-[0.4px] sm:leading-[2.41rem]">
            Verification failed
          </h1>
          <p className="text-[#505872] w-3/4 text-slate-600 font-normal leading-loose tracking-wide font-['Poppins'] xl:text-[1.2rem] lg:text-[1.2rem] md:text-[1rem] text-[1rem] text-center xl:pb-16 mb-4">
            We regret to inform you that your account verification has not been{" "}
            <br></br> successful. Please review the information provided and try
            again, ensuring that all details are accurate.
          </p>
          <button
            className="lg:w-[345px] lg:h-[61px] w-[281px] h-[45px] lg:text-[22px] text-[1rem] text-white bg-blue-700 rounded-[5px] justify-center items-center inline-flex font-medium mb-10"
            onClick={() => {
              navigate("/");
            }}
          >
            Go to homepage
          </button>
        </container>
      </div>
    </div>
  );
}

export default VerifyFailed;
