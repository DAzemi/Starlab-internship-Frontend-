import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="overflow-hidden">
      <div className="bg-blue-600 flex flex-col items-center px-5 py-12 ">
        <div className="flex flex-col items-center mt-2.5 mb-7 w-full ">
          <div className="text-white text-4xl leading-[60px]  text-center">
            Privacy Policy
          </div>
          <div className="text-white text-xl leading-8 lg:mt-6 mt-10 max-md:max-w-full text-center">
            <span className="">
              To learn more about Privacy at SuperNova please visit our{" "}
            </span>
            <span className="font-semibold">Privacy Hub.</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between   gap-5 self-end max-md:max-w-full max-md:flex-wrap">
        <div className="w-full">
          {/* <div className=" ml-8">
            <div className="border shadow-sm flex flex-col mx-auto lg:mt-20 mt-12  mr-24 px-6 py-6 border-solid border-zinc-300 w-80">
              <div className="text-zinc-600 text-xl leading-8">Terms & Conditions:</div>
              <div className="text-blue-500 text-xl leading-8 mt-12">
                <a href="#privacy-statement">Privacy Statement</a>
              </div>
              <div className="text-blue-500 text-xl leading-8 mt-4">
                <a href="#information-collect">Information We Collect</a>
              </div>
              <div className="text-blue-500 text-xl leading-8 mt-4">
                <a href="#data-security">Data Security</a>
              </div>
              <div className="text-blue-500 text-xl leading-8 mt-4 mb-2">
                  <a href="#data-security">Data Security</a>
              </div>
            </div>
          </div> */}
          <div className="flex lg:justify-start   gap-5  max-md:max-w-full max-md:flex-wrap mb-2 ml-4 mr-2">
            <div className=" w-full ml-5 lg:w-2/6 md:w-2/4 lg:ml-10 sm:mx-5">
              <div className="">
                <div className="shadow border border-neutral-300 flex flex-col mx-auto lg:mt-10 mt-20 mr-3 lg:mr-32 px-6 py-6 border-solid">
                  <div className="text-zinc-600 text-xl leading-8 text-center lg:text-start">  Table of contents:</div>
                  <div className="text-blue-500 text-xl leading-8 mt-12">
                    <a href="#privacy-statement">Privacy Statement</a>
                  </div>
                  <div className="text-blue-500 text-xl leading-8 mt-4">
                    <a href="#information-collect">Information We Collect</a>
                  </div>
                  <div className="text-blue-500 text-xl leading-8 mt-4">
                    <a href="#data-security">Data Security</a>
                  </div>
                  <div className="text-blue-500 text-xl leading-8 mt-4 mb-2">
                    <a href="#data-security">Data Security</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-zinc-600 text-xl leading-8 ml-20 max-md:max-w-full mt-24">
            <span className=" italic font-medium ">Effective January 6, 2023</span>
            <span className="">
              <br />
              Our Privacy Policy has been updated.
            </span>
          </div>

          <div id="privacy-statement" className="text-zinc-600 text-4xl mt-10 ml-16 lg:ml-20 leading-[60px] ">
            Privacy Statement
          </div>
          <div className="text-zinc-600 text-base leading-7 ml-20 w-2/4 ">
            At SuperNova, we are committed to protecting your privacy and ensuring
            the security of your personal information. This Privacy Statement
            outlines our practices regarding the collection, use, and disclosure
            of your personal data. By using our services or providing your
            information, you consent to the terms outlined in this Privacy
            Statement. If you have any questions or concerns about our privacy
            practices.
          </div>
        </div>
      </div>


      <div className="flex flex-col items-center mt-6">
        <div id="information-collect" className="text-zinc-600 text-4xl leading-[60px] lg:ml-20 ml-16 self-stretch mr-5 mt-28">
          Information We Collect
        </div>
        <div className="flex flex-row justify-start items-start mt-4 w-full ">
          <div className="text-zinc-600 text-base leading-7 w-2/4 ml-20">
            We may collect personal information, including but not limited to, your
            name, contact details, email address, and other relevant information
            necessary for the services we provide. We only collect information that is
            voluntarily provided by you.
          </div>
        </div>

        <div id="data-security" className="text-zinc-600 text-4xl leading-[60px] lg:ml-20 ml-16 self-stretch -mr-5 mt-44">
          Data Security
        </div>

        <div className="flex flex-row justify-start items-start mt-4 w-full ">
          <div className="text-zinc-600 text-base leading-7 w-2/4 ml-20">
            We may collect personal information, including but not limited to, your
            name, contact details, email address, and other relevant information
            necessary for the services we provide. We only collect information that is
            voluntarily provided by you.
          </div>
        </div>

        <div id="third-party-links" className="text-zinc-600 text-4xl leading-[60px] self-stretch lg:ml-20 ml-16 -mr-5 mt-36">
          Third-Party Links
        </div>
        <div className="flex flex-row justify-start items-start mt-4 w-full ">
          <div className="text-zinc-600 text-base leading-7 w-2/4 ml-20 ">
            We may collect personal information, including but not limited to, your
            name, contact details, email address, and other relevant information
            necessary for the services we provide. We only collect information that is
            voluntarily provided by you.
          </div>
        </div>
        <div className="border-b border-gray-200 p-10 w-80 lg:w-1/2"></div>

        <div className="text-blue-500 text-3xl leading-10 self-center lg:ml-1 ml-28
         max-w-[447px] mt-6">
          <span className="text-zinc-600 text-xl">Thank you for trusting </span>
          <span className="font-bold text-stone-300">Su</span>
          <span className="font-bold text-blue-500">p</span>
          <span className="font-bold text-stone-300">er</span>
          <span className="font-bold text-blue-500">N</span>
          <span className="font-bold text-stone-300">ova</span>
        </div>
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

export default PrivacyPolicy;
