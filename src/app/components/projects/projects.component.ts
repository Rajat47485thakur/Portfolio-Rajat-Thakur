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
      name: 'Ecommerce Web Panel',
      description: 'Built with Angular 18, this full-stack eCommerce admin and customer panel lets customers browse and purchase products added by admins acting as merchants. It integrates both MongoDB and SQL for flexible data handling and scalable architecture.',
      technologies: ['Angular 18', 'TypeScript', 'HTML', 'SCSS', 'MongoDB', 'SQL', 'Node.js', 'Express'],
      src: './assets/projects/ecom.png',
      link: 'https://github.com/yourusername/ecommerce-web-panel', // replace with your actual repo link
    },

    {
      name: 'Car Rental Web App (Customer)',
      description: 'A responsive car rental application where customers can browse and book vehicles listed by registered hosts. Includes a guest flow for exploring listings and a secure booking flow for registered users, built with modern web technologies.',
      technologies: ['Angular 19', 'TypeScript', 'HTML', 'SCSS', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      src: './assets/projects/car-rental.png',
      link: 'https://github.com/yourusername/car-rental-customer-app', // Replace with actual GitHub link
    },
    {
      name: 'Car Rental Admin Panel',
      description: 'Admin dashboard for a car rental platform where administrators can monitor all bookings, manage available vehicles, hosts, and customers, and verify the authenticity of users to ensure smooth and secure business operations.',
      technologies: ['Angular 14', 'TypeScript', 'HTML', 'SCSS', 'Node.js', 'Express', 'MongoDB', 'SQL'],
      src: './assets/projects/car-rental-admin.png',
      link: 'https://github.com/yourusername/car-rental-admin-panel', // Replace with actual GitHub link
    },
  ];
}
