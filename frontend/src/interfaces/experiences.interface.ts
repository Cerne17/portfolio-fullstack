import type { ITech } from "./tech.interface";

export interface IExperience {
  id: number;
  title: string;
  startMonth:
    | "Jan"
    | "Feb"
    | "Mar"
    | "Apr"
    | "May"
    | "Jun"
    | "Jul"
    | "Aug"
    | "Sep"
    | "Oct"
    | "Nov"
    | "Dec";
  startYear: number;
  endMonth:
    | "Jan"
    | "Feb"
    | "Mar"
    | "Apr"
    | "May"
    | "Jun"
    | "Jul"
    | "Aug"
    | "Sep"
    | "Oct"
    | "Nov"
    | "Dec";
  endYear: number;
  city: string;
  country: string;
  responsibilities: string[];
  highlights: string[];
  impact: string[];
  tech: ITech[];
}
