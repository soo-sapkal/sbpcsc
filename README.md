# SBPCSC — Website Revamp

A complete revamp of the [S. B. Patil College of Science and Commerce](https://www.sbpatilcollege.com/) website from a legacy PHP monolith to a modern Next.js 16 application.

## 🧠 Overview

This project migrates the existing PHP-based website (powered by a shared PCET template framework with Bootstrap 4/jQuery) to a modern **Next.js 16** stack with TypeScript, TailwindCSS v4, and shadcn/ui primitives.

The legacy codebase lives at `D:\INTERNSHIP\sbpcsc` and consists of ~30+ PHP pages, inline styles/scripts, and a flat file structure.

## 🏗 Tech Stack

| Layer        | Technology                                                   |
|-------------|--------------------------------------------------------------|
| Framework   | Next.js 16 (App Router, Turbopack)                           |
| Language    | TypeScript (strict mode)                                     |
| Styling     | TailwindCSS v4                                                |
| UI Primitives | shadcn/ui (base-nova)                                      |
| Icons       | Lucide React                                                  |
| Animation   | Framer Motion                                                 |
| Fonts       | Inter (sans) + Poppins (headings) via `next/font`             |
| Analytics   | Google Analytics (G-S75YZJK9GR)                               |

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router pages (all devs)
│   ├── layout.tsx                # Root layout (shared)
│   ├── page.tsx                  # Home — Soham
│   ├── (about)/                  # About routes — all devs
│   ├── admission/                # Admissions — Prajwal
│   ├── contact/                  # Contact — Soham
│   ├── academics/                # Academics — all devs
│   ├── gallery/                  # Gallery — Mayur
│   ├── media/                    # Media — Mayur
│   ├── reviews/                  # Reviews — Mayur
│   ├── library/                  # Library — Prajwal
│   ├── blog/                     # Blog — Prajwal
│   ├── launch/                   # Launch — Soham
│   └── api/                      # API route handlers — Soham
├── features/
│   ├── layout/                   # Header(Soham) Footer(Prajwal) Scroll(Prajwal)
│   ├── navigation/               # Main/MobileNav(Mayur) Sidebar/Breadcrumb(Prajwal)
│   ├── home/                     # Soham
│   ├── about/                    # Soham + Prajwal (split by page)
│   ├── admissions/               # Prajwal
│   ├── academics/                # All devs (split by subject)
│   ├── contact/                  # Soham
│   ├── gallery/                  # Mayur
│   ├── blog/                     # Prajwal
│   ├── media/                    # Mayur
│   ├── reviews/                  # Mayur
│   ├── library/                  # Prajwal
│   ├── achievements/             # Mayur
│   └── launch/                   # Soham
├── components/ui/                # shadcn/ui primitives (shared)
├── lib/                          # Utility functions (shared)
├── data/                         # Shared static data
├── hooks/                        # Shared custom hooks
├── types/                        # TypeScript type definitions
└── styles/globals.css            # Global TailwindCSS setup
```

## 👥 Development Team

Each developer owns exclusive folders — no cross-developer dependencies.

### Soham — Header, SEO, Home, Contact, Launch, 3 About, 7 Subjects

| Pages | Routes |
|-------|--------|
| Home | `/` |
| About PCET, About SBPCSC, Principal's Desk | `/about/pcet`, `/about/sbpcsc`, `/about/principal-desk` |
| Science: Physics, Chemistry, Biology, Math, CS | `/academics/science/physics`, `/academics/science/chemistry`, `/academics/science/biology`, `/academics/science/math`, `/academics/science/cs` |
| Commerce: Account, Economics | `/academics/commerce/account`, `/academics/commerce/economics` |
| Contact | `/contact` |
| Launch (splash + countdown) | `/launch`, `/launch/count` |
| **Infra:** Header, TopStrip, Logo, SocialIcons | Shared |
| **Infra:** SEO (sitemap, robots, metadata, redirects) | Shared |

### Prajwal — Footer, Sidebars, Admissions, Blog, Academic Plan, Library, 4 About, 5 Subjects

| Pages | Routes |
|-------|--------|
| Committees, Administration, Infrastructure, Rules | `/about/committee`, `/about/administration`, `/about/infrastructure`, `/about/rules` |
| Academic Plan | `/academic-plan` |
| Admissions | `/admission` |
| Blog | `/blog`, `/blog/[slug]` |
| Library | `/library` |
| Science: English, Hindi, Marathi, Geography, IT | `/academics/science/english`, `/academics/science/hindi`, `/academics/science/marathi`, `/academics/science/geography`, `/academics/science/it` |
| **Infra:** Footer, Spotlight, ScrollToTop | Shared |
| **Infra:** Sidebars (4 variants), Breadcrumbs | Shared |

### Mayur — Navigation, Gallery, Media, Reviews, 7 Commerce Subjects

| Pages | Routes |
|-------|--------|
| Activities Gallery, Guest Lectures Gallery, Achievements Gallery | `/gallery/activities`, `/gallery/guest-lectures`, `/gallery/achievements` |
| Newsletter, Video Gallery | `/media/newsletter`, `/media/video` |
| Reviews | `/reviews` |
| Commerce: SP, IT, Math, English, Hindi, Marathi, OCM | `/academics/commerce/sp`, `/academics/commerce/it`, `/academics/commerce/math`, `/academics/commerce/english`, `/academics/commerce/hindi`, `/academics/commerce/marathi`, `/academics/commerce/ocm` |
| **Infra:** MainNav (desktop), MobileNav (hamburger) | Shared |

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Type-check
npm run typecheck

# Lint
npm run lint
```

## 🗺 Route Map

| Route | Legacy Source | Owner | Status |
|------|-------------|-------|--------|
| `/` | `index.php` | Soham | 🔧 Pending |
| `/about/pcet` | `about-pcet.php` | Soham | 🔧 Pending |
| `/about/sbpcsc` | `about-sbpcsc.php` | Soham | 🔧 Pending |
| `/about/principal-desk` | `principal-desk.php` | Soham | 🔧 Pending |
| `/about/committee` | `committee.php` | Prajwal | 🔧 Pending |
| `/about/administration` | `administration.php` | Prajwal | 🔧 Pending |
| `/about/infrastructure` | `infrastructure-and-facilities.php` | Prajwal | 🔧 Pending |
| `/about/rules` | `rules-and-regulations.php` | Prajwal | 🔧 Pending |
| `/admission` | `admission.php` | Prajwal | 🔧 Pending |
| `/academic-plan` | `academic-plan.php` | Prajwal | 🔧 Pending |
| `/contact` | `sbpcsc-contact.php` | Soham | 🔧 Pending |
| `/library` | `library.php` | Prajwal | 🔧 Pending |
| `/blog` | `blog.php` | Prajwal | 🔧 Pending |
| `/gallery/activities` | `activities.php` | Mayur | 🔧 Pending |
| `/gallery/guest-lectures` | `guest-lectures.php` | Mayur | 🔧 Pending |
| `/gallery/achievements` | `achievements.php` | Mayur | 🔧 Pending |
| `/media/newsletter` | `newsletter.php` | Mayur | 🔧 Pending |
| `/media/video` | `sbpcsc-video.php` | Mayur | 🔧 Pending |
| `/reviews` | `sbpcsc-reviews.php` | Mayur | 🔧 Pending |
| `/launch` | `launch/index.php` | Soham | 🔧 Pending |
| `/launch/count` | `launch/count.php` | Soham | 🔧 Pending |
| `/academics/science/physics` | `science/about-physics.php` | Soham | 🔧 Pending |
| `/academics/science/chemistry` | `science/about-chemistry.php` | Soham | 🔧 Pending |
| `/academics/science/biology` | `science/about-biology.php` | Soham | 🔧 Pending |
| `/academics/science/math` | `science/about-math.php` | Soham | 🔧 Pending |
| `/academics/science/cs` | `science/about-cs.php` | Soham | 🔧 Pending |
| `/academics/science/english` | `science/about-english.php` | Prajwal | 🔧 Pending |
| `/academics/science/hindi` | `science/about-hindi.php` | Prajwal | 🔧 Pending |
| `/academics/science/marathi` | `science/about-marathi.php` | Prajwal | 🔧 Pending |
| `/academics/science/geography` | `science/about-geography.php` | Prajwal | 🔧 Pending |
| `/academics/science/it` | `science/about-it.php` | Prajwal | 🔧 Pending |
| `/academics/commerce/account` | `commerce/about-account.php` | Soham | 🔧 Pending |
| `/academics/commerce/economics` | `commerce/about-economics.php` | Soham | 🔧 Pending |
| `/academics/commerce/sp` | `commerce/about-secretarial.php` | Mayur | 🔧 Pending |
| `/academics/commerce/it` | `commerce/about-it.php` | Mayur | 🔧 Pending |
| `/academics/commerce/math` | `commerce/about-math.php` | Mayur | 🔧 Pending |
| `/academics/commerce/english` | `commerce/about-english.php` | Mayur | 🔧 Pending |
| `/academics/commerce/hindi` | `commerce/about-hindi.php` | Mayur | 🔧 Pending |
| `/academics/commerce/marathi` | `commerce/about-marathi.php` | Mayur | 🔧 Pending |
| `/academics/commerce/ocm` | `commerce/about-ocm.php` | Mayur | 🔧 Pending |

All legacy `.php` URLs have 301 redirects configured in `next.config.ts`.

## 📦 Assets Migrated

All media assets from the legacy site are copied into `public/`:

| Category     | Path                | Items    |
|-------------|---------------------|----------|
| Images      | `public/images/`    | ~400+    |
| PDFs        | `public/pdf/`       | ~300+    |
| Fonts       | `public/fonts/`     | Glyphicons, Font Awesome |
| Audio       | `public/audio/`     | Launch audio |

## 📋 Planning

Detailed implementation plans for each developer are in the `planning/` directory:

- `MASTER_IMPLEMENTATION_PLAN.md` — Full project architecture & migration strategy
- `SOHAM_IMPLEMENTATION.md` — Soham: Header, SEO, Home, Contact, Launch, 3 About, 7 Subjects
- `PRAJWAL_IMPLEMENTATION.md` — Prajwal: Footer, Sidebars, Admissions, Blog, Academic Plan, Library, 4 About, 5 Subjects
- `MAYUR_IMPLEMENTATION.md` — Mayur: Navigation, Gallery (3), Media (2), Reviews, 7 Commerce Subjects

## 🎨 Design Tokens

| Token        | Value     | Usage               |
|-------------|-----------|----------------------|
| `primary`   | `#146ab5` | Main college blue    |
| `accent`    | `#cf2b1f` | Red highlights       |
| Font (sans) | Inter     | Body text            |
| Font (heading) | Poppins | Headings/titles    |

## 🧪 Quality Gates

- [ ] TypeScript strict mode: no errors
- [ ] ESLint: zero warnings
- [ ] No `any` types
- [ ] All images use `next/image` with `alt` text
- [ ] Metadata (title, description, OG) on every page
- [ ] Responsive: 320px / 768px / 1024px / 1440px
- [ ] Lighthouse scores ≥ 90

## 📄 License

Private — PCET (Pimpri Chinchwad Education Trust)
