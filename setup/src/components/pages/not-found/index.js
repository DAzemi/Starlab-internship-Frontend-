import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="w-full flex justify-center flex-col text-center items-center content-center my-32 gap-2">
      
      
  <div className="text-blue-500  lg:text-[200px] font-extrabold font-['Inter'] lg:max-w-[402px] text-5xl self-center max-md:text-8xl">
    404
  </div>


    <div className="  text-blue-600 lg:text-5xl  text-3xl font-extrabold  leading-[70px]">
      Page not found
    </div>
    <div className="text-blue-600 text-base lg:text-2xl lg:mb-10 lg:mt-20 mt-12  font-bold">
      Oops! The page you are looking for does not exist. It might have been
      moved or deleted.
    </div>
      <Link to="/" className="text-white  bg-blue-600 text-l p-3 rounded-lg hover:text-black hover:bg-blue-400   duration-200 font-bold  hover:italic lg:mb-12 lg:mt-1  mt-5 ">To Homepage</Link>
   
    </main>
  );
}
