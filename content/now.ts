import { Bilingual } from "@/lib/types";

export interface NowEntry {
  date: string;
  line: Bilingual;
}

export const nowEntries: NowEntry[] = [
  {
    date: "2026 · Aug",
    line: {
      en: "Working full-time on the data pipeline rebuild at JGP Crédito — moving a batch ETL to an event-driven pattern without breaking anything downstream.",
      pt: "Trabalhando na reconstrução do pipeline de dados na JGP Crédito — migrando um ETL em lote para um padrão orientado a eventos sem quebrar nada rio abaixo.",
    },
  },
  {
    date: "2026 · Jun",
    line: {
      en: "Wrapped the walk-forward validation harness for NeuraTrade. Writing up the methodology so it's reproducible by someone other than me.",
      pt: "Terminei o arcabouço de validação walk-forward do NeuraTrade. Escrevendo a metodologia para ser reproduzível por outra pessoa além de mim.",
    },
  },
  {
    date: "2026 · Mar",
    line: {
      en: "Started at JGP Crédito as a Software Engineering Intern, on infrastructure for financial-markets data.",
      pt: "Comecei na JGP Crédito como estagiário de Engenharia de Software, na infraestrutura de dados de mercado.",
    },
  },
  {
    date: "2025 · Nov",
    line: {
      en: "Shipped the MVP for Olha o Pesado — an autonomous-robot project built around a decoupled observer-pattern core.",
      pt: "Lancei o MVP do Olha o Pesado — um projeto de robô autônomo construído sobre um núcleo desacoplado em observer pattern.",
    },
  },
];

export const nowIntro = {
  eyebrow: { en: "// now", pt: "// agora" },
  heading: { en: "What I'm doing right now.", pt: "O que estou fazendo agora." },
  sub: {
    en: "A running log, in reverse-chronological order. Updated when something actually changes — not on a schedule.",
    pt: "Um log contínuo, em ordem cronológica reversa. Atualizado quando algo realmente muda — não numa agenda fixa.",
  },
} satisfies Record<string, Bilingual>;
