# CertiCode — Website Rebuild

React + Tailwind CSS rebuild that keeps the visual style of the design reference you provided,
with content rewritten around the real company: **CertiCode**, a remote-first tech company
running IT solutions + internship/trainee programs.

## Setup

```bash
npm install
npm run dev       # local dev server, http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

Requires Node.js 18+.

## Structure

```
src/
  content.js          ← all copy, nav links, program/role data — edit here first
  App.jsx             ← assembles all sections
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx          (stats + company description)
    Classes.jsx         ("Our Programs" — internship track cards + carousel controls)
    Schedule.jsx         (dark table of open internship roles, filterable by category tabs)
    Gallery.jsx           ("Life Inside A Remote Team" photo grid — placeholder photos)
    Testimonial.jsx
    Blog.jsx              (journal/insights articles grid — placeholder topics)
    Newsletter.jsx         (dark CTA banner with email capture — "new openings" signup)
    Footer.jsx
```

## What's functional vs. needs wiring

- **Category tabs** (Open Roles table) and **program carousel arrows** are wired with local
  React state.
- **Newsletter forms** (banner + footer) capture email and show a confirmation state, but don't
  call any API yet — wire `onSubmit` in `Newsletter.jsx` / `Footer.jsx` to your email provider
  (Mailchimp, a Google Form, your own backend, etc.).
- **"Apply Now" buttons** are static — wire to your actual application form or ATS link per role.
- **Nav links, footer links, and blog post links** currently point to in-page anchors (`#programs`,
  `#openings`, etc.) or `#` placeholders — replace with real routes once you have certicode.net's
  actual site structure, or tell me what pages should exist and I'll wire real routes with
  React Router.

## Responsiveness

Built mobile-first with Tailwind breakpoints (`sm:`, `md:`); layout collapses cleanly for nav,
hero rows, stat columns, program/blog grids, and the roles table down to narrow mobile widths.

## Accessibility

Visible focus rings, `aria-label`s on icon-only buttons, `prefers-reduced-motion` respected, form
inputs have associated (visually-hidden where needed) labels.
