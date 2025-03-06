import React, { useState } from 'react';
import { Code, Server, Database, Palette, Cpu, Wrench, Globe, Layers, Zap, Monitor } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const skillCategories = [
    { id: 'all', name: 'All Skills', icon: <Layers className="w-5 h-5" /> },
    { id: 'frontend', name: 'Frontend', icon: <Monitor className="w-5 h-5" /> },
    { id: 'backend', name: 'Backend', icon: <Server className="w-5 h-5" /> },
    { id: 'database', name: 'Database', icon: <Database className="w-5 h-5" /> },
    { id: 'devops', name: 'DevOps', icon: <Cpu className="w-5 h-5" /> },
    { id: 'design', name: 'Design', icon: <Palette className="w-5 h-5" /> },
    { id: 'tools', name: 'Tools', icon: <Wrench className="w-5 h-5" /> },
  ];
  
  const skills = [
    // Frontend Skills
    { name: 'React', category: 'frontend', proficiency: 95, experience: '3+ years', 
      description: 'Building complex applications with hooks, context API, and Redux', 
      icon: <Code className="w-5 h-5" /> },
    { name: 'JavaScript', category: 'frontend', proficiency: 90, experience: '4+ years', 
      description: 'ES6+, asynchronous programming, functional concepts', 
      icon: <Code className="w-5 h-5" /> },
    { name: 'TypeScript', category: 'frontend', proficiency: 85, experience: '2+ years', 
      description: 'Type systems, interfaces, generics, and utility types', 
      icon: <Code className="w-5 h-5" /> },
    { name: 'HTML/CSS', category: 'frontend', proficiency: 90, experience: '4+ years', 
      description: 'Semantic HTML, CSS Grid, Flexbox, animations', 
      icon: <Code className="w-5 h-5" /> },
    { name: 'Tailwind CSS', category: 'frontend', proficiency: 90, experience: '2+ years', 
      description: 'Utility-first approach, customization, responsive design', 
      icon: <Palette className="w-5 h-5" /> },
    { name: 'NextJS', category: 'frontend', proficiency: 80, experience: '1+ years', 
      description: 'Server-side rendering, static generation, API routes', 
      icon: <Zap className="w-5 h-5" /> },
    
    // Backend Skills
    { name: 'Node.js', category: 'backend', proficiency: 85, experience: '3+ years', 
      description: 'RESTful APIs, middleware, authentication systems', 
      icon: <Server className="w-5 h-5" /> },
    { name: 'Express', category: 'backend', proficiency: 85, experience: '3+ years', 
      description: 'API development, middleware, error handling, routing', 
      icon: <Server className="w-5 h-5" /> },
    { name: 'GraphQL', category: 'backend', proficiency: 75, experience: '1+ years', 
      description: 'Schemas, resolvers, queries and mutations', 
      icon: <Globe className="w-5 h-5" /> },
    { name: 'Python', category: 'backend', proficiency: 70, experience: '2+ years', 
      description: 'Data processing, scripting, automation', 
      icon: <Code className="w-5 h-5" /> },
    
    // Database Skills
    { name: 'MySQL', category: 'database', proficiency: 70, experience: '3+ years', 
        description: 'Relational database, complex queries, optimization', 
        icon: <Database className="w-5 h-5" /> },
    { name: 'MongoDB', category: 'database', proficiency: 85, experience: '3+ years', 
      description: 'Schema design, indexing, aggregation pipelines', 
      icon: <Database className="w-5 h-5" /> },
    { name: 'PostgreSQL', category: 'database', proficiency: 80, experience: '2+ years', 
      description: 'Relational data modeling, complex queries, optimization', 
      icon: <Database className="w-5 h-5" /> },
    { name: 'Firebase', category: 'database', proficiency: 75, experience: '2+ years', 
      description: 'Authentication, Firestore, real-time database', 
      icon: <Database className="w-5 h-5" /> },
    
    // DevOps Skills
    { name: 'Docker', category: 'devops', proficiency: 75, experience: '2+ years', 
      description: 'Containerization, Docker Compose, deployment strategies', 
      icon: <Cpu className="w-5 h-5" /> },
    { name: 'AWS', category: 'devops', proficiency: 70, experience: '2+ years', 
      description: 'EC2, S3, Lambda, API Gateway', 
      icon: <Cpu className="w-5 h-5" /> },
    { name: 'CI/CD', category: 'devops', proficiency: 75, experience: '2+ years', 
      description: 'GitHub Actions, automated testing, deployment pipelines', 
      icon: <Cpu className="w-5 h-5" /> },
    
    // Design Skills
    { name: 'Figma', category: 'design', proficiency: 80, experience: '2+ years', 
      description: 'UI design, prototyping, component systems', 
      icon: <Palette className="w-5 h-5" /> },
    { name: 'UI/UX Design', category: 'design', proficiency: 75, experience: '2+ years', 
      description: 'User flows, wireframing, accessibility considerations', 
      icon: <Palette className="w-5 h-5" /> },
    
    // Tools
    { name: 'Git', category: 'tools', proficiency: 90, experience: '4+ years', 
      description: 'Version control, branching strategies, collaborative workflows', 
      icon: <Wrench className="w-5 h-5" /> },
    { name: 'Jest', category: 'tools', proficiency: 80, experience: '2+ years', 
      description: 'Unit testing, integration testing, mocking', 
      icon: <Wrench className="w-5 h-5" /> },
    { name: 'VS Code', category: 'tools', proficiency: 95, experience: '4+ years', 
      description: 'Advanced features, extensions, customization', 
      icon: <Wrench className="w-5 h-5" /> }
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);
  
  return (
    <div className="max-w-6xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 z-0"></div>
        <div className="bg-black bg-opacity-40 backdrop-blur-sm p-8 md:p-12 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            A comprehensive overview of my technical skills, tools, and technologies that I've mastered 
            throughout my career as a full-stack developer.
          </p>
        </div>
      </div>
      
      <div className="mb-12 overflow-x-auto">
        <div className="flex space-x-2 p-1 bg-white bg-opacity-5 backdrop-blur-sm rounded-lg inline-flex">
          {skillCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-all whitespace-nowrap ${
                activeCategory === category.id 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                  : 'hover:bg-white hover:bg-opacity-10 text-gray-300'
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill, index) => (
          <div 
            key={index}
            className="p-6 rounded-xl bg-white bg-opacity-5 backdrop-blur-sm hover:bg-opacity-10 transition-all shadow-xl group"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold">{skill.name}</h3>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-400">Proficiency</span>
                <span className="text-sm text-blue-400">{skill.proficiency}%</span>
              </div>
              <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
            </div>
            
            <div className="flex items-center mb-3">
              <span className="text-sm text-gray-400 mr-2">Experience:</span>
              <span className="text-sm text-gray-300">{skill.experience}</span>
            </div>
            
            <p className="text-gray-400 text-sm">{skill.description}</p>
          </div>
        ))}
      </div>
      
      {/* Skill Stats Section */}
      <div className="mt-16 p-8 rounded-xl bg-white bg-opacity-5 backdrop-blur-sm">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-8">
          Skill Breakdown
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg bg-black bg-opacity-30 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">
              {skills.filter(s => s.category === 'frontend').length}
            </div>
            <div className="text-gray-400">Frontend Technologies</div>
          </div>
          
          <div className="p-4 rounded-lg bg-black bg-opacity-30 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">
              {skills.filter(s => s.category === 'backend').length}
            </div>
            <div className="text-gray-400">Backend Technologies</div>
          </div>
          
          <div className="p-4 rounded-lg bg-black bg-opacity-30 text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">
              {skills.filter(s => s.category === 'database').length}
            </div>
            <div className="text-gray-400">Database Systems</div>
          </div>
          
          <div className="p-4 rounded-lg bg-black bg-opacity-30 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              {skills.filter(s => ['devops', 'design', 'tools'].includes(s.category)).length}
            </div>
            <div className="text-gray-400">DevOps & Tools</div>
          </div>
        </div>
      </div>
      
      {/* Learning Goals */}
      <div className="mt-12 mb-8">
        <h2 className="text-2xl font-bold mb-6">Currently Learning</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20">
            <h3 className="text-lg font-semibold text-blue-400 mb-2">Web3 & Blockchain</h3>
            <p className="text-gray-400 text-sm">Exploring smart contracts and decentralized applications</p>
          </div>
          
          <div className="p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/20">
            <h3 className="text-lg font-semibold text-purple-400 mb-2">Machine Learning</h3>
            <p className="text-gray-400 text-sm">Diving deeper into ML frameworks and applications</p>
          </div>
          
          <div className="p-4 rounded-lg bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20">
            <h3 className="text-lg font-semibold text-green-400 mb-2">Go Programming</h3>
            <p className="text-gray-400 text-sm">Building high-performance backend services with Go</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;