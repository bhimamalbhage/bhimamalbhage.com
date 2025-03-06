import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Portfolio from "./components/Portfolio";
import Projects from "./components/Projects";
import ProjectDetail from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/skills" element={<Skills />} />
          {/* <Route path="/contact" element={<Portfolio />} /> */}
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;