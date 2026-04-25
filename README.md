# Naviko Design System

## Overview

**Naviko** is an AI-powered immigration and visa compliance platform. It helps immigrants verify every document, meet every requirement, and get a confirmed "green light" before submitting their visa application — eliminating the $5,000 lawyer fees and 30% rejection rate caused by fixable document errors.

**Key value prop:** Most applications are rejected because of minor fixable errors (wrong photo size, missing signature, expired document). Naviko's AI catches these before submission, for $49 instead of $5,000.

**Target users:** First-generation immigrants applying for US and Canadian visas. Globally dispersed. Mobile-first. Often anxious or intimidated by the process.

**Brand personality:** Intelligent. Trustworthy. Precise. Warm. Think Stripe meets legal tech — premium, calm, AI-first.

**Products:**
- **Marketing website** (`naviko/Naviko.html`) — Single-page site with hero, how-it-works, features, pricing, CTA
- **Mobile app** (implied, mobile-first product) — Checklist → Upload → Verify → Green Light flow

---

## Sources

- **Codebase:** `naviko/` (mounted via File System Access API) — `naviko/Naviko.html` contains the full marketing site HTML + CSS + JS, including a hidden brand system section. This is the primary source of truth for all design tokens and components.
- No Figma access was provided.

---

## CONTENT FUNDAMENTALS

### Voice & Tone
- **Direct, specific, honest.** Copy never hedges or uses vague reassurance. "Two issues found" not "some potential concerns."
- **Plain language over legal jargon.** Every requirement explained in simple English. "An employment letter that covers the full required period" not "verifiable proof of employment tenure."
- **The applicant is intelligent.** Copy respects them; explains *why*, not just *what*.
- **Urgency is factual, not manipulative.** "30% of applications rejected for fixable errors" — data, not fear.
- **Precise numbers lead.** Headlines use exact figures: "$5,000", "30%", "$49", "3 pixels too narrow."

### Casing
- Headlines: Sentence case. Never Title Case for body.
- Section labels: ALL CAPS + letter-spacing (monospace, small)
- Buttons: Sentence case ("Check my documents free", "Get verified for $49")
- Badges/tags: ALL CAPS in mono font

### Pronoun usage
- "You" throughout. Direct address. ("Your application", "Tell Naviko which visa you're applying for")
- "We" for Naviko as a company, used sparingly.

### Emoji
- **Never used.** Zero emoji anywhere in the product or marketing.

### Key phrases / terminology
- "Green light" — the core product moment. Never "approval" or "clearance."
- "Pass / Fix This / Missing" — the three document states. Exact capitalization.
- "AI scans" / "AI reads" — not "our algorithm" or "machine learning"
- Legal disclaimer always present: *"Not legal advice — AI guidance only"*

---

## VISUAL FOUNDATIONS

### Color System
Dark-mode native. Deep navy/indigo backgrounds, never pure black.
- **Background:** `#0f0e17` (almost-black indigo)
- **Secondary BG:** `#1a1730` (slightly lighter; used for sections)
- **Surface:** `#231f3a` (cards, panels)
- **Surface Hover:** `#2c2750`
- **Purple primary:** `#7F77DD` — buttons, links, accents, logo underline
- **Purple light:** `#EEEDFE` — reversed/light backgrounds
- **Purple dim:** `rgba(127,119,221,0.12)` — tinted backgrounds for badges, icons
- **Purple border:** `rgba(127,119,221,0.25)` — subtle borders on interactive elements
- **Teal (success):** `#1D9E75` — green light, pass states, checkmarks
- **Teal dim:** `rgba(29,158,117,0.12)` — tinted success surfaces
- **Text primary:** `#ffffff`
- **Text secondary:** `#9995b3` — muted text, labels, metadata
- **Border:** `rgba(127,119,221,0.18)` — universal subtle divider

**Status colors:**
- Success: teal `#1D9E75`
- Warning: amber `#fbbf24`
- Error: red `#f87171` (rgba(239,68,68,0.12) bg)
- Info: purple `#7F77DD`
- Neutral: `#9995b3`

### Typography
**From codebase** (note: brief specifies Bricolage Grotesque/Inter/JetBrains Mono, but actual code uses):
- **Sans:** `DM Sans` — weights 300/400/500/600/700. Used for all UI + body text.
- **Mono:** `DM Mono` — weights 400/500. Used for labels, step numbers, badges, legal notices, specs.

**Scale:**
- Display: 48px / 700 / -2px tracking
- Heading: 28px / 700 / -0.8px tracking  
- Subheading: 20px / 600 / -0.3px tracking
- Body: 16px / 400 / 1.6 line-height
- Caption/Label: 12px / 500 / mono / 0.04em tracking
- Hero h1: clamp(40px–80px) / responsive

### Backgrounds & Imagery
- **No photography or illustrations.** Zero images in the codebase — pure code/SVG.
- **Radial gradients** used sparingly for ambient glow behind hero and CTA sections: `radial-gradient(ellipse, rgba(127,119,221,0.13), transparent 70%)`
- **No texture, no patterns, no grain.**
- **Section alternation:** `#0f0e17` and `#1a1730` alternate for visual rhythm.

### Animation
- **Scroll fade-in:** `opacity 0 → 1`, `translateY(28px → 0)`, `0.7s ease`. Staggered via `.delay-1` through `.delay-4` (0.1s steps).
- **Pulse dot:** `scale + opacity` keyframe at 2s ease-in-out infinite. Used on hero badge.
- **Hover transitions:** `0.2–0.25s` duration, ease. Color and border transitions.
- **No bounces, no spring physics, no elaborate entrance animations.**

### Hover States
- Buttons: `opacity 0.9` + `box-shadow glow` + `translateY(-1px)` for primary; border/color shift for ghost.
- Cards: `border-color brightens` + `background lightens` + `translateY(-2px)`.
- Feature cards: top-edge gradient line appears on hover.
- Nav links: `color → #ffffff`.

### Borders
- Universal: `1px solid rgba(127,119,221,0.18)`
- Interactive/highlighted: `rgba(127,119,221,0.25)` or `var(--purple)` solid
- Featured/pro: `var(--purple)` solid 1px + box-shadow glow

### Cards
- Background: `var(--surface)` `#231f3a`
- Border: `1px solid var(--border)` (purple-tinted, low opacity)
- Radius: `var(--radius-lg)` = 20px
- Hover: border brightens, bg lightens to `#2c2750`, lifts 2px
- Featured (pro/pricing): solid purple border + `box-shadow: 0 0 40px rgba(127,119,221,0.15)`

### Corner Radii
- sm: 6px (small UI elements)
- md: 12px (inputs, feature icons)
- lg: 20px (cards, sections)
- pill: 999px (buttons, badges, nav CTA)

### Layout
- Max container width: 1120px, centered, 32px padding (20px mobile)
- Section padding: 100px top/bottom (72px mobile)
- Fixed nav: 64px height, `backdrop-filter: blur(20px)`
- Grid: 2-col features, 3-col testimonials/steps, 2-col pricing

### Iconography
See ICONOGRAPHY section below.

### Shadows & Elevation
- No drop-shadows on cards/surfaces by default.
- Glow shadows only on interactive/highlighted states: `0 4px 28px rgba(127,119,221,0.4)` (button), `0 0 40px rgba(127,119,221,0.15)` (featured card).
- Ambient background glow via `radial-gradient` pseudo-elements, not CSS shadows.

### Blur / Transparency
- Nav: `backdrop-filter: blur(20px)` + `rgba(15,14,23,0.8)` background — the only use of blur.
- No frosted glass cards.

---

## ICONOGRAPHY

**No icon library is used.** All icons are hand-drawn inline SVGs directly in HTML. Style:
- Stroke-based (not filled), `stroke-width: 1.5`
- `fill="none"` default
- Rounded linecaps and joins (`stroke-linecap="round"`, `stroke-linejoin="round"`)
- 20×20 or 36×36 viewBox
- Color: `currentColor` (inherits from parent) or explicit `var(--purple)` / `#1D9E75`
- No icon font. No Lucide/Heroicons CDN. No SVG sprite.
- Checkmarks use: `<path d="M5 8l2.5 2.5L11 5.5">` pattern
- Emoji: never used.
- Unicode chars: never used as icons.

**Logo mark:** "Naviko" wordmark in DM Sans 700, with a 2.5px solid `#7F77DD` underline below. Used in nav, footer, and brand sections. No logomark icon in production yet — only the wordmark.

**App icon concept:** Bold "N" in DM Sans 700 on dark background, purple underline bar beneath it.

---

## File Index

```
README.md                    — This file
SKILL.md                     — Agent skill definition
colors_and_type.css          — All CSS custom properties (tokens)
assets/                      — Logo and brand assets
  logo-dark.svg              — Wordmark on dark
  logo-light.svg             — Wordmark on light  
  app-icon.svg               — Square app icon
preview/                     — Design system card previews
  colors-background.html
  colors-brand.html
  colors-semantic.html
  type-display.html
  type-body.html
  type-mono.html
  spacing-tokens.html
  spacing-radius.html
  components-buttons.html
  components-inputs.html
  components-badges.html
  components-cards.html
  components-checklist.html
  components-upload.html
  components-green-light.html
  components-nav.html
  components-progress.html
  components-pricing.html
  components-testimonial.html
  components-footer.html
  components-mobile.html
  brand-logo.html
ui_kits/
  website/                   — Marketing website UI kit
    README.md
    index.html
    Nav.jsx
    Hero.jsx
    HowItWorks.jsx
    Features.jsx
    Pricing.jsx
    Footer.jsx
  app/                       — Mobile app UI kit
    README.md
    index.html
    Checklist.jsx
    Upload.jsx
    GreenLight.jsx
    AppNav.jsx
```
