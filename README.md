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
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (fonts, metadata, GA)
│   ├── page.tsx            # Home page
│   ├── not-found.tsx       # Custom 404
│   ├── error.tsx           # Error boundary
│   ├── loading.tsx         # Global loading state
│   ├── sitemap.ts          # Auto-generated sitemap
│   ├── robots.ts           # Robots.txt
│   ├── (about)/            # About section route group
│   ├── admission/          # Admissions page
│   ├── contact/            # Contact page
│   ├── launch/             # Launch/splash page
│   └── api/                # API route handlers
├── features/               # Feature modules (one per domain)
│   ├── layout/             # Header, Footer, TopStrip, Logo, Spotlight, ScrollToTop
│   ├── navigation/         # MainNav, MobileNav, Sidebar, Breadcrumb
│   ├── home/               # HeroCarousel, NewsScroll, IconBoxGrid, Testimonials, EnrollmentModal
│   ├── about/              # About pages (PCET, SBPCSC, Principal, Committee, Admin, Infrastructure, Rules)
│   ├── admissions/         # Admission tabs (Process, Cutoffs, Fees, Eligibility, Forms, Brochures)
│   ├── contact/            # Contact form, info, map
│   ├── launch/             # Countdown, fireworks, confetti
│   └── ... (other devs)    # academics, gallery, blog, media, reviews, library, achievements
├── components/
│   ├── ui/                 # shadcn/ui primitives
│   ├── sections/           # Shared section wrappers
│   ├── cards/              # Shared card components
│   └── layouts/            # Shared layout sections
├── lib/                    # Utility functions (cn, etc.)
├── data/                   # Shared static data
├── hooks/                  # Shared custom hooks
├── types/                  # TypeScript type definitions
└── styles/
    └── globals.css         # Global TailwindCSS setup
```

## 👥 Development Team

| Developer | Domains                              |
|-----------|--------------------------------------|
| **Soham** | Layout, Nav, Home, About, Admissions, Contact, Launch, SEO |
| Prajwal   | Academics, Library, PDFs             |
| Mayur     | Gallery, Blog, Media, Reviews, Achievements |

No cross-developer dependencies — each developer owns exclusive folders.

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

| Route                    | Source (Legacy)              | Status     |
|--------------------------|------------------------------|------------|
| `/`                      | `index.php`                  | 🔧 Pending |
| `/about/pcet`            | `about-pcet.php`             | 🔧 Pending |
| `/about/sbpcsc`          | `about-sbpcsc.php`           | 🔧 Pending |
| `/about/principal-desk`  | `principal-desk.php`         | 🔧 Pending |
| `/about/committee`       | `committee.php`              | 🔧 Pending |
| `/about/administration`  | `administration.php`         | 🔧 Pending |
| `/about/infrastructure`  | `infrastructure-and-facilities.php` | 🔧 Pending |
| `/about/rules`           | `rules-and-regulations.php`  | 🔧 Pending |
| `/admission`             | `admission.php`              | 🔧 Pending |
| `/contact`               | `sbpcsc-contact.php`         | 🔧 Pending |
| `/academics/*`           | `science.php`, `commerce.php` | 📋 Planned |
| `/gallery`               | `gallery.php`                | 📋 Planned |
| `/blog`                  | `blog.php`                   | 📋 Planned |
| `/media`                 | `media.php`                  | 📋 Planned |
| `/reviews`               | `review.php`                 | 📋 Planned |
| `/library`               | `library.php`                | 📋 Planned |
| `/launch`                | `launch/index.php`           | 🔧 Pending |

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

- `MASTER_IMPLEMENTATION_PLAN.md` — Full project architecture
- `SOHAM_IMPLEMENTATION.md` — Soham's features (layout, nav, home, about, admissions, contact)
- `PRAJWAL_IMPLEMENTATION.md` — Prajwal's features (academics, library)
- `MAYUR_IMPLEMENTATION.md` — Mayur's features (gallery, blog, media, reviews)

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
