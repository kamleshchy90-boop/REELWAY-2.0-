export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: 'motion' | 'reels' | 'commercials' | '3d' | 'ads' | 'brand';
  categoryLabel: string;
  tag: string;
  thumbnail: string;
  videoPreviewUrl: string;
  aspectRatio: '16:9' | '9:16' | '1:1';
  metrics: {
    label: string;
    value: string;
  };
  duration: string;
  year: string;
  summary: string;
  deliverables: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  clientLogo?: string;
  industry: string;
  heroImage: string;
  videoUrl?: string;
  challenge: string;
  strategy: string;
  creativeSolution: string;
  campaign: string;
  results: {
    metric: string;
    label: string;
    description: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  badge: string;
  iconName: string;
  description: string;
  deliverables: string[];
  technologies: string[];
  highlightMetric: {
    value: string;
    label: string;
  };
  gradient: string;
}

export interface ProcessStep {
  step: number;
  phase: string;
  title: string;
  tagline: string;
  duration: string;
  description: string;
  actions: string[];
  deliverable: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  subtitle: string;
  badge?: string;
  popular?: boolean;
  idealFor: string;
  overview: string;
  features: string[];
  deliverables: string[];
  turnaround: string;
  supportLevel: string;
  ctaText: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
  projectType: string;
  verifiedMetric: string;
}

export interface FaqItem {
  id: string;
  category: 'services' | 'pricing' | 'timelines' | 'video' | 'social' | 'ads' | 'packages';
  categoryLabel: string;
  question: string;
  answer: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  category: 'Digital Marketing' | 'Video Marketing' | 'Motion Graphics' | 'Social Media' | 'AI' | 'SEO' | 'Branding';
  excerpt: string;
  content: string[];
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  coverImage: string;
  tags: string[];
}

export interface LeadFormData {
  name: string;
  company: string;
  email: string;
  whatsapp: string;
  website: string;
  service: string;
  budget: string;
  timeline: string;
  projectDetails: string;
}

export interface FestivalOffer {
  id: string;
  name: string;
  emoji: string;
  discount: string;
  discountNum: number;
  festival: string;
  tagline: string;
  badge: string;
  popular?: boolean;
}
