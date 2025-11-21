import { IProject } from "../interfaces/projects.interface";
import {
  SiReact,
  SiExpress,
  SiNodedotjs,
  SiFigma,
  SiPython
} from "react-icons/si";

const projects: IProject[] = [
  {
    id: 1,
    title: "Database Population",
    description: "Designed to solve the challenge of populating complex relational schemas, this project is a fully automated data pipeline built with Python. It generates realistic synthetic data by orchestrating inputs from the 'Faker' library and consuming official Brazilian government APIs. The system creates coherent, interconnected entities (such as user profiles, valid addresses, and corporate structures) streamlining the process of seeding databases for testing and development.",
    techStack: ["Python"],
    // demoUrl: "https://www.example.com",
    repoUrl: "https://github.com/Cerne17/Database-Population/tree/main",
    image: "DatabasePopulationBanner.png",
  },
  {
    id: 2,
    title: "Project B",
    description: "This is a project made to learn the latest languages by building an app.",
    techStack: ["React", "Express", "Node.js", "Figma"],
    demoUrl: "https://www.example.com",
    repoUrl: "https://www.github.com",
    image: "history.png",
  },
  {
    id: 3,
    title: "Project C",
    description: "This is a project made to learn the latest languages by building an app.",
    techStack: ["React", "Express", "Node.js"],
    demoUrl: "https://www.example.com",
    repoUrl: "https://www.github.com",
    image: "history.png",
  },
];

export const projectSkills = {
  "React": { icon: SiReact, stack: "frontend" },
  "Express": { icon: SiExpress, stack: "backend" },
  "Node.js": { icon: SiNodedotjs, stack: "backend" },
  "Python": { icon: SiPython, stack: "backend" },
  "Figma": { icon: SiFigma, stack: "frontend" }, // Assuming Figma is frontend/design
};

export default projects;
