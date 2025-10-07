import React, { useState, useEffect, useRef } from "react";
import profileImage from "../assets/profile.jpg";

export const LoadingScreen = ({ onComplete }) => {
  const fullText = "Welcome to Humble Tech";
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const indexRef = useRef(0);
  const typingIntervalRef = useRef(null);
  const loadingIntervalRef = useRef(null);

  // Typing animation
  useEffect(() => {
    typingIntervalRef.current = setInterval(() => {
      setText((prev) => {
        if (!isDeleting) {
          if (indexRef.current < fullText.length) {
            indexRef.current += 1;
            return fullText.substring(0, indexRef.current);
          } else {
            setTimeout(() => setIsDeleting(true), 800);
            return fullText;
          }
        } else {
          if (indexRef.current > 0) {
            indexRef.current -= 1;
            return fullText.substring(0, indexRef.current);
          } else {
            setTimeout(() => setIsDeleting(false), 500);
            return "";
          }
        }
      });
    }, isDeleting ? 50 : 90);

    return () => clearInterval(typingIntervalRef.current);
  }, [isDeleting]);

  // Progress
  useEffect(() => {
    loadingIntervalRef.current = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(loadingIntervalRef.current);
          // Show success popup
          setShowSuccess(true);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => onComplete && onComplete(), 1200);
          }, 1200); // show popup for 1.2s before fade out
          return 100;
        }
        return Math.min(p + 0.7, 100);
      });
    }, 30);

    return () => clearInterval(loadingIntervalRef.current);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-[1200ms] ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      style={{ background: "linear-gradient(135deg, #0f172a, #1e293b)" }}
    >
      {/* Avatar */}
      <div className="mb-6 animate-fade-in-up">
        <img
          src={profileImage}
          alt="Profile"
          className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-red-500 shadow-lg object-cover"
        />
      </div>

      {/* Typing Text */}
      <div className="mb-6 text-2xl md:text-4xl font-mono text-white text-center tracking-wide">
        {text}
        <span className="animate-blink ml-1 text-red-400">|</span>
      </div>

      {/* Circular Progress */}
      <div className="relative w-24 h-24 md:w-28 md:h-28 mb-4">
        <svg className="w-full h-full rotate-[-90deg]">
          <circle
            cx="50%"
            cy="50%"
            r="45%"
            stroke={progress < 100 ? "#3b82f6" : "#22c55e"}
            strokeWidth="8"
            fill="none"
            strokeOpacity="0.3"
          />
          <circle
            cx="50%"
            cy="50%"
            r="45%"
            stroke="url(#gradient)"
            strokeWidth="8"
            fill="none"
            strokeDasharray="282.6"
            strokeDashoffset={282.6 - (282.6 * progress) / 100}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="50%" stopColor="#facc15" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-white font-mono font-semibold">
          {Math.round(progress)}%
        </div>
      </div>

      {/* Loading Status */}
      {!showSuccess && (
        <p className="text-gray-300 text-sm tracking-widest">
          Loading your experience...
        </p>
      )}

      {/* Professional Success Popup */}
      {showSuccess && (
        <div className="absolute top-1/2 transform -translate-y-1/2 px-8 py-5 bg-white/20 backdrop-blur-md border border-white/30 shadow-xl rounded-2xl flex flex-col items-center animate-fade-in-up transition-all duration-700">
          <div className="text-4xl text-green-400 mb-2 animate-pulse">✅</div>
          <p className="text-white font-semibold text-lg text-center">
            Loaded Successfully!
          </p>
          <p className="text-gray-300 text-sm mt-1 text-center">
            You can now start build a connection with Benjamin.
          </p>
        </div>
      )}
    </div>
  );
};
