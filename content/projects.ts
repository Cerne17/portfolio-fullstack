import { Bilingual } from "@/lib/types";

export type Pillar = "data-finance" | "system-design" | "full-stack" | "algorithms";

export interface Project {
  slug: string;
  title: string;
  pillar: Pillar;
  pillarLabel: Bilingual;
  year: string;
  role: Bilingual;
  stack: string[];
  hero: boolean;
  order: number;
  repo: string;
  demo?: string;
  thesis: Bilingual;
  keyDecision: Bilingual;
  lede?: Bilingual;
}

export const projects: Project[] = [
  {
    slug: "neuratrade",
    title: "NeuraTrade",
    pillar: "data-finance",
    pillarLabel: { en: "data · finance", pt: "dados · finanças" },
    year: "2026",
    role: {
      en: "Co-author (with Ana Beatriz)",
      pt: "Coautor (com Ana Beatriz)",
    },
    stack: ["Python", "TensorFlow/Keras", "pandas", "scikit-learn", "pytest"],
    hero: true,
    order: 1,
    repo: "https://github.com/Cerne17/NeuraTrade",
    thesis: {
      en: "Unsupervised anomaly detection over 14 years of B3 equities with an LSTM-autoencoder, built so the methodology actually holds up.",
      pt: "Detecção não supervisionada de anomalias em 14 anos de ações da B3 com um LSTM-autoencoder, construído para a metodologia se sustentar de verdade.",
    },
    keyDecision: {
      en: "Every decision is a logged ADR (18 of them, including ideas rejected with proof — Transformers, Optuna, weight decay), guarded by 32 tests and walk-forward validation against temporal leakage.",
      pt: "Cada decisão é um ADR registrado (18 deles, incluindo ideias rejeitadas com evidência — Transformers, Optuna, weight decay), com 32 testes e validação walk-forward contra vazamento temporal.",
    },
    lede: {
      en: `Most deep-learning anomaly-detection work targets US markets and crypto. NeuraTrade aims it at Brazilian equities — PETR4, VALE3, AMER3, ITUB4 — training only on 2010–2019 "normality" and flagging the years after by reconstruction error, then cross-checking each hit against a timeline of real Brazilian market events.

The point wasn't a bigger model; it was a defensible one. Switching the error aggregation to max doubled recall (0.16 → 0.35) and raised precision (0.55 → 0.84). A conditional autoencoder conditioned on USD/BRL and the VIX separates systemic shocks (COVID-2020) from idiosyncratic ones (the Americanas collapse, 2023). And where ROC-AUC flattered the model at 0.84, PR-AUC exposed the real 0.15 on a rare class — so PR-AUC became the reported metric. Reproducible offline, fixed seed, one command.`,
      pt: `A maior parte da literatura de detecção de anomalias com deep learning mira mercados dos EUA e cripto. O NeuraTrade aponta para ações brasileiras — PETR4, VALE3, AMER3, ITUB4 — treinando só na "normalidade" de 2010–2019 e sinalizando os anos seguintes pelo erro de reconstrução, cruzando cada anomalia com uma linha do tempo de eventos reais do mercado brasileiro.

O objetivo não era um modelo maior, e sim um modelo defensável. Trocar a agregação do erro para max dobrou o recall (0,16 → 0,35) e elevou a precisão (0,55 → 0,84). Um autoencoder condicional em USD/BRL e VIX separa choques sistêmicos (COVID-2020) dos idiossincráticos (o caso Americanas, 2023). E onde a ROC-AUC agradava com 0,84, a PR-AUC expôs o 0,15 real numa classe rara — por isso a PR-AUC virou a métrica reportada. Reprodutível offline, seed fixa, um comando.`,
    },
  },
  {
    slug: "olha-o-pesado",
    title: "Olha o Pesado",
    pillar: "system-design",
    pillarLabel: { en: "system design", pt: "design de sistemas" },
    year: "2026",
    role: {
      en: "Co-author (with João Victor, Umberto)",
      pt: "Coautor (com João Victor, Umberto)",
    },
    stack: ["Python", "Observer pattern", "computer vision"],
    hero: true,
    order: 2,
    repo: "https://github.com/Cerne17/oop-olha-o-pesado",
    thesis: {
      en: "An autonomous-robot MVP built on a clean observer-pattern core, so vision, control, and results stay decoupled.",
      pt: "Um MVP de robô autônomo sobre um núcleo em observer pattern, mantendo visão, controle e resultado desacoplados.",
    },
    keyDecision: {
      en: "Signals are typed — Frame, Control, Result — so each subsystem reacts to events without knowing about the others. Architecture as the feature.",
      pt: "Os sinais são tipados — Frame, Control, Result — então cada subsistema reage a eventos sem conhecer os demais. A arquitetura como o diferencial.",
    },
    lede: {
      en: "Robots are where sloppy coupling goes to die: vision, control, and actuation change at different rates and can't afford to block each other. Olha o Pesado is an autonomous-robot MVP whose core is an observer architecture — typed Frame, Control, and Result signals flow through a single event backbone, and each subsystem subscribes to what it needs. Adding a behavior means adding an observer, not rewiring the robot. It's the same instinct behind the finance work: design the system so the hard parts stay isolated and testable.",
      pt: "Robôs são onde acoplamento mal feito morre: visão, controle e atuação mudam em ritmos diferentes e não podem travar uns aos outros. O Olha o Pesado é um MVP de robô autônomo cujo núcleo é uma arquitetura de observadores — sinais tipados de Frame, Control e Result circulam por um único backbone de eventos, e cada subsistema assina o que precisa. Adicionar um comportamento é adicionar um observador, não recablear o robô. É o mesmo instinto do trabalho com finanças: projetar o sistema para as partes difíceis ficarem isoladas e testáveis.",
    },
  },
  {
    slug: "snippet-vault",
    title: "SnippetVault",
    pillar: "full-stack",
    pillarLabel: { en: "full-stack", pt: "full-stack" },
    year: "2025–26",
    role: { en: "Solo", pt: "Solo" },
    stack: ["NestJS", "MongoDB", "React 19", "Vite", "Tailwind 4", "TanStack Query", "JWT"],
    hero: false,
    order: 3,
    repo: "https://github.com/Cerne17/SnippetVault",
    demo: "https://snippet-vault-backend.vercel.app",
    thesis: {
      en: "A deployed full-stack vault for code and prompt snippets — JWT auth, tagging, search, favorites.",
      pt: "Um cofre full-stack, já publicado, para snippets de código e prompts — auth JWT, tags, busca e favoritos.",
    },
    keyDecision: {
      en: 'Monorepo, serverless on Vercel, TypeScript end to end — the "I ship complete products" proof.',
      pt: 'Monorepo, serverless na Vercel, TypeScript de ponta a ponta — a prova de "eu entrego produtos completos".',
    },
  },
  {
    slug: "graph-theory-lib",
    title: "Graph Theory Library",
    pillar: "algorithms",
    pillarLabel: { en: "algorithms", pt: "algoritmos" },
    year: "2025–26",
    role: { en: "Solo", pt: "Solo" },
    stack: ["Python", "graph theory"],
    hero: false,
    order: 4,
    repo: "https://github.com/Cerne17/Teoria-dos-Grafos-COS232",
    thesis: {
      en: "A personal library of graph representations and algorithms, built from the ground up.",
      pt: "Uma biblioteca pessoal de representações e algoritmos de grafos, feita do zero.",
    },
    keyDecision: {
      en: "Ties to the graphs/optimization interests — foundations implemented, not imported.",
      pt: "Conecta com os interesses em grafos/otimização — fundamentos implementados, não importados.",
    },
  },
];

export const heroProjects = projects.filter((p) => p.hero).sort((a, b) => a.order - b.order);
export const supportingProjects = projects.filter((p) => !p.hero).sort((a, b) => a.order - b.order);

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
