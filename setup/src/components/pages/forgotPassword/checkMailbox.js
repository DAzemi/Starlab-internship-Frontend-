import React from "react";
import emailLogo from "../verifyEmail/emailLogo.png";
import { useNavigate } from "react-router-dom";

function CheckMailbox() {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="bg-white min-h-screen flex items-center justify-center font-[Poppins] my-2 mx-3"
        style={{ overflow: "hidden" }}
      >
        <container className="bg-[#f7fdff] rounded-[36px] height-1/2 py-16 xl:px-24 md:px-24 lg:px-24 flex flex-col items-center">
          <img
            src={emailLogo}
            alt="email-logo"
            className="align-center lg:w-[205px] lg:h-[205px] w-[95px] h-[95px] lg:-mt-6 mt-8 mb-8 "
          ></img>
          <h1 className="text-[#505771]  lg:text-5xl text-center font-semibold lg:mt-6 lg:pt-6 mb-6 text-[1.5rem] lg:tracking-wide tracking-[0.4px] sm:leading-[2.41rem]">
            Please check your mailbox
          </h1>
          <p className="text-[#505872] text-lg text-center mb-4">
            You’re almost there! We sent an email to your mailbox
          </p>
          <p className="text-[#505872] text-lg text-center mb-4 leading-widest">
            Just click on the link in that email to complete reset your
            password. If you don't <br></br> see it, you may need to{" "}
            <span className="font-semibold">check your spam</span> folder.
          </p>
          <button
            className="lg:w-[345px] lg:h-[61px] w-[281px] h-[45px] lg:text-[22px] text-[1rem] text-white bg-blue-700 rounded-[5px] justify-center items-center inline-flex font-medium mb-10"
            onClick={() => navigate("/login")}
          >
            Back to login
          </button>
        </container>
      </div>
    </div>
  );
}

export default CheckMailbox;
