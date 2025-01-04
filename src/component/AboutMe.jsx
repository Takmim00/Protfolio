import { FiArrowDownRight } from "react-icons/fi";
const AboutMe = () => {
  return (
    <section className=" bg-stone-900 text-white py-10  ">
      <div className="w-11/12 mx-auto flex flex-col-reverse justify-evenly md:flex-row items-center ">
        {/* Left: Circular Image */}
        <div className="w-80 h-80 md:w-[450px] md:h-[450px] rounded-full overflow-hidden bg-gradient-to-br from-purple-800 to-black flex items-center justify-center">
          <img
            src="your-image-path.jpg"
            alt="Developer workspace"
            className=" object-cover w-full h-full"
          />
        </div>

        {/* Right: Content */}
        <div className="mt-10 md:mt-0 md:ml-12 mb-6 text-left md:text-left">
          {/* Title */}
          <h2 className="text-6xl md:text-5xl flex flex-col text-left font-extrabold">
            ABOUT
            <span className="flex ">
              
              ME <FiArrowDownRight className="text-5xl text-orange-500" />
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-md">
            Description of the developer's biography and skillset. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Mattis in dui euismod
            sit egestas ac sit. Mollis eu urna mi felis consectetur dapibus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
