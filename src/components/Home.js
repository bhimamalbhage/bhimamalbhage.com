import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
// import animeProfile from "../assets/images/anime-profile.png";
// import profile1 from "../assets/images/profile1.png";
import profile3 from "../assets/images/profile3.jpg";

const Home = () => {
  return (
          <main className="flex flex-col items-center">
        <div className="mb-8">
          {/* <img src={profile1} alt="Profile" className="w-100 h-80" style={{borderRadius:'10px'}} /> */}
          <img src={profile3} alt="Profile" className="w-100 h-80" style={{borderRadius:'10px'}} />
        </div>

        <h1 className="text-4xl font-bold mb-8 flex items-center gap-2">
          Hey, I'm Bhima!
          {/* <span className="text-3xl">🚀</span> */}
          <span className="text-3xl">🏄‍♂️</span>
          {/* 🏄‍♂️  👽 🥷 👨‍💻 */}
        </h1>

        <div className="space-y-4 text-lg">
          <p className="flex items-center gap-2">
            👨‍💻 Full Stack Developer with{" "}
            <span className="text-red-500">3+ years </span> of experience
          </p>

          <p className="flex items-center gap-2">
            🧠 Specialised in{" "}
            <span className="text-red-500">React, Javascript, Python </span>and{" "}
            <span className="text-red-500"> Node.js</span>
          </p>

          <p className="flex items-center gap-2">
            {/* 🎓🧑‍🎓 */}
            🎓 <span className="text-red-500">Masters</span> in Computer Science
            from Troy University
          </p>
        </div>

        <div class="mt-8">
          <a href="https://drive.google.com/file/d/1sm-dftwm0GISAxfYPvRIsK8F9CS_CyRr/view?usp=sharing" className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          target="_blank" rel="noopener noreferrer">
            <span>Download Resume</span>
            {/* <Download /> */}
            {/* <FontAwesomeIcon icon="fa-solid fa-download" /> */}
            <FontAwesomeIcon icon={faDownload}/>
          </a>
        </div>
      </main>
  );
};

export default Home;
