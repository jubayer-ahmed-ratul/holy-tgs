# Frontend Guidelines & Architecture

## 1. Project Overview
This repository powers a full-stack, enterprise-grade **Study Abroad & Immigration Consultancy Platform**. The application is designed to guide prospective international students through researching global study destinations, exploring partner universities, evaluating courses, calculating eligibility, and booking personalized consultancy sessions.

---

## 2. Core Tech Stack Rules

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React Server Components by default, Client Components with explicit `'use client'`)
- **Language**: TypeScript (`strict: true`, zero `any` policy, explicit interface and type contracts)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom design tokens and utility-first approach
- **Icons**: [Lucide React](https://lucide.dev/) for crisp, consistent iconography
- **Animation**: [Framer Motion](https://www.framer.com/motion/) for smooth micro-interactions, entrance reveals, and page transitions
- **Form Handling & Validation**: React Hook Form + Zod for robust schema validation
- **State Management**: React Context or lightweight Zustand stores for global client state (e.g., consultation booking modal, search filters)

### Golden Rules:
1. **Server vs. Client Components**:
   - Favor Server Components for static layouts, SEO metadata, and data fetching.
   - Use Client Components (`'use client'`) only when interactive state, browser APIs, or Framer Motion animations are strictly required.
2. **Path Aliasing**:
   - Always use `@/` to import from the `src/` directory (e.g., `@/components/common/Button`, `@/types`, `@/data/mockData`).
3. **Responsive Design First**:
   - Mobile-first approach using standard Tailwind breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px), `2xl` (1536px).
4. **Accessibility (a11y)**:
   - Ensure semantic HTML (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`).
   - All interactive elements must have visible focus rings, proper `aria-label`s, and keyboard navigation support.
5. **Animation Performance**:
   - Keep Framer Motion transitions subtle (e.g., `duration: 0.2` to `0.4`s, ease: `easeInOut` or custom spring).
   - Avoid animating heavy layout properties (animate `transform` / `opacity` instead of `width`, `height`, or `top`).
   - Honor user accessibility preferences with `prefers-reduced-motion`.

---

## 3. Brand Identity & Color Palette

The visual identity conveys trust, academic excellence, prestige, and warm accessibility.

### Color Tokens

| Token Role | Hex Code | Tailwind Equivalent / Class | Purpose & Usage |
| :--- | :--- | :--- | :--- |
| **Primary Navy (Deep)** | `#0B192C` | `brand-navy-950` / `slate-950` | Primary dark surfaces, hero headers, dark banners |
| **Primary Navy (Standard)** | `#1E3E62` | `brand-navy-800` | Navigation bars, primary buttons, authoritative headings |
| **Brand Blue (Vibrant)** | `#2563EB` | `blue-600` | Interactive links, active states, feature badges |
| **Soft Blue Tint** | `#EFF6FF` | `blue-50` | Backgrounds for highlight cards, badges, subtle callouts |
| **Accent Amber (Primary)** | `#F59E0B` | `amber-500` | CTAs, high-priority badges, rating stars, highlights |
| **Accent Amber (Dark/Gold)**| `#D97706` | `amber-600` | Hover states for amber buttons, border accents |
| **Accent Amber (Light)** | `#FEF3C7` | `amber-100` | Badge backgrounds, promotional notice boxes |
| **Background (Soft White)** | `#F8FAFC` | `slate-50` | Main canvas / body background to reduce harsh eye strain |
| **Surface (Pure White)** | `#FFFFFF` | `white` | Cards, modals, dropdown menus, form panels |
| **Border / Divider** | `#E2E8F0` | `slate-200` | Card borders, section separators, input borders |
| **Text (Heading)** | `#0F172A` | `slate-900` | Primary titles, prominent headings |
| **Text (Body)** | `#475569` | `slate-600` | Standard paragraph text, descriptions |
| **Text (Muted)** | `#94A3B8` | `slate-400` | Captions, placeholders, metadata tags |

### Tailwind CSS Color Palette Config Recommendation:
```javascript
// tailwind.config.ts sample colors
colors: {
  brand: {
    navy: {
      950: '#0B192C',
      900: '#112240',
      800: '#1E3E62',
      700: '#2A5288',
    },
    amber: {
      400: '#FBBF24',
      500: '#F59E0B',
      600: '#D97706',
    },
  },
  surface: {
    canvas: '#F8FAFC',
    card: '#FFFFFF',
    border: '#E2E8F0',
  }
}
```

---

## 4. Typography Scale & Standards

- **Primary Font**: Sans-serif (e.g., `Inter`, `Plus Jakarta Sans`, or `Geist Sans`)
- **Display Headings**:
  - `Hero H1`: `text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900`
  - `Section H2`: `text-3xl sm:text-4xl font-bold tracking-tight text-slate-900`
  - `Card H3`: `text-xl sm:text-2xl font-semibold text-slate-900`
  - `Subheading H4`: `text-lg font-medium text-slate-800`
- **Body & Captions**:
  - `Body Regular`: `text-base text-slate-600 leading-relaxed`
  - `Body Small`: `text-sm text-slate-500 leading-normal`
  - `Caption`: `text-xs font-medium text-slate-400 uppercase tracking-wider`

---

## 5. Component Structure & Architecture

```
src/
├── app/                      # Next.js App Router (pages, layouts, route handlers)
│   ├── layout.tsx            # Root layout with fonts, header, footer
│   ├── page.tsx              # Homepage
│   ├── destinations/         # Country destinations index and dynamic [slug]
│   ├── services/             # Consultancy services index and dynamic [slug]
│   ├── universities/         # University finder & search catalog
│   ├── about/                # About company, mission, consultants
│   └── contact/              # Consultation booking & contact page
├── components/
│   ├── common/               # Universal atomic UI elements
│   │   ├── Button.tsx        # Brand button with variants (primary, secondary, amber, outline)
│   │   ├── Badge.tsx         # Tag/pill badge component
│   │   ├── Card.tsx          # Card wrapper with shadow and hover styles
│   │   ├── SectionHeader.tsx # Reusable section title + subtitle + tag
│   │   └── Modal.tsx         # Dialog / modal container
│   ├── layout/               # Global structural components
│   │   ├── Header.tsx        # Sticky/glassmorphism navigation bar
│   │   ├── Navbar.tsx        # Desktop navigation items & mega dropdown
│   │   ├── MobileNav.tsx     # Animated slide-out mobile drawer
│   │   ├── Footer.tsx        # Comprehensive footer with quick links, contacts
│   │   └── Container.tsx     # Standard centered max-width container wrapper
│   ├── home/                 # Components specific to the Homepage
│   │   ├── HeroSection.tsx
│   │   ├── FeaturedCountries.tsx
│   │   ├── ServicesOverview.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── StatsCounter.tsx
│   │   ├── Testimonials.tsx
│   │   └── CallToAction.tsx
│   ├── destinations/         # Components specific to Study Destinations
│   └── services/             # Components specific to Consultancy Services
├── data/
│   └── mockData.ts           # Centralized mock data (navigation, services, countries, FAQs, etc.)
├── types/
│   └── index.ts              # Global TypeScript models & interfaces
├── hooks/                    # Reusable React hooks (useScroll, useMediaQuery, etc.)
└── lib/                      # Helper utilities (cn function, formatters)
```

---

## 6. Coding Conventions & Best Practices

1. **Props Interfaces**:
   - Always define explicit component props interfaces named `${ComponentName}Props`.
   - Export interfaces when reusable across components.
2. **Container Standards**:
   - Layout containers use 11/12 of the display size: `w-11/12 mx-auto` (or import `<Container>` from `@/components/layout/Container`).
3. **Buttons & Actions**:
   - Primary action buttons: Navy background with white text or Amber background with dark navy text.
   - Secondary action buttons: Soft blue or slate outline with subtle hover fill.
4. **Interactive Feedback**:
   - All interactive elements must provide hover, active, and focus-visible states with smooth CSS transitions (`transition-all duration-200 ease-in-out`).

