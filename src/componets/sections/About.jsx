import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code, Laptop } from "lucide-react";
import { RevealOnScroll } from "../RevealOnScorll";


export const About = () => {
  const FrontEndSkill = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Bootstrap",
    "GitHub",
  ];

  const BackEndSkill = ["Node.js", "Python", "MySQL", "Django"];

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center text-white py-20 bg-black/90"
    >
      <RevealOnScroll>
      <div className="max-w-5xl mx-auto text-center px-4">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-red-600 bg-clip-text text-transparent text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          About Me
        </motion.h2>

        {/* About Card */}
        <motion.div
          className="glass rounded-xl p-8 border border-white/10 bg-white/5 backdrop-blur-md"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <motion.p
            className="text-gray-300 mb-10 leading-relaxed"
            variants={fadeInUp}
          >
            I'm{" "}
            <span className="text-red-500 font-semibold">
              Ugochukwu Benjamin
            </span>
            , a passionate web developer with a knack for creating dynamic and
            responsive web applications. With a strong foundation in both
            front-end and back-end technologies, I enjoy bringing ideas to life
            through code. When I'm not coding, I love exploring new tech trends,
            contributing to open-source projects, or indulging in photography
            and travel.
          </motion.p>

          {/* Skills Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {/* Front-End */}
            <motion.div
              className="rounded-xl p-6 bg-black/30 border border-white/10 hover:-translate-y-1 transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ scale: 1.03, backgroundColor: "rgba(39,39,42,0.7)" }}
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-red-400">
                <Code className="w-5 h-5 text-red-400" /> Front-End
              </h3>
              <div className="flex flex-wrap gap-2">
                {FrontEndSkill.map((tech, i) => (
                  <motion.span
                    key={tech}
                    className="bg-red-500/10 text-red-400 py-1 px-3 rounded-full text-sm cursor-pointer"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(239,68,68,0.2)",
                      boxShadow: "0 0 8px rgba(239,68,68,0.4)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Back-End */}
            <motion.div
              className="rounded-xl p-6 bg-black/30 border border-white/10 hover:-translate-y-1 transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ scale: 1.03, backgroundColor: "rgba(39,39,42,0.7)" }}
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-blue-400">
                <Code className="w-5 h-5 text-blue-400" /> Back-End
              </h3>
              <div className="flex flex-wrap gap-2">
                {BackEndSkill.map((tech) => (
                  <motion.span
                    key={tech}
                    className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm cursor-pointer"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(59,130,246,0.2)",
                      boxShadow: "0 0 8px rgba(59,130,246,0.4)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Education & Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {/* Education */}
            <motion.div
              className="p-6 rounded-xl border border-white/10 bg-black/30 text-left"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-yellow-400">
                <GraduationCap className="w-5 h-5 text-yellow-400" /> Education
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  B.Sc. in Computer Science — University of Lagos (2018–2022)
                </li>
                <li>
                  Full-Stack Web Development — Aptech, Akowonjo (2025–2026)
                </li>
              </ul>
            </motion.div>

            {/* Experience */}
            <motion.div
              className="p-6 rounded-xl border border-white/10 bg-black/30 text-left"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-yellow-400">
                <Briefcase className="w-5 h-5 text-yellow-400" /> Experience
              </h3>
              <p className="text-sm text-gray-400">
                With over 4 years of experience in web development, I have honed
                my skills in creating dynamic and responsive web applications. I
                love building clean UI and scalable backend solutions.
              </p>
            </motion.div>

            {/* Work Experience */}
            <motion.div
              className="p-6 rounded-xl border border-white/10 bg-black/30 text-left"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-400">
                <Laptop className="w-5 h-5 text-green-400" /> Work Experience
              </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold text-white">
                    Web Developer — Aptech Akowonjo
                  </h4>
                  <p className="text-sm text-gray-400">
                    Online Tutor for Front-End Web Development (2024–2025)
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
