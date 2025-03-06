import React, { useState } from 'react';
import { Book, Briefcase, User, Code, Coffee, Heart, Map, Music, Film } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('experience');
  
  const experiences = [
    {
      company: "Deloitte",
      role: "Front End Developer",
      period: "Apr 2021 - Aug 2023",
      description: "Worked on developing responsive, high-performance web applications using modern front-end technologies and best practices.",
      highlights: [
        "Led the redesign of a client-facing dashboard resulting in 40% improved user engagement",
        "Optimized application performance by reducing load time by 30%",
        "Collaborated with UX designers to implement responsive interfaces for various devices"
      ],
      techStack: ["React", "TypeScript", "Redux", "Tailwind CSS"]
    },
    {
      company: "Multiliving Technology",
      role: "Full Stack Developer Intern",
      period: "Feb 2021 - Apr 2021",
      description: "Contributed to both front-end and back-end development of various projects, with a focus on building dynamic web applications.",
      highlights: [
        "Developed RESTful APIs for data exchange between client and server",
        "Implemented user authentication and authorization systems",
        "Created responsive UI components following design specifications"
      ],
      techStack: ["Node.js", "Express", "MongoDB", "React"]
    },
    {
      company: "Khairnar Technologies",
      role: "Web Developer Intern",
      period: "Jun 2019 - Aug 2019",
      description: "Gained exposure to various technologies and contributed to internal projects and research.",
      highlights: [
        "Built and maintained company website using modern web technologies",
        "Created interactive data visualizations for internal analytics dashboard",
        "Assisted with code refactoring and documentation"
      ],
      techStack: ["HTML/CSS", "JavaScript", "jQuery", "Bootstrap"]
    }
  ];

  const education = [
    {
      institution: "Troy University",
      degree: "Masters in Computer Science",
      period: "Aug 2023 - Dec 2024",
      description: "Focused on advanced computer science topics such as AI, Machine Learning, and Data Structures.",
      highlights: [
        "Specialized in Machine Learning and AI applications",
        "Completed research project on neural networks for image recognition",
        "Active member of the Computer Science Graduate Association"
      ],
      courses: ["Advanced Algorithms", "Machine Learning", "Distributed Systems", "Computer Vision"]
    },
    {
      institution: "Smt. Kashibai Nawale College Of Engineering",
      degree: "Bachelors in Computer Science",
      period: "2016 - 2020",
      description: "Studied the fundamentals of computer science and software engineering, with hands-on experience in coding and project development.",
      highlights: [
        "Developed a smart attendance system for final year project",
        "Participated in multiple hackathons and coding competitions"
      ],
      courses: ["Data Structures", "Object-Oriented Programming", "Database Management", "Software Engineering"]
    }
  ];

  const personalInfo = {
    interests: [
      { name: "Coding Side Projects", icon: <Code className="w-5 h-5" /> },
      { name: "Coffee Enthusiast", icon: <Coffee className="w-5 h-5" /> },
      { name: "Hiking Adventures", icon: <Map className="w-5 h-5" /> },
      { name: "Music Production", icon: <Music className="w-5 h-5" /> },
      { name: "Film Photography", icon: <Film className="w-5 h-5" /> }
    ],
    funFacts: [
      "I can speak 5 languages",
      // "Can solve a Rubik's cube in under 2 minutes",
      "Amateur coffee roaster with a home setup",
      "Ran a half marathon in 2022",
      "Built a custom mechanical keyboard from scratch"
    ]
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'experience':
        return (
          <div className="space-y-12 py-6">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              
              {/* Experience items */}
              {experiences.map((exp, index) => (
                <div key={index} className="relative mb-12">
                  <div className="flex items-start">
                    {/* Timeline dot */}
                    <div className="absolute left-0 mt-1.5">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="ml-20">
                      <div className="p-6 rounded-xl bg-white bg-opacity-5 backdrop-blur-sm hover:bg-opacity-10 transition-all shadow-xl">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
                          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">{exp.company}</h3>
                          <span className="text-sm text-gray-400 mt-2 md:mt-0">{exp.period}</span>
                        </div>
                        <h4 className="text-lg font-semibold mb-3 text-white">{exp.role}</h4>
                        <p className="text-gray-300 mb-4">{exp.description}</p>
                        
                        <div className="mb-4">
                          <h5 className="text-sm font-medium text-gray-400 mb-2">HIGHLIGHTS</h5>
                          <ul className="space-y-2">
                            {exp.highlights.map((highlight, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-purple-400 mr-2">•</span>
                                <span className="text-gray-300">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="text-sm font-medium text-gray-400 mb-2">TECH STACK</h5>
                          <div className="flex flex-wrap gap-2">
                            {exp.techStack.map((tech, i) => (
                              <span key={i} className="px-3 py-1 rounded-full bg-black bg-opacity-30 text-xs text-blue-300">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        
      case 'education':
        return (
          <div className="space-y-12 py-6">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              
              {/* Education items */}
              {education.map((edu, index) => (
                <div key={index} className="relative mb-12">
                  <div className="flex items-start">
                    {/* Timeline dot */}
                    <div className="absolute left-0 mt-1.5">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                        <Book className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="ml-20">
                      <div className="p-6 rounded-xl bg-white bg-opacity-5 backdrop-blur-sm hover:bg-opacity-10 transition-all shadow-xl">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
                          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">{edu.institution}</h3>
                          <span className="text-sm text-gray-400 mt-2 md:mt-0">{edu.period}</span>
                        </div>
                        <h4 className="text-lg font-semibold mb-3 text-white">{edu.degree}</h4>
                        <p className="text-gray-300 mb-4">{edu.description}</p>
                        
                        <div className="mb-4">
                          <h5 className="text-sm font-medium text-gray-400 mb-2">HIGHLIGHTS</h5>
                          <ul className="space-y-2">
                            {edu.highlights.map((highlight, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-purple-400 mr-2">•</span>
                                <span className="text-gray-300">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="text-sm font-medium text-gray-400 mb-2">NOTABLE COURSES</h5>
                          <div className="flex flex-wrap gap-2">
                            {edu.courses.map((course, i) => (
                              <span key={i} className="px-3 py-1 rounded-full bg-black bg-opacity-30 text-xs text-blue-300">
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        
      case 'personal':
        return (
          <div className="py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Interests */}
              <div className="p-6 rounded-xl bg-white bg-opacity-5 backdrop-blur-sm hover:bg-opacity-10 transition-all shadow-xl">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">Things I Love</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {personalInfo.interests.map((interest, index) => (
                    <div key={index} className="flex items-center p-3 rounded-lg bg-black bg-opacity-30 hover:bg-opacity-40 transition-all">
                      <div className="mr-3 text-purple-400">
                        {interest.icon}
                      </div>
                      <span className="text-gray-300">{interest.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Fun Facts */}
              <div className="p-6 rounded-xl bg-white bg-opacity-5 backdrop-blur-sm hover:bg-opacity-10 transition-all shadow-xl">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">Fun Facts</h3>
                <ul className="space-y-4">
                  {personalInfo.funFacts.map((fact, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mr-3 text-white">
                        {index + 1}
                      </span>
                      <span className="text-gray-300 mt-1">{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Quote */}
            <div className="mt-8 p-8 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10">
              <blockquote className="text-xl text-center italic text-gray-300">
                "I believe that creativity and technical skill combined can create experiences that truly impact people's lives."
              </blockquote>
              <div className="mt-4 text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
                  <Heart className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 z-0"></div>
        <div className="bg-black bg-opacity-40 backdrop-blur-sm p-8 md:p-12 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            I'm a Full Stack Developer with a passion for creating elegant solutions to complex problems. 
            With a background in computer science and years of experience in web development, 
            I bring both technical expertise and creative thinking to every project.
          </p>
        </div>
      </div>
      
      {/* Tab Navigation */}
      <div className="mb-8 flex overflow-x-auto">
        <div className="flex space-x-2 p-1 bg-white bg-opacity-5 backdrop-blur-sm rounded-lg">
          <button
            onClick={() => setActiveTab('experience')}
            className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-all ${
              activeTab === 'experience' 
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                : 'hover:bg-white hover:bg-opacity-10 text-gray-300'
            }`}
          >
            <Briefcase className="w-5 h-5" />
            <span>Experience</span>
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-all ${
              activeTab === 'education' 
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                : 'hover:bg-white hover:bg-opacity-10 text-gray-300'
            }`}
          >
            <Book className="w-5 h-5" />
            <span>Education</span>
          </button>
          <button
            onClick={() => setActiveTab('personal')}
            className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-all ${
              activeTab === 'personal' 
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                : 'hover:bg-white hover:bg-opacity-10 text-gray-300'
            }`}
          >
            <User className="w-5 h-5" />
            <span>Personal</span>
          </button>
        </div>
      </div>
      
      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
};

export default About;
