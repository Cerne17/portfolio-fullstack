import type { ITech } from "./tech.interface";

export interface IExperience {
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  responsibilities: string[];
  highlights: string[];
  impact: string[];
  tech: ITech[];
}
