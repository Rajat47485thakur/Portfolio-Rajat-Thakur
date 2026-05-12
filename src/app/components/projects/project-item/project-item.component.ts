import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Project } from '../../../services/project.service';

@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './project-item.component.html',
  styleUrl: '../projects.component.scss'
})
export class ProjectItemComponent {
  @Input({required: true}) project!: Project;
}
