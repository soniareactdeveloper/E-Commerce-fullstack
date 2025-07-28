import React, { useState } from "react";
import {
  FaArrowLeft,
  FaSearch,
  FaMicrophone,
  FaBell,
  FaCommentDots,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const TopNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white shadow-sm sticky top-0 z-50 px-4 py-2">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/images/logo.png" alt="Frox Logo" className="w-8 h-8" />
            <span className="text-xl font-bold font-poppins text-gray-700 hidden sm:inline">
              Frox
            </span>
          </div>

          {/* Hamburger Icon for mobile */}
          <div className="md:hidden">
            <button
              className="p-2 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <FaTimes className="text-gray-600 text-xl" />
              ) : (
                <FaBars className="text-gray-600 text-xl" />
              )}
            </button>
          </div>

          {/* Search & Browse (Desktop Only) */}
          <div className="hidden md:flex items-center gap-6 ml-6">
            <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full w-64">
              <FaSearch className="text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none px-2 text-sm flex-1"
              />
              <FaMicrophone className="text-gray-400" />
            </div>

            <div className="flex items-center text-gray-700 cursor-pointer gap-1">
              <span>Browse</span>
              <IoIosArrowDown />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          <FaCommentDots className="text-[#7E7E8F] text-lg cursor-pointer" />
          <FaBell className="text-[#7E7E8F] text-lg cursor-pointer" />
          <img
            src="/images/Avatar.png"
            alt="User Avatar"
            className="w-9 h-9 rounded-full border-2 border-purple-400"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          {/* Search */}
          <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none px-2 text-sm flex-1"
            />
            <FaMicrophone className="text-gray-400" />
          </div>

          {/* Browse */}
          <div className="flex items-center text-gray-700 cursor-pointer gap-1 px-2">
            <span>Browse</span>
            <IoIosArrowDown />
          </div>
        </div>
      )}
    </div>
  );
};

export default TopNavbar;
