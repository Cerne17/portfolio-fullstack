# Site Architecture & Build Guide — cerne.pro

*Miguel Cerne · portfolio rebuild · doc 3 of 4*

The job of this doc: make the site **buildable and, above all, cheap to maintain** — your
#1 complaint about the old one. The core idea: *content is data files, not code.* Adding a
project or post is editing one Markdown file, never touching a component.

---

## 1. Sitemap / information architecture

```
/                      Home — SELF-CONTAINED recruiter pitch (see §3)
/work                  All projects (heroes + supporting)
/work/[slug]           Project detail (+ canvas showpiece where it earns one)
/about                 The longer story + the human underneath
/now                   What you're doing now (proves you're active)
/blog                  Post index
/blog/[slug]           Post
/contact               Contact form (+ CTA band mirrored on home & footer)
/resume                Serves/links the résumé PDF
```

External (links, not routes): **LinkedIn** (primary CTA), **GitHub**, **email**.

Localized: every route exists under `/en` and `/pt` (English is the default landing).

---

## 2. Stack

| Concern | Choice | Why |
|---|---|---|
| Framework | **Next.js (App Router)** | your preference; static-first, fast, Vercel-native |
| Styling | **Tailwind CSS v4** + CSS custom-property tokens | tokens from doc 2 flip per theme |
| Theme toggle | **next-themes** (data-attribute strategy) | dark default, remembers choice, no flash |
| i18n toggle | **next-intl** with `[locale]` routing | clean App-Router bilingual; alt: tiny dictionary |
| Content | **Velite** (MDX + Zod-typed collections) | typed content, one-file-per-item; alt: gray-matter loader |
| Motion | **motion/react** (Framer Motion) | the small reserved budget in doc 2 §6 |
| Ring signature | custom **SVG/Canvas** component | data-driven; static fallback for reduced-motion |
| Contact form | **Server Action → Resend** (email) | no DB/backend; alt: Formspree if you want zero infra |
| Deploy | **Vercel** | Next-native, preview deploys, free tier; point `cerne.pro` at it |
| Analytics | **Plausible** or Vercel Analytics (optional) | privacy-friendly |
| OG images | `next/og` dynamic route | renders the ring + title per page |

---

## 3. Home page composition (the self-contained pitch)

Top → bottom. A recruiter scrolling **once** must get who/what/proof/how-to-reach (A1 + E1):

1. **Nav** — logomark ring · links · **LinkedIn CTA (primary, amber)** · theme · lang.
2. **Hero** — mono eyebrow `// core` · display headline (positioning, doc 1 §1) · lead sub
   · **LinkedIn CTA** + secondary GitHub · the **ring** graphic (draws on load).
3. **What I do** — 1–2 sober sentences + the three pillars as a tight row:
   `software engineering · data engineering · quantitative finance`.
4. **Hero projects (2)** — NeuraTrade + Olha o Pesado as hero cards: thesis + one key
   decision/outcome + `View project →` + `Code ↗`.
5. **Credibility strip** — current role line (*Software Engineering Intern, JGP Crédito —
   financial-markets data infrastructure*) + a restrained stack list (no buzzword dump).
6. **/now teaser** — one line pulled from the now page (signals you're active).
7. **Contact band** — restate positioning + CTA stack (LinkedIn > GitHub > email > call).
8. **Footer** — bio line, CTAs, Rio locale, optional easter egg.

Everything below the fold on other pages is depth for the community (secondary audience).

---

## 4. Content model — the maintenance-killer

Content lives in `/content`, one MDX file per item per locale. Components read the folder;
you never edit code to publish.

```
content/
  en/
    projects/
      neuratrade.mdx
      olha-o-pesado.mdx
      snippet-vault.mdx
      graph-theory-lib.mdx
    posts/
      first-post.mdx
    now.mdx
  pt/
    projects/ ...
    posts/ ...
    now.mdx
```

**Project frontmatter schema** (Velite/Zod-validated — bad data fails the build, not prod):

```yaml
---
slug: neuratrade
title: NeuraTrade
pillar: data-finance          # data-finance | system-design | data-engineering
year: 2025
role: Co-author (with Ana Beatriz)
stack: [Python, PyTorch, pandas]
hero: true                    # hero card vs supporting
order: 1                      # ordering / ring index
repo: https://github.com/Cerne17/NeuraTrade
demo:                         # optional live-demo URL
thesis: >
  Unsupervised anomaly detection over 14 years of B3 equities —
  with the temporal-leakage traps actually accounted for.
key_decision: >
  Walk-forward validation with TimeSeriesSplit to defeat look-ahead
  leakage; scoped to price log-returns (volume anomalies flagged as future work).
showpiece: radial-timeseries  # optional: which canvas component the detail page loads
---

<!-- MDX body: the full write-up, images, code, the canvas showpiece -->
```

**Post frontmatter:** `slug, title, date, lang, dek, tags, draft`.
**Now:** a single MDX file per locale, list of dated lines.

**Starter set to author (in doc 4 we'll write the real copy):**
`neuratrade`, `olha-o-pesado` (heroes) · `snippet-vault`, `graph-theory-lib` (supporting).

> To publish a new project later: drop `content/en/projects/new-thing.mdx` (+ pt), commit,
> push. Vercel rebuilds. No component touched. That's the whole maintenance story.

---

## 5. Tokens → CSS (bridge from doc 2)

Define the doc-2 palette once as CSS custom properties and flip on `[data-theme]`:

```css
:root, [data-theme="dark"] {
  --ink:#0C0D10; --surface:#14161B; --surface-2:#1F2229;
  --text:#E8E4DB; --text-muted:#9A968C;
  --heartwood:#E89A3C; --heartwood-glow:#F6B65A; --oxblood:#8C3B24; --sapwood:#4E8F6B;
}
[data-theme="light"] {
  --ink:#ECEBE6; --surface:#F5F4F0; --surface-2:#D8D5CC;
  --text:#1A1B1E; --text-muted:#5A5852;
  --heartwood:#8C3B24; --heartwood-fill:#E89A3C; --sapwood:#3A6E52;
}
```

Tailwind v4: expose these as theme colors so `bg-ink`, `text-heartwood`, etc. work. Type
roles (`--font-display/body/mono`) loaded via `next/font` (self-hosted, `swap`, preloaded).

---

## 6. i18n

- `next-intl` middleware handles `/en` and `/pt`; UI strings live in `messages/en.json` /
  `pt.json`; long-form content is the per-locale MDX in §4.
- Lang toggle swaps the locale segment and persists choice; default `en`.
- Every home/hero/CTA/about string must exist in both; a blog post may exist in one locale
  (the index shows an `EN`/`PT` tag).

## 7. Theme

- `next-themes`, `attribute="data-theme"`, `defaultTheme="dark"`, no-flash script.
- The ring graphic reads `--heartwood`/`--heartwood-fill` so it recolors with the theme.

## 8. Contact form

- `/contact` renders hairline inputs (name, email, message) with mono labels + amber focus.
- Submit = **Server Action** → **Resend** send to your inbox. Honeypot field + basic
  per-IP rate limit for spam. Inline, voice-matched validation (doc 2 §7).
- Zero-infra alternative: point the action at **Formspree** and skip Resend.
- Success/empty/error states written in the interface's voice, not apologies.

## 9. "/now" page

Dated one-liners, newest first, pulled from `content/{locale}/now.mdx`. This is the one
place the casual register (Rio, gaming, Japanese) is welcome. Update it whenever; it's the
cheapest signal that the site — and you — are alive.

## 10. SEO / meta / performance

- Next Metadata API per route; canonical + `hreflang` for en/pt.
- Dynamic **OG image** (`next/og`) featuring the ring + page title.
- Static-first rendering → the site is fast by construction (backs the *efficient* pillar).
- `sitemap.ts` + `robots.ts`; JSON-LD `Person` schema on home.

---

## 11. Repo structure

```
cerne-pro/
  app/
    [locale]/
      layout.tsx            # nav, footer, theme+intl providers
      page.tsx              # HOME (§3)
      work/page.tsx
      work/[slug]/page.tsx
      about/page.tsx
      now/page.tsx
      blog/page.tsx
      blog/[slug]/page.tsx
      contact/page.tsx
    og/route.tsx            # dynamic OG image
    api/ (or actions)       # contact server action
  components/
    ring/                   # the signature (SVG/canvas + showpieces)
    cards/  nav/  cta/  ...
  content/                  # §4 — the only thing you touch to publish
  messages/  en.json  pt.json
  styles/  tokens.css       # §5
  lib/  content.ts  seo.ts
  public/  resume.pdf  fonts/
  velite.config.ts
```

---

## 12. Build phases (checklist)

- [ ] **P0 — Scaffold:** Next + Tailwind v4 + fonts + tokens.css + next-themes + next-intl. Deploy skeleton to Vercel, wire `cerne.pro`.
- [ ] **P1 — Shell:** nav, footer, theme toggle, lang toggle, layout, base type/spacing.
- [ ] **P2 — Content model:** Velite config + Zod schemas + `content/` loaders; author 4 project stubs.
- [ ] **P3 — Ring signature:** SVG/canvas component + reduced-motion fallback + hero draw.
- [ ] **P4 — Home:** the §3 composition, fully bilingual, LinkedIn CTA primary.
- [ ] **P5 — Work:** `/work` + `/work/[slug]` + the NeuraTrade radial showpiece.
- [ ] **P6 — About / Now / Blog:** pages + first now entries + one launch post (optional).
- [ ] **P7 — Contact + SEO + polish:** form, OG images, metadata, a11y pass (doc 2 §8), Lighthouse, ship.

---

## 13. Next up (doc 4)

Doc 4 is the **Content Inventory & Copy** — the real bilingual text for every section and
the four starter projects. It needs the GitHub/projects-folder pass you flagged (to lock
the supporting lineup and hunt the data-engineering artifact) plus the assets in doc 1 §11.
Say the word and we'll do that pass.
