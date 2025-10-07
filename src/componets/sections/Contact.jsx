import React from "react";
import { RevealOnScroll } from "../RevealOnScorll";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 bg-black/90 text-white"
    >
      <RevealOnScroll>
        <div className="px-6 sm:px-10 w-full max-w-3xl">
          {/* Section Title */}
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-red-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <input
                type="text"
                id="name"
                required
                placeholder="Your Name"
                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 transition 
                           focus:outline-none focus:border-red-500 focus:bg-red-500/10 focus:ring-1 focus:ring-red-500"
              />
            </div>

            <div>
              <input
                type="email"
                id="email"
                required
                placeholder="Your Email"
                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 transition 
                           focus:outline-none focus:border-red-500 focus:bg-red-500/10 focus:ring-1 focus:ring-red-500"
              />
            </div>

            <div>
              <textarea
                id="message"
                rows="5"
                required
                placeholder="Your Message"
                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 transition 
                           focus:outline-none focus:border-red-500 focus:bg-red-500/10 focus:ring-1 focus:ring-red-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 relative overflow-hidden hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
