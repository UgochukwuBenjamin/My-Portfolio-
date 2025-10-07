import React, { useEffect, useRef } from "react";
import bgimage from "../../assets/bgimage.webp";
import profile from "../../assets/profile.jpg";
import { RevealOnScroll } from "../RevealOnScorll";

export const Home = () => {
  const sectionRef = useRef(null);
  const profileRef = useRef(null);
  const nameRef = useRef(null);
  const paraRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const targets = [
      { ref: profileRef, cls: "animate-fade-in" },
      { ref: nameRef, cls: "animate-slide-up" },
      { ref: paraRef, cls: "animate-fade-in-delay" },
      { ref: buttonsRef, cls: "animate-fade-in-delay2" },
    ];

    const playAnimations = () => {
      targets.forEach(({ ref, cls }) => {
        const el = ref.current;
        if (!el) return;
        el.classList.remove(cls, "opacity-0");
        void el.offsetWidth; // force reflow
        el.classList.add(cls);
      });
    };

    const resetAnimations = () => {
      targets.forEach(({ ref, cls }) => {
        const el = ref.current;
        if (!el) return;
        el.classList.remove(cls);
        el.classList.add("opacity-0");
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            playAnimations();
          } else {
            resetAnimations();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex justify-center items-center text-white overflow-hidden"
    >
      {/* Fullscreen Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center brightness-50 animate-slow-zoom"
        style={{ backgroundImage: `url(${bgimage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <RevealOnScroll>
        {/* Content */}
        <div className="relative z-10 text-center px-4 flex flex-col items-center">
          <img
            ref={profileRef}
            src={profile}
            alt="Ugochukwu Benjamin"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-red-600 shadow-lg mb-6 transition-transform duration-300 opacity-0"
          />

          <h1
            ref={nameRef}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-red-600 bg-clip-text text-transparent leading-tight opacity-0"
          >
            Hello, I'm <span className="text-red-500">Ugochukwu Benjamin</span>
          </h1>

          <p
            ref={paraRef}
            className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200 leading-relaxed opacity-0"
          >
            I'm a passionate Full-Stack Developer specializing in creating dynamic
            and responsive web applications. With a strong foundation in both
            front-end and back-end technologies, I strive to build seamless user
            experiences and robust server-side solutions. Let's build something
            amazing together!
          </p>

          <div ref={buttonsRef} className="mt-8 flex justify-center space-x-6 opacity-0">
            <a
              href="#projects"
              className="bg-red-600 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,0,0,0.4)] cursor-pointer"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-red-500/70 text-red-400 py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-red-500/10 hover:shadow-[0_0_15px_rgba(255,0,0,0.3)] cursor-pointer"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
