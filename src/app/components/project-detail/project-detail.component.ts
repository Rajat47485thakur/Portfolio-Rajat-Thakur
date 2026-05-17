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
      this.projectService.getProjectById(id).subscribe({
        next: (proj) => {
          this.project = {
            ...proj,
            name: proj.title // Dynamic backward-compatibility mapping
          };
          if (this.project) {
            // Set dynamic meta and title for case studies
            this.seoService.generateTags({
              title: `${this.project.title} | Rajat Thakur Case Study`,
              description: this.project.description,
              keywords: `Rajat Thakur, ${this.project.title}, Case Study, ${this.project.role}, ${this.project.technologies.join(', ')}`,
              slug: `project/${id}`
            });
          }
        },
        error: (err) => console.error('Failed to load project details', err)
      });
    }
  }

  goBack(): void {
    this.location.back();
  }
}
