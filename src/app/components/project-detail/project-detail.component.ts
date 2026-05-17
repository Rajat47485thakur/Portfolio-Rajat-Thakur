import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { ProjectService, Project } from '../../services/project.service';
import { SeoService } from '../../services/seo.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, ScrollRevealDirective],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent implements OnInit {
  project: Project | undefined;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private location: Location,
    private seoService: SeoService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.project = this.projectService.getProjectById(id);
      if (this.project) {
        // Set dynamic meta and title for case studies
        this.seoService.generateTags({
          title: `${this.project.name} | Rajat Thakur Case Study`,
          description: this.project.description,
          keywords: `Rajat Thakur, ${this.project.name}, Case Study, ${this.project.role}, ${this.project.technologies.join(', ')}`,
          slug: `project/${this.project.id}`
        });
      }
    }
  }

  goBack(): void {
    this.location.back();
  }
}
