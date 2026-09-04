import { Bilingual } from "./types";

export const links = {
  linkedin: "https://www.linkedin.com/in/miguelcerne/",
  github: "https://github.com/Cerne17",
  email: "miguelcerne.dev@gmail.com",
};

export const ui = {
  navWork: { en: "Work", pt: "Projetos" },
  navAbout: { en: "About", pt: "Sobre" },
  navNow: { en: "Now", pt: "Agora" },
  navWriting: { en: "Writing", pt: "Textos" },
  ctaLinkedin: { en: "Message me on LinkedIn", pt: "Fala comigo no LinkedIn" },
  ctaGithub: { en: "See the code", pt: "Ver o código" },
  ctaEmail: { en: "Email me", pt: "Me manda um e-mail" },
  ctaProject: { en: "View project", pt: "Ver projeto" },
  ctaResume: { en: "Résumé (PDF)", pt: "Currículo (PDF)" },
  toggleTheme: { en: "Toggle theme", pt: "Alternar tema" },
} satisfies Record<string, Bilingual>;

export const meta = {
  home: {
    title: {
      en: "Miguel Cerne — Software engineer for data & finance systems",
      pt: "Miguel Cerne — Engenheiro de software para sistemas de dados e finanças",
    },
    description: {
      en: "I build reliable, data-driven systems for finance. ECE at UFRJ, software engineering intern at JGP Crédito.",
      pt: "Construo sistemas confiáveis e orientados a dados para finanças. Eng. de Computação na UFRJ, estagiário de engenharia de software na JGP Crédito.",
    },
  },
} satisfies Record<string, { title: Bilingual; description: Bilingual }>;

export const footerBio: Bilingual = {
  en: "Miguel Cerne — software engineer for data & finance systems. Rio de Janeiro.",
  pt: "Miguel Cerne — engenheiro de software para sistemas de dados e finanças. Rio de Janeiro.",
};

export const contactBand = {
  eyebrow: { en: "// get in touch", pt: "// fala comigo" },
  heading: {
    en: "Building something where data, finance, and reliability matter? Let's talk.",
    pt: "Construindo algo onde dados, finanças e confiabilidade importam? Bora conversar.",
  },
} satisfies { eyebrow: Bilingual; heading: Bilingual };
