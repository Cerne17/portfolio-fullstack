import { getHeroProjects, getSupportingProjects } from "@/lib/content";
import { WorkPageContent } from "@/components/WorkPageContent";

export default function WorkPage() {
  const heroProjects = getHeroProjects();
  const supportingProjects = getSupportingProjects();
  return <WorkPageContent heroProjects={heroProjects} supportingProjects={supportingProjects} />;
}
