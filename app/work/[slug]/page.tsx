import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/content";
import { ProjectPageContent } from "@/components/ProjectPageContent";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return <ProjectPageContent project={project} />;
}
