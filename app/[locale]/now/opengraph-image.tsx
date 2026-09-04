import { renderOg, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "What Miguel Cerne is doing right now";

const copy = {
  title: { en: "Now", pt: "Agora" },
  subtitle: {
    en: "What I'm doing right now.",
    pt: "O que estou fazendo agora.",
  },
};

export default async function Image({ params }: { params: Promise<{ locale: "en" | "pt" }> }) {
  const { locale } = await params;
  return renderOg(copy.title[locale], copy.subtitle[locale]);
}
