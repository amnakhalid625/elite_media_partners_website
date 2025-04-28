import React, { useState } from 'react';
import logoImg from '../../assets/images/finalLogo.png';
import { Link } from 'react-router-dom';
import CompanyProfile from '../../pdf/puzzles.pdf';

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
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset transition-colors duration-200"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                // Close icon (X) when menu is open
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger icon when menu is closed
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6 font-semibold">
            <Link to='/' className="text-black border-b-4 border-primary w-16 hover:border-b-4 hover:border-primary transition-all duration-300 hover:scale-105">Home</Link>
            
            <Link to="/about" className="text-gray-700 hover:border-b-4 hover:border-primary transition-all duration-300 hover:scale-105">About Us</Link>
            <a href="#services" className="text-gray-700 hover:border-b-4 hover:border-primary transition-all duration-300 hover:scale-105">Services</a>
            <Link to="/contact" className="text-gray-700 hover:border-b-4 hover:border-primary transition-all duration-300 hover:scale-105">Contact Us</Link>
            
            <a href={CompanyProfile} download="CompanyProfile.pdf">
              <button 
                type="button" 
                className="inline-flex items-center px-4 py-3 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-primary hover:bg-secondary transition-all duration-300 hover:scale-105 transform"
              >
                Company Profile
              </button>
            </a>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden transition-all duration-300 ease-in-out">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-primary transition-colors duration-200"
            >
              Home
            </Link>
            
            <Link 
              to="/about" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              About Us
            </Link>
            
            <a 
              href="#services" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              Services
            </a>
            
            <Link 
  to="/contact" 
  onClick={(e) => {
    e.preventDefault();        // stop normal link behavior
    setIsOpen(false);           // close the menu
    window.open("/contact", "_blank");  // open in a new tab
  }}
  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
>
  Contact Us
</Link>

            
            <div className="px-3 py-2">
              <a 
                href={CompanyProfile} 
                download="CompanyProfile.pdf"
                onClick={() => setIsOpen(false)}
              >
                <button 
                  type="button" 
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-secondary transition-colors duration-200"
                >
                  Company Profile
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;