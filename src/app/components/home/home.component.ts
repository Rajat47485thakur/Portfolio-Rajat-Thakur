import { Component, OnInit } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { AboutComponent } from '../about/about.component';
import { EngineeringExpertiseComponent } from '../engineering-expertise/engineering-expertise.component';
import { ProfessionalExperienceComponent } from '../professional-experience/professional-experience.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ProfileComponent, 
    AboutComponent, 
    EngineeringExpertiseComponent,
    ProfessionalExperienceComponent,
    ExperienceComponent, 
    ProjectsComponent, 
    ContactComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.generateTags({
      title: 'Rajat Thakur | Enterprise Angular & Node.js Software Engineer',
      description: 'Software Engineer with 2 years of experience building high-performance, real-time web applications using Angular 14-20, SSR, Node.js, WebSockets, and scalable frontend architectures.',
      keywords: 'Rajat Thakur, Angular Developer, Angular SSR, Software Engineer, Frontend Engineer, Node.js, WebSockets, Socket.io, RxJS, JWT, RBAC, Web Performance, SaaS Dashboards',
      slug: ''
    });
  }
}
