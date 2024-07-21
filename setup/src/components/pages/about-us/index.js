import React from 'react'
import { IoMdPeople } from 'react-icons/io';
import { TiShoppingBag } from 'react-icons/ti';
import { BiDollar } from 'react-icons/bi';
import { FaTwitter, } from 'react-icons/fa';
import { IoLogoLinkedin, } from 'react-icons/io';
import SimpleMap from './SimpleMap';
import { FiArrowRight, } from 'react-icons/fi';








export default function AboutUs() {
  return (
    <div className='main-div mb-40'>
      <div className="flex flex-col md:flex-row sm:flex sm:flex-col h-screen font-[Poppins] p-9">
        {/*  section blue-background */}
        <div className="w-full md:w-1/2 p-4 bg-blue-500 flex items-center justify-center rounded-l h-full">
          <div className="w-96 text-white text-4xl font-normal font-[Poppins] leading-10 flex flex-item-centen">
            At SuperNova, we recognize the unique challenges and opportunities in the world of online buying.
          </div>
        </div>

        {/* Image section */}
        <div className="w-full md:w-1/2 flex items-center justify-center h-full">
          <img
            src={require('../../../components/assets/about-us-first.png')}
            alt="Your alt text"
            className="w-full h-full object-cover rounded-r"
          />
        </div>
      </div>
      <div className="w-full flex items-center justify-center mt-8">
        <div className=" items-center justify-center">

          <h2 className=" text-slate-400 text-4xl font-semibold font-['Poppins'] leading-10 text-center">Our Mission</h2>
          {/* <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula leo eget felis posuere, at commodo sem venenatis.</p> */}
          <p className="h-72 lg:pl-80 lg:pr-96 pr-5 pl-8 mt-10  border-r text-slate-400 text-1x2 font-semibold font-['Poppins'] leading-8 align-center">
            At SuperNova, we recognize the unique challenges and opportunities in the world of online buying. We take pride in our ability to bridge the gap between cutting-edge technology and the needs of modern consumers. Our team of experts combines their passion for innovation with a deep understanding of the ecommerce industry to provide you with state-of-the-art solutions.
          </p>

        </div>
      </div>

      <div className="lg:flex flex justify-center flex-col lg:flex-row items-center lg:mt-2 mt-20">

        {/* Card 1 */}
        <div className="border border-gray-300 w-80">
          {/* Icon and Text section */}
          <div className="flex items-center  p-4  gap-3">
            {/* Icon */}
            <div className='text-white bg-yellow-400 rounded-full p-2 '>
              <TiShoppingBag />
              {/* Text */}
            </div>
            <div className='header-card'>
              <p className="text-lg">FOUNDED IN</p>
              <p className='text-cyan-900 text-xl font-bold'>2023</p>
            </div>
          </div>
         
          <div className="w-64 h-28 text-cyan-900 text-opacity-50 text-sm font-medium font-['Poppins'] leading-tight pl-4">SuperNova has been at the forefront of innovation in the ecommerce technology industry. With a commitment to excellence and a passion for empowering online businesses,</div>


        </div>

        {/* Card 2 */}
        <div className="border border-gray-300 w-80">
          {/* Icon and Text section */}
          <div className="flex items-center  p-4  gap-3">
            {/* Icon */}
            <div className='text-white bg-green-400 rounded-full p-2 '>
              <BiDollar />
              {/* Text */}
            </div>
            <div className='header-card'>
              <p className="text-lg">TRACK SPENDT</p>
              <p className='text-cyan-900 text-xl font-bold'>3 Milion</p>
            </div>
          </div>
         
          <div className="w-64 h-28 text-cyan-900 text-opacity-50 text-sm font-medium font-['Poppins'] leading-tight pl-4">Start optimizing your e-commerce budget today with our cutting-edge technology.</div>

        </div>

        {/* Card 3 */}
        <div className="border border-gray-300 w-80">
          {/* Icon and Text section */}
          <div className="flex items-center  p-4  gap-3">
            {/* Icon */}
            <div className='text-white bg-purple-500 rounded-full p-2 '>
              <IoMdPeople />
              {/* Text */}
            </div>
            <div className='header-card'>
              <p className="text-lg">INTEGRATION PARTNERS</p>
              <p className='text-cyan-900 text-xl font-bold'>203+</p>
            </div>
          </div>
         
          <div className="w-64 h-28 text-cyan-900 text-opacity-50 text-sm font-medium font-['Poppins'] leading-tight pl-4">Start optimizing your e-commerce budget today with our cutting-edge technology.</div>

        </div>

      </div>
      <h2 className=" text-slate-400 text-4xl font-semibold font-['Poppins'] leading-10 mt-40   text-center">Our Team</h2>
      <div className="flex flex-col md:flex-row sm:flex sm:flex-col font-[Poppins] lg:mt-20  mt-1 p-9">
        {/* Text section with blue background */}
        <div className="md:w-1/2 flex items-center justify-center lg:mt-1 mt-40 ">
          <img
            src={require('../../../components/assets/team-first-image.png')}
            alt="Your alt text"
            className="w-100   rounded-r object-fill"
            style={{ maxHeight: '100vh' }}
          />
        </div>

        <div className="w-full md:w-1/2 p-4 flex lg:flex-col  flex-col lg:items-center lg:justify-center justify-start lg:mt-0 mt-20 rounded-l ">
          <div className="lg:w-64 lg:h-14 text-cyan-900 text-3xl font-medium font-['Poppins'] leading-10">Gady Eliayshov</div>
          <div className="w-40 h-12 text-slate-400 text-xl font-semibold font-['Poppins'] leading-10 mr-20">CEO / FOUNDER</div>
          <div className='border-b border-solid-slate-400 solid-opacity-50 lg:h-5 h-5 lg:w-80 w-80 lg:ml-20  sm:-10 '></div>
          <div className='flex gap-3 items-center mt-3 mr-40'>
            <div className="border rounded-full border-zinc-300 p-1 hover:bg-blue-500 hover:text-white  transition-all">
              <FaTwitter className="text-gray-950 hover:text-white" />
            </div>
            <div className="border rounded-full border-zinc-300 p-1 hover:bg-blue-500 hover:text-white   transition-all">
              <IoLogoLinkedin className="text-gray-950 hover:text-white" />
            </div>
          </div>
        </div>
      </div>



      <div className="flex flex-col md:flex-row sm:flex sm:flex-col  font-[Poppins] p-9">
        <div className="w-full md:w-1/2 p-4 flex lg:flex-col  flex-col lg:items-center lg:justify-center justify-start rounded-l  md:mt-5">
          <div className="lg:w-64 lg:h-14 text-cyan-900 text-3xl font-medium font-['Poppins'] leading-10">Gady Eliayshov</div>
          <div className="w-40 h-12 text-slate-400 text-xl font-semibold font-['Poppins'] leading-10 mr-20">CEO / FOUNDER</div>
          <div className='border-b border-solid-slate-400 solid-opacity-50 h-5 w-80 lg:ml-20 '></div>
          <div className='flex gap-3 items-center mt-3 mr-40'>
            <div className="border rounded-full border-zinc-300 p-1 hover:bg-blue-500 hover:text-white  transition-all">
              <FaTwitter className="text-gray-950 hover:text-white" />
            </div>
            <div className="border rounded-full border-zinc-300 p-1 hover:bg-blue-500 hover:text-white   transition-all">
              <IoLogoLinkedin className="text-gray-950 hover:text-white" />
            </div>
          </div>
        </div>
        {/* Text section with blue background */}
        <div className="md:w-1/2 lg:flex lg:items-center lg:justify-center lg:mb-0 ">
          <img
            src={require('../../../components/assets/team-ssecond-image.png')}
            alt="Your alt text"
            className="w-full h-full  rounded-l"
            style={{ maxHeight: '100vh'}}
          />
        </div>


      </div>



      <div className="flex flex-col md:flex-row sm:flex sm:flex-col  font-[Poppins] p-9">
        {/* Text section with blue background */}
        <div className="md:w-1/2 flex items-center justify-center lg:mt-1 ">
          <img
            src={require('../../../components/assets/team-seven-image.png')}
            alt="Your alt text"
            className="w-full  h-full  rounded-r "
            style={{ maxHeight: '100vh' }}
          />
        </div>

        <div className="w-full md:w-1/2 p-4 flex lg:flex-col  flex-col lg:items-center lg:justify-center justify-start mt-20 lg:mb-0  rounded-l  md:mt-5">
          <div className="lg:w-64 lg:h-14 text-cyan-900 text-3xl font-medium font-['Poppins']  lg:leading-10">Gady Eliayshov</div>
          <div className="w-40 h-12 text-slate-400 text-xl font-semibold font-['Poppins'] leading-10 mr-20">CEO / FOUNDER</div>
          <div className='border-b border-solid-slate-400 solid-opacity-50 h-5 w-80 lg:ml-20  '></div>
          <div className='flex gap-3 items-center mt-3 mr-40'>
            <div className="border rounded-full border-zinc-300 p-1 hover:bg-blue-500 hover:text-white  transition-all">
              <FaTwitter className="text-gray-950 hover:text-white" />
            </div>
            <div className="border rounded-full border-zinc-300 p-1 hover:bg-blue-500 hover:text-white   transition-all">
              <IoLogoLinkedin className="text-gray-950 hover:text-white" />
            </div>
          </div>
        </div>
      </div>


      <div className="flex flex-col md:flex-row sm:flex sm:flex-col  font-[Poppins] p-9">
        <div className="w-full md:w-1/2 p-4 flex lg:flex-col  flex-col lg:items-center lg:justify-center justify-start  lg:mb-0 rounded-l  md:mt-5">
          <div className="w-64 h-14 text-cyan-900 text-3xl font-medium font-['Poppins'] leading-10">Gady Eliayshov</div>
          <div className="w-40 h-12 text-slate-400 text-xl font-semibold font-['Poppins'] leading-10 mr-20">CEO / FOUNDER</div>
          <div className='border-b border-solid-slate-400 solid-opacity-50 h-5 w-80 lg:ml-20 '></div>
          <div className='flex gap-3 items-center mt-3 mr-40'>
            <div className="border rounded-full border-zinc-300 p-1 hover:bg-blue-500 hover:text-white  transition-all">
              <FaTwitter className="text-gray-950 hover:text-white" />
            </div>
            <div className="border rounded-full border-zinc-300 p-1 hover:bg-blue-500 hover:text-white   transition-all">
              <IoLogoLinkedin className="text-gray-950 hover:text-white" />
            </div>
          </div>
        </div>
        {/* Text section with blue background */}
        <div className="md:w-1/2 lg:flex lg:items-center lg:justify-center lg:mb-0 ">
          <img
            src={require('../../../components/assets/team-six-image.png')}
            alt="Your alt text"
            className="w-full h-full  rounded"
            style={{ maxHeight: '100vh' }}
          />
        </div>


      </div>


      <div className="flex flex-col md:flex-row sm:flex sm:flex-col  font-[Poppins] p-9">
        {/* Text section with blue background */}
        <div className="md:w-1/2 flex items-center justify-center">
          <img
            src={require('../../../components/assets/team-four-image.png')}
            alt="Your alt text"
            className="w-full h-full  rounded-r"
            style={{ maxHeight: '100vh' }}
          />
        </div>

        <div className="w-full md:w-1/2 p-4 flex lg:flex-col  flex-col lg:items-center lg:justify-center justify-start lg:mb-0 mt-20 rounded-l  md:mt-5">
          <div className="w-64 h-14 text-cyan-900 text-3xl font-medium font-['Poppins'] leading-10">Gady Eliayshov</div>
          <div className="w-40 h-12 text-slate-400 text-xl font-semibold font-['Poppins'] leading-10 mr-20">CEO / FOUNDER</div>
          <div className='border-b border-solid-slate-400 solid-opacity-50 h-5 w-80 lg:ml-20  '></div>
          <div className='flex gap-3 items-center mt-3 mr-40'>
            <div className="border rounded-full border-zinc-300 p-1 hover:bg-blue-500 hover:text-white  transition-all">
              <FaTwitter className="text-gray-950 hover:text-white" />
            </div>
            <div className="border rounded-full border-zinc-300 p-1 hover:bg-blue-500 hover:text-white   transition-all">
              <IoLogoLinkedin className="text-gray-950 hover:text-white" />
            </div>
          </div>
        </div>
      </div>


      <SimpleMap />

      <div className="lg:flex flex justify-center flex-col lg:flex-row items-center lg:mt-1 mt-20">

        {/* Card 1 */}
        <div className="lg:border-r lg:border-gray-300 lg:w-80 border-b border-gray-300 w-80">
          {/* Text section */}
          <div className="p-4">
            <div className='header-card'>
            <p className="text-lg text-cyan-900 font-medium font-['Poppins'] leading-7 text-center">PRISHTINA</p>

            </div>
          </div>
        
          <div className="w-64 h-28 text-cyan-900   text-center lg:ml-10 text-opacity-50 text-sm font-medium font-['Poppins'] leading-tight pl-4">  3992 20th Street, 3rd Floor <br />
            <span className="lg:mb-10">Prishtina, CA 9411</span></div>
          <div className="flex items-center lg:ml-14 ml-6 mb-10">
            <p className="  text-center text-slate-400 text-l font-semibold font-['Poppins'] leading-10 ml-4 ">T.</p>
            <FiArrowRight className="ml-2 text-blue-500 text-2xl" />
            <p className="ml-5 text-center text-slate-400 text-l font-semibold font-['Poppins'] leading-10">(415) 227-2100</p>
          </div>

        </div>

        {/* Card 2 */}
        <div className="lg:border-r lg:border-l lg:border-gray-300 lg:w-80 border-b border-gray-300 w-80">
          {/* Text section */}
          <div className="p-4">
            <div className='header-card'>
            <p className="text-lg text-cyan-900 font-medium font-['Poppins'] leading-7 text-center">PRIZEREN</p>

            </div>
          </div>
        
          <div className="w-64 h-28 text-cyan-900   text-center lg:ml-10 text-opacity-50 text-sm font-medium font-['Poppins'] leading-tight pl-4">  3992 20th Street, 3rd Floor <br />
            <span className="lg:mb-10">Prizeren, CA 9411</span></div>
          <div className="flex items-center lg:ml-14 ml-6 mb-10">
            <p className="  text-center text-slate-400 text-l font-semibold font-['Poppins'] leading-10 ml-4 ">T.</p>
            <FiArrowRight className="ml-2 text-blue-500 text-2xl" />
            <p className="ml-5 text-center text-slate-400 text-l font-semibold font-['Poppins'] leading-10">(415) 221-2200</p>
          </div>
        </div>


        {/* Card 3 */}
        <div className="lg:border-l lg:border-gray-300 lg:w-80 sm:border-b border-gray-300 w-80">
          {/* Text section */}
          <div className="p-4">
            <div className='header-card'>
              <p className="text-lg text-cyan-900 font-medium font-['Poppins'] leading-7 text-center">TIRANË</p>

            </div>
          </div>
        
          <div className="w-64 h-28 text-cyan-900  text-center lg:ml-10 text-opacity-50 text-sm font-medium font-['Poppins'] leading-tight pl-4">  3992 20th Street, 3rd Floor <br />
            <span className="">Tiranë, CA 9411</span></div>
          <div className="flex items-center lg:ml-14 ml-6  mb-10">
            <p className="  text-center text-slate-400 text-l font-semibold font-['Poppins'] leading-10 ml-4 ">T.</p>
            <FiArrowRight className="ml-2 text-blue-500 text-2xl" />
            <p className=" text-center text-slate-400 text-l font-semibold font-['Poppins'] ml-5 leading-10">(415) 223-2121</p>
          </div>
        </div>

      </div>







    </div>
  )
}
