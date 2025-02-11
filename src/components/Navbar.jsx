// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-800 via-purple-1000 to-pink-800 text-white shadow-lg py-4 sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
      <div className="text-2xl font-bold">My Portal</div>
      <ul className="flex space-x-6">
        <li><a href="#hero" className="hover:text-gray-200">Home</a></li>
        <li><a href="#experience" className="hover:text-gray-200">Experience</a></li>
        <li><a href="#skills" className="hover:text-gray-200">Skills</a></li>
        <li><a href="#contacts" className="hover:text-gray-200">Contact</a></li>
      </ul>
    </div>
  </nav>  
  );
};

export default Navbar;
