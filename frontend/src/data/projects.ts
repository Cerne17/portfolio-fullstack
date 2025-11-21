import { IProject } from "../interfaces/projects.interface";
import {
  SiReact,
  SiExpress,
  SiNodedotjs,
  SiFigma,
} from "react-icons/si";

const projects: IProject[] = [
  {
    id: 1,
    title: "Project A",
    description: "This is a project made to learn the latest languages by building an app.",
    techStack: ["React", "Express", "Node.js"],
    demoUrl: "https://www.example.com",
    repoUrl: "https://www.github.com",
    image: "history.png",
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
  "Figma": { icon: SiFigma, stack: "frontend" }, // Assuming Figma is frontend/design
};

export default projects;
