# PRAJWAL — IMPLEMENTATION PLAN

## Footer, Sidebars, Admissions, Blog, Academic Plan, Library, 4 About Pages, 5 Science Subjects

---

## 1. RESPONSIBILITIES

You own the following domains completely:

1. **Footer System** — Footer, Spotlight/Highlights bar, ScrollToTop button
2. **Sidebar System** — 4 sidebar variants (About, Academics, Student Corner, Media), Breadcrumbs
3. **Admissions** — Tabbed interface with process, cut-offs, eligibility, fees, brochures, forms
4. **Blog** — Blog article listing with individual article pages
5. **Academic Plan** — Academic calendar and plans by year
6. **Library** — Library overview, book collection, book image grid
7. **About Pages (4)** — Committees, Administration, Infrastructure, Rules & Regulations
8. **Science Subjects (5)** — English, Hindi, Marathi, Geography, IT

### Owned Public Assets

```
public/pdf/ (root PDFs)           # Prospectus, cutoffs, forms, brochures
public/pdf/science/english/
public/pdf/science/hindi/
public/pdf/science/marathi/
public/pdf/science/geography/
public/pdf/science/it/
public/images/facilities/          # Infrastructure & facilities
public/images/libary-books/        # Library book images
```

## 2. OWNED FOLDERS & ROUTES

### Pages

| Route | Source File | Purpose |
|-------|-------------|---------|
| `/about/committee` | `committee.php` | Committees |
| `/about/administration` | `administration.php` | Admin Staff |
| `/about/infrastructure` | `infrastructure-and-facilities.php` | Campus Facilities |
| `/about/rules` | `rules-and-regulations.php` | Rules & Regulations |
| `/academic-plan` | `academic-plan.php` | Academic Calendar |
| `/academics/science/english` | `science/about-english.php` | English subject |
| `/academics/science/hindi` | `science/about-hindi.php` | Hindi subject |
| `/academics/science/marathi` | `science/about-marathi.php` | Marathi subject |
| `/academics/science/geography` | `science/about-geography.php` | Geography subject |
| `/academics/science/it` | `science/about-it.php` | IT subject |
| `/admission` | `admission.php` | Admissions |
| `/library` | `library.php` | Library |
| `/blog` | `blog.php` | Blog listing |
| `/blog/[slug]` | — | Individual blog article |

### Feature Folders

```
src/features/layout/
src/features/layout/components/Footer.tsx
src/features/layout/components/Spotlight.tsx
src/features/layout/components/ScrollToTop.tsx

src/features/navigation/
src/features/navigation/components/Sidebar.tsx
src/features/navigation/components/Breadcrumb.tsx
src/features/navigation/data/sidebar-links.ts

src/features/admissions/
src/features/admissions/components/AdmissionTabs.tsx
src/features/admissions/components/AdmissionProcess.tsx
src/features/admissions/components/CutoffList.tsx
src/features/admissions/components/FeeStructure.tsx
src/features/admissions/components/Eligibility.tsx
src/features/admissions/components/BrochureDownload.tsx
src/features/admissions/data/admission-content.ts

src/features/blog/
src/features/blog/components/BlogCard.tsx
src/features/blog/components/BlogList.tsx
src/features/blog/components/BlogDetail.tsx
src/features/blog/components/BlogSidebar.tsx
src/features/blog/data/blog-content.ts

src/features/academics/
src/features/academics/components/AcademicPlan.tsx
src/features/academics/components/SubjectTabs.tsx
src/features/academics/components/SubjectAbout.tsx
src/features/academics/components/FacultyList.tsx
src/features/academics/components/SyllabusTab.tsx
src/features/academics/components/QuestionPapersTab.tsx
src/features/academics/components/DownloadsTab.tsx
src/features/academics/components/TeachingPlanTab.tsx
src/features/academics/components/SubjectCard.tsx
src/features/academics/data/english.ts
src/features/academics/data/hindi.ts
src/features/academics/data/marathi.ts
src/features/academics/data/geography.ts
src/features/academics/data/it.ts

src/features/about/
src/features/about/components/CommitteeList.tsx
src/features/about/components/AdminStaffList.tsx
src/features/about/components/InfrastructureShowcase.tsx
src/features/about/components/RulesList.tsx
src/features/about/data/committee-data.ts
src/features/about/data/administration-data.ts
src/features/about/data/infrastructure-data.ts

src/features/library/
src/features/library/components/LibraryOverview.tsx
src/features/library/components/BookCollection.tsx
src/features/library/components/LibaryBookGrid.tsx
src/features/library/data/library-data.ts
```

## 3. FEATURES

### 3.1 Footer System

**Footer** — `src/features/layout/components/Footer.tsx`
- "Get in Touch" column (address, phone, email, social links)
- "Important Links" column (NCERT, JEE, MH-CET, NEET, etc.)
- "Quick Links" column (Admission, Academics, Blog, Library, ERP, Contact)
- Location column (Google Maps iframe)
- Copyright bar + credit

**Spotlight** — `src/features/layout/components/Spotlight.tsx`
- Blinking "Highlights:" label
- Marquee with announcement links

**ScrollToTop** — `src/features/layout/components/ScrollToTop.tsx`
- Fixed bottom-right button
- Fade in after 220px scroll
- Smooth scroll to top

### 3.2 Sidebar System

**Sidebar** — `src/features/navigation/components/Sidebar.tsx`
- 4 variants: about, academics, student-corner, media
- Accordion/collapse for nested items
- Active state highlighting

**Breadcrumb** — `src/features/navigation/components/Breadcrumb.tsx`
- Auto-generated from route segments
- Home icon + chevron separators

### 3.3 About Pages (4)

**CommitteeList**: All committees with member lists (Vishakha, Anti-Ragging, Exam, Grievance, SC/ST, etc.)
**AdminStaffList**: Administrative staff table with designations
**InfrastructureShowcase**: Facilities grid with photos (labs, library, hostels, classrooms)
**RulesList**: Student rules and regulations

### 3.4 Admissions

- Tabbed interface with: Process, Cut-Off, Eligibility, Fee Structure, Brochures, Forms
- Cut-off lists by year (2021-22 through 2025-26)
- PDF downloads for prospectus, forms, brochures
- Admission enquiry link (Google Form)

### 3.5 Blog

- Blog article listing page
- Individual article pages with dynamic routes `[slug]`
- Sidebar with categories/recent posts

### 3.6 Academic Plan

- Academic calendar display
- Year-by-year plans (2022-23 through 2026-27)
- PDF downloads

### 3.7 Library

- Library overview and resources
- Book collection with images
- Book image grid

### 3.8 Subject Pages (5)

Each subject page follows a shared template:
- Subject introduction / overview
- Faculty profile (name, qualification, experience, photo)
- Downloadable PDFs (question papers, textbooks, teaching plans)

## 4. IMPLEMENTATION ORDER

| Step | Task | Est. Hours |
|------|------|------------|
| 1 | Footer component | 4 |
| 2 | Spotlight/Highlights bar | 2 |
| 3 | ScrollToTop | 1 |
| 4 | Sidebar (4 variants) | 6 |
| 5 | Breadcrumb component | 2 |
| 6 | About: Committee | 4 |
| 7 | About: Administration | 3 |
| 8 | About: Infrastructure | 4 |
| 9 | About: Rules | 3 |
| 10 | Admissions page with tabs | 10 |
| 11 | Blog with detail pages | 8 |
| 12 | Academic Plan page | 4 |
| 13 | Library page | 4 |
| 14 | Subject pages (5 science) | 10 |
| **Total** | | **65 hours** |

## 5. DELIVERABLES

- [ ] Footer displays on all pages with correct links and map
- [ ] Spotlight/Highlights bar displays scrolling announcements
- [ ] Scroll-to-top button works
- [ ] Sidebar variants render correctly in their sections
- [ ] Breadcrumbs auto-generate from route path
- [ ] All 4 about pages render with correct content
- [ ] Committee list shows all committees
- [ ] Admin staff list shows all staff
- [ ] Infrastructure page shows all facilities with images
- [ ] Rules page displays complete regulations
- [ ] Admissions page has 6 working tabs
- [ ] Cut-off PDFs by year are downloadable
- [ ] Blog listing and detail pages work
- [ ] Academic Plan displays calendar with PDFs
- [ ] Library shows book collection with images
- [ ] All 5 subject pages render with faculty + PDFs
- [ ] No TypeScript errors
- [ ] No `any` types
- [ ] All images use `next/image` with `alt` text
- [ ] Metadata set on every page
