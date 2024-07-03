import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkedAlt,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-2">
      <div className=" text-center grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">Prasanth's Portfolio</h3>
          <p>
            Thank you for visiting my personal portfolio website. Connect with
            me over socials. <br />
            <br />
            Keep Rising 🚀. Connect with me over live chat!
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 mx-32 sm:mx-48 md:mx-16 lg:mx-28 xl:mx-36">
            <li>
              <a
                href="#home"
                className="flex items-center justify-start hover:text-blue-500"
              >
                <i className="fas fa-chevron-circle-right mr-4"></i> Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="flex items-center justify-start hover:text-blue-500"
              >
                <i className="fas fa-chevron-circle-right mr-4"></i> About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="flex items-center justify-start hover:text-blue-500"
              >
                <i className="fas fa-chevron-circle-right mr-4"></i> Skills
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="flex items-center justify-start hover:text-blue-500"
              >
                <i className="fas fa-chevron-circle-right mr-4"></i> Projects
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="flex items-center justify-start hover:text-blue-500"
              >
                <i className="fas fa-chevron-circle-right mr-4"></i> Experience
              </a>
            </li>
            <li>
              <a
                href="#work"
                className="flex items-center justify-start hover:text-blue-500"
              >
                <i className="fas fa-chevron-circle-right mr-4"></i> Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Contact Info</h3>
          <p className="flex items-center justify-center mb-2">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            +91 7639994826
          </p>
          <p className="flex items-center justify-center mb-2">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            prasanth2817ss@gmail.com
          </p>
          <p className="flex items-center justify-center mb-4">
            <FontAwesomeIcon icon={faMapMarkedAlt} className="mr-2" />
            thiruvallur, Chennai
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="www.linkedin.com/in/prasanth2817"
              className="text-gray-300 hover:text-white"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a
              href="https://github.com/prasanth2817"
              className="text-gray-300 hover:text-white"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a
              href="mailto:prasanth2817ss@gmail.com"
              className="text-gray-300 hover:text-white"
              aria-label="Mail"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <h1 className="text-sm">
          Designed with{" "}
          <FontAwesomeIcon icon={faHeart} className="text-red-500 pulse" /> by{" "}
          <a
            href="www.linkedin.com/in/prasanth2817"
            className="text-orange-500 hover:text-orange-700"
          >
            K Prasanth
          </a>
        </h1>
      </div>
    </footer>
  );
}

export default Footer;
