import { getPosts } from "@/lib/content";
import { WritingPageContent } from "@/components/WritingPageContent";

export default function WritingPage() {
  const posts = getPosts();
  return <WritingPageContent posts={posts} />;
}
