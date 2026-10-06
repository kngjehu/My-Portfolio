export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  liveUrl: string;
  image: string;
  summary: string;
  detailedDescription: string;
  highlights: string[];
  techStack: string[];
  role: string;
  metrics: string;
  accentColor: string;
  keyLearnings: string;
  architectureNotes: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: string; icon?: string }[];
}

export const DEVELOPER_INFO = {
  name: "Jehu Ranyang Akafa",
  role: "Entry-level Full-stack Developer",
  experience: "<1 year of experience",
  email: "kngjehu@gmail.com",
  location: "Nigeria · Available Globally (Remote)",
  bio: "Hungry, fast-learning full-stack developer dedicated to building high-velocity, responsive web software. In less than a year of intensive engineering, I have deployed three distinct production web platforms: BlackstoneX Labs, Aura Lab, and Become AI.",
  status: "Available for Full-time Roles & Contracts",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  stats: [
    { label: "Production Apps Deployed", value: "3" },
    { label: "Hands-on Experience", value: "< 1 Year" },
    { label: "Code Craft & Passion", value: "100%" },
    { label: "Deployment Velocity", value: "High" },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "blackstonexlabs",
    title: "BlackstoneX Labs",
    tagline: "Premium Web Development & AI Automation",
    category: "Web & AI Engineering",
    liveUrl: "https://blackstonexlabs.vercel.app",
    image: "/src/assets/images/project_blackstonexlabs_1791287298674.jpg",
    summary: "Premium Web Development, AI Automation, and Cinematic Video Editing platform engineered for high-scaling businesses.",
    detailedDescription:
      "BlackstoneX Labs delivers high-performance digital engineering, automated workflows, and digital production for scaling businesses. Built with modular component architecture, the platform features responsive dark-mode telemetry, reactive interactive showcases, and high-frequency data presentation with zero layout shift.",
    highlights: [
      "Engineered modular component architecture for rapid UI prototyping and interactive service exploration",
      "Designed an immersive dark obsidian aesthetic with high-contrast data visualization",
      "Integrated responsive layout grid adapting seamlessly across mobile, tablet, and desktop screens",
      "Configured automated Vercel CI/CD pipeline ensuring zero-downtime production deployments"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Modern APIs", "Vercel"],
    role: "Full-Stack Developer (Solo Project)",
    metrics: "Sub-0.8s FCP · 100% Responsive · Zero Cumulative Layout Shift",
    accentColor: "#9333ea",
    keyLearnings: "Deepened mastery of modern component trees, reactive state synchronization, and building resilient interfaces for high-density information display.",
    architectureNotes: "Client-rendered SPA architecture optimized with Vite bundle splitting and tree-shaken Tailwind utilities for lightning-fast edge delivery."
  },
  {
    id: "auralab-ng",
    title: "Aura Lab",
    tagline: "Wig Revamping, Custom Installations & Luxury Perfumes",
    category: "Luxury Beauty & Perfumery",
    liveUrl: "https://auralab-ng.vercel.app",
    image: "/src/assets/images/project_auralab_beauty_1791288279974.jpg",
    summary: "Crafting your signature Aura. Premium wig revamping, custom wig installations, and curated luxury perfumes.",
    detailedDescription:
      "Aura Lab is a luxury beauty brand platform dedicated to signature hair artistry, professional wig revamping, custom wig installations, and curated luxury perfumes. Engineered with a sleek purple-accented editorial aesthetic, the web app enables seamless service discovery, wig overhaul consultations, and luxury fragrance catalogue browsing.",
    highlights: [
      "Showcases custom hair styling portfolios, wig installations, and revamping transformation galleries",
      "Integrated curated fragrance catalogue with top, heart, and base note fragrance profiles",
      "Built-in appointment booking and custom wig overhaul order flow with responsive forms",
      "Mobile-first responsive commerce layout with high-contrast typography and fluid animations"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Modern Web APIs", "Vercel Edge"],
    role: "Full-Stack Developer",
    metrics: "Sub-1s Page Load · Mobile-First Commerce · High-Converting UX",
    accentColor: "#a855f7",
    keyLearnings: "Designed high-conversion luxury beauty e-commerce UX, product discovery filters, and client consultation pipelines.",
    architectureNotes: "Structured with reusable UI primitives, semantic HTML5 sectioning, and fine-tuned CSS transitions for silky 60fps scroll experiences."
  },
  {
    id: "bcome-ai",
    title: "Become AI",
    tagline: "AI-Powered Habit Tracker & Personal Transformation",
    category: "AI Productivity & Habit Tracking",
    liveUrl: "https://bcome-ai.vercel.app",
    image: "/src/assets/images/project_become_habit_1791288843657.jpg",
    summary: "AI-powered personal transformation and habit tracking system that turns the person you want to be into the person you consistently act like.",
    detailedDescription:
      "Become AI is an intelligent habit tracking and personal transformation platform designed to engineer lasting behavioral change. Featuring a dark obsidian interface with purple accents, it pairs daily habit logging, consistency streaks, and habit completion tracking with contextual AI coaching to build unbreakable momentum.",
    highlights: [
      "Built reactive daily habit logging with real-time streak calculations and completion progress visualizers",
      "Integrated AI-driven routine coaching for personalized accountability and habit consistency",
      "Designed dark mode analytics dashboard showing habit completion consistency and streak momentum",
      "Optimized edge performance on Vercel ensuring instant habit check-in response under 80ms"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "AI Integration", "Vercel Edge"],
    role: "Full-Stack Developer",
    metrics: "<80ms Interaction Latency · 100% Mobile Responsive · Real-time Streaks",
    accentColor: "#c084fc",
    keyLearnings: "Mastered habit streak calculation algorithms, daily completion state synchronization, and contextual AI coaching interface design.",
    architectureNotes: "Modular state container with decoupled display components and keyboard accessibility shortcuts."
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    description: "Building fast, responsive, and accessible user interfaces with modern React ecosystems.",
    skills: [
      { name: "React 18 / 19", level: "Proficient" },
      { name: "TypeScript", level: "Proficient" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Next.js / Vite", level: "Intermediate" },
      { name: "HTML5 / Semantic Web", level: "Advanced" },
      { name: "CSS3 / Flexbox & Grid", level: "Advanced" },
      { name: "Framer Motion / Animations", level: "Intermediate" },
    ]
  },
  {
    title: "Backend & Systems",
    description: "Developing RESTful endpoints, API integration, and server-side logic.",
    skills: [
      { name: "Node.js", level: "Intermediate" },
      { name: "Express.js", level: "Intermediate" },
      { name: "REST APIs", level: "Proficient" },
      { name: "JSON / Data Parsing", level: "Advanced" },
      { name: "Serverless & Edge Functions", level: "Intermediate" },
      { name: "Authentication Basics", level: "Intermediate" },
    ]
  },
  {
    title: "Tools & Deployment",
    description: "Modern developer toolchains, version control, and CI/CD delivery.",
    skills: [
      { name: "Git & GitHub", level: "Proficient" },
      { name: "Vercel Deployment", level: "Advanced" },
      { name: "Vite Bundler", level: "Proficient" },
      { name: "NPM & Package Tooling", level: "Proficient" },
      { name: "VS Code & Debugging", level: "Advanced" },
      { name: "Postman / API Testing", level: "Intermediate" },
    ]
  }
];
