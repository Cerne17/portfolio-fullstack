import {
  SiReact,
  SiExpress,
  SiNodedotjs,
  SiFigma,
  SiPython,
  SiTypescript,
  SiUml,
  SiGooglegemini,
  SiNextdotjs,
  SiShadcnui,
  SiTailwindcss,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiSupabase,
  SiVercel,
  SiJest,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiJupyter,
  SiAxios,
  SiVite,
  SiMongoose,
  SiOpencv,
  SiDavinciresolve,
} from "react-icons/si";

export const frontendSkills = [
  {
    "id": 1,
    "title": "Next.js",
    "icon": SiNextdotjs
  },
  {
    "id": 2,
    "title": "React",
    "icon": SiReact
  },
  {
    "id": 3,
    "title": "TailwindCSS",
    "icon": SiTailwindcss
  },
  {
    "id": 4,
    "title": "Shadcn",
    "icon": SiShadcnui
  }
];

export const backendSkills = [
  {
    "id": 5,
    "title": "Node.js",
    "icon": SiNodedotjs
  },
  {
    "id": 6,
    "title": "Express.js",
    "icon": SiExpress
  },
  {
    "id": 7,
    "title": "NestJS",
    "icon": SiNestjs
  },
  {
    "id": 8,
    "title": "PostgreSQL",
    "icon": SiPostgresql
  },
  {
    "id": 9,
    "title": "MongoDB",
    "icon": SiMongodb
  },
  {
    "id": 10,
    "title": "Supabase",
    "icon": SiSupabase
  },
  {
    "id": 11,
    "title": "Vercel",
    "icon": SiVercel
  },
  {
    "id": 12,
    "title": "Jest",
    "icon": SiJest
  }
];

export const datascienceSkills = [
  {
    "id": 13,
    "title": "Python",
    "icon": SiPython
  },
  {
    "id": 14,
    "title": "Pandas",
    "icon": SiPandas
  },
  {
    "id": 15,
    "title": "Scikit-learn",
    "icon": SiScikitlearn
  },
  {
    "id": 1,
    "title": "Tensorflow",
    "icon": SiTensorflow
  },
  {
    "id": 16,
    "title": "MATLAB",
    "icon": SiJupyter // Using SiJupyter as fallback for SiMatlab
  }
];

export const projectSkills = {
  "React": { icon: SiReact, stack: "frontend" },
  "Express": { icon: SiExpress, stack: "backend" },
  "Node.js": { icon: SiNodedotjs, stack: "backend" },
  "Python": { icon: SiPython, stack: "backend" },
  "Typescript": { icon: SiTypescript, stack: "backend" },
  "Uml": { icon: SiUml, stack: "backend" },
  "Gemini": { icon: SiGooglegemini, stack: "datascience" },
  "Figma": { icon: SiFigma, stack: "frontend" },
  "Next.js": { icon: SiNextdotjs, stack: "frontend" },
  "TailwindCSS": { icon: SiTailwindcss, stack: "frontend" },
  "Shadcn": { icon: SiShadcnui, stack: "frontend" },
  "NestJS": { icon: SiNestjs, stack: "backend" },
  "PostgreSQL": { icon: SiPostgresql, stack: "backend" },
  "MongoDB": { icon: SiMongodb, stack: "backend" },
  "Supabase": { icon: SiSupabase, stack: "backend" },
  "Vercel": { icon: SiVercel, stack: "backend" },
  "Jest": { icon: SiJest, stack: "backend" },
  "Pandas": { icon: SiPandas, stack: "datascience" },
  "Scikit-learn": { icon: SiScikitlearn, stack: "datascience" },
  "Tensorflow": { icon: SiTensorflow, stack: "datascience" },
  "MATLAB": { icon: SiJupyter, stack: "datascience" },
  "Axios": { icon: SiAxios, stack: "frontend" },
  "Vite": { icon: SiVite, stack: "frontend" },
  "Mongoose": { icon: SiMongoose, stack: "backend" },
  "OpenCV": { icon: SiOpencv, stack: "datascience" },
  "DaVinci Resolve": { icon: SiDavinciresolve, stack: "backend" },
};
