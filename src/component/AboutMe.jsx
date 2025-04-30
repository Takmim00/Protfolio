import code from "../assets/coding.jpg";

import { motion, useInView } from "framer-motion";

import { useRef } from "react";
import { FiArrowDownRight } from "react-icons/fi";

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  // Skills with proficiency levels
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "Tailwind", level: 90 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 75 },
    { name: "Express", level: 70 },
    { name: "MongoDB", level: 65 },
  ];

  return (
    <section className=" text-white py-16 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-orange-500 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-amber-400 blur-3xl"></div>
      </div>

      {/* Code-like decorative elements */}
      <div className="absolute left-0 top-20 text-orange-500/20 text-6xl font-mono hidden lg:block">
        {"<about>"}
      </div>
      <div className="absolute right-0 bottom-20 text-orange-500/20 text-6xl font-mono hidden lg:block">
        {"</about>"}
      </div>

      <div className="container mx-auto px-4" ref={ref}>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left: Image with animated border */}
          <motion.div
            className="relative w-full max-w-md aspect-square"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-400 via-orange-500 to-amber-400 animate-pulse-slow"></div>

            {/* Rotating border effect */}
            <div className="absolute inset-2 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-600 opacity-80 animate-spin-slow"></div>
            </div>

            <div className="absolute inset-3 rounded-xl overflow-hidden bg-stone-900">
              <div className="w-full h-full relative">
                <img
                  src={code}
                  alt="Developer workspace"
                  className=" object-cover w-full h-full"
                />
                {/* Overlay with code-like elements */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="text-amber-400/80 font-mono text-sm p-4 overflow-hidden">
                    {Array(10)
                      .fill(0)
                      .map((_, i) => (
                        <div key={i} className="my-1 whitespace-nowrap">
                          {`const passion = "coding" + "creativity";`}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content with staggered animations */}
          <motion.div
            className="flex-1 space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Title with animated underline */}
            <div className="relative">
              <motion.h2
                className="text-6xl md:text-7xl font-extrabold tracking-tight"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="block">ABOUT</span>
                <div className="flex items-center gap-4">
                  <span>ME</span>
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.7, type: "spring" }}
                  >
                    <FiArrowDownRight className="text-5xl text-orange-500" />
                  </motion.div>
                </div>
              </motion.h2>

              <motion.div
                className="h-1 w-0 bg-gradient-to-r from-amber-400 to-orange-600 mt-4"
                initial={{ width: 0 }}
                animate={isInView ? { width: "40%" } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </div>

            {/* Description with highlighted keywords */}
            <motion.p
              className="text-gray-300 text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I'm a{" "}
              <span className="text-amber-400 font-medium">
                junior web developer
              </span>{" "}
              passionate about building beautiful and functional websites. I
              specialize in{" "}
              <span className="text-orange-500 font-medium">
                full-stack development
              </span>{" "}
              and have experience with HTML, CSS, Tailwind CSS, JavaScript,
              React JS, Node JS, Express JS, MongoDB, and GitHub. I love{" "}
              <span className="text-amber-400 font-medium">
                solving problems
              </span>{" "}
              and learning new skills. Currently, I'm eager to{" "}
              <span className="text-orange-500 font-medium">collaborate</span>{" "}
              and grow in the web development field.
            </motion.p>

            {/* Skills visualization */}
            <div className="pt-6">
              <motion.h3
                className="text-xl font-bold mb-4 text-amber-400"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                My Skills
              </motion.h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-amber-400 to-orange-600"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 1 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Call to action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="pt-4"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium transition-all bg-transparent rounded-full border-2 border-amber-400 text-amber-400 hover:text-white"
              >
                <span className="absolute inset-0 h-full w-full scale-0 rounded-full bg-gradient-to-r from-amber-400 to-orange-600 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-90"></span>
                <span className="relative flex items-center gap-2">
                  Let's Connect
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
