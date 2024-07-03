// Context/ProjectContext.js
import React, { createContext, useContext } from "react";
import projectOne from "../Images/ProjectOne-Image.jpg";

const ProjectDataContext = createContext();

export const useProjects = () => useContext(ProjectDataContext);

export const ProjectContext = ({ children }) => {
  const projects = [
    {
      id: 1,
      title: "Ecommerce Application",
      description:
        "Ecommerce Clothing Hub is a sleek and user-friendly platform crafted for fashion enthusiasts. Discover the latest trends, enjoy seamless shopping, and all in one place.",
      imageUrl: projectOne,
      technologies: ["React", "Node.js", "CSS", "Express", "Bootstrap"],
      frontendUrl: "https://github.com/prasanth2817/Ecommerce-app-Frontend",
      backendUrl: "https://github.com/prasanth2817/Ecommerce-app-Backend",
      liveLink: "https://ecommerce-platform-clothing.netlify.app/",
    },
    {
      id: 2,
      title: "MyBarber Application",
      description:
        "MyBarber is an intuitive booking platform designed to streamline appointments for barbers and clients. Enhance your grooming experience with easy scheduling, personalized profiles, and real-time updates.",
      imageUrl: projectOne,
      technologies: ["React", "Node.js", "CSS", "Express", "Bootstrap"],
      frontendUrl: "https://github.com/prasanth2817/Ecommerce-app-Frontend",
      backendUrl: "https://github.com/prasanth2817/Ecommerce-app-Backend",
      liveLink: "https://ecommerce-platform-clothing.netlify.app/",
    },
  ];

  return (
    <ProjectDataContext.Provider value={{ projects }}>
      {children}
    </ProjectDataContext.Provider>
  );
};
