import React from 'react'

import { useSelector } from 'react-redux';

import { LuUser } from "react-icons/lu";
import { MdOutlineEdit } from "react-icons/md";

import SideBar from './sidebar';


export default function Profile() {

  const user = useSelector((state) => state.user.token);

  return (
   <>
    <div className="lg:flex lg:my-10">
      <SideBar />
      <div className="lg:relative lg-w-auto">
        <div className="hidden sm:block absolute z-10 w-0.5 h-full bg-gray-500 rounded-full border-b"></div>

        <div className='w-full'>

          <div className="hidden sm:block mx-20 text-black text-2xl font-normal font-['Poppins'] leading-normal">Overview</div>

            <div className="w-full bg-white rounded-3xl border border-slate-400 border-opacity-50 flex flex-col sm:flex-row sm:mx-16 my-5 items-center sm:gap-6 p-5">
              <LuUser size={40} className=''/>
              <div className='flex flex-col flex-grow'>
                <h2 className="text-black text-xl font-medium font-['Poppins'] leading-normal">{user.name}, ID: {user.userId}</h2>
              </div>
            
              <div className="w-24 h-10 rounded-3xl border border-zinc-500 justify-center items-center inline-flex my-2 mr-2 hover:bg-gray-200 hover:text-zinc-600 hover:border-zinc-600">
                <button className="text-zinc-500 text-base font-bold font-['Manrope'] leading-normal flex inline-flex justify-center gap-1 items-center ">
                  Edit
                  <MdOutlineEdit className='text-zinc-600'/>
                </button>
            </div>
            </div>

            <div className="w-full bg-white rounded-3xl border border-slate-400 border-opacity-50 flex flex-col sm:flex-row sm:mx-16 my-5 sm:gap-6 p-2">
              <div className='flex-col flex-grow mx-4'>
                <h1 className="text-black text-xl font-normal font-['Poppins'] leading-normal p-2">Personal Information</h1>
                
                <div className="flex flex-wrap mx-2">
                  <div className="mr-8">
                    <h3 className="text-zinc-500 text-sm font-['Poppins'] leading-normal mt-5">First Name</h3>
                    <h2 className="text-black text-lg font-medium font-['Poppins'] leading-normal mt-3">{user.name}</h2>
                  </div>
                </div>
                
                <div className="flex flex-wrap mt-5 mx-2">
                  <div className="mr-8">
                    <h3 className="text-zinc-500 text-sm font-['Poppins'] leading-normal">Email</h3>
                    <h2 className="w-30 text-black text-lg font-medium font-['Poppins'] leading-normal mt-3 mb-2">{user.email}</h2>
                  </div>
                </div>
              </div>

              <div className="w-24 h-10 rounded-3xl border border-zinc-500 justify-center items-center inline-flex my-2 mr-5 hover:bg-gray-200 hover:text-zinc-600 hover:border-zinc-600">
                <button className="text-zinc-500 text-base font-bold font-['Manrope'] leading-normal flex inline-flex justify-center gap-1 items-center ">
                  Edit
                  <MdOutlineEdit className='text-zinc-600'/>
                </button>
              </div>
          </div>


          <div className="w-full bg-white rounded-3xl border border-slate-400 border-opacity-50 flex flex-col sm:flex-row sm:mx-16 my-5 sm:gap-6 p-2">
            <div className='flex-col flex-grow mx-4'>
              <h1 className="text-black text-xl font-normal font-['Poppins'] leading-normal p-4">Address</h1>
              
              <div className="sm:flex sm:flex-wrap mx-5">
                <div className="mr-8">
                  <h3 className="text-zinc-500 text-sm font-['Poppins'] leading-normal mt-5">Country</h3>
                  <h2 className="text-black text-lg font-medium font-['Poppins'] leading-normal mt-3">United States of America</h2>
                </div>
                
                <div className='ml-auto'>
                  <h3 className="text-zinc-500 text-sm font-['Poppins'] leading-normal mt-5">Home Address</h3>
                  <h2 className="text-black text-lg font-medium font-['Poppins'] leading-normal mt-3">618 Broad Street</h2>
                </div>
              </div>
              
              <div className="sm:flex sm:flex-wrap mt-5 mx-5">
                <div className="mr-8">
                  <h3 className="text-zinc-500 text-sm font-['Poppins'] leading-normal">Postal Code</h3>
                  <h2 className="w-30 text-black text-lg font-medium font-['Poppins'] leading-normal mt-3 mb-2">10000</h2>
                </div>
                
                <div className='ml-auto'>
                  <h3 className="text-zinc-500 text-sm font-['Poppins'] leading-normal">City</h3>
                  <h2 className="text-black text-lg font-medium font-['Poppins'] leading-normal mt-3">California, USA</h2>
                </div>
              </div>
            </div>

            <div className="w-24 h-10 rounded-3xl border border-zinc-500 justify-center items-center inline-flex my-2 mr-5 hover:bg-gray-200 hover:text-zinc-600 hover:border-zinc-600">
              <button className="text-zinc-500 text-base font-bold font-['Manrope'] leading-normal flex inline-flex justify-center gap-1 items-center ">
                Edit
                <MdOutlineEdit className='text-zinc-600'/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}
