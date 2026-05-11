import { Injectable } from '@angular/core';

export interface Project {
  id: string;
  name: string;
  description: string;
  fullDescription: string[];
  technologies: string[];
  src: string;
  link: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projects: Project[] = [
    {
      id: 'vehicle-rental-marketplace',
      name: 'Vehicle Rental Marketplace',
      description: 'Developed a high-performance web marketplace for vehicle rentals. Delivered fully SEO-friendly pages using Angular SSR, alongside real-time KPI dashboards utilizing ngx-charts and WebSockets.',
      fullDescription: [
        'Developed a high-performance web marketplace for vehicle rentals, utilizing Angular 20 and RxJS operators to build seamless user journeys.',
        'Integrated robust API connections, handled complex authentication flows with Angular Interceptors, and implemented secure payment gateways using Stripe and Xendit.',
        'Delivered fully SEO-friendly pages using Angular SSR, alongside real-time KPI dashboards utilizing ngx-charts and WebSockets.'
      ],
      technologies: ['Angular 20', 'RxJS', 'Node.js', 'Express.js', 'Socket.io', 'Stripe', 'SSR', 'Firebase'],
      src: './assets/projects/car-rental.jpg',
      link: 'https://github.com/Rajat47485thakur/car-rental-customer-app', 
    },
    {
      id: 'ecommerce-admin-platform',
      name: 'E-commerce & Rental Services Admin Platform',
      description: 'Programmed a highly scalable, data-intensive admin interface capable of tracking thousands of real-time inventory records. Automated workflows using dynamic routing and reactive forms.',
      fullDescription: [
        'Programmed a highly scalable, data-intensive admin interface using Angular 18, capable of tracking thousands of real-time inventory records.',
        'Automated administrative workflows by leveraging dynamic routing, reactive forms, and seamless backend coordination.'
      ],
      technologies: ['Angular 18', 'Node.js', 'MongoDB', 'RxJS', 'Angular Material'],
      src: './assets/projects/e-com.png',
      link: 'https://github.com/Rajat47485thakur/ecommerce-web-panel',
    },
    {
      id: 'ride-hailing-dashboard',
      name: 'Ride-Hailing & Logistics Admin Dashboard',
      description: 'Directed the comprehensive Angular-based admin panel for a taxi and parcel delivery platform. Constructed dynamic pricing modules and implemented real-time driver tracking and revenue monitoring.',
      fullDescription: [
        'Directed the comprehensive Angular-based admin panel for a taxi and parcel delivery platform, enabling seamless management of drivers and fleet operations.',
        'Implemented administrative workflows including driver document verification, real-time platform performance tracking, and dynamic revenue monitoring.',
        'Constructed dynamic pricing modules, allowing administrators to configure rates seamlessly for passenger rides and parcel shipping deliveries.'
      ],
      technologies: ['Angular', 'Node.js', 'Socket.io', 'Firebase', 'Google Maps API'],
      src: './assets/projects/panel-car-rental.jpg',
      link: 'https://github.com/Rajat47485thakur/car-rental-admin-panel',
    },
  ];

  constructor() { }

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectById(id: string): Project | undefined {
    return this.projects.find(p => p.id === id);
  }
}
