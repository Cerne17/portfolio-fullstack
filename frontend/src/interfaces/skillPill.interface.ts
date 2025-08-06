import { IconType } from "react-icons";

export interface skillPill {
  id: number;
  icon: IconType;
  title: string;
  stack: "frontend" | "backend" | "datascience";
}
