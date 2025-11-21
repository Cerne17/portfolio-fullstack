import { IconType } from "react-icons";

export interface IProject {
  id: number;
  title: string;
  description: string;
  techStack: string[]; // keys for skill pills
  repoUrl?: string;
  demoUrl?: string;
  image?: string; // path to image
}
