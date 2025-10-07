import React, { useState } from "react";
import { RevealOnScroll } from "../RevealOnScorll";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error on change
  };

  // Validate form
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const formspreeEndpoint = "https://formspree.io/f/xnngbnvn";

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 4000); // hide popup after 4s
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 bg-black/90 text-white relative"
    >
      <RevealOnScroll>
        <div className="px-6 sm:px-10 w-full max-w-3xl">
          {/* Section Title */}
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-red-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`w-full bg-white/5 border rounded-lg px-4 py-3 text-white placeholder-gray-400 transition 
                  focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 focus:bg-red-500/10
                  ${errors.name ? "border-red-500" : "border-white/20"}`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className={`w-full bg-white/5 border rounded-lg px-4 py-3 text-white placeholder-gray-400 transition 
                  focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 focus:bg-red-500/10
                  ${errors.email ? "border-red-500" : "border-white/20"}`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Your Message"
                className={`w-full bg-white/5 border rounded-lg px-4 py-3 text-white placeholder-gray-400 transition 
                  focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 focus:bg-red-500/10 resize-none
                  ${errors.message ? "border-red-500" : "border-white/20"}`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
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

      {/* Fullscreen Red Popup Alert with Blur */}
      {submitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-red-600 text-white px-8 py-6 rounded-2xl shadow-2xl flex flex-col items-center animate-fade-in-up max-w-md mx-4 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2l4-4m1-6a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-xl font-semibold mb-2">
              Thanks for reaching out to Benjamin!
            </h3>
            <p className="text-sm">
              Your message has been sent successfully. Benjamin will get back
              to you soon.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
