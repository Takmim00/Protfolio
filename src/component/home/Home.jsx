
import Banner from '../Banner';
import Skill from '../Skill';
import AboutMe from '../AboutMe';
import Project from '../Project';
import Contact from '../Contact';

const Home = () => {
    return (
        <div>
            <Banner />
            <AboutMe/>
            <Skill/>
            <Project/>
            <Contact/>
        </div>
    );
};

export default Home;