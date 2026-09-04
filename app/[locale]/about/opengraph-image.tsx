import { renderOg, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "About Miguel Cerne";

const copy = {
  title: { en: "About", pt: "Sobre" },
  subtitle: {
    en: "A software engineer who thinks like a systems designer.",
    pt: "Um engenheiro de software que pensa como um projetista de sistemas.",
  },
};

export default async function Image({ params }: { params: Promise<{ locale: "en" | "pt" }> }) {
  const { locale } = await params;
  return renderOg(copy.title[locale], copy.subtitle[locale]);
}
