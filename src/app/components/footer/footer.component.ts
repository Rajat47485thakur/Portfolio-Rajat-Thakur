import { Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html'
})
export class FooterComponent {

  constructor(
    private viewportScroller: ViewportScroller,
    private router: Router
  ) {}

  getCurrentYear() {
    return new Date().getFullYear();
  }

  scrollTo(id: string) {
    if (id === 'contact') {
      if (this.router.url === '/contact') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        this.router.navigate(['/contact']).then(() => {
          window.scrollTo({ top: 0 });
        });
      }
      return;
    }

    // Check if current route is not home page
    if (this.router.url !== '/' && !this.router.url.startsWith('/#')) {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(id);
        }, 150);
      });
    } else {
      this.viewportScroller.scrollToAnchor(id);
    }
  }
}
