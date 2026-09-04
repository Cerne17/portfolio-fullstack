# Content Inventory & Copy — cerne.pro

*Miguel Cerne · portfolio rebuild · doc 4 of 4*

Every string the site needs, in **EN** and **PT-BR**, grounded in what's actually in your
repos (explored Aug 2026). Register: sober, precise, confident (doc 1 §5). The `/now` page
is the one place a warmer tone is allowed. Drop these into the MDX content model from doc 3 §4.

---

## 0. Resolved contacts & links

| Item | Value |
|---|---|
| LinkedIn (primary CTA) | https://www.linkedin.com/in/miguelcerne/ |
| GitHub | https://github.com/Cerne17 |
| Email (primary) | miguelcerne.dev@gmail.com |
| Email (cc) | miguelcerne15@gmail.com |
| NeuraTrade | https://github.com/Cerne17/NeuraTrade |
| Olha o Pesado | https://github.com/Cerne17/oop-olha-o-pesado |
| SnippetVault | https://github.com/Cerne17/SnippetVault · demo: https://snippet-vault-backend.vercel.app |
| Graph library | https://github.com/Cerne17/Teoria-dos-Grafos-COS232 |

**Still open:** résumé PDF · whether JGP work can be named publicly · "book a call" tool (Cal.com/Calendly/skip).

---

## 1. Global UI strings

| Key | EN | PT-BR |
|---|---|---|
| nav.work | Work | Projetos |
| nav.about | About | Sobre |
| nav.now | Now | Agora |
| nav.blog | Writing | Textos |
| cta.linkedin | Message me on LinkedIn | Fala comigo no LinkedIn |
| cta.github | See the code | Ver o código |
| cta.email | Email me | Me manda um e-mail |
| cta.call | Book a call | Agendar uma call |
| cta.project | View project | Ver projeto |
| cta.resume | Résumé (PDF) | Currículo (PDF) |
| toggle.theme | Toggle theme | Alternar tema |
| toggle.lang | EN · PT | EN · PT |

---

## 2. Meta / SEO

- **Title (EN):** Miguel Cerne — Software engineer for data & finance systems
- **Title (PT):** Miguel Cerne — Engenheiro de software para sistemas de dados e finanças
- **Meta description (EN):** I build reliable, data-driven systems for finance. ECE at UFRJ, software engineering intern at JGP Crédito.
- **Meta description (PT):** Construo sistemas confiáveis e orientados a dados para finanças. Eng. de Computação na UFRJ, estagiário de engenharia de software na JGP Crédito.
- **OG image:** the growth-ring signature + name + one-line (doc 3 §10).

---

## 3. Home page

### 3.1 Hero
- **Eyebrow (mono):** `// core`
- **Headline (EN):** I build data systems for finance — the kind where being wrong is expensive.
- **Headline (PT):** Construo sistemas de dados para finanças — daqueles em que errar sai caro.
- **Sub (EN):** Software engineer working where software, data, and quantitative finance meet. Currently at JGP Crédito, on the infrastructure behind financial-markets data.
- **Sub (PT):** Engenheiro de software atuando onde software, dados e finanças quantitativas se encontram. Hoje na JGP Crédito, na infraestrutura por trás dos dados de mercado.
- **Primary CTA:** `cta.linkedin` · **Secondary:** `cta.github`

### 3.2 What I do
- **Eyebrow:** `// what I do` / `// o que eu faço`
- **Line (EN):** Three disciplines, one thesis: use data to solve finance problems, and engineer the systems that make the solution dependable.
- **Line (PT):** Três disciplinas, uma tese: usar dados para resolver problemas de finanças e engenheirar os sistemas que tornam a solução confiável.
- **Pillars:** `Software Engineering` · `Data Engineering` · `Quantitative Finance`
  (PT: `Engenharia de Software` · `Engenharia de Dados` · `Finanças Quantitativas`)

### 3.3 Selected work (hero projects)
- **Eyebrow:** `// rings` — *(the growth-ring device; projects are the rings laid down over time)*
- Intro (EN): Two projects that show the range — from a rigor-first ML pipeline for market anomalies to an event-driven robotics architecture.
- Intro (PT): Dois projetos que mostram o alcance — de um pipeline de ML voltado ao rigor para anomalias de mercado a uma arquitetura de robótica orientada a eventos.
- Cards: **NeuraTrade**, **Olha o Pesado** (full copy in §5).

### 3.4 Credibility strip
- **Line (EN):** Software Engineering Intern at **JGP Crédito** — building infrastructure for financial-markets data. Previously back-end at Fluxo Consultoria (NestJS, PostgreSQL).
- **Line (PT):** Estagiário de Engenharia de Software na **JGP Crédito** — construindo infraestrutura para dados de mercado. Antes, back-end na Fluxo Consultoria (NestJS, PostgreSQL).
- **Stack (restrained, not a dump):** TypeScript · Python · Node/NestJS · React · PostgreSQL · Docker
  *(If JGP naming isn't cleared, swap to: "a fintech, on financial-markets data infrastructure.")*

### 3.5 Now teaser
- Pulls the top line of `/now` (§8). Label: `Right now →` / `Agora →`.

### 3.6 Contact band
- **Heading (EN):** Building something where data, finance, and reliability matter? Let's talk.
- **Heading (PT):** Construindo algo onde dados, finanças e confiabilidade importam? Bora conversar.
- CTA stack in priority order: LinkedIn → GitHub → email → call.

### 3.7 Footer
- **Bio line (EN):** Miguel Cerne — software engineer for data & finance systems. Rio de Janeiro.
- **Bio line (PT):** Miguel Cerne — engenheiro de software para sistemas de dados e finanças. Rio de Janeiro.
- Locale note: `Rio de Janeiro · -22.9, -43.2`
- Optional easter egg: `芯` (*shin* — core) on hover over the logomark.

---

## 4. Project card fields (shared schema)

Each card: `title · pillar tag · year · role · stack · thesis (1 line) · key point · links`.
Pillar tags: `data · finance` / `system design` / `full-stack` / `algorithms`.

---

## 5. Project copy

### 5.1 NeuraTrade — HERO
- **Pillar:** `data · finance` · **Year:** 2026 · **Role:** Co-author (with Ana Beatriz)
- **Stack:** Python · TensorFlow/Keras · pandas · scikit-learn · pytest
- **Repo:** github.com/Cerne17/NeuraTrade · **Demo:** Streamlit sandbox (in-repo)
- **Thesis (EN):** Unsupervised anomaly detection over 14 years of B3 equities with an LSTM-autoencoder — built so the methodology actually holds up.
- **Thesis (PT):** Detecção não supervisionada de anomalias em 14 anos de ações da B3 com um LSTM-autoencoder — construído para a metodologia se sustentar de verdade.
- **Key point (EN):** Every decision is a logged ADR (18 of them, including ideas *rejected* with proof — Transformers, Optuna, weight decay), guarded by 32 tests and walk-forward validation against temporal leakage.
- **Key point (PT):** Cada decisão é um ADR registrado (18 deles, incluindo ideias *rejeitadas* com evidência — Transformers, Optuna, weight decay), com 32 testes e validação walk-forward contra vazamento temporal.

**Detail-page lede (EN):**
> Most deep-learning anomaly-detection work targets US markets and crypto. NeuraTrade
> aims it at Brazilian equities — PETR4, VALE3, AMER3, ITUB4 — training only on
> 2010–2019 "normality" and flagging the years after by reconstruction error, then
> cross-checking each hit against a timeline of real Brazilian market events.
>
> The point wasn't a bigger model; it was a defensible one. Switching the error
> aggregation to `max` doubled recall (0.16 → 0.35) *and* raised precision (0.55 → 0.84).
> A conditional autoencoder conditioned on USD/BRL and the VIX separates *systemic* shocks
> (COVID-2020) from *idiosyncratic* ones (the Americanas collapse, 2023). And where ROC-AUC
> flattered the model at 0.84, PR-AUC exposed the real 0.15 on a rare class — so PR-AUC
> became the reported metric. Reproducible offline, fixed seed, one command.

**Detail-page lede (PT):**
> A maior parte da literatura de detecção de anomalias com deep learning mira mercados dos
> EUA e cripto. O NeuraTrade aponta para ações brasileiras — PETR4, VALE3, AMER3, ITUB4 —
> treinando só na "normalidade" de 2010–2019 e sinalizando os anos seguintes pelo erro de
> reconstrução, cruzando cada anomalia com uma linha do tempo de eventos reais do mercado
> brasileiro.
>
> O objetivo não era um modelo maior, e sim um modelo defensável. Trocar a agregação do erro
> para `max` dobrou o recall (0,16 → 0,35) *e* elevou a precisão (0,55 → 0,84). Um
> autoencoder condicional em USD/BRL e VIX separa choques *sistêmicos* (COVID-2020) dos
> *idiossincráticos* (o caso Americanas, 2023). E onde a ROC-AUC agradava com 0,84, a PR-AUC
> expôs o 0,15 real numa classe rara — por isso a PR-AUC virou a métrica reportada.
> Reprodutível offline, seed fixa, um comando.

**Showpiece (detail page):** the growth-ring becomes a real radial B3 time-series with
anomaly windows lit in amber (doc 2 §5).

---

### 5.2 Olha o Pesado — HERO
- **Pillar:** `system design` · **Year:** 2026 · **Role:** Co-author (with João Victor, Umberto)
- **Stack:** Python · Observer pattern · computer vision
- **Repo:** github.com/Cerne17/oop-olha-o-pesado
- **Thesis (EN):** An autonomous-robot MVP built on a clean observer-pattern core, so vision, control, and results stay decoupled.
- **Thesis (PT):** Um MVP de robô autônomo sobre um núcleo em observer pattern, mantendo visão, controle e resultado desacoplados.
- **Key point (EN):** Signals are typed — Frame, Control, Result — so each subsystem reacts to events without knowing about the others. Architecture as the feature.
- **Key point (PT):** Os sinais são tipados — Frame, Control, Result — então cada subsistema reage a eventos sem conhecer os demais. A arquitetura como o diferencial.

**Detail-page lede (EN):**
> Robots are where sloppy coupling goes to die: vision, control, and actuation change at
> different rates and can't afford to block each other. Olha o Pesado is an autonomous-robot
> MVP whose core is an observer architecture — typed Frame, Control, and Result signals flow
> through a single event backbone, and each subsystem subscribes to what it needs. Adding a
> behavior means adding an observer, not rewiring the robot. It's the same instinct behind
> the finance work: design the system so the hard parts stay isolated and testable.

**Detail-page lede (PT):**
> Robôs são onde acoplamento mal feito morre: visão, controle e atuação mudam em ritmos
> diferentes e não podem travar uns aos outros. O Olha o Pesado é um MVP de robô autônomo
> cujo núcleo é uma arquitetura de observadores — sinais tipados de Frame, Control e Result
> circulam por um único backbone de eventos, e cada subsistema assina o que precisa.
> Adicionar um comportamento é adicionar um observador, não recablear o robô. É o mesmo
> instinto do trabalho com finanças: projetar o sistema para as partes difíceis ficarem
> isoladas e testáveis.

---

### 5.3 SnippetVault — SUPPORTING (strong)
- **Pillar:** `full-stack` · **Year:** 2025–26 · **Role:** Solo
- **Stack:** NestJS · MongoDB · React 19 · Vite · Tailwind 4 · TanStack Query · JWT
- **Repo:** github.com/Cerne17/SnippetVault · **Live:** snippet-vault-backend.vercel.app
- **Thesis (EN):** A deployed full-stack vault for code and prompt snippets — JWT auth, tagging, search, favorites.
- **Thesis (PT):** Um cofre full-stack, já publicado, para snippets de código e prompts — auth JWT, tags, busca e favoritos.
- **Key point (EN):** Monorepo, serverless on Vercel, TypeScript end to end — the "I ship complete products" proof.
- **Key point (PT):** Monorepo, serverless na Vercel, TypeScript de ponta a ponta — a prova de "eu entrego produtos completos".

### 5.4 Graph algorithms library — SUPPORTING
- **Pillar:** `algorithms` · **Year:** 2025–26 · **Role:** Solo
- **Stack:** Python · graph theory
- **Repo:** github.com/Cerne17/Teoria-dos-Grafos-COS232
- **Thesis (EN):** A personal library of graph representations and algorithms, built from the ground up.
- **Thesis (PT):** Uma biblioteca pessoal de representações e algoritmos de grafos, feita do zero.
- **Key point (EN):** Ties to the graphs/optimization interests — foundations implemented, not imported.
- **Key point (PT):** Conecta com os interesses em grafos/otimização — fundamentos implementados, não importados.
- ⚠️ **Before featuring:** this repo has no README and mixed coursework folders. Add a short
  README (what it is, how to use `library/`) and consider extracting the reusable `library/`
  into its own clean repo — that's the "polished version" you wanted to work toward.

---

## 6. Project detail — shared sections (per hero)
`Problem → Approach → Key decisions → Results/State → Stack → Links`. Fill from §5 + the
repo's own docs (NeuraTrade's ADRs and report PDFs are ready-made source material).

---

## 7. About page

**Short (EN):** I'm Miguel — an Electrical & Computer Engineering student at UFRJ and a
software engineering intern at JGP Crédito, working on financial-markets data infrastructure.
I build systems where data, finance, and reliability meet, and I care about getting the hard
parts right.

**Short (PT):** Sou o Miguel — estudante de Engenharia de Computação e Informação na UFRJ e
estagiário de engenharia de software na JGP Crédito, atuando na infraestrutura de dados de
mercado. Construo sistemas onde dados, finanças e confiabilidade se encontram, e me importo
em acertar as partes difíceis.

**Long (EN):**
> I work at the intersection of software engineering, data engineering, and quantitative
> finance. Right now I'm interning at JGP Crédito on the infrastructure behind
> financial-markets data, while finishing my Electrical & Computer Engineering degree at UFRJ
> (graduating December 2027).
>
> My interests are consistent — finance, graphs, optimization, system design, and neural
> networks — and one goal ties them together: building real systems that solve finance
> problems. That shows up in NeuraTrade, an anomaly-detection pipeline over 14 years of B3
> equities where I treated methodology (temporal leakage, rare-class metrics, rejected
> ideas) as the actual work; and in Olha o Pesado, an autonomous-robot MVP built on a clean
> observer architecture. Before this I built back-end APIs at Fluxo Consultoria with NestJS
> and PostgreSQL.
>
> I'm based in Rio, work in Portuguese and English, study Japanese, and play games when I'm
> not shipping. I use Neovim, and I like a decision I can defend with a number.

**Long (PT):**
> Atuo na interseção entre engenharia de software, engenharia de dados e finanças
> quantitativas. Hoje estou de estágio na JGP Crédito, na infraestrutura por trás dos dados
> de mercado, enquanto termino a graduação em Engenharia de Computação e Informação na UFRJ
> (formatura em dezembro de 2027).
>
> Meus interesses são consistentes — finanças, grafos, otimização, design de sistemas e redes
> neurais — e um objetivo os une: construir sistemas reais que resolvem problemas de finanças.
> Isso aparece no NeuraTrade, um pipeline de detecção de anomalias em 14 anos de ações da B3
> em que tratei a metodologia (vazamento temporal, métricas de classe rara, ideias rejeitadas)
> como o trabalho de verdade; e no Olha o Pesado, um MVP de robô autônomo sobre uma
> arquitetura de observadores limpa. Antes disso, construí APIs back-end na Fluxo Consultoria
> com NestJS e PostgreSQL.
>
> Sou de Rio, trabalho em português e inglês, estudo japonês e jogo quando não estou
> codando. Uso Neovim e gosto de uma decisão que eu consiga defender com um número.

---

## 8. Now page (warmer register OK; update freely)

Format: dated one-liners, newest first. Starter entries:

**EN**
- `2026-08` — Rebuilding this site from scratch (Next.js, bilingual). You're looking at the plan.
- `2026-08` — Interning at JGP Crédito on financial-markets data infrastructure.
- `2026-08` — Polishing NeuraTrade's write-up and pulling the graph library into shape.
- `2026-08` — Studying Japanese, slowly. Gaming, less slowly.

**PT**
- `2026-08` — Reconstruindo este site do zero (Next.js, bilíngue). Você está vendo o plano.
- `2026-08` — De estágio na JGP Crédito, na infraestrutura de dados de mercado.
- `2026-08` — Lapidando o texto do NeuraTrade e organizando a biblioteca de grafos.
- `2026-08` — Estudando japonês, devagar. Jogando, menos devagar.

---

## 9. Contact page microcopy

- **Heading (EN):** Get in touch — LinkedIn is fastest.
- **Heading (PT):** Vamos falar — o LinkedIn é o mais rápido.
- **Sub (EN):** I read every LinkedIn message. Prefer email? miguelcerne.dev@gmail.com.
- **Sub (PT):** Leio toda mensagem no LinkedIn. Prefere e-mail? miguelcerne.dev@gmail.com.
- **Form labels:** Name / Nome · Email / E-mail · Message / Mensagem
- **Placeholder (message, EN):** What are you building?  · **(PT):** O que você está construindo?
- **Submit:** Send message / Enviar mensagem
- **Success (EN):** Got it — I'll reply soon. **(PT):** Recebido — respondo em breve.
- **Empty-email validation (EN):** Add an email so I can reply. **(PT):** Coloca um e-mail pra eu conseguir responder.
- **Error (EN):** That didn't send. Try again, or message me on LinkedIn. **(PT):** Não enviou. Tenta de novo, ou me chama no LinkedIn.

---

## 10. Showroom / community candidates (from the GitHub survey — optional)

For the "share with the community" goal (A1 secondary), these repos could power a small
*"in public"* strip or a `/writing` seed, beyond the four featured projects:
- **notas-curso-dev** — your curso.dev learn-in-public notes (22 ⭐, your most-starred repo).
- **Design-Patterns** — a TypeScript design-patterns study; reinforces the system-design pillar.
- **portfolio-fullstack** — the current site's repo (retire or archive once cerne.pro ships).

Not heroes; good "I learn in the open" texture if you want it.

---

## 11. The one artifact worth building next

Your positioning promises **data engineering**, and while NeuraTrade carries real pipeline
discipline (config-driven runs, caching, macro connectors, CLI, tests), there's no
*standalone* DE showcase. The highest-leverage new project: a small **market-data ingestion
pipeline** — pull B3 / FX data on a schedule, transform and validate it, land it somewhere
queryable, expose a tiny API — documented like NeuraTrade. It would (a) complete the SE +
DE + finance trilogy, (b) plug straight into your JGP domain, and (c) become a natural third
hero. Worth scoping as your next build once the site ships.

---

*End of the four-doc set. Docs 1–3 define who/how/what-to-build; this doc is the copy to
pour in. When you move to implementation, hand all four to Claude Code alongside the
anti-generic checklist in doc 2 §9.*
