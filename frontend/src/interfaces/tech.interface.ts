import type { IconType } from "react-icons";

export interface ITech {
  id: number;
  title: string;
  icon: IconType;
  stack: "frontend" | "backend" | "datascience";
}
