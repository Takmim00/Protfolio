import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div className="relative bg-white z-10 p-1 rounded-lg transform transition-transform duration-500 group-hover:scale-105">
      {/* Image Section */}
      <div className="overflow-hidden rounded-t-lg bg-gray-200 relative">
        <div className="relative overflow-hidden rounded-xl">
          {/* Image */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-3 right-3"></div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 group-hover:text-amber-400 transition-colors duration-500">
          {project.title}
        </h2>
        {/* Description */}
        <p className="mt-2 text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-500">
          {project.bifDescription}
        </p>
        <div className="mt-4 flex space-x-4">
          <Link to={`/project/${project.id}`}>
            <button className="btn text-black bg-orange-500 hover:text-white">
              View details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
