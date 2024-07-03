import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import './styles/index.css'
import { DarkModeProvider } from "./Context/DarkModeContext.jsx";
import { SkillsContext } from "./Context/SkillsContext.jsx";
import { ProjectContext } from "./Context/ProjectsContext.jsx";
import ExperienceContext from "./Context/ExperienceContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeProvider>
      <SkillsContext>
        <ProjectContext>
          <ExperienceContext>
            <App />
          </ExperienceContext>
        </ProjectContext>
      </SkillsContext>
    </DarkModeProvider>
  </React.StrictMode>
);
