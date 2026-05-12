import { Component, EventEmitter, Output } from '@angular/core';
import { ViewportScroller } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-links',
  standalone: true,
  imports: [],
  templateUrl: './nav-links.component.html',
  styleUrl: './nav-links.component.scss'
})
export class NavLinksComponent {
  @Output() closeAsideEvent = new EventEmitter<void>();

  constructor(private viewportScroller: ViewportScroller, private router: Router) { }

  protected navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ];

  scrollTo(elementId: string) {
    if (this.router.url !== '/' && this.router.url !== '/home') {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          const element = document.getElementById(elementId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
      });
    } else {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }


  triggerCloseAside() {
    this.closeAsideEvent.emit();
  }
}
