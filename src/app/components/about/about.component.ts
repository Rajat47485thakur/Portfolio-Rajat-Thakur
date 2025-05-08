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

    const screenWidth = window.innerWidth;
    const rootMarginValue = screenWidth <= 600 ? '0px 0px 900px 0px' : '0px 0px 200px 0px';
    

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        this.isInView = entry.isIntersecting;
      });
    }, {
      threshold: 0,
      rootMargin: rootMarginValue
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
