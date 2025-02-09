import React from "react";
import { Twitter, Github, Linkedin, Bookmark, Download } from "lucide-react";
import animeProfile from "./assets/images/anime-profile.png";
import logo from "./assets/images/anime-profile.ico";
import "./App.css";

const App = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">

      <nav className="navbar flex items-center justify-between mb-16">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-10 h-10 rounded-lg" />
          <span className="text-xl font-semibold">Bhima</span>
        </div>

        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1">✍️ About Me</span>
          <span className="flex items-center gap-1">🛠 projects</span>
        </div>

        <div className="flex items-center gap-4">
          <Twitter className="w-5 h-5" />
          <Github className="w-5 h-5" />
          <div className="w-5 h-5">G</div>
          <div className="text-2xl">𝄢</div>
          <Linkedin className="w-5 h-5" />
          <Bookmark className="w-5 h-5" />
        </div>
      </nav>

      <main className="flex flex-col items-center">
        <div className="mb-8">
          <img src={animeProfile} alt="Profile" className="w-80 h-80" />
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
            <span className="text-red-500">React, Javascript </span>and{" "}
            <span className="text-red-500"> Node.js</span>
          </p>

          <p className="flex items-center gap-2">
            {/* 🎓🧑‍🎓 */}
            🎓 <span className="text-red-500">Masters</span> in Computer Science
            from Troy University
          </p>
        </div>

        <div class="mt-8">
          <button class="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            <span>Download Resume</span>
            <Download />
          </button>
        </div>
      </main>
    </div>
  );
};

export default App;
