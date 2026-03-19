// src/data/portfolio.ts
// ✏️  Edit this file to update your portfolio content

export const personalInfo = {
  name:     "Moorthy Sivabalan",
  title:    "Associate Software Engineer",
  tagline:  "Building clean, scalable web experiences.",
  email:    "b.moorthysivabalan@gmail.com",
  phone:    "+91 8015701598",
  location: "Chennai, Tamil Nadu",
  linkedin: "https://linkedin.com/in/moorthysivabalan",
  github:   "https://github.com/MoorthySivabalan",
  resumeUrl: "/resume.pdf", // Drop your resume PDF in /public/resume.pdf
};

export const skills = [
  // Languages
  { name: "TypeScript",   category: "Language",  level: 70 },
  { name: "JavaScript",   category: "Language",  level: 80 },
  { name: "Python",       category: "Language",  level: 80 },
  // Frontend
  { name: "Angular",      category: "Frontend",  level: 80 },
  { name: "React",        category: "Frontend",  level: 70 },
  { name: "Next.js",      category: "Frontend",  level: 70 },
  // Backend / DB
  { name: "FastAPI",      category: "Backend",   level: 60 },
  { name: "PostgreSQL",   category: "Database",  level: 60 },
  // Tools
  { name: "Linux",        category: "Tools",     level: 40 },
  { name: "Git",          category: "Tools",     level: 60 },
];

export const experiences = [
  {
    id:       1,
    role:     "Associate Software Engineer",
    company:  "CognitiveMobile Technology PVT LTD",
    location: "St Thomas Mount, Chennai",
    period:   "Mar 2025 – Aug 2025",
    current:  false,
    bullets: [
      "Developed the Cybot Signal Integrity Web and App Frontend as Angular Developer.",
      "Built software solutions using Java and Python for mobile applications.",
      "Collaborated with cross-functional teams to gather requirements and improve designs.",
      "Conducted code reviews to ensure quality and adherence to best practices.",
    ],
  },
  {
    id:       2,
    role:     "Customer Support Associate",
    company:  "Sutherland Global Services",
    location: "Perungalathur, Chennai",
    period:   "Apr 2024 – Oct 2024",
    current:  false,
    bullets: [
      "Delivered responsive chat support for BPO non-voice processes.",
      "Assisted customers with product inquiries and resolved service issues.",
      "Documented customer interactions in the support ticketing system.",
    ],
  },
];

export const education = [
  {
    id:         1,
    degree:     "Master of Computer Applications",
    institution:"Anna University",
    period:     "Sep 2025 – Present",
    cgpa:       "8.0",
    current:    true,
  },
  {
    id:         2,
    degree:     "Mechanical Engineering",
    institution:"Government College of Engineering, Tirunelveli",
    period:     "Sep 2019 – Jun 2023",
    cgpa:       "7.73",
    current:    false,
  },
];

export const projects = [
  {
    id:       1,
    title:    "Cybot – Appointment Chatbot",
    summary:  "Chatbot interface for appointment scheduling and status tracking for CognitiveMobile clients.",
    tech:     ["Angular", "TypeScript", "PrimeNG", "REST API"],
    github:   "",           // add your repo URL if public
    live:     "",
    featured: true,
  },
  {
    id:       2,
    title:    "E-Commerce Website",
    summary:  "Full-featured e-commerce storefront with product listings, cart, and checkout flow.",
    tech:     ["React", "JavaScript", "Bootstrap", "CSS"],
    github:   "https://github.com/MoorthySivabalan",
    live:     "",
    featured: true,
  },
  {
    id:       3,
    title:    "Library Management System",
    summary:  "CRUD application for managing books, members, and transactions with PostgreSQL.",
    tech:     ["JavaScript", "HTML/CSS", "PostgreSQL"],
    github:   "https://github.com/MoorthySivabalan",
    live:     "",
    featured: false,
  },
];