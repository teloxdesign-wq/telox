export type Service = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  icon: string;
};

export type Project = {
  id: string;
  name: string;
  year: string;
  category: string;
  description: string;
  image: string;
  techStack: string[];
  size: "sm" | "md" | "lg";
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
};

export type Client = {
  name: string;
};

export const services: Service[] = [
  {
    id: "ui-ux",
    title: "UI/UX Design",
    tagline: "Interfaces that convert",
    description:
      "Research-driven design systems that balance aesthetics with measurable conversion. Every pixel earns its place.",
    features: [
      "Design systems & component libraries",
      "User journey mapping & wireframing",
      "Interactive prototyping",
      "Accessibility-first (WCAG 2.2 AA)",
    ],
    icon: "Palette",
  },
  {
    id: "frontend",
    title: "Frontend Development",
    tagline: "Pixel-perfect, blazing fast",
    description:
      "Production-grade React applications with Core Web Vitals in the green. Type-safe, tested, and built to scale.",
    features: [
      "React / TypeScript / Next.js",
      "Tailwind CSS design systems",
      "Core Web Vitals optimization (LCP < 2.5s)",
      "Motion & micro-interactions",
    ],
    icon: "Code",
  },
  {
    id: "backend",
    title: "Backend Development",
    tagline: "APIs that don't flinch",
    description:
      "Serverless and edge-native architectures on Supabase. Secure, scalable, and observable from day one.",
    features: [
      "Supabase / Postgres / Edge Functions",
      "Row-level security & auth flows",
      "REST & GraphQL APIs",
      "CI/CD pipelines & monitoring",
    ],
    icon: "Server",
  },
  {
    id: "seo",
    title: "SEO & Performance",
    tagline: "Found, not lost",
    description:
      "Technical SEO, structured data, and performance budgets that keep you ranking and your users staying.",
    features: [
      "Technical SEO audits",
      "Structured data & schema markup",
      "Performance budgeting",
      "Core Web Vitals monitoring",
    ],
    icon: "Search",
  },
];

export const projects: Project[] = [
  {
    id: "meridian",
    name: "Project Meridian",
    year: "2024",
    category: "Fintech",
    description:
      "A real-time trading dashboard handling 50k concurrent users with sub-100ms data streaming.",
    image:
      "https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=1200",
    techStack: ["React", "TypeScript", "Supabase", "WebSockets"],
    size: "lg",
  },
  {
    id: "valk",
    name: "Studio Valk",
    year: "2023",
    category: "E-Commerce",
    description:
      "Headless commerce platform with a 3.2x lift in conversion rate after redesign.",
    image:
      "https://images.pexels.com/photos/4498152/pexels-photo-4498152.jpeg?auto=compress&cs=tinysrgb&w=800",
    techStack: ["Next.js", "Stripe", "Tailwind", "Vercel"],
    size: "md",
  },
  {
    id: "noir",
    name: "Noir Collective",
    year: "2023",
    category: "Fashion",
    description:
      "Immersive lookbook with scroll-driven 3D transitions and editorial typography.",
    image:
      "https://images.pexels.com/photos/9968319/pexels-photo-9968319.jpeg?auto=compress&cs=tinysrgb&w=800",
    techStack: ["Three.js", "R3F", "GSAP", "Vite"],
    size: "md",
  },
  {
    id: "phase-zero",
    name: "Phase Zero",
    year: "2022",
    category: "SaaS Platform",
    description:
      "Multi-tenant project management tool with real-time collaboration and granular RBAC.",
    image:
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
    techStack: ["React", "Supabase", "Postgres", "Edge Functions"],
    size: "sm",
  },
  {
    id: "atlas-dark",
    name: "Atlas Dark",
    year: "2022",
    category: "Immersive",
    description:
      "Award-winning interactive brand experience with WebGL particle systems.",
    image:
      "https://images.pexels.com/photos/7988077/pexels-photo-7988077.jpeg?auto=compress&cs=tinysrgb&w=1200",
    techStack: ["Three.js", "GLSL", "Framer Motion", "Vite"],
    size: "lg",
  },
  {
    id: "lumen",
    name: "Lumen Health",
    year: "2024",
    category: "Healthcare",
    description:
      "HIPAA-compliant patient portal with appointment scheduling and secure messaging.",
    image:
      "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800",
    techStack: ["Next.js", "Supabase", "Tailwind", "Zod"],
    size: "md",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Telox delivered a platform that outperformed our wildest expectations. Our conversion rate tripled within the first quarter.",
    author: "Sarah Chen",
    role: "CEO",
    company: "Meridian Capital",
  },
  {
    id: "t2",
    quote:
      "The attention to detail is unmatched. Every interaction feels intentional, every animation purposeful. Worth every penny.",
    author: "Marcus Reid",
    role: "Head of Product",
    company: "Studio Valk",
  },
  {
    id: "t3",
    quote:
      "They didn't just build us a website — they built us a growth engine. Our organic traffic is up 280% year over year.",
    author: "Elena Vasquez",
    role: "Marketing Director",
    company: "Noir Collective",
  },
];

export const clients: Client[] = [
  { name: "Meridian" },
  { name: "Valk" },
  { name: "Noir" },
  { name: "Atlas" },
  { name: "Lumen" },
  { name: "Phase Zero" },
];

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];

export const footerLinks = {
  company: [
    { name: "About", path: "/services" },
    { name: "Services", path: "/services" },
    { name: "Work", path: "/work" },
    { name: "Contact", path: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", path: "/contact" },
    { name: "Terms of Service", path: "/contact" },
  ],
  socials: [
    { name: "Twitter", path: "https://twitter.com" },
    { name: "LinkedIn", path: "https://linkedin.com" },
    { name: "Dribbble", path: "https://dribbble.com" },
    { name: "GitHub", path: "https://github.com" },
  ],
};
