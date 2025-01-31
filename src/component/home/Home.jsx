import AboutMe from "../AboutMe";
import Banner from "../Banner";
import Contact from "../Contact";
import Project from "../Project";
import Skill from "../Skill";

const Home = () => {
  return (
    <div>
      <div id="banner">
        <Banner />
      </div>
      <div id="about">
        <AboutMe />
      </div>
      <div id="skill">
        <Skill />
      </div>
      <div id="project">
        <Project />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
