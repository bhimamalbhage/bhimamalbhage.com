import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Linkedin, Home, Briefcase, User, Code } from 'lucide-react';

const Layout = ({ children }) => {
  const location = useLocation();
  
  // Function to check if a path is active
  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Navigation Sidebar */}
      <nav className="fixed left-0 top-0 h-screen w-20 md:w-64 bg-black bg-opacity-20 backdrop-blur-sm z-50">
        <div className="flex flex-col items-center md:items-start p-6 space-y-8">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
              <span className="text-xl font-bold">B</span>
            </div>
            <span className="hidden md:block text-xl font-bold">Bhima</span>
          </Link>
          
          <div className="w-full space-y-4">
            <Link 
              to="/" 
              className={`w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all ${isActive('/') ? 'bg-white bg-opacity-10' : ''}`}
            >
              <Home className="w-5 h-5 mx-auto md:mx-0" />
              <span className="hidden md:block">Home</span>
            </Link>
            <Link 
              to="/projects" 
              className={`w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all ${isActive('/projects') ? 'bg-white bg-opacity-10' : ''}`}
            >
              <Briefcase className="w-5 h-5 mx-auto md:mx-0" />
              <span className="hidden md:block">Projects</span>
            </Link>
            <Link 
              to="/about" 
              className={`w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all ${isActive('/about') ? 'bg-white bg-opacity-10' : ''}`}
            >
              <User className="w-5 h-5 mx-auto md:mx-0" />
              <span className="hidden md:block">About Me</span>
            </Link>
            <Link 
              to="/skills" 
              className={`w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all ${isActive('/skills') ? 'bg-white bg-opacity-10' : ''}`}
            >
              <Code className="w-5 h-5 mx-auto md:mx-0" />
              <span className="hidden md:block">Skills</span>
            </Link>
            {/* <Link 
              to="/contact" 
              className={`w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all ${isActive('/contact') ? 'bg-white bg-opacity-10' : ''}`}
            >
              <MessageSquare className="w-5 h-5 mx-auto md:mx-0" />
              <span className="hidden md:block">Contact</span>
            </Link> */}
          </div>

          <div className="mt-auto w-full space-y-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all">
              <Github className="w-5 h-5 mx-auto md:mx-0" />
              <span className="hidden md:block">GitHub</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all">
              <Linkedin className="w-5 h-5 mx-auto md:mx-0" />
              <span className="hidden md:block">LinkedIn</span>
            </a>
            {/* <a href="mailto:bhimamalbhage1008@gmail.com" className="w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all">
              <Mail className="w-5 h-5 mx-auto md:mx-0" />
              <span className="hidden md:block">Email</span>
            </a> */}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="ml-20 md:ml-64 p-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;