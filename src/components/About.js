// About.js
import React from "react";

const About = () => {
  return (
      <div className="space-y-12">
        <section>
          <h2 className="text-3xl font-semibold text-gray-800">Experience</h2>
          <div className="space-y-4 mt-4">
            <div className="flex flex-col space-y-2">
              <h3 className="text-xl font-semibold text-gray-700">Deloitte</h3>
              <p className="text-gray-600">Front End Developer</p>
              <p className="text-gray-500">Apr 2021 - Aug 2023</p>
              <p className="text-gray-600">Worked on developing responsive, high-performance web applications using modern front-end technologies and best practices.</p>
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="text-xl font-semibold text-gray-700">Multiliving Technology</h3>
              <p className="text-gray-600">Full Stack Developer Intern</p>
              <p className="text-gray-500">Feb 2021 - Apr 2021</p>
              <p className="text-gray-600">Contributed to both front-end and back-end development of various projects, with a focus on building dynamic web applications.</p>
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="text-xl font-semibold text-gray-700">Khairnar Technologies</h3>
              <p className="text-gray-600">Web Developer Intern</p>
              <p className="text-gray-500">Jun 2019 - Aug 2019</p>
              <p className="text-gray-600">Gained exposure to various technologies and contributed to internal projects and research.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-800">Education</h2>
          <div className="space-y-4 mt-4">
            <div className="flex flex-col space-y-2">
              <h3 className="text-xl font-semibold text-gray-700">Troy University</h3>
              <p className="text-gray-600">Masters in Computer Science</p>
              <p className="text-gray-500">Aug 2023 - Dec 2024</p>
              <p className="text-gray-600">Focused on advanced computer science topics such as AI, Machine Learning, and Data Structures.</p>
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="text-xl font-semibold text-gray-700">Smt. Kashibai Nawale College Of Engineering</h3>
              <p className="text-gray-600">Bachelors in Computer Science</p>
              <p className="text-gray-500">2016 - 2020</p>
              <p className="text-gray-600">Studied the fundamentals of computer science and software engineering, with hands-on experience in coding and project development.</p>
            </div>
          </div>
        </section>
      </div>
  );
};

export default About;
