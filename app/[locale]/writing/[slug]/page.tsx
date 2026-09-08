import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/content";
import { ArticlePageContent } from "@/components/ArticlePageContent";
import { MarkdownBody, extractHeadings, renderHeadingHtml } from "@/components/MarkdownBody";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  // Computed server-side (not inside the client ArticlePageContent) so the
  // TOC's KaTeX rendering never pulls katex into the client bundle.
  const headings = extractHeadings(post.body)
    .filter((h) => h.level === 2 || h.level === 3)
    .map((h) => ({ id: h.id, level: h.level, html: renderHeadingHtml(h.text) }));

  return (
    <ArticlePageContent post={post} headings={headings}>
      <MarkdownBody content={post.body} />
    </ArticlePageContent>
  );
}
