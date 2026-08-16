# SBPCSC UI/UX Revamp — Detailed Task List

> Companion to: [`UI Revamp — Implementation Plan.md`](./UI%20Revamp%20—%20Implementation%20Plan.md)
>
> Status legend: `[ ]` pending · `[/]` in progress · `[x]` done · `[~]` blocked on decision
>
> Toolchain: use Node v24 — `~/.nvm/versions/node/v24.18.1/bin/node|npm|npx` (system `node` is v12 and broken).

---

## Phase 0 — Decisions & Setup

- [x] **Lock deferred decisions** (stub deletion, commerce popup, dark mode, data fixes, science landing) — record in this file's Decision Log
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

- [x] Read current `@theme inline` + `:root` + `.dark` blocks in full (done during audit)
- [x] Add semantic tokens: `--color-brand`, `--color-brand-dark`, `--color-brand-soft`, `--color-accent-soft`, surface/section background token, elevation/shadow tokens
- [x] Keep existing variable names stable (shadcn + base contract)
- [x] Normalize duplicated `secondary`/`secondary-foreground` lines in `@theme`
- [ ] Refine `--radius` scale
- [x] Remove or wire up dead legacy CSS (`.carousel-*`, `.sbpcsc-slider`, `.icon-box`, `.gallery_grid`, `.button` hamburger, `.nav-dropdown` reuse)
- [x] Verify `bg-brand`, `text-brand`, `bg-accent` etc. resolve in a scratch route
- [x] Checkpoint: `next build` passes, no regression on home shell

---

## Phase 2 — App Shell & Shared Layout

Files: `src/components/layouts/*`, `src/features/layout/components/*` (`TopStrip`, `Header`, `Footer`, `SocialIcons`, `Spotlight`, `ScrollToTop`), `src/features/navigation/components/*` (`MainNav`, `MobileNav`, `Sidebar`, `Breadcrumb`), `src/app/layout.tsx`

- [x] **TopStrip/Header**: modernize chrome, fix sticky behavior, lock heights across breakpoints, preserve all labels/phones/CTAs
- [x] **MainNav/MobileNav**: token active/hover states, dropdown polish, mobile hamburger + panel
- [x] **Sidebar**: token styling + open/close animation for accordion children
- [x] **Breadcrumb**: tokens for `#444` / `#146ab5` / `#f5f5f5` bits
- [x] **Footer/SocialIcons**: token restyle, same columns/links
- [x] **Spotlight**: token restyle of marquee bars, keep animation
- [x] **ScrollToTop**: token restyle
- [x] Checkpoint: all routes render same sections/text; `next build` passes

---

## Phase 3 — Home Page

Files: `src/features/home/components/*` (`HeroCarousel`, `OverviewSection`, `NewsScroll`, `TestimonialPreview`, `IconBoxGrid`, `EnrollmentModal`), home route page

- [x] **HeroCarousel**: fix 7/2 letterboxing; upgrade caption/overlay/arrows/indicators
- [x] **HeroCarousel**: mobile fallback (currently `hidden md:block` → blank on mobile)
- [x] **OverviewSection**: token cards + consistent section spacing
- [x] **TestimonialPreview**: unify cards; fix `#337ab7`/`#286090` inconsistency
- [x] **IconBoxGrid**: migrate `.icon-box` + `#337ab7` → tokens
- [x] **NewsScroll**: polish alignment; keep green dashed separators
- [x] **EnrollmentModal**: shadcn-Dialog styling; focus management, Esc close, `aria-modal`; keep sessionStorage key + 500ms auto-open
- [x] Checkpoint: home parity verified (text identical), `next build` passes

---

## Phase 4 — Shared Sections, Forms & Content Chrome

Files: `src/components/sections/*` (`PageHeading`, `PageBanner`, `NavPills`, `Section`, `ContactForm`), `src/components/layouts/ContentWithSidebar.tsx`

- [x] **PageHeading**: token banner treatment; keep exact title text
- [x] **PageBanner**: keep fixed `.webp` + dark overlay + fixed attachment; move inline gradient to tokens
- [x] **NavPills**: tab-switch transitions
- [x] **NavPills**: `role="tablist"`/`tab` + `aria-selected` + keyboard arrow support
- [x] **NavPills**: guard empty `tabs` array
- [x] **NavPills**: swap raw hex → tokens
- [x] **ContactForm**: shadcn `Input`/`Button`, inline validation + accessible status; preserve `/api/contact` POST flow + labels/placeholders
- [x] **ContentWithSidebar**: token sidebar + sticky/scroll polish
- [ ] **Section**: token treatment for alternating bands
- [x] Checkpoint: content pages inherit new chrome; `next build` passes

---

## Phase 5 — Inner Pages & Cards

### 5.1 About subgroup
Files: `src/app/(about)/about/*/page.tsx` (`sbpcsc`, `committee`, `administration`, `pcet`, `infrastructure`, `principal-desk`, `rules`)

- [x] **Committee**: token table treatment (roster tables, PTA 5-col table) — same cells
- [x] **Administration**: token table + staff-card images (remove inline `maxWidth` styles)
- [x] **PCET**: founder/trustee grids + institute list styling; remove inline styles; token links (`#337ab7` → token)
- [x] **Infrastructure**: `gallery_grid` → real image card grid; token tabs
- [x] **SBPCSC / Principal-desk / Rules**: token headings/links (`#cf2b1f`, `#337ab7` → tokens)

### 5.2 Academics
Files: `src/app/(academics)/academics/*`, `src/features/academics/components/*`

- [x] **SubjectTabs/SubjectAbout**: token styling; keep `dangerouslySetInnerHTML` description; aboutImages/PDF thumbs token treatment
- [x] **FacultyList**: real card styling for `panel-title`/`panel-body`; token links
- [x] **Syllabus/QuestionPapers/Downloads/TeachingPlan tabs**: token PDF-thumb cards (`#ddd` borders/`#fff` → tokens)
- [x] **Plan page**: PDF thumb grid token restyle
- [x] **Commerce landing**: restyle duplicated home sections; drop FontAwesome `<i>`; per Decision Log — remove/restyle auto-popup dialog; fix news-ticker dead link targets only if not a content change
- [x] **ContentWithSidebar-driven layouts** inherit Phase 4 chrome

### 5.3 Admissions
Files: `src/app/admission/*` (`AdmissionTabs`, page)
- [x] Fee tables (Science, Commerce AY 2026-27): token table treatment, striped rows, `overflow-x-auto`
- [x] PDF thumb cards + process/intake/documents sections token restyle
- [x] Keep all fee numbers and document lists verbatim

### 5.4 Library
Files: `src/app/library/page.tsx`
- [x] Library Collection AY table (merged headers): token table treatment
- [x] Book-cover grid token restyle
- [ ] (Unless approved as data fix: note duplicate `libary-books-10.webp` — leave by default)

### 5.5 Achievements
Files: `src/app/achievements/*`, `src/features/achievements/components/*`
- [x] **AchievementCard**: token titles; video iframes (`title`, lazy); lightbox → shared component
- [x] **CoCurricularGrid**: medal tables token treatment (`#146ab5` header, `#1a237e` footer → tokens); lightbox → shared
- [x] **AchievementYearFilter**: token pills

### 5.6 Gallery & Media
Files: `src/features/gallery/components/*`, `src/app/gallery/*`, `src/app/media/*`, `src/features/media/*`
- [x] Build shared accessible **Lightbox** (focus trap, Esc/arrows, `aria-modal`, counter)
- [x] **GalleryGrid/GalleryCard/EventModal/GalleryYearNav**: token restyle; use shared lightbox; drop `year` prop if unused
- [ ] **GuestLectureCard/Lightbox.tsx** dead code — remove or wire in (per stub decision)
- [x] **Newsletter pages**: token layout for `standalone`/`two-col`/`grid`/`description` modes; use shared lightbox
- [x] **Video page**: iframe `title` + `loading="lazy"`; token grid
- [x] Keep all captions/alt text identical

### 5.7 Blog
Files: `src/app/blog/*` (`page`, `BlogCard`, `BlogModal`, `blog-data.ts`, `layout`)
- [x] **BlogCard/BlogModal**: token restyle; images keep `fill`/`unoptimized`
- [x] Preserve `dangerouslySetInnerHTML` body content exactly (raw HTML includes `<img>` with legacy classes)
- [ ] Blog language badges use existing palette

### 5.8 Reviews
Files: `src/features/reviews/*`, `src/app/reviews/page.tsx`
- [x] **ReviewCard/TestimonialCard**: token accents (`#cf2b1f`/`#146ab5` strips)
- [x] **TestimonialCarousel**: token restyle; keep 6s auto-advance + pause-on-hover + dots
- [x] **TestimonialList**: token filter pills; keep "No reviews found" empty state
- [x] **TestimonialHighlight**: token restyle
- [x] **Reviews page**: token headings/layout

### 5.9 Global image cleanups
- [x] Replace all `next/image` inline `style={{ maxWidth: "100%", height: "auto" }}` with utility classes
- [x] Confirm every image keeps `unoptimized` + same `src`/`alt`

---

## Phase 6 — QA & Production Guardrails

- [x] `npx next build` passes cleanly (Node v24)
- [x] Lint / typecheck run clean (0 errors)
- [x] **Content parity sweep**: every route's visible text diffed against pre-revamp dumps — zero text changes
- [x] Route/AIA/SEO parity: no route, slug, metadata, or sitemap changes
- [x] Data parity: no schema/module-shape changes
- [x] A11y pass: modals (focus trap, Esc, `aria-modal`), tabs (roles, arrows), nav, accordion animation, forms (labels, status)
- [x] Responsive pass: mobile hero fallback, tables scroll on narrow screens, header breakpoints
- [x] Performance sanity: no new heavy deps; lazy iframes; `unoptimized` images unchanged
- [x] Reviewer walkthrough → final sign-off