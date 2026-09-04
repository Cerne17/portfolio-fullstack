export type PostLang = "EN" | "PT";

export interface Post {
  slug?: string;
  date: string;
  lang: PostLang;
  title: string;
  dek: string;
  body?: string[];
}

export const posts: Post[] = [
  {
    slug: "walk-forward-validation",
    date: "2026 · Jun",
    lang: "EN",
    title: "Walk-forward validation, or why your backtest is lying to you",
    dek: "Why standard cross-validation leaks time, and what the NeuraTrade methodology does about it.",
    body: [
      "Most backtests fail for a boring reason: the validation split doesn't respect time. A random k-fold shuffle lets a model trained on next week peek at last week's price move — and it will happily learn to \"predict\" it.",
      "For NeuraTrade, that meant rebuilding the split around a strict walk-forward scheme: train on a rolling window, test on the period immediately after it, then slide forward. No fold ever sees data from its own future.",
      "The harder part wasn't the split logic — it was proving the leakage was actually gone. That took 32 tests and 18 logged decision records, each one tying a modeling choice back to why it doesn't reintroduce foresight.",
      "The result holds up under scrutiny, which is the only bar that matters when the thing being validated touches real capital.",
    ],
  },
  {
    date: "2026 · Feb",
    lang: "PT",
    title: "Observers em vez de if/else: o núcleo do Olha o Pesado",
    dek: "Como sinais tipados (Frame/Control/Result) deixam o robô extensível sem reescrever o núcleo.",
  },
  {
    date: "2025 · Oct",
    lang: "EN",
    title: 'Decision records: writing down the "why," not just the "what"',
    dek: "A lightweight format for logging non-obvious calls, and why it paid off on NeuraTrade.",
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}
