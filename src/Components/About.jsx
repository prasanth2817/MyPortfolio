import Profilephoto from "../Images/Profile_pic_06_03.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faFileLines } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="pt-20 lg:py-12 bg-gray-900 overflow-hidden">
      <div className="container mx-auto lg:pt-16 lg:px-4">
        <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold text-center xl:my-16 text-gray-100 mb-8">
          <FontAwesomeIcon icon={faUser} />
          {" "}{" "}
          About{" "}
          <span className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-orange-500">
            Me
          </span>
        </h2>

        <motion.div
          className="flex flex-col lg:flex-row xl:justify-around lg:gap-8 xl:gap-12 gap-8"
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 150 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          {/* Image Animation */}
          <motion.div
            className="lg:mb-0"
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 150 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
          >
            <img
              src={Profilephoto}
              alt="About Me"
              className="rounded-4xl md:w-9/12 lg:w-full mix-blend-luminosity transition duration-300 cursor-pointer hover:mix-blend-normal"
            />
          </motion.div>

          {/* Text Animation */}
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -150 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
          >
            <p className="xl:text-2xl lg:text-lg lg:mb-4 text-justify mb-4 text-cyan-600 font-medium">
              I am Prasanth K, a Civil Engineering graduate who transitioned to software development through a comprehensive course on Guvi, specializing in MERN stack. Currently seeking entry-level opportunities, I have hands-on experience in creating full-stack projects and am passionate about innovation and impactful contributions. My journey has equipped me with unique problem-solving skills and a commitment to continuous learning. Lets connect to discuss how I can contribute to your projects.
            </p>
           {/* Resume Button Animation */}
           <motion.button
              className="container mx-auto w-full sm:w-1/2 md:w-5/12 sm:flex sm:justify-center text-xl md:text-2xl font-bold lg:font-semibold text-gray-50 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-orange-400 bg-orange-500 rounded-xl px-6 py-2 sm:px-8 md:px-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <a
                href="https://drive.google.com/file/d/1jua_cBDHb4I_h8iLhD8E3MtkAXBQjaAz/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mx-2">Resume</span>
                <FontAwesomeIcon icon={faFileLines} />
              </a>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

