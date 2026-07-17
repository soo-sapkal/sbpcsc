# SOHAM — IMPLEMENTATION PLAN

## Foundation, Layout, Navigation, Home, About, Admissions, Contact, Launch

---

## 1. RESPONSIBILITIES

You own the following domains completely:

1. **Layout System** — Root layout, header, footer, all shared wrappers
2. **Navigation** — Main navigation, mobile nav, sidebars, breadcrumbs, spotlight
3. **Home Page** — Carousel, overview, testimonials preview, icon boxes, news scroll, modal
4. **About Section** — PCET, SBPCSC, Principal's Desk, Committee, Administration, Infrastructure, Rules
5. **Admissions** — Tabs with process, cutoffs, fees, eligibility, forms, brochures
6. **Contact** — Contact form (API route), contact info, map
7. **Launch/Splash** — Splash page countdown
8. **Global SEO** — Sitemap generation, robots.txt, metadata defaults
9. **Redirects** — All `.php` to new URL redirect mappings
10. **Global Assets** — slider images, icons, facilities images, logos, fonts

## 2. OWNED FOLDERS

```
src/app/layout.tsx
src/app/page.tsx                       # Home
src/app/not-found.tsx
src/app/error.tsx
src/app/loading.tsx
src/app/sitemap.ts
src/app/robots.ts

src/app/(about)/
src/app/(about)/layout.tsx
src/app/(about)/pcet/page.tsx
src/app/(about)/sbpcsc/page.tsx
src/app/(about)/principal-desk/page.tsx
src/app/(about)/committee/page.tsx
src/app/(about)/administration/page.tsx
src/app/(about)/infrastructure/page.tsx
src/app/(about)/rules/page.tsx

src/app/admission/page.tsx

src/app/contact/page.tsx

src/app/launch/page.tsx
src/app/launch/count/page.tsx

src/features/layout/
src/features/layout/components/
src/features/layout/components/Header.tsx
src/features/layout/components/Footer.tsx
src/features/layout/components/TopStrip.tsx
src/features/layout/components/Logo.tsx
src/features/layout/components/SocialIcons.tsx
src/features/layout/components/Spotlight.tsx
src/features/layout/components/ScrollToTop.tsx
src/features/layout/data/nav-links.ts

src/features/navigation/
src/features/navigation/components/MainNav.tsx
src/features/navigation/components/MobileNav.tsx
src/features/navigation/components/Sidebar.tsx
src/features/navigation/components/Breadcrumb.tsx
src/features/navigation/data/sidebar-links.ts

src/features/home/
src/features/home/components/HeroCarousel.tsx
src/features/home/components/OverviewSection.tsx
src/features/home/components/NewsScroll.tsx
src/features/home/components/IconBoxGrid.tsx
src/features/home/components/TestimonialPreview.tsx
src/features/home/components/EnrollmentModal.tsx
src/features/home/data/home-content.ts

src/features/about/
src/features/about/components/AboutPCET.tsx
src/features/about/components/AboutSBPCSC.tsx
src/features/about/components/PrincipalMessage.tsx
src/features/about/components/CommitteeList.tsx
src/features/about/components/AdminStaffList.tsx
src/features/about/components/InfrastructureShowcase.tsx
src/features/about/components/RulesList.tsx
src/features/about/data/about-content.ts
src/features/about/data/committee-data.ts
src/features/about/data/administration-data.ts

src/features/admissions/
src/features/admissions/components/AdmissionTabs.tsx
src/features/admissions/components/AdmissionProcess.tsx
src/features/admissions/components/CutoffList.tsx
src/features/admissions/components/FeeStructure.tsx
src/features/admissions/components/Eligibility.tsx
src/features/admissions/components/BrochureDownload.tsx
src/features/admissions/data/admission-content.ts

src/features/contact/
src/features/contact/components/ContactForm.tsx
src/features/contact/components/ContactInfo.tsx
src/features/contact/components/CollegeMap.tsx
src/features/contact/api/route.ts

src/features/launch/
src/features/launch/components/CountdownTimer.tsx
src/features/launch/components/FireworksCanvas.tsx
src/features/launch/components/GiftBox.tsx
src/features/launch/components/ConfettiOverlay.tsx
```

### Owned Public Assets

```
public/images/slider/
public/images/icons/
public/images/facilities/
public/images/founders/
public/images/logo/
public/images/favicon-icon.png
public/images/sbpcsc-logo.png
public/images/pcet-trust-logo.jpg
public/images/sbpcsc-college.webp
public/images/new.gif
public/images/pdficon.png
public/images/enquiry-*.jpg
public/images/all-the-best-01.JPG
public/images/*.jpg (root-level non-faculty, non-gallery images)
public/fonts/
public/audio/
public/pdf/ (root-level college PDFs only)
```

## 3. OWNED ROUTES

| Route | Source File | Purpose |
|-------|-------------|---------|
| `/` | `index.php` | Homepage |
| `/about/pcet` | `about-pcet.php` | About PCET Trust |
| `/about/sbpcsc` | `about-sbpcsc.php` | About College |
| `/about/principal-desk` | `principal-desk.php` | Principal's Message |
| `/about/committee` | `committee.php` | Committees |
| `/about/administration` | `administration.php` | Admin Staff |
| `/about/infrastructure` | `infrastructure-and-facilities.php` | Campus Facilities |
| `/about/rules` | `rules-and-regulations.php` | Rules & Regulations |
| `/admission` | `admission.php` | Admissions |
| `/contact` | `sbpcsc-contact.php` | Contact Form |
| `/launch` | `launch/index.php` | Splash Page |
| `/launch/count` | `launch/count.php` | Countdown |

## 4. OWNED FEATURES

### 4.1 Layout System (`src/features/layout/`)

**Header** — `src/features/layout/components/Header.tsx`
- Top strip (phone, email, contact hours)
- Social media icons (Facebook, Twitter, LinkedIn, Instagram, YouTube)
- Admission Enquiry button (Google Form link)
- College logo + PCET logo
- College name, tagline, index number
- Spotlight / highlights marquee bar

**Footer** — `src/features/layout/components/Footer.tsx`
- "Get in Touch" column (address, phone, email, social links)
- "Important Links" column (NCERT, JEE, MH-CET, NEET, etc.)
- "Quick Links" column (Admission, Academics, Blog, Library, ERP, Contact)
- Location column (Google Maps iframe)
- Copyright bar + credit

**ScrollToTop** — `src/features/layout/components/ScrollToTop.tsx`
- Fixed bottom-right button
- Fade in after 220px scroll
- Smooth scroll to top

**Spotlight** — `src/features/layout/components/Spotlight.tsx`
- Blinking "Highlights:" label
- Marquee with announcement links

### 4.2 Navigation (`src/features/navigation/`)

**MainNav** — `src/features/navigation/components/MainNav.tsx`
- Multi-level dropdown (7 top-level items)
- Active state based on current route
- Responsive: desktop hover, mobile hamburger toggle

**MobileNav** — `src/features/navigation/components/MobileNav.tsx`
- Hamburger button at mobile breakpoint
- Slide-in submenu accordion

**Sidebar** — `src/features/navigation/components/Sidebar.tsx`
- 4 variants: about, academics, student-corner, media
- Accordion/collapse for nested items
- Active state highlighting

**Breadcrumb** — `src/features/navigation/components/Breadcrumb.tsx`
- Auto-generated from route segments
- Home icon + chevron separators

### 4.3 Home (`src/features/home/`)

**HeroCarousel** — `src/features/home/components/HeroCarousel.tsx`
- 20+ slides (toppers, results, sports, activities)
- Fade transition (not slide)
- Auto-play at 4-second interval
- Dark overlay captions
- Responsive (hide on mobile)

**OverviewSection** — `src/features/home/components/OverviewSection.tsx`
- College overview text
- "Read More" links

**NewsScroll** — `src/features/home/components/NewsScroll.tsx`
- Scrolling news items with "new.gif" indicator
- Upward marquee animation

**IconBoxGrid** — `src/features/home/components/IconBoxGrid.tsx`
- 6 icon boxes (Hostel, Library, Email, Call, Classroom, Reading Hall)
- Icons from `public/images/icons/`
- Links to infrastructure page, email, phone

**TestimonialPreview** — `src/features/home/components/TestimonialPreview.tsx`
- First 3 testimonials from data
- Quote icon + text + reviewer name
- "Read More" button linking to /reviews

**EnrollmentModal** — `src/features/home/components/EnrollmentModal.tsx`
- Modal popup on page load
- Enrollment enquiry image
- Bootstrap modal behavior (can close)

### 4.4 About (`src/features/about/`)

- **AboutPCET**: Trust overview, founder details (6 founders with photos), history
- **AboutSBPCSC**: Vision, mission, quality policy, college overview
- **PrincipalMessage**: Photo + message text
- **CommitteeList**: All committees with member lists (Vishakha, Anti-Ragging, Exam, Grievance, SC/ST, etc.)
- **AdminStaffList**: Administrative staff table with designations
- **InfrastructureShowcase**: Facilities grid with photos (labs, library, hostels, classrooms)
- **RulesList**: Student rules and regulations

### 4.5 Admissions (`src/features/admissions/`)

- Tabbed interface with: Process, Cut-Off, Eligibility, Fee Structure, Brochures, Forms
- Cut-off lists by year (2021-22 through 2025-26)
- PDF downloads for prospectus, forms, brochures
- Admission enquiry link (Google Form)

### 4.6 Contact (`src/features/contact/`)

- **ContactForm.tsx**: Name, email, phone, message → POST to API route
- **api/route.ts**: POST handler — validates input, sends email via Resend/Nodemailer
- **ContactInfo.tsx**: Address, phone, email display
- **CollegeMap.tsx**: Google Maps embed

### 4.7 Launch (`src/features/launch/`)

- Splash page with animated countdown
- Canvas-based fireworks
- Gift box interaction
- Confetti overlay
- Background audio

### 4.8 Global SEO

- `src/app/sitemap.ts`: Auto-generate sitemap from all route data
- `src/app/robots.ts`: Allow all, point to sitemap
- Root `layout.tsx`: Default metadata, Open Graph, JSON-LD
- `generateMetadata()` on every route

## 5. IMPLEMENTATION ORDER

| Step | Task | Est. Hours |
|------|------|------------|
| 1 | Global layout, font loading, metadata defaults | 4 |
| 2 | Header component (top strip, logo, college name) | 4 |
| 3 | Main navigation (desktop + mobile) | 8 |
| 4 | Footer component | 4 |
| 5 | Spotlight/Highlights bar | 2 |
| 6 | ScrollToTop + global scripts | 2 |
| 7 | Sidebar (4 variants) | 4 |
| 8 | Breadcrumb component | 2 |
| 9 | Inner page banner component | 1 |
| 10 | Home page: HeroCarousel | 6 |
| 11 | Home page: Overview, NewsScroll, IconBoxGrid | 6 |
| 12 | Home page: TestimonialPreview, EnrollmentModal | 4 |
| 13 | About section layout + all pages | 16 |
| 14 | Admissions page with tabs | 8 |
| 15 | Contact form + API route | 6 |
| 16 | Launch/splash pages | 8 |
| 17 | Sitemap + robots generation | 2 |
| 18 | Redirect configuration (next.config.ts) | 2 |
| **Total** | | **89 hours** |

## 6. TIMELINE

| Week | Hours | Deliverables |
|------|-------|-------------|
| W2 | 40 | Layout, Navigation (steps 1-8) |
| W3 | 40 | Home page (steps 9-12) |
| W4 | 40 | About section (step 13) |
| W5 | 40 | Admissions + Contact (steps 14-15) |
| W6 | 40 | Launch + SEO + Redirects (steps 16-18) |

## 7. DELIVERABLES

### Phase One Deliverables (End of Week 6)

- [ ] Root layout renders correctly with proper SEO metadata
- [ ] Header displays on all pages with working navigation
- [ ] Navigation is responsive: dropdown on desktop, hamburger on mobile
- [ ] Spotlight/Highlights bar displays scrolling announcements
- [ ] Footer displays on all pages with correct links and map
- [ ] Sidebar variants render correctly in their sections
- [ ] Breadcrumbs auto-generate from route path
- [ ] Scroll-to-top button works
- [ ] Homepage carousel cycles through all 20+ slides
- [ ] Homepage testimonials preview shows 3 items
- [ ] Homepage icon boxes link correctly
- [ ] Enrollment modal appears on page load
- [ ] All 7 about pages render with correct content
- [ ] Committee list shows all committees
- [ ] Admin staff list shows all staff
- [ ] Infrastructure page shows all 6+ facilities with images
- [ ] Admissions page has 6 working tabs
- [ ] Cut-off PDFs by year are downloadable
- [ ] Contact form submits and sends email
- [ ] Contact page shows address, phone, email, map
- [ ] Launch page countdown works
- [ ] Sitemap generated with all routes
- [ ] Old `.php` URLs redirect (301) to new paths
- [ ] No TypeScript errors in owned code

## 8. DEFINITION OF DONE

- [ ] TypeScript strict mode passes on all owned files
- [ ] ESLint returns zero errors
- [ ] All components are typed with exported interfaces
- [ ] No `any` types used
- [ ] All data extracted into TypeScript files (no hard-coded content in components)
- [ ] All images use `next/image` with `alt` text
- [ ] Metadata (title, description, OG) set on every page
- [ ] Responsive: tested at 320px, 768px, 1024px, 1440px
- [ ] Keyboard navigation works for all interactive elements
- [ ] No broken links (internal or external)
- [ ] All PDFs downloadable (not blocked)
- [ ] Lighthouse scores ≥ 90

## 9. INTEGRATION CHECKPOINTS

| Checkpoint | When | What to Deliver | How |
|------------|------|----------------|-----|
| CP1 | End of W3 | Layout + Navigation + Home | Push to `feature/developer-a` |
| CP2 | End of W5 | About + Admissions + Contact | Push to `feature/developer-a` |
| CP3 | End of W6 | Full feature set | Push + request merge to `develop` |
| CP4 | W8 (M1) | Integration with other devs | Attend merge session |

## 10. FILES YOU SHOULD NEVER MODIFY

| File/Directory | Why |
|----------------|-----|
| `src/features/academics/` | Owned by Developer B |
| `src/features/gallery/` | Owned by Developer C |
| `src/features/achievements/` | Owned by Developer C |
| `src/features/blog/` | Owned by Developer C |
| `src/features/media/` | Owned by Developer C |
| `src/features/reviews/` | Owned by Developer C |
| `src/features/library/` | Owned by Developer B |
| `src/components/ui/*` | Shared — changes only via PR to architect |
| `src/lib/*` | Shared — changes only via PR to architect |
| `src/data/*` | Shared — changes only via PR to architect |
| `src/types/index.ts` (shared types) | Shared — changes only via PR to architect |
| `src/hooks/*` | Shared — changes only via PR to architect |
| `src/styles/globals.css` | Shared — review with architect before changing |
| `tailwind.config.ts` | Shared — review with architect before changing |
| `next.config.ts` | Shared — review with architect before changing |
| `public/images/faculty/` | Owned by Developer B |
| `public/images/gallery/` | Owned by Developer C |
| `public/images/blogs/` | Owned by Developer C |
| `public/images/newsletter/` | Owned by Developer C |
| `public/images/co-curricular/` | Owned by Developer C |
| `public/images/academic-achievements/` | Owned by Developer C |
| `public/images/libary-books/` | Owned by Developer B |
| `public/pdf/science/` | Owned by Developer B |
| `public/pdf/commerce/` | Owned by Developer B |

## 11. COMMUNICATION RULES

- You do NOT need to wait for Developer B or C to start work
- Do NOT make changes to shared code without filing a PR to the architect
- If you discover content issues in the PHP files, document in a shared "content-issues.md" file
- If you need a new shared UI component, request it during Phase Zero (do not create it yourself)
- Use the `data/` files you own — do NOT import data from another developer's feature module
- Cross-link to another developer's routes using path strings (e.g., `/academics/science/physics`), not imports

## 12. CONTENT EXTRACTION GUIDE

### Source Files for Content Extraction

| New File | PHP Source | Key Data |
|----------|-----------|----------|
| `navigation/data/nav-links.ts` | `header.php` lines 62-144 | Menu structure, URLs, labels |
| `sidebar/data/sidebar-links.ts` | 4 sidebar PHP files | Sidebar items per section |
| `home/data/home-content.ts` | `index.php` | Carousel image list, news items, icon box data, overview text |
| `about/data/about-content.ts` | `about-pcet.php`, `about-sbpcsc.php`, `principal-desk.php` | Text content, founder info |
| `about/data/committee-data.ts` | `committee.php` | Committee names + members |
| `about/data/administration-data.ts` | `administration.php` | Staff names + designations |
| `admissions/data/admission-content.ts` | `admission.php` | Process steps, cutoffs, fees, tabs |
| `layout/data/nav-links.ts` | `header.php` | Navigation structure |

### Image Source Mapping

| Feature | Images From |
|---------|-------------|
| Home carousel | `images/slider/*` |
| Icon boxes | `images/icons/*` |
| Facilities | `images/facilities/*` |
| Founders | `images/founders/*` |
| Logos | `images/logo/*` |
| About page | `images/sbpcsc-college.webp` |
| Modal | `images/enquiry-sbpcsc-*-*.jpg` |

---

*End of SOHAM_IMPLEMENTATION.md*
