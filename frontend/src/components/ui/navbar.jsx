import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    setIsOpen(false); // Close the menu if it's open
    navigate(path);
  };

  const toggleProfileDropdown = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <nav className="bg-gray-900 text-white px-4 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer" onClick={() => handleNavigation("/")}>
          OmniMart
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>

        {/* Links */}
        <div className={`flex-col md:flex-row md:flex md:items-center ${isOpen ? 'flex' : 'hidden'} md:space-x-6`}>
          <span
            onClick={() => handleNavigation("/home")}
            className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-400 hover:text-white cursor-pointer"
          >
            Home
          </span>
          <span
            onClick={() => handleNavigation("/location")}
            className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-400 hover:text-white cursor-pointer"
          >
            Store Locator
          </span>
          <span
            onClick={() => handleNavigation("/products")}
            className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-400 hover:text-white cursor-pointer"
          >
            Products
          </span>
          <span
            onClick={() => handleNavigation("/contact")}
            className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-400 hover:text-white cursor-pointer"
          >
            Contact
          </span>
        </div>

        {/* Profile Icon */}
        <div className="relative">
          <FaUserCircle
            className="w-8 h-8 cursor-pointer text-gray-400 hover:text-white"
            onClick={toggleProfileDropdown}
          />
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 text-white rounded-lg shadow-lg z-10">
              <span
                onClick={() => handleNavigation("/dashboard")}
                className="block px-4 py-2 text-sm hover:bg-gray-700 cursor-pointer"
              >
                Dashboard
              </span>
              <span
                onClick={() => handleNavigation("/profile")}
                className="block px-4 py-2 text-sm hover:bg-gray-700 cursor-pointer"
              >
                Profile
              </span>
              <span
                onClick={() => handleNavigation("/settings")}
                className="block px-4 py-2 text-sm hover:bg-gray-700 cursor-pointer"
              >
                Settings
              </span>
              <span
                onClick={() => handleNavigation("/logout")}
                className="block px-4 py-2 text-sm hover:bg-gray-700 cursor-pointer"
              >
                Logout
              </span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
