import { renderOg, ogSize, ogContentType } from "@/lib/og";
import { getPostBySlug } from "@/lib/content";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Article by Miguel Cerne";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return renderOg(post?.title ?? "cerne.pro", post?.dek);
}
