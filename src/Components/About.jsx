import React from "react";
import Profilephoto1 from "../Images/portfolioPhotoLight.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faFileLines } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <section id="about" className="pt-20 lg:py-12 bg-gray-900">
      <div className="container mx-auto lg:pt-16 lg:px-4">
        <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold text-center xl:my-16 text-gray-100 mb-8">
          <FontAwesomeIcon icon={faUser} /> About{" "}
          <span className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-orange-500">
            Me
          </span>
        </h2>
        <div className="flex flex-col items-center lg:flex-row 1024x1366:flex-col xl:justify-around lg:gap-8 xl:gap-12 gap-8">
          <div className="lg:mb-0">
            <img
              src={Profilephoto1}
              alt="About Me"
              className="rounded-4xl md:w-9/12 1024x1366:w-9/12 1024x1366:ml-24 md:mx-16 lg:mx-2 lg:my-2 md:my-8 lg:w-full mix-blend-luminosity transition duration-300 cursor-pointer hover:mix-blend-normal"
            />
          </div>
          <div className="">
            <p className="xl:text-2xl lg:mb-4 lg:text-base 1024x1366:text-3xl md:text-2xl 1024x1366:my-8 text-justify mb-4 text-cyan-600 font-medium">
              I'm Prasanth K, a Civil Engineering graduate who transitioned to
              software development through a comprehensive course on Guvi,
              specializing in MERN stack. Currently seeking entry-level
              opportunities, I have hands-on experience in creating full-stack
              projects and am passionate about innovation and impactful
              contributions. My journey has equipped me with unique
              problem-solving skills and a commitment to continuous learning.
              Let's connect to discuss how I can contribute to your projects.
            </p>
            <button className="container mx-auto w-full sm:w-1/2 1024x1366:mt-8 1024x1366:text-3xl md:w-5/12 sm:flex sm:justify-center text-xl md:text-2xl font-bold lg:font-semibold text-gray-50 hover:bg-orange-400 bg-orange-500 rounded-xl px-6 py-2 sm:px-8 md:px-6">
              <a
                href="https://drive.google.com/file/d/1FOJWLcTzGFrj9OLOVSfZvYyT4vQT6YpW/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mx-2">Resume</span>
                <FontAwesomeIcon icon={faFileLines} />
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
