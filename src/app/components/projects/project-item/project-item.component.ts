import {Component, Input} from '@angular/core';
import {RouterModule} from '@angular/router';
import {Project} from '../../../services/project.service';

@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './project-item.component.html',
  styleUrl: '../projects.component.scss'
})
export class ProjectItemComponent {
  @Input({required: true}) project!: Project;
}
