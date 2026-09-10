// Content for the CertiCode site rebuild.
// All images are static, deterministic Unsplash assets.

export const nav = {
  brand: 'CertiCode',
  links: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Open Roles', href: '#openings' },
    { label: 'Contact', href: '#contact' },
  ],
  cta: { label: 'Apply Now', href: '#openings' },
};

export const hero = {
  headline: ['Where Learning', 'Becomes Experience'],
  sub: 'A remote-first technology company helping students and early-career professionals turn academic theory into real industry experience.',
  cta: { label: 'Learn More', href: '#about' },
  images: [
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
  ],
  practices: [
    { label: 'IT Support', track: 'IT', img: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=300&q=80' },
    { label: 'UI/UX Design', track: 'Design', img: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=300&q=80' },
    { label: 'Business Analyst', track: 'Business', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80' },
    { label: 'HR', track: 'HR', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80' },
    { label: 'Talent Acquisition', track: 'Talent', img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=300&q=80' },
    { label: 'Digital Marketing', track: 'Marketing', img: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=300&q=80' },
  ],
};

export const about = {
  eyebrow: 'About Us',
  headlinePlain: 'Built To Bridge',
  headlineItalic: 'Theory And Industry',
  sub: 'CertiCode is a remote-first technology company offering IT solutions and structured internship programs that give students and early-career professionals real industry exposure.',
  images: [
    { img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80', tag: 'Remote Team' },
    { img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80', tag: 'Interns' },
    { img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80', tag: 'Tech Hub' },
  ],
  stats: [
    { value: '6', suffix: '+', title: 'Internship', titleItalic: 'Tracks', body: 'Across IT support, design, business, HR, talent, and marketing.' },
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
  items: [
    {
      name: 'IT Support',
      style: 'Intern Track',
      level: 'Remote',
      duration: 'Flextime',
      img: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=600&q=80',
      description: 'Supports internal operations, communications, applicant inquiries, and monitoring tasks.',
    },
    {
      name: 'UI/UX Design',
      style: 'Intern Track',
      level: 'Remote',
      duration: 'Part-time',
      img: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80',
      description: 'Designs user flows, wireframes, and prototypes in Figma, building real usability skills.',
    },
    {
      name: 'Business Analyst',
      style: 'Intern Track',
      level: 'Remote',
      duration: 'Flextime',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
      description: 'Supports operations and business development, and helps coordinate CRM tracking.',
    },
    {
      name: 'Human Resources',
      style: 'Intern Track',
      level: 'Remote',
      duration: 'Flextime',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      description: 'Assists with employee onboarding, record management, and internal team engagement.',
    },
    {
      name: 'Talent Acquisition',
      style: 'Intern Track',
      level: 'Remote',
      duration: 'Part-time',
      img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80',
      description: 'Coordinates recruitment pipelines, screens candidates, and schedules intern interviews.',
    },
    {
      name: 'Digital Marketing',
      style: 'Intern Track',
      level: 'Remote',
      duration: 'Flextime',
      img: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=600&q=80',
      description: 'Creates digital content, manages social channels, and monitors outreach campaigns.',
    },
  ],
  viewAll: { label: 'View All Programs', href: '#openings' },
};

export const scheduleSection = {
  eyebrow: 'Open Roles',
  headlinePlain: 'Find A Track That',
  headlineItalic: 'Fits Your Goals',
  sub: 'Six internship tracks, each one designed to build real, job-ready experience without needing to relocate.',
  bookLabel: 'Apply Now',
  classes: [
    { category: 'IT', name: 'IT Support Specialist', style: 'Intern', note: 'Operations, system monitoring, and applicant support work.', duration: 'Remote', price: 'Flextime', img: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=200&q=80' },
    { category: 'Design', name: 'UI/UX Designer', style: 'Intern', note: 'Wireframes, visual components, and prototypes in Figma.', duration: 'Remote', price: 'Part-time', img: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=200&q=80' },
    { category: 'Business', name: 'Business Analyst', style: 'Intern', note: 'CRM tracking, data reports, and process support.', duration: 'Remote', price: 'Flextime', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=200&q=80' },
    { category: 'HR', name: 'Human Resources Assistant', style: 'Intern', note: 'Recruitment coordination, documentation, and compliance.', duration: 'Remote', price: 'Flextime', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80' },
    { category: 'Talent', name: 'Talent Acquisition Associate', style: 'Intern', note: 'Candidate sourcing, interview scheduling, and applicant review.', duration: 'Remote', price: 'Part-time', img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=200&q=80' },
    { category: 'Marketing', name: 'Digital Marketing Specialist', style: 'Intern', note: 'Brand growth, digital campaigns, and social media analytics.', duration: 'Remote', price: 'Flextime', img: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=200&q=80' },
  ],
  cta: { label: 'See all open roles', href: '#openings' },
};

export const gallerySection = {
  eyebrow: 'Gallery',
  headlinePlain: 'Life Inside',
  headlineItalic: 'A Remote Team',
  images: [
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80',
  ],
};

export const testimonialSection = {
  eyebrow: 'Testimonial',
  headlinePlain: 'Stories from',
  headlineItalic: 'Our Interns',
  sub: 'Hear from the people who trained with us.',
  testimonials: [
    {
      quote: "CertiCode gave me real, hands-on experience I couldn't get from a classroom — from day one I was doing work that actually mattered.",
      name: 'Candice Rivera',
      role: 'Full-Stack Developer Intern',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    },
    {
      quote: "Working remotely with CertiCode allowed me to build Figma prototypes for live projects while maintaining a flexible university schedule.",
      name: 'Elena Rostova',
      role: 'UI/UX Design Intern Alum',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
    },
    {
      quote: "The IT Support track taught me practical system management and applicant tracking. I gained confidence that landed me a full-time role.",
      name: 'Marcus Vance',
      role: 'IT Support Intern Alum',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    },
  ],
};

export const blogSection = {
  eyebrow: 'From The Journal',
  headlinePlain: 'Insights On',
  headlineItalic: 'Careers & Training',
  featured: [
    {
      tag: 'Featured Article',
      title: 'How Remote Internships Build',
      titleItalic: 'Real-World Skills',
      excerpt: 'Why hands-on, project-based work can teach more than a classroom ever could.',
      readTime: '6 min read',
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    },
    {
      tag: 'Featured Article',
      title: 'A Guide To Landing Your',
      titleItalic: 'First IT Internship',
      excerpt: 'What to prepare, what to expect, and how to stand out as a first-time applicant.',
      readTime: '6 min read',
      img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
    },
  ],
  posts: [
    {
      title: 'Bridging Academic Theory',
      titleItalic: 'and Industry Practice',
      excerpt: 'How structured mentorship closes the gap between coursework and real work.',
      readTime: '4 min read',
      img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'What Makes a Great',
      titleItalic: 'Remote Intern',
      excerpt: 'Communication habits and self-management skills that remote teams value most.',
      readTime: '4 min read',
      img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Inside Our UI/UX',
      titleItalic: 'Design Track',
      excerpt: 'A look at the tools, process, and mentorship behind our design internships.',
      readTime: '5 min read',
      img: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80',
    },
  ],
  cta: { label: 'See all articles', href: '#blog' },
};

export const newsletterSection = {
  eyebrow: 'Newsletter',
  headlinePlain: 'Stay Updated On',
  headlineItalic: 'New Openings',
  sub: 'New internship tracks, application windows, and program updates — straight to your inbox.',
  placeholder: 'Enter your email address',
  cta: 'Subscribe',
  image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
};

export const footer = {
  brand: 'CertiCode',
  tagline: 'A remote-first technology company bridging academic theory and industry practice through hands-on internships.',
  socials: ['LinkedIn', 'Facebook'],
  columns: [
    {
      title: 'Navigation',
      links: [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Programs', href: '#programs' },
        { label: 'Open Roles', href: '#openings' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Careers', href: '#openings' },
        { label: 'Journal', href: '#blog' },
        { label: 'Contact', href: '#contact' },
      ],
    },
  ],
  newsletter: {
    title: 'Subscribe to Newsletter',
    placeholder: 'Email address',
    cta: 'Subscribe',
  },
  legal: '© CertiCode. All rights reserved.',
  legalLinks: ['Privacy Policy', 'Terms of Service'],
};
