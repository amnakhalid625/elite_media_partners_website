import React, { useState } from 'react';
import logoImg from '../../assets/images/finalLogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const toggleDropdown = (open) => {
    setIsDropdownOpen(open);
  };

  return (
    <nav className="bg-white border-b shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-26">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src={logoImg} className="h-24" alt="Company Logo" />
          </a>
          
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset  transition-colors duration-200"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6 font-semibold">
            <a href="#" className="text-black border-b-4 border-primary w-16 hover:border-b-4 hover:border-primary transition-all duration-300 hover:scale-105">Home</a>
            
            {/* Services dropdown with hover effect */}
            {/* <div 
              className="relative"
              onMouseEnter={() => toggleDropdown(true)}
              onMouseLeave={() => toggleDropdown(false)}
            >
              <button 
                onClick={() => toggleDropdown(!isDropdownOpen)}
                className="flex items-center text-gray-700 hover:border-b-4 hover:border-primary font-semibold transition-all duration-300 hover:scale-105"
              >
                Services
                <svg 
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                className={`absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 origin-top ${isDropdownOpen ? 'scale-y-100 opacity-100' : 'scale-y-95 opacity-0 pointer-events-none'}`}
              >
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100 hover:text-primary transition-colors duration-200">Insurance</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors duration-200">Accounting</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors duration-200">Tax</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors duration-200">Resourcing</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors duration-200">Consult</a>
                </div>
              </div>
            </div> */}
            
            {/* <a href="#" className="text-gray-700 hover:border-b-4 hover:border-primary transition-all duration-300 hover:scale-105">Insight</a> */}
            <a href="#" className="text-gray-700 hover:border-b-4 hover:border-primary transition-all duration-300 hover:scale-105">About Us</a>
            <a href="#" className="text-gray-700 hover:border-b-4 hover:border-primary transition-all duration-300 hover:scale-105">Services</a>

            <a href="#" className="text-gray-700 hover:border-b-4 hover:border-primary transition-all duration-300 hover:scale-105">Contact Us</a>
            
            {/* Search Box */}
            {/* <div className="relative flex items-center">
              <div className="flex items-center px-3 py-2 border-2 border-gray-300 rounded-md transition-all duration-300 hover:border-primary focus-within:border-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input 
                  type="text" 
                  placeholder="Search Something..." 
                  className="ml-2 outline-none bg-transparent text-gray-600 text-sm w-32 lg:w-40"
                />
              </div>
            </div> */}
            
            {/* CTA Button */}
            <button 
              type="button" 
              className="inline-flex items-center px-4 py-3 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-primary hover:bg-secondary transition-all duration-300 hover:scale-105 transform"
            >
              Company Profile
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden transition-all duration-300 ease-in-out">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-base font-medium text-primary transition-colors duration-200">Home</a>
            {/* <button 
              onClick={() => toggleDropdown(!isDropdownOpen)}
              className="flex items-center w-full px-3 py-2 text-base font-semibold text-gray-700 transition-colors duration-200"
            >
              Services
              <svg 
                className={`ml-1 w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isDropdownOpen && (
              <div className="pl-4 transition-all duration-300 ease-in-out">
                <a href="#" className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-700 transition-colors duration-200">Insurance</a>
                <a href="#" className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-700 transition-colors duration-200">Accounting</a>
                <a href="#" className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-700 transition-colors duration-200">Tax</a>
                <a href="#" className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-700 transition-colors duration-200">Resourcing</a>
                <a href="#" className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-700 transition-colors duration-200">Consult</a>
              </div>
            )} */}
            
            {/* <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200">Insight</a> */}
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200">About Us</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200">Services</a>

            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200">Contact Us</a>
            
            {/* <div className="px-3 py-2">
              <div className="flex items-center px-3 py-2 border-2 border-gray-300 rounded-md transition-colors duration-200 focus-within:border-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input 
                  type="text" 
                  placeholder="Search Something..." 
                  className="ml-2 outline-none bg-transparent text-gray-600 text-sm w-full"
                />
              </div>
            </div> */}
            
            <div className="px-3 py-2">
              <button 
                type="button" 
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-secondary transition-colors duration-200"
              >
                Company Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;