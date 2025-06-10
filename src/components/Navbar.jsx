import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center px-8 py-6">
        <Link to="/" className="text-3xl font-extrabold tracking-tight" onClick={() => setMenuOpen(false)}>
  R .
</Link>


        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-lg font-medium">
          <a href="#work" className="hover:text-gray-600">Work</a>
<Link to="/about" className="block hover:text-gray-600" onClick={() => setMenuOpen(false)}>About</Link>
          <a href="#contact" className="hover:text-gray-600">Contact</a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden px-8 pb-6 space-y-4 text-lg font-medium">
          <a href="#work" className="block hover:text-gray-600" onClick={() => setMenuOpen(false)}>Work</a>
          <Link to="/about" className="block hover:text-gray-600" onClick={() => setMenuOpen(false)}>About</Link>

          <a href="#contact" className="block hover:text-gray-600" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      )}
    </>
  );
};

export default Navbar;
