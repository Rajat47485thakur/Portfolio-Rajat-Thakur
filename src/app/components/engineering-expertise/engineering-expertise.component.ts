import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface ExpertiseItem {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  techs: string[];
}

@Component({
  selector: 'app-engineering-expertise',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './engineering-expertise.component.html',
  styleUrl: './engineering-expertise.component.scss'
})
export class EngineeringExpertiseComponent {
  expertiseList: ExpertiseItem[] = [
    {
      title: 'Angular SSR & SEO Optimization',
      subtitle: 'Server-Side Rendering / Pre-rendering',
      description: 'Implementing high-performance Server-Side Rendering (SSR) for instantaneous page loads, complete search crawler indexing, dynamic structured data, and rich social sharing previews.',
      icon: 'fas fa-globe-americas',
      techs: ['Angular SSR', 'Dynamic Meta Service', 'JSON-LD Schema', 'Lighthouse Optimization']
    },
    {
      title: 'Scalable Frontend Architecture',
      subtitle: 'Reactive Standalone Engineering',
      description: 'Designing highly decoupled frontend applications using standalone components, strict route guards, centralized HTTP interceptors, reusable UI modules, and reactive RxJS state management.',
      icon: 'fas fa-cubes',
      techs: ['Standalone Engine', 'RxJS BehaviorSubjects', 'Guards & Interceptors', 'Modular Design']
    },
    {
      title: 'Real-Time Systems & Maps',
      subtitle: 'Bi-directional Event Streaming',
      description: 'Developing low-latency real-time applications integrating Socket.io WebSockets, live Google Maps tracking with customized marker clustering, and interactive live admin data dashboards.',
      icon: 'fas fa-sync-alt',
      techs: ['Socket.io', 'Google Maps API', 'Firebase Messaging', 'Ngx-Charts']
    },
    {
      title: 'Security & Access Control',
      subtitle: 'JWT & Role-Based UI Guarding',
      description: 'Securing administrative and consumer products with JWT authorization workflows, automatic silent token refresh interceptors, and strict Role-Based Access Control (RBAC) frontend rendering.',
      icon: 'fas fa-user-shield',
      techs: ['JWT Auth Workflows', 'RBAC Control Layers', 'Silent Token Refresh', 'HTTPS Interceptors']
    },
    {
      title: 'Performance Engineering',
      subtitle: 'Data Grid Scalability',
      description: 'Tuning complex data-dense grids handling 10k+ active order/inventory items using Virtual Scrolling, OnPush change detection strategies, and lazy-loading route bundles.',
      icon: 'fas fa-tachometer-alt',
      techs: ['Virtual Scrolling', 'OnPush Strategy', 'Lazy Loading', 'Bundle Splitting']
    }
  ];
}
