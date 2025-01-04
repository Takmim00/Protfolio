import { FaGithub, FaHtml5 } from "react-icons/fa";
import {
  RiFirebaseFill,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiCss3, SiMongodb } from "react-icons/si";

import { motion } from "framer-motion";
import { TbBrandJavascript } from "react-icons/tb";

const Skill = () => {
  const iconsVariation = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });
  return (
    <div className="pt-20 py-6 bg-black w-full">
      <h1 className="text-center lg:text-7xl text-4xl font-abc font-extrabold text-white">
        My SKILL
      </h1>

      <div className="lg:px-0 px-5 pb-24" id="tech">
        <motion.h2 className="my-20 text-center text-4xl"></motion.h2>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap justify-center items-center gap-4"
        >
          {/* HTML Icon */}
          <motion.div
            variants={iconsVariation(1.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-slate-700 p-4"
          >
            <FaHtml5 className="text-5xl md:text-7xl text-orange-500" />
          </motion.div>

          {/* CSS Icon */}
          <motion.div
            variants={iconsVariation(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-slate-700 p-4"
          >
            <SiCss3 className="text-5xl md:text-7xl text-blue-500" />
          </motion.div>

          {/* Tailwind CSS Icon */}
          <motion.div
            variants={iconsVariation(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-slate-700 p-4"
          >
            <RiTailwindCssFill className="text-5xl md:text-7xl text-cyan-500" />
          </motion.div>

          {/* JavaScript Icon */}
          <motion.div
            variants={iconsVariation(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-slate-700 p-4"
          >
            <TbBrandJavascript className="text-5xl md:text-7xl text-yellow-400" />
          </motion.div>

          {/* React Icon */}
          <motion.div
            variants={iconsVariation(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-slate-700 p-4"
          >
            <RiReactjsLine className="text-5xl md:text-7xl text-cyan-400" />
          </motion.div>

          {/* MongoDB Icon */}
          <motion.div
            variants={iconsVariation(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-slate-700 p-4"
          >
            <SiMongodb className="text-5xl md:text-7xl text-green-500" />
          </motion.div>

          {/* Firebase Icon */}
          <motion.div
            variants={iconsVariation(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-slate-700 p-4"
          >
            <RiFirebaseFill className="text-5xl md:text-7xl text-yellow-500" />
          </motion.div>

          {/* GitHub Icon */}
          <motion.div
            variants={iconsVariation(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-slate-700 p-4"
          >
            <FaGithub className="text-5xl md:text-7xl text-gray-500" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skill;
