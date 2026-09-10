import { ProjectItem, CaseStudy, ServiceItem, ProcessStep, PricingPackage, TestimonialItem, FaqItem, BlogArticle } from '../types';

export const HERO_STATS = [
  { value: '500+', label: 'Campaigns Delivered', sub: 'Across 28 Countries' },
  { value: '180M+', label: 'Organic & Paid Views', sub: 'Generated for Clients' },
  { value: '4.2x', label: 'Average Client ROAS', sub: 'On Performance Media' },
  { value: '98.7%', label: 'Client Retention Rate', sub: 'Long-term Partnerships' },
];

export const CLIENT_LOGOS = [
  { name: 'Fins', sector: 'Solar & EV Energy', logo: 'FINS SOLAR' },
  { name: 'Green Energy Seva', sector: 'Renewable Power', logo: 'GREEN ENERGY SEVA' },
  { name: 'Dhiyo AI Labs', sector: 'AI & Machine Learning', logo: 'DHIYO AI LABS' },
  { name: 'EasySell Services', sector: 'B2B & Enterprise Commerce', logo: 'EASYSELL SERVICES' },
  { name: 'Digital Wealth', sector: 'Fintech & Wealth Management', logo: 'DIGITAL WEALTH' },
  { name: 'Newtech Computer Education', sector: 'EdTech & Training Center', logo: 'NEWTECH EDUCATION' },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'motion-graphics',
    title: 'Motion Graphics & 2D/3D Animation',
    tagline: 'Visual storytelling that stops thumbs and explains complex ideas in seconds.',
    badge: 'Signature Craft',
    iconName: 'Sparkles',
    description: 'From hyper-stylized kinetic typography to photorealistic 3D product renders and explainer animations, we build visual systems that elevate your brand prestige.',
    deliverables: [
      '3D Product Reveal & CGI Animation',
      'Kinetic Typography & Logo Stings',
      'SaaS & Tech Product Explainers',
      'Broadcast-Quality Promo Graphics',
      'Lottie & Interactive Web Micro-animations',
      'UI/UX Screen Simulations'
    ],
    technologies: ['Cinema 4D', 'Blender', 'After Effects', 'Octane Render', 'Redshift', 'Figma'],
    highlightMetric: {
      value: '+240%',
      label: 'Average Engagement Lift vs Static Creatives'
    },
    gradient: 'from-rose-500/20 via-orange-500/10 to-transparent'
  },
  {
    id: 'video-editing',
    title: 'High-End Video Editing & Post-Production',
    tagline: 'Pacing, sound design, and color grading tuned for maximum retention.',
    badge: 'Viral Retention',
    iconName: 'Film',
    description: 'We edit raw footage into cinematic brand films, high-converting commercial reels, YouTube series, and viral short-form clips tailored to algorithm psychology.',
    deliverables: [
      'Short-Form Video Mastery (Reels, TikTok, YouTube Shorts)',
      'Commercials & Brand Hero Films',
      'High-Conversion UGC & Founder-Led Ads',
      'Multi-Cam Podcast & Interview Series',
      'Hollywood-Grade DaVinci Color Grading',
      'Spatial & Foley Sound Design'
    ],
    technologies: ['DaVinci Resolve Studio', 'Premiere Pro', 'Pro Tools', 'After Effects', 'Topaz AI'],
    highlightMetric: {
      value: '72.4%',
      label: 'Average 3-Second Retention Rate Achieved'
    },
    gradient: 'from-amber-500/20 via-rose-500/10 to-transparent'
  },
  {
    id: 'performance-marketing',
    title: 'Performance Marketing & Paid Advertising',
    tagline: 'Creative-led media buying engineered to scale revenue predictably.',
    badge: 'Growth Engine',
    iconName: 'TrendingUp',
    description: 'We marry psychological ad creative with rigorous media buying on Meta, Google, TikTok, and YouTube to drive lower CPAs, higher AOV, and scalable ROAS.',
    deliverables: [
      'Meta Ads (Facebook & Instagram High-Scale Campaigns)',
      'Google Search, Performance Max & YouTube Ads',
      'TikTok Ad Creative & Media Buying',
      'Dynamic Creative Testing & Iteration Frameworks',
      'Full-Funnel Retargeting & Attribution Setup',
      'Conversion Rate Optimization (CRO) Audits'
    ],
    technologies: ['Meta Business Suite', 'Google Ads', 'TikTok Ads Manager', 'Triple Whale', 'Hyros', 'GA4'],
    highlightMetric: {
      value: '4.2x',
      label: 'Average Verified Blended ROAS'
    },
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent'
  },
  {
    id: 'web-development',
    title: 'High-Converting Website & Web Development',
    tagline: 'Lightning-fast digital flagships engineered to convert high-intent traffic.',
    badge: 'Conversion Flagship',
    iconName: 'Code2',
    description: 'We design and code bespoke, high-performance web applications, interactive landing pages, e-commerce stores, and digital portfolio experiences tailored for maximum speed and conversion.',
    deliverables: [
      'Custom React, Next.js & Modern Web Architecture',
      'High-Converting D2C & SaaS Landing Page Systems',
      'Interactive 3D Web Experiences (Three.js & WebGL)',
      'Sub-Second Page Speed & Core Web Vitals Optimization',
      'CRM, Stripe, Pixel & Analytics Integrations',
      'Full Responsive UI/UX & Dynamic CMS Solutions'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Shopify Plus', 'Framer Motion'],
    highlightMetric: {
      value: '< 0.8s',
      label: 'Average First Contentful Paint Load Speed'
    },
    gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent'
  },
  {
    id: 'social-media',
    title: 'Social Media Management & Organic Growth',
    tagline: 'Turn casual scrollers into cult-like brand advocates.',
    badge: 'Community Cultivation',
    iconName: 'Share2',
    description: 'End-to-end organic social strategy, content calendar execution, daily community engagement, and trend-jacking that establishes cultural relevance.',
    deliverables: [
      'End-to-End Content Calendar & Production',
      'Platform-Native Creative Direction',
      'Community Management & Response Architecture',
      'Influencer Collab & UGC Sourcing Pipeline',
      'Monthly Trend Forecasting & Audio Selection',
      'Deep-Dive Audience Analytics & Reporting'
    ],
    technologies: ['Notion Social Engine', 'Later', 'Metricool', 'Sprout Social', 'CapCut Pro'],
    highlightMetric: {
      value: '3.8M+',
      label: 'Monthly Organic Reach Generated'
    },
    gradient: 'from-blue-500/20 via-indigo-500/10 to-transparent'
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity & Motion Systems',
    tagline: 'A cohesive visual language that makes your company unforgettable.',
    badge: 'Design Authority',
    iconName: 'Layers',
    description: 'We construct dynamic brand identities with comprehensive motion guidelines, typography rules, color chemistry, and digital assets ready for multi-channel dominance.',
    deliverables: [
      'Comprehensive Brand Identity & Motion Guidelines',
      'Dynamic Animated Logo Packages',
      'Custom Motion Design System & UI Kits',
      'Iconography, 3D Assets & Typography Pairing',
      'Packaging & Digital Merchandising Artwork',
      'Pitch Decks & Investor Keynotes'
    ],
    technologies: ['Figma', 'Illustrator', 'Photoshop', 'After Effects', 'Spline 3D'],
    highlightMetric: {
      value: '100%',
      label: 'Multi-Channel Consistency Score'
    },
    gradient: 'from-purple-500/20 via-pink-500/10 to-transparent'
  },
  {
    id: 'seo-content',
    title: 'SEO & Organic Search Authority',
    tagline: 'Capture high-intent buyers through data-driven search architecture.',
    badge: 'Compounding Traffic',
    iconName: 'Search',
    description: 'Technical SEO audits, semantic keyword mapping, high-ranking multimedia content hubs, and YouTube SEO optimization that fuel inbound organic pipeline.',
    deliverables: [
      'Comprehensive Technical SEO & Speed Optimization',
      'YouTube Video SEO & Metadata Ranking Strategy',
      'High-Intent Keyword Architecture & Pillar Content',
      'Semantic Search & AI Engine Optimization (GEO/AIO)',
      'Authoritative Backlink Acquisition Strategies',
      'Core Web Vitals Performance Tuning'
    ],
    technologies: ['Ahrefs', 'Semrush', 'Screaming Frog', 'Google Search Console', 'SurferSEO'],
    highlightMetric: {
      value: '+310%',
      label: 'Average Inbound Organic Traffic Growth'
    },
    gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent'
  }
];

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: 'reelway-flagship-showreel',
    title: 'REELWAY // 2026 Master Showreel',
    client: 'REELWAY Creative Studio',
    category: 'brand',
    categoryLabel: 'Official Showreel',
    tag: 'Flagship Agency Showreel',
    thumbnail: 'https://img.youtube.com/vi/N-YXve5L3e0/maxresdefault.jpg',
    videoPreviewUrl: 'https://youtu.be/N-YXve5L3e0',
    aspectRatio: '16:9',
    metrics: { label: 'Client Campaign Views', value: '180M+' },
    duration: '1:18',
    year: '2026',
    summary: 'The official 2026 REELWAY master showreel showcasing high-end commercial video editing, 3D CGI motion design, and performance video marketing.',
    deliverables: ['3D Motion Design', 'DaVinci Studio Color Grading', 'Spatial Foley Sound Design', 'High-Converting Ad Cuts']
  },
  {
    id: 'reelway-instagram-showreel',
    title: 'REELWAY // Instagram Viral Motion Reel',
    client: 'REELWAY Creative Studio',
    category: 'reels',
    categoryLabel: 'Short-Form Viral',
    tag: 'Instagram Showreel',
    thumbnail: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format&fit=crop',
    videoPreviewUrl: 'https://www.instagram.com/reel/DZ19hgUNg9J/',
    aspectRatio: '9:16',
    metrics: { label: 'Instagram Views', value: '2.4M+' },
    duration: '0:24',
    year: '2026',
    summary: 'High-retention social-first short-form video edit engineered for viral organic growth on Instagram with kinetic text animations, speed curves, and rhythmic audio design.',
    deliverables: ['Instagram 9:16 Master', 'Dynamic Sound SFX', 'Kinetic Color Grading', 'High-Engagement Hooks']
  },
  {
    id: 'reelway-viral-shorts-reel',
    title: 'REELWAY // Shorts & Viral Motion Showreel',
    client: 'REELWAY Creative Studio',
    category: 'reels',
    categoryLabel: 'Short-Form Viral',
    tag: 'Viral Shorts Reel #1',
    thumbnail: 'https://img.youtube.com/vi/IUoPX1Js7XE/hqdefault.jpg',
    videoPreviewUrl: 'https://youtube.com/shorts/IUoPX1Js7XE',
    aspectRatio: '9:16',
    metrics: { label: 'Avg Reel Retention', value: '78%' },
    duration: '0:30',
    year: '2026',
    summary: 'High-energy vertical short-form showreel showcasing viral hooks, fast-paced kinetic typography, sound effects foley, and multi-layer motion design for TikTok, Instagram Reels, and YouTube Shorts.',
    deliverables: ['Viral Hook Testing', '9:16 Kinetic Animation', 'SFX Foley Soundscape', 'Subtitles & Motion Graphics']
  },
  {
    id: 'reelway-kinetic-fx-reel',
    title: 'REELWAY // Kinetic FX & Motion Showreel',
    client: 'REELWAY Creative Studio',
    category: 'reels',
    categoryLabel: 'Short-Form Viral',
    tag: 'Creative FX Reel #2',
    thumbnail: 'https://img.youtube.com/vi/fi4CEKoU22c/hqdefault.jpg',
    videoPreviewUrl: 'https://youtube.com/shorts/fi4CEKoU22c',
    aspectRatio: '9:16',
    metrics: { label: 'Click-Through Rate', value: '8.4%' },
    duration: '0:25',
    year: '2026',
    summary: 'Fast-paced kinetic visual effects and dynamic transitions showreel highlighting 3D camera projections, sound design sync, and attention-grabbing hooks.',
    deliverables: ['VFX & Speed Ramps', 'Dynamic Motion Transitions', 'Custom SFX Sound Design', 'Multi-Platform 9:16 Master']
  },
  {
    id: 'apex-wireless-pro',
    title: 'Apex Sound // 3D Spatial Audio Reveal',
    client: 'Apex Audio Inc.',
    category: '3d',
    categoryLabel: '3D Product CGI',
    tag: '3D CGI & Spatial Sound',
    thumbnail: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1200&auto=format&fit=crop',
    videoPreviewUrl: 'https://assets.mixkit.co/videos/preview/mixkit-close-up-of-sound-mixer-equipment-in-a-studio-41132-large.mp4',
    aspectRatio: '16:9',
    metrics: { label: 'Pre-Orders Generated', value: '$1.84M' },
    duration: '0:45',
    year: '2026',
    summary: 'A hyper-realistic 3D exploded view reveal film illustrating the internal acoustic architecture of Apex Wireless Pro headphones.',
    deliverables: ['Cinema 4D Photoreal Model', 'Octane 8K Renders', '3D Spatial Audio Mix', 'Meta 9:16 Cutdowns']
  },
  {
    id: 'lumina-retinol-campaign',
    title: 'Lumina Glow // Viral Skin Science Reels',
    client: 'Lumina Skincare',
    category: 'reels',
    categoryLabel: 'Short-Form Viral',
    tag: 'D2C Viral Campaign',
    thumbnail: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop',
    videoPreviewUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-holding-and-applying-moisturizer-43093-large.mp4',
    aspectRatio: '9:16',
    metrics: { label: 'TikTok Views', value: '18.4M' },
    duration: '0:28',
    year: '2026',
    summary: '30-day episodic short-form motion campaign breaking down skincare biology with macro zooms and kinetic typography.',
    deliverables: ['18x Hook-Tested Vertical Videos', 'Cellular Motion Graphics', 'Native TikTok Sound Design', 'Creator UGC Direction']
  }
];

export const BEFORE_AFTER_ITEMS = [
  {
    id: 'ba-video-grade',
    title: 'Commercial Color Grade & Motion Graphics',
    category: 'Post-Production VFX',
    beforeImage: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1200&auto=format&fit=crop',
    beforeLabel: 'Raw Log Footage (Flat, Unmastered)',
    afterLabel: 'REELWAY Cinematic Grade + Kinetic VFX',
    description: 'Transforming dull raw smartphone/camera captures into high-impact, mood-evoking brand commercials with custom LUTs, grain, and 3D overlays.'
  },
  {
    id: 'ba-ad-performance',
    title: 'Static Social Banner vs High-Converting Motion Ad',
    category: 'Performance Creative',
    beforeImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=1200&auto=format&fit=crop',
    beforeLabel: 'Standard Static Banner (0.8% CTR)',
    afterLabel: 'REELWAY Motion Storyboard (3.9% CTR, 4.4x ROAS)',
    description: 'Upgrading static boring banners to dynamic multi-layered animated video funnels that capture high-intent buyers on Meta and TikTok.'
  }
];

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: 'apex-audio-scale',
    title: 'Scaling Apex Audio from $2M to $9.5M in 9 Months Through Video-First Performance Marketing',
    client: 'Apex Audio Inc.',
    industry: 'Consumer Tech / Hardware',
    heroImage: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-close-up-of-sound-mixer-equipment-in-a-studio-41132-large.mp4',
    challenge: 'Apex Audio launched an industry-grade noise-canceling headphone with exceptional acoustic quality, but was losing market share to incumbents due to static product imagery, high customer acquisition costs ($114 CPA on Meta), and a low 1.4x ROAS.',
    strategy: 'REELWAY architected a complete video-first creative flywheel. We replaced boring static product photos with photorealistic 3D exploded-view animations explaining their proprietary acoustic chamber, supported by a 30-variant short-form video test pipeline to target audiophiles, remote workers, and gamers with bespoke angles.',
    creativeSolution: 'Built 3 distinct cinematic hero films, 40+ modular TikTok/Reels ads featuring macro driver vibration simulations, and high-energy founder explainers. We introduced psychological kinetic hook banners that decreased bounce rates by 38% on their product landing pages.',
    campaign: 'Launched a multi-channel performance strategy across Meta (Advantage+ Shopping), TikTok Spark Ads, and YouTube In-Stream Video Ads, supported by remarketing motion graphics that showcased press awards and unboxing reviews.',
    results: [
      { metric: '+380%', label: 'Revenue Growth', description: 'Scaled from $2M to $9.5M annual run rate in 9 months' },
      { metric: '4.8x', label: 'Blended ROAS', description: 'Up from 1.4x baseline across $1.4M ad spend' },
      { metric: '-54%', label: 'Lower CPA', description: 'Customer acquisition cost dropped from $114 to $52.40' },
      { metric: '32M+', label: 'Video Views', description: 'Total combined organic and paid impressions' }
    ],
    testimonial: {
      quote: 'REELWAY didn’t just make our videos look like Apple commercials — their ads paid for themselves within the first 14 days. They are the single most impactful growth partner we’ve ever worked with.',
      author: 'Marcus Vance',
      role: 'Chief Marketing Officer',
      company: 'Apex Audio Inc.'
    }
  },
  {
    id: 'lumina-skincare-growth',
    title: 'Transforming a D2C Skincare Line into a Cult Viral TikTok Phenomenon',
    client: 'Lumina Skincare',
    industry: 'D2C Beauty & Wellness',
    heroImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-young-woman-touching-her-face-with-cosmetic-creams-41139-large.mp4',
    challenge: 'Lumina was struggling to cut through the beauty noise on TikTok and Instagram. Their content looked like generic influencer product reviews and failed to convey the clinical scientific formulation behind their active peptides.',
    strategy: 'Develop an episodic "Skin Science" motion series combining 3D cellular animations with authentic aesthetic UGC. Implement a weekly creative testing sprint to systematically discover winning hooks and scale top performers into paid TikTok ads.',
    creativeSolution: 'Crafted 48 micro-videos utilizing 3D microscopic skin penetration visuals, bold problem-first typography hooks ("Why your retinol is actually doing nothing"), and fast-paced sound design synchronized to viral trending audio stems.',
    campaign: 'Executed a 90-day organic push synced with TikTok Spark Ads and Meta Reels retargeting, guiding viewers to a custom interactive skin diagnostic quiz on their website.',
    results: [
      { metric: '18.4M', label: 'Viral Impressions', description: 'Generated within the first 60 days of launch' },
      { metric: '+410%', label: 'Direct Site Traffic', description: 'Inbound organic visitors from short-form reels' },
      { metric: '6.1x', label: 'Top Ad ROAS', description: 'On best performing 3D cellular animation ad variant' },
      { metric: '84,000+', label: 'New Email Leads', description: 'Captured via video-linked skin diagnostic quiz' }
    ],
    testimonial: {
      quote: 'The visual quality REELWAY produces is absurd. They made dermatological science feel as engaging as a movie trailer. Our entire inventory sold out twice.',
      author: 'Elena Rostova',
      role: 'Founder & CEO',
      company: 'Lumina Skincare'
    }
  },
  {
    id: 'finpulse-banking-launch',
    title: 'Launching a Next-Gen Fintech App to 140K Verified Users in 90 Days',
    client: 'FinPulse Banking',
    industry: 'Fintech & Digital Banking',
    heroImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-smartphone-with-a-green-screen-41532-large.mp4',
    challenge: 'FinPulse was launching in a crowded banking space where consumers have low trust in fintech newcomers and traditional ads suffer from dismal click-through rates and high app install costs.',
    strategy: 'Position FinPulse not as a boring bank, but as an ultra-fast modern financial cockpit. Leverage high-voltage motion design, 3D holographic credit card renders, and YouTube pre-roll ads targeting tech professionals and creators.',
    creativeSolution: 'Produced a 75-second cinematic brand anthem, 12 dynamic UI demo videos highlighting the instant cashback engine, and interactive motion assets for digital billboards across New York and London.',
    campaign: 'High-frequency omni-channel blitz across YouTube, Meta, Google UAC (Universal App Campaigns), and LinkedIn Ads targeting high-income millennial earners.',
    results: [
      { metric: '142,000+', label: 'New Verified Users', description: 'Acquired during the 90-day launch window' },
      { metric: '$3.10', label: 'App Install Cost', description: '68% lower than industry fintech average of $9.80' },
      { metric: '89%', label: 'Video Completion Rate', description: 'On non-skippable YouTube brand assets' },
      { metric: '#2 Ranking', label: 'Finance App Store', description: 'Reached top 3 on iOS App Store Finance charts' }
    ],
    testimonial: {
      quote: 'REELWAY gave our brand instant institutional prestige while keeping the vibe hyper-modern and energetic. They understand both film craft and direct response growth.',
      author: 'David Chen',
      role: 'VP of Growth',
      company: 'FinPulse Banking'
    }
  }
];

export const WHY_REELWAY_PILLARS = [
  {
    id: 'creative-marketing',
    title: 'Creative + Marketing Under One Roof',
    tagline: 'No handoffs. No blame games. Just cohesive execution.',
    icon: 'Layers',
    description: 'Traditional agencies split creative studios and media buyers. At REELWAY, motion artists, video editors, copywriters, and media buyers sit at the same table, engineering every pixel specifically to drive conversion and brand equity.'
  },
  {
    id: 'strategy-creativity',
    title: 'Strategy Meets Creativity',
    tagline: 'Stunning visuals without strategic substance is just expensive wallpaper.',
    icon: 'Compass',
    description: 'We don’t produce generic "artsy" videos. Every frame, hook, sound transition, and typographic cue is backed by audience research, retention data, and competitive positioning.'
  },
  {
    id: 'premium-visuals',
    title: 'Premium Visual Content',
    tagline: 'Hollywood-level polish accessible for modern growth brands.',
    icon: 'Sparkles',
    description: 'We deploy high-end 3D CGI (Cinema 4D, Octane), DaVinci Resolve color grading, custom sound design, and kinetic typography that makes your brand look 10x larger than your competitors.'
  },
  {
    id: 'performance-focused',
    title: 'Performance Focused',
    tagline: 'We measure success in revenue, ROAS, and retention — not vanity metrics.',
    icon: 'Target',
    description: 'Whether scaling Meta ads, growing an organic TikTok presence, or producing a brand film, our primary KPI is bottom-line business growth and measurable return on creative investment.'
  },
  {
    id: 'fast-reliable',
    title: 'Fast & Reliable Sprints',
    tagline: 'Predictable timelines, zero ghosting, relentless delivery.',
    icon: 'Zap',
    description: 'We work in agile production sprints with dedicated Slack channels, Notion portals, and guaranteed turnaround windows (24-48h on short-form iterations, 5-7 days on 3D animations).'
  },
  {
    id: 'long-term-partnership',
    title: 'Long-Term Partnership',
    tagline: 'Your outsourced internal creative & marketing powerhouse.',
    icon: 'Users',
    description: 'We act as an extension of your leadership team. As your business scales, we continually optimize your creative library, test new acquisition channels, and protect your brand consistency.'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    phase: 'Phase 01',
    title: 'Discover',
    tagline: 'Deconstructing Your Brand & Market Mechanics',
    duration: 'Days 1 - 3',
    description: 'We audit your current creative assets, competitor landscape, past ad performance data, customer psychology, and core value propositions to find your unfair advantage.',
    actions: [
      'Comprehensive Creative & Ad Account Audit',
      'Competitor Visual & Hook Deconstruction',
      'Target Demographic Persona Mapping',
      'Strategic Goals & KPI Alignment Workshop'
    ],
    deliverable: 'Creative Growth Strategy & Moodboard'
  },
  {
    step: 2,
    phase: 'Phase 02',
    title: 'Strategize',
    tagline: 'Architecting the Narrative & Creative Blueprint',
    duration: 'Days 4 - 6',
    description: 'We write compelling scripts, design storyboards, formulate ad testing matrices, and outline visual style guides that will captivate audience attention.',
    actions: [
      'Scriptwriting & Hook Matrix Development',
      'Visual Storyboards & Style Frames',
      'Creative Angle Testing Architecture',
      'Asset Sourcing & Talent Briefing'
    ],
    deliverable: 'Approved Scripts, Storyboards & Creative Matrix'
  },
  {
    step: 3,
    phase: 'Phase 03',
    title: 'Create',
    tagline: 'High-Caliber Production, Motion & Sound Design',
    duration: 'Days 7 - 14',
    description: 'Our motion artists, 3D animators, editors, and sound engineers bring the vision to life with obsessive attention to pacing, physics, lighting, and typography.',
    actions: [
      '2D/3D Motion Animation & CGI Rendering',
      'High-Retention Video Editing & Pacing',
      'DaVinci Cinema Color Grading',
      'Custom Sound Design, SFX & Audio Mastering'
    ],
    deliverable: 'Master Video Deliverables & Modular Ad Variations'
  },
  {
    step: 4,
    phase: 'Phase 04',
    title: 'Launch',
    tagline: 'Precision Multi-Channel Deployment',
    duration: 'Days 15 - 18',
    description: 'We deploy the creative assets across your paid media channels (Meta, TikTok, Google, YouTube) and organic social schedule with rigorous tracking and pixel attribution.',
    actions: [
      'Campaign Architecture & Ad Account Structuring',
      'Dynamic Creative Testing (DCT) Setup',
      'Organic Publishing & Trend Synchronization',
      'Conversion API & Attribution Verification'
    ],
    deliverable: 'Live Campaigns & Real-Time Tracking Dashboards'
  },
  {
    step: 5,
    phase: 'Phase 05',
    title: 'Analyze',
    tagline: 'Deep-Dive Creative & Performance Diagnostics',
    duration: 'Days 19 - 24',
    description: 'We inspect the hard numbers: thumb-stop rates, 3-second hold rates, outbound CTR, add-to-cart velocity, and blended ROAS to diagnose winning variables.',
    actions: [
      'Hook Rate & Retention Curve Analysis',
      'Creative Fatigue & CPA Monitoring',
      'Audience Segment Response Breakdown',
      'Weekly Strategy & Data Briefing'
    ],
    deliverable: 'Diagnostic Performance & Creative Health Report'
  },
  {
    step: 6,
    phase: 'Phase 06',
    title: 'Optimize',
    tagline: 'Iterating Winners & Scaling Exponentially',
    duration: 'Ongoing Sprints',
    description: 'We double down on verified winners by testing new intro hooks, swapping CTA cards, iterating sound stems, and scaling ad budgets safely without burning audience interest.',
    actions: [
      'Rapid Hook & Thumbnail Iteration Sprints',
      'Budget Scaling on Proven Winner Creatives',
      'New Angle Exploration & Fatigue Prevention',
      'Compounding Growth Roadmap & Next-Phase Roadmap'
    ],
    deliverable: 'Continuous Creative Refresh & Scaled Revenue'
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'start',
    name: 'REELWAY START',
    subtitle: 'For ambitious small businesses & emerging creators seeking high-impact creative momentum.',
    popular: false,
    idealFor: 'Startups, Boutique Brands & Single-Founder Businesses',
    overview: 'Get professional-grade motion graphics, edited reels, and foundational ad creative to stand out immediately without agency bloat.',
    features: [
      'Up to 8 High-Retention Short-Form Videos / month',
      '1x Custom 2D Motion Graphic Explainer (up to 45s)',
      'Hook & Scriptwriting Support',
      'DaVinci Cinema Color Grading & Audio SFX',
      'Vertical (9:16) & Square (1:1) Formats',
      '2 Revisions per deliverable',
      'Direct Slack Channel Communication',
      '48-72 Hour Typical Turnaround'
    ],
    deliverables: [
      '8x Short-Form Reels / TikToks',
      '1x 2D Motion Graphic Video',
      'Social Caption & Hashtag Packs',
      'Raw Master File Delivery'
    ],
    turnaround: '48 - 72 Hours',
    supportLevel: 'Dedicated Slack + Weekly Update',
    ctaText: 'Request Custom Quote for Start'
  },
  {
    id: 'grow',
    name: 'REELWAY GROW',
    subtitle: 'Our flagship full-stack growth package for scaling D2C, SaaS, and E-Commerce brands.',
    badge: 'Most Popular',
    popular: true,
    idealFor: 'Growth-Stage Brands ($500K - $5M/yr) scaling paid ads & organic channels',
    overview: 'A complete creative and performance marketing engine designed to reduce acquisition costs and build a magnetic digital brand.',
    features: [
      'Up to 16 High-Retention Short-Form Videos / month',
      '2x 3D / 2D Motion Graphics & Product Explainer Films',
      'End-to-End Paid Ads Management (Meta + TikTok or Google)',
      'Dynamic Creative Testing (DCT) Matrix with 20+ Variations',
      'Complete Scriptwriting, Storyboarding & UGC Sourcing',
      'DaVinci Resolve Cinema Grade & Spatial Sound Design',
      'Bi-Weekly Creative Strategy & Analytics Calls',
      'Dedicated Creative Director + Senior Media Buyer',
      'Unlimited Revisions within active sprint window'
    ],
    deliverables: [
      '16x Polished Short-Form Creatives',
      '2x 3D/2D High-Impact Brand/Product Films',
      'Full Paid Ads Campaign Setup & Media Buying',
      'Live Performance Dashboard Access',
      'Weekly Creative Performance Audits'
    ],
    turnaround: '24 - 48 Hours for Iterations',
    supportLevel: 'Dedicated Senior Squad + Bi-Weekly Strategy Calls',
    ctaText: 'Request Custom Quote for Grow'
  },
  {
    id: 'scale',
    name: 'REELWAY SCALE',
    subtitle: 'Enterprise-grade creative studio and omni-channel media powerhouse for market leaders.',
    popular: false,
    idealFor: 'Established Enterprises, Fast-Growing Tech & Global Consumer Brands',
    overview: 'An elite, dedicated multi-disciplinary production squad functioning as your in-house creative studio with infinite creative velocity.',
    features: [
      'Unlimited Video & Motion Design Requests (Active Queue)',
      'Complex 3D CGI Product Renders, Simulations & Billboards',
      'Omni-Channel Media Buying (Meta, Google, TikTok, YouTube)',
      'Custom Brand Motion Guidelines & Design System',
      'Full SEO, YouTube Optimization & Organic Content Machine',
      'Custom Sound Scoring & Professional Voiceover Casting',
      'VIP Priority Queue & 24/7 Dedicated Slack Channel',
      'Dedicated VP of Growth, Art Director & 3D Specialists',
      'Quarterly In-Person / On-Site Creative Workshops'
    ],
    deliverables: [
      'Bespoke Enterprise Video & Motion Assets',
      'Full-Funnel Omni-Channel Paid Ad Campaigns',
      '3D Holographic / Out-Of-Home Billboard Assets',
      'Complete SEO & YouTube Optimization Engine',
      'Monthly Executive Growth & Strategy Presentations'
    ],
    turnaround: 'Same-Day / Priority Sprints',
    supportLevel: 'VIP 24/7 Dedicated Squad + In-Person Planning',
    ctaText: 'Request Custom Quote for Scale'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 't-1',
    clientName: 'Marcus Vance',
    role: 'Chief Marketing Officer',
    company: 'Apex Audio Inc.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
    rating: 5,
    quote: 'REELWAY transformed our entire marketing trajectory. Before them, our ads looked like everyone else’s. Their 3D product animations and short-form ad matrices took our ROAS from 1.4x to 4.8x in under 9 months.',
    projectType: '3D Motion Graphics & Meta Performance Ads',
    verifiedMetric: '+380% Revenue Growth ($9.5M ARR)'
  },
  {
    id: 't-2',
    clientName: 'Elena Rostova',
    role: 'Founder & CEO',
    company: 'Lumina Skincare',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop',
    rating: 5,
    quote: 'Finding a team that understands both cinematic visual elegance and raw algorithmic conversion is nearly impossible. REELWAY solved that. They generated 18M+ views and sold out our product line twice.',
    projectType: 'Short-Form Viral Strategy & 3D Cellular Animation',
    verifiedMetric: '18.4M Organic Views & 6.1x Top ROAS'
  },
  {
    id: 't-3',
    clientName: 'David Chen',
    role: 'VP of Growth',
    company: 'FinPulse Banking',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    rating: 5,
    quote: 'The team at REELWAY operates with extreme speed and creative precision. Their brand launch video set the tone for our app launch, driving 142K signups with a $3.10 CPA — 68% cheaper than our industry benchmark.',
    projectType: 'Fintech Brand Film & Multi-Channel Video Ads',
    verifiedMetric: '142,000 Verified Installs at $3.10 CPA'
  },
  {
    id: 't-4',
    clientName: 'Sarah Jenkins',
    role: 'Director of Brand Marketing',
    company: 'Nova Atelier',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
    rating: 5,
    quote: 'We spent over $80K with traditional agencies that gave us sluggish 3-week turnarounds. With REELWAY, we receive high-converting ad variations in 48 hours. They are an essential part of our growth stack.',
    projectType: 'E-Commerce Fashion Ads & Social Strategy',
    verifiedMetric: '5.2x Verified Meta Ads ROAS'
  },
  {
    id: 't-5',
    clientName: 'Julian Thorne',
    role: 'Head of Brand Experience',
    company: 'Kinetix EV',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    rating: 5,
    quote: 'Their ability to render complex aerodynamic simulations and weave them into an emotional brand story is world-class. Our launch film earned over 64M press impressions worldwide.',
    projectType: 'Automotive 3D CGI & Global Launch Keynote',
    verifiedMetric: '64M+ Global Press & Media Impressions'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'services',
    categoryLabel: 'Services & Scope',
    question: 'What exact services does REELWAY provide under one roof?',
    answer: 'REELWAY is an integrated creative and growth agency. We specialize in Motion Graphics (2D & 3D CGI animation), High-End Video Editing (Commercials, Brand Films, Shorts/Reels/TikToks), Performance Marketing (Meta Ads, Google Ads, TikTok Ads, YouTube Ads), Social Media Organic Management, Brand Identity & Motion Systems, and Technical SEO & YouTube Optimization.'
  },
  {
    id: 'faq-2',
    category: 'pricing',
    categoryLabel: 'Pricing & Billing',
    question: 'Why do you use Custom Quotes instead of rigid fixed pricing?',
    answer: 'Every brand has distinct objectives, asset libraries, video volume requirements, and ad spend scale. A custom quote ensures you only pay for the exact production sprint capacity, motion complexity, and media management needed for your stage of growth — without forced package filler or hidden fees.'
  },
  {
    id: 'faq-3',
    category: 'timelines',
    categoryLabel: 'Timelines & Turnaround',
    question: 'What are your typical project turnaround times?',
    answer: 'For short-form video edits and ad iterations, our typical turnaround is 24 to 48 hours. For bespoke 2D motion graphics and explainer videos, projects take 5 to 10 business days. Complex 3D photorealistic CGI animations or full-scale brand anthem films typically span 2 to 3 weeks including storyboarding, sound design, and color grading.'
  },
  {
    id: 'faq-4',
    category: 'video',
    categoryLabel: 'Video Editing & Revisions',
    question: 'How do you handle revisions, footage uploads, and creative feedback?',
    answer: 'We use professional frame-accurate review tools (Frame.io) and dedicated Slack channels. You can click on any frame in a video to leave time-stamped visual comments. We include comprehensive revisions in all our sprint plans to ensure the final output exceeds your standard.'
  },
  {
    id: 'faq-5',
    category: 'social',
    categoryLabel: 'Social Media Strategy',
    question: 'Do you provide the scripts, content ideas, and trending audio, or do we need to supply them?',
    answer: 'We provide end-to-end creative direction. Our team writes the hook scripts, researches high-converting industry trends, selects platform-native audio stems, creates storyboards, and provides detailed shot lists if your team is capturing raw footage on your end.'
  },
  {
    id: 'faq-6',
    category: 'ads',
    categoryLabel: 'Advertising & Media Buying',
    question: 'Can REELWAY manage our media spend and ad accounts directly?',
    answer: 'Yes. In our GROW and SCALE partnerships, our senior media buyers manage your ad accounts directly across Meta (Facebook & Instagram), TikTok Ads Manager, Google Ads, and YouTube. We build dynamic creative testing frameworks and optimize budget allocation daily based on true blended ROAS and MER.'
  },
  {
    id: 'faq-7',
    category: 'packages',
    categoryLabel: 'Custom Enterprise Packages',
    question: 'Can we build a hybrid custom package tailored to our exact monthly needs?',
    answer: 'Absolutely. Many of our clients start with a hybrid mix — such as 12 monthly Reels + 1 quarterly 3D motion launch film + Meta ad management. Use our contact form or book a consultation call, and we will architect a tailored monthly sprint package for you.'
  }
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: 'blog-1',
    title: 'The Death of Static Ads: Why Video Motion Graphics Deliver 3.8x Higher ROAS on Meta in 2026',
    slug: 'the-death-of-static-ads-video-motion-graphics-roas',
    category: 'Video Marketing',
    excerpt: 'How leading D2C and SaaS brands are replacing static image carousels with psychological 3D kinetic video hooks to beat rising CPMs.',
    content: [
      'In 2026, social media ad platforms are no longer static display networks — they are algorithmic entertainment feeds. As Meta’s Advantage+ Shopping and TikTok’s recommendation algorithms reward watch time and hook engagement, static banner ads have experienced a 45% decline in effective CTR across major D2C categories.',
      'The modern consumer scrolls through approximately 300 feet of visual content per day. Static images simply blend into the periphery. Dynamic motion graphics with kinetic text, spatial audio cues, and rapid 0.8-second hook transitions immediately signal high production value and cognitive stimulation.',
      'By implementing a 3D motion graphic testing matrix — varying the first 2 seconds of hook typography, color palette, and audio stems while keeping the core product demonstration constant — our clients consistently lower their cost per acquisition (CPA) by 35% to 54% within 30 days.'
    ],
    author: {
      name: 'Roman Alvarez',
      role: 'Head of Creative Strategy',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
    },
    date: 'August 14, 2026',
    readTime: '6 min read',
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
    tags: ['Video Marketing', 'Motion Graphics', 'Meta Ads', 'ROAS Strategy']
  },
  {
    id: 'blog-2',
    title: 'The Anatomy of a 72% Retention Hook: Short-Form Psychology for TikTok and Reels',
    slug: 'anatomy-of-a-high-retention-hook-tiktok-reels',
    category: 'Social Media',
    excerpt: 'The exact mathematical formula behind 3-second hold rates that trick the algorithm into pushing your content to millions of organic viewers.',
    content: [
      'The first 3 seconds of a vertical video dictate 90% of its algorithmic distribution. If your 3-second retention drops below 55%, both the Instagram and TikTok algorithms immediately throttle your post reach.',
      'To hit 70%+ retention, every high-performing video requires three synchronized stimuli in Frame 01: Visual Disruption (an unexpected physical motion, macro zoom, or glitch), Textual Curiosity (a polarizing statement or contrarian insight), and Auditory Anchor (a punchy sound effect or rising riser sound stem).',
      'Avoid opening with "Hey guys, today I want to talk about..." Instead, open immediately inside the climax or state the uncomfortable truth your audience secretly knows.'
    ],
    author: {
      name: 'Zara Sterling',
      role: 'Senior Motion & Viral Editor',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop'
    },
    date: 'August 08, 2026',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop',
    tags: ['Social Media', 'Short Form', 'TikTok Algorithm', 'Creative Direction']
  },
  {
    id: 'blog-3',
    title: 'AI in Motion Design: Human Craftsmanship vs Generative Automation',
    slug: 'ai-in-motion-design-craftsmanship-vs-automation',
    category: 'AI',
    excerpt: 'How REELWAY leverages AI for real-time rotoscoping, upscaling, and workflow automation without sacrificing bespoke art direction.',
    content: [
      'The hype around purely prompt-generated AI video often overlooks the critical requirement of brand continuity, physics accuracy, and typography precision. Enterprise brands cannot afford hallucinated hands or mismatched logos in a commercial.',
      'At REELWAY, we use AI as an accelerator rather than a creative substitute. We integrate AI into the labor-intensive stages: automated footage transcribing, neural rotoscoping, high-resolution upscaling (Topaz Video AI), and predictive sound stem synchronization.',
      'This allows our senior 3D artists and animators to dedicate 100% of their energy to lighting, nuance, emotional pacing, and bespoke motion guidelines that AI models simply cannot replicate.'
    ],
    author: {
      name: 'Kai Takahashi',
      role: 'Director of 3D & CGI',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
    },
    date: 'July 29, 2026',
    readTime: '7 min read',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    tags: ['AI', 'Motion Graphics', 'Post-Production', 'Innovation']
  },
  {
    id: 'blog-4',
    title: 'Search in 2026: Why Video SEO & Generative Engine Optimization (GEO) Are Mandatory',
    slug: 'video-seo-and-generative-engine-optimization-2026',
    category: 'SEO',
    excerpt: 'Traditional Google blue links are shrinking. Here is how video transcripts and YouTube SEO capture the new AI-driven search results.',
    content: [
      'With AI Overviews and multimodal search engines indexing video frames and spoken audio transcripts in real time, search intent is increasingly satisfied through embedded video modules rather than 3,000-word text blogs.',
      'To win in modern search, every video asset must be engineered with semantic chapter timestamps, closed captions with rich keyword context, and Schema.org video markup.',
      'By publishing synchronized video explainers alongside high-intent search articles, brands capture prime real estate in both AI summaries and traditional organic search rankings simultaneously.'
    ],
    author: {
      name: 'Elena Rostova',
      role: 'VP of Search & Digital Growth',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop'
    },
    date: 'July 21, 2026',
    readTime: '6 min read',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    tags: ['SEO', 'YouTube SEO', 'GEO', 'Digital Marketing']
  },
  {
    id: 'blog-5',
    title: 'Building a Dynamic Motion Design System for Scalable Brand Identity',
    slug: 'building-a-dynamic-motion-design-system',
    category: 'Branding',
    excerpt: 'Why your brand guidelines need motion tokens, easing curves, and spatial animation rules alongside your color palette and logo.',
    content: [
      'In a screen-first world, your brand does not live on a static piece of paper. It lives in the micro-animations of your app, the transition curves of your video intros, and the rhythm of your loading indicators.',
      'A true Motion Design System codifies three essential pillars: Velocity & Easing (the physics personality of your brand, whether crisp and snappy or fluid and luxurious), Spatial Transitions (how elements enter and exit screens), and Typographic Choreography (how headlines reveal themselves).',
      'When your motion language is standardized, internal design teams and external partners can produce on-brand video assets at 4x the speed with zero dilution of your brand equity.'
    ],
    author: {
      name: 'Roman Alvarez',
      role: 'Head of Creative Strategy',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
    },
    date: 'July 15, 2026',
    readTime: '8 min read',
    coverImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    tags: ['Branding', 'Design Systems', 'Motion Graphics', 'UI/UX']
  },
  {
    id: 'blog-6',
    title: 'The Omni-Channel Performance Playbook: Scaling Across Meta, Google, and TikTok in Synergy',
    slug: 'omni-channel-performance-marketing-playbook',
    category: 'Digital Marketing',
    excerpt: 'How to harmonize your creative assets across discovery feeds and high-intent search funnels without cannibalizing ad spend.',
    content: [
      'Many brands make the fatal mistake of treating advertising platforms as isolated silos. They run the same video ad on TikTok, Meta, and YouTube without modifying the aspect ratio, the audio pacing, or the customer journey stage.',
      'A unified omni-channel creative strategy treats TikTok and Meta Reels as "Discovery Engines" (capturing new awareness with curiosity hooks), YouTube as "Authority & Consideration" (deep-dive 60s product reviews), and Google Performance Max as "Harvesting & Conversion" (capturing high-intent searchers primed by your video ads).',
      'When attribution models are configured correctly across these touchpoints, blended ROAS expands exponentially while protecting profit margins.'
    ],
    author: {
      name: 'Zara Sterling',
      role: 'Senior Media Buyer & Strategist',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop'
    },
    date: 'July 03, 2026',
    readTime: '7 min read',
    coverImage: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=1200&auto=format&fit=crop',
    tags: ['Digital Marketing', 'Paid Ads', 'Media Buying', 'Omni-Channel']
  }
];

export const FESTIVAL_OFFERS = [
  {
    id: 'diwali',
    name: '🪔 Diwali Dhamaka Offer',
    emoji: '🪔',
    discount: '15% OFF',
    discountNum: 15,
    festival: 'Diwali',
    tagline: 'Mega Festival of Lights Growth Sprint',
    badge: 'Bestseller Festival Deal',
    popular: true
  },
  {
    id: 'holi',
    name: '🌈 Holi Rang Offer',
    emoji: '🌈',
    discount: '7% OFF',
    discountNum: 7,
    festival: 'Holi',
    tagline: 'Vibrant Colors & High-Retention Reel Pack',
    badge: 'Color Blast Promo'
  },
  {
    id: 'navratri',
    name: '🔱 Navratri Shakti Offer',
    emoji: '🔱',
    discount: '12% OFF',
    discountNum: 12,
    festival: 'Navratri',
    tagline: '9-Day Continuous Ad & Creative Momentum',
    badge: 'High Energy'
  },
  {
    id: 'dussehra',
    name: '🏹 Dussehra Vijay Offer',
    emoji: '🏹',
    discount: '13% OFF',
    discountNum: 13,
    festival: 'Dussehra',
    tagline: 'Victory Sprint: Conquer Your Competition',
    badge: 'Scale Pack'
  },
  {
    id: 'ganesh',
    name: '🐘 Ganesh Utsav Offer',
    emoji: '🐘',
    discount: '5% OFF',
    discountNum: 5,
    festival: 'Ganesh Chaturthi',
    tagline: 'Auspicious Beginnings for New Brand Launches',
    badge: 'New Launch'
  },
  {
    id: 'janmashtami',
    name: '🦚 Janmashtami Special Offer',
    emoji: '🦚',
    discount: '12% OFF',
    discountNum: 12,
    festival: 'Janmashtami',
    tagline: 'Artistic Storytelling & 3D Brand Magic',
    badge: 'Creative Choice'
  },
  {
    id: 'ramnavami',
    name: '🚩 Ram Navami Shubh Offer',
    emoji: '🚩',
    discount: '5% OFF',
    discountNum: 5,
    festival: 'Ram Navami',
    tagline: 'Shubh Launch Starter Video Sprint',
    badge: 'Shubh Launch'
  },
  {
    id: 'makarsankranti',
    name: '☀️ Makar Sankranti Utsav Offer',
    emoji: '☀️',
    discount: '3% OFF',
    discountNum: 3,
    festival: 'Makar Sankranti',
    tagline: 'Fly High with High-Converting Social Ads',
    badge: 'Seasonal Boost'
  },
  {
    id: 'mahashivratri',
    name: '🔱 Mahashivratri Maha Offer',
    emoji: '🔱',
    discount: '10% OFF',
    discountNum: 10,
    festival: 'Mahashivratri',
    tagline: 'Maha Power Sprint: 3D CGI & VFX Master Edits',
    badge: 'Maha Power'
  },
  {
    id: 'hanumanjayanti',
    name: '🚩 Hanuman Jayanti Special Offer',
    emoji: '🚩',
    discount: '6% OFF',
    discountNum: 6,
    festival: 'Hanuman Jayanti',
    tagline: 'Unstoppable Speed & 24h Turnaround Delivery',
    badge: 'Speed Boost'
  }
];
