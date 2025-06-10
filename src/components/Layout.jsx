// src/components/Layout.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black font-sans scroll-smooth">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-6">
        <a href="#" className="text-3xl font-extrabold tracking-tight">R .</a>
        <nav className="hidden md:flex space-x-8 text-lg font-medium">
          <a href="/#work" className="hover:text-gray-600">Work</a>
          <Link to="/about" className="block hover:text-gray-600" onClick={() => setMenuOpen(false)}>About</Link>
        </nav>
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
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </header>

      {menuOpen && (
        <nav className="md:hidden px-8 pb-6 space-y-4 text-lg font-medium">
          <a href="/#work" className="block hover:text-gray-600" onClick={() => setMenuOpen(false)}>Work</a>
          <Link to="/about" className="block hover:text-gray-600" onClick={() => setMenuOpen(false)}>About</Link>
        </nav>
      )}

      {/* Page content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="px-8 lg:px-20 pt-16 pb-20 mt-10">
        <div>
          <div className="border-t border-black mb-10"></div>
          <div className="flex flex-col md:flex-row justify-between gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-600 mb-4">
                Let’s work together
              </h2>
              <p className="text-3xl md:text-5xl font-semibold text-black hover:text-gray-500 transition-colors duration-200 w-fit border-b-2 border-transparent hover:border-orange-500">
                <a href="mailto:rihana.karoshan@gmail.com">rihana.karoshan@gmail.com</a>
              </p>
              <p className="text-sm text-gray-600 mt-6">
                © 2025 Rihana Roshan — Designin' With Purpose.
              </p>
            </div>

            <div className="flex flex-row flex-wrap gap-8 text-sm md:text-base text-black">
              <div className="min-w-[120px]">
                <h3 className="text-gray-600 font-semibold mb-2">Explore</h3>
                <ul className="space-y-1">
                  <li><a href="/" className="hover:underline">Home</a></li>
                  <li><a href="/#work" className="hover:underline">Work</a></li>
                  <li><Link to="/about" className="hover:underline">About</Link></li>
                </ul>
              </div>

              <div className="min-w-[120px]">
                <h3 className="text-gray-600 font-semibold mb-2">Socials</h3>
                <ul className="space-y-1">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/rihana-roshan/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/rihanaroshan__/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://open.spotify.com/user/iuiedl0jl9qmrqdcrne2myymj"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Spotify
                    </a>
                  </li>
                </ul>
              </div>

              <div className="min-w-[120px]">
                <h3 className="text-gray-600 font-semibold mb-2">More</h3>
                <ul className="space-y-1">
                  <li>
                    <a href="/Rihana Roshan Updated Resume-1.pdf" download className="hover:underline">
                      Read.cv
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
