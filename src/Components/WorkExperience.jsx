import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { useExperience } from "../Context/ExperienceContext";
import { useDarkMode } from "../Context/DarkModeContext";

function WorkExperience() {
  const { experiences } = useExperience();
  const { darkMode } = useDarkMode();
  return (
    <section
      id="experience"
      className={`${darkMode ? "bg-gray-900" : "bg-white"} opacity-85 pt-16`}
    >
      <div className="container mx-auto px-4 xl:mt-4 xl:mb-16">
        <h2
          className={`${
            darkMode ? "text-gray-100" : "text-gray-700"
          } text-3xl lg:text-2xl xl:text-4xl 1024x1366:text-5xl 1024x1366:py-12 font-bold text-center mb-12 xl:mb-8 pt-8`}
        >
          <FontAwesomeIcon icon={faBriefcase} size="lg" className="mr-2" />
          Experience
        </h2>
        <div className="relative flex flex-col items-center justify-center 1024x1366:justify-start before:absolute before:inset-y-0 before:w-2 before:bg-cyan-600 before:left-1/2 before:transform before:-translate-x-1/2">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className={`flex items-center w-full mb-8 ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`${
                  darkMode ? "text-gray-100" : "text-gray-950"
                } workExpCard p-6 rounded-lg w-full md:w-5/12 relative z-10`}
              >
                <h3 className="text-xl md:text-2xl 1024x1366:text-3xl font-bold text-orange-700">
                  {experience.title}
                </h3>
                <p className="text-md md:text-xl 1024x1366:text-2xl font-medium text-white">
                  {experience.role}
                </p>
                <p className="text-sm md:text-xl 1024x1366:text-xl text-white">
                  {experience.period}
                </p>
                <div
                  className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                    index % 2 === 0 ? "-right-8" : "-left-8"
                  }`}
                >
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    size="xl"
                    className="mr-2 text-purple-600"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
