import { React, createContext, useContext } from "react";

export const ExperienceDataContext = createContext();

export const useExperience = () => useContext(ExperienceDataContext);

function ExperienceContext({ children }) {
  const experiences = [
    {
      id: 1,
      title: "Self Employed",
      role: "MERN Stack Developer | Professional Development",
      period: "Jul 2023 - Present",
    },
    {
      id: 2,
      title: "Ultratech Cement Limited",
      role: "Asst Application Engineer | Full-time",
      period: "Jul 2022 - Nov 2022",
    },
    {
      id: 3,
      title: "Sri Mathi Builders",
      role: "Site Engineer | Full-time",
      period: "Dec 2021 - May 2022",
    },
    {
      id: 4,
      title: "TRL Medical College Building",
      role: " Technical Assistant | Full-time",
      period: "Dec 2020 - Nov 2021",
    },
  ];

  return (
    <ExperienceDataContext.Provider value={{ experiences }}>
      {children}
    </ExperienceDataContext.Provider>
  );
}
export default ExperienceContext;
