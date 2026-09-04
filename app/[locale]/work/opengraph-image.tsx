import { renderOg, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Miguel Cerne's work";

const copy = {
  title: { en: "All work", pt: "Todos os projetos" },
  subtitle: {
    en: "Data, finance, and systems design projects.",
    pt: "Projetos de dados, finanças e design de sistemas.",
  },
};

export default async function Image({ params }: { params: Promise<{ locale: "en" | "pt" }> }) {
  const { locale } = await params;
  return renderOg(copy.title[locale], copy.subtitle[locale]);
}
