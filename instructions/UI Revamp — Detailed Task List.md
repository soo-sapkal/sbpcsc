# SBPCSC UI/UX Revamp — Detailed Task List

> Companion to: [`UI Revamp — Implementation Plan.md`](./UI%20Revamp%20—%20Implementation%20Plan.md)
>
> Status legend: `[ ]` pending · `[/]` in progress · `[x]` done · `[~]` blocked on decision
>
> Toolchain: use Node v24 — `~/.nvm/versions/node/v24.18.1/bin/node|npm|npx` (system `node` is v12 and broken).

---

## Phase 0 — Decisions & Setup

- [ ] **Lock deferred decisions** (stub deletion, commerce popup, dark mode, data fixes, science landing) — record in this file's Decision Log
- [ ] Create working branch / confirm git state (`.opencode/`, `instructions/`, `opencode.json` currently untracked)
- [ ] (Optional) finish pending skill installs — `npx ux-toolkit install --project`, flitzrrr pack clone+copy (Node v24 PATH)
- [ ] Verify each `.opencode/skills/*/SKILL.md` frontmatter; resolve name collisions
- [ ] Snapshot baseline screenshots / text dumps of every route for parity checks

### Decision Log
| Date | Decision | Choice |
|---|---|---|
| _pending_ | Stub feature components (blog, media, admissions, library, etc.) | TBD |
| _pending_ | Commerce landing auto-popup dialog | TBD |
| _pending_ | Dark mode toggle | TBD |
| _pending_ | Non-visual data fixes | TBD |
| _pending_ | Science landing page | TBD (default: out of scope) |

---

## Phase 1 — Token & Theme Foundation

Files: `src/app/globals.css`

- [ ] Read current `@theme inline` + `:root` + `.dark` blocks in full (done during audit)
- [ ] Add semantic tokens: `--color-brand`, `--color-brand-dark`, `--color-brand-soft`, `--color-accent-soft`, surface/section background token, elevation/shadow tokens
- [ ] Keep existing variable names stable (shadcn + base contract)
- [ ] Normalize duplicated `secondary`/`secondary-foreground` lines in `@theme`
- [ ] Refine `--radius` scale
- [ ] Remove or wire up dead legacy CSS (`.carousel-*`, `.sbpcsc-slider`, `.icon-box`, `.gallery_grid`, `.button` hamburger, `.nav-dropdown` reuse)
- [ ] Verify `bg-brand`, `text-brand`, `bg-accent` etc. resolve in a scratch route
- [ ] Checkpoint: `next build` passes, no regression on home shell

---

## Phase 2 — App Shell & Shared Layout

Files: `src/components/layouts/*`, `src/features/layout/components/*` (`TopStrip`, `Header`, `Footer`, `SocialIcons`, `Spotlight`, `ScrollToTop`), `src/features/navigation/components/*` (`MainNav`, `MobileNav`, `Sidebar`, `Breadcrumb`), `src/app/layout.tsx`

- [ ] **TopStrip/Header**: modernize chrome, fix sticky behavior, lock heights across breakpoints, preserve all labels/phones/CTAs
- [ ] **MainNav/MobileNav**: token active/hover states, dropdown polish, mobile hamburger + panel
- [ ] **Sidebar**: token styling + open/close animation for accordion children
- [ ] **Breadcrumb**: tokens for `#444` / `#146ab5` / `#f5f5f5` bits
- [ ] **Footer/SocialIcons**: token restyle, same columns/links
- [ ] **Spotlight**: token restyle of marquee bars, keep animation
- [ ] **ScrollToTop**: token restyle
- [ ] Checkpoint: all routes render same sections/text; `next build` passes

---

## Phase 3 — Home Page

Files: `src/features/home/components/*` (`HeroCarousel`, `OverviewSection`, `NewsScroll`, `TestimonialPreview`, `IconBoxGrid`, `EnrollmentModal`), home route page

- [ ] **HeroCarousel**: fix 7/2 letterboxing; upgrade caption/overlay/arrows/indicators
- [ ] **HeroCarousel**: mobile fallback (currently `hidden md:block` → blank on mobile)
- [ ] **OverviewSection**: token cards + consistent section spacing
- [ ] **TestimonialPreview**: unify cards; fix `#337ab7`/`#286090` inconsistency
- [ ] **IconBoxGrid**: migrate `.icon-box` + `#337ab7` → tokens
- [ ] **NewsScroll**: polish alignment; keep green dashed separators
- [ ] **EnrollmentModal**: shadcn-Dialog styling; focus management, Esc close, `aria-modal`; keep sessionStorage key + 500ms auto-open
- [ ] Checkpoint: home parity verified (text identical), `next build` passes

---

## Phase 4 — Shared Sections, Forms & Content Chrome

Files: `src/components/sections/*` (`PageHeading`, `PageBanner`, `NavPills`, `Section`, `ContactForm`), `src/components/layouts/ContentWithSidebar.tsx`

- [ ] **PageHeading**: token banner treatment; keep exact title text
- [ ] **PageBanner**: keep fixed `.webp` + dark overlay + fixed attachment; move inline gradient to tokens
- [ ] **NavPills**: tab-switch transitions
- [ ] **NavPills**: `role="tablist"`/`tab` + `aria-selected` + keyboard arrow support
- [ ] **NavPills**: guard empty `tabs` array
- [ ] **NavPills**: swap raw hex → tokens
- [ ] **ContactForm**: shadcn `Input`/`Button`, inline validation + accessible status; preserve `/api/contact` POST flow + labels/placeholders
- [ ] **ContentWithSidebar**: token sidebar + sticky/scroll polish
- [ ] **Section**: token treatment for alternating bands
- [ ] Checkpoint: content pages inherit new chrome; `next build` passes

---

## Phase 5 — Inner Pages & Cards

### 5.1 About subgroup
Files: `src/app/(about)/about/*/page.tsx` (`sbpcsc`, `committee`, `administration`, `pcet`, `infrastructure`, `principal-desk`, `rules`)

- [ ] **Committee**: token table treatment (roster tables, PTA 5-col table) — same cells
- [ ] **Administration**: token table + staff-card images (remove inline `maxWidth` styles)
- [ ] **PCET**: founder/trustee grids + institute list styling; remove inline styles; token links (`#337ab7` → token)
- [ ] **Infrastructure**: `gallery_grid` → real image card grid; token tabs
- [ ] **SBPCSC / Principal-desk / Rules**: token headings/links (`#cf2b1f`, `#337ab7` → tokens)

### 5.2 Academics
Files: `src/app/(academics)/academics/*`, `src/features/academics/components/*`

- [ ] **SubjectTabs/SubjectAbout**: token styling; keep `dangerouslySetInnerHTML` description; aboutImages/PDF thumbs token treatment
- [ ] **FacultyList**: real card styling for `panel-title`/`panel-body`; token links
- [ ] **Syllabus/QuestionPapers/Downloads/TeachingPlan tabs**: token PDF-thumb cards (`#ddd` borders/`#fff` → tokens)
- [ ] **Plan page**: PDF thumb grid token restyle
- [ ] **Commerce landing**: restyle duplicated home sections; drop FontAwesome `<i>`; per Decision Log — remove/restyle auto-popup dialog; fix news-ticker dead link targets only if not a content change
- [ ] **ContentWithSidebar-driven layouts** inherit Phase 4 chrome

### 5.3 Admissions
Files: `src/app/admission/*` (`AdmissionTabs`, page)
- [ ] Fee tables (Science, Commerce AY 2026-27): token table treatment, striped rows, `overflow-x-auto`
- [ ] PDF thumb cards + process/intake/documents sections token restyle
- [ ] Keep all fee numbers and document lists verbatim

### 5.4 Library
Files: `src/app/library/page.tsx`
- [ ] Library Collection AY table (merged headers): token table treatment
- [ ] Book-cover grid token restyle
- [ ] (Unless approved as data fix: note duplicate `libary-books-10.webp` — leave by default)

### 5.5 Achievements
Files: `src/app/achievements/*`, `src/features/achievements/components/*`
- [ ] **AchievementCard**: token titles; video iframes (`title`, lazy); lightbox → shared component
- [ ] **CoCurricularGrid**: medal tables token treatment (`#146ab5` header, `#1a237e` footer → tokens); lightbox → shared
- [ ] **AchievementYearFilter**: token pills

### 5.6 Gallery & Media
Files: `src/features/gallery/components/*`, `src/app/gallery/*`, `src/app/media/*`, `src/features/media/*`
- [ ] Build shared accessible **Lightbox** (focus trap, Esc/arrows, `aria-modal`, counter)
- [ ] **GalleryGrid/GalleryCard/EventModal/GalleryYearNav**: token restyle; use shared lightbox; drop `year` prop if unused
- [ ] **GuestLectureCard/Lightbox.tsx** dead code — remove or wire in (per stub decision)
- [ ] **Newsletter pages**: token layout for `standalone`/`two-col`/`grid`/`description` modes; use shared lightbox
- [ ] **Video page**: iframe `title` + `loading="lazy"`; token grid
- [ ] Keep all captions/alt text identical

### 5.7 Blog
Files: `src/app/blog/*` (`page`, `BlogCard`, `BlogModal`, `blog-data.ts`, `layout`)
- [ ] **BlogCard/BlogModal**: token restyle; images keep `fill`/`unoptimized`
- [ ] Preserve `dangerouslySetInnerHTML` body content exactly (raw HTML includes `<img>` with legacy classes)
- [ ] Blog language badges use existing palette

### 5.8 Reviews
Files: `src/features/reviews/*`, `src/app/reviews/page.tsx`
- [ ] **ReviewCard/TestimonialCard**: token accents (`#cf2b1f`/`#146ab5` strips)
- [ ] **TestimonialCarousel**: token restyle; keep 6s auto-advance + pause-on-hover + dots
- [ ] **TestimonialList**: token filter pills; keep "No reviews found" empty state
- [ ] **TestimonialHighlight**: token restyle
- [ ] **Reviews page**: token headings/layout

### 5.9 Global image cleanups
- [ ] Replace all `next/image` inline `style={{ maxWidth: "100%", height: "auto" }}` with utility classes
- [ ] Confirm every image keeps `unoptimized` + same `src`/`alt`

---

## Phase 6 — QA & Production Guardrails

- [ ] `npx next build` passes cleanly (Node v24)
- [ ] `npx lint` / typecheck run clean
- [ ] **Content parity sweep**: every route's visible text diffed against pre-revamp dumps — zero text changes
- [ ] Route/AIA/SEO parity: no route, slug, metadata, or sitemap changes
- [ ] Data parity: no schema/module-shape changes
- [ ] A11y pass: modals (focus trap, Esc, `aria-modal`), tabs (roles, arrows), nav, accordion animation, forms (labels, status)
- [ ] Responsive pass: mobile hero fallback, tables scroll on narrow screens, header breakpoints
- [ ] Performance sanity: no new heavy deps; lazy iframes; `unoptimized` images unchanged
- [ ] Reviewer walkthrough → final sign-off