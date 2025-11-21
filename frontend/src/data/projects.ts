import { IProject } from "../interfaces/projects.interface";
import {
  SiReact,
  SiExpress,
  SiNodedotjs,
  SiFigma,
  SiPython,
  SiTypescript,
  SiUml,
  SiGooglegemini
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
    title: "ProjetoNotas",
    description: "Developed during the \"Imersão IA\" (a collaboration between Alura and Google), this project solves a classic academic pain point: converting chaotic handwritten notes into structured study materials. Moving beyond traditional Optical Character Recognition (OCR), ProjetoNotas leverages the multimodal capabilities of Google's Gemini API. The system doesn't just \"read\" text; it interprets the semantic structure of handwritten pages to synthesize a clean, logically formatted PDF. It represents a shift from analog chaos to digital order, demonstrating practical product sense and advanced prompt engineering.",
    techStack: ["Python", "Gemini"],
    // demoUrl: "https://www.example.com",
    repoUrl: "https://github.com/Cerne17/ProjetoNotas",
    image: "ProjetoNotasBanner.png",
  },
  {
    id: 3,
    title: "Design-Patterns",
    description: "A technical exploration of classical software architecture applied to the modern web ecosystem. This project bridges the gap between theoretical OOP and practical TypeScript development. It addresses the specific challenges of implementing strict contracts and polymorphic behavior in a JavaScript-based environment. By moving beyond simple scripting to architected solutions, this repository serves as a reference for cleaner, modular, and testable codebases.",
    techStack: ["Typescript", "Uml"],
    // demoUrl: "https://www.example.com",
    repoUrl: "https://github.com/Cerne17/Design-Patterns",
    image: "DesignPatternsBanner.png",
  },
];

export const projectSkills = {
  "React": { icon: SiReact, stack: "frontend" },
  "Express": { icon: SiExpress, stack: "backend" },
  "Node.js": { icon: SiNodedotjs, stack: "backend" },
  "Python": { icon: SiPython, stack: "backend" },
  "Typescript": { icon: SiTypescript, stack: "backend" },
  "Uml": { icon: SiUml, stack: "backend" },
  "Gemini": { icon: SiGooglegemini, stack: "datascience" },
  "Figma": { icon: SiFigma, stack: "frontend" }, // Assuming Figma is frontend/design
};

export default projects;
