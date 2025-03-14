import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import WorkExperience from "./WorkExperience";
import DynamicText from "./DynamicText";
import Navbar from "./Header";
import HeroImage from "../Images/hero_image.png";
import HeroImageLight from "../Images/hero_image-for-lightMode.png";
import { useDarkMode } from "../Context/DarkModeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ParticleBackground from "../Particles/ParticleBackground";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  const { darkMode } = useDarkMode();
  return (
    <>
      <ParticleBackground id="particles" />
      <Navbar />
      <section
        className="flex flex-col 1024x1366:mt-12 lg:p-8 justify-around xs:justify-evenly 1024x1366:flex-col 1024x1366:justify-normal 1024x1366:pt-16 relative top-4 lg:top-16 sm:top-4 lg:flex-row py-20 lg:py-0 md:h-screen home"
        id="home"
      >
        <div className="order-2 1024x1366:order-2 lg:order-1 content py-4 lg:px-4 sm:py-4 md:py-0 relative lg:top-20 lg-xl:top-32 lg:w-full xl:mt-16 z-10">
          <h2 className="text-3xl xs:text-4xl md:text-5xl lg:text-4xl 1024x1366:text-6xl xl:text-6xl font-extrabold tracking-wide text-blue-900">
            Hi There,
            <br /> I am{" "}
            <span className="text-4xl xs:text-5xl md:text-6xl lg:text-5xl xl:text-7xl 1024x1366:text-7xl font-bold text-orange-600">
              Prasanth
            </span>
          </h2>
          <p className="text-xl sm:text-2xl xs:font-semibold py-4 md:text-3xl 1024x1366:text-5xl xl:text-4xl font-medium text-gray-600">
            I am Into{" "}
            <span className="text-xl xs:text-2xl sm:text-3xl md:text-5xl lg:text-4xl 1024x1366:text-6xl xl:text-5xl font-bold">
              {<DynamicText />}
            </span>
          </p>
          {/* <div className="btn absolute mt-4 lg:mt-8 px-6 xl:px-8 py-4 xl:py-6 bg-blue-800 text-gray-200 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:gap-12 font-bold text-2xl 1024x1366:text-3xl xl:text-3xl rounded-3xl">
          <a href="#about" >
            <span>About Me
            <i className="fas fa-arrow-circle-down"></i>
            </span>
          </a>
          </div> */}
          <div className="btn absolute mt-4 lg:mt-8 px-6 xl:px-8 py-4 xl:py-6 bg-blue-800 text-gray-200 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 font-bold text-2xl 1024x1366:text-3xl xl:text-3xl rounded-3xl group">
            <a href="#about" className="flex items-center gap-2">
              <span>About Me</span>
              <i className="fas fa-arrow-circle-down transition-transform duration-300 ease-in-out group-hover:translate-y-0.5 group-hover:opacity-80"></i>
            </a>
          </div>

          <div className="socials relative mt-28 md:mt-36 lg:mt-40 xl:mt-44">
            <ul className="social-icons space-x-4 p-0 mb-0 list-none">
              <li className="inline-block mb-6 md:mb-8 lg:mb-10">
                <a
                  className="linkedin inline-block text-2xl md:text-4xl lg-xl:text-3xl leading-[44px] md:leading-[58px] lg-xl:leading-[52px] text-cyan-400 bg-[#09011b] w-11 h-11 md:w-14 md:h-14 lg-xl:w-12 lg-xl:h-12 text-center mr-2 rounded-full transition-all duration-200 ease-linear hover:text-white hover:bg-[#007bb6]"
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/in/prasanth2817"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li className="inline-block mb-6 md:mb-8 lg:mb-10">
                <a
                  className="github inline-block text-2xl md:text-4xl leading-[44px] lg-xl:text-3xl lg-xl:leading-[52px] md:leading-[58px] text-cyan-400 bg-[#09011b] w-11 h-11 md:w-14 md:h-14 lg-xl:w-12 lg-xl:h-12 text-center mr-2 rounded-full transition-all duration-200 ease-linear hover:text-white hover:bg-[#0e0e0e]"
                  aria-label="GitHub"
                  href="https://github.com/prasanth2817"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li className="inline-block mb-6 md:mb-8 lg:mb-10">
                <a
                  className="Gmail inline-block text-2xl md:text-4xl lg-xl:text-3xl leading-[44px] md:leading-[58px] lg-xl:leading-[52px] text-cyan-400 bg-[#09011b] w-11 h-11 md:w-14 md:h-14 lg-xl:w-12 lg-xl:h-12 text-center mr-2 rounded-full transition-all duration-200 ease-linear hover:text-white hover:bg-[#00aced]"
                  aria-label="Mail"
                  href="mailto:prasanth2817ss@gmail.com"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container 1024x1366:order-1 1024x1366:top-20 mx-auto lg:mx-0 sm:ml-16 order-1 lg:order-2 w-10/12 xs:w-11/12 sm:w-3/4 lg:w-9/12 1024x1366:w-9/12 1024x1366:ml-36 1024x1366:mb-4 image relative lg:top-24 xl:ml-0 xl:mt-16">
          {darkMode ? (
            <img
              draggable="false"
              className="rounded-full shadow-dark-mode hover:shadow-current xl:w-full"
              src={HeroImage}
              alt=""
            />
          ) : (
            <img
              draggable="false"
              className="rounded-full shadow-light-mode hover:shadow-current"
              src={HeroImageLight}
              alt=""
            />
          )}
        </div>
      </section>
      <About />
      <Skills />
      <Projects />
      <WorkExperience />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
