const mongoose = require('mongoose');
require('dotenv').config({ path: __dirname + '/../../.env' });

const Admin = require('../models/Admin');
const Project = require('../models/Project');
const Experience = require('../models/Experience');
const Skill = require('../models/Skill');
const Settings = require('../models/Settings');
const SEO = require('../models/SEO');
const Blog = require('../models/Blog');

const seedData = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio';
    console.log(`[Seeder] Connecting to database: ${mongoUri}`);
    await mongoose.connect(mongoUri);

    // Clear existing collections
    console.log('[Seeder] Cleaning existing collections...');
    await Admin.deleteMany({});
    await Project.deleteMany({});
    await Experience.deleteMany({});
    await Skill.deleteMany({});
    await Settings.deleteMany({});
    await SEO.deleteMany({});
    await Blog.deleteMany({});

    // 1. Seed Admin
    console.log('[Seeder] Seeding default admin user...');
    await Admin.create({
      username: process.env.DEFAULT_ADMIN_USER || 'admin',
      password: process.env.DEFAULT_ADMIN_PASS || 'Admin@Pass123!'
    });

    // 2. Seed Experiences
    console.log('[Seeder] Seeding professional experiences...');
    await Experience.create([
      {
        company: 'Rebuild Technologies',
        role: 'Associate Software Engineer (Full-Stack)',
        duration: 'June 2024 – Present',
        ordering: 1,
        currentlyWorking: true,
        technologies: ['Angular 20', 'SSR', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Google Maps API', 'RxJS', 'JWT'],
        achievements: [
          'Led frontend module development for a scalable rental management admin platform including SSR integration, reusable architecture patterns, and real-time operational dashboards.',
          'Developed and maintained 30+ RESTful APIs using Node.js, Express.js, and MongoDB, cutting backend latency by 25%.',
          'Architected JWT secure authentication and Role-Based Access Control (RBAC), reducing unauthorized incidents by over 90%.',
          'Integrated Google Maps Location Services and Socket.io WebSockets, increasing live driver tracking visibility by 50%.',
          'Refactored 60% of legacy core frontend structures, cutting compiled code bundle size by 40% using lazy loading.'
        ]
      },
      {
        company: 'Apptunix',
        role: 'Backend Intern (Node.js)',
        duration: 'February 2024 – May 2024',
        ordering: 2,
        currentlyWorking: false,
        technologies: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'Git', 'Agile Sprints', 'Postman'],
        achievements: [
          'Refactored and optimized 25+ internal business APIs, achieving a 20% improvement in endpoint response times.',
          'Contributed to the deployment of production-grade database querying modules, scaling concurrent user handling by 2x.',
          'Collaborated actively in agile sprints, CI/CD automated deployments, and comprehensive backend integration tests.'
        ]
      }
    ]);

    // 3. Seed Projects
    console.log('[Seeder] Seeding projects metadata...');
    await Project.create([
      {
        title: 'Vehicle Rental Marketplace',
        subtitle: 'Enterprise Booking Engine & SSR Platform',
        description: 'Engineered a scalable Angular-based rental marketplace with SSR, real-time WebSocket updates, dynamic onboarding flows, and modular architecture optimization for enterprise-scale operations.',
        role: 'Lead Frontend Engineer',
        technologies: ['Angular 20', 'RxJS', 'SSR', 'Socket.io', 'Node.js', 'Stripe', 'Firebase', 'Ngx-Charts'],
        src: './assets/projects/car-rental.jpg',
        link: 'https://github.com/Rajat47485thakur/car-rental-customer-app',
        featured: true,
        slug: 'vehicle-rental-marketplace',
        category: 'Web Application',
        seoTitle: 'Vehicle Rental Marketplace Case Study | Rajat Thakur',
        seoDescription: 'Angular 20 SSR rental booking system with WebSockets, dynamic payments integration, and optimized Ngx-Charts data visualizations.',
        stats: [
          { label: 'Booking Latency', value: '< 2s', icon: 'fas fa-bolt' },
          { label: 'SEO Score', value: '98/100', icon: 'fas fa-search' },
          { label: 'Event Latency', value: '100ms', icon: 'fas fa-sync' }
        ],
        features: [
          { title: 'Dynamic Search', description: 'Advanced filtering and selection system with real-time availability checks using RxJS.', icon: 'fas fa-search' },
          { title: 'Multi-Payment Gateway', description: 'Integrated Stripe and Xendit with automated deposit and refund pipelines.', icon: 'fas fa-credit-card' },
          { title: 'SEO Pre-Rendering', description: 'Server-Side Rendering (SSR) for instantaneous page loading and indexing.', icon: 'fas fa-globe' }
        ],
        challenges: [
          { problem: 'Handling double-booking race conditions during high-concurrency peak hours.', solution: 'Implemented optimistic UI updates and robust Socket.io locking mechanisms.' },
          { problem: 'Complex reactive state management for multi-step booking pipelines.', solution: 'Architected a centralized state store using RxJS BehaviorSubjects for persistent booking sessions.' }
        ],
        impact: [
          'Boosted overall booking conversion rates by 35% through UI/UX refinements.',
          'Reduced initial page load time by 60% utilizing Angular SSR and route lazy loading.',
          'Maintained 99.9% uptime for the real-time notification engine.'
        ],
        architecture: 'Event-Driven SSR Architecture with Angular Standalone Frontend, Node.js Backend, and Firebase Real-time DB.'
      },
      {
        title: 'E-commerce Services Admin Panel',
        subtitle: 'Scalable Merchant Onboarding & Order Core',
        description: 'A data-intensive administrative powerhouse designed to manage 50k+ inventory records and multi-merchant onboarding flows, cutting registration effort by 60%.',
        role: 'Associate Full-Stack Engineer',
        technologies: ['Angular 18', 'Node.js', 'MongoDB', 'RxJS', 'Angular Material', 'Express', 'JWT'],
        src: './assets/projects/e-com.png',
        link: 'https://github.com/Rajat47485thakur/ecommerce-web-panel',
        featured: false,
        slug: 'ecommerce-admin-platform',
        category: 'Admin Portal',
        seoTitle: 'E-commerce Merchant Dashboard Platform | Rajat Thakur',
        seoDescription: 'Data-intensive administration tool managing 50k+ merchant assets with virtual scrolling, dynamic forms validation, and RBAC.',
        stats: [
          { label: 'Records Handled', value: '50k+', icon: 'fas fa-database' },
          { label: 'Workflow Efficiency', value: '+45%', icon: 'fas fa-chart-line' },
          { label: 'API Response', value: '< 150ms', icon: 'fas fa-tachometer-alt' }
        ],
        features: [
          { title: 'Multi-Merchant Onboarding', description: 'Automated onboarding pipelines cutting merchant activation effort by 60%.', icon: 'fas fa-store' },
          { title: 'Dynamic Inventory Dashboards', description: 'Interactive data visualizations using Ngx-Charts for real-time inventory metrics.', icon: 'fas fa-chart-pie' },
          { title: 'RBAC Control Layers', description: 'Granular role-based permissions system with JWT-based secure authorization.', icon: 'fas fa-user-shield' }
        ],
        challenges: [
          { problem: 'Slow rendering of large inventory tables with 10k+ rows causing browser lag.', solution: 'Implemented Virtual Scrolling and optimized change detection strategies.' },
          { problem: 'Complex data relationships between merchants, products, and dynamic stocks.', solution: 'Designed a highly flexible NoSQL schema with MongoDB for rapid querying.' }
        ],
        impact: [
          'Automated 70% of manual inventory tracking tasks.',
          'Reduced data entry errors by 90% through dynamic form validations.',
          'Scaled the platform to handle 2x concurrent traffic without performance degradation.'
        ],
        architecture: 'Microservices-Ready modular architecture using Node/Express and Angular Standalone components.'
      },
      {
        title: 'Logistics & Fleet Control Dashboard',
        subtitle: 'Real-time Driver Dispatch & Map Cluster Engine',
        description: 'A high-stakes administrative hub for logistics and fleet operations, implementing real-time WebSockets, Google Maps custom clustering, and automated OCR driver verification.',
        role: 'Associate Software Engineer',
        technologies: ['Angular', 'Node.js', 'Socket.io', 'Google Maps API', 'Firebase', 'D3.js'],
        src: './assets/projects/panel-car-rental.jpg',
        link: 'https://github.com/Rajat47485thakur/car-rental-admin-panel',
        featured: true,
        slug: 'ride-hailing-dashboard',
        category: 'Admin Portal',
        seoTitle: 'Logistics Fleet Control Platform | Rajat Thakur',
        seoDescription: 'WebSocket dispatch core with Google Maps cluster indexes and D3.js data layers tracking active transport vehicles.',
        stats: [
          { label: 'Active Fleet', value: '2k+', icon: 'fas fa-car' },
          { label: 'Dispatch Efficiency', value: '+25%', icon: 'fas fa-location-arrow' },
          { label: 'Daily Transactions', value: '10k+', icon: 'fas fa-calendar-check' }
        ],
        features: [
          { title: 'Live Fleet Clustering', description: 'Interactive map modules using Google Maps marker clustering for high-density vehicle tracking.', icon: 'fas fa-map-marked-alt' },
          { title: 'Surge Pricing Engine', description: 'Dynamic algorithm-based rate adjustments for surge pricing based on real-time demand.', icon: 'fas fa-dollar-sign' },
          { title: 'Automated OCR Audit', description: 'Automated driver documentation verification using OCR, cutting review overhead by 40%.', icon: 'fas fa-id-card' }
        ],
        challenges: [
          { problem: 'WebSocket reconnection failure for drivers in low-bandwidth signal areas.', solution: 'Developed a robust client-side retry strategy with offline queue caching.' },
          { problem: 'High-frequency coordinate updates causing browser painting and lag.', solution: 'Throttled coordinates data stream and rendered custom canvas layers.' }
        ],
        impact: [
          'Improved active driver dispatch efficiency by 25%.',
          'Reduced fleet management manual tracking overhead by 40%.',
          'Enabled real-time, tamper-proof revenue metrics reporting.'
        ],
        architecture: 'Event-driven architecture with Socket.io and Redis adapters for bi-directional live coordination.'
      }
    ]);

    // 4. Seed Skills
    console.log('[Seeder] Seeding tech skills registry...');
    await Skill.create([
      { name: 'Angular', icon: './assets/technologies/angular.png', proficiency: 95, category: 'Frontend', ordering: 1 },
      { name: 'Typescript', icon: './assets/technologies/ts.png', proficiency: 90, category: 'Frontend', ordering: 2 },
      { name: 'Javascript', icon: './assets/technologies/js.png', proficiency: 90, category: 'Frontend', ordering: 3 },
      { name: 'HTML', icon: './assets/technologies/html.png', proficiency: 95, category: 'Frontend', ordering: 4 },
      { name: 'CSS', icon: './assets/technologies/css.png', proficiency: 90, category: 'Frontend', ordering: 5 },
      { name: 'Bootstrap', icon: './assets/technologies/bootstrap.png', proficiency: 95, category: 'Frontend', ordering: 6 },
      { name: 'TailwindCSS', icon: './assets/technologies/tailwind.png', proficiency: 85, category: 'Frontend', ordering: 7 },
      { name: 'Node.js', icon: './assets/technologies/node.png', proficiency: 85, category: 'Backend', ordering: 8 },
      { name: 'Express', icon: './assets/technologies/express.png', proficiency: 85, category: 'Backend', ordering: 9 },
      { name: 'MongoDB', icon: './assets/technologies/mongo.png', proficiency: 80, category: 'Database', ordering: 10 },
      { name: 'MySQL', icon: './assets/technologies/mysql.png', proficiency: 75, category: 'Database', ordering: 11 },
      { name: 'GIT', icon: './assets/technologies/git.png', proficiency: 90, category: 'Development Tools', ordering: 12 }
    ]);

    // 5. Seed Settings
    console.log('[Seeder] Seeding branding configurations...');
    await Settings.create({
      portfolioTitle: 'Rajat Thakur',
      heroText: 'Software Engineer | Angular & Node.js Specialist',
      aboutMarkdown: 'Building scalable, SEO-optimized, and real-time enterprise web applications using modern Angular (v14-20), SSR, Node.js, and WebSockets.',
      profileImageUrl: 'assets/profile.png',
      resumePdfUrl: 'assets/Rajat_Thakur_2Y_Experience_Angular_Nodejs_Developer.pdf',
      socialLinks: {
        linkedin: 'https://www.linkedin.com/in/rajat-thakur-226b14223/',
        github: 'https://github.com/Rajat47485thakur',
        twitter: ''
      },
      themeColors: {
        primary: '#0d1117',
        accent: '#00f2fe'
      }
    });

    // 6. Seed SEO
    console.log('[Seeder] Seeding default SEO indexing parameters...');
    await SEO.create({
      globalTitle: 'Rajat Thakur | Enterprise Angular & Node.js Software Engineer',
      globalDescription: 'Software Engineer with 2 years of experience building high-performance, real-time web applications using Angular 14-20, SSR, Node.js, WebSockets, and scalable frontend architectures.',
      keywords: ['Rajat Thakur', 'Angular Developer', 'Angular SSR', 'Software Engineer', 'Frontend Engineer', 'Full Stack Developer', 'Node.js', 'WebSockets', 'Socket.io', 'Express', 'RxJS', 'Enterprise Admin Platforms', 'Real-time dashboards', 'Web Performance'],
      canonicalUrl: 'https://rajatthakur.dev',
      openGraphImage: 'assets/profile.png'
    });

    console.log('[Seeder] Database seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error(`[Seeder Error] Failed: ${error.message}`);
    process.exit(1);
  }
};

seedData();
