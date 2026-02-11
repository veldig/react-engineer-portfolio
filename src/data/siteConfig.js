const siteConfig = {
  branding: {
    name: 'Your Name',
    firstName: 'Your',
    lastName: 'Name',
    initials: 'YN',
    roleLabel: 'SOFTWARE ENGINEER',
    tagline: 'Backend systems - AI orchestration - Product-minded',
    location: 'Your City, Country',
    established: '2026',
  },
  navigation: [
    { title: 'HOME', href: '#hero' },
    { title: 'ABOUT', href: '#about' },
    { title: 'EXPERIENCE', href: '#experience' },
    { title: 'PROJECTS', href: '#projects' },
    { title: 'CONTACT', href: '#contact' },
  ],
  resume: {
    url: '/resume.pdf',
    label: 'RESUME',
  },
  hireMe: {
    label: 'HIRE ME',
    mailto:
      'mailto:hello@example.com?subject=Let%27s%20work%20together&body=Hi%20there,%0A%0AI%20saw%20your%20portfolio%20and%20would%20love%20to%20connect.%0A%0ABest,%0A%5BYour%20Name%5D',
  },
  hero: {
    subtitle: 'Backend systems - AI orchestration - Product-minded',
    backgroundLabelLeft: 'EST. 2026',
    backgroundLabelRight: 'SCROLL\nTO EXPLORE',
  },
  about: {
    headline: {
      primary: 'ENGINEER.',
      accent: 'BUILDER.',
    },
    bio: [
      'Backend-focused software engineer with strong foundations in object-oriented programming and scalable system design. I specialize in building high-performance applications and developing large-scale data workflows in cloud environments.',
      'Passionate about engineering reliable AI systems that solve complex problems. Add your education, impact metrics, and specialties here.',
    ],
    skills: [
      'Java / Python / C++',
      'FastAPI / Django',
      'AWS / Docker / K8s',
      'React / TypeScript',
      'PostgreSQL / SQL',
      'LLM Orchestration',
    ],
  },
  experience: [
    {
      title: 'Senior Software Engineer',
      org: 'Company Name',
      orgLink: 'https://www.company.com',
      dates: '2023 - Present',
      bullets: [
        'Owned backend platform reliability for a multi-tenant SaaS product serving 100k+ users.',
        'Designed event-driven workflows to automate onboarding and reduce manual ops by 40%.',
        'Partnered with product and design to ship three high-impact features in one quarter.',
      ],
    },
    {
      title: 'Software Engineer',
      org: 'Startup Name',
      dates: '2021 - 2023',
      bullets: [
        'Built an internal analytics dashboard for cross-functional stakeholders.',
        'Implemented CI/CD pipelines and infrastructure-as-code for rapid deployments.',
        'Improved API response times by 35% through caching and query optimization.',
      ],
    },
  ],
  projects: [
    {
      title: 'Portfolio Template',
      stack: 'React, Vite, Tailwind',
      summary:
        'Responsive portfolio template with clean sections, animated transitions, and a downloadable resume.',
      liveLink: 'https://your-demo-url.com',
      githubLink: 'https://github.com/yourname/portfolio-template',
    },
    {
      title: 'Product Analytics Dashboard',
      stack: 'Node.js, Postgres, D3.js',
      summary:
        'End-to-end analytics pipeline with interactive dashboards for leadership insights.',
      githubLink: 'https://github.com/yourname/analytics-dashboard',
    },
    {
      title: 'AI-Assist Knowledge Base',
      stack: 'Python, FastAPI, Vector DB',
      summary:
        'LLM-powered internal search experience that reduces support triage time.',
    },
  ],
  contact: {
    headline: "LET'S\nTALK",
    subhead: 'Open to software engineering opportunities and focused collaborations.',
    email: 'hello@example.com',
    emailDisplay: 'hello@example.com',
    linkedin: {
      url: 'https://www.linkedin.com/in/your-handle/',
      label: '/in/your-handle',
    },
    phone: '+1 (555) 123-4567',
  },
  footer: {
    copyright: 'Your Name',
    location: 'Your City, Country',
    established: '2026',
  },
  seo: {
    title: 'Your Name | Portfolio Template',
    description: 'Reusable portfolio template for software engineers and creators.',
    url: 'https://your-domain.com',
    ogImage: '/og-image.svg',
  },
};

export default siteConfig;
