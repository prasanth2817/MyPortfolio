import React from "react";
import Home from "../Components/Home";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import WorkExperience from "../Components/WorkExperience";
import Footer from "../Components/Footer";
import { Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<WorkExperience />} />
        <Route path="/contact" element={<Footer />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
