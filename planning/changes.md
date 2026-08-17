# UI Revamp — Change Notes

What to look out for in the UI revamp of the SBPCSC website (legacy PHP → Next.js 16).

Scope: all 29 commits on `main` (e09574e → c7f7075), ~980 files changed (+9,654 / −1,834 lines) since the pre-revamp baseline.

---

## 1. Home Page

| What changed | Commit |
|---|---|
| Full home page recreation — header, nav, content, footer | `44a7dfe` |
| Hero carousel narrowed to `max-w-8xl`, rounded corners, shadow | `21c25c2`, `9ec1d21` |
| Gradient overlay on slides + arrows moved inside container (`z-[4]`) | `f6a9a00` |
| Carousel fade duration 0.9s, indicators hidden (matches PHP) | `703e4cd` |
| Carousel aspect ratio fixed to 7:2 (native image dimensions) | `982df7a` |
| Arrow icons reduced to 20px (Bootstrap glyphicon size), no focus outline | `430bce9`, `fdfa935` |
| New sections: IconBoxGrid, NewsScroll, EnrollmentModal, OverviewSection, TestimonialPreview, commerce slider | `04148ea` |

**Verify:** slide timing/aspect on load, arrows overlay correctly, zoom (browser 125–200%) keeps layout intact, no focus ring artifacts on carousel buttons.

## 2. Navigation & Layout

| What changed | Commit |
|---|---|
| Nested multi-level hover dropdowns on MainNav + pointer-overlap fix | `6e207c8` |
| Nav items centered (`justify-center`) | `5c76f2f` |
| All pixel values → rem (zoom-resilient layout) | `2363f8b` |
| Sidebar, MobileNav, Breadcrumb reworked | `04148ea`, `6294a18` |
| About pages routed under `/about/` path segment | `e11b055` |
| Footer, Header, TopStrip, SocialIcons, Spotlight restyled | `44a7dfe` |

**Verify:** hover submenus open/close without dead zones; breadcrumb reflects `/about/` URLs; dropdowns usable on touch/desktop; mobile menu closes on route change.

## 3. Typography & Theming

| What changed | Commit |
|---|---|
| Body/description text → `neutral-700` for better contrast | `cb64b14` |
| Global CSS theme updates (+213 lines) | `04148ea`, `2363f8b` |
| Fonts: Inter (sans) + Poppins (headings) via `next/font` | `04148ea` |

**Verify:** paragraph contrast on white/light backgrounds; heading font loads; no CLS from font swap.

## 4. Testimonials & Reviews

| What changed | Commit |
|---|---|
| Uniform card-based testimonial layout (was mixed styles) | `7e607fb` |
| Testimonial height capped with internal scroll | `4b3afca` |
| New ReviewCard + TestimonialCarousel (topper carousel) | `d5eb51a` |
| Reviews page with filtering | `d5eb51a` |

**Verify:** long testimonials scroll inside card, filter works, carousel autoplay/pause, topper highlight renders.

## 5. Gallery, Achievements & Media

| What changed | Commit |
|---|---|
| GalleryCard, GalleryGrid, GalleryYearNav rebuilt | `04148ea` |
| Lightbox + EventModal added/rebuilt | `04148ea`, `f68fc78` |
| Achievements: AchievementCard, AchievementYearFilter, CoCurricularGrid revamped; table-grid support added | `58f9494`, `04148ea` |
| GuestLectureCard rebuilt, year-based routes (`/gallery/activities/[year]`, `/gallery/guest-lectures/[year]`) | `04148ea` |
| New pages: newsletter (with data file), video gallery, blog (BlogCard + BlogModal) | `3557042`, `93d496c`, `04148ea` |
| ~400 legacy media assets migrated, fallback redirects added | `7811c44`, `3db8835` |

**Verify:** year nav filters correctly; lightbox keyboard/close behavior; image lazy-loading; PDF links resolve; blog modal opens per post.

## 6. About Pages

| What changed | Commit |
|---|---|
| PageBanner → dark overlay + college bg image, 150px (matches PHP `inner-page-banner`) | `4547cd0` |
| PCET institutes layout: float logo, `institutes-title`, `clear-both` | `d7b79b3` |
| New pages: PCET, SBPCSC, Principal's Desk, Administration, Committee, Infrastructure, Rules | `219072e`, `f68fc78` |
| Shared infrastructure: Breadcrumb, PageHeading, about layout | `6294a18` |
| Full content parity with PHP — all 6 remediation phases | `f68fc78` |

**Verify:** banner bg image + overlay on every about page; institute logos float correctly next to titles; content matches legacy PHP page-by-page.

## 7. New / Other Modules

| What changed | Commit |
|---|---|
| Admission tabs page (AdmissionTabs, layout, NavPills) | `04148ea`, `f68fc78` |
| Contact page + `/api/contact` route | `04148ea` |
| Library page | `f68fc78` |
| Academics: subject detail pages (commerce + science `[subject]`), tabs (About/Faculty/Syllabus/Question Papers/Downloads/Teaching Plan) reworked | `50d6b66`, `04148ea` |
| Commerce/social sciences subjects data (+645 lines) | `04148ea` |

**Verify:** subject tabs switch without page reload; faculty list renders; download PDFs open; contact form posts to API and shows success/error.

## Known Notes

- Repo has team branches (`soham`, `prajjwal`, `Mayur`) — `main` is the integration branch.
- `planning/fullaudit.md` contains the consolidated planning/audit doc for the PHP → Next.js migration.
- `temp_hindi.txt` / `temp_marathi.txt` at root are leftover translation scratch files (not part of the app).