import { IconType } from "react-icons";

export interface skillPill {
  icon: IconType;
  title: string;
  stack: "frontend" | "backend" | "datascience";
}
