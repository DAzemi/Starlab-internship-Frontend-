import SideBar from './sidebar'

import React, { useState } from 'react';


export default function Profile() {


  return (
    <div className="lg:flex lg:my-10"> 
        <SideBar />
            <div className="lg:relative lg-w-auto ">
                <div className="hidden sm:block absolute z-10 w-0.5 h-full bg-gray-500 rounded-full border-b"></div>

                <div className='w-full mx-20'>
                    <div className="text-black text-2xl font-normal font-['Poppins'] leading-normal">Orders</div>
                        <div className="justify-start items-start gap-8 inline-flex mt-12">
                            <div className="bg-blue-700 rounded-xl justify-center items-center flex p-2">
                                <div className="px-4 justify-center items-center flex">
                                <div className="px-2 justify-center items-center gap-2.5 flex">
                                    <div className="text-white text-base font-extrabold font-['Manrope'] leading-normal">All Orders</div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-stone-50 rounded-lg mt-12">
                                <thead>
                                <tr>
                                    <th className="text-left px-4 py-2">Id</th>
                                    <th className="text-left px-4 py-2">Name</th>
                                    <th className="text-left px-4 py-2">Address</th>

                                    <th className="text-left px-4 py-2">Date</th>
                                    <th className="text-left px-4 py-2">Price</th>
                                    <th className="text-left px-4 py-2">Action</th>
                                </tr>
                                
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="border-t px-4 py-2">1</td>
                                    <td className="border-t px-4 py-2">John Doe</td>
                                    <td className="border-t px-4 py-2">123 Main St, City</td>

                                    <td className="border-t px-4 py-2">1</td>
                                    <td className="border-t px-4 py-2">John Doe</td>
                                    <td className="border-t px-4 py-2">123 Main St, City</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                </div>
        </div>
    </div>
  )
}
