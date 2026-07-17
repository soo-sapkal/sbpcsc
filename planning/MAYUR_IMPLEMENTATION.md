# MAYUR — IMPLEMENTATION PLAN

## Gallery, Achievements, Blog, Media, Reviews, Committees, Administration Staff

---

## 1. RESPONSIBILITIES

You own the following domains completely:

1. **Gallery** — Activities gallery (by academic year), Guest lectures gallery (by academic year)
2. **Achievements** — Student academic achievements, co-curricular activities
3. **Blog** — Blog article listing and individual articles
4. **Media** — Newsletter press clippings, Video gallery
5. **Reviews** — Student/parent testimonials
6. **Co-curricular** — Sports, cultural activities images and descriptions
7. **Academic Achievements** — Topper photos, result highlights

## 2. OWNED FOLDERS

```
src/app/gallery/
src/app/gallery/layout.tsx
src/app/gallery/activities/[year]/page.tsx
src/app/gallery/guest-lectures/[year]/page.tsx

src/app/achievements/page.tsx

src/app/blog/
src/app/blog/page.tsx
src/app/blog/[slug]/page.tsx

src/app/media/
src/app/media/layout.tsx
src/app/media/newsletter/page.tsx
src/app/media/video/page.tsx

src/app/reviews/page.tsx

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

src/features/blog/
src/features/blog/components/BlogCard.tsx
src/features/blog/components/BlogList.tsx
src/features/blog/components/BlogDetail.tsx
src/features/blog/components/BlogSidebar.tsx
src/features/blog/data/blog-content.ts

src/features/media/
src/features/media/components/NewsletterGrid.tsx
src/features/media/components/NewsletterCard.tsx
src/features/media/components/VideoGallery.tsx
src/features/media/components/VideoCard.tsx
src/features/media/data/newsletter-data.ts
src/features/media/data/video-data.ts

src/features/reviews/
src/features/reviews/components/TestimonialCard.tsx
src/features/reviews/components/TestimonialList.tsx
src/features/reviews/components/TestimonialHighlight.tsx
src/features/reviews/data/testimonials-data.ts

src/types/achievement.ts
src/types/gallery.ts
src/types/blog.ts
src/types/media.ts
src/types/testimonial.ts
```

### Owned Public Assets

```
public/images/gallery/
public/images/gallery/activities/2021-22/
public/images/gallery/activities/2022-23/
public/images/gallery/activities/2023-24/
public/images/gallery/activities/2024-25/
public/images/gallery/activities/2025-26/
public/images/gallery/activities/2026-27/
public/images/gallery/guest-lectures/2021-22/
public/images/gallery/guest-lectures/2022-23/
public/images/gallery/guest-lectures/2023-24/
public/images/gallery/guest-lectures/2025-26/

public/images/blogs/
public/images/acoustics-energy-and-vibrations.jpg
public/images/education-system-1.jpg
public/images/e-r-braithwaite.jpg
public/images/nanotechnology-1.jpg
public/images/nanotechnology-2.jpg
public/images/rajmohan-to-rushdie-01.jpg
public/images/rajmohan-to-rushdie-02.jpg

public/images/newsletter/
public/images/newsletter/2017-18/
public/images/newsletter/2018-19/
public/images/newsletter/2019-20/
public/images/newsletter/2021-22/
public/images/newsletter/2022-23/
public/images/newsletter/2024-25/
public/images/newsletter/2025-26/

public/images/co-curricular/
public/images/co-curricular/*         # Moves from images/co-curricular-activities/

public/images/academic-achievements/
public/images/academic-achievements/* # Moves from images/academic-achievements/

public/images/yogesh/                 # Duplicate images — deduplicate during migration
```

## 3. OWNED ROUTES

| Route | Source File(s) | Purpose |
|-------|----------------|---------|
| `/gallery/activities/2021-22` | `activities.php` (anchor: #activities-2021-22) | Activities gallery by year |
| `/gallery/activities/2022-23` | `activities.php` | Activities gallery by year |
| `/gallery/activities/2023-24` | `activities.php` | Activities gallery by year |
| `/gallery/activities/2024-25` | `activities.php` | Activities gallery by year |
| `/gallery/activities/2025-26` | `activities.php` | Activities gallery by year |
| `/gallery/activities/2026-27` | `activities.php` | Activities gallery by year |
| `/gallery/guest-lectures/2021-22` | `guest-lectures.php` | Guest lecture gallery |
| `/gallery/guest-lectures/2022-23` | `guest-lectures.php` | Guest lecture gallery |
| `/gallery/guest-lectures/2023-24` | `guest-lectures.php` | Guest lecture gallery |
| `/gallery/guest-lectures/2025-26` | `guest-lectures.php` | Guest lecture gallery |
| `/achievements` | `achievements.php` + `achievements1.php` | Combined achievements |
| `/blog` | `blog.php` | Blog listing |
| `/blog/[slug]` | `blog.php` (anchor targets) | Individual blog posts |
| `/media/newsletter` | `newsletter.php` | Newsletter press clippings |
| `/media/video` | `sbpcsc-video.php` | Video gallery |
| `/reviews` | `sbpcsc-reviews.php` | Testimonials |

## 4. OWNED FEATURES

### 4.1 Gallery (`src/features/gallery/`)

**GalleryYearNav** — `src/features/gallery/components/GalleryYearNav.tsx`
- Horizontal year selector (2021-22 through 2026-27)
- Active state for current year
- Used on both activities and guest lectures

**GalleryGrid** — `src/features/gallery/components/GalleryGrid.tsx`
- Responsive image grid (2 columns mobile, 3 tablet, 4 desktop)
- Lazy loading images
- Click to open lightbox

**Lightbox** — `src/features/gallery/components/Lightbox.tsx`
- Full-screen overlay for image viewing
- Previous/Next navigation
- Close button + keyboard Escape
- Caption display from alt text
- Smooth open/close animation

**GalleryCard** — `src/features/gallery/components/GalleryCard.tsx`
- Individual image thumbnail in gallery grid
- Hover overlay with title
- Aspect ratio preserved

**GuestLectureCard** — `src/features/gallery/components/GuestLectureCard.tsx`
- Similar to GalleryCard but with lecture topic overlay

### 4.2 Achievements (`src/features/achievements/`)

**AchievementCard** — `src/features/achievements/components/AchievementCard.tsx`
- Card with achievement image, student name, rank/score, year
- Used for academic toppers (HSC, CET, NEET, JEE)

**CoCurricularGrid** — `src/features/achievements/components/CoCurricularGrid.tsx`
- Sports and cultural activity achievements
- Filterable by category (sports, cultural, academic)

**AchievementYearFilter** — `src/features/achievements/components/AchievementYearFilter.tsx`
- Year tabs to filter achievements

### 4.3 Blog (`src/features/blog/`)

**BlogCard** — `src/features/blog/components/BlogCard.tsx`
- Blog preview card with thumbnail, title, excerpt, date
- Link to full article

**BlogList** — `src/features/blog/components/BlogList.tsx`
- Grid/list of all blog posts
- Sort by date

**BlogDetail** — `src/features/blog/components/BlogDetail.tsx`
- Full article with content, author, date
- Featured image
- Share buttons

**BlogSidebar** — `src/features/blog/components/BlogSidebar.tsx`
- Recent posts
- Categories/tags (if applicable)

### 4.4 Media (`src/features/media/`)

**NewsletterGrid** — `src/features/media/components/NewsletterGrid.tsx`
- Grid of newsletter clippings
- Filterable by year

**NewsletterCard** — `src/features/media/components/NewsletterCard.tsx`
- Newspaper clipping thumbnail
- Click to enlarge
- Source publication label

**VideoGallery** — `src/features/media/components/VideoGallery.tsx`
- Grid of video embeds
- YouTube iframe embeds

**VideoCard** — `src/features/media/components/VideoCard.tsx`
- Video thumbnail + play button overlay
- Title and description

### 4.5 Reviews (`src/features/reviews/`)

**TestimonialCard** — `src/features/reviews/components/TestimonialCard.tsx`
- Quote icon + testimonial text
- Reviewer name, stream, batch
- User avatar placeholder
- Colorful bar accent

**TestimonialList** — `src/features/reviews/components/TestimonialList.tsx`
- Full list of all testimonials
- Filter by stream (Science, Commerce)

**TestimonialHighlight** — `src/features/reviews/components/TestimonialHighlight.tsx`
- Featured/testimonial for the current year

## 5. GALLERY IMAGE INVENTORY

### Activities Gallery (by academic year)

| Year | Events Covered | Image Count |
|------|---------------|-------------|
| 2021-22 | Khande Navami, Shahu Maharaj Jayanti, Elocution, Hindi Diwas, Vaccination Camp | ~56 |
| 2022-23 | Independence Day, Annual Gathering, Career Guidance, Science Day, Yoga Day, Sports Day | ~161 |
| 2023-24 | Induction, Annual Gathering, APJ Abdul Kalam, Environment Day, Mehendi, Teachers Day | ~207 |
| 2024-25 | Brainwaves, Granth Dindi, Drone Workshop, Fun Fair, Ganesh Idol, NEP Seminar | ~177 |
| 2025-26 | Brainwaves 2025, Republic Day, Yoga Day, Dandiya, Dental Checkup, Pariksha Pe Charcha | ~190 |
| 2026-27 | Environment Day, Yoga Day | ~14 |

### Guest Lectures Gallery (by academic year)

| Year | Topics | Image Count |
|------|--------|-------------|
| 2021-22 | C++ Workshop, Career Guidance (Commerce, BBA), Exam Prep | ~44 |
| 2022-23 | Career Guidance 2022-23 | ~6 |
| 2023-24 | Career Guidance (Commerce), Health Awareness | ~37 |
| 2025-26 | AI Career Counseling, Cyber Security, Merchant Navy, Cancer Awareness | ~36 |

## 6. BLOG POSTS INVENTORY

| Title | Image |
|-------|-------|
| Acoustics, Energy and Vibrations | `acoustics-energy-and-vibrations.jpg` |
| Education System | `education-system-1.jpg` |
| E.R. Braithwaite | `e-r-braithwaite.jpg` |
| Nanotechnology (2 parts) | `nanotechnology-1.jpg`, `nanotechnology-2.jpg` |
| Rajmohan to Rushdie (2 parts) | `rajmohan-to-rushdie-01.jpg`, `rajmohan-to-rushdie-02.jpg` |

## 7. CO-CURRICULAR & ACHIEVEMENTS INVENTORY

| Category | Image Count | Types |
|----------|-------------|-------|
| Sports | ~55 | Boxing, Wrestling, Football, Judo, Kho-Kho, Archery, Cycling |
| Academic | ~78 | CET Toppers, HSC Results, NEET Results, Eklavya Awards, Symbi Utsav |

## 8. IMPLEMENTATION ORDER

| Step | Task | Est. Hours |
|------|------|------------|
| 1 | Define TypeScript types (gallery, achievement, blog, media, testimonial) | 4 |
| 2 | Create gallery data file (all years, events, image paths) | 8 |
| 3 | GalleryGrid + Lightbox components | 8 |
| 4 | GalleryYearNav component | 2 |
| 5 | Dynamic gallery route `[year]/page.tsx` for activities | 4 |
| 6 | Dynamic gallery route `[year]/page.tsx` for guest lectures | 4 |
| 7 | Gallery layout with sidebar navigation | 2 |
| 8 | Achievements data file + AchievementCard | 6 |
| 9 | Achievements page | 4 |
| 10 | CoCurricularGrid + filtering | 4 |
| 11 | Blog data file (7 articles) | 4 |
| 12 | BlogCard + BlogList components | 4 |
| 13 | BlogDetail component with full article rendering | 6 |
| 14 | Blog dynamic routes (listing + [slug]) | 4 |
| 15 | Newsletter data file + NewsletterGrid | 6 |
| 16 | Video gallery page | 4 |
| 17 | Media layout + routes | 2 |
| 18 | Testimonial data file (extract from reviews.php) | 6 |
| 19 | TestimonialCard + TestimonialList | 4 |
| 20 | Reviews page | 2 |
| **Total** | | **88 hours** |

## 9. TIMELINE

| Week | Hours | Deliverables |
|------|-------|-------------|
| W2 | 40 | Types, gallery data, gallery grid, lightbox, year nav (steps 1-5) |
| W3 | 40 | All gallery routes, achievements (steps 6-10) |
| W4 | 40 | Blog (steps 11-14) |
| W5 | 40 | Media: newsletter + video (steps 15-17) |
| W6 | 40 | Reviews, polish, data completeness (steps 18-20) |

## 10. DELIVERABLES

### Phase One Deliverables (End of Week 6)

- [ ] All 10 gallery year-routes generate correctly with images
- [ ] Lightbox opens on image click with navigation
- [ ] Gallery year navigation switches between years
- [ ] Achievements page shows academic toppers + co-curricular activities
- [ ] Achievement filters work by year and category
- [ ] Blog listing shows all 7 articles with preview cards
- [ ] Individual blog articles render at `/blog/[slug]`
- [ ] Newsletter grid shows clippings by year
- [ ] Video gallery embeds play correctly
- [ ] Reviews page lists all testimonials
- [ ] Testimonials can be filtered by stream
- [ ] All gallery images use `next/image` with lazy loading
- [ ] Gallery images are optimized (WebP conversion where appropriate)
- [ ] No TypeScript errors in owned code

## 11. DEFINITION OF DONE

- [ ] TypeScript strict mode passes on all owned files
- [ ] ESLint returns zero errors
- [ ] All gallery images optimized via `next/image`
- [ ] Lightbox keyboard navigation works (arrow keys, Escape)
- [ ] Gallery year routes statically generated via `generateStaticParams`
- [ ] Blog posts rendered from data files with full content
- [ ] All newsletter images load by year
- [ ] Video embeds render and play correctly
- [ ] Testimonials display properly with quote styling
- [ ] Metadata (title, description, OG) set on every gallery/year page
- [ ] Gallery images lazy-loaded (no initial load performance hit)
- [ ] Responsive image grid (2 col mobile → 4 col desktop)
- [ ] Breadcrumb shows: Student Corner > Gallery > Activities > Year

## 12. INTEGRATION CHECKPOINTS

| Checkpoint | When | What to Deliver | How |
|------------|------|----------------|-----|
| CP1 | End of W3 | Gallery + Achievements | Push to `feature/developer-c` |
| CP2 | End of W5 | Blog + Media | Push to `feature/developer-c` |
| CP3 | End of W6 | Reviews + full feature set | Push + request merge to `develop` |
| CP4 | W8 (M1-M3) | Integration with other devs | Attend merge session |

## 13. FILES YOU SHOULD NEVER MODIFY

| File/Directory | Why |
|----------------|-----|
| `src/features/layout/` | Owned by Developer A |
| `src/features/navigation/` | Owned by Developer A |
| `src/features/home/` | Owned by Developer A |
| `src/features/about/` | Owned by Developer A |
| `src/features/admissions/` | Owned by Developer A |
| `src/features/contact/` | Owned by Developer A |
| `src/features/launch/` | Owned by Developer A |
| `src/features/academics/` | Owned by Developer B |
| `src/features/library/` | Owned by Developer B |
| `src/app/(about)/*` | Owned by Developer A |
| `src/app/academics/*` | Owned by Developer B |
| `src/app/admission/*` | Owned by Developer A |
| `src/app/contact/*` | Owned by Developer A |
| `src/app/library/*` | Owned by Developer B |
| `src/components/ui/*` | Shared — changes only via PR to architect |
| `src/lib/*` | Shared — changes only via PR to architect |
| `src/styles/globals.css` | Shared — review with architect |
| `src/types/faculty.ts` | Owned by Developer B |
| `src/types/subject.ts` | Owned by Developer B |
| `src/types/pdf.ts` | Owned by Developer B |
| `public/images/faculty/` | Owned by Developer B |
| `public/images/slider/` | Owned by Developer A |
| `public/images/icons/` | Owned by Developer A |
| `public/images/facilities/` | Owned by Developer A |
| `public/pdf/science/` | Owned by Developer B |
| `public/pdf/commerce/` | Owned by Developer B |

## 14. COMMUNICATION RULES

- You do NOT need to wait for Developer A or B to start work
- Your gallery data references images in `public/images/gallery/` — these are YOUR files
- If you need to reference faculty photos for testimonials, create a REFERENCE data file that just contains photo paths (do NOT import from Dev B's faculty data)
- Cross-link to other routes using path strings (e.g., `/academics/science/physics`, `/about/pcet`)
- The `activities.php` source file is ~5700 lines — focus on extracting the gallery structure, not every line
- Document any content gaps you find in the PHP source

## 15. CONTENT EXTRACTION GUIDE

### Gallery Data Structure

```typescript
interface GalleryYear {
  year: string;           // "2025-26"
  label: string;          // "2025-2026"
  events: GalleryEvent[];
}

interface GalleryEvent {
  name: string;           // "Brainwaves 2025"
  anchorId: string;       // "BRAINWAVES2025"
  images: GalleryImage[];
  type: 'activities' | 'guest-lecture';
}

interface GalleryImage {
  src: string;            // "/images/gallery/activities/2025-26/brainwaves-2025-1.jpeg"
  alt: string;
  caption?: string;
}
```

### Source Files Key Sections

**activities.php** (~5700 lines):
- Sections separated by year headings
- Each year has multiple event sections with headings
- Images referenced with `<img src="images/gallery/activities/2025-26/...">`
- Anchor IDs for navigation jumps

**guest-lectures.php**:
- Same pattern as activities
- Organized by academic year
- Each lecture event has topic and photos

**blog.php**:
- Individual blog posts separated by PHP conditionals
- Each post has: title, author (optional), date, image, content
- Content is HTML with paragraphs

**newsletter.php**:
- Images organized by academic year
- Newspaper clipping screenshots
- Captions with publication name and date

**sbpcsc-video.php**:
- YouTube embed iframes
- Video titles
- Descriptions

**sbpcsc-reviews.php**:
- Testimonials with: student name, stream, batch, review text
- No photos for most testimonials

## 16. SPECIAL CONSIDERATIONS

### 16.1 Lightbox Implementation
- Do NOT reuse the old jQuery smoothbox
- Implement a clean React dialog/overlay
- Preload adjacent images for smooth navigation
- Ensure keyboard accessibility (arrow keys, Escape)

### 16.2 Gallery Performance
- Gallery has ~800+ images across all years
- Use `next/image` with `priority: false` and lazy loading
- Consider loading only current year images initially
- Gallery year navigation switches without full page reload (if possible)

### 16.3 Blog Content
- Blog articles are educational/philosophical (not news)
- Content is HTML — convert to structured data or MDX
- Each blog has associated featured image

### 16.4 Video Embedding
- Videos are YouTube embeds
- Use `next/script` for YouTube iframe API (if needed)
- Lazy load iframes for performance

### 16.5 Duplicate Images
- `images/yogesh/` contains duplicates of co-curricular images
- Deduplicate: point to one canonical path
- `images/co-curricular-activities/` is the primary source

---

*End of MAYUR_IMPLEMENTATION.md*
