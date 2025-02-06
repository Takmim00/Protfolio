import { BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <a href="#about" className="link link-hover">
          About me
        </a>
        <a href="#contact" className="link link-hover">
          Contact
        </a>
        <a href="#project" className="link link-hover">
          Projects
        </a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.linkedin.com/in/asm-maghferat-takmim89">
            <BsLinkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com/Takmim00">
            <FaGithubAlt className="w-6 h-6" />
          </a>
          <a href="https://www.facebook.com/takmim00">
            <FaFacebookSquare className="w-6 h-6" />
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
