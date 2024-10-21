import { useSkills } from "../Context/SkillsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  const skills = useSkills();

  return (
    <section id="skills" className="skills">
      <div className="xl:pt-16 xl:px-4 lg:pt-0 mt-12 xl:mb-16">
        <h2 className="heading lg:text-2xl sm:text-3xl text-2xl font-bold text-center mb-8 xl:mb-16">
          <FontAwesomeIcon
            icon={faLaptopCode}
            size="2xl"
            style={{ color: "#fafafa" }}
          />
          Skills & <span>Abilities</span>
        </h2>
        <div className="cardContent container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg-xl:grid-cols-5 lg:grid-cols-3 lg:gap-8 xl:gap-10 xl:grid-cols-5 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="hovercontent flex flex-col items-center p-6 md:p-2 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-violet-600 "
            >
              <img
                className="text-xl md:text-base mb-4 lg:mb-0 rounded-full"
                src={skill.image}
                alt="Icon"
              />
              <h3 className="text-xl lg:text-sm font-bold lg:font-normal">{skill.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
