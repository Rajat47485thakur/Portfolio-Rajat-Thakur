import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface Milestone {
  role: string;
  company: string;
  period: string;
  highlights: string[];
  skills: string[];
}

@Component({
  selector: 'app-professional-experience',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './professional-experience.component.html',
  styleUrl: './professional-experience.component.scss'
})
export class ProfessionalExperienceComponent {
  milestones: Milestone[] = [
    {
      role: 'Associate Software Engineer (Full-Stack)',
      company: 'Rebuild Technologies',
      period: 'June 2024 – Present',
      highlights: [
        'Led frontend module development for a scalable rental management admin platform including SSR integration, reusable architecture patterns, and real-time operational dashboards.',
        'Developed and maintained 30+ RESTful APIs using Node.js, Express.js, and MongoDB, cutting backend latency by 25%.',
        'Architected JWT secure authentication and Role-Based Access Control (RBAC), reducing unauthorized incidents by over 90%.',
        'Integrated Google Maps Location Services and Socket.io WebSockets, increasing live driver tracking visibility by 50%.',
        'Refactored 60% of legacy core frontend structures, cutting compiled code bundle size by 40% using lazy loading.'
      ],
      skills: ['Angular 18/20', 'SSR', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Google Maps API', 'RxJS', 'JWT']
    },
    {
      role: 'Backend Intern (Node.js)',
      company: 'Apptunix',
      period: 'February 2024 – May 2024',
      highlights: [
        'Refactored and optimized 25+ internal business APIs, achieving a 20% improvement in endpoint response times.',
        'Contributed to the deployment of production-grade database querying modules, scaling concurrent user handling by 2x.',
        'Collaborated actively in agile sprints, CI/CD automated deployments, and comprehensive backend integration tests.'
      ],
      skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'Git', 'Agile Sprints', 'Postman']
    }
  ];
}
