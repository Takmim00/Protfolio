"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "./ProjectCard";

const Project = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, threshold: 0.1 });
  const [currentPage, setCurrentPage] = useState(0);

  const projectData = [
    {
      id: 1,
      title: "Study Hive",
      bifDescription:
        "A platform connecting tutors and students for seamless learning experiences.",
      description:
        "Study Hive is a user-friendly platform designed to connect tutors and students. Tutors can apply to offer courses, and students can book these approved courses. The admin can manage user roles, approve or reject courses, and control the platform's functionality. Students can also write, update, and delete notes, as well as view materials provided by tutors for approved sessions.",
      image: "https://i.ibb.co/JbMJ9Vd/Screenshot-2025-02-05-215501.png",
      liveLink: "https://study-hive-9b382.web.app",
      clientRepo: "https://github.com/Takmim00/Study-Hive",
      serverRepo: "https://github.com/Takmim00/study-Hive-Server",
      overlayText: "Explore More",
      category: "Education",
      technology: [
        "React.js",
        "TailwindCSS",
        "Firebase",
        "Stripe",
        "React Query",
        "Axios",
        "React Router",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
    },
    {
      id: 2,
      title: "Chill Gamer",
      bifDescription:
        "A modern platform for gamers to explore and share game reviews.",
      description:
        'Chill Gamer is a modern and user-friendly game review application designed to provide gamers with a platform to explore, share, and manage game reviews effortlessly. The project focuses on creating a seamless experience with key features such as user authentication to secure personalized profiles and review management to enable users to write, edit, and delete their reviews. The application emphasizes simplicity and functionality, ensuring a "chill" and enjoyable experience for its users.',
      image: "https://i.ibb.co/HgMG44p/gamex.png",
      liveLink: "https://chill-gamer-8a201.web.app/",
      clientRepo: "https://github.com/Takmim00/Chill-gamer-client",
      serverRepo: "https://github.com/Takmim00/Chill-gamer-server",
      overlayText: "Explore More",
      category: "Entertainment",
      technology: [
        "React",
        "TailwindCSS",
        "Firebase",
        "Axios",
        "React Router",
        "SweetAlert2",
        "DaisyUI",
        "React Icons",
        "React Toastify",
        "React Tooltip",
      ],
    },
    {
      id: 3,
      title: "Car Rental",
      bifDescription:
        "A seamless platform for renting vehicles with advanced booking features.",
      description:
        "The purpose of the car rental website is to provide a seamless and user-friendly platform for individuals and businesses to rent vehicles conveniently. It aims to streamline the car rental process by offering features such as advanced search options, secure user authentication, and an efficient booking system. Users can browse a wide selection of vehicles, check availability, and make bookings online.",
      image: "https://i.ibb.co/GWY3xp8/car-rental.png",
      liveLink: "https://car-rental-8afd6.web.app/",
      clientRepo: "https://github.com/Takmim00/Car-rental-client",
      serverRepo: "https://github.com/Takmim00/Car-rental-server",
      overlayText: "Explore More",
      category: "Business",
      technology: [
        "React.js",
        "TailwindCSS",
        "Firebase",
        "Axios",
        "React Router",
        "Cloudinary",
        "SweetAlert2",
        "React Hook Form",
        "React Icons",
        "Chart.js",
      ],
    },
    {
      id: 4,
      title: "Smart Med Appointments",
      bifDescription:
        "An AI-powered healthcare platform for appointments, emergency support, and medical assistance.",
      description:
        "Smart Med Appointments is an AI-based healthcare web application designed to make medical services more accessible and efficient. The platform allows patients to book doctor appointments based on specialty and availability, request ambulance support with real-time tracking, donate and request blood, and share reviews about doctors. Integrated with Gemini AI, it also provides intelligent health-related queries and doctor recommendations through conversational AI.",
      image: "https://i.ibb.co.com/jYM0Zrd/smart-med.png",
      liveLink: "https://smart-med-appointments.vercel.app/",
      clientRepo:
        "https://github.com/ahanaf607307/smart-med-appointments-healthcare-nextjs",
      overlayText: "Explore More",
      category: "Healthcare",
      technology: [
        "Next.js",
        "TailwindCSS",
        "Node.js",
        "Express.js",
        "MongoDB (Mongoose)",
        "NextAuth",
        "JWT",
        "Axios",
        "Gemini AI",
      ],
    },
  ];

  const categories = [
    "All",
    ...new Set(projectData.map((project) => project.category)),
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projectData
      : projectData.filter((project) => project.category === activeCategory);

  const projectsPerPage = 4;
  const pageCount = Math.ceil(filteredProjects.length / projectsPerPage);
  const displayedProjects = filteredProjects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  const nextPage = () => {
    if (currentPage < pageCount - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section
      ref={containerRef}
      className="py-24 bg-gradient-to-b from-stone-900 to-black relative overflow-hidden"
      id="projects"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-orange-500/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl"></div>

        {/* Code-like decorative elements */}
        <div className="absolute left-5 top-20 text-orange-500/10 text-7xl font-mono hidden lg:block">
          {"<projects>"}
        </div>
        <div className="absolute right-5 bottom-20 text-orange-500/10 text-7xl font-mono hidden lg:block">
          {"</projects>"}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">
              PROJECTS
            </span>
          </h2>
          <motion.div
            className="h-1 w-0 bg-gradient-to-r from-amber-400 to-orange-600 mx-auto mt-4"
            initial={{ width: 0 }}
            animate={isInView ? { width: "150px" } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          />
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="text-amber-400 font-medium">MY</span> Work
          </motion.p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setCurrentPage(0);
              }}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-amber-400 to-orange-600 text-white font-medium"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="relative">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination Controls */}
          {filteredProjects.length > projectsPerPage && (
            <motion.div
              className="flex justify-center items-center mt-12 gap-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <button
                onClick={prevPage}
                disabled={currentPage === 0}
                className={`p-2 rounded-full ${
                  currentPage === 0
                    ? "bg-gray-800 text-gray-600 cursor-not-allowed"
                    : "bg-gray-800 text-white hover:bg-gray-700"
                }`}
                aria-label="Previous page"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {Array.from({ length: pageCount }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentPage === index
                        ? "bg-gradient-to-r from-amber-400 to-orange-600 w-6"
                        : "bg-gray-700 hover:bg-gray-600"
                    }`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextPage}
                disabled={currentPage === pageCount - 1}
                className={`p-2 rounded-full ${
                  currentPage === pageCount - 1
                    ? "bg-gray-800 text-gray-600 cursor-not-allowed"
                    : "bg-gray-800 text-white hover:bg-gray-700"
                }`}
                aria-label="Next page"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Project;
