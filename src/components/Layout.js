import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import logo from "../assets/images/anime-profile.ico";
import logo from "../assets/images/profile2.ico";

const Layout = ({ children }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="navbar flex items-center justify-between mb-16">
        <div className="flex items-center gap-2">

        <Link to="/"> <img src={logo} alt="logo" className="w-10 h-10 rounded-lg" /></Link>
        <Link to="/"><span className="text-xl font-semibold">Bhima</span> </Link>
        
        </div>

        <div className="flex items-center gap-6">
            {/* 🏠 📝 📞 📜📄*/}
          <Link to="/" className="hover:text-gray-600">🏠 Home</Link>
          <Link to="/projects" className="hover:text-gray-600">🛠 Projects</Link>
          <Link to="/about" className="hover:text-gray-600">📝 About Me</Link>
          {/* <Link to="/contact" className="hover:text-gray-600">📞 Contact</Link> */}
          <Link to="https://drive.google.com/file/d/1sm-dftwm0GISAxfYPvRIsK8F9CS_CyRr/view?usp=sharing" target="_blank" className="hover:text-gray-600">📄 Resume</Link>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/bhimamalbhage" target="_blank" rel="noreferrer">           
          <FontAwesomeIcon icon={faGithub} className="w-5 h-5"/></a>
          <a href="https://www.linkedin.com/in/bmalbhage" target="_blank" rel="noreferrer">           
          <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5"/></a>
          <a href="mailto:bhimamalbhage1008@gmail.com">       
          <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5"/></a>
        </div>
      </nav>

      <div>{children}</div>
    </div>
  );
};

export default Layout;