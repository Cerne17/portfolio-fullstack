import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/content";
import { ArticlePageContent } from "@/components/ArticlePageContent";
import { MarkdownBody } from "@/components/MarkdownBody";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <ArticlePageContent post={post}>
      <MarkdownBody content={post.body} />
    </ArticlePageContent>
  );
}
