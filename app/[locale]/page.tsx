import { getHeroProjects, getSupportingProjects } from "@/lib/content";
import { HomePageContent } from "@/components/HomePageContent";

export default function HomePage() {
  const heroProjects = getHeroProjects();
  const supportingProjects = getSupportingProjects();
  return <HomePageContent heroProjects={heroProjects} supportingProjects={supportingProjects} />;
}
