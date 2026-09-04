import { renderOg, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Writing by Miguel Cerne";

const copy = {
  title: { en: "Writing", pt: "Textos" },
  subtitle: {
    en: "Notes on systems, data, and finance.",
    pt: "Notas sobre sistemas, dados e finanças.",
  },
};

export default async function Image({ params }: { params: Promise<{ locale: "en" | "pt" }> }) {
  const { locale } = await params;
  return renderOg(copy.title[locale], copy.subtitle[locale]);
}
