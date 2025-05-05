import { Component } from '@angular/core';
import { ViewportScroller } from "@angular/common";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  constructor(private viewportScroller: ViewportScroller) { }

  scrollTo(section: string) {
    this.viewportScroller.scrollToAnchor(section);
  }

  openResume() {
    window.open("./assets/Rajat Thakur MEAN Full Stack Dev 1year of Exp.pdf");
  }

  goToLinkedin() {
    window.open('https://www.linkedin.com/in/rajat-thakur-226b14223/', '_blank');
  }

  goToGithub() {
    window.open('https://github.com/Rajat47485thakur', '_blank');
  }
}
