import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Download, ExternalLink, Briefcase, Search, Mail } from 'lucide-react';
import profile2 from "../assets/images/profile2.jpg";
import AiAssistant from "../assets/images/ai-assistant.png";
import myFlix from "../assets/images/myFlix.png";

const Portfolio = () => {
  const navigate = useNavigate();

  // Sample project data for featured projects on home page
  const featuredProjects = [
    {
      id: "AI-powered-advisor",
      title: "Custom AI-powered Advisor for university services",
      description:
        "A custom AI-powered advisor designed to assist university students, faculty, and staff by providing instant guidance on various university services. This AI solution streamlines access to academic resources, administrative support, campus facilities, and more, offering personalized and efficient assistance.",
      longDescription:
        "The Custom AI-powered Advisor for University Services is an intelligent virtual assistant designed to enhance the student and faculty experience by providing real-time guidance on a wide range of university-related services. Powered by advanced natural language processing (NLP) and machine learning, this AI assistant helps users navigate academic processes, administrative tasks, campus events, financial aid, library resources, and more.",
      tags: ["Python", "React", "FastAPI", "RAG"],
      imageUrl: AiAssistant,
      github: "https://github.com/bhimamalbhage/AI-Assistant-for-university",
    },
    {
      id: "my-flix",
      title: "MyFlix - Movie Discovery and Management App",
      description:
        "MyFlix is a modern movie discovery and management app inspired by Netflix that allows users to explore, track, and manage their favorite films effortlessly. With an intuitive interface and personalized recommendations, MyFlix enhances the movie-watching experience by providing detailed movie information, and watchlist management.",
      longDescription:
        "MyFlix is an movie discovery and management application designed for cinephiles who want an easy and engaging way to explore and organize their movie preferences. Whether you're searching for the latest blockbusters, classic films, or hidden gems, MyFlix provides a seamless browsing experience with detailed movie descriptions, trailers, ratings, and reviews.",
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      imageUrl: myFlix,
      github: "https://github.com/bhimamalbhage/myFlix-client",
      demo: "https://myflix-bhima.netlify.app/",
    },
  ];

  // const handleEmailClick = (e) => {
  //   e.stopPropagation();
  // };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <img
            src={profile2}
            alt="Profile"
            className="relative w-48 h-48 rounded-full object-cover"
          />
        </div>

        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hey, I'm Bhima! <span className="text-5xl">🏄‍♂️</span>
          </h1>
          <div className="space-y-4">
            <p className="text-xl text-gray-300">
              👨‍💻 Full Stack Software Engineer with{" "}
              <span className="text-blue-400">3+ years</span> of experience
            </p>
            <p className="text-lg text-gray-400">
              🎯 Specialized in <span className="text-red-400">React</span>,{" "}
              <span className="text-yellow-400">JavaScript</span>,{" "}
              <span className="text-purple-400">Python</span> and{" "}
              <span className="text-green-400">Node.js</span>
            </p>
            <p className="text-lg text-gray-400">
              🎓 Masters in Computer Science from Troy University
            </p>
          </div>

          <a
            href="https://drive.google.com/file/d/1sm-dftwm0GISAxfYPvRIsK8F9CS_CyRr/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center space-x-2 hover:opacity-90 transition-opacity mx-auto md:mx-0 inline-flex"
          >
            <Download className="w-5 h-5" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>

      {/* Job Status Banner */}
      <div className="mt-8 mb-12 p-6 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm transition-all hover:from-blue-500/30 hover:to-purple-500/30">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <div className="mr-4 p-3 rounded-full bg-white/10 backdrop-blur-sm">
              <Briefcase className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                Ex-Deloitte | Software Engineer
              </h3>
              <p className="text-gray-300">Apr 2021 - Aug 2023</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="mr-4 p-3 rounded-full bg-white/10 backdrop-blur-sm">
              <Search className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                Actively Seeking Opportunities
              </h3>
              <p className="text-gray-300">
                Open to full-time roles in software engineering
              </p>
            </div>
          </div>

          {/* <a 
            href="mailto:bhimamalbhage1008@gmail.com"
            className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg flex items-center space-x-2 transition-all text-white"
          >
            <Mail className="w-5 h-5" />
            <span>Contact Me</span>
          </a> */}
          <div className="relative group">
            <a 
              href={`mailto:bhimamalbhage1008@gmail.com`}
              // onClick={handleEmailClick}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg flex items-center space-x-2 transition-all text-white"
              title={'bhimamalbhage1008@gmail.com'} 
            >
              <Mail className="w-5 h-5" />
              <span>Contact Me</span>
            </a>
            
            {/* Custom tooltip that appears on hover */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-sm rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
              {'bhimamalbhage1008@gmail.com'}
              {/* Arrow pointing down */}
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects Preview */}
      <div className="mt-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <Link
            to="/projects"
            className="text-sm flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>View all projects</span>
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer bg-white bg-opacity-5 rounded-xl overflow-hidden hover:bg-opacity-10 transition-all duration-300"
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              <div className="relative">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-end justify-center">
                  <div className="p-4 text-center">
                    <button className="p-2 bg-blue-500 rounded-full">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-black bg-opacity-30 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;