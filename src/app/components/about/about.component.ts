import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements AfterViewInit {
  @ViewChild('aboutSection') aboutSection!: ElementRef;
  isInView: boolean = false;

  constructor() { }

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        this.isInView = entry.isIntersecting; // Toggle true/false every time it enters/leaves
      });
    }, {
      threshold: 0.0 // Adjust based on how much of the section must be visible
    });

    observer.observe(this.aboutSection.nativeElement);
  }

  getExperienceYears(): number {
    const startDate = new Date(2024, 2); // April 2021
    const currentDate = new Date();
    const years = currentDate.getFullYear() - startDate.getFullYear();
    const m = currentDate.getMonth() - startDate.getMonth();
    return m < 0 || (m === 0 && currentDate.getDate() < startDate.getDate()) ? years - 1 : years;
  }


}
