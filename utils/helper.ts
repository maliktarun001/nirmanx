export const NAV_LINKS = [
  { label: "Courses", link: "#" },
  { label: "Learning Paths", link: "#" },
  { label: "Pricing", link: "#" },
  { label: "About", link: "#" },
];
export const CHOOSE_YOUR_PATH = [
  {
    id: 1,
    icon: "studentIcon",
    title: "Student",
    subtitle: "Learn by Inventa",
    points: [
      "Follow guided projects step-by-step",
      "Earn badges and track progress",
    ],
    buttonText: "Continue as Student",
  },
  {
    id: 2,
    icon: "schoolIcon",
    title: "Educator / School",
    subtitle: "Manage classrooms",
    points: [
      "Create classes and assign projects",
      "Monitor student progress in real time",
    ],
    buttonText: "Continue as Educator",
  },
  {
    id: 3,
    icon: "creatorIcon",
    title: "Creator / Team",
    subtitle: "Prototype ideas fast",
    points: [
      "Start from scratch or use templates",
      "Collaborate and share with your team",
    ],
    buttonText: "Continue as Creator",
  },
];
export const FOOTER_LINKS_LIST = [
  {
    label: "Product",
    href: "#",
  },
  {
    label: "Resources",
    href: "#",
  },
  { label: "Pricing", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Help", href: "#" },
  { label: "Privacy", href: "#" },
];
export const TRUSTED_COMPANIES_LOGO = [
  '/assets/images/webp/logo-1.webp',
  '/assets/images/webp/logo-2.webp',
  '/assets/images/webp/logo-3.webp',
  '/assets/images/webp/logo-4.webp',
  '/assets/images/webp/logo-5.webp',
  '/assets/images/webp/logo-6.webp',
]
export const TESTIMONIALS_CARDS_LIST = [
  {
    id: 1,
    image: "/assets/images/webp/sarah-chen.webp",
    name: "Sarah Chen",
    designation: "STEM Director, Oakridge School",
    ratingIcon: "ratingIcons",
    review:
      "Inventa transformed how we teach STEM. Students are more engaged and creating real projects from day one.",
  },
  {
    id: 2,
    image: "/assets/images/webp/marcus-rivera.webp",
    name: "Marcus Rivera",
    designation: "High School Student",
    ratingIcon: "ratingIcons",
    review:
      "I went from zero experience to building my first circuit in 10 minutes. The tutorials are incredible.",
  },
];
export type ButtonVariant =
  | "primary"
  | "secondary"
  | "yellow"
  | "outline"
  | "outlineBlack";

export interface PricingPlan {
  id: number;
  title: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
  buttonText: string;
  variant: ButtonVariant;
  popular: boolean;
  badge?: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 1,
    title: "Free",
    description: "Perfect for getting started.",
    price: "$0",
    duration: "Forever",
    features: [
      "5 projects",
      "50+ templates",
      "Basic export",
      "Community support",
      "Autosave",
    ],
    buttonText: "Start Free",
    variant: "outlineBlack",
    popular: false,
  },
  {
    id: 2,
    title: "Pro",
    description: "For serious creators & makers",
    price: "$12",
    duration: "Per Month",
    features: [
      "Unlimited projects",
      "All templates",
      "Advanced export",
      "Priority support",
      "Collaboration",
    ],
    buttonText: "Go Pro",
    variant: "primary",
    popular: true,
    badge: "Popular",
  },
  {
    id: 3,
    title: "Education",
    description: "For schools & classrooms",
    price: "$4",
    duration: "Per Student/Month",
    features: [
      "Student accounts",
      "Assignment tracking",
      "Admin dashboard",
      "COPPA compliant",
      "Autosave",
    ],
    buttonText: "Contact Sales",
    variant: "outlineBlack",
    popular: false,
  },
];
export const FAQ_DATA_LIST = [
  {
    question: "Is Inventa really free?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id pharetra eros, in rhoncus velit.",
  },
  {
    question: "Is Inventa really free?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id pharetra eros, in rhoncus velit.",
  },
  {
    question: "What export formats are supported?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id pharetra eros, in rhoncus velit.",
  },
  {
    question: "Can I use Inventa in my classroom?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id pharetra eros, in rhoncus velit.",
  },
  {
    question: "Can I use Inventa in my classroom?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id pharetra eros, in rhoncus velit.",
  },
];