import { renderOg, ogSize, ogContentType } from "@/lib/og";
import { getProjectBySlug } from "@/lib/content";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Project by Miguel Cerne";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: "en" | "pt"; slug: string }>;
}) {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);
  return renderOg(project?.title ?? "cerne.pro", project?.thesis[locale]);
}
