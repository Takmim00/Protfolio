import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams(); // Get the project ID from the URL

  // Sample project data structure for reference
  const projectData = [
    {
      id: 1,
      title: "Gadget Heaven",
      description:
        "Develop an e-commerce platform for GadgetHaven, a gadget-buying website. Key functionalities include a shopping cart, a wishlist system, and product filtering. The Context API will manage the cart and wishlist, with optional LocalStorage for data persistence. Additional pages will allow users to view and manage their cart and wishlist, sort items by price, and ensure a smooth user experience.",
      image: "https://i.ibb.co.com/PGKPsqz/gadget-heaven.png",
      liveLink: "https://gadgets-havens.netlify.app/",
      clientRepo: "https://github.com/Takmim00/Gadget-haven",
      overlayText: "Explore More",
    },
    {
      id: 2,
      title: "GameX",

      description:
        'Chill Gamer is a modern and user-friendly game review application designed to provide gamers with a platform to explore, share, and manage game reviews effortlessly. The project focuses on creating a seamless experience with key features such as user authentication to secure personalized profiles and review management to enable users to write, edit, and delete their reviews. The application emphasizes simplicity and functionality, ensuring a "chill" and enjoyable experience for its users. With a clean and responsive UI, the design adapts beautifully to both desktop and mobile devices, making it accessible to a wide audience. Chill Gamer integrates interactive sorting and filtering options, allowing users to browse reviews by game genres, ratings, and release years. By combining robust functionality with a sleek and minimalistic interface, Chill Gamer aims to become the go-to platform for gaming enthusiasts seeking a relaxed and engaging community for sharing their insights and opinions.',
      image: "https://i.ibb.co.com/HgMG44p/gamex.png",
      liveLink: "https://chill-gamer-8a201.web.app/",
      clientRepo: "https://github.com/Takmim00/Chill-gamer-client",
      serverRepo: "https://github.com/Takmim00/Chill-gamer-server",
      overlayText: "Explore More",
    },
    {
      id: 3,
      title: "Car Rental",

      description:
        "The purpose of the car rental website is to provide a seamless and user-friendly platform for individuals and businesses to rent vehicles conveniently. It aims to streamline the car rental process by offering features such as advanced search options, secure user authentication, and an efficient booking system. Users can browse a wide selection of vehicles, check availability, and make bookings online, while the platform ensures secure payment options and responsive design for accessibility across devices. Additionally, the system will include a robust backend for managing car inventory, tracking availability, and maintaining real-time updates. With a focus on user satisfaction, the website will also integrate customer support features to address queries promptly, making the car rental experience reliable and hassle-free.",
      image: "https://i.ibb.co.com/GWY3xp8/car-rental.png",
      liveLink: "https://car-rental-8afd6.web.app/",
      clientRepo: "https://github.com/Takmim00/Car-rental-client",
      serverRepo: "https://github.com/Takmim00/Car-rental-server",
      overlayText: "Explore More",
    },
  ];

  // Find the project by ID
  const project = projectData.find((project) => project.id === parseInt(id));

  return (
    <div className="p-6">
      {project ? (
        <>
          <div className="text-center mb-10">
            <h1 className="text-center lg:text-7xl text-4xl font-abc font-extrabold text-white">
              {project.title}
            </h1>
            <p className="text-2xl font-abc text-amber-400 mt-2">
              <span className="text-sm">MY</span> Project Details
            </p>
          </div>
          <div className=" flex flex-col border-2 border-orange-500 lg:flex-row gap-8 w-8/12 mx-auto bg-white text-black rounded-2xl p-6">
            <div className="px-5 py-5 bg-[#F3F3F3] items-center rounded-xl">
              <img
                src={project.image}
                className="max-w-sm h-full object-cover"
              />
            </div>
            <div className="space-y-4 ">
              <h2 className="text-3xl font-semibold">{project.title}</h2>

              <p>
                <span className="font-bold">Description:</span>{" "}
                {project.description}
              </p>

              <div className="flex gap-6">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded"
                >
                  Live Demo
                </a>
                {project.clientRepo && (
                  <a
                    href={project.clientRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded"
                  >
                    Client Repo
                  </a>
                )}
                {project.serverRepo && (
                  <a
                    href={project.serverRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded"
                  >
                    Server Repo
                  </a>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-600">Project not found.</p>
      )}
    </div>
  );
};

export default ProjectDetails;
