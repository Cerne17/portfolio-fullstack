# Persona & Brand Brief — cerne.pro

*Miguel Cerne · portfolio rebuild · doc 1 of 4*

This is the strategic spine. Everything in the Design System and Build Guide derives
from decisions made here. Read it first; when a design or copy choice feels ambiguous
later, the answer lives in this document.

---

## 1. Positioning

**One-liner (primary):**
> Software engineer building reliable, data-driven systems for finance.

**Alternates (pick by context / A-B later):**
- *I use data to solve finance problems and design the critical systems that run them.*
- *Systems engineer at the intersection of data, finance, and reliability.*

**Full positioning statement:**
Miguel is a software engineer whose center of gravity is the meeting point of three
disciplines — **software engineering, data engineering, and quantitative finance**.
The through-line is *using data to fix finance problems, and engineering the critical
systems that make those solutions dependable in production.* Not a generalist
full-stack dev; not a pure researcher. An engineer who ships systems where correctness,
data, and money intersect.

**Scope discipline (your standing rule, applied):**
The portfolio stays scoped to **SE + data + finance**. Off-scope threads (3D-audio /
Ambisonics research, general EE coursework) are intentionally *not* featured. Exception:
work that serves the SE+finance story stays in even if it originated elsewhere —
e.g. NeuraTrade began as a Neural Networks course project but is squarely data+finance+ML,
so it's a hero.

---

## 2. Audience

| Priority | Who | What they need in <30s |
|---|---|---|
| **Primary** | Recruiters / hiring leads scouting talent | *Who is this, what can he do for us, is he worth a message?* |
| **Secondary** | The dev/quant community | *Something worth reading, using, or bookmarking.* |

Design consequence: the **home page must be self-contained** — a recruiter should get the
full first impression and a reason to reach out *without clicking into a subpage*. Subpages
are for depth and for the community, not for the core pitch.

---

## 3. Goals & CTA hierarchy

The visitor action you want, in strict priority order:

1. **Reach out on LinkedIn** ← primary CTA everywhere. You read every notification.
2. **Visit GitHub** ← secondary CTA; proof-of-work.
3. **Email you** ← tertiary; for people who prefer it.
4. **Book a call** ← low-friction option for serious leads.
5. **Leave with a good impression** ← the floor; even non-actors should remember you.

Design consequences:
- The **LinkedIn action is the loudest button on the page** (hero + sticky/footer). Not a
  row of equal-weight social icons — LinkedIn is visually primary, the rest are quieter.
- GitHub gets a prominent-but-secondary treatment (e.g. "See the code" on project cards).
- Email + call live in the contact section and footer, not competing with LinkedIn up top.

---

## 4. Brand pillars

These five words are the filter for every copy and design decision. If something on the
page doesn't reinforce one of these, cut it.

**Professional:** `valuable` · `efficient` · `strategic`
**Personal:** `proactive` · `collaborative`

Translation into the experience:
- **valuable / strategic** → lead with outcomes and judgment, not tool lists. Show *why*
  a decision was made (the NeuraTrade anti-leakage validation, the Olha o Pesado
  architecture choice), not just *what* was built.
- **efficient** → the site itself is fast, spare, no fluff. Efficiency is demonstrated,
  not claimed.
- **proactive / collaborative** → surface co-authorship honestly (Ana Beatriz, João Victor,
  Umberto) and initiative (self-driven projects, `gh` CLI milestones, full lifecycle).

---

## 5. Voice & tone

**Register:** sober and precise, confident and bold. Minimalist — *not too serious, not
playful.* Think a senior engineer who is quietly certain, writes tight, and never oversells.

**Do**
- Short, declarative sentences. Active voice. Specific over clever.
- Name the hard part and how you handled it (leakage risk, walk-forward validation).
- Let numbers and decisions carry the confidence; no adjectives doing the lifting.

**Don't**
- No "passionate about," "results-oriented," "ninja/rockstar," emoji-driven hype.
- No jokey copy or memes — the wit is dry and rare, never the point.
- No wall-of-buzzwords skill dumps.

**Voice sample (hero):**
> I build data systems for finance — the kind where being wrong is expensive.
> Currently doing that at JGP Crédito, on the infrastructure behind financial-markets data.

**Voice sample (project one-liner):**
> NeuraTrade — unsupervised anomaly detection on 14 years of B3 equities, with the
> temporal-leakage traps actually accounted for.

---

## 6. Brand kernel — *cerne*

Your name is the brand. *Cerne* = **heartwood**: the dense, mature core at the center of a
tree — and figuratively, the essence of a thing. It's a gift of a kernel because it carries
three meanings that are all true about you:

- **Core / essence** → "the real substance of an engineer," matches the site's job
  (propagate who you actually are).
- **Growth rings** → concentric layers laid down over time = **time series** = your
  NeuraTrade / markets-data work. Rings are literally data.
- **Structural integrity** → heartwood is the load-bearing part of the tree = *critical
  systems that hold weight.*

**Narrative spine for the site:** `core → rings → structure`
1. **Core** — who you are (hero, positioning).
2. **Rings** — what you've laid down over time (projects, timeline, growth).
3. **Structure** — what holds weight (systems, reliability, the finance thesis).

This is a quiet kernel by design: most visitors won't decode it, but anyone who asks
"why cerne?" gets a memorable, non-gimmicky answer that makes you look thoughtful.
See doc 2 for how the growth-ring becomes the visual signature.

---

## 7. Bios (draft — all facts verified from your record)

**One-line (nav / meta / OG):**
> Software engineer building data-driven systems for finance.

**Short (~45 words — hero / about card):**
> I'm Miguel, an Electrical & Computer Engineering student at UFRJ and a software
> engineering intern at JGP Crédito, where I work on the infrastructure behind
> financial-markets data. I build systems where data, finance, and reliability meet —
> and I care about getting the hard parts right.

**Long (~140 words — /about):**
> I'm a software engineer working at the intersection of software, data, and quantitative
> finance. Right now I'm an intern at JGP Crédito, building infrastructure for
> financial-markets data, while finishing my Electrical & Computer Engineering degree at
> UFRJ (graduating December 2027).
>
> My interests are consistent: finance, graphs, optimization, system design, and neural
> networks — and the goal that ties them together is building real systems that solve
> finance problems. That shows up in projects like NeuraTrade, an unsupervised
> anomaly-detection pipeline over 14 years of B3 equities built with the methodological
> traps (temporal leakage, market-stress periods) taken seriously, and Olha o Pesado, an
> autonomous-robot MVP architected around a clean observer pattern.
>
> I'm based in Rio, work in Portuguese and English, and I study Japanese and play games
> when I'm not shipping.

*(Trim the Rio/Japanese/games line for the strict-professional cut; keep it for the
human-underneath cut. See §9.)*

---

## 8. Bilingual strategy

- **Toggle: EN ⇄ PT-BR.** Both are first-class.
- **Default on first load:** English (primary audience includes international recruiters;
  A3/A1 skew toward reach). PT-BR one tap away and remembered per visitor.
- All hero copy, project cards, about, and CTAs must exist in both. Blog posts can be
  per-language (a post may exist in only one) — the content model in doc 3 handles this.

---

## 9. Personality levers (the "make it mine" dial)

Surface these *sparingly*, in low-stakes zones so they never dilute the professional pitch:

- **Rio** — a location tag, a subtle map/coordinate detail, warmth in the /about voice.
- **Gaming** — fits the "/now" page and maybe a dry footer easter egg.
- **Japanese (hobbyist)** — an /about aside; possible tasteful furigana/kanji easter egg
  around the *cerne* kernel (e.g. 芯 *shin* = core). Keep it a wink, not a theme.

Rule: none of these appear *above* the professional proof on the home page. They live in
/about, /now, and the footer.

---

## 10. Proof strategy & the honest gap

**Current proof map:**

| Pillar | Best proof on hand |
|---|---|
| System design / reliability | **Olha o Pesado** (observer-pattern architecture, autonomous MVP) |
| Data + finance + ML | **NeuraTrade** (B3 anomaly detection, walk-forward validation) |
| Finance data infra (real, current) | **JGP Crédito internship** |
| Data Engineering (pipelines/infra as its own artifact) | ⚠️ *gap* |

**Action:** when we explore your GitHub + projects folder, prioritize identifying (or
building toward) one clean **data-engineering** artifact — an ingestion/transform pipeline,
a dataset+API, something that shows infra, not just modeling. That completes the trilogy
your positioning promises. Supporting projects already named (**snippet vault**,
**graph-theory library**) are good community/"showroom" material but don't fill this gap.

---

## 11. Assets I still need from you

To finish the Content Inventory (doc 4) and make the build real:

- [ ] LinkedIn profile URL (primary CTA — currently a placeholder)
- [ ] Public email address for the contact section
- [ ] Résumé PDF (or a Google Doc I can help structure into one)
- [ ] Repo links for **snippet vault** and **graph-theory library** (+ one-line each)
- [ ] Whether JGP allows naming them / describing the work publicly
- [ ] "Book a call" tool preference (Cal.com / Calendly / none for now)
