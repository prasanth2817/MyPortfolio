import React, { createContext, useContext } from "react";
import projectOne from "../Images/ProjectOne-Image.jpg";
import ChatApp from "../Images/Chat-app-image2.png";
import RealEstateApp from "../Images/RealEstate-app-image.png"
import MyBaberApp from "../Images/MyBaber-homeImage.png"

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
      title: "Chat Application",
      description:
        "This chat application providing real-time messaging using Socket.IO and managing state with Zustand on the frontend. It includes JWT authentication, MongoDB for storing user data and chats, and follows the MVC pattern for maintainable backend code.",
      imageUrl : ChatApp ,
      technologies: ["React", "Node.js", "CSS", "Express", "Bootstrap"],
      frontendUrl: "https://github.com/prasanth2817/Chat-Application-Frontend",
      backendUrl: "https://github.com/prasanth2817/Chat-Application-Backend",
      liveLink: "https://chat-app-wechat.netlify.app/",
    },
    {
      id: 3,
      title: "RealEstate Listing Application",
      description:
        "A comprehensive real estate listing application built using the MERN stack (MongoDB, Express, React, Node.js). This application allows users to search for properties, manage property listings, and update property statuses.",
      imageUrl : RealEstateApp ,
      technologies: ["React", "Node.js", "CSS", "Express", "Bootstrap"],
      frontendUrl: "https://github.com/prasanth2817/RealEstate-App-Frontend",
      backendUrl: "https://github.com/prasanth2817/RealEstate-App-Backend",
      liveLink: "https://realestate-listing-app.netlify.app/",
    },
    {
      id: 4,
      title: "MyBarber Application",
      description:
        "MyBarber is an intuitive booking platform designed to streamline appointments for barbers and clients. Enhance your grooming experience with easy scheduling, personalized profiles, and real-time updates.",
      imageUrl : MyBaberApp,
      technologies: ["React", "Node.js", "CSS", "Express", "Bootstrap"],
      frontendUrl: "https://github.com/prasanth2817/MyBarber-App-Frontend",
      backendUrl: "https://github.com/prasanth2817/MyBarber-App-Backend",
      liveLink: "https://bookmybaber.netlify.app/",
    }
  ];

  return (
    <ProjectDataContext.Provider value={{ projects }}>
      {children}
    </ProjectDataContext.Provider>
  );
};
