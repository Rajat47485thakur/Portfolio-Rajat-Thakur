import { Component, OnInit } from '@angular/core';
import { NgOptimizedImage, CommonModule } from "@angular/common";
import { HttpClient } from '@angular/common/http';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface ExperienceItem {
  name: string;
  src: string;
  index?: number;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  imports: [
    NgOptimizedImage,
    CommonModule,
    ScrollRevealDirective
  ],
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {

  experienceItems: ExperienceItem[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:5000/api/skills').subscribe({
      next: (skills) => {
        this.experienceItems = skills.map(s => ({
          name: s.name,
          src: s.icon // Matches asset image paths
        }));
      },
      error: (err) => {
        console.error('Failed to load dynamic skills ticker', err);
        // Offline-safe local fallback
        this.experienceItems = [
          { name: "HTML", src: "./assets/technologies/html.png" },
          { name: "CSS", src: "./assets/technologies/css.png" },
          { name: "Bootstrap", src: "./assets/technologies/bootstrap.png" },
          { name: "TailwindCSS", src: "./assets/technologies/tailwind.png" },
          { name: "Javascript", src: "./assets/technologies/js.png" },
          { name: "Typescript", src: "./assets/technologies/ts.png" },
          { name: "Angular", src: "./assets/technologies/angular.png" },
          { name: "Node.js", src: "./assets/technologies/node.png" },
          { name: "Express", src: "./assets/technologies/express.png" },
          { name: "MongoDB", src: "./assets/technologies/mongo.png" },
          { name: "MySQL", src: "./assets/technologies/mysql.png" },
          { name: "GIT", src: "./assets/technologies/git.png" }
        ];
      }
    });
  }

  // needed to create an infinite-like scroll effect
  get getExperience(): ExperienceItem[] {
    if (!this.experienceItems || this.experienceItems.length === 0) return [];
    return Array.from({ length: 10 }, (_, i: number) =>
      this.experienceItems.map((item: ExperienceItem, index: number) => ({
        ...item, index: i * this.experienceItems.length + index
      }))
    ).flat();
  }

}
