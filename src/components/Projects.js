import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Github, ExternalLink, ArrowLeft, Code } from 'lucide-react';
import AiAssistant from "../assets/images/ai-assistant.png";
import myFlix from "../assets/images/myFlix.png";
import Traffic from "../assets/images/traffic.png";
// import eventManagement from "../assets/images/event-management.jpg";
import ProjectPilot from "../assets/images/project-pilot-ss.png";
import myfinfolio from '../assets/images/MyFinFolio.png'
import eventMap from '../assets/images/event-map.png'
import devVisuals from '../assets/images/dev-visuals.png'


const ProjectsPage = () => {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const projects = [
    {
      id: "AI-powered-advisor",
      title: "Custom AI-powered Advisor for university services",
      description: "A custom AI-powered advisor designed to assist university students, faculty, and staff by providing instant guidance on various university services. This AI solution streamlines access to academic resources, administrative support, campus facilities, and more, offering personalized and efficient assistance.",
      longDescription: "The Custom AI-powered Advisor for University Services is an intelligent virtual assistant designed to enhance the student and faculty experience by providing real-time guidance on a wide range of university-related services. Powered by advanced natural language processing (NLP) and machine learning, this AI assistant helps users navigate academic processes, administrative tasks, campus events, financial aid, library resources, and more.",
      tags: ["Python", "React", "FastAPI", "RAG"],
      imageUrls: [
        AiAssistant,
      ],
      github: "https://github.com/bhimamalbhage/AI-Assistant-for-university",
      // demo: "",
      // stats: {
      //   stars: 145,
      //   forks: 48
      // }
    },
    {
      id: "Eventify",
      title: "Eventify - Find events near you",
      description: "A web app that displays events based on user’s location, integrating multiple event APIs into an interactive map. Implemented dynamic filtering for event sources and categories to enhance personalization. Designed a seamless UI with React and optimized backend data collection with Python.",
      longDescription: "Eventify is a web application designed to help users discover live events happening near them. By integrating multiple event APIs, it fetches real-time event data and visualizes it on an interactive map, making event discovery seamless and engaging. The app features dynamic filtering options, allowing users to customize their event search based on sources, categories, and personal preferences.",
      tags: ["React", "Python", "FastAPI"],
      imageUrls: [
        eventMap,
      ],
      github: "",
      demo: "https://eventify-map.vercel.app/",
      // demo: "",
      // stats: {
      //   stars: 145,
      //   forks: 48
      // }
    },
    {
      id: "dev-visuals",
      title: "Dev Visuals - Visualize Programming Concepts for Interviews",
      description: "An interactive web app that visualizes core programming concepts to help developers learn and revise quickly. Ideal for interview prep, it acts like a visual cheat sheet for key topics.",
      longDescription: "Dev Visuals is a web application built to simplify technical interview preparation by offering interactive and intuitive visualizations of fundamental programming concepts. From data structures to algorithms and system design basics, each topic is presented with easy-to-understand visuals, making complex topics more accessible. Designed for both beginners and experienced developers, it's a handy resource to revise quickly before interviews.",
      tags: ["React", "TailwindCSS"],
      imageUrls: [
        devVisuals,
      ],
      github: "https://github.com/bhimamalbhage/dev-visuals",
      demo: "https://dev-visuals.vercel.app/",
      // stats: {
      //   stars: 145,
      //   forks: 48
      // }
    },    
    {
      id: "my-flix",
      title: "MyFlix - Movie Discovery and Management App",
      description: "MyFlix is a modern movie discovery and management app inspired by Netflix that allows users to explore, track, and manage their favorite films effortlessly. With an intuitive interface and personalized recommendations, MyFlix enhances the movie-watching experience by providing detailed movie information, and watchlist management.",
      longDescription: "MyFlix is an movie discovery and management application designed for cinephiles who want an easy and engaging way to explore and organize their movie preferences. Whether you're searching for the latest blockbusters, classic films, or hidden gems, MyFlix provides a seamless browsing experience with detailed movie descriptions, trailers, ratings, and reviews.",
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      imageUrls: [
        myFlix,
      ],
      github: "https://github.com/bhimamalbhage/myFlix-client",
      demo: "https://myflix-bhima.netlify.app/",
      // stats: {
      //   stars: 132,
      //   forks: 52
      // }
    },
    {
      id: "project-pilot",
      title: "ProjectPilot - Kanban-style responsive project management application",
      description: "ProjectPilot is a powerful and intuitive project management application designed to streamline team collaboration, task tracking, and project planning. With real-time updates, seamless integrations, and a user-friendly interface, ProjectPilot helps teams stay organized and achieve their goals efficiently.",
      longDescription: "ProjectPilot is an advanced project management solution that enables teams to plan, execute, and monitor projects with ease. Designed for businesses, startups, and remote teams, this application offers a comprehensive set of tools to enhance productivity, improve workflow efficiency, and ensure timely project completion.",
      tags: ["React", "Javascript", "Tailwind CSS"],
      imageUrls: [
        ProjectPilot
      ],
      github: "https://github.com/bhimamalbhage/Project-Management-Tool",
      demo: "https://project-pilot-bm.netlify.app/",
      // stats: {
      //   stars: 98,
      //   forks: 36
      // }
    },
    {
      id: "finance-dashboard",
      title: "Finance Dashboard",
      description: "Interactive dashboard for tracking financial metrics with customizable widgets, data visualization and predictive analytics.",
      longDescription: "The Finance Dashboard provides a comprehensive view of financial performance with interactive charts, customizable widgets, and detailed reports. It features real-time data processing, historical trend analysis, and predictive analytics to forecast future performance. Users can track expenses, investments, revenue streams, and key performance indicators. The responsive design ensures a seamless experience across all devices, while secure authentication protects sensitive financial data.",
      tags: ["React", "recharts"],
      imageUrls: [
       myfinfolio
      ],
      github: "https://github.com/bhimamalbhage/myfinfolio",
      demo: "https://myfinfolio.vercel.app/",
      // stats: {
      //   stars: 112,
      //   forks: 42
      // }
    },
    {
      id: "traffic-data-collection",
      title: "Scalable traffic data sensing systems using AI",
      description: "A scalable AI-powered traffic data sensing system leveraging computer vision to analyze real-time traffic patterns, optimize road management, and enhance transportation efficiency. This system provides accurate vehicle detection, congestion monitoring, and predictive analytics for smart city applications.",
      longDescription: "The Scalable Traffic Data Sensing System is an advanced AI-driven solution that utilizes computer vision to collect, process, and analyze real-time traffic data. Designed for smart cities, transportation authorities, and urban planners, this system delivers precise traffic insights to improve road safety, reduce congestion, and optimize traffic flow.",
      tags: ["Computer Vision", "Python", "OpenCV"],
      imageUrls: [
        Traffic
      ],
      github: "https://github.com/bhimamalbhage/Traffic-Data-Collection",
      // demo: "",
      // stats: {
      //   stars: 112,
      //   forks: 42
      // }
    }
  ];

  // Find the currently selected project
  const selectedProject = projectId 
    ? projects.find(project => project.id === projectId) 
    : null;

  useEffect(() => {
    // Reset image index when changing projects
    setCurrentImageIndex(0);
  }, [projectId]);

  // Project Detail Component
  const ProjectDetail = ({ project }) => {
    return (
      <div className="max-w-6xl mx-auto">
        <button 
          className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors mb-8"
          onClick={() => navigate('/projects')}
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to projects</span>
        </button>

        <div className="bg-white bg-opacity-5 rounded-xl p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
          
          <div className="mb-8">
            <div className="relative h-96 rounded-lg overflow-hidden mb-4">
              <img 
                src={project.imageUrls[currentImageIndex]} 
                alt={`${project.title} - Screenshot ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation arrows */}
              {project.imageUrls.length > 1 && (
                <>
                  <button 
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-all"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex((prev) => 
                        prev === 0 ? project.imageUrls.length - 1 : prev - 1
                      );
                    }}
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button 
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-all"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex((prev) => 
                        prev === project.imageUrls.length - 1 ? 0 : prev + 1
                      );
                    }}
                  >
                    <ArrowLeft className="w-5 h-5 transform rotate-180" />
                  </button>
                </>
              )}
            </div>
            
            {/* Thumbnail navigation */}
            {project.imageUrls.length > 1 && (
              <div className="flex justify-center space-x-2">
                {project.imageUrls.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index === currentImageIndex ? 'bg-blue-500' : 'bg-gray-500'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold mb-4">Overview</h2>
              <p className="text-gray-300 mb-6">{project.longDescription}</p>
              
              <h2 className="text-xl font-semibold mb-4">Technologies</h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-white bg-opacity-10 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white bg-opacity-5 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Project Info</h2>
              
              <div className="space-y-6">
                {/* <div>
                  <h3 className="text-sm text-gray-400 mb-2">GitHub Stats</h3>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>{project.stats.stars} stars</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitBranch className="w-4 h-4 text-blue-400" />
                      <span>{project.stats.forks} forks</span>
                    </div>
                  </div>
                </div> */}
                
                <div className="space-y-2">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-4 py-2 bg-white bg-opacity-10 rounded-lg flex items-center justify-center space-x-2 hover:bg-opacity-20 transition-all"
                  >
                    <Github className="w-5 h-5" />
                    <span>View Source Code</span>
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-4 py-2 bg-blue-500 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-600 transition-all"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {/* <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-4 py-2 bg-blue-500 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-600 transition-all"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Projects Grid Component
  const ProjectsGrid = () => {
    return (
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group cursor-pointer bg-white bg-opacity-5 rounded-xl overflow-hidden hover:bg-opacity-10 transition-all duration-300"
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              <div className="relative">
                <img 
                  src={project.imageUrls[0]} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 flex items-end">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-black bg-opacity-50 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-1 bg-black bg-opacity-50 rounded-full text-xs">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-all"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Code className="w-5 h-5" />
                  </a>
                  {project.demo && <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-all"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>}
                  
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                <div className="flex items-center justify-between">
                  {/* <div className="flex items-center space-x-4 text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitBranch className="w-4 h-4 text-blue-400" />
                      <span>{project.stats.forks}</span>
                    </div>
                  </div> */}
                  <button className="text-blue-400 flex items-center space-x-1 hover:text-blue-300 transition-colors">
                    <span>Details</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      {selectedProject ? (
        <ProjectDetail project={selectedProject} />
      ) : (
        <ProjectsGrid />
      )}
    </>
  );
};

export default ProjectsPage;