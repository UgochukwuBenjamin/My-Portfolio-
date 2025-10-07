import React from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen, isDarkMode }) => {
  return (
    <>
      {/* Blur overlay behind the menu */}
      <div
        className={`fixed inset-0 z-30 ${
          isDarkMode ? "bg-black/20" : "bg-white/20"
        } backdrop-blur-lg transition-opacity duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile menu panel */}
      <div
        className={`fixed top-16 left-0 w-full z-40 flex flex-col items-center space-y-6 py-8 rounded-b-2xl shadow-2xl transition-all duration-500 ease-in-out ${
          menuOpen
            ? "opacity-100 max-h-[300px] pointer-events-auto"
            : "opacity-0 max-h-0 pointer-events-none"
        }`}
        style={{
          backdropFilter: "blur(30px)",        // stronger blur
          WebkitBackdropFilter: "blur(30px)",  // for Safari
          background: isDarkMode
            ? "linear-gradient(rgba(10,10,10,0.7), rgba(10,10,10,0.5))"
            : "linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.5))", // gradient for depth
          boxShadow: isDarkMode
            ? "0 8px 32px rgba(0,0,0,0.3)"
            : "0 8px 32px rgba(0,0,0,0.1)", // subtle shadow
        }}
      >
        {["Home", "About", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className={`text-lg font-mono transition-colors duration-300 ${
              isDarkMode ? "text-white hover:text-red-400" : "text-black hover:text-red-500"
            }`}
          >
            {item}
          </a>
        ))}
      </div>
    </>
  );
};
