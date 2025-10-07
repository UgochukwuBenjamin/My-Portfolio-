import React from "react";

export const Footer = () => {
  return (
    <footer className="mt-12 md:mt-16 bg-white/10 backdrop-blur-md border-t border-white/20 shadow-inner py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Branding */}
        <div className="flex items-center space-x-2">
          <h1 className="text-xl md:text-2xl font-bold text-white font-mono">
            Humble <span className="text-red-500">Tech</span>
          </h1>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/ugochukwu-benjamin-020755349/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.7v2.2h.1c.65-1.2 2.24-2.45 4.6-2.45 4.9 0 5.8 3.23 5.8 7.4V24h-5v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.73-2.54 3.5V24h-5V8z" />
            </svg>
          </a>

          <a
            href="https://github.com/UgochukwuBenjamin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition-colors duration-300"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.334-1.753-1.334-1.753-1.09-.744.083-.729.083-.729 1.205.085 1.838 1.238 1.838 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.3-5.466-1.334-5.466-5.933 0-1.31.467-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 013-.404c1.02.005 2.045.138 3 .404 2.29-1.552 3.296-1.23 3.296-1.23.656 1.653.245 2.873.12 3.176.77.84 1.236 1.912 1.236 3.222 0 4.61-2.805 5.63-5.475 5.923.43.37.815 1.103.815 2.222 0 1.604-.015 2.896-.015 3.293 0 .32.216.694.825.576C20.565 22.296 24 17.796 24 12.5 24 5.87 18.627.5 12 .5z" />
            </svg>
          </a>
        </div>
      </div>

      <p className="text-gray-300 text-center mt-6 text-sm">
        &copy; {new Date().getFullYear()} Humble Tech. All rights reserved.
      </p>
    </footer>
  );
};
