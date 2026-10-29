# Design Language: البراء ياسر العسيري | طالب أمن سيبراني

> Extracted from `http://127.0.0.1:4173/` on October 29, 2026
> 348 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#46d9e8` | rgb(70, 217, 232) | hsl(186, 78%, 59%) | 90 |
| Secondary | `#07111f` | rgb(7, 17, 31) | hsl(215, 63%, 7%) | 90 |
| Accent | `#28394c` | rgb(40, 57, 76) | hsl(212, 31%, 23%) | 2 |

### Tonal Ramps

Generated in OKLCH from each role colour, so the steps are perceptually even. The site's own colour keeps its position in the ladder.

| Role | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
|------|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| primary | `#bbffff` | `#a8faff` | `#8cebf6` | **`#46d9e8`** | `#15b4c2` | `#0096a5` | `#007e8c` | `#006673` | `#005460` | `#00454e` | `#00272d` |
| secondary | `#edf6ff` | `#e1ebf9` | `#cfdaea` | `#b5c1d3` | `#93a1b4` | `#758396` | `#606d7f` | `#4c5867` | `#3d4755` | `#313945` | **`#07111f`** |
| accent | `#eaf7ff` | `#ddecfc` | `#cbdbed` | `#b1c2d6` | `#8fa2b8` | `#71849a` | `#5c6e82` | `#48586a` | `#3a4858` | **`#28394c`** | `#172029` |
| neutral | `#edf7ff` | `#e1ebf6` | `#cfdbe7` | `#b5c2d0` | **`#9eadbd`** | `#758493` | `#606e7c` | `#4c5864` | `#3d4853` | `#313a43` | `#191f26` |

### Semantic Pairs

| Role | Background | Foreground | Contrast | Level |
|------|------------|------------|----------|-------|
| `surface.page` | `#07111f` | `#f5f7fa` | 17.64:1 | AAA |
| `surface.raised` | `#0b1729` | `#f5f7fa` | 16.74:1 | AAA |
| `action.primary` | `#46d9e8` | `#07111f` | 11.14:1 | AAA |
| `action.secondary` | `#07111f` | `#f5f7fa` | 17.64:1 | AAA |
| `action.accent` | `#28394c` | `#f5f7fa` | 10.99:1 | AAA |

### Dominance

Share of painted background area — what the page looks like, as opposed to what it declares most often.

- `#07111f` — 99%
- `#f5f7fa` — 0%
- `#46d9e8` — 0%

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#f5f7fa` | hsl(216, 33%, 97%) | 409 |
| `#9eadbd` | hsl(211, 19%, 68%) | 146 |

### Background Colors

Used on large-area elements: `#07111f`, `#0b1729`

### Text Colors

Text color palette: `#f5f7fa`, `#07111f`, `#46d9e8`, `#9eadbd`

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#f5f7fa` | text, border, background | 409 |
| `#9eadbd` | text, border | 146 |
| `#07111f` | background, text, border | 90 |
| `#46d9e8` | background, text, border | 90 |
| `#28394c` | border | 2 |

## Typography

### Font Families

- **Camel** — used for all (110 elements)
- **Manrope Variable** — used for all (6 elements)

### Type System

- **Scale ratio** — 1.067 (minor second), anchored at 13px · 100% of sizes sit on the ladder
- **Measure** — ~51 characters per line (comfortable)
- **Fluid type** — 5 clamp/viewport font sizes, 24px → 78px

### Named Scale

| Role | Size | Weight | Line Height | Tracking |
|------|------|--------|-------------|----------|
| `h1` | 69.12px / 4.32rem | 800 | 84.3264px | -2.4192px |
| `h2` | 57.6px / 3.6rem | 800 | 77.76px | -1.44px |
| `title-1` | 51.2px / 3.2rem | 800 | 69.12px | -1.28px |
| `title-2` | 30.72px / 1.92rem | 200 | 47.616px | normal |
| `h3` | 26px / 1.625rem | 800 | 41.6px | normal |
| `h4` | 24px / 1.5rem | 800 | 36px | normal |
| `title-3` | 23px / 1.4375rem | 200 | 34.5px | normal |
| `title-4` | 22px / 1.375rem | 800 | 33px | normal |
| `title-5` | 20px / 1.25rem | 200 | 37px | normal |
| `title-6` | 19px / 1.1875rem | 200 | 36.1px | normal |
| `body` | 18px / 1.125rem | 800 | 27px | normal |
| `body-sm` | 17px / 1.0625rem | 200 | 25.5px | normal |
| `micro` | 16px / 1rem | 200 | 24px | normal |
| `sm-3` | 15px / 0.9375rem | 200 | 22.5px | normal |
| `sm-4` | 14px / 0.875rem | 200 | 21px | normal |

### Fluid Declarations

```css
h1 { font-size: clamp(50px, 5.4vw, 78px); }
.contact h2 { font-size: clamp(34px, 4.5vw, 62px); }
.hero-copy h1 { font-size: clamp(45px, 12.5vw, 62px); }
h2 { font-size: clamp(36px, 4vw, 56px); }
.hero-tagline { font-size: clamp(24px, 2.4vw, 34px); }
```

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 69.12px | 4.32rem | 800 | 84.3264px | -2.4192px | h1, span |
| 57.6px | 3.6rem | 800 | 77.76px | -1.44px | h2, br, span |
| 51.2px | 3.2rem | 800 | 69.12px | -1.28px | h2, br, span |
| 30.72px | 1.92rem | 200 | 47.616px | normal | p, br, span |
| 26px | 1.625rem | 800 | 41.6px | normal | h3 |
| 24px | 1.5rem | 800 | 36px | normal | h4 |
| 23px | 1.4375rem | 200 | 34.5px | normal | div, p, h3 |
| 22px | 1.375rem | 800 | 33px | normal | h3 |
| 20px | 1.25rem | 200 | 37px | normal | p |
| 19px | 1.1875rem | 200 | 36.1px | normal | p |
| 18px | 1.125rem | 800 | 27px | normal | h3, p, li, span |
| 17px | 1.0625rem | 200 | 25.5px | normal | a, svg, path, span |
| 16px | 1rem | 200 | 24px | normal | html, head, meta, title |
| 15px | 0.9375rem | 200 | 22.5px | normal | div, span, p, button |
| 14px | 0.875rem | 200 | 21px | normal | button, svg, path, circle |

### Heading Scale

```css
h1 { font-size: 69.12px; font-weight: 800; line-height: 84.3264px; }
h2 { font-size: 57.6px; font-weight: 800; line-height: 77.76px; }
h2 { font-size: 51.2px; font-weight: 800; line-height: 69.12px; }
h3 { font-size: 26px; font-weight: 800; line-height: 41.6px; }
h4 { font-size: 24px; font-weight: 800; line-height: 36px; }
h3 { font-size: 23px; font-weight: 200; line-height: 34.5px; }
h3 { font-size: 22px; font-weight: 800; line-height: 33px; }
h3 { font-size: 18px; font-weight: 800; line-height: 27px; }
```

### Body Text

```css
body { font-size: 18px; font-weight: 800; line-height: 27px; }
```

### Font Weights in Use

`200` (312x), `800` (36x)

## Spacing

**Base unit:** 2px

| Token | Value | Rem |
|-------|-------|-----|
| spacing-4 | 4px | 0.25rem |
| spacing-8 | 8px | 0.5rem |
| spacing-45 | 45px | 2.8125rem |
| spacing-48 | 48px | 3rem |
| spacing-54 | 54px | 3.375rem |
| spacing-60 | 60px | 3.75rem |
| spacing-65 | 65px | 4.0625rem |
| spacing-75 | 75px | 4.6875rem |
| spacing-90 | 90px | 5.625rem |
| spacing-100 | 100px | 6.25rem |
| spacing-110 | 110px | 6.875rem |
| spacing-161 | 161px | 10.0625rem |
| spacing-284 | 284px | 17.75rem |
| spacing-419 | 419px | 26.1875rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| full | 50px | 4 |

## CSS Custom Properties

### Colors

```css
--bg: #07111f;
--muted: #9eadbd;
--accent: #46d9e8;
```

### Spacing

```css
--spacing: .25rem;
```

### Typography

```css
--font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
--font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
--default-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
--default-mono-font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
```

### Shadows

```css
--tw-drop-shadow-alpha: 100%;
```

### Other

```css
--surface: #0b1729;
--raised: #142337;
--ink: #f5f7fa;
--line: #28394c;
--modal-open-dur: .25s;
--modal-close-dur: .15s;
--modal-scale: .96;
--modal-scale-close: .96;
--modal-ease: cubic-bezier(.22,1,.36,1);
```

## Breakpoints

| Name | Value | Type |
|------|-------|------|
| sm | 600px | max-width |
| md | 800px | max-width |
| md | 801px | min-width |
| 1100px | 1100px | max-width |
| 2xl | 1600px | min-width |

## Transitions & Animations

**Easing functions:** `cubic-bezier(0.22, 1, 0.36, 1)`

**Durations:** `0.2s`, `0.55s`, `0.4s`

### Common Transitions

```css
transition: all;
transition: color 0.2s;
transition: background 0.2s;
transition: background 0.2s, color 0.2s;
transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
transition: transform 0.2s;
transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (18 instances)

```css
.buttons {
  background-color: rgb(11, 23, 41);
  color: rgb(245, 247, 250);
  font-size: 16px;
  font-weight: 200;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 0px;
}
```

### Cards (5 instances)

```css
.cards {
  border-radius: 0px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Links (15 instances)

```css
.links {
  color: rgb(245, 247, 250);
  font-size: 16px;
  font-weight: 200;
}
```

### Navigation (4 instances)

```css
.navigation {
  color: rgb(245, 247, 250);
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  position: static;
}
```

### Footer (1 instances)

```css
.footer {
  color: rgb(158, 173, 189);
  padding-top: 26px;
  padding-bottom: 36px;
  font-size: 13px;
}
```

### Dropdowns (2 instances)

```css
.dropdowns {
  border-radius: 0px;
  border-color: rgb(245, 247, 250);
  padding-top: 0px;
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(245, 247, 250);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(245, 247, 250);
  font-size: 14px;
  font-weight: 200;
```

### Button — 2 instances, 2 variants

**Variant 1** (1 instance)

```css
  background: rgb(70, 217, 232);
  color: rgb(7, 17, 31);
  padding: 14px 24px 14px 24px;
  border-radius: 0px;
  border: 0px solid rgb(7, 17, 31);
  font-size: 16px;
  font-weight: 200;
```

**Variant 2** (1 instance)

```css
  background: rgb(11, 23, 41);
  color: rgb(245, 247, 250);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px solid rgb(245, 247, 250);
  font-size: 16px;
  font-weight: 200;
```

### Button — 4 instances, 2 variants

**Variant 1** (1 instance)

```css
  background: rgb(70, 217, 232);
  color: rgb(7, 17, 31);
  padding: 12px 22px 12px 22px;
  border-radius: 0px;
  border: 0px none rgb(7, 17, 31);
  font-size: 15px;
  font-weight: 200;
```

**Variant 2** (3 instances)

```css
  background: rgb(11, 23, 41);
  color: rgb(158, 173, 189);
  padding: 12px 22px 12px 22px;
  border-radius: 0px;
  border: 0px none rgb(158, 173, 189);
  font-size: 15px;
  font-weight: 200;
```

### Card — 5 instances, 1 variant

**Variant 1** (5 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(245, 247, 250);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px solid rgb(245, 247, 250);
  font-size: 16px;
  font-weight: 200;
```

### Button — 5 instances, 1 variant

**Variant 1** (5 instances)

```css
  background: rgb(11, 23, 41);
  color: rgb(245, 247, 250);
  padding: 24px 24px 24px 24px;
  border-radius: 0px;
  border: 0px none rgb(245, 247, 250);
  font-size: 16px;
  font-weight: 200;
```

### Button — 5 instances, 1 variant

**Variant 1** (5 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(245, 247, 250);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(245, 247, 250);
  font-size: 16px;
  font-weight: 200;
```

## Layout System

**15 grid containers** and **56 flex containers** detected.

### The System

- **Content column** — 555px wide
  - Width ladder: 555px · 588px
- **Column system** — 2 columns
- **Section rhythm** — 90px vertical padding (ladder: 24px · 28px · 65px · 75px · 90px)
- **Gap scale** — 8px · 12px · 14px · 20px · 25px · 30px · 54px · 60px
- **Fluid layout** — 2 clamp/viewport declarations

```css
.certificate-dialog { width: min(1050px, 94vw); }
.certificate-dialog { width: 96vw; }
```

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 560px | 0px |
| 660px | 0px |
| 100% | 0px |

### Grid Column Patterns

| Columns | Usage Count |
|---------|-------------|
| 1-column | 9x |
| 2-column | 5x |
| 6-column | 1x |

### Grid Templates

```css
grid-template-columns: 168px 168px 168px 168px 168px 168px;
gap: 54px 32px;
grid-template-columns: 582.875px 555.109px;
gap: 30px;
grid-template-columns: 566px 566px;
gap: 36px;
grid-template-columns: 587.766px 470.234px;
gap: 110px;
grid-template-columns: 534px 534px;
gap: 100px;
```

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| row/nowrap | 47x |
| column/nowrap | 1x |
| row/wrap | 8x |

**Gap values:** `8px`, `12px`, `14px`, `15px`, `16px`, `20px`, `25px`, `26px`, `30px`, `32px`, `34px`, `36px`, `54px 32px`, `60px`, `100px`, `110px`

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 11 passing, 0 failing color pairs

### Passing Color Pairs

| Foreground | Background | Ratio | Level |
|------------|------------|-------|-------|
| `#f5f7fa` | `#07111f` | 17.64:1 | AAA |
| `#07111f` | `#46d9e8` | 11.14:1 | AAA |
| `#9eadbd` | `#0b1729` | 7.84:1 | AAA |

## Design System Score

**Overall: 90/100 (Grade: A)**

| Category | Score |
|----------|-------|
| Color Discipline | 100/100 |
| Typography Consistency | 82/100 |
| Spacing System | 85/100 |
| Shadow Consistency | 85/100 |
| Border Radius Consistency | 100/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 100/100 |

**Strengths:** Tight, disciplined color palette, Well-defined spacing scale, Clean elevation system, Consistent border radii, Strong accessibility compliance, Good CSS variable tokenization

**Issues:**
- 52% of CSS is unused — consider purging
- 544 duplicate CSS declarations

## Z-Index Map

**3 unique z-index values** across 3 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| dropdown | 100,100 | a.s.k.i.p.-.l.i.n.k |
| sticky | 10,10 | header.s.i.t.e.-.h.e.a.d.e.r. .p.a.g.e.-.w.i.d.t.h |
| base | 1,1 | div.h.e.r.o.-.c.o.p.y, div.e.m.b.l.e.m.-.c.e.n.t.e.r |

## SVG Icons

**12 unique SVG icons** detected. Dominant style: **outlined**.

| Size Class | Count |
|------------|-------|
| sm | 6 |
| md | 4 |
| xl | 2 |

**Icon colors:** `currentColor`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| Manrope Variable | self-hosted | 200 800 | normal |
| Camel | self-hosted | 200, 800 | normal |

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| general | 7 | objectFit: contain, borderRadius: 0px, shape: square |
| thumbnail | 4 | objectFit: fill, borderRadius: 0px, shape: square |

**Aspect ratios:** 1:1 (6x), 21:9 (2x), 3:2 (2x), 4:3 (1x)

## Motion Language

**Feel:** responsive · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `sm` | `200ms` | 200 |
| `md` | `400ms` | 400 |
| `lg` | `550ms` | 550 |

### Easing Families

- **ease-out** (7 uses) — `cubic-bezier(0.22, 1, 0.36, 1)`

## Component Anatomy

### button — 17 instances

**Slots:** label, icon
**Variants:** primary · link

| variant | count | sample label |
|---|---|---|
| default | 11 | EN |
| link | 5 | عرض الشهادة |
| primary | 1 | اكتشف رحلتي |

### card — 5 instances

**Slots:** media

## Brand Voice

**Tone:** neutral · **Pronoun:** third-person · **Headings:** all-lowercase (tight)

### Top CTA Verbs

- **en** (1)

### Button Copy Patterns

- "عرض الشهادة" (5×)
- "حضور دورة لغة" (2×)
- "en" (1×)
- "اكتشف رحلتي" (1×)
- "الكل" (1×)
- "أمن سيبراني" (1×)
- "لغة إنجليزية" (1×)
- "تقنية وابتكار" (1×)
- "إتمام دورة" (1×)
- "حضور ندوة" (1×)

### Sample Headings

> البراء ياسر
العسيري.
> فضول يقودني.
ومعرفة أبنيها.
> مساري الأكاديمي
> كل تجربة،
خطوة للأمام.
> التهديدات والثغرات والهجمات في الأمن السيبراني
> البراء ياسر
العسيري.
> فضول يقودني.
ومعرفة أبنيها.
> مساري الأكاديمي
> مساري الأكاديمي
> كل تجربة،
خطوة للأمام.

## Page Intent

**Type:** `landing` (confidence 0.75)
**Description:** البراء ياسر العسيري، طالب أمن سيبراني في السنة الثانية بجامعة الملك خالد. اكتشف مساري الأكاديمي وشهاداتي ومشاركتي المجتمعية.

## Section Roles

Reading order (top→bottom): nav → nav → content → hero → content → sidebar → content → content → content → content → hero → footer

| # | Role | Heading | Confidence |
|---|------|---------|------------|
| 0 | nav | — | 0.4 |
| 1 | nav | — | 0.9 |
| 2 | content | البراء ياسر
العسيري. | 0.3 |
| 3 | hero | البراء ياسر
العسيري. | 0.85 |
| 4 | content | فضول يقودني.
ومعرفة أبنيها. | 0.3 |
| 5 | sidebar | مساري الأكاديمي | 0.4 |
| 6 | content | كل تجربة،
خطوة للأمام. | 0.3 |
| 7 | content | من الفهم،
إلى التطبيق. | 0.3 |
| 8 | content | خارج قاعات
الدراسة. | 0.3 |
| 9 | content | ما تعلّمته.
وما أستكشفه. | 0.3 |
| 10 | hero | لأثرٍ رقمي
يبدأ بالتعلّم. | 0.4 |
| 11 | footer | — | 0.95 |

## Material Language

**Label:** `flat` (confidence 0)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.426 |
| Shadow profile | none |
| Avg shadow blur | 0px |
| Max radius | 50px |
| backdrop-filter in use | no |
| Gradients | 0 |

## Imagery Style

**Label:** `photography` (confidence 0.258)
**Counts:** total 11, svg 0, icon 0, screenshot-like 0, photo-like 5
**Dominant aspect:** square-ish
**Radius profile on images:** square

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `Camel` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
