// Decap CMS preview template for the "writing" collection.
//
// This reuses components/MarkdownBody.tsx — the exact same rendering
// pipeline (react-markdown + remark-gfm + remark-math + rehype-katex +
// rehype-highlight) as the live site — so the CMS preview and the
// published article can never drift apart. One implementation, two
// call sites: the Next.js server component, and this bundle.
//
// Decap exposes its own `createClass`/`h` globals for authoring preview
// templates without a bundler. We use those for the outer shell (so it
// renders inside Decap's own React tree), but mount MarkdownBody through
// our own bundled React root into a plain DOM node — this avoids ever
// mixing two different React copies in one component tree.

import React from "react";
import { createRoot, Root } from "react-dom/client";
import katex from "katex";
import { MarkdownBody } from "../components/MarkdownBody";

declare const CMS: {
  registerPreviewTemplate: (name: string, component: unknown) => void;
  registerEditorComponent: (component: Record<string, unknown>) => void;
};
declare const createClass: (spec: Record<string, unknown>) => unknown;
declare const h: (
  tag: string | unknown,
  props?: Record<string, unknown> | null,
  ...children: unknown[]
) => unknown;

interface ImmutableList<T> {
  size: number;
  get(index: number): T;
  map<U>(fn: (item: T, index: number) => U): { toArray(): U[] };
}

interface ImmutableMap {
  getIn(path: string[]): unknown;
  get(key: string): unknown;
}

interface PreviewProps {
  entry: ImmutableMap;
  getAsset: (path: string) => { toString(): string };
}

// Resolve any markdown image reference that points at the media folder
// through Decap's asset resolver, so images uploaded but not yet
// published still show up in the preview instead of 404ing.
function resolveAssetPaths(markdown: string, getAsset: PreviewProps["getAsset"]): string {
  return markdown.replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, (match, alt, src) => {
    if (/^https?:\/\//.test(src)) return match;
    try {
      return `![${alt}](${getAsset(src).toString()})`;
    } catch {
      return match;
    }
  });
}

const WritingPreview = createClass({
  _el: null as HTMLDivElement | null,
  _root: null as Root | null,

  componentDidMount() {
    this._mount();
  },
  componentDidUpdate() {
    this._mount();
  },
  componentWillUnmount() {
    if (this._root) this._root.unmount();
  },

  _mount() {
    const props = this.props as PreviewProps;
    const rawBody = (props.entry.getIn(["data", "body"]) as string) || "";
    const body = resolveAssetPaths(rawBody, props.getAsset);
    if (!this._el) return;
    if (!this._root) this._root = createRoot(this._el);
    this._root.render(React.createElement(MarkdownBody, { content: body }));
  },

  render() {
    const props = this.props as PreviewProps;
    const entry = props.entry;
    const title = (entry.getIn(["data", "title"]) as string) || "";
    const dek = (entry.getIn(["data", "dek"]) as string) || "";
    const lang = (entry.getIn(["data", "lang"]) as string) || "";
    const cover = entry.getIn(["data", "cover"]) as string | undefined;
    const citations = entry.getIn(["data", "citations"]) as ImmutableList<ImmutableMap> | undefined;

    const coverUrl = cover ? props.getAsset(cover).toString() : null;

    return h(
      "div",
      { style: { maxWidth: 720, margin: "0 auto", padding: "24px", fontFamily: "system-ui, sans-serif" } },
      h(
        "div",
        { style: { fontFamily: "ui-monospace, monospace", fontSize: "0.8rem", color: "#8c3b24", marginBottom: 12 } },
        lang
      ),
      h("h1", { style: { fontSize: "2rem", fontWeight: 700, margin: "0 0 12px" } }, title),
      h("p", { style: { fontSize: "1.1rem", color: "#5a5852", margin: "0 0 24px" } }, dek),
      coverUrl
        ? h("img", { src: coverUrl, style: { width: "100%", borderRadius: 6, margin: "0 0 24px", display: "block" } })
        : null,
      h("div", { ref: (el: HTMLDivElement | null) => { this._el = el; }, className: "article-body" }),
      citations && citations.size > 0
        ? h(
            "div",
            { style: { marginTop: 40, paddingTop: 24, borderTop: "1px solid #d8d5cc" } },
            h("strong", { style: { fontSize: "0.8rem", textTransform: "uppercase", color: "#8c3b24" } }, "References"),
            h(
              "ol",
              { style: { marginTop: 12 } },
              citations
                .map((c, i) =>
                  h(
                    "li",
                    { key: i, style: { marginBottom: 6 } },
                    h("a", { href: c.get("url") as string, target: "_blank" }, c.get("label") as string)
                  )
                )
                .toArray()
            )
          )
        : null
    );
  },
});

CMS.registerPreviewTemplate("writing", WritingPreview);

// Decap's markdown widget has no math node type — display equations are
// just inline text to it, so its Slate<->markdown round-trip (remark's
// CommonMark emphasis rules) can misparse underscores/brackets inside
// $$...$$ and re-serialize them escaped, corrupting the LaTeX. Registering
// the whole $$...$$ block as an atomic editor component makes Decap treat
// its body as an opaque string: fromBlock/toBlock read and write it
// verbatim, so it's never handed to the inline emphasis/link tokenizer.
// This only covers display (block) math on its own paragraph — inline
// $...$ mixed into prose is still a plain text run and isn't protected;
// switch that field to raw Markdown mode for inline-math-heavy edits.
CMS.registerEditorComponent({
  id: "math-block",
  label: "Math (display)",
  fields: [{ name: "body", label: "LaTeX", widget: "string", default: "" }],
  pattern: /^\s*\$\$\s*\n?([\s\S]*?)\n?\s*\$\$\s*$/,
  fromBlock: (match: RegExpMatchArray) => ({ body: match[1].trim() }),
  toBlock: (obj: { body: string }) => `$$\n${obj.body}\n$$`,
  toPreview: (obj: { body: string }) => {
    let html: string;
    try {
      html = katex.renderToString(obj.body, { displayMode: true, throwOnError: false });
    } catch {
      html = `$$${obj.body}$$`;
    }
    return h("div", { style: { padding: "8px 0" }, dangerouslySetInnerHTML: { __html: html } });
  },
});
