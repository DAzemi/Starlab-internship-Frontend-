import React, { useState } from "react";
import { LuUser } from "react-icons/lu";
import { CgShoppingBag } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { CiUnlock, CiTrash } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
    <>
      <div className="hidden sm:flex flex-col gap-4 py-6 mx-4">

        <div className="px-14 py-2 rounded-lg justify-center items-center gap-4 inline-flex">
          <div className="relative">
            <LuUser size={20} />
          </div>
          <NavLink to='/profile' className="grow shrink basis-0 text-blue-500 text-base font-medium font-['Poppins']">
            My Profile
          </NavLink>
        </div>

        <div className="flex items-center gap-4 px-14 py-2 rounded-lg">
          <CgShoppingBag size={20} />
          <NavLink to='/profile/orders' className="text-blue-500 text-base font-medium font-['Poppins']">
            Orders
          </NavLink>
        </div>

        <div className="flex items-center gap-4 px-14 py-2 rounded-lg">
          <AiOutlineHeart size={20} />
          <NavLink to='/profile/favorites' className="text-blue-500 text-base font-medium font-['Poppins']">
            Favorites
          </NavLink>
        </div>

        <div className="flex items-center gap-4 px-14 py-2 rounded-lg">
          <CiUnlock size={20} />
          <div className="text-blue-500 text-base font-medium font-['Poppins']">
            Change Password
          </div>
        </div>

            {/* Line */}
        <div className="px-16 rounded-lg justify-center items-center gap-4">
          <div className="relative w-36 h-0.5 bg-gray-500 rounded-full ml-15 border-b" />
        </div>

            {/* Notifications */}
        <div className="flex items-center gap-4 px-14 py-2 rounded-lg">
          <IoIosNotificationsOutline size={20} />
          <div className="text-blue-500 text-base font-medium font-['Poppins']">
            Notifications
          </div>
        </div>

            {/* Delete Account */}
        <div className="flex items-center gap-4 px-14 py-2 rounded-lg">
          <CiTrash size={20} />
          <div className="text-red-500 text-base font-medium font-['Poppins']">
            Delete Account
          </div>
        </div>
      </div>
    
      {/* Hamburger Icon for Small Screens */}
      <div
        className="relative sm:hidden cursor-pointer m-4"
        onClick={toggleBurgerMenu}
      >
        ☰
      </div>

      {/* Burger Menu */}
      {isBurgerMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex flex-col gap-4 py-6 mx-4">
            {/* My Profile */}
            <div className="flex items-center gap-4 px-14 py-2 rounded-lg">
              <LuUser size={20} />
              <div className="text-blue-500 text-base font-medium font-['Poppins']">
                My Profile
              </div>
            </div>

            {/* Orders */}
            <div className="flex items-center gap-4 px-14 py-2 rounded-lg">
              <CgShoppingBag size={20} />
              <div className="text-blue-500 text-base font-medium font-['Poppins']">
                Orders
              </div>
            </div>

            {/* Favorites */}
            <div className="flex items-center gap-4 px-14 py-2 rounded-lg">
              <AiOutlineHeart size={20} />
              <div className="text-blue-500 text-base font-medium font-['Poppins']">
                Favorites
              </div>
            </div>

            {/* Change Password */}
            <div className="flex items-center gap-4 px-14 py-2 rounded-lg">
              <CiUnlock size={20} />
              <div className="text-blue-500 text-base font-medium font-['Poppins']">
                Change Password
              </div>
            </div>

            {/* Line */}
            <div className="px-16 rounded-lg justify-center items-center gap-4">
              <div className="relative w-36 h-0.5 bg-gray-500 rounded-full ml-15 border-b" />
            </div>

            {/* Notifications */}
            <div className="flex items-center gap-4 px-14 py-2 rounded-lg">
              <IoIosNotificationsOutline size={20} />
              <div className="text-blue-500 text-base font-medium font-['Poppins']">
                Notifications
              </div>
            </div>

            {/* Delete Account */}
            <div className="flex items-center gap-4 px-14 py-2 rounded-lg">
              <CiTrash size={20} />
              <div className="text-red-500 text-base font-medium font-['Poppins']">
                Delete Account
              </div>
            </div>

            {/* Close Button */}
            <div
              className="px-14 py-2 rounded-lg justify-center items-center gap-4 inline-flex cursor-pointer"
              onClick={toggleBurgerMenu}
            >
              <span>Close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
