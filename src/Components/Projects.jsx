import React from "react";
import { useProjects } from "../Context/ProjectsContext";
import { useDarkMode } from "../Context/DarkModeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faLaptopCode,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";

function Projects() {
  const { projects } = useProjects();
  const { darkMode } = useDarkMode();

  return (
    <section
      id="projects"
      className={`${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-200 text-gray-700"
      } opacity-90 pt-4`}
    >
      <div className="pt-16 1024x1366:pt-24 xl:mt-12 xl:mb-16">
        <h2 className={"text-3xl lg:text-4xl font-extrabold text-center mb-12"}>
          <FontAwesomeIcon
            icon={faLaptopCode}
            size="2xl"
            className={`${darkMode ? "text-gray-100" : "text-gray-700"}`}
          />
          Projects <span className="text-orange-600">Made</span>
        </h2>
        <div className="flex flex-col gap-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              } flex flex-col projects items-center bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg`}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="projectImage my-4 lg:my-8 lg:mx-8 w-full md:w-3/5 sm:w-3/4 px-8 py-8 rounded-4xl lg:object-contain shadow-lg"
              />
              <div className="p-4 lg:p-6 md:w-1/2">
                <h3 className="text-gray-950 text-2xl font-bold mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="hovercontent inline-block bg-blue-200 dark:bg-blue-800 text-blue-700 dark:text-blue-200 rounded-full px-3 py-1 text-sm font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={project.frontendUrl}
                    target="_blank"
                    className="text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    <FontAwesomeIcon icon={faGithub} size="2xl" />
                    <span> FrontEnd</span>
                  </a>
                  <a
                    href={project.backendUrl}
                    target="_blank"
                    className="text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    <FontAwesomeIcon icon={faGithub} size="2xl" />
                    <span> BackEnd</span>
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    className="text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} size="xl" />
                    <span>Live Link</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
