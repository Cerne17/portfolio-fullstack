import { renderOg, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Contact Miguel Cerne";

const copy = {
  title: { en: "Get in touch", pt: "Vamos falar" },
  subtitle: {
    en: "LinkedIn is fastest, but email works too.",
    pt: "O LinkedIn é o mais rápido, mas e-mail também funciona.",
  },
};

export default async function Image({ params }: { params: Promise<{ locale: "en" | "pt" }> }) {
  const { locale } = await params;
  return renderOg(copy.title[locale], copy.subtitle[locale]);
}
