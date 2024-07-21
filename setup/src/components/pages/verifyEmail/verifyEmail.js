import emailLogo from "./emailLogo.png";
import { useSelector } from "react-redux";

export const VerifyEmail = () => {
  const email = useSelector((state) => state.user.email);
  console.log(email);
  return (
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
          Please verify your email
        </h1>
        <p className="text-[#505872] text-lg text-center mb-4">
          You’re almost there! We sent an email to
        </p>
        <p className="text-[#505872] font-bold tracking-wide text-lg text-center mb-4">
          {email}
        </p>
        <p className="text-[#505872] text-lg text-center mb-4 leading-widest">
          Just click on the link in that email to complete your signup. If you
          don't <br></br> see it, you may need to{" "}
          <span className="font-semibold">check your spam</span> folder.
        </p>
        <p className="text-[#505872] lg:text-[20px] text-[16px] text-center mb-4 leading-6 py-3">
          Still can't find it? No problem.
        </p>
        <button
          className="lg:w-[345px] lg:h-[61px] w-[281px] h-[45px] lg:text-[22px] text-[1rem] text-white bg-blue-700 rounded-[5px] justify-center items-center inline-flex font-medium mb-10"
          // onClick={handleSubmit}
        >
          Resend verification email
        </button>
      </container>
    </div>
  );
};
