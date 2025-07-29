import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-black font-poppins p-5 sm:px-8 pt-5">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* © Text */}
        <p className="text-sm text-center sm:text-left">
          © 2025 <span className="font-semibold">Frox Dashboard</span>. All rights reserved.
        </p>

        {/* Links */}
        <nav className="flex flex-wrap gap-4 text-sm justify-center sm:justify-end">
          <Link to="/" className="hover:text-blue-500 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-500 transition">About</Link>
          <Link to="/contact" className="hover:text-blue-500 transition">Contact</Link>
          <Link to="/privacy" className="hover:text-blue-500 transition">Privacy</Link>
          <Link to="/terms" className="hover:text-blue-500 transition">Terms</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
