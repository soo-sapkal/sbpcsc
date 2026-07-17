# MASTER IMPLEMENTATION PLAN

## SBPCSC — Legacy PHP → Next.js 15 Migration

---

## 1. EXECUTIVE SUMMARY

**Project**: S. B. Patil College of Science and Commerce (SBPCSC) Website Revamp
**Current Stack**: Flat-file PHP (no framework), Bootstrap 3, jQuery 1.12.4, Font Awesome 5
**Target Stack**: Next.js 15, React 19, TypeScript, TailwindCSS, Feature-First Architecture
**Team Size**: 3 Developers + 1 Architect/Reviewer (Phase Zero only)
**Total Estimated Effort**: 720–960 hours (across 3 developers over 8–10 weeks)

### Key Statistics

| Metric | Value |
|--------|-------|
| Current PHP files | 52 |
| Image assets | ~400+ (JPG, WEBP, PNG, GIF, SVG) |
| PDF documents | ~250–300 |
| Reusable UI patterns identified | 24 |
| Content entities | 14 |
| Independent modules | 9 |
| Pages to migrate | 33 |
| Subject pages (Science + Commerce) | 19 |

### Migration Strategy

Phase Zero (setup) → Phase One (parallel build) → Integration Milestones → QA → Launch

Three developers can work simultaneously with zero blocking dependencies after Phase Zero completes.

---

## 2. CURRENT ARCHITECTURE ANALYSIS

### 2.1 Technology Overview

| Layer | Current | Target |
|-------|---------|--------|
| Framework | None (flat PHP) | Next.js 15 (App Router) |
| Language | PHP 7.x/8.x, HTML, jQuery | TypeScript (strict) |
| Styling | Bootstrap 3 + custom CSS/205 lines | TailwindCSS + CSS Modules |
| Icons | Font Awesome 5 + Glyphicons | Lucide React + Tailwind icons |
| Lightbox | Custom smoothbox.jquery2.js | shadcn/ui dialog + next/image |
| Carousel | Bootstrap 3 carousel | Embla Carousel (via shadcn/ui) |
| Forms | PHP mail() (vulnerable) | React Email + Resend/Nodemailer |
| Animation | jQuery animate, CSS transitions | Framer Motion |
| Analytics | gtag.js (UA + GA4) | Google Analytics via next/script |
| Database | None | None (static content) |

### 2.2 Current File Architecture

```
Root (flat)
├── index.php                   # Homepage (carousel + sections)
├── header.php                  # Shared header (incl. navigation)
├── footer.php                  # Shared footer
├── gtag.php                    # Google Analytics snippet
├── about-pcet.php              # About PCET Trust
├── about-sbpcsc.php            # About College
├── principal-desk.php          # Principal's message
├── committee.php               # Committees
├── administration.php          # Admin staff
├── infrastructure-and-facilities.php
├── rules-and-regulations.php
├── admission.php               # Admissions
├── academic-plan.php           # Academic calendar
├── activities.php              # Gallery (5700+ lines)
├── guest-lectures.php          # Guest lecture gallery
├── achievements.php            # Student achievements
├── achievements1.php           # Older achievements
├── blog.php                    # Blog articles
├── library.php                 # Library info
├── newsletter.php              # Press clippings
├── sbpcsc-video.php            # Video gallery
├── sbpcsc-contact.php          # Contact form + handler
├── sbpcsc-reviews.php          # Testimonials
├── about-us-sidebar.php        # Sidebar: About
├── academics-sidebar.php       # Sidebar: Academics
├── student-corner-sidebar.php  # Sidebar: Student Corner
├── media-sidebar.php           # Sidebar: Media
├── sitemap.xml                 # 1560+ URLs
├── robots.txt
├── .htaccess
├── css/                        # Bootstrap 3 + custom
├── js/                         # Bootstrap, menu, smoothbox
├── fonts/                      # Glyphicons
├── webfonts/                   # Font Awesome 5
├── images/                     # All image assets (nested)
├── pdf/                        # College PDFs (root)
├── science/                    # 10 subject pages + images/ + pdf/
├── commerce/                   # 9 subject pages + images/ + pdf/
└── launch/                     # Splash page (separate mini-app)
```

### 2.3 Architecture Weaknesses

1. **No separation of concerns** — HTML, PHP, CSS mixed in single files
2. **Massive file sizes** — `activities.php` = ~5700 lines of hard-coded HTML
3. **Hard-coded navigation** — active state determined by `$pagename` variable
4. **Hard-coded site path** — `$serverpath = "http://www.sbpatilcollege.com/"` breaks on non-prod
5. **No data layer** — all content embedded in HTML, no CMS, no database
6. **Duplicate content** — `commerce/index.php` duplicates root `index.php`; `commerce/admission.php` duplicates root `admission.php`
7. **Misplaced files** — 2 PHP files accidentally in `webfonts/` directory
8. **Vulnerable contact form** — PHP mail() header injection, no CSRF, no sanitization
9. **SEO gaps** — missing meta descriptions on many pages, no Open Graph tags
10. **No responsive image optimization** — all images served full-size
11. **No caching strategy** — PHP regenerates every page on every request
12. **No accessibility** — missing ARIA labels, poor contrast ratios, non-semantic HTML

### 2.4 Include Dependency Graph

```
Every page → gtag.php
Every page → header.php (sets $pagename, $serverpath)
Every page → one of 4 sidebar variants: about-us-sidebar | academics-sidebar | student-corner-sidebar | media-sidebar
Every page → footer.php
```

---

## 3. PROPOSED NEXT.JS ARCHITECTURE

### 3.1 Core Principles

1. **Feature-First** — Organize by domain feature, not by file type
2. **Static Generation** — All content statically generated at build time (SSG)
3. **No Database** — All content lives in TypeScript data files, JSON, or MDX
4. **Progressive Enhancement** — Core content works without JavaScript
5. **Accessible by Default** — WCAG 2.1 AA minimum
6. **SEO-Optimized** — Structured metadata, Open Graph, JSON-LD, sitemap generation
7. **Asset Pipeline** — next/image for images, public/ for static files

### 3.2 Complete Future Folder Structure

```
sbpcsc-next/
├── .github/
│   └── workflows/
│       ├── deploy.yml
│       └── lint.yml
├── public/
│   ├── images/
│   │   ├── slider/
│   │   ├── icons/
│   │   ├── facilities/
│   │   ├── faculty/
│   │   │   ├── science/
│   │   │   └── commerce/
│   │   ├── founders/
│   │   ├── gallery/
│   │   │   ├── activities/
│   │   │   │   ├── 2021-22/
│   │   │   │   ├── 2022-23/
│   │   │   │   ├── 2023-24/
│   │   │   │   ├── 2024-25/
│   │   │   │   ├── 2025-26/
│   │   │   │   └── 2026-27/
│   │   │   └── guest-lectures/
│   │   │       ├── 2021-22/
│   │   │       ├── 2022-23/
│   │   │       ├── 2023-24/
│   │   │       └── 2025-26/
│   │   ├── blogs/
│   │   ├── newsletter/
│   │   ├── co-curricular/
│   │   ├── academic-achievements/
│   │   ├── libary-books/
│   │   ├── logo/
│   │   └── yogesh/
│   ├── pdf/
│   │   ├── (root-level college PDFs)
│   │   ├── science/
│   │   │   ├── physics/
│   │   │   ├── chemistry/
│   │   │   ├── biology/
│   │   │   ├── math/
│   │   │   ├── cs/
│   │   │   ├── it/
│   │   │   ├── english/
│   │   │   ├── hindi/
│   │   │   ├── marathi/
│   │   │   └── geography/
│   │   └── commerce/
│   │       ├── account-book-keeping/
│   │       ├── economics/
│   │       ├── english/
│   │       ├── hindi/
│   │       ├── marathi/
│   │       ├── math/
│   │       ├── it/
│   │       ├── ocm/
│   │       └── sp/
│   ├── fonts/
│   └── audio/
├── src/
│   ├── app/
│   │   ├── layout.tsx                    # Root layout (html, body, font loading)
│   │   ├── page.tsx                      # Homepage
│   │   ├── not-found.tsx                 # 404 page
│   │   ├── error.tsx                     # Error boundary
│   │   ├── loading.tsx                   # Global loading state
│   │   ├── sitemap.ts                    # Auto-generated sitemap
│   │   ├── robots.ts                     # Robots config
│   │   │
│   │   ├── (about)/
│   │   │   ├── layout.tsx                # About section layout (sidebar)
│   │   │   ├── pcet/page.tsx
│   │   │   ├── sbpcsc/page.tsx
│   │   │   ├── principal-desk/page.tsx
│   │   │   ├── committee/page.tsx
│   │   │   ├── administration/page.tsx
│   │   │   ├── infrastructure/page.tsx
│   │   │   └── rules/page.tsx
│   │   │
│   │   ├── admission/
│   │   │   └── page.tsx                  # Admission page with tabs
│   │   │
│   │   ├── academics/
│   │   │   ├── layout.tsx                # Academics sidebar layout
│   │   │   ├── plan/page.tsx
│   │   │   ├── science/
│   │   │   │   ├── layout.tsx
│   │   │   │   └── [subject]/
│   │   │   │       └── page.tsx
│   │   │   └── commerce/
│   │   │       ├── layout.tsx
│   │   │       └── [subject]/
│   │   │           └── page.tsx
│   │   │
│   │   ├── gallery/
│   │   │   ├── layout.tsx                # Gallery sidebar
│   │   │   ├── activities/
│   │   │   │   └── [year]/
│   │   │   │       └── page.tsx
│   │   │   └── guest-lectures/
│   │   │       └── [year]/
│   │   │           └── page.tsx
│   │   │
│   │   ├── achievements/
│   │   │   └── page.tsx
│   │   │
│   │   ├── blog/
│   │   │   ├── page.tsx                  # Blog listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx              # Blog detail
│   │   │
│   │   ├── library/
│   │   │   └── page.tsx
│   │   │
│   │   ├── media/
│   │   │   ├── layout.tsx
│   │   │   ├── newsletter/page.tsx
│   │   │   └── video/page.tsx
│   │   │
│   │   ├── reviews/
│   │   │   └── page.tsx
│   │   │
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   │
│   │   └── launch/
│   │       ├── page.tsx                  # Splash page
│   │       └── count/
│   │           └── page.tsx              # Birthday countdown
│   │
│   ├── features/                         # FEATURE-FIRST MODULES
│   │   ├── layout/
│   │   │   ├── components/
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── Footer.tsx
│   │   │   │   ├── TopStrip.tsx
│   │   │   │   ├── Logo.tsx
│   │   │   │   ├── SocialIcons.tsx
│   │   │   │   ├── Spotlight.tsx
│   │   │   │   └── ScrollToTop.tsx
│   │   │   ├── data/
│   │   │   │   └── nav-links.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── navigation/
│   │   │   ├── components/
│   │   │   │   ├── MainNav.tsx
│   │   │   │   ├── MobileNav.tsx
│   │   │   │   ├── Sidebar.tsx
│   │   │   │   └── Breadcrumb.tsx
│   │   │   ├── data/
│   │   │   │   └── sidebar-links.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── home/
│   │   │   ├── components/
│   │   │   │   ├── HeroCarousel.tsx
│   │   │   │   ├── OverviewSection.tsx
│   │   │   │   ├── NewsScroll.tsx
│   │   │   │   ├── IconBoxGrid.tsx
│   │   │   │   ├── TestimonialPreview.tsx
│   │   │   │   └── EnrollmentModal.tsx
│   │   │   ├── data/
│   │   │   │   └── home-content.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── about/
│   │   │   ├── components/
│   │   │   │   ├── AboutPCET.tsx
│   │   │   │   ├── AboutSBPCSC.tsx
│   │   │   │   ├── PrincipalMessage.tsx
│   │   │   │   ├── CommitteeList.tsx
│   │   │   │   ├── AdminStaffList.tsx
│   │   │   │   ├── InfrastructureShowcase.tsx
│   │   │   │   └── RulesList.tsx
│   │   │   ├── data/
│   │   │   │   ├── about-content.ts
│   │   │   │   ├── committee-data.ts
│   │   │   │   └── administration-data.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── admissions/
│   │   │   ├── components/
│   │   │   │   ├── AdmissionTabs.tsx
│   │   │   │   ├── AdmissionProcess.tsx
│   │   │   │   ├── CutoffList.tsx
│   │   │   │   ├── FeeStructure.tsx
│   │   │   │   ├── Eligibility.tsx
│   │   │   │   └── BrochureDownload.tsx
│   │   │   ├── data/
│   │   │   │   └── admission-content.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── academics/
│   │   │   ├── components/
│   │   │   │   ├── AcademicPlan.tsx
│   │   │   │   ├── SubjectTabs.tsx
│   │   │   │   ├── SubjectAbout.tsx
│   │   │   │   ├── FacultyList.tsx
│   │   │   │   ├── SyllabusTab.tsx
│   │   │   │   ├── QuestionPapersTab.tsx
│   │   │   │   ├── DownloadsTab.tsx
│   │   │   │   ├── TeachingPlanTab.tsx
│   │   │   │   ├── SubjectCard.tsx
│   │   │   │   └── StreamSelector.tsx
│   │   │   ├── data/
│   │   │   │   ├── science-subjects.ts
│   │   │   │   ├── commerce-subjects.ts
│   │   │   │   ├── faculty-data.ts
│   │   │   │   ├── subject-content.ts
│   │   │   │   └── pdf-index.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── gallery/
│   │   │   ├── components/
│   │   │   │   ├── GalleryGrid.tsx
│   │   │   │   ├── GalleryYearNav.tsx
│   │   │   │   ├── Lightbox.tsx
│   │   │   │   ├── GalleryCard.tsx
│   │   │   │   └── GuestLectureCard.tsx
│   │   │   ├── data/
│   │   │   │   └── gallery-data.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── achievements/
│   │   │   ├── components/
│   │   │   │   ├── AchievementCard.tsx
│   │   │   │   ├── AchievementYearFilter.tsx
│   │   │   │   └── CoCurricularGrid.tsx
│   │   │   ├── data/
│   │   │   │   └── achievements-data.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── blog/
│   │   │   ├── components/
│   │   │   │   ├── BlogCard.tsx
│   │   │   │   ├── BlogList.tsx
│   │   │   │   ├── BlogDetail.tsx
│   │   │   │   └── BlogSidebar.tsx
│   │   │   ├── data/
│   │   │   │   └── blog-content.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── library/
│   │   │   ├── components/
│   │   │   │   ├── LibraryOverview.tsx
│   │   │   │   ├── BookCollection.tsx
│   │   │   │   └── LibaryBookGrid.tsx
│   │   │   ├── data/
│   │   │   │   └── library-data.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── media/
│   │   │   ├── components/
│   │   │   │   ├── NewsletterGrid.tsx
│   │   │   │   ├── NewsletterCard.tsx
│   │   │   │   ├── VideoGallery.tsx
│   │   │   │   └── VideoCard.tsx
│   │   │   ├── data/
│   │   │   │   ├── newsletter-data.ts
│   │   │   │   └── video-data.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── contact/
│   │   │   ├── components/
│   │   │   │   ├── ContactForm.tsx
│   │   │   │   ├── ContactInfo.tsx
│   │   │   │   └── CollegeMap.tsx
│   │   │   ├── api/
│   │   │   │   └── route.ts              # POST /api/contact
│   │   │   └── index.ts
│   │   │
│   │   ├── reviews/
│   │   │   ├── components/
│   │   │   │   ├── TestimonialCard.tsx
│   │   │   │   ├── TestimonialList.tsx
│   │   │   │   └── TestimonialHighlight.tsx
│   │   │   ├── data/
│   │   │   │   └── testimonials-data.ts
│   │   │   └── index.ts
│   │   │
│   │   └── launch/
│   │       ├── components/
│   │       │   ├── CountdownTimer.tsx
│   │       │   ├── FireworksCanvas.tsx
│   │       │   ├── GiftBox.tsx
│   │       │   └── ConfettiOverlay.tsx
│   │       └── index.ts
│   │
│   ├── components/                       # SHARED UI COMPONENTS
│   │   ├── ui/                           # Primitive UI (shadcn/ui style)
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Tabs.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Accordion.tsx
│   │   │   ├── Carousel.tsx
│   │   │   ├── Breadcrumb.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Textarea.tsx
│   │   │   ├── Dialog.tsx
│   │   │   ├── Skeleton.tsx
│   │   │   └── Separator.tsx
│   │   ├── sections/
│   │   │   ├── Section.tsx
│   │   │   ├── PageBanner.tsx
│   │   │   ├── PageHeader.tsx
│   │   │   └── InnerPageBanner.tsx
│   │   ├── cards/
│   │   │   ├── FacultyCard.tsx
│   │   │   ├── DownloadCard.tsx
│   │   │   ├── ImageCard.tsx
│   │   │   └── StatCard.tsx
│   │   └── layouts/
│   │       ├── ContentWithSidebar.tsx
│   │       ├── TwoColumn.tsx
│   │       └── ThreeColumnGrid.tsx
│   │
│   ├── lib/                              # UTILITIES
│   │   ├── utils.ts                      # cn(), formatDate(), etc.
│   │   ├── seo.ts                        # Metadata generation helpers
│   │   ├── pdf-utils.ts                  # PDF path resolver
│   │   └── image-utils.ts                # Image optimization config
│   │
│   ├── data/                             # GLOBAL DATA FILES
│   │   ├── site-config.ts                # College name, address, contact
│   │   ├── social-links.ts               # Social media URLs
│   │   ├── navigation.ts                 # Main navigation structure
│   │   └── constants.ts                  # General constants
│   │
│   ├── hooks/                            # SHARED HOOKS
│   │   ├── useScrollTop.ts
│   │   ├── useMediaQuery.ts
│   │   └── useActiveNav.ts
│   │
│   ├── types/                            # TYPE DEFINITIONS
│   │   ├── faculty.ts
│   │   ├── subject.ts
│   │   ├── gallery.ts
│   │   ├── blog.ts
│   │   ├── pdf.ts
│   │   ├── achievement.ts
│   │   ├── testimonial.ts
│   │   └── navigation.ts
│   │
│   └── styles/
│       ├── globals.css                   # Tailwind imports + base styles
│       └── fonts.ts                      # Next/font configuration
│
├── content/                              # MDX CONTENT (if needed for blogs)
│   └── blog/
│       ├── acoustics-energy-and-vibrations.mdx
│       ├── education-system.mdx
│       └── ...
│
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── eslint.config.mjs
├── .prettierrc
├── .env.local
├── .gitignore
├── README.md
├── components.json                       # shadcn/ui config
└── postcss.config.mjs
```

---

## 4. FEATURE BREAKDOWN

### 4.1 Content Entities (Data Model)

| Entity | Fields | Source Pages | Developer |
|--------|--------|-------------|-----------|
| **CollegeInfo** | name, address, contact, logo, trust | header.php, footer.php | A |
| **NavigationItem** | label, href, children, active | header.php | A |
| **AboutPage** | title, content, images | about-*.php | A |
| **CommitteeMember** | name, role, department | committee.php | A |
| **AdministrationStaff** | name, designation, photo | administration.php | A |
| **InfrastructureFacility** | name, description, images | infrastructure-and-facilities.php | A |
| **AdmissionInfo** | process, cutoffs, fees, eligibility, forms | admission.php | A |
| **AcademicPlan** | year, stream, plan pdfs | academic-plan.php | B |
| **Subject** | name, code, stream, description | science/about-*.php, commerce/about-*.php | B |
| **Faculty** | name, qualification, experience, photo, subject, stream | Embedded in subject pages | B |
| **Syllabus** | subject, year, stream, file | Subject pages | B |
| **QuestionPaper** | subject, year, stream, month, file | Subject pages | B |
| **Download** | subject, year, stream, category, file | Subject pages | B |
| **PDF** | title, category, path, subject | All PDF directories | B |
| **LibraryInfo** | collection, facilities, book images | library.php | B |
| **GalleryAlbum** | year, type (activities|guest-lecture), images | activities.php, guest-lectures.php | C |
| **GalleryImage** | src, alt, caption, album | Gallery directories | C |
| **Achievement** | type, year, description, image | achievements.php, achievements1.php | C |
| **BlogPost** | title, slug, content, image, date, author | blog.php | C |
| **Newsletter** | year, images, title | newsletter.php | C |
| **Video** | title, source, thumbnail | sbpcsc-video.php | C |
| **Testimonial** | name, stream, batch, content, photo | sbpcsc-reviews.php, index.php | C |
| **ContactMessage** | name, email, phone, message (form) | sbpcsc-contact.php | A |

### 4.2 Reusable UI Components Inventory

| Component | Used On | Current Pattern | Reuse Count | Developer |
|-----------|---------|----------------|-------------|-----------|
| Header/Nav | All pages | header.php | 50+ | A |
| Footer | All pages | footer.php | 50+ | A |
| SidebarNav | About, Academics, Student Corner, Media | 4 sidebar.php variants | 40+ | A |
| Breadcrumb | All inner pages | Inline HTML | 40+ | A |
| Hero/Carousel | Homepage | Bootstrap carousel | 1 (home) | A |
| PageBanner | All inner pages | .inner-page-banner CSS | 30+ | A |
| Section Layout | All pages | .section + .container | 50+ | Shared |
| TabPanel | All subject pages, admission | .nav-pills + .tab-content | 20+ | B |
| FacultyCard | All subject pages | .panel + .panel-body | 19 | B |
| DownloadCard | All subject pages | .thumbnail | 19+ | B |
| Lightbox | Gallery pages | smoothbox.jquery2.js | 2 | C |
| GalleryGrid | Gallery pages | .col-md-6 image grid | 6+ | C |
| Timeline | Achievements | Inline list | 2 | C |
| TestimonialCard | Home, Reviews | .testm-bg-gray | 15+ | C |
| IconBox | Homepage | .icon-box | 6 | A |
| NewsScroll | Homepage | <marquee> | 1 | A |
| Modal | Homepage | Bootstrap modal | 1 | A |
| ScrollToTop | All pages | .crunchify-top | 50+ | A |
| SocialIcons | Top strip, Footer | .social-circle | 2 | A |
| Spotlight | All pages | .spotlight + <marquee> | 50+ | A |
| EmbeddedMap | Footer | Google Maps iframe | 1 | A |
| ContactForm | Contact page | PHP form | 1 | A |
| CountdownTimer | Launch page | Canvas + JS | 1 | C |
| VideoCard | Media page | iframe embed | 1 | C |

---

## 5. MODULE DEPENDENCY GRAPH

```
                    ┌──────────────────────┐
                    │     PHASE ZERO        │
                    │  (Foundation Layer)   │
                    ├──────────────────────┤
                    │  Next.js init         │
                    │  TailwindCSS          │
                    │  TypeScript config    │
                    │  Shared UI primitives │
                    │  Global styles        │
                    │  Alias config         │
                    │  Git setup            │
                    │  Public/ dirs         │
                    └──────────┬───────────┘
                               │
          ┌────────────────────┼────────────────────┐
          │                    │                    │
          ▼                    ▼                    ▼
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│  DEVELOPER A     │  │  DEVELOPER B     │  │  DEVELOPER C     │
│  Foundation &    │  │  Academics &     │  │  Community &     │
│  Core Pages      │  │  Resources       │  │  Media           │
├─────────────────┤  ├─────────────────┤  ├─────────────────┤
│ Layout Module   │  │ Academics Module│  │ Gallery Module   │
│ Navigation Mod  │  │  - 19 subjects  │  │ Achievements Mod │
│ Home Module     │  │  - Faculty data  │  │ Blog Module      │
│ About Module    │  │  - PDF indexes   │  │ Media Module     │
│ Admissions Mod  │  │  - Library       │  │ Reviews Module   │
│ Contact Module  │  │  - Subject tabs  │  │ Launch Module    │
│ Launch Module   │  │                  │  │                  │
├─────────────────┤  ├─────────────────┤  ├─────────────────┤
│ Depends on:     │  │ Depends on:     │  │ Depends on:     │
│ Phase Zero only │  │ Phase Zero only │  │ Phase Zero only │
│ Shared UI       │  │ Shared UI       │  │ Shared UI       │
└─────────────────┘  └─────────────────┘  └─────────────────┘
          │                    │                    │
          └────────────────────┼────────────────────┘
                               │
                    ┌──────────▼───────────┐
                    │  INTEGRATION          │
                    │  MILESTONE 1-3        │
                    │  (Merge, QA, Polish)  │
                    └──────────────────────┘
```

### Key Dependency Rules

- **No developer depends on another developer's feature work**
- All developers depend ONLY on Phase Zero output
- Shared UI components are created during Phase Zero
- Data files are created within each feature module
- Cross-feature links use `/` paths, not imports from other features

---

## 6. MIGRATION STRATEGY

### 6.1 Content Migration Approach

Since there is no database, all content must be extracted from PHP files into TypeScript data files or MDX.

**Extraction Process**:
1. Read each PHP file
2. Strip HTML from PHP wrappers
3. Identify content blocks (headings, paragraphs, lists, tables, images)
4. Structure as TypeScript arrays/objects with type safety
5. Store in `src/features/{module}/data/`

### 6.2 Asset Migration

| Source Path | Target Path | Method |
|-------------|-------------|--------|
| `images/` | `public/images/` | Copy verbatim |
| `pdf/` | `public/pdf/` | Copy verbatim |
| `css/style.css` | `src/styles/globals.css` | Extract color tokens, migrate to Tailwind |
| `css/menu.css` | `src/features/navigation/components/MainNav.tsx` | Rewrite as React component |
| `js/menu.js` | `src/features/navigation/components/MobileNav.tsx` | Rewrite as React state logic |
| `js/smoothbox.jquery2.js` | `src/features/gallery/components/Lightbox.tsx` | Rewrite as React dialog |
| `fonts/` + `webfonts/` | `public/fonts/` | Copy; use next/font for Google Fonts |
| `launch/audio/audio.mp3` | `public/audio/` | Copy |

### 6.3 SEO Migration

| Current | Target |
|---------|--------|
| `sitemap.xml` (static, 1560 URLs) | `src/app/sitemap.ts` (auto-generated from data) |
| `robots.txt` (static) | `src/app/robots.ts` (programmatic) |
| Inline `<title>` per page | `generateMetadata()` per route |
| Missing Open Graph | `metadata.openGraph` in layout/page |
| Missing JSON-LD | `<script type="application/ld+json">` via component |
| Missing canonical in some pages | Auto-generated canonical from URL |

### 6.4 URL Migration Map

| Current URL | New URL | Notes |
|-------------|---------|-------|
| `/index.php` | `/` | Home |
| `/about-pcet.php` | `/about/pcet` | |
| `/about-sbpcsc.php` | `/about/sbpcsc` | |
| `/principal-desk.php` | `/about/principal-desk` | |
| `/committee.php` | `/about/committee` | |
| `/administration.php` | `/about/administration` | |
| `/infrastructure-and-facilities.php` | `/about/infrastructure` | |
| `/rules-and-regulations.php` | `/about/rules` | |
| `/admission.php` | `/admission` | |
| `/academic-plan.php` | `/academics/plan` | |
| `/science/about-{subject}.php` | `/academics/science/{subject}` | Dynamic route |
| `/commerce/about-{subject}.php` | `/academics/commerce/{subject}` | Dynamic route |
| `/activities.php` | `/gallery/activities/{year}` | Year-based routing |
| `/guest-lectures.php` | `/gallery/guest-lectures/{year}` | Year-based routing |
| `/achievements.php` | `/achievements` | Combined |
| `/achievements1.php` | `/achievements` | Merged |
| `/blog.php` | `/blog` | Listing |
| `/blog.php#article-slug` | `/blog/{slug}` | Individual posts |
| `/library.php` | `/library` | |
| `/newsletter.php` | `/media/newsletter` | |
| `/sbpcsc-video.php` | `/media/video` | |
| `/sbpcsc-contact.php` | `/contact` | |
| `/sbpcsc-reviews.php` | `/reviews` | |
| `/launch/index.php` | `/launch` | |
| `/launch/count.php` | `/launch/count` | |
| All PDF URLs | Same path under `/pdf/` | 301 redirects from old |
| commerce/index.php | `/academics/commerce` | (was duplicate of root) |
| commerce/admission.php | `/admission` | (was duplicate) |
| webfonts/about-*.php | Remove | (misplaced files) |

### 6.5 Redirect Strategy

Create `next.config.js` redirects for all old `.php` URLs to new paths. This ensures:
- Existing bookmarks still work
- Search engine equity transfers
- Backlinks remain valid

---

## 7. PHASE-BY-PHASE ROADMAP

### PHASE ZERO: Foundation (Week 1) — SOLO (Architect)

| Task | Hours | Details |
|------|-------|---------|
| Initialize Next.js 15 project | 1 | `create-next-app` with TypeScript, App Router |
| Configure TailwindCSS | 1 | tailwind.config.ts, globals.css, color tokens |
| Set up ESLint + Prettier | 1 | eslint.config.mjs, .prettierrc |
| Configure path aliases | 0.5 | tsconfig.json paths: `@/` |
| Install shadcn/ui | 1 | `npx shadcn@latest init` |
| Create directory structure | 0.5 | All folders under src/features/, src/components/, etc. |
| Set up environment files | 0.5 | .env.local, .env.example |
| Initialize Git repo | 0.5 | .gitignore, initial commit |
| Create global styles | 1 | Tailwind base styles, CSS variables for theme |
| Set up font loading | 0.5 | next/font for Inter (body) and Poppins (headings) |
| Build shared UI primitives | 4 | Button, Card, Tabs, Modal, Input, Dialog, Badge |
| Configure next.config.ts | 1 | Image domains, redirects (empty), headers |
| Create site config data | 1 | College info, social links, navigation structure |
| Set up type definitions | 2 | All types/*.ts files |
| Create utility functions | 1 | cn(), formatDate(), etc. |
| Create error/loading/not-found pages | 1 | Global app pages |
| Create asset directories | 1 | Copy folder structure under public/ |
| Documentation | 1 | README, setup instructions |
| Create sitemap + robots template | 1 | src/app/sitemap.ts, robots.ts |

**Phase Zero Total**: 20 hours (2.5 days)
**Phase Zero Output**: Empty but production-ready repository with all infrastructure

### PHASE ONE: Parallel Feature Development (Weeks 2-7)

| Developer | Modules | Estimated Hours |
|-----------|---------|----------------|
| Soham | Layout, Navigation, Home, About, Admissions, Contact, Launch | 200 |
| Prajwal | Academics (19 subjects), Faculty, Library, PDFs | 240 |
| Mayur | Gallery, Achievements, Blog, Media, Reviews | 200 |

**Phase One Total**: 640 hours (across 3 developers for 5 weeks)

### PHASE TWO: Integration Milestones (Week 8)

| Milestone | Duration | Activities |
|-----------|----------|------------|
| M1: Shared Layout Integration | 2 days | Merge all branches, verify layout consistency |
| M2: Navigation Integration | 2 days | Verify all routes work, sidebar links correct |
| M3: Feature Module Connection | 1 day | Cross-link all features, test navigation paths |

### PHASE THREE: QA & Polish (Week 9)

| Activity | Hours |
|----------|-------|
| Cross-browser testing | 8 |
| Mobile responsiveness audit | 8 |
| Accessibility audit (WCAG 2.1) | 8 |
| SEO audit (metadata, sitemap, redirects) | 8 |
| Performance audit (Lighthouse) | 4 |
| Content accuracy verification | 8 |
| Broken link check | 4 |

### PHASE FOUR: Production (Week 10)

| Activity | Hours |
|----------|-------|
| Final build test | 4 |
| DNS setup / domain config | 2 |
| Deploy to production | 2 |
| Post-deployment monitoring | 4 |
| Rollback plan verification | 1 |

---

## 8. INTEGRATION STRATEGY

### 8.1 Branch Strategy

```
main (production)
  └── develop (integration branch)
       ├── feature/phase-zero
       ├── feature/developer-a
       ├── feature/developer-b
       └── feature/developer-c
```

### 8.2 Merge Checkpoints

| Checkpoint | When | What Merges | Who Handles |
|------------|------|-------------|-------------|
| CP0 | End of Phase Zero | `feature/phase-zero → develop` | Architect |
| CP1 | End of Week 3 | `feature/developer-a → develop` (partial) | Dev A |
| CP2 | End of Week 5 | `feature/developer-b → develop` (partial) | Dev B |
| CP3 | End of Week 6 | `feature/developer-c → develop` (partial) | Dev C |
| CP4 | End of Week 7 | All → develop (complete) | All |
| CP5 | End of Week 8 | `develop → main` (release) | Architect |

### 8.3 Conflict Prevention Rules

1. **No two developers edit the same file** (see file ownership matrix)
2. **No two developers edit the same directory**
3. **Shared UI components are READ-ONLY after Phase Zero** — changes only via PR to architect
4. **Data files are owned by one developer** — even if data is referenced by another feature
5. **Routes are owned by one developer** — no shared route handlers
6. **Integration merges happen at scheduled checkpoints only** — not daily

---

## 9. TIMELINE

| Phase | Week | Days | Dev A | Dev B | Dev C |
|-------|------|------|-------|-------|-------|
| Phase Zero | W1 | 5 | 20h (Architect) | — | — |
| Phase One | W2 | 5 | 40h | 40h | 40h |
| Phase One | W3 | 5 | 40h | 48h | 40h |
| Phase One | W4 | 5 | 40h | 48h | 40h |
| Phase One | W5 | 5 | 40h | 48h | 40h |
| Phase One | W6 | 5 | 40h | 48h | 40h |
| Phase One | W7 | 3 | — | 8h | — |
| Integration | W8 | 5 | 40h (lead) | 8h | 8h |
| QA | W9 | 5 | 24h | 24h | 24h |
| Production | W10 | 3 | 12h | — | — |
| **Total** | **10** | **48** | **296h** | **272h** | **232h** |

---

## 10. RISK REGISTER

| # | Risk | Impact | Probability | Mitigation |
|---|------|--------|-------------|------------|
| R1 | Phase Zero scope creep delays developers | High | Medium | Strict freeze on Phase Zero; no feature work |
| R2 | PHP content extraction is slower than estimated | Medium | High | Prioritize data extraction, defer non-critical content |
| R3 | PDF organization is inconsistent across subjects | Medium | Medium | Create index data structure per subject directory |
| R4 | Duplicate images consume excessive build size | Low | High | Set up deduplication in public/ during asset migration |
| R5 | Missing redirects cause SEO traffic loss | High | Low | Comprehensive redirect map from sitemap.xml |
| R6 | Team members unfamiliar with Next.js 15 App Router | Medium | Medium | Phase Zero includes example implementations |
| R7 | Branch conflicts at integration checkpoints | Medium | Low | Strict file ownership prevents most conflicts |
| R8 | Browser testing reveals CSS inconsistencies | Low | Medium | Tailwind utility classes ensure consistency |
| R9 | Client requests content changes during migration | High | Medium | Freeze content during Phase One; changes in Phase Three |
| R10 | next/image optimization fails for unoptimized images | Low | Medium | Configure `unoptimized` for gallery images if needed |
| R11 | Contact form email delivery fails | High | Low | Use Resend or Nodemailer instead of PHP mail() |
| R12 | Gallery performance with hundreds of images | Medium | Medium | Implement pagination or lazy loading per year |

---

## 11. QUALITY CHECKLIST

### Code Quality
- [ ] TypeScript strict mode enabled
- [ ] No `any` types (except in external data)
- [ ] ESLint passes with zero errors
- [ ] Prettier formatting consistent
- [ ] No unused imports or variables
- [ ] All components export types

### Performance
- [ ] Lighthouse score ≥ 90 for all categories
- [ ] All images use `next/image` with proper sizes
- [ ] Static generation (`generateStaticParams`) for all dynamic routes
- [ ] Fonts loaded via `next/font` (no CLS)
- [ ] No render-blocking resources
- [ ] Bundle size within budget (< 200KB initial JS)

### Accessibility
- [ ] All images have `alt` text
- [ ] Navigation is keyboard-accessible
- [ ] Color contrast meets WCAG 2.1 AA
- [ ] ARIA labels on interactive elements
- [ ] Focus management in modals/overlays
- [ ] Skip-to-content link present
- [ ] Forms have proper labels and error states

### SEO
- [ ] Every page has `generateMetadata()` with title + description
- [ ] Open Graph tags on all pages
- [ ] JSON-LD structured data (College, Course, BlogPosting)
- [ ] Sitemap auto-generated from route data
- [ ] `robots.txt` correctly configured
- [ ] All old `.php` URLs have 301 redirects
- [ ] Canonical URLs on all pages
- [ ] No broken internal links

### Content Accuracy
- [ ] All content from PHP verified in new build
- [ ] All PDF links functional
- [ ] All external links verified
- [ ] Contact form sends email correctly
- [ ] Gallery images load correctly
- [ ] Faculty information matches source

---

## 12. FINAL ACCEPTANCE CRITERIA

1. [ ] All 52 PHP pages are replaced by Next.js routes
2. [ ] All images render via next/image optimization
3. [ ] All PDFs are downloadable
4. [ ] Navigation matches the original site structure
5. [ ] All 19 subject pages display faculty, syllabus, QP, and downloads
6. [ ] Gallery pages load images by academic year
7. [ ] Contact form submits successfully and sends email
8. [ ] Old `.php` URLs redirect to new paths (301)
9. [ ] Sitemap includes all pages
10. [ ] Lighthouse score ≥ 90 for Performance, Accessibility, SEO
11. [ ] Responsive on mobile, tablet, and desktop
12. [ ] No JavaScript errors in console
13. [ ] Build completes with zero errors and zero warnings
14. [ ] All three developers can work without blocking each other
15. [ ] Integration merges complete without conflicts

---

## 13. FILE OWNERSHIP MATRIX

| Directory/File | Owner | Read-Only for Others |
|----------------|-------|---------------------|
| `src/app/layout.tsx` | Dev A | Yes |
| `src/app/(about)/*` | Dev A | Yes |
| `src/app/admission/*` | Dev A | Yes |
| `src/app/contact/*` | Dev A | Yes |
| `src/app/sitemap.ts` | Dev A | Yes |
| `src/app/robots.ts` | Dev A | Yes |
| `src/features/layout/*` | Dev A | Yes |
| `src/features/navigation/*` | Dev A | Yes |
| `src/features/home/*` | Dev A | Yes |
| `src/features/about/*` | Dev A | Yes |
| `src/features/admissions/*` | Dev A | Yes |
| `src/features/contact/*` | Dev A | Yes |
| `src/features/launch/*` | Dev A | Yes |
| `src/app/academics/*` | Dev B | Yes |
| `src/app/library/*` | Dev B | Yes |
| `src/features/academics/*` | Dev B | Yes |
| `src/features/library/*` | Dev B | Yes |
| `src/types/faculty.ts` | Dev B | Yes |
| `src/types/subject.ts` | Dev B | Yes |
| `src/types/pdf.ts` | Dev B | Yes |
| `src/app/gallery/*` | Dev C | Yes |
| `src/app/achievements/*` | Dev C | Yes |
| `src/app/blog/*` | Dev C | Yes |
| `src/app/media/*` | Dev C | Yes |
| `src/app/reviews/*` | Dev C | Yes |
| `src/features/gallery/*` | Dev C | Yes |
| `src/features/achievements/*` | Dev C | Yes |
| `src/features/blog/*` | Dev C | Yes |
| `src/features/media/*` | Dev C | Yes |
| `src/features/reviews/*` | Dev C | Yes |
| `src/components/ui/*` | Shared (Architect) | No edits without PR |
| `src/lib/*` | Shared (Architect) | No edits without PR |
| `src/data/*` | Shared (Architect) | No edits without PR |
| `src/types/*` (shared) | Shared (Architect) | No edits without PR |
| `src/styles/*` | Shared (Architect) | No edits without PR |
| `src/hooks/*` | Shared (Architect) | No edits without PR |
| `public/images/slider/` | Dev A | Yes |
| `public/images/icons/` | Dev A | Yes |
| `public/images/facilities/` | Dev A | Yes |
| `public/images/founder/` | Dev A | Yes |
| `public/images/logo/` | Dev A | Yes |
| `public/images/faculty/` | Dev B | Yes |
| `public/pdf/` (subject PDFs) | Dev B | Yes |
| `public/images/gallery/` | Dev C | Yes |
| `public/images/blogs/` | Dev C | Yes |
| `public/images/newsletter/` | Dev C | Yes |
| `public/images/co-curricular/` | Dev C | Yes |

---

*End of MASTER_IMPLEMENTATION_PLAN.md*
