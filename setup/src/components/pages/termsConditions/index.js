import React from 'react';

const TermsConditions = () => {
  return (
    <div className="overflow-hidden">
      <div className="bg-blue-600 flex flex-col items-center px-5 py-12 ">
        <div className="flex flex-col items-center mt-2.5 mb-7 w-full ">
          <div className="text-white text-4xl leading-[60px]  text-center">
            Terms & Conditions
          </div>

        </div>
      </div>

      <div className="flex justify-between gap-5 self-end max-md:max-w-full max-md:flex-wrap">
        <div className="w-full">

         

          <div className="flex lg:justify-start   gap-5  max-md:max-w-full max-md:flex-wrap mb-2 ml-4 mr-2">
            <div className=" w-full  lg:w-2/6 md:w-2/4 lg:ml-10 ml-6 sm:mx-5">

              <div className="shadow border border-neutral-300 flex flex-col mx-auto lg:mt-10 mt-20 mr-3 lg:mr-24 px-6 py-6 border-solid">
                <div className="text-zinc-600 text-xl leading-8 text-center">Terms & Conditions:</div>
                <div className="text-blue-500 text-xl leading-8 mt-12 lg:ml-5">
                  <a href="#Introduction">Introduction</a>
                </div>
                <div className="text-blue-500 text-xl leading-8 mt-4 lg:ml-5 ">
                  <a href="#acceptance-of-terms">Acceptance of Terms</a>
                </div>
                <div className="text-blue-500 text-xl leading-8 mt-4 lg:ml-5">
                  <a href="#account-and-registration ">Account and Registration</a>
                </div>
                <div className="text-blue-500 text-xl leading-8 mt-4 mb-2 lg:ml-5">
                  <a href="#return-policy">  Refund and Return Policy</a>
                </div>
                <div className="text-blue-500 text-xl leading-8 mt-2 mb-2 lg:ml-5">
                  <a href="#termination-of-service">Termination of Service</a>
                </div>

                <div className="text-blue-500 text-xl leading-8 mt-2 mb-2 lg:ml-5">
                  <a href="#user-responsibilitis">User Responsibilities</a>
                </div>

              </div>
            </div>
          </div>
          <div id="Introduction" className="text-zinc-600 text-4xl mt-10 ml-16 lg:ml-20 leading-[60px] ">
            Introduction
          </div>
          <div className="text-zinc-600 text-base leading-7 ml-20 w-2/4 ">
            Welcome to our platform! This introductory section aims to provide you with a clear understanding of the purpose and significance of the terms and conditions outlined below. By using our website or services, you acknowledge that these terms govern your interaction with our platform.
          </div>
        </div>
      </div>


      <div className="flex flex-col items-center mt-6">
        <div id="acceptance-of-terms" className="text-zinc-600 text-4xl leading-[60px] lg:ml-20 ml-16 self-stretch mr-5 mt-28">
          Acceptance of Terms
        </div>
        <div className="flex flex-row justify-start items-start mt-4 w-full ">
          <div className="text-zinc-600 text-base leading-7 w-2/4 ml-20">
            To utilize our website or services, users must explicitly agree to the terms and conditions presented here. Your continued use of the platform implies acceptance of these terms and the obligations they entail.
          </div>
        </div>

        <div id="account-and-registration" className="text-zinc-600 text-4xl leading-[60px] lg:ml-20 ml-16 self-stretch -mr-5 mt-44">
          Account and Registration
        </div>

        <div className="flex flex-row justify-start items-start mt-4 w-full ">
          <div className="text-zinc-600 text-base leading-7 w-2/4 ml-20">
            Information regarding the creation of user accounts, including details about registration and account security, is provided here. Conditions for maintaining, modifying, or terminating user accounts are outlined to guide users through their account-related interactions.
          </div>
        </div>

        <div id="return-policy" className="text-zinc-600 text-4xl leading-[60px] self-stretch lg:ml-20 ml-16 -mr-5 mt-36">
          Refund and Return Policy
        </div>
        <div className="flex flex-row justify-start items-start mt-4 w-full ">
          <div className="text-zinc-600 text-base leading-7 w-2/4 ml-20 ">
            Our comprehensive refund and return policy is outlined here, providing users with a clear understanding of the company's procedures for handling refund requests and returning products. Conditions and procedures are detailed to facilitate a smooth process.
          </div>
        </div>
        <div id="termination-of-service" className="text-zinc-600 text-4xl leading-[60px] lg:ml-20 ml-20 self-stretch -mr-5 mt-44">
          Termination of Services
        </div>

        <div className="flex flex-row justify-start items-start mt-4 w-full ">
          <div className="text-zinc-600 text-base leading-7 w-2/4 ml-20">
            As a user, you bear the responsibility to engage with our platform ethically and within the bounds of legality. Certain activities deemed illegal or unethical are strictly prohibited to ensure a safe and respectful environment for all users.
          </div>
        </div>



        <div id="user-responsibilitis" className="text-zinc-600 text-4xl leading-[60px] lg:ml-20 ml-10 self-stretch -mr-5 mt-44">
          User Responsibilities
        </div>

        <div className="flex flex-row justify-start items-start mt-4 w-full ">
          <div className="text-zinc-600 text-base leading-7 w-2/4 ml-20">
            Conditions under which the website reserves the right to terminate or suspend user accounts or services are provided. Transparent notification processes are in place to inform users about such terminations.
          </div>
        </div>
        <div className="border-b border-gray-200 p-10 w-80 lg:w-1/2"></div>




        <div className="text-zinc-600 text-base lg:ml-2  ml-10 leading-8 self-center max-w-[405px] mt-4">
          SuperNova
          <br />
          3992 20th Street, 3rd Floor Prishtinë , CA 94110
          <br />
          (415) 227-2100
          <br />
          <br />
        </div>
      </div>
    </div>

  );
};

export default TermsConditions;
