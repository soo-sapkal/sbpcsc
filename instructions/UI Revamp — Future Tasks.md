# SBPCSC UI/UX Revamp — Future Tasks

> Companion to: [`UI Revamp — Implementation Plan.md`](./UI%20Revamp%20—%20Implementation%20Plan.md) and [`UI Revamp — Detailed Task List.md`](./UI%20Revamp%20—%20Detailed%20Task%20List.md)
>
> This file captures **explicitly out-of-scope** items from the current revamp. Anything here changes content, data, routes, or architecture beyond the presentation layer, so it is intentionally deferred. Nothing in this list blocks the current revamp.

---

## Out-of-Scope Inventory

### 1. Delete dead `null`-returning stub components

The revamp leaves these untouched (decision: defer deletion). All of them return `null` and are imported nowhere — they render zero content on the live site. The real implementations live colocated in route folders or in the feature barrel.

- `src/features/blog/components/*` — `BlogCard`, `BlogList`, `BlogDetail`, `BlogSidebar`
  - Live replacement: `src/app/blog/` (`page.tsx`, `BlogCard.tsx`, `BlogModal.tsx`, `blog-data.ts`)
- `src/features/media/components/*` — `NewsletterGrid`, `NewsletterCard`, `VideoGallery`, `VideoCard`
  - Live replacement: `src/app/media/newsletter/page.tsx`, `src/app/media/video/page.tsx` (these import **data** from `features/media/data/*` — keep the data files)
- `src/features/admissions/components/*` — `AdmissionTabs`, `AdmissionProcess`, `CutoffList`, `FeeStructure`, `Eligibility`, `BrochureDownload`
  - Live replacement: `src/app/admission/AdmissionTabs.tsx`
- `src/features/library/components/*` — `LibraryOverview`, `BookCollection`, `LibaryBookGrid`
  - Live replacement: `src/app/library/page.tsx`
- `src/features/academics/components/StreamSelector.tsx`, `SubjectCard.tsx`, `AcademicPlan.tsx`
  - (Sibling `SubjectTabs`, `SubjectAbout`, `FacultyList`, `SyllabusTab`, `QuestionPapersTab`, `DownloadsTab`, `TeachingPlanTab` ARE live — keep)
- `src/features/gallery/components/GuestLectureCard.tsx` and `src/features/gallery/components/Lightbox.tsx` (imported nowhere; `GalleryGrid` has its own inline lightbox)

**When doing this:** prune the corresponding `src/features/*/index.ts` barrels to keep only live exports. Keep ALL `src/features/*/data/*` files (media data is imported by live pages; gallery/reviews/achievements data by live components).

### 2. Science landing page (currently 404)

- `/academics/science` returns 404 — there is no `science/page.tsx` landing, while commerce has a full landing (`src/app/(academics)/academics/commerce/page.tsx`).
- Creating a science landing would be **new content** (not just a visual change) — deferred.
- Minimum viable option later: a lightweight science landing mirroring commerce using existing data modules and copy already in the repo.

### 3. Non-visual data artifacts

- Duplicate library cover image: `libary-books-10.webp` listed twice in `src/app/library/page.tsx` book grid.
- Gallery filename with a stray space: `"ganpati- idol-making-competition-"` in `src/features/gallery/data/gallery-data.ts` (likely broken image path).
- Legacy schema drift: `src/data/subjects.ts` re-declares `FacultyMember`/`SubjectConfig` diverging from `src/types/`; `src/types/blog.ts` differs from live `blog-data.ts`; `src/types/testimonial.ts` imported nowhere.
- `CommerceSliderImages` nearly duplicates `slider-images.ts`; `testimonials.ts` duplicates first 3 entries of `review-data.ts`; `layout/data/nav-links.ts` re-exports `data/navigation.ts`. (Duplication was preserved intentionally — do NOT dedupe without explicit approval.)

### 4. Dark mode

- Dark variants exist in `globals.css` but no toggle is wired anywhere. Revamp intentionally skips it (light-mode only).

### 5. Dead / placeholder content & links (content-level, not visual)

- Commerce landing news-ticker links point to `/activities#BRAINWAVES2025` etc.; the real route is `/gallery/activities/…` (no `/activities` path exists).
- "Laboratories" and "Competition" tabs in subject pages show "content coming soon."
- "Admission Process" tab contains a single PDF; "Intake & Eligibility" tab lacks eligibility prose despite its label.
- `ROUTES.LAUNCH` references a `/launch` route that does not exist.
- Media feature barrel exports (`features/media/index.ts`) point to stub components (see item 1).

### 6. Icon-box / sidebar link parity

- Icon-box cards `Hostel` / `Library` / `Class Room` / `Reading Hall` all link to `/about/infrastructure` (catch-all placeholder).
- Verify intended per-card anchors before changing (deferred; content decision).

### 7. FontAwesome dependency

- Commerce landing uses `<i className="fa fa-quote-left">` with no FA stylesheet in the repo (renders blank glyph). Consider replacing with a lucide-react icon when the page is revisited.

### 8. Video embeds

- 13 YouTube iframes embed immediately with no `sandbox` and shared title "SBPCSC Video". Consider click-to-load / lazy-loading + unique titles (deferred; presentational improvement, low priority).

---

## How to use this file

- Each item is a candidate for a future, content-allowed workstream.
- Before starting any item, confirm with the site owner (content/text changes require approval).
- Update status inline as items are picked up: `[ ]` pending · `[/]` in progress · `[x]` done.