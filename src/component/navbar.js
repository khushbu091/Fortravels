import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import flag from '../image/flag.png'; // Replace with your flag image

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm font-inter">
      <div className="max-w-[1440px] h-[80px] mx-auto flex items-center justify-between px-4 py-3">
        {/* Left */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <span className="text-3xl font-semibold text-gray-800">Travelling</span>

          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-5 text-[16px] font-medium text-gray-800">
            <div className="relative">
              <span className="hover:text-blue-600 cursor-pointer">Flight + Hotel</span>
              <span className="absolute -top-3 -right-3 text-white text-[10px] bg-red-500 px-1 rounded-sm">Bundle and save!</span>
            </div>
            <span className="hover:text-blue-600 cursor-pointer">Hotels & Homes</span>
            <div className="relative flex items-center space-x-1">
              <span className="hover:text-blue-600 cursor-pointer">Transport</span>
              <MdKeyboardArrowDown />
              <span className="absolute -top-3 -right-4 text-white text-[10px] bg-red-500 px-1 rounded-sm">New!</span>
            </div>
            <span className="hover:text-blue-600 cursor-pointer">Activities</span>
            <span className="hover:text-blue-600 cursor-pointer">Coupons & Deals</span>
            <span className="text-xl">•••</span>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center space-x-3 text-sm font-medium">
          <div className="flex items-center space-x-1">
            <img src={flag} alt="UK" className="w-10 h-7 rounded-sm" />
            <span className="text-[16px]" >Rs.</span>
          </div>
          <div>
            <Link to="/login" className="text-blue-600 font-semibold hover:underline">
              Sign in
            </Link>
          </div>

          <div>
            <Link to="/login" className="text-[16px] hidden md:block border border-blue-500 text-blue-600 px-4 py-1 rounded-full hover:bg-blue-50">
              Create account
            </Link>
          </div>
          <FaShoppingCart className=" text-[20px]  text-gray-700" />
          <button
            
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <RxCross2 className="text-2xl" /> : <GiHamburgerMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t text-sm px-4 py-3 space-y-3">
          <span className="block">Flight + Hotel</span>
          <span className="block">Hotels & Homes</span>
          <span className="block">Transport</span>
          <span className="block">Activities</span>
          <span className="block">Coupons & Deals</span>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
