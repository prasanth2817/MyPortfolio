import React from "react";
import contactImage from "../Images/contactImage.png";
import { useDarkMode } from "../Context/DarkModeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const { darkMode } = useDarkMode();

  return (
    <section
      id="contact"
      className={`${
        darkMode ? "bg-gray-950 text-gray-100" : "bg-gray-200 text-gray-700"
      }`}
    >
      <div className="rounded-4xl  pt-16 1024x1366:pt-24 xl:mt-12 xl:mb-20">
        <h2 className="text-2xl lg:text-4xl font-extrabold text-center mb-12 flex items-center justify-center">
          <FontAwesomeIcon icon={faHeadset} size="2xl" className="mr-2" />
          Get In <span className="text-purple-600 ml-2">Touch</span>
        </h2>
        <div className={`${ darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-700"} flex flex-col 1024x1366:flex-col md:gap-8 lg:flex-row items-center justify-around p-8 rounded-lg shadow-lg`}>
          <img
            className="w-full md:w-6/12 lg:w-5/12 xl:w-4/12 mb-8 md:mb-0"
            src={contactImage}
            alt="contactIcon"
          />
          <div className="w-full md:w-1/2 lg:h-3/4 lg:px-4">
            <form id="contact-form" className="space-y-4">
              <div className={`${ darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-700"} form-group space-y-4`}>
                <div className="field relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className={`${ darkMode ? "bg-gray-900 text-gray-100 border-gray-800" : "bg-gray-100 text-gray-700 border-gray-300"} w-full p-4 pl-10 border  rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500`}
                  />
                  <i className="fas fa-user absolute left-3 top-5 text-gray-400"></i>
                </div>
                <div className="field relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className={`${ darkMode ? "bg-gray-900 text-gray-100 border-gray-800" : "bg-gray-100 text-gray-700 border-gray-300"} w-full p-4 pl-10 border  rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500`}
                  />
                  <i className="fas fa-envelope absolute left-3 top-5 text-gray-400"></i>
                </div>
                <div className="field relative">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    className={`${ darkMode ? "bg-gray-900 text-gray-100 border-gray-800" : "bg-gray-100 text-gray-700 border-gray-300"} w-full p-4 pl-10 border  rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500`}
                  />
                  <i className="fas fa-phone absolute left-3 top-5 text-gray-400"></i>
                </div>
                <div className="message relative">
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                    className={`${ darkMode ? "bg-gray-900 text-gray-100 border-gray-800" : "bg-gray-100 text-gray-700 border-gray-300"} w-full p-4 pl-10 border  rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500`}
                  ></textarea>
                  <i className="fas fa-comment-dots absolute left-3 top-5 text-gray-400"></i>
                </div>
              </div>
              <div className="button-area text-center">
                <button
                  type="submit"
                  className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  Submit <i className="fa fa-paper-plane ml-2"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
