import { Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";

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
    NgOptimizedImage
  ],
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  private experienceItems: ExperienceItem[] = [
    // {name: "Java", src: "./assets/technologies/java.png"},
    // {name: "Spring Boot", src: "./assets/technologies/spring-boot.png"},
    // {name: "Kafka", src: "./assets/technologies/kafka.png"},
    // {name: "PostgreSQL", src: "./assets/technologies/postgresql.png"},
    // {name: "Redis", src: "./assets/technologies/redis.png"},
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

    // {name: "React", src: "./assets/technologies/react.png"},
    // {name: "Next.js", src: "./assets/technologies/next.png"},
    // {name: "Kubernetes", src: "./assets/technologies/kubernetes.png"},
    // {name: "Docker", src: "./assets/technologies/docker.png"},
    // {name: "GCP", src: "./assets/technologies/gcp.png"},
  ];

  // needed to create an infinite-like scroll effect
  get getExperience(): ExperienceItem[] {
    return Array.from({ length: 10 }, (_, i: number) =>
      this.experienceItems.map((item: ExperienceItem, index: number) => ({
        ...item, index: i * this.experienceItems.length + index
      }))
    ).flat();
  }

}
