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
      subtitle: 'B2C High-Performance Booking Engine',
      description: 'A comprehensive, high-performance marketplace for vehicle rentals, featuring real-time availability, SEO-optimized listings, and secure multi-gateway payments.',
      role: 'Lead Frontend Engineer',
      technologies: ['Angular 20', 'RxJS', 'SSR', 'Socket.io', 'Node.js', 'Stripe', 'Firebase', 'Ngx-Charts'],
      src: './assets/projects/car-rental.jpg',
      link: 'https://github.com/Rajat47485thakur/car-rental-customer-app',
      stats: [
        { label: 'Booking Speed', value: '< 2s', icon: 'fas fa-bolt' },
        { label: 'SEO Score', value: '98/100', icon: 'fas fa-search' },
        { label: 'Real-time Updates', value: '100ms', icon: 'fas fa-sync' }
      ],
      features: [
        { title: 'Dynamic Search', description: 'Advanced filtering system with real-time availability checks using RxJS.', icon: 'fas fa-search' },
        { title: 'Multi-Payment', description: 'Integrated Stripe and Xendit with automated refund and deposit handling.', icon: 'fas fa-credit-card' },
        { title: 'SEO Optimized', description: 'Server-Side Rendering (SSR) for lightning-fast indexing and social sharing.', icon: 'fas fa-globe' }
      ],
      challenges: [
        { problem: 'Handling race conditions during peak booking hours.', solution: 'Implemented optimistic UI updates and robust Socket.io locking mechanisms.' },
        { problem: 'Complex state management for multi-step rental flows.', solution: 'Architected a reactive state store using RxJS BehaviorSubjects for seamless data persistence.' }
      ],
      impact: [
        'Increased booking conversion rates by 35% through UI/UX refinements.',
        'Reduced initial page load time by 60% using Angular SSR and lazy loading.',
        'Maintained 99.9% uptime for the real-time notification engine.'
      ],
      architecture: 'N-Tier Architecture with Angular Frontend, Node.js Backend, and Firebase Real-time DB.'
    },
    {
      id: 'ecommerce-admin-platform',
      name: 'E-commerce Admin Platform',
      subtitle: 'Scalable Inventory & Order Management',
      description: 'A data-intensive administrative powerhouse designed to manage thousands of products, orders, and real-time inventory records with precision.',
      role: 'Full Stack Developer',
      technologies: ['Angular 18', 'Node.js', 'MongoDB', 'RxJS', 'Angular Material', 'Express', 'JWT'],
      src: './assets/projects/e-com.png',
      link: 'https://github.com/Rajat47485thakur/ecommerce-web-panel',
      stats: [
        { label: 'Records Managed', value: '50k+', icon: 'fas fa-database' },
        { label: 'Workflow Efficiency', value: '+45%', icon: 'fas fa-chart-line' },
        { label: 'Latency', value: '< 150ms', icon: 'fas fa-tachometer-alt' }
      ],
      features: [
        { title: 'Inventory Sync', description: 'Real-time synchronization across multiple storefronts with conflict resolution.', icon: 'fas fa-boxes' },
        { title: 'Dynamic Dashboards', description: 'Highly interactive data visualizations using Ngx-Charts for sales analytics.', icon: 'fas fa-chart-pie' },
        { title: 'Role-Based Access', description: 'Granular permissions system with JWT-based secure authentication.', icon: 'fas fa-user-shield' }
      ],
      challenges: [
        { problem: 'Slow rendering of large inventory tables with 10k+ rows.', solution: 'Implemented Virtual Scrolling and specialized change detection strategies.' },
        { problem: 'Complex data relationships between products, variants, and stock.', solution: 'Designed a highly flexible NoSQL schema with MongoDB for rapid querying.' }
      ],
      impact: [
        'Automated 70% of manual inventory tracking tasks.',
        'Reduced data entry errors by 90% through dynamic form validation.',
        'Scaled the platform to handle 3x more traffic without performance degradation.'
      ],
      architecture: 'Microservices-ready architecture using Node/Express and Angular Standalone components.'
    },
    {
      id: 'ride-hailing-dashboard',
      name: 'Logistics & Fleet Dashboard',
      subtitle: 'Real-time Driver & Revenue Monitoring',
      description: 'A high-stakes administrative hub for ride-hailing and parcel delivery services, focused on real-time tracking and dynamic pricing modules.',
      role: 'Senior Angular Engineer',
      technologies: ['Angular', 'Node.js', 'Socket.io', 'Google Maps API', 'Firebase', 'D3.js'],
      src: './assets/projects/panel-car-rental.jpg',
      link: 'https://github.com/Rajat47485thakur/car-rental-admin-panel',
      stats: [
        { label: 'Active Drivers', value: '2k+', icon: 'fas fa-car' },
        { label: 'Track Accuracy', value: '99%', icon: 'fas fa-location-arrow' },
        { label: 'Daily Orders', value: '10k+', icon: 'fas fa-calendar-check' }
      ],
      features: [
        { title: 'Live Fleet Tracking', description: 'Interactive maps with real-time driver positioning and heatmaps.', icon: 'fas fa-map-marked-alt' },
        { title: 'Dynamic Pricing', description: 'Algorithm-based rate adjustment module for surge pricing and promotions.', icon: 'fas fa-dollar-sign' },
        { title: 'Doc Verification', description: 'Automated OCR-based system for verifying driver licenses and insurance.', icon: 'fas fa-id-card' }
      ],
      challenges: [
        { problem: 'WebSocket connection drops in low-bandwidth areas for drivers.', solution: 'Developed a robust reconnection strategy with offline data syncing.' },
        { problem: 'High-frequency map updates causing browser performance lag.', solution: 'Throttled position updates and utilized Canvas API for custom map markers.' }
      ],
      impact: [
        'Improved driver dispatch efficiency by 25%.',
        'Reduced fleet management overhead by 40%.',
        'Enabled real-time revenue transparency for platform owners.'
      ],
      architecture: 'Event-driven architecture with Socket.io for bi-directional real-time communication.'
    }
  ];

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectById(id: string): Project | undefined {
    return this.projects.find(p => p.id === id);
  }
}
