# PRAJWAL — IMPLEMENTATION PLAN

## Academics, Subject Pages, Faculty, Library, PDF Resources

---

## 1. RESPONSIBILITIES

You own the following domains completely:

1. **Academic Plan** — Academic calendar and plans by year
2. **Science Subjects** — 10 subject pages (Marathi, English, Math, Hindi, Physics, Chemistry, Biology, Geography, IT, CS)
3. **Commerce Subjects** — 9 subject pages (Marathi, English, Math, Hindi, Account & Book Keeping, Secretarial Practice, OCM, Economics, IT)
4. **Faculty Data** — All faculty profiles across Science and Commerce streams
5. **PDF Resources** — All question papers, textbooks, syllabuses, teaching plans organized by subject
6. **Library** — Library collection, facilities, book images

## 2. OWNED FOLDERS

```
src/app/academics/
src/app/academics/layout.tsx
src/app/academics/plan/page.tsx
src/app/academics/science/layout.tsx
src/app/academics/science/[subject]/page.tsx
src/app/academics/commerce/layout.tsx
src/app/academics/commerce/[subject]/page.tsx

src/app/library/page.tsx

src/features/academics/
src/features/academics/components/
src/features/academics/components/AcademicPlan.tsx
src/features/academics/components/SubjectTabs.tsx
src/features/academics/components/SubjectAbout.tsx
src/features/academics/components/FacultyList.tsx
src/features/academics/components/SyllabusTab.tsx
src/features/academics/components/QuestionPapersTab.tsx
src/features/academics/components/DownloadsTab.tsx
src/features/academics/components/TeachingPlanTab.tsx
src/features/academics/components/SubjectCard.tsx
src/features/academics/components/StreamSelector.tsx
src/features/academics/data/
src/features/academics/data/science-subjects.ts
src/features/academics/data/commerce-subjects.ts
src/features/academics/data/faculty-data.ts
src/features/academics/data/subject-content.ts
src/features/academics/data/pdf-index.ts

src/features/library/
src/features/library/components/LibraryOverview.tsx
src/features/library/components/BookCollection.tsx
src/features/library/components/LibaryBookGrid.tsx
src/features/library/data/library-data.ts

src/types/faculty.ts
src/types/subject.ts
src/types/pdf.ts
```

### Owned Public Assets

```
public/images/faculty/
public/images/faculty/science/       # Moves from science/images/faculty/
public/images/faculty/commerce/      # Moves from commerce/images/faculty/
public/images/libary-books/          # Moves from images/libary-books/
public/images/sbpcsc-library-*.webp  # Shared with facilities (copied)
public/pdf/                          # ALL subject PDFs
public/pdf/science/physics/
public/pdf/science/chemistry/
public/pdf/science/biology/
public/pdf/science/math/
public/pdf/science/cs/
public/pdf/science/it/
public/pdf/science/english/
public/pdf/science/hindi/
public/pdf/science/marathi/
public/pdf/science/geography/
public/pdf/commerce/account-book-keeping/
public/pdf/commerce/economics/
public/pdf/commerce/english/
public/pdf/commerce/hindi/
public/pdf/commerce/marathi/
public/pdf/commerce/math/
public/pdf/commerce/it/
public/pdf/commerce/ocm/
public/pdf/commerce/sp/
public/pdf/ (root)                   # College-level PDFs (shared with Dev A but you own these PDFs)
```

### Science Subject Images

```
public/images/science/physics-lab-*.jpg
public/images/science/chemistry-lab-*.jpg
public/images/science/bio-lab-*.jpg
public/images/science/cs-lab-*.jpg
public/images/science/it-lab-*.jpg
public/images/science/math.jpg
public/images/science/bioImg*.jpg
public/images/science/biology-info-*.jpg
public/images/science/geograhy-*.jpg
public/images/science/world-population-day-*.jpg
public/images/science/chemistry.jpg
public/images/science/computer-science.jpeg
public/images/science/video-compe-*.jpg
public/images/science/info-techo.jpg
public/images/science/kusumagraj.jpg
public/images/science/narayan-surve.jpg
public/images/science/pratidnya-marathi.jpg
public/images/science/sangita-kudale.jpg
```

### Commerce Subject Images

```
public/images/commerce/about-it-*.jpg
public/images/commerce/book-keeping-accountancy.png
public/images/commerce/company-secretary.png
public/images/commerce/kusumagraj.jpg
public/images/commerce/narayan-surve.jpg
public/images/commerce/pratidnya-marathi.jpg
```

## 3. OWNED ROUTES

| Route | Source File(s) | Purpose |
|-------|----------------|---------|
| `/academics/plan` | `academic-plan.php` | Academic calendar, plans, timetables |
| `/academics/science` | `commerce/index.php` (redirect) | Science stream landing |
| `/academics/science/marathi` | `science/about-marathi.php` | Science Marathi subject |
| `/academics/science/english` | `science/about-english.php` | Science English subject |
| `/academics/science/math` | `science/about-math.php` | Science Math subject |
| `/academics/science/hindi` | `science/about-hindi.php` | Science Hindi subject |
| `/academics/science/physics` | `science/about-physics.php` | Science Physics subject |
| `/academics/science/chemistry` | `science/about-chemistry.php` | Science Chemistry subject |
| `/academics/science/biology` | `science/about-biology.php` | Science Biology subject |
| `/academics/science/geography` | `science/about-geography.php` | Science Geography subject |
| `/academics/science/it` | `science/about-it.php` | Science IT subject |
| `/academics/science/cs` | `science/about-cs.php` | Science CS subject |
| `/academics/commerce` | `commerce/index.php` (redirect) | Commerce stream landing |
| `/academics/commerce/marathi` | `commerce/about-marathi.php` | Commerce Marathi subject |
| `/academics/commerce/english` | `commerce/about-english.php` | Commerce English subject |
| `/academics/commerce/math` | `commerce/about-math.php` | Commerce Math subject |
| `/academics/commerce/hindi` | `commerce/about-hindi.php` | Commerce Hindi subject |
| `/academics/commerce/account` | `commerce/about-account.php` | Commerce Account & Book Keeping |
| `/academics/commerce/secretarial` | `commerce/about-secretarial.php` | Commerce Secretarial Practice |
| `/academics/commerce/ocm` | `commerce/about-ocm.php` | Commerce OCM |
| `/academics/commerce/economics` | `commerce/about-economics.php` | Commerce Economics |
| `/academics/commerce/it` | `commerce/about-it.php` | Commerce IT |
| `/library` | `library.php` | Library collection |

## 4. OWNED FEATURES

### 4.1 Academics (`src/features/academics/`)

**SubjectTabs** — `src/features/academics/components/SubjectTabs.tsx`
- Tab navigation: About, Faculty, Syllabus, Question Papers, Downloads, Teaching Plan
- Used in every subject page
- Data-driven from subject configuration

**SubjectAbout** — `src/features/academics/components/SubjectAbout.tsx`
- Subject introduction text
- Subject highlights, career scope
- Lab photos (for science subjects)

**FacultyList** — `src/features/academics/components/FacultyList.tsx`
- Grid/list of faculty members per subject
- Each card: photo (circular), name, qualification, experience, email
- Data from `faculty-data.ts`

**SyllabusTab** — `src/features/academics/components/SyllabusTab.tsx`
- Syllabus PDF downloads for 11th and 12th
- Paper pattern PDFs

**QuestionPapersTab** — `src/features/academics/components/QuestionPapersTab.tsx`
- Past question papers organized by year
- Board exam papers (HSC March/July)
- CET papers where applicable

**DownloadsTab** — `src/features/academics/components/DownloadsTab.tsx`
- Study materials, notes, assignments
- Categorized by type

**TeachingPlanTab** — `src/features/academics/components/TeachingPlanTab.tsx`
- Teaching plans / academic plans by year
- Monthly/unit-wise planning PDFs

**AcademicPlan** — `src/features/academics/components/AcademicPlan.tsx`
- College-wide academic calendar
- 11th and 12th academic plans by year
- HSC timetable PDFs

**StreamSelector** — `src/features/academics/components/StreamSelector.tsx`
- Toggle between Science and Commerce stream view
- Shows subject card grid for each stream

**SubjectCard** — `src/features/academics/components/SubjectCard.tsx`
- Card with subject name, icon, link to subject page
- Used on stream landing pages

### 4.2 Library (`src/features/library/`)

**LibraryOverview** — `src/features/library/components/LibraryOverview.tsx`
- Library description, facilities, reading hall info
- Library photos

**BookCollection** — `src/features/library/components/BookCollection.tsx`
- Book grid showing library books
- Categories of books available

**LibaryBookGrid** — `src/features/library/components/LibaryBookGrid.tsx`
- Image grid of book collection photos
- Lightbox/toggle for full view

### 4.3 Data Files

**science-subjects.ts**
```typescript
interface Subject {
  id: string;
  name: string;
  nameMarathi: string;
  stream: 'science' | 'commerce';
  description: string;
  icon: string;
  tabs: string[];
  faculty: FacultyMember[];
  teachingPlans: PDFEntry[];
  questionPapers: PDFEntry[];
  syllabus: PDFEntry[];
  downloads: PDFEntry[];
  labImages?: string[];
}
```

**faculty-data.ts**
```typescript
interface FacultyMember {
  id: string;
  name: string;
  qualification: string;
  experience: string;
  specialization: string;
  email: string;
  photo: string;
  subject: string;
  stream: 'science' | 'commerce';
  cv?: string;
}
```

**pdf-index.ts**
```typescript
interface PDFEntry {
  title: string;
  path: string;
  year?: number;
  month?: string;
  category: 'question-paper' | 'syllabus' | 'textbook' | 'teaching-plan' | 'notes' | 'assignment' | 'other';
  stream: 'science' | 'commerce' | 'both';
  subject: string;
}
```

## 5. SUBJECT CONTENT INVENTORY

### Science Subjects (10) — `science/about-{subject}.php`

| Subject | PHP File | Faculty Count | PDF Categories | Lab Photos |
|---------|----------|---------------|----------------|------------|
| Marathi | `science/about-marathi.php` | ~3 | QP, Poetry, Grammar, Teaching Plan | No |
| English | `science/about-english.php` | ~3 | QP, Paper Pattern, Writing, Teaching Plan | No |
| Math | `science/about-math.php` | ~3 | QP, Textbooks, Differentiation, Teaching Plan | Yes |
| Hindi | `science/about-hindi.php` | ~3 | QP, Poetry, Rasa, Teaching Plan | No |
| Physics | `science/about-physics.php` | ~3 | QP (2013-2026), PPTs, Assignments, Teaching Plan | Yes |
| Chemistry | `science/about-chemistry.php` | ~3 | QP, Model Q&A, Teaching Plan | Yes |
| Biology | `science/about-biology.php` | ~3 | QP, Chapter Notes, Assignments, Teaching Plan | Yes |
| Geography | `science/about-geography.php` | ~3 | QP, Textbook, World Population Day, Teaching Plan | Yes |
| IT | `science/about-it.php` | ~3 | QP, Web Design, JavaScript, SEO, Teaching Plan | Yes |
| CS | `science/about-cs.php` | ~3 | QP (2000s-2024), 8085, C++, Teaching Plan | Yes |

### Commerce Subjects (9) — `commerce/about-{subject}.php`

| Subject | PHP File | Faculty Count | PDF Categories |
|---------|----------|---------------|----------------|
| Marathi | `commerce/about-marathi.php` | ~2 | QP, Essays, Teaching Plan |
| English | `commerce/about-english.php` | ~2 | QP, Paper Pattern, Teaching Plan |
| Math | `commerce/about-math.php` | ~2 | QP, Textbooks, Transpose, Teaching Plan |
| Hindi | `commerce/about-hindi.php` | ~2 | QP, Teaching Plan (same as science) |
| Account | `commerce/about-account.php` | ~2 | QP, Textbooks, Teaching Plan |
| Secretarial | `commerce/about-secretarial.php` | ~2 | QP, Textbooks, Corporate, Teaching Plan |
| OCM | `commerce/about-ocm.php` | ~2 | QP, Textbooks, Teaching Plan |
| Economics | `commerce/about-economics.php` | ~2 | QP, NITI Aayog, Five Year Plan, Teaching Plan |
| IT | `commerce/about-it.php` | ~2 | QP, Digital Marketing, Tally, Web Design, Teaching Plan |

## 6. IMPLEMENTATION ORDER

| Step | Task | Est. Hours |
|------|------|------------|
| 1 | Define TypeScript types (faculty, subject, pdf) | 4 |
| 2 | Create faculty data file (all ~40 faculty across both streams) | 8 |
| 3 | Create science subject data file (10 subjects) | 8 |
| 4 | Create commerce subject data file (9 subjects) | 6 |
| 5 | Create PDF index (all ~250-300 PDFs) | 16 |
| 6 | SubjectTabs component | 4 |
| 7 | FacultyList component | 4 |
| 8 | SubjectAbout component | 2 |
| 9 | SyllabusTab, QuestionPapersTab, DownloadsTab, TeachingPlanTab | 12 |
| 10 | SubjectCard + StreamSelector | 4 |
| 11 | Create dynamic subject page `[subject]/page.tsx` | 4 |
| 12 | Set up `generateStaticParams` for all 19 subjects | 2 |
| 13 | Academic Plan page | 6 |
| 14 | Stream landing pages (science + commerce) | 4 |
| 15 | Library page | 8 |
| 16 | Faculty CV PDF linking | 2 |
| **Total** | | **94 hours** |

## 7. TIMELINE

| Week | Hours | Deliverables |
|------|-------|-------------|
| W2 | 40 | Types, data files, PDF index, SubjectTabs (steps 1-6) |
| W3 | 48 | All tab components, dynamic routing (steps 7-12) |
| W4 | 48 | Academic Plan, Stream pages (steps 13-14) |
| W5 | 48 | Library page, Faculty CVs, polish (steps 15-16) |
| W6 | 48 | Edge-case subjects, verify all PDFs, data completeness |

## 8. DELIVERABLES

### Phase One Deliverables (End of Week 6)

- [ ] All 19 subject pages render at `/academics/science/[subject]` and `/academics/commerce/[subject]`
- [ ] Each subject page has all 6 tabs working (About, Faculty, Syllabus, QP, Downloads, Teaching Plan)
- [ ] Faculty list displays correctly with photos for every subject
- [ ] PDF downloads work for all question papers, syllabuses, textbooks
- [ ] Academic Plan page shows all years of plans and timetables
- [ ] Science stream landing page shows all 10 subject cards
- [ ] Commerce stream landing page shows all 9 subject cards
- [ ] Library page displays collection and book images
- [ ] All ~250-300 PDFs are indexed and link correctly
- [ ] `generateStaticParams` builds all subject routes at build time
- [ ] Faculty photos load from correct paths
- [ ] No TypeScript errors in owned code

## 9. DEFINITION OF DONE

- [ ] TypeScript strict mode passes on all owned files
- [ ] ESLint returns zero errors
- [ ] All 19 subject page URLs are statically generated (SSG)
- [ ] Each subject's PDFs are organized and filterable
- [ ] Faculty photos display correctly (circular, responsive)
- [ ] Tab navigation persists state (not full page reload)
- [ ] Subject pages degrade gracefully without JavaScript
- [ ] All PDFs open/download in new tab
- [ ] Library page correctly shows collection
- [ ] Metadata (title, description) set per subject page
- [ ] Open Graph tags for each subject page
- [ ] Breadcrumb shows: Academics > Science|Commerce > Subject Name

## 10. INTEGRATION CHECKPOINTS

| Checkpoint | When | What to Deliver | How |
|------------|------|----------------|-----|
| CP1 | End of W3 | Data files + SubjectTabs + 5 sample subjects | Push to `feature/developer-b` |
| CP2 | End of W5 | All subject pages + Academic Plan | Push to `feature/developer-b` |
| CP3 | End of W6 | Library + full feature set | Push + request merge to `develop` |
| CP4 | W8 (M1-M3) | Integration with other devs | Attend merge session |

## 11. FILES YOU SHOULD NEVER MODIFY

| File/Directory | Why |
|----------------|-----|
| `src/features/layout/` | Owned by Developer A |
| `src/features/navigation/` | Owned by Developer A |
| `src/features/home/` | Owned by Developer A |
| `src/features/about/` | Owned by Developer A |
| `src/features/admissions/` | Owned by Developer A |
| `src/features/contact/` | Owned by Developer A |
| `src/features/launch/` | Owned by Developer A |
| `src/features/gallery/` | Owned by Developer C |
| `src/features/achievements/` | Owned by Developer C |
| `src/features/blog/` | Owned by Developer C |
| `src/features/media/` | Owned by Developer C |
| `src/features/reviews/` | Owned by Developer C |
| `src/app/(about)/*` | Owned by Developer A |
| `src/app/admission/*` | Owned by Developer A |
| `src/app/contact/*` | Owned by Developer A |
| `src/app/gallery/*` | Owned by Developer C |
| `src/app/achievements/*` | Owned by Developer C |
| `src/app/blog/*` | Owned by Developer C |
| `src/app/media/*` | Owned by Developer C |
| `src/app/reviews/*` | Owned by Developer C |
| `src/components/ui/*` | Shared — changes only via PR to architect |
| `src/lib/*` | Shared — changes only via PR to architect |
| `src/styles/globals.css` | Shared — review with architect |
| `public/images/slider/` | Owned by Developer A |
| `public/images/icons/` | Owned by Developer A |
| `public/images/gallery/` | Owned by Developer C |
| `public/images/blogs/` | Owned by Developer C |
| `public/images/newsletter/` | Owned by Developer C |
| `public/images/co-curricular/` | Owned by Developer C |
| `public/images/academic-achievements/` | Owned by Developer C |

## 12. COMMUNICATION RULES

- You do NOT need to wait for Developer A or C to start work
- You own ALL faculty data — Developer C may need to reference it for testimonials; they should import from YOUR data files (if you make the types accessible) OR they will create their own reference data
- You own ALL PDFs — other pages may link to them using the same `/pdf/...` paths
- For library photos that overlap with facility photos (e.g., `sbpcsc-library-1.webp`), coordinate with Developer A — suggest they own the `images/facilities/` dir and you own `images/libary-books/`
- Cross-link to other routes using path strings only (e.g., `/about/pcet`, `/gallery/activities/2025-26`)
- Document any content gaps you find in the PHP source

## 13. CONTENT EXTRACTION GUIDE

### Reading Each Subject Page

Each `science/about-{subject}.php` follows this structure:
```
1-50: Header + sidebar include
50+: Tab HTML structure with 5-6 tabs
  - Tab 1: About (subject description + lab images)
  - Tab 2: Faculty (photo + info table)
  - Tab 3: Syllabus (PDF links)
  - Tab 4: Question Papers (PDF links by year)
  - Tab 5: Downloads (study materials)
  - Tab 6: Teaching Plan (PDF links)
```

Extract:
- Subject description text (from first tab)
- Faculty data (name, qualification, experience, photo filename, email)
- PDF paths organized by category and year
- Lab/section image paths

### PDF Indexing Strategy

Create one master PDF index (`pdf-index.ts`) that maps all subject PDFs:
```typescript
// Structure
{
  "science": {
    "physics": [
      { "title": "HSC March 2023 Physics", "path": "/pdf/science/physics/hsc-2013-march-physics.pdf", "year": 2023, "category": "question-paper" },
      ...
    ],
    ...
  },
  "commerce": {
    "account": [...],
    ...
  }
}
```

### Faculty Photo Paths

| Stream | Source Directory | Target Directory |
|--------|-----------------|------------------|
| Science | `science/images/faculty/` (26 files) | `public/images/faculty/science/` |
| Commerce | `commerce/images/faculty/` (14 files) | `public/images/faculty/commerce/` |

---

*End of PRAJWAL_IMPLEMENTATION.md*
