import React from 'react';

const Navbar = () => {
  return (
    <nav className="p-5 flex justify-between items-center bg-gray-800">
      <h1 className="text-2xl font-bold">Sourav Kumar</h1>
      <div className="space-x-6 flex items-center">
        <a href="#about" className="hover:text-yellow-400">About</a>
        <a href="#projects" className="hover:text-yellow-400">Projects</a>
        <a href="#contact" className="hover:text-yellow-400">Contact</a>
        {/* Download Resume Button */}
        <a
          href="/SouravML.pdf"  // Place Sourav_Resume.pdf inside public folder
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition"
          download
        >
          Download Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
