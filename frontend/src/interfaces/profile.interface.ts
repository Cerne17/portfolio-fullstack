import { IconType } from "react-icons";

export interface ISocialLink {
  platform: string;
  url: string;
  icon: IconType;
  ariaLabel: string;
}

export interface IProfile {
  name: string;
  role: string;
  intro: string;
  summary: string[]; // Array of HTML strings
  interests: string[]; // Array of HTML strings
  socialLinks: ISocialLink[];
}

export interface IEducation {
  id: number;
  degree: string;
  institution: string;
  location: string;
  graduation: string;
}

export interface ICertification {
  id: number;
  title: string;
  issuer: string;
  year: string;
}
