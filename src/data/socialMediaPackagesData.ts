export interface SocialMediaPackage {
  id: string;
  number: number;
  name: string;
  fullName: string;
  price: string;
  priceNum: number;
  period: string;
  idealFor: string;
  badge?: string;
  popular?: boolean;
  colorScheme: 'slate' | 'amber' | 'rose' | 'emerald' | 'blue' | 'purple';
  deliverables: {
    posts: string;
    reels: string;
    motionGraphics?: string;
    stories?: string;
    captions?: string;
    strategy?: string;
    reporting?: string;
  };
  features: string[];
  platforms: string[];
}

export const SOCIAL_MEDIA_PACKAGES: SocialMediaPackage[] = [
  {
    id: 'basic-starter',
    number: 1,
    name: 'BASIC STARTER',
    fullName: '1. BASIC STARTER',
    price: '₹999',
    priceNum: 999,
    period: '/month',
    idealFor: 'Ideal for Small Businesses & Startups',
    colorScheme: 'slate',
    deliverables: {
      posts: '4 Posts',
      reels: '2 Basic Reels',
      captions: 'Basic Captions & Tags',
    },
    features: [
      '4 Social Media Posts',
      '2 Basic Promotional Reels',
      'Basic Captions & Hashtags',
      'Creative Designs for Instagram & Facebook'
    ],
    platforms: ['Instagram', 'Facebook']
  },
  {
    id: 'business-starter',
    number: 2,
    name: 'BUSINESS STARTER',
    fullName: '2. BUSINESS STARTER',
    price: '₹1,999',
    priceNum: 1999,
    period: '/month',
    idealFor: 'Ideal for Local Businesses',
    colorScheme: 'blue',
    deliverables: {
      posts: '8 Posts',
      reels: '4 Motion Reels',
      captions: 'Captions & Hashtags',
      strategy: 'Monthly Plan',
    },
    features: [
      '8 Social Media Posts',
      '4 Motion Graphics Reels',
      'Captions & Hashtags',
      'Basic Monthly Content Plan',
      'Basic Customer Query Responses'
    ],
    platforms: ['Instagram', 'Facebook', 'WhatsApp']
  },
  {
    id: 'growth-pack',
    number: 3,
    name: 'GROWTH PACK',
    fullName: '3. GROWTH PACK',
    price: '₹2,999',
    priceNum: 2999,
    period: '/month',
    idealFor: 'Ideal for Growing Brands',
    badge: 'Popular for Local Growth',
    colorScheme: 'emerald',
    deliverables: {
      posts: '12 Posts',
      reels: '8 Edited Reels + 2 Animated',
      captions: 'Targeted Hashtags',
      strategy: 'GBP Management',
    },
    features: [
      '12 Social Media Posts',
      '8 Edited Reels',
      '2 Animated Promotional Creatives',
      'Captions & Hashtags',
      'Basic Customer Query Responses',
      'Google Business Profile Management'
    ],
    platforms: ['Instagram', 'Facebook', 'WhatsApp', 'Threads', 'Google Business']
  },
  {
    id: 'professional-pack',
    number: 4,
    name: 'PROFESSIONAL PACK',
    fullName: '4. PROFESSIONAL PACK',
    price: '₹4,999',
    priceNum: 4999,
    period: '/month',
    idealFor: 'Ideal for Active Businesses',
    badge: 'High Value',
    colorScheme: 'purple',
    deliverables: {
      posts: '16 Posts',
      reels: '10 Motion Reels',
      stories: '4 Stories/Banners',
      captions: 'Monthly Calendar',
      strategy: 'Meta Ads Setup',
    },
    features: [
      '16 Social Media Posts',
      '10 Reels with Motion Graphics',
      '4 Stories or Promotional Banners',
      'Monthly Content Calendar',
      'Basic Social Media Account Management',
      'Basic Meta Ads Management',
      'Basic Customer Query Responses'
    ],
    platforms: ['Instagram', 'Facebook', 'WhatsApp', 'Threads', 'LinkedIn']
  },
  {
    id: 'premium-business',
    number: 5,
    name: 'PREMIUM BUSINESS',
    fullName: '5. PREMIUM BUSINESS',
    price: '₹7,999',
    priceNum: 7999,
    period: '/month',
    idealFor: 'Ideal for Established Businesses',
    badge: 'Recommended',
    popular: true,
    colorScheme: 'rose',
    deliverables: {
      posts: '20 Posts',
      reels: '12 Reels & Videos',
      stories: '12 Stories/Ads',
      strategy: 'Monthly Strategy',
      reporting: 'Performance Report',
    },
    features: [
      '20 Social Media Posts',
      '12 Reels & Motion Graphics Videos',
      '12 Stories & Advertising Creatives',
      'Monthly Content Strategy',
      'Basic Performance Report',
      'Basic Customer Query Responses',
      'Basic Meta Ads Management',
      'Basic Google Ads Management'
    ],
    platforms: ['Instagram', 'Facebook', 'WhatsApp', 'Threads', 'LinkedIn', 'YouTube']
  },
  {
    id: 'ultimate-business-pack',
    number: 6,
    name: 'ULTIMATE BUSINESS PACK',
    fullName: '6. ULTIMATE BUSINESS PACK',
    price: '₹11,999',
    priceNum: 11999,
    period: '/month',
    idealFor: 'Ideal for Brands Seeking Comprehensive Creative Support',
    badge: 'Full Agency Synergy',
    colorScheme: 'amber',
    deliverables: {
      posts: '24 Posts',
      reels: '15 Motion Reels',
      stories: '12 Stories/Designs',
      strategy: 'Full Scheduling & Ads',
      reporting: 'Priority Support',
    },
    features: [
      '24 Social Media Posts',
      '15 Reels with Motion Graphics',
      '12 Stories & Promotional Designs',
      'Social Media Content Scheduling',
      'Monthly Marketing Strategy',
      'Monthly Performance Report',
      'Priority Creative Support',
      'Basic Meta Ads Management',
      'Basic Google Ads Management'
    ],
    platforms: ['Instagram', 'Facebook', 'WhatsApp', 'Threads', 'LinkedIn', 'YouTube', 'X (Twitter)']
  },
  {
    id: 'business-pro',
    number: 7,
    name: 'BUSINESS PRO',
    fullName: '7. BUSINESS PRO',
    price: '₹14,999',
    priceNum: 14999,
    period: '/month',
    idealFor: 'Ideal for Growing Brands Focused on Expansion',
    badge: 'Multi-Channel Scaling',
    colorScheme: 'blue',
    deliverables: {
      posts: '30 Posts',
      reels: '16 Motion Reels',
      stories: '12 Stories/Ads',
      strategy: 'Full Management & Strategy',
      reporting: 'Monthly Analytics',
    },
    features: [
      '30 Social Media Posts',
      '16 Reels with Motion Graphics',
      '12 Stories & Advertising Creatives',
      'Social Media Account Management',
      'Monthly Content & Marketing Strategy',
      'Monthly Performance Report'
    ],
    platforms: ['Instagram', 'Facebook', 'WhatsApp', 'Threads', 'LinkedIn', 'YouTube', 'X (Twitter)', 'Pinterest']
  },
  {
    id: 'enterprise-business',
    number: 8,
    name: 'ENTERPRISE BUSINESS',
    fullName: '8. ENTERPRISE BUSINESS',
    price: '₹19,999',
    priceNum: 19999,
    period: '/month',
    idealFor: 'Ideal for Established Brands & High-Growth Businesses',
    badge: 'Maximum Impact & Reach',
    colorScheme: 'purple',
    deliverables: {
      posts: '30 Premium Posts',
      reels: '20 Advanced Reels',
      stories: '20 Stories/Creatives',
      strategy: 'Complete Campaign & Growth',
      reporting: 'Priority Support & Analytics',
    },
    features: [
      '30 Premium Social Media Posts',
      '20 Reels & Advanced Motion Graphics Videos',
      '20 Stories & Promotional Creatives',
      'Social Media Scheduling & Account Management',
      'Monthly Marketing Strategy',
      'Performance Analytics & Reporting',
      'Priority Support & Campaign Planning',
      'Basic Customer Query Responses'
    ],
    platforms: ['Instagram', 'Facebook', 'WhatsApp', 'Threads', 'LinkedIn', 'YouTube', 'X (Twitter)', 'Pinterest']
  }
];

export const SMM_IMPORTANT_NOTES = [
  'All packages are billed monthly.',
  'Advertising budgets, paid stock assets and third-party tool charges are excluded unless agreed otherwise.',
  'Ad management is subject to the scope agreed upon for each package.',
  'Customer response management covers agreed platforms and working hours.',
  'Deliverables and revisions should be confirmed before the project begins.',
  'Google Business Profile management and advertising services are subject to account access and eligibility.'
];
