import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import "katex/dist/katex.min.css";
import { RunnableCode } from "./RunnableCode";

const VIDEO_EXTENSIONS = [".mp4", ".webm", ".mov", ".ogg"];

function isVideo(src?: string) {
  if (!src) return false;
  return VIDEO_EXTENSIONS.some((ext) => src.toLowerCase().endsWith(ext));
}

interface CodeBlockInfo {
  isLive: boolean;
  raw: string;
}

// A plain ```js fenced block whose first line is exactly `// live` gets a
// Run button + sandboxed iframe below it. Detected on the raw markdown
// (not the highlighted tree, which no longer has the source as plain
// text) and correlated to <pre> elements by document order.
function findCodeBlocks(markdown: string): CodeBlockInfo[] {
  const blocks: CodeBlockInfo[] = [];
  const regex = /```(\w+)?\n([\s\S]*?)```/g;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(markdown))) {
    const lang = match[1] ?? "";
    const body = match[2].replace(/\n$/, "");
    blocks.push({ isLive: lang === "js" && body.startsWith("// live"), raw: body });
  }
  return blocks;
}

export function MarkdownBody({ content }: { content: string }) {
  const codeBlocks = findCodeBlocks(content);
  let codeBlockIndex = 0;

  return (
    <div className="article-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeRaw, rehypeKatex, rehypeHighlight]}
        components={{
          img({ src, alt }) {
            const url = typeof src === "string" ? src : "";
            return (
              <figure style={{ margin: "32px 0" }}>
                {isVideo(url) ? (
                  <video controls style={{ maxWidth: "100%", borderRadius: "var(--radius-md)" }}>
                    <source src={url} />
                  </video>
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={url}
                    alt={alt ?? ""}
                    loading="lazy"
                    style={{ maxWidth: "100%", borderRadius: "var(--radius-md)", display: "block" }}
                  />
                )}
                {alt && (
                  <figcaption
                    style={{
                      marginTop: 8,
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.8rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    {alt}
                  </figcaption>
                )}
              </figure>
            );
          },
          a({ href, children }) {
            const external = /^https?:\/\//.test(href ?? "");
            return (
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                style={{ color: "var(--heartwood)" }}
              >
                {children}
              </a>
            );
          },
          pre({ children, ...props }) {
            const block = codeBlocks[codeBlockIndex++];
            if (block?.isLive) {
              return <RunnableCode code={block.raw} />;
            }
            return <pre {...props}>{children}</pre>;
          },
          blockquote({ children }) {
            return (
              <blockquote
                style={{
                  borderLeft: "2px solid var(--heartwood)",
                  margin: "24px 0",
                  padding: "4px 0 4px 16px",
                  color: "var(--text-muted)",
                }}
              >
                {children}
              </blockquote>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
