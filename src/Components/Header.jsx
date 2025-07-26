import { useState, useCallback } from "react";
import { Link } from "react-scroll";
import { useDarkMode } from "../Context/DarkModeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faCode,
  faXmark,
  faBarsStaggered,
} from "@fortawesome/free-solid-svg-icons";
import { useActiveSection } from "../Hooks/useActiveSection";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [showMenu, setShowMenu] = useState(false);
  const activeSection = useActiveSection();

  const handleMenuToggle = useCallback(() => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  }, []);

  return (
    <header
      className={`${
        darkMode ? "bg-gray-950" : "bg-gray-100"
      } fixed top-0 h-16 sm:h-20 md:h-24 lg-xl:h-16 w-full`}
    >
      <div className="container mx-auto h-16 lg-xl:h-20 md:mx-4 md:w-full flex sm:mx-0 2xl:mx-4 md:h-24 items-center justify-between md:justify-evenly lg-xl:mx-auto lg:gap-8 lg-xl:gap-16 lg-xl:px-4 2xl:justify-between">
        {/* Logo and Mobile Menu Toggle */}
        <div
          className={`${
            darkMode ? "text-rose-900" : "text-cyan-700"
          } order-1  hover:text-gray-400 flex justify-start items-center text-2xl lg-xl:text-xl font-bold`}
        >
          <a href="/">
            <FontAwesomeIcon icon={faCode} size="xl" />
          </a>
          <span className="hidden lg-xl:block xl:block ml-2">Prasanth.Dev</span>
        </div>
        {/* Dark/Light Mode Toggle */}
        <div className="order-3 ml-44 sm:ml-72 lg:ml-0">
          <button
            onClick={toggleDarkMode}
            className={`${
              darkMode ? "hover:bg-rose-900" : "hover:bg-cyan-600"
            } hover:text-gray-400 w-8 h-8 md:mr-10 lg:w-12 lg:h-12 lg-xl:h-10 lg-xl:w-10 text-white rounded-full flex items-center justify-center focus:outline-none transition duration-300 ease-in-out hover:shadow-lg shadow-lg`}
          >
            {darkMode ? (
              <FontAwesomeIcon icon={faSun} className="text-yellow-400 " />
            ) : (
              <FontAwesomeIcon icon={faMoon} className="text-gray-700 " />
            )}
          </button>
        </div>
        {/* Mobile Menu Toggle - Shown on Small Screens */}
        <button
          onClick={handleMenuToggle}
          className="order-3 lg:order-none bg-gray-100 shadow-lg lg:hidden bg-transparent focus:outline-none p-2 rounded"
        >
          {showMenu ? (
            <FontAwesomeIcon
              icon={faXmark}
              size="2xl"
              className={`${
                darkMode ? "text-rose-900" : "text-cyan-700"
              } hover:text-gray-400`}
            />
          ) : (
            <FontAwesomeIcon
              icon={faBarsStaggered}
              size="2xl"
              className={`${
                darkMode ? "text-rose-900" : "text-cyan-700"
              } hover:text-gray-400`}
            />
          )}
        </button>

        {/* Navbar Menu */}
        <nav
          className={`fixed top-0 left-0 w-full h-full font-medium xl:font-normal text-xl lg-xl:text-sm lg-xl:font-light bg-gray-900 bg-opacity-50 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${
            showMenu ? "translate-x-0" : "-translate-x-full"
          } lg:static lg:order-2 lg:bg-transparent lg:flex lg:flex-col lg:translate-x-0`}
        >
          <ul className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8 p-8 lg:p-0">
            {[
              "home",
              "about",
              "skills",
              "projects",
              "experience",
              "contact",
            ].map((section) => (
              <li key={section}>
                <Link
                  to={section}
                  smooth={true}
                  className={`${
                    darkMode
                      ? "text-gray-400 font-semibold text-base"
                      : "text-gray-950 font-semibold text-base"
                  } hover:text-blue-700 cursor-pointer ${
                    activeSection === section
                      ? "text-blue-500 border-b-4 border-blue-700 py-2"
                      : ""
                  }`}
                  onClick={handleMenuToggle}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

// import { useState, useCallback, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom"; 
// import { useDarkMode } from "../Context/DarkModeContext";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faSun,
//   faMoon,
//   faCode,
//   faXmark,
//   faBarsStaggered,
// } from "@fortawesome/free-solid-svg-icons";

// const sections = [
//   { name: "Home", id: "#home" },
//   { name: "About", id: "#about" },
//   { name: "Skills", id: "#skills" },
//   { name: "Projects", id: "#projects" },
//   { name: "Experience", id: "#experience" },
//   { name: "Contact", id: "#contact" },
// ];

// const Navbar = () => {
//   const { darkMode, toggleDarkMode } = useDarkMode();
//   const [showMenu, setShowMenu] = useState(false);
//   const location = useLocation();

//   // Function to close the menu on link click
//   const handleMenuToggle = useCallback(() => {
//     setShowMenu((prevShowMenu) => !prevShowMenu);
//   }, []);

//   // Scroll to the correct section on route change
//   useEffect(() => {
//     const hash = location.hash;
//     if (hash) {
//       const element = document.querySelector(hash);
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   }, [location]);

//   return (
//     <header className={`fixed top-0 h-16 w-full ${darkMode ? "bg-gray-950" : "bg-gray-100"}`}>
//       <div className="container mx-auto flex items-center justify-between p-4">
//         {/* Logo */}
//         <div className={`text-2xl font-bold ${darkMode ? "text-rose-900" : "text-cyan-700"}`}>
//           <a href="/">
//             <FontAwesomeIcon icon={faCode} size="xl" />
//           </a>
//           <span className="ml-2 hidden lg:block">Prasanth.Dev</span>
//         </div>

//         {/* Dark Mode Toggle */}
//         <button onClick={toggleDarkMode} className="w-10 h-10 flex items-center justify-center rounded-full">
//           {darkMode ? (
//             <FontAwesomeIcon icon={faSun} className="text-yellow-400" />
//           ) : (
//             <FontAwesomeIcon icon={faMoon} className="text-gray-700" />
//           )}
//         </button>

//         {/* Mobile Menu Toggle */}
//         <button onClick={handleMenuToggle} className="lg:hidden">
//           {showMenu ? (
//             <FontAwesomeIcon icon={faXmark} size="2xl" className="text-cyan-700" />
//           ) : (
//             <FontAwesomeIcon icon={faBarsStaggered} size="2xl" className="text-cyan-700" />
//           )}
//         </button>

//         {/* Navbar Menu */}
//         <nav
//           className={`fixed top-0 left-0 w-full h-full flex items-center justify-center transition-all duration-300 ease-in-out ${
//             showMenu ? "opacity-100" : "opacity-0 pointer-events-none"
//           } lg:static lg:opacity-100 lg:pointer-events-auto`}
//         >
//           <ul className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8 p-8 lg:p-0">
//             {sections.map(({ name, id }) => (
//               <li key={id}>
//                 <Link
//                   to={id}
//                   className={`text-base font-semibold ${
//                     darkMode ? "text-gray-400" : "text-gray-950"
//                   } hover:text-blue-700`}
//                   onClick={handleMenuToggle}
//                 >
//                   {name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Navbar;


