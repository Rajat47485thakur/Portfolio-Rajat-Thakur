import { Component, EventEmitter, Output } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-links',
  standalone: true,
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.scss']
})
export class NavLinksComponent {
  @Output() closeAsideEvent = new EventEmitter<void>();

  protected navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Expertise', id: 'expertise' },
    { label: 'Experience', id: 'timeline' },
    { label: 'Skills', id: 'skill-set' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ];

  constructor(
    private viewportScroller: ViewportScroller,
    private router: Router
  ) {}

  scrollTo(elementId: string): void {
    if (elementId === 'contact') {
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
          this.viewportScroller.scrollToAnchor(elementId);
        }, 150);
      });
    } else {
      this.viewportScroller.scrollToAnchor(elementId);
    }
  }

  triggerCloseAside(): void {
    this.closeAsideEvent.emit();
  }
}
