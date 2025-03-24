import React, { createContext, useContext } from "react";

const SkillsDataContext = createContext();

export const useSkills = () => useContext(SkillsDataContext);

export const SkillsContext = ({ children }) => {
  const skills = [
    {
      id: 0,
      title: "HTML5",
      image: "https://img.icons8.com/color/48/000000/html-5--v1.png",
      color: "#fe7b01",
    },
    {
      id: 1,
      title: "CSS3",
      image: "https://img.icons8.com/color/48/000000/css3.png",
      color: "#264de4",
    },
    {
      id: 2,
      title: "JavaScript",
      image: "https://img.icons8.com/color/48/000000/javascript--v1.png",
      color: "#f0db4f",
    },
    {
      id: 3,
      title: "TypeScript",
      image: "https://img.icons8.com/color/48/000000/typescript.png",
      color: "#f0db4f",
    },
    {
      id: 4,
      title: "React",
      image:
        "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png",
      color: "#61dbfb",
    },
    {
      id: 5,
      title: "Redux",
      image: "https://img.icons8.com/color/48/000000/redux.png",
      color: "#61dbfb",
    },
    {
      id: 6,
      title: "Next.js",
      image: "https://img.icons8.com/color/48/nextjs.png",
      color: "#68a06",
    },
    {
      id: 7,
      title: "MongoDB",
      image: "https://img.icons8.com/fluency/48/000000/node-js.png",
      color: "#4db33d",
    },
    {
      id: 8,
      title: "MySql",
      image: "https://img.icons8.com/color/48/000000/mysql-logo.png",
      color: "#68a063",
    },
    {
      id: 9,
      title: "FireBase",
      image: "https://img.icons8.com/color/48/000000/firebase.png",
      color: "#f0db4f",
    },
    {
      id: 10,
      title: "Node.js",
      image: "https://img.icons8.com/color/48/000000/nodejs.png",
      color: "#68a063",
    },
    {
      id: 11,
      title: "Express.js",
      image: "https://img.icons8.com/fluency/48/000000/node-js.png",
      color: "#68a063",
    },
    {
      id: 12,
      title: "BootStrap",
      image: "https://img.icons8.com/color/48/000000/bootstrap.png",
      color: "#68a063",
    },
    {
      id: 13,
      title: "SASS",
      image: "https://img.icons8.com/color/48/000000/sass.png",
      color: "#68a063",
    },
    {
      id: 14,
      title: "TailWindCSS",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png",
      color: "#68a063",
    },
    {
      id: 15,
      title: "Git",
      image: "https://img.icons8.com/color/48/000000/git.png",
      color: "#68a063",
    },
    {
      id: 16,
      title: "GitHub",
      image: "https://img.icons8.com/glyph-neue/48/ffffff/github.png",
      color: "#68a063",
    },
    {
      id: 17,
      title: "Netlify",
      image:
        "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png",
      color: "#68a063",
    },
  ];

  return (
    <SkillsDataContext.Provider value={skills}>
      {children}
    </SkillsDataContext.Provider>
  );
};
