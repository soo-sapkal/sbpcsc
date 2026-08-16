# SBPCSC UI/UX Revamp — Implementation Plan

> Companion to: [`AI Coding Agent Prompt — UI-UX-Only Website Revamp.md`](./AI%20Coding%20Agent%20Prompt%20—%20UI-UX-Only%20Website%20Revamp.md)
>
> Scope: **visual revamp only.** No content, routes, IA, links, text, or schema changes.

---

## Core Strategy

Everything is **presentation-layer only**: all pages/features keep their exact copy, IA, links, and images. Work proceeds top-down from the design tokens that everything else consumes, so later phases pick up styling automatically.

**Design system foundation (ground rules):**

- Promote the existing CSS vars already in `src/app/globals.css` (`--primary`, `--accent`, `--radius`, `--sidebar-*`, etc.) into the primary source of truth.
- Brand hexes keep their exact values (`#146ab5`, `#cf2b1f`); they just move from being scattered as arbitrary Tailwind values everywhere into one set of semantic tokens.
- All shadcn/ui primitives keep their existing contract (`globals.css` `@theme inline` mapping stays stable) so base components don't break.
- **Content parity is the top rule.** Every diff must be text-identical on the page.

## Key Audit Findings Driving the Plan

| Finding | Impact |
|---|---|
| Brand colors hardcoded as arbitrary values everywhere (`bg-[#146ab5]`, `text-[#cf2b1f]`, `text-[#337ab7]`, `text-[#444]`, `bg-[#f5f5f5]`) | Consolidate into tokens in Phase 1, then swap usages in later phases |
| Legacy/unstyled CSS classes with zero definitions: `nav-tab-section`, `tab-content`, `panel-title`, `panel-body`, `page_details`, `section1`, `gallery_grid` | Replace with real Tailwind/shadcn equivalents (Phases 4–5); no visual loss since they are unstyled today |
| `NavPills` tab switching is abrupt, no ARIA tabs, no keyboard support | Phase 4 — add transitions + `role="tablist"` + `aria-selected` + arrow keys |
| Sidebar accordion uses instant conditional render (no animation) | Phase 2 — animate open/close |
| 3 duplicated lightbox implementations (GalleryGrid inline, Lightbox.tsx, AchievementCard + CoCurricularGrid, newsletter local) | Phase 5 — consolidate into one accessible component |
| Home hero `aspectRatio: "7/2"` letterboxed; hidden on mobile (`hidden md:block`) | Phase 3 — adjust ratio + mobile fallback |
| Commerce landing auto-popup dialog on load (500ms, no dismissal tracking, re-triggers every visit) | Phase 5 — decision needed (remove vs restyle) |
| Multiple `src/features/*` components are `null`-returning dead-code stubs (blog, media, admissions, library, StreamSelector, SubjectCard, AcademicPlan) | decision needed (delete vs leave) |
| No dark-mode toggle wired (variants exist) | deferred decision |
| `/academics/science` 404s while commerce has a full landing | out of scope (new content) |
| Data-only artifacts: duplicate `libary-books-10.webp`, gallery filename with a stray space, `Featured`-flag drift | non-visual data fixes — decision needed |

---

## Phase 1 — Token & Theme Foundation

**Files:** `src/app/globals.css`

**Do:**

- Extend the `@theme inline` block with new semantic tokens:
  - `--color-brand`, `--color-brand-dark`, `--color-brand-soft`
  - `--color-accent` (existing), `--color-accent-soft`
  - surface/section background token for alternating bands
  - elevation/shadow tokens
- Keep every existing variable name stable (shadcn + base styles depend on them).
- Refine `--radius` (currently `0.625rem`) and normalize the duplicated `secondary`/`secondary-foreground` lines in the `@theme` block.
- Remove or wire up now-dead legacy CSS that has no real consumers (`.carousel-*`, `.sbpcsc-slider`, `.icon-box`, `.gallery_grid`, `.button` hamburger draw, etc.) — either delete or attach to the component that needs it.

**Definition of done:**

- `next build` passes.
- Token classes (`bg-brand`, `text-brand`, `bg-accent`, etc.) resolve.
- No visible regression on the home shell.

---

## Phase 2 — App Shell & Shared Layout

**Files:** `src/components/layouts/*`, `src/features/layout/components/*`, `src/features/navigation/components/*`, `src/app/layout.tsx`

**Do:**

- **TopStrip / Header** — modernize the legacy-era chrome; refine sticky behavior and lock heights across breakpoints. All nav labels, phone numbers, CTA text stay verbatim.
- **MainNav / MobileNav** — token-driven active states, hover treatment, dropdown polish (nav dropdown animation already exists as a keyframe — reuse).
- **Sidebar** — token styling; **add open/close animation** to the accordion children.
- **Breadcrumb** — tokens for `text-[#444]`, `active text-[#146ab5]`, strip `bg-[#f5f5f5]`.
- **Footer / SocialIcons** — token restyle; preserve all columns/links exactly.
- **Spotlight** — keep ticker animation; restyle bars with tokens.

**Definition of done:** every page renders the same sections with the same text/links; visual upgrade only.

---

## Phase 3 — Home Page

**Files:** `src/features/home/components/*`, home route page

**Do:**

- **HeroCarousel** — fix `7/2` letterboxing; upgrade caption card/overlay, arrows, indicators; preserve `hidden md:block` and add a mobile-first fallback hero so mobile is not blank.
- **OverviewSection** — token-based card treatment; consistent section spacing.
- **TestimonialPreview** — unify cards; fix legacy `#337ab7`/`#286090` inconsistency against the chosen palette.
- **IconBoxGrid** — migrate `.icon-box` + `#337ab7` to tokens.
- **NewsScroll** — keep green dashed separators (brand-consistency decision); polish alignment.
- **EnrollmentModal** — keep auto-open behavior + sessionStorage key; restyle to match shadcn Dialog, add focus management, Esc close, `aria-modal`.

**Definition of done:** home sections same copy, improved composition; mobile no longer blank at the top.

---

## Phase 4 — Shared Sections, Forms & Content Chrome

**Files:** `src/components/sections/*` (`PageHeading`, `PageBanner`, `NavPills`, `Section`, `ContactForm`), `src/components/layouts/ContentWithSidebar.tsx`

**Do:**

- **PageHeading** — token-based banner replacing `bg-[#146ab5] px-3 py-2 text-[#fff8f8]` + dual-color underline; exact title text preserved.
- **PageBanner** — keep fixed `sbpcsc-college.webp` + dark overlay + fixed attachment, but move the inline gradient to tokens.
- **NavPills** — **transitions on tab switch**, `role="tablist"`/`tab` + `aria-selected`, keyboard arrow support, guard empty `tabs`, tokens.
- **ContactForm** — swap `form-container` + raw inputs to shadcn `Input`/`Button`; add inline validation + accessible status; preserve the `/api/contact` POST flow and exact labels/placeholders.
- **ContentWithSidebar** — token-driven sidebar; better sticky/scroll behavior.

**Definition of done:** all content pages inherit the new chrome with identical text.

---

## Phase 5 — Inner Pages & Cards

**Files:** all remaining feature/pages files (about subgroup, academics, admissions, library, achievements, gallery+media, blog, reviews)

**Do:**

- **Data tables** (committee rosters, PTA, admin staff, library AY table, fee tables, medal tables): convert raw `<table className="border-...">` layouts to a shared token-based table treatment (clean header band, striped rows, responsive `overflow-x-auto`). Cell content unchanged.
- **Commerce landing** — per decision: remove or restyle the auto-popup dialog; restyle duplicated home sections; drop orphaned FontAwesome `<i className="fa ...">`.
- **Gallery / achievements / media** — consolidate duplicated lightboxes into one accessible `Lightbox` (focus trap, Esc/arrows, `aria-modal`); token-refactor `GalleryCard`, `EventModal`, `GalleryYearNav`, `NewsletterPage`, video grid (add `title`, `loading="lazy"` to iframes).
- **Blog** — refactor the live `src/app/blog/*` implementation (BlogCard/BlogModal); preserve `dangerouslySetInnerHTML` content exactly.
- **Reviews** — token-refactor carousel/list/highlight; keep 6s auto-advance, pause-on-hover, filtering.
- **FacultyList** — give `panel-title`/`panel-body` real card styling.
- **Images** — replace `next/image` inline `style={{ maxWidth: "100%", height: "auto" }}` with utility classes; keep `unoptimized`.

**Definition of done:** every inner route and modal/lightbox verified against original screenshots/dumps.

---

## Phase 6 — QA & Production Guardrails

**Do:**

- `next build` passes (run with Node v24: `~/.nvm/versions/node/v24.18.1/bin/npx next build`).
- **Visual content-parity check**: walk every route and diff on-page text against the original.
- Confirm: no route changes, no metadata/SEO changes, no text edits, no schema/slug changes.
- A11y pass on modals, tabs, nav, accordion, forms (focus, ARIA, keyboard).

---

## Deferred / Out-of-Scope Decisions

| # | Item | Options | Default recommendation |
|---|---|---|---|
| 1 | `src/features/*` `null`-stub dead components (blog, media, admissions, library, stream-selector, subject-card, academic-plan) | delete / leave | delete (no content impact) |
| 2 | Commerce landing auto-popup dialog on load | remove / restyle | restyle with focus mgmt (or remove if disruptive) |
| 3 | Science landing page (currently 404) | create matching commerce-style landing | out of scope (new content) |
| 4 | Non-visual data fixes (duplicate book cover, gallery filename space) | fix / leave | leave by default |
| 5 | Dark mode toggle | add / skip | skip unless requested |

> Decision log is tracked in `UI Revamp — Task List.md` and will be locked before Phase 1 execution.

---

## Constraints Checklist (from the master prompt)

- [ ] Zero changes to content text, copy, or approved labels
- [ ] Zero route, URL, slug, or sitemap changes
- [ ] Zero metadata/SEO/title/description changes
- [ ] Zero data-schema/module-shape changes
- [ ] Zero new libraries where existing/stock utilities suffice
- [ ] Every image asset untouched and still referenced identically
- [ ] All external links (PCET institutes, phone, email) preserved verbatim