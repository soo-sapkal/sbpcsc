# Comprehensive Production Readiness Audit Report: SBPCSC Next.js Frontend

## Executive Summary

**Project:** S.B. Patil College of Science and Commerce Website  
**Stack:** Next.js 16.2.10 (App Router) | React 19.2.4 | Tailwind CSS v4 | TypeScript (Strict) | @base-ui/react  
**Build:** ✅ Passes (0 TS errors) | **Lint:** ⚠️ 2 errors, 6 warnings  
**Total Issues Found:** 31 (2 Critical, 8 High, 14 Medium, 7 Low)

---

## Site Map (26 Routes)

| Route | Type | Status |
|-------|------|--------|
| `/` | Static | ✅ |
| `/about/pcet` | Static | ✅ |
| `/about/sbpcsc` | Static | ✅ |
| `/about/principal-desk` | Static | ✅ |
| `/about/committee` | Static | ✅ |
| `/about/administration` | Static | ✅ |
| `/about/infrastructure` | Static | ✅ |
| `/about/rules` | Static | ✅ |
| `/admission` | Static | ✅ |
| `/academics/plan` | Static | ✅ |
| `/academics/science/[subject]` | SSG (11 paths) | ✅ |
| `/academics/commerce/[subject]` | SSG (10 paths) | ✅ |
| `/gallery` | Static | ✅ |
| `/gallery/activities/[year]` | SSG (7 paths) | ✅ |
| `/gallery/guest-lectures/[year]` | SSG (4 paths) | ✅ |
| `/achievements` | Static | ✅ |
| `/blog` | Static | ✅ |
| `/library` | Static | ✅ |
| `/media/newsletter` | Static | ✅ |
| `/media/video` | Static | ✅ |
| `/contact` | Static | ✅ |
| `/reviews` | Static | ✅ |
| `/api/contact` | Dynamic | ✅ |
| `/sitemap.xml`, `/robots.txt` | Static | ✅ |

---

## Critical Issues

### C-1. Image optimization completely disabled
**Severity:** Critical | **Page:** All | **Files:** `next.config.ts:4-6`, all `page.tsx` and components  
**Root cause:** `images.unoptimized: true` in config + every `<Image>` also passes `unoptimized` prop redundantly  
**Impact:** No WebP conversion, no responsive srcSet, no automatic lazy loading placeholder, no blur-data-URL. All images (including large slider images) served as full-resolution originals. ~60%+ wasted bandwidth.  
**Fix:** Remove `unoptimized: true` from config, remove `unoptimized` prop from all `<Image>` components, add proper `sizes` attributes, use `placeholder="blur"` with `blurDataURL` where needed.  
**Effort:** Large

### C-2. XSS vulnerability via `dangerouslySetInnerHTML`
**Severity:** Critical | **Page:** Blog | **Files:** `src/app/blog/BlogModal.tsx:47`, `src/app/layout.tsx:53-58`  
**Root cause:** Blog content rendered via `dangerouslySetInnerHTML` without sanitization. Blog data (`blog-data.ts`) contains raw HTML (`<b>`, `<i>` tags). Google Analytics also uses `dangerouslySetInnerHTML` in `<head>`.  
**Fix:** Use DOMPurify or a React HTML sanitizer for blog content. Replace GA inline script with Next.js `<Script>` component with `strategy="afterInteractive"`.  
**Effort:** Medium

---

## High Issues

### H-1. Unused `title` prop in `PageBanner`
**File:** `src/components/sections/PageBanner.tsx:5`  
**Lint:** `@typescript-eslint/no-unused-vars`  
**Impact:** The `title` prop is accepted but never rendered — banner is just a background div. The background has `backgroundAttachment: "fixed"` which doesn't work on mobile and causes jank.  
**Fix:** Either render the title as text overlay, or remove the prop. Prefer CSS `background-attachment: scroll` on mobile.

### H-2. `setState`-in-effect lint error in `Lightbox`
**File:** `src/features/gallery/components/Lightbox.tsx:21`  
**Lint error:** `react-hooks/set-state-in-effect`  
**Root cause:** `setIndex(initialIndex)` called synchronously inside `useEffect(`, [initialIndex])` — cascading re-render.  
**Fix:** Use `key={initialIndex}` on the parent element instead, or derive state from props.

### H-3. Stub components = dead code
**Files:**
- `src/features/blog/components/BlogCard.tsx`, `BlogList.tsx`, `BlogSidebar.tsx`, `BlogDetail.tsx` — all `return null`
- `src/features/library/components/LibraryOverview.tsx`, `LibaryBookGrid.tsx`, `BookCollection.tsx` — all `return null`
- `src/features/media/components/VideoGallery.tsx`, `VideoCard.tsx`, `NewsletterGrid.tsx`, `NewsletterCard.tsx` — all `return null`
- `src/features/contact/components/ContactInfo.tsx`, `ContactForm.tsx`, `CollegeMap.tsx` — all `return null`

**Impact:** These exported components are never used (pages implement inline alternatives), but remain in the codebase as dead code. Confusing for maintainers.  
**Fix:** Remove stub files and their exports from index files, or implement them properly.

### H-4. All images lack Next.js optimization despite global config
**Files:** Every component using `<Image>`, e.g.: `HeroCarousel.tsx`, `IconBoxGrid.tsx`, `NewsScroll.tsx`, `EnrollmentModal.tsx`, `BlogModal.tsx`, `GalleryCard.tsx`, `GuestLectureCard.tsx`, `Lightbox.tsx`, `EventModal.tsx`, `AchievementCard.tsx`, `CoCurricularGrid.tsx`, `PcetPage.tsx`, `PrincipalDeskPage.tsx`, `LibraryPage.tsx`, `NewsletterPage.tsx`, `Header.tsx`  
**Impact:** See C-1. Combined effect is severe performance degradation.  
**Fix:** See C-1.

### H-5. Invalid `preload` prop on `<Image>` in HeroCarousel
**File:** `src/features/home/components/HeroCarousel.tsx:49`  
**Root cause:** `preload={i === 0}` is not a valid prop on Next.js `<Image>`. Should be `priority`.  
**Impact:** The first image won't be preloaded. Causes LCP regression.  
**Fix:** Replace `preload={i === 0}` with `priority={i === 0}`.

### H-6. Body font override discards Tailwind font system
**File:** `src/app/layout.tsx:62`  
**Code:** `style={{ fontFamily: "Century Gothic, CenturyGothic, AppleGothic, sans-serif" }}`  
**Impact:** Overrides the `--font-sans` (Inter) and `--font-heading` (Poppins) variables loaded with `next/font`. The loaded fonts are wasted HTTP requests. Also breaks the `font-heading` class utility.  
**Fix:** Set font in Tailwind config or `globals.css` using `--font-sans` and `--font-heading` variables instead.

### H-7. MobileNav renders children unconditionally for links with href
**File:** `src/features/navigation/components/MobileNav.tsx:58-68`  
**Code:** `{(item.href \|\| open) && (` — Children render even when `open` is false if `item.href` exists.  
**Impact:** Nested `<ul>` always in DOM for nav items that have both `href` and `children`.  
**Fix:** Change condition to `{open && item.children && (`.

### H-8. Contact form bypasses UI component library
**Files:** `src/components/sections/ContactForm.tsx` vs `src/components/ui/input.tsx` and `ui/textarea.tsx`  
**Impact:** Form inputs use raw `<input>` / `<textarea>` with basic Tailwind classes instead of the `@base-ui/react` based `Input` and `Textarea` components. Inconsistent styling, missing accessibility features, no focus ring integration.  
**Fix:** Replace with `<Input>` and `<Textarea>` UI components.

---

## Medium Issues

| # | Issue | File | Details |
|---|-------|------|---------|
| M-1 | Duplicate image in library array | `src/app/library/page.tsx:23-36` | `libary-books-10.webp` appears at indices 2 and 9 |
| M-2 | GA script uses `<script>` instead of `<Script>` component | `src/app/layout.tsx:47-60` | Blocks rendering; should use `next/script` with `strategy="afterInteractive"` |
| M-3 | Layout has nested `<main>` elements | `RootLayout` wraps `children` which may contain `<main>` from `ContentWithSidebar` | Semantic HTML violation |
| M-4 | `Section` component is unused | `src/components/sections/Section.tsx` | Dead code, never imported anywhere |
| M-5 | Duplicate heading on Admission page | Admission layout adds `PageBanner`; Admission page adds `PageHeading` | Redundant |
| M-6 | Hardcoded colors and inline styles in `SocialIcons` | `src/features/layout/components/SocialIcons.tsx:80-92` | Uses inline `style` objects for colors/widths instead of Tailwind |
| M-7 | Missing `loading`/`error` boundaries on route groups | No `loading.tsx` in `(about)/`, `(academics)/`, gallery/ | All nested routes share only the root loading.tsx |
| M-8 | No `Suspense` for YouTube iframes | `src/app/media/video/page.tsx` | 13 YouTube embeds load simultaneously; no wrapper/skeleton |
| M-9 | `NavPills` has no URL sync | `src/components/sections/NavPills.tsx` | Tab state lost on page refresh (no `useSearchParams` or hash sync) |
| M-10 | Missing `metadata` on route group layouts | `(about)/layout.tsx`, `(academics)/layout.tsx` don't export metadata | Won't override root metadata for nested pages |
| M-11 | `ContentWithSidebar` uses `<main>` inside root `<main>` | `src/components/layouts/ContentWithSidebar.tsx:10` | Should be `<div>` or `<section>` |
| M-12 | Admission data is hardcoded inline | `src/app/admission/AdmissionTabs.tsx` | Fee structures, eligibility, and cutoff data in component instead of data files |
| M-13 | Typo in filename | `LibaryBookGrid.tsx` | Should be `LibraryBookGrid.tsx` |
| M-14 | `content` prop in `Dialog` component not used | `src/components/ui/dialog.tsx` | Just spreads `...props`; pattern differs from shadcn conventions |

---

## Low Issues

| # | Issue | Details |
|---|-------|---------|
| L-1 | Blog data contains emoji characters directly | `✍` emoji in `blog-data.ts` — unexpected display in some viewports |
| L-2 | Missing `referrerpolicy` on some external links | Several `<a>` tags missing `rel` attributes for external links in pages |
| L-3 | `_not-found` route generated but no custom content | Default Next.js not-found exists separately from `not-found.tsx` |
| L-4 | No `<preconnect>` for Google Analytics / YouTube | Missing `<link rel="preconnect">` for `googletagmanager.com` and `youtube.com` |
| L-5 | No trailing slash configuration | Mixed URL patterns; no `trailingSlash: true` in config |
| L-6 | `loading="lazy"` not explicit on iframes | The Google Maps iframe could benefit from explicit `loading="lazy"` |
| L-7 | Missing `hreflang` tags | Multilingual blog content (Marathi, Hindi, English) but no `hreflang` metadata |

---

## Accessibility Audit (WCAG 2.2 AA)

### Violations Found

| Issue | WCAG Criteria | Location |
|-------|--------------|----------|
| `PageBanner` has no text content (just background image) | 1.1.1 Non-text Content | All pages with banner |
| Social icons use `title` attribute but no `aria-label` | 4.1.2 Name, Role, Value | `SocialIcons.tsx` |
| Hero carousel indicators are hidden by CSS (`display:none`) | 2.1.1 Keyboard | `HeroCarousel.tsx` |
| Blog content rendered via `dangerouslySetInnerHTML` breaks screen reader flow | 4.1.1 Parsing | `BlogModal.tsx` |
| Color contrast: `#333` on `#dfdfdf` (TopStrip) | 1.4.3 Contrast (Minimum) | `TopStrip.tsx` |
| No skip-to-content link | 2.4.1 Bypass Blocks | `layout.tsx` |
| Many images have non-descriptive alt text ("PCET-Founder-President") | 1.1.1 | `page.tsx` files |

---

## Performance Analysis

### Bundle Size Concerns
- **13 YouTube iframes** on `/media/video` (all loaded at once, no lazy loading)
- **No image optimization** — all images serve original sizes
- **Tailwind CSS v4** tree-shaking is good, but redundant `unoptimized` bypasses Next.js Image optimizations
- **Google Analytics** renders synchronously (blocks rendering)
- **Framer Motion** in dependencies (12.42.2) — unconfirmed usage (no `"use client"` animation wrapper found)

### LCP Recommendations
- Add `priority` prop to LCP images (hero slider first image)
- Preload hero bg image
- Move GA to `next/script`
- Enable image optimization

---

## SEO Audit

| Check | Status | Notes |
|-------|--------|-------|
| Title tags | ✅ | Per-page metadata |
| Meta descriptions | ✅ | Present on all pages |
| Open Graph | ⚠️ Partial | `og:title`, `og:description` not explicitly set (only type/locale/siteName) |
| Twitter Cards | ⚠️ Partial | Card type set but no `twitter:image` or `twitter:title` |
| Canonical URLs | ❌ | Not set |
| Structured Data | ❌ | No JSON-LD (Organization, LocalBusiness, WebSite) |
| Sitemap | ✅ | `/sitemap.xml` generated |
| Robots.txt | ✅ | Generated |
| Image alt text | ⚠️ Some non-descriptive | Multiple alt texts are generic |
| Heading hierarchy | ✅ | Generally good |
| Meta keywords | ✅ | On key pages |

---

## Scoring

| Dimension | Score | Notes |
|-----------|-------|-------|
| **Responsive** | 6/10 | Mobile nav works, but fixed-bg banner breaks on mobile, some tables need overflow-x |
| **Accessibility** | 5/10 | Missing skip-link, contrast issues, no aria-labels, hidden indicators |
| **Performance** | 4/10 | No image optimization, synchronous GA, 13 iframes, no lazy loading |
| **Code Quality** | 6/10 | 8 lint issues, stub components, unused code, hardcoded data |
| **UX** | 7/10 | Good content structure, but image-heavy pages will feel slow, duplicate headings |
| **Production Readiness** | **52/100** | Not ready for production due to Critical issues |

---

## Prioritized Action Plan

### Week 1 — Critical & High Impact (fix first)

1. **Enable image optimization** — Remove `unoptimized: true` from config and all `<Image>` components, add `sizes` attributes, replace `preload` with `priority` on hero slider
2. **Fix GA script** — Replace `<script>` with `<Script>` from `next/script`
3. **Sanitize blog content** — Add DOMPurify or use `<div>` with text content; remove `dangerouslySetInnerHTML` where possible
4. **Add Lightbox `key` fix** — Replace `key={initialIndex}` on parent or derive state
5. **Remove unused stub components** — Clean up `features/blog`, `features/library`, `features/media`, `features/contact` stub files
6. **Fix body font override** — Remove inline `fontFamily` style, use Tailwind classes
7. **Make PageBanner render `title`** — Or remove the prop

### Week 2 — Medium Priority

8. Remove duplicate library image
9. Fix MobileNav conditional rendering
10. Add Suspense boundaries for iframes
11. Replace ContactForm inputs with UI library components
12. Fix duplicate headings in Admission flow
13. Add `metadata` exports to route group layouts
14. Fix ContentWithSidebar `<main>` nesting

### Week 3 — Low Priority & Polish

15. Add schema.org structured data (JSON-LD)
16. Add `hreflang` meta for multilingual content
17. Add skip-to-content link
18. Improve image alt text quality
19. Add preconnect links for GA and YouTube
20. Remove unused `Section` component

---

**Bottom line:** The build succeeds and all routes render, but the site is **not production-ready** due to image optimization being fully disabled (60%+ potential bandwidth savings lost), an XSS vector in blog content, and accessibility gaps. Address the Critical and High items before deploying.
