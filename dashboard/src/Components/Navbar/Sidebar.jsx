import React, { useState } from "react";
import { NavLink } from "react-router";
import Lottie from "lottie-react";
import animationData from "../../assets/shop.json";

import {
  FaThLarge,
  FaBoxOpen,
  FaMoneyBill,
  FaExchangeAlt,
  FaUsers,
  FaPlus,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";

const categories = [
  { name: "Laptops", color: "bg-yellow-400" },
  { name: "Mobile phones", color: "bg-orange-400" },
  { name: "Desktops", color: "bg-red-400" },
  { name: "Accessories", color: "bg-pink-400" },
  { name: "Portable storage", color: "bg-purple-400" },
  { name: "Networking", color: "bg-cyan-400" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClassName = (isActive) => {
    let classes = "flex items-center gap-3 px-4 py-2 rounded-lg transition";
    if (isActive) {
      classes += " bg-purple-500 text-white font-semibold";
    } else {
      classes += " text-gray-600 hover:bg-purple-100";
    }
    return classes;
  };

  return (
    <>
      {/* Toggle arrow button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          fixed top-20 left-0 z-50 p-2 rounded-r-md bg-purple-500 text-white
          focus:outline-none
          md:hidden
          flex items-center justify-center
          h-12 w-6
          `}
        aria-label="Toggle sidebar"
      >
        {isOpen ? <FaChevronLeft size={20} /> : <FaChevronRight size={20} />}
      </button>

      {/* Sidebar */}
      <div
        className={`
          fixed top-16 left-0 h-[calc(100vh-4rem)] bg-white shadow-lg
          transform transition-transform duration-300
          w-64 p-4 flex flex-col justify-between
          z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:h-auto md:w-64
        `}
      >
        {/* Navigation Links */}
        <div className="space-y-2 overflow-y-auto flex-1">
          <NavLink
            to="/"
            className={({ isActive }) => handleClassName(isActive)}
          >
            <FaThLarge />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) => handleClassName(isActive)}
          >
            <FaBoxOpen />
            <span>Products</span>
          </NavLink>

          <NavLink
            to="/orders"
            className={({ isActive }) => handleClassName(isActive)}
          >
            <FaMoneyBill />
            <span>Orders</span>
          </NavLink>

          <NavLink
            to="/payments"
            className={({ isActive }) => handleClassName(isActive)}
          >
            <FaExchangeAlt />
            <span>Payments</span>
          </NavLink>

          <NavLink
            to="/transactions"
            className={({ isActive }) => handleClassName(isActive)}
          >
            <FaExchangeAlt />
            <span>Transactions</span>
          </NavLink>

          <NavLink
            to="/clients"
            className={({ isActive }) => handleClassName(isActive)}
          >
            <FaUsers />
            <span>Clients</span>
          </NavLink>

          {/* Categories */}
          <div className="mt-6 flex flex-col">
            <h2 className="text-sm text-gray-500 font-semibold mb-3">
              Categories
            </h2>

            <div className="space-y-2 mb-4">
              {categories.map((cat, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-gray-700 pl-1"
                >
                  <span className={`w-2 h-2 rounded-full ${cat.color}`}></span>
                  <span>{cat.name}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm text-purple-500 cursor-pointer hover:underline">
              <FaPlus />
              <span>Add category</span>
            </div>

            {/* Lottie Animation */}
            {/* Upgrade to Pro Banner */}
            <div className="mt-6 p-4 rounded-lg bg-gray-100 text-center shadow-sm">
              <Lottie
                animationData={animationData} 
                loop={true}
                autoplay={true}
                style={{ height: 120, margin: "0 auto" }}
              />
              <p className="text-sm mt-2 text-gray-700">
                Unlock more information now by{" "}
                <span className="font-semibold">Upgrade to PRO</span>
              </p>
              <button className="mt-3 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white text-sm font-semibold rounded-md transition">
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for small screens when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Sidebar;
