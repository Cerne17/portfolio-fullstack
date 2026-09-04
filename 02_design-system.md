# Design System — cerne.pro

*Miguel Cerne · portfolio rebuild · doc 2 of 4*

Direction in one line: **heartwood rendered as amber-phosphor on ink** — warm, precise,
quietly technical — with a **growth-ring** signature that makes rings mean *data over time*.
Dark is home; light is the secondary toggle.

---

## 1. Why this direction (and what it deliberately avoids)

The kernel is *cerne* / heartwood (doc 1, §6). The naive move — warm cream background,
high-contrast serif, terracotta accent — is currently the single most over-produced
AI-design look, and its terracotta (~`#D97757`) is literally an assistant-UI accent. We
avoid it on purpose. Instead:

- **Amber, not terracotta.** Our accent is a golden *ember/phosphor* amber, not pink-clay —
  it reads as heartwood **and** as amber-CRT terminal glow, tying to your engineer world.
- **Ink base, not cream.** Home is a cool near-black; warmth comes from the accent and a
  warm off-white text, not a cozy paper field.
- **Grotesque + mono, not serif.** The type says *precise engineer*, not *literary studio*.
- **Rings as the signature**, not a big-number hero. The one memorable object is a
  heartwood cross-section that behaves like a data visualization.

---

## 2. Color

Palette described as named hex values, dark theme (home) first.

### Dark theme — "heartwood core" (default)

| Token | Hex | Role |
|---|---|---|
| `--ink` | `#0C0D10` | page background (cool near-black) |
| `--surface` | `#14161B` | raised cards, nav |
| `--surface-2` | `#1F2229` | borders, dividers, inset |
| `--text` | `#E8E4DB` | primary text (warm sapwood off-white) |
| `--text-muted` | `#9A968C` | secondary text, captions |
| `--heartwood` | `#E89A3C` | **primary accent** — amber ember |
| `--heartwood-glow` | `#F6B65A` | hover/active, phosphor glow |
| `--oxblood` | `#8C3B24` | deep heartwood — depth, gradient anchor |
| `--sapwood` | `#4E8F6B` | living-wood green — sparing 2nd note / success |

### Light theme — "sapwood" (secondary)

| Token | Hex | Role |
|---|---|---|
| `--ink` | `#ECEBE6` | background (soft neutral bone — *not* cream) |
| `--surface` | `#F5F4F0` | raised cards |
| `--surface-2` | `#D8D5CC` | borders, dividers |
| `--text` | `#1A1B1E` | primary text (walnut ink) |
| `--text-muted` | `#5A5852` | secondary text |
| `--heartwood` | `#8C3B24` | **accent for text/links** (oxblood — amber fails small-text contrast on light) |
| `--heartwood-fill` | `#E89A3C` | accent for large fills / the ring graphic only |
| `--sapwood` | `#3A6E52` | green 2nd note (darkened for contrast) |

**Rules**
- Amber (`--heartwood`) is an **accent, never body text**. Reserve it for: primary CTA,
  links on hover, the ring graphic, mono eyebrows, focus rings, the glowing "core."
- Sapwood green appears *rarely* — a single positive/alive signal (active nav item, a
  success toast, one data series). If it's showing up a lot, remove it.
- Oxblood is for depth: gradient stops (`--oxblood → --ink`), pressed states, the dark end
  of the ring graphic.
- One accent dominates any given viewport. Spend boldness in one place (the hero ring).

### Contrast targets
- Body text on background ≥ **7:1** (both themes pass: `#E8E4DB`/`#0C0D10`, `#1A1B1E`/`#ECEBE6`).
- Amber `#E89A3C` on `#0C0D10` ≈ 8.5:1 → fine for large text/graphics; use for ≥18px/bold.
- On light, use oxblood `#8C3B24` for any small accent text.

---

## 3. Typography

Three roles. All defaults are free (OFL / Fontshare) so nothing blocks the build.

| Role | Default | Alt | Used for |
|---|---|---|---|
| **Display** | Clash Display (Fontshare) | Space Grotesk | hero, H1–H2, the wordmark |
| **Body** | Geist Sans (Vercel) | IBM Plex Sans | paragraphs, UI, H3+ |
| **Mono / utility** | Geist Mono | JetBrains Mono | eyebrows, metadata, labels, code, ring readouts |

**Why:** Clash Display is confident and geometric without the serif-studio cliché; Geist
pairs natively with Next.js and stays neutral-with-edge; the mono is the *engineer signal* —
it's where your terminal identity shows up honestly.

**Type scale** (1.250 major-third, base 16px):

| Step | rem | Use |
|---|---|---|
| display | 4.0–5.5 (fluid `clamp`) | hero headline |
| h1 | 3.05 | page titles |
| h2 | 2.44 | section headers |
| h3 | 1.95 | subsections |
| lead | 1.35 | hero sub, intros |
| body | 1.0 | default |
| small | 0.8 | captions |
| mono-eyebrow | 0.8, `letter-spacing: 0.08em`, uppercase | section labels |

**Treatment**
- Display: tight tracking (`-0.02em`), heavy weight (600–700). Big, few, deliberate.
- Body: 1.6 line-height, max line length ~68ch.
- Mono eyebrows carry *structure* (see §5): e.g. `// core`, `// rings`, `// structure`.

---

## 4. Space, grid, shape

- **Spacing scale (px):** 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128. Use it strictly.
- **Grid:** 12-col, max content width `72rem` (1152px); generous gutters. Minimalism lives
  in the whitespace — be precise with it.
- **Radius:** small and consistent — `3px` (inputs, small), `6px` (cards). No pills, no
  bubbles. Precision over softness.
- **Borders:** hairline `1px` `--surface-2`. Dividers are single hairlines, occasionally a
  single ring-arc (see §5).
- **Elevation:** near-flat. Depth comes from the amber *glow*, not drop shadows.

---

## 5. Signature element — the growth ring

The one thing the site is remembered by. A **heartwood cross-section**: concentric rings,
amber phosphor strokes fading from a glowing core outward on `--ink`.

**Where it appears**
- **Hero (home):** large, off-center right; draws ring-by-ring on load. The core glows amber.
- **Logomark / favicon:** a minimal 3-ring cross-section.
- **Section divider:** a single hairline ring-arc instead of a flat rule.
- **Loading / pending:** a drawing ring.
- **Project subpage showpiece (C2 canvas):** the ring becomes a *real* radial data viz —
  on **NeuraTrade**, an actual B3 price/return series mapped radially, so "rings = time
  series" is literal, not metaphorical.

**Behavior**
- Rings encode something true where possible (project count, timeline years, a real series).
  Don't fake data into it.
- Numbered ring indices (`01 / 02 / 03`) are allowed **only** for genuinely ordered sets
  (the project timeline) — not as generic decoration.
- Faint wood-grain/noise texture underlays it at very low opacity for warmth.

---

## 6. Motion

Default is **static-and-fast**. Motion is a small, deliberate budget — one orchestrated
moment beats scattered effects.

Allowed:
1. **Hero ring draw-on-load** (once, ~800ms, eased). The signature moment.
2. **Scroll-reveal** on section entry — subtle fade/translate, one coherent rhythm.
3. **Hover micro-interactions** — amber underline grows on links; card lifts a hair; the
   logomark ring pulses.
4. **Canvas showpieces** — only on select project subpages.

Hard rules:
- `prefers-reduced-motion: reduce` → all of the above become static (ring renders finished).
- Nothing autoplays that loops forever in the viewport. No parallax gimmickry.
- If an animation doesn't encode the subject (rings, systems, data), it probably shouldn't exist.

---

## 7. Components (behavior + tokens)

**Nav (sticky, minimal):** logomark ring · links (`work / about / now / blog`) ·
**LinkedIn CTA (primary, amber)** · theme toggle · lang toggle. On scroll: condenses,
`--surface` with hairline bottom border.

**Hero:** display headline (positioning, doc 1 §1) · mono eyebrow `// core` · lead sub ·
primary LinkedIn CTA + secondary GitHub · the ring graphic. Self-contained enough that a
recruiter needs nothing else (E1/A1).

**CTA system:**
- *Primary (LinkedIn):* solid `--heartwood`, ink text, subtle amber glow on hover
  (`--heartwood-glow` + `box-shadow`). The loudest thing on screen.
- *Secondary (GitHub):* outline (`1px --heartwood`), transparent fill, amber text.
- *Tertiary (email / call):* text link with animated amber underline.

**Project card — hero variant:** large, mono metadata row (`year · role · stack`), title
(display), one-line thesis, one key decision/outcome, `View project →` + `Code ↗`. Pillar
tag (`system design` / `data · finance`).

**Project card — supporting variant:** compact, title + one line + `Code ↗`. For snippet
vault, graph-theory library.

**Section eyebrow:** mono, uppercase, amber, encodes the spine (`// rings`, `// structure`).

**/now entry:** date (mono) + short line. Casual register allowed here.

**Blog card:** date · lang tag (`EN`/`PT`) · title · dek. Minimal.

**Footer:** compact bio line · CTA stack (LinkedIn > GitHub > email > call) · locale note
(*Rio de Janeiro* + coordinates) · optional dry easter egg (芯 / gaming).

**Theme toggle:** sun/ring↔filled-ring; remembers choice.
**Lang toggle:** `EN · PT`; remembers choice; defaults EN.

**Forms (contact):** hairline inputs, mono labels, amber focus ring, inline validation in
the interface's voice ("Add an email so I can reply." — not "Error: field required").

---

## 8. Accessibility & quality floor

Non-negotiable, build to it silently:
- Contrast targets in §2 met; never rely on amber-vs-green alone to carry meaning.
- Visible keyboard focus (amber focus ring, 2px offset) on every interactive element.
- `prefers-reduced-motion` respected everywhere.
- Responsive to 360px; the ring scales/simplifies on mobile, never overflows.
- Semantic HTML, real `<button>`/`<a>`, alt text, labelled form controls, one `<h1>`/page.
- Fonts: `font-display: swap`, subset, preloaded — no layout shift.

---

## 9. Anti-generic checklist (paste this into any build prompt)

Before shipping a screen, confirm it is **not** drifting into a default:
- [ ] Not warm-cream + serif + terracotta. (Ours: ink + grotesque + amber ember.)
- [ ] Not near-black + single acid-green/vermilion accent. (Ours is warm amber + oxblood + sparing pine.)
- [ ] Not broadsheet hairline-columns with zero personality. (We have the ring signature.)
- [ ] The hero leads with the **ring**, not a big-number-with-gradient template.
- [ ] Every structural marker (eyebrow, ring index) encodes something *true*.
- [ ] Boldness spent in one place; everything else quiet and precise.
- [ ] Copy is specific, active, sober — no buzzword filler (doc 1 §5).
