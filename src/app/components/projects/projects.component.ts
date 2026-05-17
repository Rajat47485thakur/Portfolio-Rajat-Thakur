import { Component, OnInit } from '@angular/core';
import { NgClass, NgForOf } from "@angular/common";
import { ProjectItemComponent } from "./project-item/project-item.component";
import { Project, ProjectService } from '../../services/project.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ProjectItemComponent,
    NgForOf,
    NgClass,
    ScrollRevealDirective
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {

  protected projects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe({
      next: (projs) => {
        this.projects = projs.map(p => ({
          ...p,
          name: p.title,
          id: p.slug // Map slug to id dynamically for details URL routing
        }));
      },
      error: (err) => console.error('Failed to load projects list', err)
    });
  }
}
