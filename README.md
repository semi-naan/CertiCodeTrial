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
