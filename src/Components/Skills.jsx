// import { useSkills } from "../Context/SkillsContext";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

// const Skills = () => {
//   const skills = useSkills();

//   return (
//     <section id="skills" className="skills">
//       <div className="xl:pt-16 xl:px-4 lg:pt-0 mt-12 xl:mb-16">
//         <h2 className="heading lg:text-2xl sm:text-3xl text-2xl font-bold text-center mb-8 xl:mb-16">
//           <FontAwesomeIcon
//             icon={faLaptopCode}
//             size="2xl"
//             style={{ color: "#fafafa" }}
//           />
//           Skills & <span>Abilities</span>
//         </h2>
//         <div className="cardContent container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg-xl:grid-cols-5 lg:grid-cols-3 lg:gap-8 xl:gap-10 xl:grid-cols-5 gap-8">
//           {skills.map((skill) => (
//             <div
//               key={skill.id}
//               className="hovercontent flex flex-col items-center p-6 md:p-2 dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-violet-600 "
//             >
//               <img
//                 className="text-xl md:text-base mb-4 lg:mb-0 rounded-full"
//                 src={skill.image}
//                 alt="Icon"
//               />
//               <h3 className="text-xl lg:text-sm font-bold lg:font-normal">{skill.title}</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import { useState, useEffect, useRef } from "react";
import { useSkills } from "../Context/SkillsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence, useInView } from "framer-motion";

const Skills = () => {
  const originalSkills = useSkills();
  const [skills, setSkills] = useState(originalSkills);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-50px" });

  // Shuffle skills every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSkills((prevSkills) => {
        const shuffled = [...prevSkills].sort(() => Math.random() - 0.5);
        return shuffled;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="skills">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="xl:pt-16 xl:px-4 lg:pt-0 mt-12 xl:mb-16">
          <h2 className="heading lg:text-2xl sm:text-3xl text-2xl font-bold text-center mb-8 xl:mb-16">
            <FontAwesomeIcon icon={faLaptopCode} size="2xl" style={{ color: "#fafafa" }} />
            Skills & <span>Abilities</span>
          </h2>

          <div className="cardContent container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-8">
            <AnimatePresence>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  className="hovercontent flex flex-col items-center p-6 md:p-2 dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-violet-600"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }} // Hover effect
                  whileTap={{ scale: 0.9 }} // Click effect
                >
                  {/* Wave effect using rotation */}
                  <motion.img
                    key={skill.image}
                    className="text-xl md:text-base mb-4 lg:mb-0 rounded-full"
                    src={skill.image}
                    alt="Icon"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1, rotate: [0, -5, 5, 0] } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                  />

                  {/* Bounce effect for text */}
                  <motion.h3
                    key={skill.title}
                    className="text-xl lg:text-sm font-bold lg:font-normal"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1, y: [0, -5, 0] } : { opacity: 0 }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                  >
                    {skill.title}
                  </motion.h3>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;



