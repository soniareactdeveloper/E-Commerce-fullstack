import { Link } from "react-router";
import {
  FaUser,
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <section>
      <div className="w-full bg-white px-4 sm:px-6 md:px-10 xl:px-[54px] py-4 flex justify-between items-center">
        {/* logo */}
        <div className="flex items-center gap-2">
          <img className="w-[40px] h-auto" src="./images/logo.png" alt="logo" />
          <span className="font-monsterrat font-bold text-[28px] md:text-[34px] text-black">
            Furniro
          </span>
        </div>

 
        <div className="hidden md:flex justify-between items-center gap-[60px]">
          {/* navlinks */}
          <ul className="flex items-center gap-[40px] lg:gap-[60px]">
            <li>
              <Link
                className="font-poppins font-medium text-[16px] text-black transition-colors duration-300 hover:text-yellow-600"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="font-poppins font-medium text-[16px] text-black transition-colors duration-300 hover:text-yellow-600"
                to="/"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                className="font-poppins font-medium text-[16px] text-black transition-colors duration-300 hover:text-yellow-600"
                to="/"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="font-poppins font-medium text-[16px] text-black transition-colors duration-300 hover:text-yellow-600"
                to="/"
              >
                Contact
              </Link>
            </li>
          </ul>
          {/* icons */}
          <div className="flex items-center gap-[30px]">
            <Link className="text-[20px]" to="/login">
              <FaUser />
            </Link>
            <Link className="text-[20px]" to="#">
              <FaSearch />
            </Link>
            <Link className="text-[20px]" to="/review">
              <FaHeart />
            </Link>
            <Link className="text-[20px]" to="/cart">
              <FaShoppingCart />
            </Link>
          </div>
        </div>

        {/* Hamburger icon */}
        <div
          className="md:hidden text-black text-[26px] cursor-pointer"
          onClick={() => setToggle(true)}
        >
          <FaBars />
        </div>
      </div>

      {/* Sidebar drawer container */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] sm:w-[300px] bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          toggle ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end p-5">
          <button
            onClick={() => setToggle(false)}
            className="text-black text-[26px]"
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        {/* Sidebar navlinks */}
        <ul className="flex flex-col gap-[20px] px-6">
          <li>
            <Link
              onClick={() => setToggle(false)}
              className="font-poppins font-medium text-[18px] text-black block hover:text-yellow-600 transition-colors duration-300"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setToggle(false)}
              className="font-poppins font-medium text-[18px] text-black block hover:text-yellow-600 transition-colors duration-300"
              to="/"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setToggle(false)}
              className="font-poppins font-medium text-[18px] text-black block hover:text-yellow-600 transition-colors duration-300"
              to="/"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setToggle(false)}
              className="font-poppins font-medium text-[18px] text-black block hover:text-yellow-600 transition-colors duration-300"
              to="/"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Sidebar icons */}
        <div className="flex items-center gap-[25px] px-6 mt-8 text-[20px]">
          <Link onClick={() => setToggle(false)} to="/login">
            <FaUser />
          </Link>
          <Link onClick={() => setToggle(false)} to="#">
            <FaSearch />
          </Link>
          <Link onClick={() => setToggle(false)} to="/review">
            <FaHeart />
          </Link>
          <Link onClick={() => setToggle(false)} to="/cart">
            <FaShoppingCart />
          </Link>
        </div>
      </div>

      {/* Overlay behind sidebar */}
      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
        />
      )}
    </section>
  );
};

export default Navbar;
