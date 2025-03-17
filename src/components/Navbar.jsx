
import React from 'react';

const Navbar = () => {
  return (
    <nav className="p-5 flex justify-between items-center bg-gray-800">
      <h1 className="text-2xl font-bold">Sourav Kumar</h1>
      <div className="space-x-6">
        <a href="#about" className="hover:text-yellow-400">About</a>
        <a href="#projects" className="hover:text-yellow-400">Projects</a>
        <a href="#contact" className="hover:text-yellow-400">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
