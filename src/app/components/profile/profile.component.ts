import { Component } from '@angular/core';
import { ViewportScroller, NgOptimizedImage } from "@angular/common";
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ScrollRevealDirective, NgOptimizedImage],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  constructor(private viewportScroller: ViewportScroller) { }

  scrollTo(section: string) {
    this.viewportScroller.scrollToAnchor(section);
  }

  openResume() {
    window.open("./assets/Rajat_Thakur_2Y_Experience_Angular_Nodejs_Developer.pdf");
  }

  goToLinkedin() {
    window.open('https://www.linkedin.com/in/rajat-thakur-226b14223/', '_blank');
  }

  goToGithub() {
    window.open('https://github.com/Rajat47485thakur', '_blank');
  }
}
