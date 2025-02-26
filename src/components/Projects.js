import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import AiAssistant from "../assets/images/ai-assistant.png";
import myFlix from "../assets/images/myFlix.png";
import Traffic from "../assets/images/traffic.png";
import eventManagement from "../assets/images/event-management.jpg";

const projects = [
  {
    title: "Custom AI-powered chatbot for university services",
    image: AiAssistant,
    githubLink: "https://github.com/bhimamalbhage/AI-Assistant-for-university",
  },
  {
    title: "MyFlix - Movie Discovery and Management App",
    image: myFlix,
    githubLink: "https://github.com/bhimamalbhage/AI-Assistant-for-university",
    websiteLink: 'https://myflix-bhima.netlify.app/',
  },
  {
    title: "Scalable traffic data sensing systems using AI",
    image: Traffic,
    githubLink: "https://github.com/bhimamalbhage/Traffic-Data-Collection",
  },
  {
    title: "Multilingual Event Management",
    image: eventManagement,
    githubLink: "https://github.com/bhimamalbhage/event",
  },
];

const Project = () => {
  return (
    <div className="space-y-12">
      <h2 className="text-3xl font-semibold text-gray-800">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-700">
                {project.title}
              </h3>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block"
              >
                <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
              </a>
              {project.websiteLink && (
                <a
                  href={project.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block"
                  style={{ marginLeft: "10px" }}
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
