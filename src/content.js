// Content for the CertiCode site rebuild.
//
// SOURCING NOTE: certicode.net itself returned no readable content when fetched
// (empty page shell — likely a JS-rendered app), so this file is built from
// real, verifiable facts about CertiCode found via job listings and company
// profiles (Indeed, JobStreet), not from the live site's actual page copy.
// Anything below marked "PLACEHOLDER" is invented to fill the design's shape
// (testimonial quote, blog posts, exact stats) and should be swapped for real
// copy once you have it. Everything else reflects real, sourced facts about
// the company — see the inline notes.
//
// Swap placeholder image URLs (loremflickr.com, tech/office-tagged) for real photography/assets.

export const nav = {
  brand: 'CertiCode',
  links: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Contact', href: '#contact' },
  ],
  cta: { label: 'View Open Roles', href: '#openings' },
};

export const hero = {
  // Real: remote-first, IT solutions + professional development/internships (sourced)
  headline: ['Where Learning', 'Becomes Experience'],
  sub: 'A remote-first technology company helping students and early-career professionals turn academic theory into real industry experience.',
  cta: { label: 'Learn More', href: '#about' },
  images: [
    'https://loremflickr.com/900/1100/coding,programmer/all?lock=101',
    'https://static.photos/technology/1024x576/1',
  ],
  // Real: these are CertiCode's actual current internship tracks (sourced from job listings)
  practices: [
    { label: 'IT Support', img: 'https://loremflickr.com/160/160/computer,tech/all?lock=111' },
    { label: 'UI/UX Design', img: 'https://loremflickr.com/160/160/uxdesign,wireframe/all?lock=112' },
    { label: 'Business Analyst', img: 'https://loremflickr.com/160/160/analytics,dashboard/all?lock=113' },
    { label: 'HR', img: 'https://loremflickr.com/160/160/office,meeting/all?lock=114' },
    { label: 'Talent Acquisition', img: 'https://loremflickr.com/160/160/interview,office/all?lock=115' },
    { label: 'Digital Marketing', img: 'https://loremflickr.com/160/160/socialmedia,marketing/all?lock=116' },
  ],
};

export const about = {
  eyebrow: 'About Us',
  headlinePlain: 'Built To Bridge',
  headlineItalic: 'Theory And Industry',
  // Real: paraphrased from CertiCode's company description (sourced)
  sub: 'CertiCode is a remote-first technology company offering IT solutions and structured internship programs that give students and early-career professionals real industry exposure.',
  images: [
    { img: 'https://loremflickr.com/500/620/remotework,laptop/all?lock=121', tag: 'Remote Team' },
    { img: 'https://loremflickr.com/500/620/coding,developer/all?lock=122', tag: 'Interns' },
    { img: 'https://loremflickr.com/500/620/technology,office/all?lock=123', tag: null },
  ],
  // Real counts (6 internship tracks, 100% remote) — the third stat's framing
  // is PLACEHOLDER styling, replace with a real metric (e.g. interns placed,
  // years active) once you have one.
  stats: [
    { value: '6', suffix: '+', title: 'Internship', titleItalic: 'Tracks', body: 'Across IT support, design, business, HR, and marketing.' },
    { value: '100', suffix: '%', title: 'Remote-First', titleItalic: 'Roles', body: 'Every position works from home, on a flexible schedule.' },
    { value: '1', suffix: '', title: 'Founder-Led', titleItalic: 'Vision', body: 'Led by founder Tom Oliver Chua, focused on hands-on training.' },
  ],
  cta: { label: 'View Programs', href: '#programs' },
};

export const classesSection = {
  eyebrow: 'Our Programs',
  headlinePlain: 'Developed With Insight,',
  headlineItalic: 'Guided With Mentorship',
  sub: 'Structured internship tracks designed by people who understand both the industry and what students actually need to learn.',
  tags: ['Remote', 'Flexible Schedule', 'Mentor-Led', 'Project-Based'],
  // Real: these three are actual CertiCode internship roles; descriptions are
  // paraphrased in original wording from the listings, not copied verbatim.
  items: [
    {
      name: 'IT Support',
      style: 'Intern',
      level: 'Remote',
      duration: 'Flextime',
      img: 'https://loremflickr.com/500/620/itsupport,computer/all?lock=131',
      description: 'Supports internal operations, communications, applicant inquiries, and monitoring tasks.',
    },
    {
      name: 'UI/UX Design',
      style: 'Intern',
      level: 'Remote',
      duration: 'Part-time',
      img: 'https://loremflickr.com/500/620/uidesign,figma/all?lock=132',
      description: 'Designs user flows, wireframes, and prototypes in Figma, building real usability skills.',
    },
    {
      name: 'Business Analyst',
      style: 'Intern',
      level: 'Remote',
      duration: 'Flextime',
      img: 'https://loremflickr.com/500/620/dataanalytics,spreadsheet/all?lock=133',
      description: 'Supports operations and business development, and helps coordinate CRM tracking.',
    },
  ],
  viewAll: { label: 'View All Programs', href: '#openings' },
};

export const scheduleSection = {
  eyebrow: 'Open Roles',
  headlinePlain: 'Find A Track That',
  headlineItalic: 'Fits Your Goals',
  sub: 'Six internship tracks, each one designed to build real, job-ready experience without needing to relocate.',
  // Repurposed from day tabs into role categories (all real, sourced tracks)
  days: ['IT', 'Design', 'Business', 'HR', 'Talent', 'Marketing'],
  activeDay: 'IT',
  bookLabel: 'Apply Now',
  classes: [
    { name: 'IT Support', style: 'Intern', note: 'Operations, monitoring, and applicant support work.', duration: 'Remote', price: 'Internship', img: 'https://loremflickr.com/120/120/server,network/all?lock=141' },
    { name: 'UI/UX Design', style: 'Intern', note: 'Wireframes and prototypes for web and mobile.', duration: 'Remote', price: 'Part-time', img: 'https://loremflickr.com/120/120/mockup,app/all?lock=142' },
    { name: 'Business Analyst', style: 'Intern', note: 'CRM tracking and operational process support.', duration: 'Remote', price: 'Internship', img: 'https://loremflickr.com/120/120/chart,business/all?lock=143' },
    { name: 'Human Resources', style: 'Intern', note: 'Recruitment coordination and documentation.', duration: 'Remote', price: 'Internship', img: 'https://loremflickr.com/120/120/office,desk/all?lock=144' },
    { name: 'Talent Acquisition', style: 'Intern', note: 'Recruitment coordination, interview scheduling.', duration: 'Remote', price: 'Internship', img: 'https://loremflickr.com/120/120/resume,hiring/all?lock=145' },
    { name: 'Digital Marketing', style: 'Intern', note: 'Brand growth, campaigns, and social content.', duration: 'Remote', price: 'Internship', img: 'https://loremflickr.com/120/120/marketing,content/all?lock=146' },
  ],
  cta: { label: 'See all open roles', href: '#programs' },
};

export const gallerySection = {
  eyebrow: 'Gallery',
  headlinePlain: 'Life Inside',
  headlineItalic: 'A Remote Team',
  // Placeholder photography — swap for real team/office photography
  images: [
    'https://loremflickr.com/600/600/coding,laptop/all?lock=201',
    'https://loremflickr.com/600/600/office,workspace/all?lock=202',
    'https://loremflickr.com/600/600/computer,screen/all?lock=203',
    'https://loremflickr.com/600/600/teamwork,meeting/all?lock=204',
    'https://loremflickr.com/600/600/developer,keyboard/all?lock=205',
    'https://static.photos/technology/1024x576/129',
    'https://loremflickr.com/600/600/startup,office/all?lock=207',
    'https://loremflickr.com/600/600/design,ipad/all?lock=208',
    'https://loremflickr.com/600/600/server,datacenter/all?lock=209',
    
  ],
};

export const testimonialSection = {
  eyebrow: 'Testimonial',
  headlinePlain: 'Stories from',
  headlineItalic: 'Our Interns',
  sub: 'Hear from the people who trained with us.',
  // PLACEHOLDER quote — no real testimonial was available; replace with an
  // actual intern or client testimonial before publishing.
  quote:
    "CertiCode gave me real, hands-on experience I couldn't get from a classroom — from day one I was doing work that actually mattered.",
  name: 'Placeholder Name',
  role: 'Former Intern (replace with a real testimonial)',
  avatar: 'https://loremflickr.com/300/300/programmer,portrait/all?lock=210',
};

export const blogSection = {
  eyebrow: 'From The Journal',
  headlinePlain: 'Insights On',
  headlineItalic: 'Careers & Training',
  // PLACEHOLDER blog topics — no real CertiCode blog content was found;
  // these are original suggested topics fitting the company's mission.
  featured: [
    {
      tag: 'Featured Article',
      title: 'How Remote Internships Build',
      titleItalic: 'Real-World Skills',
      excerpt: 'Why hands-on, project-based work can teach more than a classroom ever could.',
      readTime: '6 min read',
      img: 'https://static.photos/technology/1024x576/111',
    },
    {
      tag: 'Featured Article',
      title: 'A Guide To Landing Your',
      titleItalic: 'First IT Internship',
      excerpt: 'What to prepare, what to expect, and how to stand out as a first-time applicant.',
      readTime: '6 min read',
      img: 'https://loremflickr.com/500/400/jobinterview,office/all?lock=222',
    },
  ],
  posts: [
    {
      title: 'Bridging Academic Theory',
      titleItalic: 'and Industry Practice',
      excerpt: 'How structured mentorship closes the gap between coursework and real work.',
      readTime: '4 min read',
      img: 'https://static.photos/technology/1024x576/139',
    },
    {
      title: 'What Makes a Great',
      titleItalic: 'Remote Intern',
      excerpt: 'Communication habits and self-management skills that remote teams value most.',
      readTime: '4 min read',
      img: 'https://loremflickr.com/400/300/videocall,laptop/all?lock=224',
    },
    {
      title: 'Inside Our UI/UX',
      titleItalic: 'Design Track',
      excerpt: 'A look at the tools, process, and mentorship behind our design internships.',
      readTime: '5 min read',
      img: 'https://static.photos/technology/1024x576/90',
    },
  ],
  cta: { label: 'See all articles', href: '#blog' },
};

export const newsletterSection = {
  eyebrow: 'Newsletter',
  headlinePlain: 'Stay Updated On',
  headlineItalic: 'New Openings',
  sub: 'New internship tracks, application windows, and program updates — straight to your inbox.',
  placeholder: 'Email address',
  cta: 'Subscribe',
  image: 'https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};

export const footer = {
  brand: 'CertiCode',
  // Real: paraphrased from the company's stated mission (sourced)
  tagline: 'A remote-first technology company bridging academic theory and industry practice through hands-on internships.',
  socials: ['LinkedIn', 'Facebook'],
  columns: [
    {
      title: 'Navigation',
      links: ['Programs', 'Open Roles', 'About', 'Journal'],
    },
    {
      title: 'Company',
      links: ['Careers', 'Contact', 'Privacy Policy', 'Terms of Service'],
    },
  ],
  newsletter: {
    title: 'Subscribe',
    placeholder: 'Email address',
    cta: 'Subscribe',
  },
  legal: '© CertiCode. All rights reserved.',
  legalLinks: ['Privacy Policy'],
};
