import { Injectable } from '@angular/core';

export interface ProjectFeature {
  title: string;
  description: string;
  icon: string;
}

export interface ProjectChallenge {
  problem: string;
  solution: string;
}

export interface ProjectStat {
  label: string;
  value: string;
  icon: string;
}

export interface Project {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  role: string;
  technologies: string[];
  src: string;
  link: string;
  features: ProjectFeature[];
  challenges: ProjectChallenge[];
  impact: string[];
  stats: ProjectStat[];
  architecture?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projects: Project[] = [
    {
      id: 'vehicle-rental-marketplace',
      name: 'Vehicle Rental Marketplace',
      subtitle: 'Enterprise Booking Engine & SSR Platform',
      description: 'Engineered a scalable Angular-based rental marketplace with SSR, real-time WebSocket updates, dynamic onboarding flows, and modular architecture optimization for enterprise-scale operations.',
      role: 'Lead Frontend Engineer',
      technologies: ['Angular 20', 'RxJS', 'SSR', 'Socket.io', 'Node.js', 'Stripe', 'Firebase', 'Ngx-Charts'],
      src: './assets/projects/car-rental.jpg',
      link: 'https://github.com/Rajat47485thakur/car-rental-customer-app',
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
      id: 'ecommerce-admin-platform',
      name: 'E-commerce Services Admin Panel',
      subtitle: 'Scalable Merchant Onboarding & Order Core',
      description: 'A data-intensive administrative powerhouse designed to manage 50k+ inventory records and multi-merchant onboarding flows, cutting registration effort by 60%.',
      role: 'Associate Full-Stack Engineer',
      technologies: ['Angular 18', 'Node.js', 'MongoDB', 'RxJS', 'Angular Material', 'Express', 'JWT'],
      src: './assets/projects/e-com.png',
      link: 'https://github.com/Rajat47485thakur/ecommerce-web-panel',
      stats: [
        { label: 'Records Handled', value: '50k+', icon: 'fas fa-database' },
        { label: 'Workflow Efficiency', value: '+45%', icon: 'fas fa-chart-line' },
        { label: 'API Response', value: '< 150ms', icon: 'fas fa-tachometer-alt' }
      ],
      features: [
        { title: 'Multi-Merchant Registry', description: 'Automated onboarding pipelines cutting merchant activation effort by 60%.', icon: 'fas fa-store' },
        { title: 'Dynamic Dashboards', description: 'Interactive data visualizations using Ngx-Charts for real-time inventory metrics.', icon: 'fas fa-chart-pie' },
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
      id: 'ride-hailing-dashboard',
      name: 'Logistics & Fleet Control Dashboard',
      subtitle: 'Real-time Driver Dispatch & Map Cluster Engine',
      description: 'A high-stakes administrative hub for logistics and fleet operations, implementing real-time WebSockets, Google Maps custom clustering, and automated OCR driver verification.',
      role: 'Associate Software Engineer',
      technologies: ['Angular', 'Node.js', 'Socket.io', 'Google Maps API', 'Firebase', 'D3.js'],
      src: './assets/projects/panel-car-rental.jpg',
      link: 'https://github.com/Rajat47485thakur/car-rental-admin-panel',
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
  ];

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectById(id: string): Project | undefined {
    return this.projects.find(p => p.id === id);
  }
}
