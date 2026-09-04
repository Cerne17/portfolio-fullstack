import { renderOg, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Miguel Cerne — cerne.pro";

const copy = {
  title: {
    en: "I build data systems for finance.",
    pt: "Construo sistemas de dados para finanças.",
  },
  subtitle: {
    en: "Software engineer for data & finance systems.",
    pt: "Engenheiro de software para sistemas de dados e finanças.",
  },
};

export default async function Image({ params }: { params: Promise<{ locale: "en" | "pt" }> }) {
  const { locale } = await params;
  return renderOg(copy.title[locale], copy.subtitle[locale]);
}
