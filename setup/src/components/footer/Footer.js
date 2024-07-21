import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faGithub, faInstagram, faLinkedinIn, } from '@fortawesome/free-brands-svg-icons';

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'instant' });
}

const Footer = () => {
  return (
    <div className='z-1 relative'>
      <div className='bg-sky-50 h-16'></div>
      <div className='bg-sky-50'>
        <div className=" overflow-hidden text-center p-9 bg-blue-600 z-1 mx-auto lg:mr-40 lg:ml-40 ml-5 mr-5 rounded-lg relative">
          <div className="lg:w-60 lg:h-40 lg:rounded-full lg:border-8  lg:absolute lg:rotate-[50deg] lg:ml-40 lg:left-[-299px] lg:top-[-118px] lg:border-transparent lg:border-r-blue-400
            w-60 h-20 rounded-full border-8  absolute rotate-[50deg] ml-40 left-[-328px] top-[-105px] border-transparent border-r-blue-400">
          </div>

          <h2 className="text-white font-bold text-3xl mb-2">Stay tuned with Us</h2>
          <p className="text-white text-m mb-4">Get our latest updates, discount offers and much more</p>
          <div className="relative flex items-center justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="py-2 px-4 mr-2 lg:px-9  lg:mr-6  ml-2 border border-white lg:rounded  rounded-md "
            />
            <button className="bg-black text-white w-40 py-2 mr-3 px-4 lg:ml-3 lg:rounded-md rounded-full">Submit</button>
          </div>
          {/* <div className=" overflow-hidden lg:overflow-hidden
   lg:w-40 lg:h-20 lg:border-8 lg:border-gray-700 lg:absolute lg:rotate-[-60deg] lg:ml-30 lg:right-[-30px] lg:bottom-[-30px] w-40 h-60
  rounded-full  border-8  border-gray-700 absolute right-[-20px] bottom-[-45px]">
    </div> */}
          <div className=" lg:h-40 lg:w-60 lg:right-[-121px] lg:bottom-[-135px] lg:rotate-[-300deg] lg:absolute lg:rounded-full lg:border-8 lg:border-transparent lg:border-l-gray-300 border-transparent w-20 h-20
  rounded-full  border-8  border-gray-700 absolute right-[-31px] bottom-[-50px] border-l-gray-300 rotate-[-300deg] "></div>
        </div>
        <div className="flex lg:gap-20 flex-col  justify-center items-center p-8  text-white bottom-12 left-0 w-full lg:flex-row lg:justify-center">
          <div className="mb-4 flex flex-col items-center lg:mt-8 lg:mr-36">
            <div className="w-10 h-10 mr-40 lg:mr-[205px] text-left">
              <span className="text-stone-400 text-4xl font-semibold font-poppins leading-tight">Su</span>
              <span className="text-blue-500 text-4xl font-semibold font-poppins leading-tight">p</span>
              <span className="text-stone-400 text-4xl font-semibold font-poppins leading-tight">er</span>
              <span className="text-blue-500 text-4xl font-semibold font-poppins leading-tight">N</span>
              <span className="text-stone-400 text-4xl font-semibold font-poppins leading-tight">ova</span>
            </div>
            <p className="text-left lg:text-lg  text-gray-600 w-64 mt-5">
              We keep a pulse on the ever-evolving tech landscape,
              making it our mission to bring you the very best in technology.
            </p>
            {/* <div className="flex mt-6 mr-4 lg:mr-14">
              <FontAwesomeIcon icon={faTwitter} size="2x" className="text-blue-500 hover:text-blue-900 cursor-pointer mx-2" />
              <FontAwesomeIcon icon={faInstagram} size="2x" className="text-blue-500 hover:text-blue-900 cursor-pointer mx-2" />
              <FontAwesomeIcon icon={faFacebook} size="2x" className="text-blue-500 hover:text-blue-900 cursor-pointer mx-2" />
              <FontAwesomeIcon icon={faGithub} size="2x" className="text-blue-500 hover:text-blue-900 cursor-pointer mx-2" />
            </div> */}
          </div>
          <div className="text-center lg:text-center  lg:ml-6 mb-6 lg:mb-0 lg:mr-10">
            <h2 className="font-bold text-blue-500 mb-4">Company</h2>
            <ul className="list-none p-0">
              <li className="w-full">
                <NavLink to="/about-us" onClick={scrollToTop} className="text-lg text-blue-900 hover:bg-blue-200 hover:text-blue-800 py-2 px-4 rounded-lg">About Us</NavLink>
              </li>
              <li className="w-full">
                <NavLink to="/products" onClick={scrollToTop} className="text-lg text-blue-900 hover:bg-blue-200 hover:text-blue-800 py-2 px-4 rounded-lg">Features</NavLink>
              </li>
              <li className="w-full">
                <NavLink to="" onClick={scrollToTop} className="text-lg text-blue-900 hover:bg-blue-200 hover:text-blue-800 py-2 px-4 rounded-lg">Works</NavLink>
              </li>
              <li className="w-full">
                <NavLink to="/career" onClick={scrollToTop} className="text-lg text-blue-900 hover:bg-blue-200 hover:text-blue-800 py-2 px-4 rounded-lg">Career</NavLink>
              </li>

            </ul>
          </div>

          <div className="text-center lg:text-center lg:ml-20 mb-6 lg:mb-0">
            <h2 className="font-bold text-blue-500 mb-4">Help</h2>
            <ul className="list-none p-0 lg:text-left">

              <li>
                <NavLink to="/privacypolicy" onClick={scrollToTop} className="text-lg text-blue-900 hover:bg-blue-200 hover:text-blue-800 py-2 px-4 rounded-lg">Privacy Policy </NavLink>
              </li>
              <li>
                <NavLink to="/costumerSupport" onClick={scrollToTop} className="text-lg text-blue-900 hover:bg-blue-200 hover:text-blue-800 py-2 px-4 rounded-lg">Customer Support</NavLink>

              </li>
              <li>
                <NavLink to="/delivery-details" onClick={scrollToTop} className="text-lg text-blue-900 hover:bg-blue-200 hover:text-blue-800 py-2 px-4 rounded-lg">Delivery Details</NavLink>
              </li>
              <li>
                <NavLink to="/termsConditions" onClick={scrollToTop} className="text-lg text-blue-900 hover:bg-blue-200 hover:text-blue-800 py-2 px-4 rounded-lg">Terms & Conditions</NavLink>
              </li>
            </ul>
          </div>
          <div className="text-center lg:text-center lg:ml-20 mb-6 lg:mt-10">
            <h2 className="font-bold text-blue-500 mb-4">Contact Us</h2>
            <ul className="list-none p-0 lg:text-left">
              <div className="flex flex-col lg:flex-row lg:space-x-2 lg:items-start">
                {/* First Line */}
                <div className="flex flex-row space-y-2 ">
                  <FontAwesomeIcon icon={faTwitter} size="2x" className="text-blue-700 hover:text-black cursor-pointer mt-2 mx-2" />
                  <FontAwesomeIcon icon={faInstagram} size="2x" className="text-blue-700 hover:text-black cursor-pointer mx-2" />
                  <FontAwesomeIcon icon={faFacebook} size="2x" className="text-blue-700 hover:text-black cursor-pointer mx-2" />
                  <FontAwesomeIcon icon={faGithub} size="2x" className="text-blue-700 hover:text-black  cursor-pointer mx-2" />
                  <FontAwesomeIcon icon={faLinkedinIn} size="2x" className="text-blue-700 hover:text-black cursor-pointer mx-2" />

                </div>

                {/* Second Line */}
                {/* <div className="flex flex-row space-y-2   ">
        <FontAwesomeIcon icon={faYoutube} size="2x" className="text-blue-700 hover:text-black  cursor-pointer mt-2 mx-2" />
        <FontAwesomeIcon icon={faGithub} size="2x" className="text-blue-700 hover:text-black  cursor-pointer mx-2" />
        <FontAwesomeIcon icon={faLinkedinIn} size="2x" className="text-blue-700 hover:text-blue-900 cursor-pointer mx-2" />
        
      </div> */}

              </div>
            </ul>
          </div>




        </div>
        <div className=" bottom-0  lg:bottom-0 left-0 w-full bg-sky-100 p-4">
          <p className="text-black text-center">© Copyright 2023  All Rights Reserved Supernova!</p>
        </div>
      </div>
    </div>

  );
};

export default Footer; 