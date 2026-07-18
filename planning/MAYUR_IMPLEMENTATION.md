# MAYUR — IMPLEMENTATION PLAN

## Navigation, Gallery, Media, Reviews, Achievements, 7 Commerce Subjects

---

## 1. RESPONSIBILITIES

You own the following domains completely:

1. **Navigation System** — MainNav (desktop dropdown), MobileNav (hamburger menu)
2. **Gallery** — Activities gallery (by academic year), Guest lectures gallery (by academic year)
3. **Achievements Gallery** — Student academic achievements, co-curricular activity images
4. **Media** — Newsletter press clippings, Video gallery
5. **Reviews** — Student/parent testimonials with carousel
6. **Commerce Subjects (7)** — SP, IT, Mathematics, English, Hindi, Marathi, OCM

### Owned Public Assets

```
public/images/gallery/activities/     # Year-wise activity photos
public/images/gallery/guest-lectures/ # Guest lecture photos
public/images/co-curricular/          # Co-curricular activity images
public/images/academic-achievements/  # Topper photos, result highlights
public/images/newsletter/             # Press clippings by year
public/images/blogs/                  # Blog feature images
public/pdf/commerce/sp/
public/pdf/commerce/it/
public/pdf/commerce/math/
public/pdf/commerce/english/
public/pdf/commerce/hindi/
public/pdf/commerce/marathi/
public/pdf/commerce/ocm/
```

## 2. OWNED FOLDERS & ROUTES

### Pages

| Route | Source File | Purpose |
|-------|-------------|---------|
| `/gallery/activities` | `activities.php` | Activities photo gallery |
| `/gallery/guest-lectures` | `guest-lectures.php` | Guest lecture gallery |
| `/gallery/achievements` | `achievements.php` | Achievements gallery |
| `/media/newsletter` | `newsletter.php` | Press clippings |
| `/media/video` | `sbpcsc-video.php` | Video gallery |
| `/reviews` | `sbpcsc-reviews.php` | Student/parent reviews |
| `/academics/commerce/sp` | `commerce/about-secretarial.php` | Secretarial Practice |
| `/academics/commerce/it` | `commerce/about-it.php` | IT (Commerce) |
| `/academics/commerce/math` | `commerce/about-math.php` | Mathematics (Commerce) |
| `/academics/commerce/english` | `commerce/about-english.php` | English (Commerce) |
| `/academics/commerce/hindi` | `commerce/about-hindi.php` | Hindi (Commerce) |
| `/academics/commerce/marathi` | `commerce/about-marathi.php` | Marathi (Commerce) |
| `/academics/commerce/ocm` | `commerce/about-ocm.php` | OCM |

### Feature Folders

```
src/features/navigation/
src/features/navigation/components/MainNav.tsx
src/features/navigation/components/MobileNav.tsx

src/features/gallery/
src/features/gallery/components/GalleryGrid.tsx
src/features/gallery/components/GalleryYearNav.tsx
src/features/gallery/components/Lightbox.tsx
src/features/gallery/components/GalleryCard.tsx
src/features/gallery/components/GuestLectureCard.tsx
src/features/gallery/data/gallery-data.ts

src/features/achievements/
src/features/achievements/components/AchievementCard.tsx
src/features/achievements/components/AchievementYearFilter.tsx
src/features/achievements/components/CoCurricularGrid.tsx
src/features/achievements/data/achievements-data.ts

src/features/media/
src/features/media/components/NewsletterGrid.tsx
src/features/media/components/NewsletterCard.tsx
src/features/media/components/VideoGallery.tsx
src/features/media/components/VideoCard.tsx
src/features/media/data/media-data.ts

src/features/reviews/
src/features/reviews/components/TestimonialCarousel.tsx
src/features/reviews/components/ReviewCard.tsx
src/features/reviews/data/review-data.ts

src/features/academics/
src/features/academics/components/SubjectTabs.tsx
src/features/academics/components/SubjectAbout.tsx
src/features/academics/components/FacultyList.tsx
src/features/academics/components/SyllabusTab.tsx
src/features/academics/components/QuestionPapersTab.tsx
src/features/academics/components/DownloadsTab.tsx
src/features/academics/components/TeachingPlanTab.tsx
src/features/academics/data/sp.ts
src/features/academics/data/it-commerce.ts
src/features/academics/data/math-commerce.ts
src/features/academics/data/english-commerce.ts
src/features/academics/data/hindi-commerce.ts
src/features/academics/data/marathi-commerce.ts
src/features/academics/data/ocm.ts
```

## 3. FEATURES

### 3.1 Navigation System

**MainNav** — `src/features/navigation/components/MainNav.tsx`
- Multi-level dropdown (7 top-level items)
- Active state based on current route
- Responsive: desktop hover, mobile hamburger toggle

**MobileNav** — `src/features/navigation/components/MobileNav.tsx`
- Hamburger button at mobile breakpoint
- Slide-in submenu accordion

### 3.2 Gallery

**Activities Gallery**: Photo gallery organized by academic year (2021-22 through 2026-27)
- Image grid with lightbox
- Year-based navigation/filter
- ~5700 lines of legacy content to extract

**Guest Lectures Gallery**: Guest lecture and career guidance session photos by year
- Image grid with lightbox
- Year-based navigation

**Achievements Gallery**: Student achievements, toppers, co-cururricular activities
- Image grid with descriptions
- Year-based filtering

### 3.3 Media

**Newsletter**: Press clippings and news articles organized by year
- Image grid of newspaper clippings
- Year-based navigation

**Video Gallery**: Embedded YouTube videos
- Video cards with thumbnails
- Click to play / embed

### 3.4 Reviews

**TestimonialCarousel**: Student and parent reviews
- Carousel/slider with auto-rotation
- Quote + reviewer name + optional photo

### 3.5 Subject Pages (7 Commerce)

Each subject page follows a shared template:
- Subject introduction / overview
- Faculty profile (name, qualification, experience, photo)
- Downloadable PDFs (question papers, textbooks, teaching plans)

## 4. IMPLEMENTATION ORDER

| Step | Task | Est. Hours |
|------|------|------------|
| 1 | MainNav (desktop dropdown) | 8 |
| 2 | MobileNav (hamburger menu) | 6 |
| 3 | Activities Gallery (image grid + lightbox) | 10 |
| 4 | Guest Lectures Gallery | 6 |
| 5 | Achievements Gallery | 6 |
| 6 | Newsletter page | 6 |
| 7 | Video Gallery | 4 |
| 8 | Reviews page with carousel | 6 |
| 9 | Commerce subject pages (7 subjects) | 14 |
| **Total** | | **66 hours** |

## 5. DELIVERABLES

- [ ] Navigation works: dropdown on desktop, hamburger on mobile
- [ ] Active nav state highlights current route
- [ ] Activities gallery shows all years with lightbox
- [ ] Guest lectures gallery shows all years with lightbox
- [ ] Achievements gallery shows toppers and activities
- [ ] Newsletter page shows press clippings by year
- [ ] Video gallery shows embedded YouTube videos
- [ ] Reviews page has testimonial carousel
- [ ] All 7 commerce subject pages render with faculty + PDFs
- [ ] No TypeScript errors
- [ ] No `any` types
- [ ] All images use `next/image` with `alt` text
- [ ] Metadata set on every page
