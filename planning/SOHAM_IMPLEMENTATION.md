# SOHAM — IMPLEMENTATION PLAN

## Header, SEO, Home, Contact, Launch, 3 About Pages, 5 Science Subjects, 2 Commerce Subjects

---

## 1. RESPONSIBILITIES

You own the following domains completely:

1. **Header System** — Header component, TopStrip, Logo, SocialIcons
2. **SEO & Redirects** — Sitemap generation, robots.txt, metadata defaults, 301 redirects
3. **Home Page** — Carousel, overview sections, news scroll, icon boxes, testimonials preview, enrollment modal
4. **Contact** — Contact form (API route), contact info, map
5. **Launch / Splash** — Splash page with countdown, fireworks, confetti, gift box
6. **About PCET** — Trust overview, founder details (6 founders)
7. **About SBPCSC** — Vision, mission, quality policy
8. **Principal's Desk** — Principal photo + message
9. **Science Subjects (5)** — Physics, Chemistry, Biology, Mathematics, Computer Science
10. **Commerce Subjects (2)** — Account & Book Keeping, Economics

### Owned Public Assets

```
public/images/slider/          # Home carousel
public/images/icons/           # Icon box grid
public/images/founders/        # PCET founders
public/images/logo/            # College logos
public/images/enquiry-*.jpg    # Enrollment modal
public/images/favicon-icon.png
public/images/sbpcsc-logo.png
public/images/pcet-trust-logo.jpg
public/images/sbpcsc-college.webp
public/images/new.gif
public/images/pdficon.png
public/images/all-the-best-01.JPG
public/pdf/ (root PDFs)        # Prospectus, cutoffs, forms, brochures
public/pdf/science/physics/    # Physics question papers & study material
public/pdf/science/chemistry/  # Chemistry question papers & study material
public/pdf/science/biology/    # Biology question papers & study material
public/pdf/science/math/       # Math question papers & study material
public/pdf/science/cs/         # CS question papers & study material
public/pdf/commerce/account-book-keeping/
public/pdf/commerce/economics/
public/fonts/                  # Glyphicons + Font Awesome
public/audio/                  # Launch splash audio
```

## 2. OWNED FOLDERS & ROUTES

### Pages

| Route | Source File | Purpose |
|-------|-------------|---------|
| `/` | `index.php` | Homepage |
| `/about/pcet` | `about-pcet.php` | About PCET Trust |
| `/about/sbpcsc` | `about-sbpcsc.php` | About College |
| `/about/principal-desk` | `principal-desk.php` | Principal's Message |
| `/academics/science/physics` | `science/about-physics.php` | Physics subject |
| `/academics/science/chemistry` | `science/about-chemistry.php` | Chemistry subject |
| `/academics/science/biology` | `science/about-biology.php` | Biology subject |
| `/academics/science/math` | `science/about-math.php` | Mathematics subject |
| `/academics/science/cs` | `science/about-cs.php` | CS subject |
| `/academics/commerce/account` | `commerce/about-account.php` | Account & Book Keeping |
| `/academics/commerce/economics` | `commerce/about-economics.php` | Economics |
| `/contact` | `sbpcsc-contact.php` | Contact Form |
| `/launch` | `launch/index.php` | Splash Page |
| `/launch/count` | `launch/count.php` | Countdown |

### Feature Folders

```
src/features/layout/
src/features/layout/components/Header.tsx
src/features/layout/components/TopStrip.tsx
src/features/layout/components/Logo.tsx
src/features/layout/components/SocialIcons.tsx
src/features/layout/data/nav-links.ts     # Navigation data (shared)

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
src/features/about/data/about-content.ts

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

src/app/sitemap.ts
src/app/robots.ts
```

## 3. FEATURES

### 3.1 Header System

**Header** — `src/features/layout/components/Header.tsx`
- Top strip (phone, email, contact hours)
- Social media icons (Facebook, Twitter, LinkedIn, Instagram, YouTube)
- Admission Enquiry button (Google Form link)
- College logo + PCET logo
- College name, tagline, index number

**TopStrip** — `src/features/layout/components/TopStrip.tsx`
- Contact info bar (phone, email)

**Logo** — `src/features/layout/components/Logo.tsx`
- College logo image + PCET trust logo
- Responsive sizing

**SocialIcons** — `src/features/layout/components/SocialIcons.tsx`
- Social media icon links

### 3.2 SEO & Redirects

- `src/app/sitemap.ts`: Auto-generate sitemap from all route data
- `src/app/robots.ts`: Allow all, point to sitemap
- Root `layout.tsx`: Default metadata, Open Graph, JSON-LD
- `generateMetadata()` on every page
- `next.config.ts`: 301 redirects for all legacy `.php` URLs

### 3.3 Home Page

**HeroCarousel** — `src/features/home/components/HeroCarousel.tsx`
- 20+ slides (toppers, results, sports, activities)
- Fade transition, auto-play 4s interval
- Dark overlay captions, responsive

**OverviewSection** — `src/features/home/components/OverviewSection.tsx`
- College overview text, "Read More" links

**NewsScroll** — `src/features/home/components/NewsScroll.tsx`
- Scrolling news items with "new.gif" indicator
- Upward marquee animation

**IconBoxGrid** — `src/features/home/components/IconBoxGrid.tsx`
- 6 icon boxes (Hostel, Library, Email, Call, Classroom, Reading Hall)
- Icons from `public/images/icons/`

**TestimonialPreview** — `src/features/home/components/TestimonialPreview.tsx`
- First 3 testimonials from data

**EnrollmentModal** — `src/features/home/components/EnrollmentModal.tsx`
- Modal popup on page load with enquiry image

### 3.4 About Pages

**AboutPCET**: Trust overview, founder details (6 founders with photos), history
**AboutSBPCSC**: Vision, mission, quality policy, college overview
**PrincipalMessage**: Photo + message text

### 3.5 Subject Pages (7)

Each subject page follows a shared template:
- Subject introduction / overview
- Faculty profile (name, qualification, experience, photo)
- Downloadable PDFs (question papers, textbooks, teaching plans)

### 3.6 Contact

**ContactForm.tsx**: Name, email, phone, message → POST to API route
**api/route.ts**: POST handler — validates input, sends email via Resend/Nodemailer
**ContactInfo.tsx**: Address, phone, email display
**CollegeMap.tsx**: Google Maps embed

### 3.7 Launch

- Splash page with animated countdown
- Canvas-based fireworks
- Gift box interaction
- Confetti overlay
- Background audio

## 4. IMPLEMENTATION ORDER

| Step | Task | Est. Hours |
|------|------|------------|
| 1 | Header system (TopStrip, Logo, SocialIcons, Header) | 6 |
| 2 | SEO: sitemap, robots, metadata defaults, redirects | 3 |
| 3 | Home page: HeroCarousel | 8 |
| 4 | Home page: Overview, NewsScroll, IconBoxGrid | 6 |
| 5 | Home page: TestimonialPreview, EnrollmentModal | 4 |
| 6 | About PCET + About SBPCSC + Principal's Desk | 8 |
| 7 | Subject pages (Physics, Chemistry, Biology, Math, CS) | 10 |
| 8 | Commerce subject pages (Account, Economics) | 4 |
| 9 | Contact form + API route | 6 |
| 10 | Launch pages (splash + countdown) | 8 |
| **Total** | | **63 hours** |

## 5. DELIVERABLES

- [ ] Header displays on all pages with working contact info and social links
- [ ] Sitemap generated with all routes
- [ ] Old `.php` URLs redirect (301) to new paths
- [ ] Homepage carousel cycles through all 20+ slides
- [ ] Homepage testimonials preview shows 3 items
- [ ] Homepage icon boxes link correctly
- [ ] Enrollment modal appears on page load
- [ ] About PCET page shows trust info and 6 founders
- [ ] About SBPCSC page shows vision/mission/policy
- [ ] Principal's Desk shows photo and message
- [ ] All 7 subject pages render with faculty + PDFs
- [ ] Contact form submits and sends email
- [ ] Contact page shows address, phone, email, map
- [ ] Launch page countdown works
- [ ] No TypeScript errors
- [ ] No `any` types
- [ ] All images use `next/image` with `alt` text
- [ ] Metadata set on every page
