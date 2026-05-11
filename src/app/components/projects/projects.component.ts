import { Component } from '@angular/core';
import { NgClass, NgForOf } from "@angular/common";
import { ProjectItemComponent } from "./project-item/project-item.component";

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  src: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ProjectItemComponent,
    NgForOf,
    NgClass
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  protected projects: Project[] = [
    {
      name: 'My Portfolio',
      description: 'Feel free to check out the code for my portfolio on Github. It\'s open for exploration, and you\'re welcome to fork it and create your own version!',
      technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'Bootstrap', 'Netlify', 'Github Actions'],
      src: './assets/projects/portfolio.png',
      link: 'https://github.com/Rajat47485thakur/Portfolio-Rajat-Thakur',
    },
    {
      name: 'Vehicle Rental Marketplace',
      description: 'Developed a high-performance web marketplace for vehicle rentals. Delivered fully SEO-friendly pages using Angular SSR, alongside real-time KPI dashboards utilizing ngx-charts and WebSockets.',
      technologies: ['Angular 20', 'RxJS', 'Node.js', 'Express.js', 'Socket.io', 'Stripe', 'SSR', 'Firebase'],
      src: './assets/projects/car-rental.jpg',
      link: 'https://github.com/Rajat47485thakur/car-rental-customer-app', 
    },
    {
      name: 'E-commerce & Rental Services Admin Platform',
      description: 'Programmed a highly scalable, data-intensive admin interface capable of tracking thousands of real-time inventory records. Automated workflows using dynamic routing and reactive forms.',
      technologies: ['Angular 18', 'Node.js', 'MongoDB', 'RxJS', 'Angular Material'],
      src: './assets/projects/e-com.png',
      link: 'https://github.com/Rajat47485thakur/ecommerce-web-panel',
    },
    {
      name: 'Ride-Hailing & Logistics Admin Dashboard',
      description: 'Directed the comprehensive Angular-based admin panel for a taxi and parcel delivery platform. Constructed dynamic pricing modules and implemented real-time driver tracking and revenue monitoring.',
      technologies: ['Angular', 'Node.js', 'Socket.io', 'Firebase', 'Google Maps API'],
      src: './assets/projects/panel-car-rental.jpg',
      link: 'https://github.com/Rajat47485thakur/car-rental-admin-panel',
    },
  ];
}
