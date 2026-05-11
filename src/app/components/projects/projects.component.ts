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
      name: 'E-commerce Services Admin Panel',
      description: 'Built a modular, scalable dashboard for managing 1000+ records (products, orders). Integrated multi-merchant onboarding for service businesses, cutting registration effort by 60%.',
      technologies: ['Angular 18', 'Node.js', 'MongoDB', 'TypeScript', 'SCSS'],
      src: './assets/projects/e-com.png',
      link: 'https://github.com/Rajat47485thakur/ecommerce-web-panel',
    },
    {
      name: 'Bike Rental Web App',
      description: 'Developed frontend flow and real-time KPI dashboards. Reduced booking time by 40% and tracked 10+ performance metrics via live dashboards. Implemented seamless payments via Xendit.',
      technologies: ['Angular 19', 'RxJS', 'ngx-toastr', 'ngx-charts', 'Xendit API'],
      src: './assets/projects/car-rental.jpg',
      link: 'https://github.com/Rajat47485thakur/car-rental-customer-app', 
    },
    {
      name: 'Admin Dashboard UI for Car Rentals',
      description: 'Focused on dashboard UI development and live vehicle tracking. Increased workflow accuracy by 35% through advanced role-based control layers and live analytics.',
      technologies: ['Angular', 'SCSS', 'Angular Material', 'Socket.IO', 'Chart.js'],
      src: './assets/projects/panel-car-rental.jpg',
      link: 'https://github.com/Rajat47485thakur/car-rental-admin-panel',
    },
  ];
}
