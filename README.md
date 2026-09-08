# CertiCode — Website Rebuild

React + Tailwind CSS rebuild that keeps the visual style of the design reference you provided,
with content rewritten around the real company: **CertiCode**, a remote-first tech company
running IT solutions + internship/trainee programs.

## ⚠️ Important note on content sourcing

`certicode.net` itself never returned readable content when I fetched it — every attempt came
back as an empty page shell (just a `<title>` tag), which usually means it's a JS-rendered app
my tools can't execute, or there's a DNS/routing issue. There's also no cached or indexed copy
of the live site anywhere I could find.

So this isn't copied from certicode.net's actual page text — it **can't be**, since I have no
way to read it. Instead, `src/content.js` is built from real, verifiable facts about the company
found through job listings and company profiles (Indeed, JobStreet):

- **Real, sourced facts** (used directly): CertiCode is remote-first, focused on IT solutions and
  professional development/internships; founded and led by Tom Oliver Chua; targets students and
  early-career professionals; currently has internship tracks in IT Support, UI/UX Design,
  Business Analyst, HR, Talent Acquisition, and Digital Marketing — all remote, with flexible
  scheduling.
- **Marked "PLACEHOLDER" in the file**: the testimonial quote, the blog post topics, and the
  third About-section stat. No real testimonials, blog content, or those specific numbers exist
  in what I could find — these are original filler content shaped to fit the design, not
  copied from anywhere, and are clearly labeled so you know exactly what to replace.

**If you can get me the real certicode.net copy** — a saved HTML page, a PDF export, screenshots
of each page, or just pasted text — I can drop the real copy straight into `content.js` and this
gap goes away entirely. That's still the most reliable way to get this 100% accurate.

All images are placeholders from picsum.photos — replace with real team/office photography.

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
