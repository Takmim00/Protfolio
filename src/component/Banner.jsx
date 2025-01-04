import { motion } from "framer-motion";
import {
  FaCloudDownloadAlt,
  FaDiscord,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import img from "../assets/Takmim (2).jpg";

const Banner = () => {
  return (
    <div>
      <div className="flex flex-col items-center lg:flex-row pt-16 pb-5 bg-black text-white">
        {/* Text Section */}
        <motion.div
          className="md:w-1/2  mt-16 lg:mb-[200px] mb-10 font-efg lg:ml-44"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div>
            <br />
            <h2 className="lg:text-5xl text-2xl md:text-4xl  font-bold  mb-5">
              <span className="text-amber-400">
                <Typewriter
                  words={["Frontend Developer"]}
                  loop={100}
                  cursor
                  cursorStyle="_"
                  typeSpeed={100}
                  deleteSpeed={100}
                  delaySpeed={1800}
                />
              </span>
            </h2>
          </div>

          <p className="lg:text-xl text-lg md:text-base py-4 lg:my-3">
            I Make a beautiful Frontend page
          </p>
          <div className="lg:text-xl text-lg md:text-base my-5 lg:my-3 flex gap-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/maghferat-takmim-486411322/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-4xl border-2 border-orange-500  text-amber-600 hover:text-amber-500 hover:bg-gray-700 px-2 py-2 rounded-full bg-white mb-5">
                <FaLinkedin />
              </div>
            </a>

            <a
              href="https://www.instagram.com/takmim_00/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-4xl border-2 border-orange-500  text-amber-600 hover:text-amber-500 hover:bg-gray-700 px-2 py-2 rounded-full bg-white mb-5">
                <FaInstagramSquare />
              </div>
            </a>
            <a
              href="https://github.com/Takmim00"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-4xl border-2 border-orange-500  text-amber-600 hover:text-amber-500 hover:bg-gray-700 px-2 py-2 rounded-full bg-white mb-5">
                <FaGithubSquare className="" />
              </div>
            </a>
            <a
              href="https://discord.com/channels/778521112262344714/778521112262344717"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-4xl border-2 border-orange-500  text-amber-600 hover:text-amber-500 hover:bg-gray-700 px-2 py-2 rounded-full bg-white mb-5">
                <FaDiscord />
              </div>
            </a>
          </div>
          <a download="Resume">
            <button className="btn flex text-center justify-center px-4 space-x-2 rounded-full py-2 bg-orange-500 hover:bg-orange-700  hover:text-white  items-center text-xl text-black">
              <span className="">Download Resume</span>
              <FaCloudDownloadAlt className="" />
            </button>
          </a>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex justify-center items-center lg:w-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img
            src={img}
            alt="Takmim"
            className="lg:h-[500px] h-[250px] w-[250px] lg:w-[500px]  border-4 border-orange-500 rounded-full  "
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
