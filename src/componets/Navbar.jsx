import React, { useState } from "react";
import { MobileMenu } from "./MobileMenu";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home"); // 🔴 Track which link is active

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false); // close mobile menu when link clicked
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[rgba(10,10,10,0.85)] backdrop-blur-lg border-b border-white/10 shadow-md transition-all duration-500">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            className="font-mono text-2xl font-bold text-white tracking-wide"
          >
            Humble <span className="text-red-500">Tech</span>
          </a>

          {/* Hamburger / Close icon */}
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-white md:hidden cursor-pointer transition-transform duration-300 hover:scale-110 pr-3"
          >
            {menuOpen ? <span>&times;</span> : <span>&#9776;</span>}
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-10 items-center">
            {["Home", "About","Projects", "Contact"].map((item) => {
              const lower = item.toLowerCase();
              return (
                <a
                  key={item}
                  href={`#${lower}`}
                  onClick={() => handleLinkClick(lower)}
                  className={`font-medium transition-colors duration-300 ${
                    activeLink === lower
                      ? "text-red-500"
                      : "text-white hover:text-red-400"
                  }`}
                >
                  {item}
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
}; 