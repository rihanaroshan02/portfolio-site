import React, { useState } from "react";
import { Link } from "react-router-dom";
import codegreen from "../assets/codegreen.png";
import pikurslot from "../assets/pikurslot.png";
import kapporet from "../assets/kapporet.png";
import albix from "../assets/albix.png";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black font-sans scroll-smooth">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-6">
        <Link
          to="/"
          className="text-3xl font-extrabold tracking-tight"
          onClick={() => setMenuOpen(false)}
        >
          R .
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-lg font-medium">
          <a href="#work" className="hover:text-gray-600">Work</a>
          <Link to="/pages/about" className="hover:text-gray-600" onClick={() => setMenuOpen(false)}>About</Link>
        </nav>

        {/* Mobile Hamburger */}
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
          <Link to="/pages/about" className="block hover:text-gray-600" onClick={() => setMenuOpen(false)}>About</Link>
        </nav>
      )}

      {/* Hero Section */}
      <section className="px-8 lg:px-20 mt-16">
        <h1 className="text-6xl md:text-9xl font-bold leading-tight">
          UI Designer <br /> And Developer
        </h1>
        <p className="text-lg md:text-xl mt-6 max-w-2xl">
          Hi, I’m Rihana — a <span className="font-medium">UI Designer and Frontend Developer</span>{" "}
          focused on building clean, responsive <span className="font-bold">websites</span> and{" "}
          <span className="font-bold">web apps</span>. With a strong eye for design and a year of hands-on experience, I bring ideas to life through code and creativity.
        </p>
      </section>

      {/* Work Section */}
      <section id="work" className="px-8 lg:px-20 mt-28">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
          <div>
            <h2 className="text-5xl font-bold tracking-tight mb-4">Work</h2>
            <p className="text-lg text-gray-700 max-w-2xl">
              From clean, responsive web apps to intuitive, data-driven dashboards — I design and develop user-friendly digital experiences that bring clarity and efficiency to everyday tasks.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-8 lg:px-20 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[ // Project Cards
            { src: codegreen, title: "Codegreen", desc: "A software testing report generation interface.", link: "/pages/codegreen" },
            { src: pikurslot, title: "Pikurslot", desc: "A clean dashboard UI for booking conference rooms.", link: "/pages/pikurslot" },
            { src: kapporet, title: "Kapporet", desc: "An intuitive e-learning platform for student engagement.", link: "/pages/kapporet" },
            { src: albix, title: "Albix", desc: "A responsive ERP dashboard for business operations.", link: "/pages/albix" },
          ].map((project, index) => (
            <Link to={project.link} key={index} className="flex flex-col cursor-pointer">
              <div className="aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 lg:px-20 pt-16 pb-20">
        <div>
          <div className="border-t border-black mb-10"></div>
          <div className="flex flex-col md:flex-row justify-between gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-600 mb-4">Let’s work together</h2>
              <p className="text-3xl md:text-5xl font-semibold text-black hover:text-gray-500 transition-colors duration-200 w-fit border-b-2 border-transparent hover:border-orange-500">
                <a href="mailto:rihana.karoshan@gmail.com">rihana.karoshan@gmail.com</a>
              </p>
              <p className="text-sm text-gray-600 mt-6">© 2025 Rihana Roshan — Designin' With Purpose.</p>
            </div>

            <div className="flex flex-row flex-wrap gap-8 text-sm md:text-base text-black">
              <div className="min-w-[120px]">
                <h3 className="text-gray-600 font-semibold mb-2">Explore</h3>
                <ul className="space-y-1">
                  <li>
                    <a
                      href="#"
                      className="hover:underline"
                      onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      Home
                    </a>
                  </li>
                  <li><a href="#work" className="hover:underline">Work</a></li>
                  <li><Link to="/pages/about" className="hover:underline">About</Link></li>
                </ul>
              </div>

              <div className="min-w-[120px]">
                <h3 className="text-gray-600 font-semibold mb-2">Socials</h3>
                <ul className="space-y-1">
                  <li>
                    <a href="https://www.linkedin.com/in/rihana-roshan/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/rihanaroshan__/" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
                  </li>
                  <li>
                    <a href="https://open.spotify.com/user/iuiedl0jl9qmrqdcrne2myymj" target="_blank" rel="noopener noreferrer" className="hover:underline">Spotify</a>
                  </li>
                </ul>
              </div>

              <div className="min-w-[120px]">
                <h3 className="text-gray-600 font-semibold mb-2">More</h3>
                <ul className="space-y-1">
                  <li>
                    <a href="/Rihana Roshan Updated Resume-1.pdf" download className="hover:underline">Read.cv</a>
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

export default Home;
